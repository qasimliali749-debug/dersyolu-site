const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Menyunu bağla' : 'Menyunu aç');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Menyunu aç');
    });
  });
}

const materials = [
  // PDF materialları gələndə belə obyektlər əlavə edilir:
  // { title: 'Mövzunun adı', subject: 'Riyaziyyat', grade: '9-cu sinif', description: 'Qısa izah', file: 'materials/riyaziyyat/movzu.pdf', size: '2 MB' }
];

const grid = document.querySelector('#materials-grid');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#search-input');
const gradeFilter = document.querySelector('#grade-filter');
const subjectFilter = document.querySelector('#subject-filter');
const count = document.querySelector('#material-count');
const resultsLabel = document.querySelector('#results-label');
const resetButton = document.querySelector('#reset-filters');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

function renderSubjects() {
  if (!subjectFilter) return;
  const selected = subjectFilter.value;
  const subjects = [...new Set(materials.map((item) => item.subject))].sort((a, b) => a.localeCompare(b, 'az'));
  subjectFilter.innerHTML = '<option value="all">Bütün fənlər</option>';
  subjects.forEach((subject) => {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    subjectFilter.append(option);
  });
  if (subjects.includes(selected)) subjectFilter.value = selected;
}

function renderMaterials() {
  if (!grid || !emptyState) return;
  const query = (searchInput?.value || '').trim().toLocaleLowerCase('az');
  const grade = gradeFilter?.value || 'all';
  const subject = subjectFilter?.value || 'all';
  const filtered = materials.filter((item) => {
    const matchesQuery = `${item.title} ${item.subject} ${item.grade} ${item.description || ''}`.toLocaleLowerCase('az').includes(query);
    return matchesQuery && (grade === 'all' || item.grade === grade) && (subject === 'all' || item.subject === subject);
  });

  count.textContent = String(materials.length);
  grid.replaceChildren();
  filtered.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'material-card';
    const top = document.createElement('div');
    top.className = 'material-top';
    top.innerHTML = '<span class="pdf-icon">PDF</span>';
    const tag = document.createElement('span');
    tag.className = 'material-tag';
    tag.textContent = item.subject;
    top.append(tag);
    const title = document.createElement('h3');
    title.textContent = item.title;
    const description = document.createElement('p');
    description.textContent = item.description || 'Dərs materialı';
    const meta = document.createElement('div');
    meta.className = 'material-meta';
    meta.textContent = [item.grade, item.size].filter(Boolean).join(' · ');
    const download = document.createElement('a');
    download.className = 'material-download';
    download.href = item.file;
    download.target = '_blank';
    download.rel = 'noopener';
    download.textContent = 'PDF-ə bax və yüklə ↗';
    top.appendChild(tag);
    card.append(top, title, description, meta, download);
    grid.append(card);
  });

  emptyState.hidden = filtered.length > 0;
  if (materials.length > 0 && filtered.length === 0) {
    emptyState.querySelector('h3').textContent = 'Axtarışa uyğun material tapılmadı';
    emptyState.querySelector('p').textContent = 'Başqa söz və ya filtr seçib yenidən axtar.';
  } else if (materials.length === 0) {
    emptyState.querySelector('h3').textContent = 'Materiallar tezliklə burada olacaq';
    emptyState.querySelector('p').textContent = 'PDF-ləri göndər, onları fənn və sinif üzrə bu kataloqa əlavə edim.';
  }
  resultsLabel.textContent = filtered.length === materials.length ? 'Materiallar' : `${filtered.length} nəticə`;
  resetButton.hidden = !query && grade === 'all' && subject === 'all';
}

function resetFilters() {
  if (searchInput) searchInput.value = '';
  if (gradeFilter) gradeFilter.value = 'all';
  if (subjectFilter) subjectFilter.value = 'all';
  renderMaterials();
}

searchInput?.addEventListener('input', renderMaterials);
gradeFilter?.addEventListener('change', renderMaterials);
subjectFilter?.addEventListener('change', renderMaterials);
resetButton?.addEventListener('click', resetFilters);
renderSubjects();
renderMaterials();

