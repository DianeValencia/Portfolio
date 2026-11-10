/* Navigation and collection controls for Diane Valencia's portfolio. */
const menuButton = document.querySelector('.menu');
const navigation = document.getElementById('navigation');

function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});

// Collapse mobile navigation only after its controls are initialized.
document.documentElement.classList.add('js');

// Both collections are available without JavaScript; enhance with a filter.
const filterButtons = document.querySelectorAll('[data-filter]');
const collections = ['projects', 'certificates'];
const collectionStatus = document.getElementById('collection-status');

function selectCollection(collection) {
  filterButtons.forEach((button) => {
    const isSelected = button.dataset.filter === collection;
    button.classList.toggle('selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });

  collections.forEach((id) => {
    document.getElementById(id).hidden = id !== collection;
  });

  collectionStatus.textContent = collection === 'projects'
    ? 'Seven projects spanning web development, databases, AI, circuit simulation, and 3D design.'
    : 'Two earned credentials, plus ongoing study and hackathon participation.';
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => selectCollection(button.dataset.filter));
});
selectCollection('projects');

// Native dialogs support Escape, focus containment, and returning focus.
const projectDialog = document.getElementById('project-dialog');
const dialogTitle = document.getElementById('dialog-title');
const dialogSummary = document.getElementById('dialog-summary');

const projectDetails = {
  "1": {
    "title": "TenZ fan website",
    "summary": "A first-year school activity inspired by my favorite pro player and streamer, Tyson “TenZ” Ngo. I turned a personal interest into a multipage website about his story and career.",
    "fields": [
      [
        "Context",
        "For a first-year Web Systems and Technologies I activity, I chose TenZ as my subject because I already enjoyed following his career and streams."
      ],
      [
        "My contribution",
        "Created a fan website with separate pages for his biography, backstory, and profile, using a consistent layout and navigation."
      ],
      [
        "Tools & techniques",
        "HTML, CSS, and JavaScript; responsive Grid/Flexbox layouts, sidebar navigation, light/dark themes, and music controls."
      ],
      [
        "Learning focus",
        "Practicing how to structure related pages, organize information, style a consistent interface, and add interactive controls."
      ],
      [
        "Result",
        "A live, multipage fan website hosted on GitHub Pages."
      ]
    ],
    "url": "https://dianevalencia.github.io/Activity4_Web-Systems-and-Technologies-I/"
  },
  "2": {
    "title": "My first portfolio",
    "summary": "My final project for Web Systems and Technologies I: a personal portfolio built from scratch in Sublime Text. It brings my introduction, skills, and coursework into one website.",
    "fields": [
      [
        "Context",
        "Our final course project was to create a personal portfolio. I used it to bring together my introduction, quizzes, activities, and examinations."
      ],
      [
        "My contribution",
        "Wrote the original portfolio in Sublime Text using HTML, CSS, and JavaScript, without AI assistance or Bootstrap."
      ],
      [
        "Tools & techniques",
        "Hand-written page structure and styling, responsive layouts, sidebar navigation, light/dark themes, and audio controls."
      ],
      [
        "Learning focus",
        "Building a complete website from the ground up and connecting individual coursework pages through a consistent interface."
      ],
      [
        "Result",
        "My first personal portfolio, published on GitHub Pages."
      ]
    ],
    "url": "https://dianevalencia.github.io/FINAL-LABORATORY-EXAM_ITEC50-Web-Systems-and-Technologies-I/"
  },
  "3": {
    "title": "Barangay database",
    "summary": "A database project for a barangay, centered on organizing information in a local community context. Technical documentation and a closer look at the project will be added soon.",
    "fields": [
      [
        "Project context",
        "A database project for a barangay."
      ],
      [
        "Documentation",
        "The database technology, schema, scope, and my specific contributions will be added with the project documentation."
      ],
      [
        "Preview",
        "A project link and screenshots have not been added yet."
      ]
    ],
    "url": null
  },
  "4": {
    "title": "Leo & Angela’s wedding website",
    "summary": "A wedding website for Leo and Angela, created for my sister’s celebration. The project’s additional details and preview link are reserved for a later update.",
    "fields": [
      [
        "Project context",
        "A website for my sister’s wedding: Leo and Angela."
      ],
      [
        "More information",
        "Additional project details and the website link are intentionally left blank for now."
      ]
    ],
    "url": null
  },
  "5": {
    "title": "SellSight AI",
    "summary": "An AI project currently in development. This space will follow SellSight AI as its purpose, implementation, and progress are ready to share.",
    "fields": [
      [
        "Status",
        "In progress."
      ],
      [
        "Project overview",
        "SellSight AI is currently in development. Its scope, technology stack, and features will be documented as the project progresses."
      ],
      [
        "Next update",
        "A fuller overview, my contributions, and a verified preview or repository link when available."
      ]
    ],
    "url": null
  }
};

const projectFields = document.getElementById('project-fields');
const dialogLink = document.getElementById('dialog-link');
const dialogNote = document.getElementById('dialog-note');

// Render text through DOM APIs so future project copy stays plain text.
document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projectDetails[button.dataset.project];
    const number = button.dataset.project.padStart(2, '0');
    dialogTitle.textContent = project ? project.title : `Project ${number}`;
    dialogSummary.textContent = project
      ? project.summary
      : 'This space is reserved for another project. The actual project details have not been added yet.';
    projectFields.replaceChildren();
    projectFields.hidden = !project;

    if (project) {
      project.fields.forEach(([label, value]) => {
        const row = document.createElement('div');
        const term = document.createElement('dt');
        const description = document.createElement('dd');
        term.textContent = label;
        description.textContent = value;
        row.append(term, description);
        projectFields.append(row);
      });
    }

    if (project && project.url) {
      dialogLink.href = project.url;
      dialogLink.setAttribute('aria-label', `Visit ${project.title} (opens in a new tab)`);
    } else {
      dialogLink.removeAttribute('href');
    }

    dialogLink.hidden = !project?.url;
    dialogNote.hidden = Boolean(project);
    projectDialog.showModal();
  });
});

projectDialog.querySelector('.close').addEventListener('click', () => {
  projectDialog.close();
});

projectDialog.addEventListener('click', (event) => {
  if (event.target !== projectDialog) return;
  const bounds = projectDialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right
    || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) projectDialog.close();
});

document.getElementById('year').textContent = new Date().getFullYear();
