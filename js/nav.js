/* Shared navigation — injected into every page */
(function () {
  const primary = [
    { label: 'About',       href: 'index.html' },
    { label: 'Research',    href: 'research.html' },
    { label: 'Policy analysis', href: 'policy.html' },
    { label: 'Teaching',    href: 'teaching.html' },
    { label: 'CV',          href: 'cv.html' },
  ];
  const secondary = [
    { label: 'Data collection', href: 'data.html' },
    { label: 'Media',           href: 'media.html' },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const renderLink = p =>
    `<a href="${p.href}"${current === p.href ? ' class="is-active"' : ''}>${p.label}</a>`;

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="inner">
      <a class="mark" href="index.html">Maximiliano Véjares</a>
      <button class="menu-toggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <nav>
        ${primary.map(renderLink).join('')}
        ${secondary.map(renderLink).join('')}
        <a href="es/index.html" class="lang-toggle">Español</a>
      </nav>
    </div>`;
  document.body.prepend(header);

  /* mobile toggle */
  header.querySelector('.menu-toggle').addEventListener('click', () => {
    header.querySelector('nav').classList.toggle('is-open');
  });

  /* footer */
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="inner">
      <div>
        <div class="footer-name">Maximiliano Véjares</div>
        <div style="margin-top:4px">Research Fellow, <a href="https://www.netzeropolicylab.com" target="_blank" rel="noopener">Net Zero Industrial Policy Lab</a></div>
        <div>Johns Hopkins University</div>
        <div class="footer-updated">Last updated May 2026</div>
      </div>
      <div class="footer-links">
        <a href="mailto:maxvejares@jhu.edu">maxvejares@jhu.edu</a>
        <a href="https://scholar.google.com/citations?user=TDudFlcAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a>
        <a href="https://www.linkedin.com/in/maxvejares/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>`;
  document.body.append(footer);
})();
