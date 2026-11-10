"""Check a static portfolio before upload. Uses only Python 3.9+'s standard library."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json
import re

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.references = []
        self.accessibility_references = []
        self.headings = 0
        self.projects = 0
        self.certificates = 0

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'h1':
            self.headings += 1
        if tag == 'article':
            classes = attrs.get('class', '').split()
            self.projects += 'project' in classes
            self.certificates += 'certificate' in classes
        if tag == 'img':
            assert 'alt' in attrs, 'Image missing alt attribute'
            assert attrs.get('width') and attrs.get('height'), 'Image dimensions missing'
        if tag == 'a' and attrs.get('target') == '_blank':
            assert 'noopener' in attrs.get('rel', ''), 'New-tab link needs noopener'
        for key in ('href', 'src'):
            if attrs.get(key):
                self.references.append(attrs[key])
        for key in ('aria-labelledby', 'aria-describedby', 'aria-controls'):
            self.accessibility_references.extend(attrs.get(key, '').split())


def check():
    for filename in ('index.html', 'maintenance.html'):
        path = ROOT / filename
        assert path.is_file(), f'Missing {filename}'
        page = Page()
        page.feed(path.read_text(encoding='utf-8'))
        assert len(page.ids) == len(set(page.ids)), f'Duplicate IDs in {filename}'
        assert page.headings == 1, f'Expected one h1 in {filename}'
        for reference in page.accessibility_references:
            assert reference in page.ids, f'Unknown accessibility target {reference}'
        for reference in page.references:
            url = urlsplit(reference)
            if url.scheme or url.netloc:
                continue
            if not url.path:
                assert url.fragment in page.ids, f'Unknown anchor {reference}'
                continue
            assert not url.path.startswith('/'), f'Use a relative project-site path: {reference}'
            target = (ROOT / unquote(url.path)).resolve()
            assert target.is_relative_to(ROOT), f'Path escapes the website: {reference}'
            assert target.is_file(), f'Missing local file: {reference}'
        if filename == 'index.html':
            assert page.projects == 7, 'Update this check if project count changes intentionally'
            assert page.certificates == 2, 'Update this check if certificate count changes intentionally'
            assert {'home', 'about', 'work', 'contact'} <= set(page.ids)
        print(f'PASS {filename}: local links, assets, IDs, image attributes, and headings')
    source = (ROOT / 'app.js').read_text(encoding='utf-8')
    match = re.search(r'const projectDetails = (.*?);\n\nconst projectFields', source, re.S)
    assert match, 'Project dialog data not found'
    details = json.loads(match.group(1))
    assert set(details) == {'1', '2', '3', '4', '5'}
    for item in details.values():
        assert item['summary'] and item['fields']
        if item['url']:
            assert urlsplit(item['url']).scheme == 'https'
    for filename in ('README.md', 'GITHUB-PAGES-SETUP.md', 'ASSETS.md',
                     'MAINTENANCE.md', 'RUBRIC-CHECKLIST.md', 'RESPONSIVE-TESTING.md'):
        assert (ROOT / filename).is_file(), f'Missing documentation: {filename}'
    print('PASS project data and required documentation')
    print('These checks do not render CSS, test external servers, or verify browsers/devices.')


if __name__ == '__main__':
    check()
