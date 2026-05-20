/* Navegación compartida — inyectada en cada página */
(function () {
  const primary = [
    { label: 'Inicio',       href: 'index.html' },
    { label: 'Investigación', href: 'research.html' },
    { label: 'Política Pública', href: 'policy.html' },
    { label: 'Docencia',     href: 'teaching.html' },
    { label: 'CV',           href: 'cv.html' },
  ];
  const secondary = [
    { label: 'Atlas Histórico de Chile', href: 'data.html' },
    { label: 'Medios',       href: 'media.html' },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const renderLink = p =>
    `<a href="${p.href}"${current === p.href ? ' class="is-active"' : ''}>${p.label}</a>`;

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="inner">
      <a class="mark" href="index.html">Maximiliano Véjares</a>
      <button class="menu-toggle" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
      <nav>
        ${primary.map(renderLink).join('')}
        ${secondary.map(renderLink).join('')}
        <a href="../index.html" class="lang-toggle">English</a>
      </nav>
    </div>`;
  document.body.prepend(header);

  /* toggle móvil */
  header.querySelector('.menu-toggle').addEventListener('click', () => {
    header.querySelector('nav').classList.toggle('is-open');
  });

  /* pie de página */
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="inner">
      <div>
        <div class="footer-name">Maximiliano Véjares</div>
        <div style="margin-top:4px">Investigador, <a href="https://www.netzeropolicylab.com" target="_blank" rel="noopener">Net Zero Industrial Policy Lab</a></div>
        <div>Universidad Johns Hopkins</div>
        <div class="footer-updated">Última actualización mayo 2026</div>
      </div>
      <div class="footer-links">
        <a href="mailto:maxvejares@jhu.edu">maxvejares@jhu.edu</a>
        <a href="https://scholar.google.com/citations?user=TDudFlcAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a>
        <a href="https://www.linkedin.com/in/maxvejares/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>`;
  document.body.append(footer);
})();
