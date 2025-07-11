// =========================
// Navigation Functions
// =========================
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('visible');
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// =========================
// Project Interactivity
// =========================
function filterProjects(category) {
  document.querySelectorAll('.project').forEach(project => {
    const match = project.dataset.category === category || category === 'all';
    project.style.display = match ? 'block' : 'none';
  });
}

function openLightbox(src) {
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = `
    <div class="overlay" onclick="closeLightbox()"></div>
    <img src="${src}" alt="Project Preview" />
  `;
  document.body.appendChild(modal);
}

function closeLightbox() {
  const modal = document.querySelector('.lightbox');
  if (modal) document.body.removeChild(modal);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// =========================
// Contact Form Validation
// =========================
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  [name, email, message].forEach(field => {
    const errorSpan = field.nextElementSibling;
    if (!field.value.trim()) {
      field.classList.add('error');
      if (errorSpan) errorSpan.textContent = 'This field is required.';
      isValid = false;
    } else {
      field.classList.remove('error');
      if (errorSpan) errorSpan.textContent = '';
    }
  });

  if (isValid) {
    alert('Thanks for your message!');
    this.reset();
  }
});