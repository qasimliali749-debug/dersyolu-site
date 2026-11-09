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
  { title: 'Omonim şəkilçilər', subject: 'Azərbaycan dili', grade: 'Ümumi', description: 'Eyni cür yazılıb fərqli vəzifə daşıyan şəkilçilərin nümunələri.', file: 'materials/azerbaycan-dili/omonim-sekilciler.pdf', size: 'PDF · 3 səhifə' },
  { title: 'Qrammatik şəkilçilər — siyahı', subject: 'Azərbaycan dili', grade: 'Ümumi', description: 'İsim və fel şəkilçilərinin qısa, yığcam xülasəsi.', file: 'materials/azerbaycan-dili/qrammatik-sekilciler-siyahisi.pdf', size: 'PDF · 3 səhifə' },
  { title: 'Qrammatik şəkilçilər', subject: 'Azərbaycan dili', grade: 'Ümumi', description: 'Azərbaycan dilində söz dəyişdirici şəkilçilərin geniş icmalı.', file: 'materials/azerbaycan-dili/qrammatik-sekilciler.pdf', size: 'PDF · 7 səhifə' },
  { title: 'Irregular verbs — geniş siyahı', subject: 'İngilis dili', grade: 'Ümumi', description: '195 qeyri-düzgün fel, V1/V2/V3 formaları və Azərbaycan dilində mənaları.', file: 'materials/ingilis-dili/irregular-verbs-genis-siyahi.pdf', size: 'PDF · 5 səhifə' },
  { title: 'Irregular verbs — Azərbaycan dilində', subject: 'İngilis dili', grade: 'Ümumi', description: 'Ən çox işlənən qeyri-düzgün fellərin tərcüməli siyahısı.', file: 'materials/ingilis-dili/irregular-verbs-azerbaycanca.pdf', size: 'PDF · 3 səhifə' },
  { title: 'İngilis dilində zamanlar', subject: 'İngilis dili', grade: 'Ümumi', description: 'Zaman qaydaları, nümunələr və test strategiyası.', file: 'materials/ingilis-dili/ingilis-dili-zamanlar.pdf', size: 'PDF · 4 səhifə' },
  { title: 'Böyük İpək yolu', subject: 'Tarix', grade: 'Ümumi', description: 'Böyük İpək yolu və coğrafi kəşflər barədə dərs təqdimatı.', file: 'materials/Boyuk_Ipek_Yolu.pdf', size: 'PDF · 6 səhifə' },
  { title: 'Məhlul məsələləri', subject: 'Riyaziyyat', grade: 'Ümumi', description: 'Məhlulların faiz qatılığı üzrə qayda və həll olunmuş nümunələr.', file: 'materials/mehlul_meseleleri.pdf', size: 'PDF · 1 səhifə' },
  {"title":"Azərbaycan dili — 9-cu sinif buraxılış cavabları (Çinar)","subject":"Azərbaycan dili","grade":"9-cu sinif","description":"9-cu sinif Azərbaycan dili buraxılış materialının cavabları.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/9-cu.sinif.Az.rbaycan.dili.buraxilis.Cinar.yayimlari.cavablar.pdf","size":"PDF · 41 səhifə"},
  {"title":"3500 Words for All Exams","subject":"İngilis dili","grade":"Ümumi","description":"İmtahanlara hazırlıq üçün ingilis dili söz siyahısı. Müəllif: Shakhriyar Babayev.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/3500.words.master.pdf","size":"PDF · 70 səhifə"},
  {"title":"Riyaziyyat — test cavabları (Güvən)","subject":"Riyaziyyat","grade":"Ümumi","description":"Natural ədədlər və çoxluqlar üzrə test tapşırıqlarının cavabları.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/20250807160502_38339600.2.pdf","size":"PDF · 18 səhifə"},
  {"title":"Azərbaycan dili sınaqları — cavablar (Güvən)","subject":"Azərbaycan dili","grade":"9-cu sinif","description":"9-cu sinif Azərbaycan dili sınaqlarının cavabları.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/20260808115916_96812900.pdf","size":"PDF · 50 səhifə"},
  {"title":"Azərbaycan dili buraxılışı — sınaq 1 cavabları","subject":"Azərbaycan dili","grade":"9-cu sinif","description":"9-cu sinif buraxılış modeli üzrə cavablar və izahlar.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/Az-dili_Bura_9_cavab_sinaq_1.pdf","size":"PDF · 2 səhifə"},
  {"title":"Azərbaycan dili — 11-ci sinif sınaq 1 cavabları","subject":"Azərbaycan dili","grade":"11-ci sinif","description":"11-ci sinif Azərbaycan dili sınaq variantının cavabları.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/Az-dili_Bura_11_cavab_sinaq_1.pdf","size":"PDF · 3 səhifə"},
  {"title":"Azərbaycan dili — 11-ci sinif sınaq 2 cavabları","subject":"Azərbaycan dili","grade":"11-ci sinif","description":"11-ci sinif Azərbaycan dili ikinci sınaq variantının cavabları.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/Az-dili_Bura_11_cavab_sinaq_2.pdf","size":"PDF · 3 səhifə"},
  {"title":"Çoxluqlar — buraxılış quiz-i","subject":"Riyaziyyat","grade":"Ümumi","description":"Çoxluqlar mövzusu üzrə buraxılış tipli test tapşırıqları.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/COXLUQLAR.BURAXILIS.QUIZ_260907_085409.pdf","size":"PDF · 2 səhifə"},
  {"title":"Riyaziyyat — DİM 2025 test toplusu","subject":"Riyaziyyat","grade":"9-cu sinif","description":"9-cu sinif buraxılış imtahanına hazırlıq üçün DİM riyaziyyat test toplusu.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/Dim.2025.Toplu.9-cu.sinif.pdf","size":"PDF · 164 səhifə"},
  {"title":"Azərbaycan dili — DİM 2025 test toplusu","subject":"Azərbaycan dili","grade":"9-cu sinif","description":"9-cu sinif buraxılış imtahanına hazırlıq üçün Azərbaycan dili test toplusu.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/DIM.toplu.Az.rbaycan.dili.9.illik.2025_250826_002554.1.pdf","size":"PDF · 248 səhifə"},
  {"title":"Azərbaycan dili — DİM 2025 test toplusu, 11-ci sinif","subject":"Azərbaycan dili","grade":"11-ci sinif","description":"11-ci sinif buraxılış imtahanına hazırlıq üçün birinci hissə test toplusu.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/DIM_Az.rbaycan_Dili_2025_11_ci_sinif_1_ci_hiss._test_toplusu.pdf","size":"PDF · 278 səhifə"},
  {"title":"Ədəbiyyat dərsliyi — 9-cu sinif","subject":"Ədəbiyyat","grade":"9-cu sinif","description":"9-cu sinif üçün ədəbiyyat fənni üzrə dərslik.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/quot-adabiyyat-quot-fanni-uzra-9-cu-sinif-ucun-darslik-1720179530-352.pdf","size":"PDF · 227 səhifə"},
  {"title":"Riyaziyyat dərsliyi — 9-cu sinif","subject":"Riyaziyyat","grade":"9-cu sinif","description":"9-cu sinif üçün riyaziyyat fənni üzrə dərslik.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11/quot-riyaziyyat-quot-fanni-uzra-9-cu-sinif-ucun-darslik.pdf","size":"PDF · 259 səhifə"},
  {"title":"İngilis sözləri — A1 səviyyəsi","subject":"İngilis dili","grade":"Ümumi","description":"A1 səviyyəsi üçün əsas ingilis dili sözləri.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/A1_Ingilis_Sozler.pdf","size":"PDF · 39 səhifə"},
  {"title":"İngilis sözləri — A2 səviyyəsi","subject":"İngilis dili","grade":"Ümumi","description":"A2 səviyyəsi üçün ingilis dili sözləri.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/A2_Ingilis_Sozler.pdf","size":"PDF · 30 səhifə"},
  {"title":"Natural ədədlər və bölünmə","subject":"Riyaziyyat","grade":"Ümumi","description":"Natural ədədlər, sadə və mürəkkəb ədədlər üzrə izah və nümunələr.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/DOC-20260811-WA0074_260815_071733.pdf","size":"PDF · 3 səhifə"},
  {"title":"Orfoqrafiya lüğəti — Sadiq Qurbanov","subject":"Azərbaycan dili","grade":"Ümumi","description":"Azərbaycan sözlərinin yazılışına dair orfoqrafiya lüğətindən səhifələr.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/Orfoqrafiya.Sadiq.Qurbanov.pdf","size":"PDF · 4 səhifə"},
  {"title":"Riyaziyyat — Natural ədədlər və bölünmə","subject":"Riyaziyyat","grade":"Ümumi","description":"Rəqəmlər, natural ədədlər, bölünmə və bölənlər üzrə izahlar.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/RiYZZIYYAT.pdf","size":"PDF · 5 səhifə"},
  {"title":"İngilis dili test bankı — 11-ci sinif, I hissə","subject":"İngilis dili","grade":"11-ci sinif","description":"11-ci sinif üçün dinləmə, oxu və yazı tapşırıqları.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/Samir.B.11-ci.sinif.1-ci.hiss.pdf","size":"PDF · 125 səhifə"},
  {"title":"İngilis dili test bankı — 11-ci sinif cavabları","subject":"İngilis dili","grade":"11-ci sinif","description":"11-ci sinif test bankının cavabları və izahları.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/Samir.B.11-ci.sinif.cavablar.pdf","size":"PDF · 26 səhifə"},
  {"title":"Sayılmayan isimlər və istisnalar","subject":"İngilis dili","grade":"Ümumi","description":"İngilis dilində sayılmayan isimlər və istisna hallar.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/Sayilmayan_isimler_ve_istisnalar.1.pdf","size":"PDF · 5 səhifə"},
  {"title":"Taste — söz siyahısı","subject":"İngilis dili","grade":"Ümumi","description":"İngilis dili üzrə söz siyahısı.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/Taste_Sozler.pdf","size":"PDF · 2 səhifə"},
  {"title":"Vocabulary List","subject":"İngilis dili","grade":"Ümumi","description":"İngilis dili üçün qısa söz siyahısı.","file":"https://github.com/qasimliali749-debug/dersyolu-site/releases/download/dersyolu-materials-2026-11-batch2/Vocabulary_List.pdf","size":"PDF · 1 səhifə"}
];

