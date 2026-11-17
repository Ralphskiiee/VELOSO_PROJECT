// ---------- Project carousel ----------
// Add more projects here: { src: 'images/project2.png', title: 'PROJECT 2' }
const projects = [
  { src: 'images/project1.png', title: 'PROJECT 1' }
];

const img = document.getElementById('projectImg');
const caption = document.getElementById('projectCaption');
let current = 0;

function showProject(i) {
  current = (i + projects.length) % projects.length;
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = projects[current].src;
    img.alt = projects[current].title;
    caption.textContent = projects[current].title;
    img.style.opacity = 1;
  }, 150);
}
img.style.transition = 'opacity .3s ease';
document.getElementById('prev').addEventListener('click', () => showProject(current - 1));
document.getElementById('next').addEventListener('click', () => showProject(current + 1));
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') showProject(current - 1);
  if (e.key === 'ArrowRight') showProject(current + 1);
});

// ---------- GET STARTED button ----------
document.getElementById('getStarted').addEventListener('click', () => {
  document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
});

// ---------- Highlight active nav link while scrolling ----------
const links = document.querySelectorAll('.nav-links a');
const sections = [...document.querySelectorAll('section[id]')];
window.addEventListener('scroll', () => {
  const y = window.scrollY + 200;
  let active = sections[0].id;
  sections.forEach(s => { if (s.offsetTop <= y) active = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active));
});