const grid = document.querySelector('#materials-grid');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#search-input');
const gradeFilter = document.querySelector('#grade-filter');
const subjectFilter = document.querySelector('#subject-filter');
const subjectGrid = document.querySelector('#subject-grid');
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

  if (!subjectGrid) return;
  const symbols = { 'Azərbaycan dili': 'Ə', 'İngilis dili': 'EN', 'Riyaziyyat': '∑', 'Tarix': 'T', 'Kimya': 'K' };
  const cards = [
    { value: 'all', title: 'Bütün fənlər', symbol: '✦', total: materials.length },
    ...subjects.map((subject) => ({
      value: subject,
      title: subject,
      symbol: symbols[subject] || subject.slice(0, 2),
      total: materials.filter((item) => item.subject === subject).length
    }))
  ];
  subjectGrid.replaceChildren();
  cards.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'subject-card';
    button.setAttribute('aria-pressed', String(item.value === selected));

    const symbol = document.createElement('span');
    symbol.className = 'subject-symbol';
    symbol.textContent = item.symbol;
    const title = document.createElement('span');
    title.className = 'subject-name';
    title.textContent = item.title;
    const total = document.createElement('span');
    total.className = 'subject-count';
    total.textContent = `${item.total} material`;

    button.append(symbol, title, total);
    button.addEventListener('click', () => {
      subjectFilter.value = item.value;
      renderSubjects();
      renderMaterials();
    });
    subjectGrid.append(button);
  });
}
function renderMaterials() {
  if (!grid || !emptyState) return;
  const query = (searchInput?.value || '').trim().toLocaleLowerCase('az');
  const grade = gradeFilter?.value || 'all';
  const subject = subjectFilter?.value || 'all';
  const filtered = materials.filter((item) => {
    const matchesQuery = `${item.title} ${item.subject} ${item.grade} ${item.description || ''}`.toLocaleLowerCase('az').includes(query);
    return matchesQuery && (grade === 'all' || item.grade === grade || item.grade === 'Ümumi') && (subject === 'all' || item.subject === subject);
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
  renderSubjects();
  renderMaterials();
}

searchInput?.addEventListener('input', renderMaterials);
gradeFilter?.addEventListener('change', renderMaterials);
subjectFilter?.addEventListener('change', () => { renderSubjects(); renderMaterials(); });
resetButton?.addEventListener('click', resetFilters);
renderSubjects();
renderMaterials();




