import { useEffect, useRef, useState } from 'react'

const assetUrl = (path) => import.meta.env.BASE_URL + path

const skills = ['Analisis Data', 'Python', 'Microsoft Excel', 'Looker Studio', 'SQL (MySQL)', 'Business Intelligence', 'Machine Learning (R/Weka)', 'Oracle Database']

const projects = [
  {
    number: '01',
    category: 'Skripsi / Gelora Dalaman',
    title: 'Prediksi Tren Penjualan Online',
    description: 'Membangun model prediksi penjualan toko online dari data transaksi historis menggunakan Python dan Excel, lalu menyajikannya lewat dashboard interaktif Looker Studio.',
    stack: ['Python', 'Excel', 'Looker Studio'],
    embedUrl: 'https://datastudio.google.com/embed/reporting/f4e4c56d-6cd8-4cf3-8b4d-7a0f15758289/page/drU6F',
    embedTitle: 'Dashboard Prediksi Tren Penjualan',
    embedWidth: 600,
    embedHeight: 717,
    embedFullScreen: true,
    embedSandbox: 'allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox',
    reportUrl: 'https://datastudio.google.com/reporting/f4e4c56d-6cd8-4cf3-8b4d-7a0f15758289',
    projectLabel: 'DATA ANALYST',
    palette: 'rose',
    visual: 'tren jadi\ninsight',
    shape: 'orbit',
  },
  {
    number: '02',
    category: 'BI / Personal Project',
    title: 'Dashboard Sales Performance Skincare',
    description: 'Menyusun dashboard pemantauan penjualan produk skincare di Excel dengan KPI penjualan, demografi pelanggan, dan kategori produk terlaris untuk menghasilkan wawasan berbasis data.',
    stack: ['Microsoft Excel', 'Sales KPI', 'Visualisasi Data'],
    embedUrl: 'https://1drv.ms/x/c/f45bc87e3f7d9a87/IQSQ7kUwp2FDQYl5hy9eGS-MAQMyN7JeYXWIOTw9gRpQxKQ?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdHideSheetTabs=True&wdDownloadButton=True&wdInConfigurator=True',
    embedTitle: 'Dashboard Sales Performance Skincare',
    embedWidth: 402,
    embedHeight: 346,
    embedScrolling: 'auto',
    reportUrl: 'https://1drv.ms/x/c/f45bc87e3f7d9a87/IQSQ7kUwp2FDQYl5hy9eGS-MAQMyN7JeYXWIOTw9gRpQxKQ?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdHideSheetTabs=True&wdDownloadButton=True&wdInConfigurator=True',
    projectLabel: 'BUSINESS INTELLIGENCE',
    palette: 'butter',
    visual: 'sales\ninsight',
    shape: 'petal',
  },
  {
    number: '03',
    category: 'Web / Penulisan Ilmiah',
    title: 'Aplikasi Kasir Waroeng Alya',
    description: 'Merancang aplikasi kasir berbasis web dengan PHP dan MySQL menggunakan metode Waterfall. Aplikasi diuji dengan Black Box Testing, responsif di berbagai browser, dan mendukung pencatatan transaksi serta stok secara real time.',
    stack: ['PHP', 'HTML/CSS/JS', 'MySQL', 'Black Box Testing'],
    imageUrl: assetUrl('waroeng-alya-project-overview.png'),
    projectLabel: 'WEB DEVELOPMENT',
    palette: 'lilac',
    visual: 'kasir\nterpadu',
    shape: 'tiles',
  },
  {
    number: '04',
    category: 'System Analyst / Proyek Tim',
    title: 'Arsitektur Sistem Penjualan Dimsum',
    description: 'Berkolaborasi sebagai System Analyst untuk menyusun arsitektur sistem, use case, dan alur proses bisnis penjualan bersama tim.',
    stack: ['System Analysis', 'Use Case', 'Proses Bisnis'],
    gallery: [
      { src: assetUrl('project04-01.jpeg'), alt: 'Serah terima aplikasi Dimsum Mey Mey bersama tim.', width: 1280, height: 960 },
      { src: assetUrl('project04-02.png'), alt: 'Tampilan dashboard admin Dimsum Mey Mey dengan ringkasan pesanan, pendapatan, dan laporan penjualan.', width: 615, height: 573 },
      { src: assetUrl('project04-03.png'), alt: 'Tampilan halaman utama website Dimsum Mey Mey.', width: 331, height: 235 },
      { src: assetUrl('project04-04.png'), alt: 'Tampilan menu dimsum dan informasi layanan pada website.', width: 322, height: 229 },
      { src: assetUrl('project04-05.png'), alt: 'Bagian lokasi dan footer website Dimsum Mey Mey.', width: 331, height: 235 },
      { src: assetUrl('project04-06.png'), alt: 'Sampul dokumen Software Requirements Specification Dimsum Mey Mey versi 1.0.', width: 1164, height: 643 },
    ],
    projectLabel: 'TEAM PROJECT',
    palette: 'rose',
    visual: 'proses\nlebih jelas',
    shape: 'orbit',
  },
  {
    number: '05',
    category: 'UI/UX / Laboratorium SI',
    title: 'Mentorship UI/UX',
    description: 'Membimbing ratusan praktikan membuat wireframe dan antarmuka aplikasi menggunakan Figma sebagai tutor dan pengajar laboratorium.',
    stack: ['Figma', 'UI/UX', 'Wireframing'],
    gallery: [
      { src: assetUrl('project05-01.png'), alt: 'Rangkaian rancangan halaman login, pendaftaran, dan beranda aplikasi PsychoHeal.', width: 910, height: 678 },
      { src: assetUrl('project05-02.png'), alt: 'Rangkaian rancangan aplikasi perpustakaan digital iPusNas.', width: 667, height: 766 },
      { src: assetUrl('project05-03.png'), alt: 'Rancangan halaman login dan dashboard aplikasi Dimsum Mey Mey.', width: 724, height: 483 },
      { src: assetUrl('project05-04.jpeg'), alt: 'Foto bersama tim di ruang laboratorium komputer.', width: 4032, height: 3024 },
      { src: assetUrl('project05-05.jpeg'), alt: 'Foto kegiatan di depan komputer saat sesi laboratorium.', width: 1599, height: 1599 },
    ],
    projectLabel: 'MENTORSHIP',
    palette: 'butter',
    visual: 'belajar\nbersama',
    shape: 'petal',
  },
  {
    number: '06',
    category: 'Mentorship / PKKMB',
    title: 'Pendamping Kelompok PKKMB',
    description: 'Mendampingi dan mengarahkan mahasiswa baru selama masa adaptasi kampus sebagai mentor kelompok PKKMB Universitas Gunadarma.',
    stack: ['Mentorship', 'Kepemimpinan', 'Komunikasi'],
    gallery: [
      { src: assetUrl('pkkmb-01.jpeg'), alt: 'Foto bersama panitia dan peserta PKKMB di area kampus.', width: 1280, height: 960 },
      { src: assetUrl('pkkmb-02.jpeg'), alt: 'Mahasiswa baru mengikuti pengarahan PKKMB di lapangan.', width: 900, height: 675 },
      { src: assetUrl('pkkmb-03.jpeg'), alt: 'Suasana kegiatan PKKMB di lapangan dalam gedung olahraga.', width: 1200, height: 900 },
      { src: assetUrl('pkkmb-04.jpeg'), alt: 'Panitia mendampingi mahasiswa peserta PKKMB di dalam gedung.', width: 1200, height: 900 },
      { src: assetUrl('pkkmb-05.jpeg'), alt: 'Panitia pendamping berbincang dengan peserta PKKMB di lapangan.', width: 900, height: 675 },
    ],
    projectLabel: 'PENGALAMAN KAMPUS',
    palette: 'lilac',
    visual: 'temani\nbertumbuh',
    shape: 'tiles',
  },
]

function Arrow({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-4.75-4.75L15.5 10l-4.75 4.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Sparkle({ className = '' }) {
  return <span aria-hidden="true" className={`sparkle ${className}`} />
}

function ProjectGallery({ images, title }) {
  const viewportRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (isHovered || isFocused || prefersReducedMotion || images.length < 2) return undefined

    const timer = window.setInterval(() => {
      const viewport = viewportRef.current
      if (!viewport?.clientWidth) return

      const currentSlide = Math.round(viewport.scrollLeft / viewport.clientWidth)
      const nextSlide = (currentSlide + 1) % images.length
      viewport.scrollTo({ left: nextSlide * viewport.clientWidth, behavior: 'smooth' })
    }, 4500)

    return () => window.clearInterval(timer)
  }, [images.length, isFocused, isHovered])

  const scrollToSlide = (index) => {
    const viewport = viewportRef.current
    if (!viewport) return

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    viewport.scrollTo({
      left: index * viewport.clientWidth,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
    setActiveSlide(index)
  }

  const moveSlide = (direction) => {
    scrollToSlide((activeSlide + direction + images.length) % images.length)
  }

  const handleScroll = () => {
    const viewport = viewportRef.current
    if (!viewport?.clientWidth) return

    const nextSlide = Math.round(viewport.scrollLeft / viewport.clientWidth)
    setActiveSlide((currentSlide) => currentSlide === nextSlide ? currentSlide : nextSlide)
  }

  return (
    <div
      className="project-gallery"
      role="region"
      aria-label={`Galeri foto ${title}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false)
      }}
    >
      <div
        className="project-gallery__viewport"
        ref={viewportRef}
        role="group"
        aria-label={`Foto ${title}`}
        aria-live={isHovered || isFocused ? 'polite' : 'off'}
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            moveSlide(1)
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault()
            moveSlide(-1)
          }
        }}
      >
        {images.map((image, index) => (
          <figure className="project-gallery__slide" key={image.src} role="group" aria-roledescription="slide" aria-label={`Foto ${index + 1} dari ${images.length}`}>
            <img
              className="project-gallery__image"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card--${project.palette}`} data-reveal>
      <div
        className={`project-art project-art--${project.palette} project-art--${project.shape} project-art--project-${project.number}${project.embedUrl ? ' project-art--embedded' : ''}${project.imageUrl ? ' project-art--with-image' : ''}${project.gallery ? ' project-art--gallery' : ''}`}
        aria-hidden={project.embedUrl || project.imageUrl || project.gallery ? undefined : true}
      >
        <div className="project-art__topline">
          <span>PROYEK / {project.number}</span>
          <span>PORTOFOLIO STEFY</span>
        </div>
        {project.embedUrl ? (
          <div className="project-art__media-frame project-art__media-frame--embed">
            <iframe
              className="project-art__embed"
              src={project.embedUrl}
              title={project.embedTitle}
              width={project.embedWidth}
              height={project.embedHeight}
              loading="lazy"
              allowFullScreen={project.embedFullScreen}
              sandbox={project.embedSandbox}
              scrolling={project.embedScrolling ?? 'auto'}
            />
          </div>
        ) : project.imageUrl ? (
          <div className="project-art__media-frame project-art__media-frame--image">
            <img
              className="project-art__image"
              src={project.imageUrl}
              alt="Kolase antarmuka aplikasi kasir Waroeng Alya, menampilkan dashboard admin, manajemen produk, laporan penjualan, pengguna, dan halaman kasir."
              width="6620"
              height="2923"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : project.gallery ? (
          <ProjectGallery images={project.gallery} title={project.title} />
        ) : (
          <div className="project-art__canvas">
            <span className="project-art__ghost">{project.number}</span>
            <span className="project-art__message">
              {project.visual.split('\n').map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
            <span className="project-art__shape" />
            <Sparkle className="project-art__sparkle" />
            <span className="project-art__stamp">PROYEK<br />PILIHAN</span>
          </div>
        )}
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.number} / {project.category}</span>
          <span className="project-card__label">{project.projectLabel}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Teknologi dan metode proyek">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        {project.reportUrl && (
          <a className="text-link text-link--underlined project-card__report-link" href={project.reportUrl} target="_blank" rel="noopener noreferrer">
            Lihat dashboard di tab baru <Arrow diagonal />
          </a>
        )}
      </div>
    </article>
  )
}

function App() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('has-reveal') || !('IntersectionObserver' in window)) return undefined

    const sections = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.dataset.revealed = 'true'
        currentObserver.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-page" id="top">
      <a className="skip-link" href="#main-content">Langsung ke isi</a>
      <div className="welcome-screen" aria-hidden="true">
        <div className="welcome-screen__rings" />
        <div className="welcome-screen__content">
          <span className="welcome-screen__mark">SR</span>
          <p className="welcome-screen__eyebrow">SELAMAT DATANG DI PORTOFOLIO SAYA</p>
          <h2>Stefy <em>Ruslanda</em></h2>
          <span className="welcome-screen__rule" />
          <p className="welcome-screen__role">DATA ANALYST <span>·</span> BUSINESS INTELLIGENCE</p>
        </div>
      </div>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#top" aria-label="Stefy Ruslanda, kembali ke atas">
            <span className="brand__mark" aria-hidden="true">SR</span>
            <span className="brand__name">Stefy Ruslanda</span>
          </a>
          <nav className="main-nav" aria-label="Navigasi utama">
            <a href="#top">Beranda</a>
            <a href="#about">Tentang Saya</a>
            <a href="#skills">Skills</a>
            <a href="#work">Proyek</a>
            <a href="#contact">Kontak</a>
          </nav>
          <a className="header-cta" href="#contact">Hubungi Saya <Arrow diagonal /></a>
        </div>
      </header>

      <div className="site-shell">
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow"><span className="eyebrow__line" /> PORTOFOLIO DATA ANALYST</p>
            <h1 id="hero-title">Halo,<br />aku <em>Stefy<br className="hero__mobile-break" /> Ruslanda.</em></h1>
            <div className="hero__role"><span className="role-dot" /> Data Analyst <span className="role-divider">/</span> Business Intelligence</div>
            <p className="hero__intro">Lulusan Sistem Informasi dengan IPK 3,85, berfokus pada analisis data, dashboard interaktif, dan solusi digital.</p>
            <div className="hero__actions">
              <a className="button button--dark" href="#work">Lihat proyek <Arrow /></a>
              <a className="text-link" href="#contact">Hubungi saya <Arrow diagonal /></a>
              <a className="text-link text-link--underlined hero__cv-link" href={assetUrl('cv-stefy-ruslanda.pdf')} download="CV-Stefy-Ruslanda.pdf">Unduh CV <Arrow diagonal /></a>
            </div>
            <div className="hero__footnote"><span>01 — 06</span><span>SCROLL UNTUK MELIHAT LEBIH BANYAK</span><span className="hero__footnote-arrow">↓</span></div>
          </div>

          <div className="hero__art">
            <div className="hero__art-wash" aria-hidden="true" />
            <figure className="hero__portrait">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${assetUrl('stefy-portrait-480.webp')} 480w, ${assetUrl('stefy-portrait-800.webp')} 800w, ${assetUrl('stefy-portrait-1120.webp')} 1120w`}
                  sizes="(max-width: 420px) min(310px, calc(82vw - 30px)), (max-width: 720px) min(370px, 74vw), (max-width: 940px) 335px, 378px"
                />
                <img
                  src={assetUrl('STEFY%20FORMAL.jpg')}
                  alt="Potret Stefy Ruslanda"
                  width={1664}
                  height={2528}
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </figure>
            <div className="art-sticker" aria-hidden="true"><span>DATA<br />JADI<br />INSIGHT</span><Sparkle /></div>
            <div className="art-note" aria-hidden="true"><span>data</span><span>insight</span><span>aksi</span></div>
            <span className="hero__art-caption" aria-hidden="true">ANALISIS DATA<br />MENJADI INSIGHT</span>
          </div>
        </section>

        <div className="values-strip" aria-hidden="true">
          <span>ANALISIS DATA</span><Sparkle />
          <span>BUSINESS INTELLIGENCE</span><Sparkle />
          <span>SOLUSI DIGITAL</span><Sparkle />
          <span>SIAP BERKOLABORASI</span>
        </div>

        <section className="about section-block" id="about" aria-labelledby="about-title">
          <div className="section-kicker" data-reveal><span>01</span><span>TENTANG SAYA</span></div>
          <div className="about__layout">
            <div className="about__main" data-reveal>
              <h2 id="about-title">Mengubah data menjadi <em>keputusan.</em></h2>
              <p className="about__copy">Lulusan S1 Sistem Informasi Universitas Gunadarma (Agustus 2026; IPK 3,85), berfokus pada analisis data dan business intelligence. Saya memiliki sertifikasi kompetensi Data Analyst BNSP dari LSP Universitas Gunadarma yang berlaku hingga Juni 2028, serta pelatihan Business Intelligence dan Data Preparation for Business Processes.</p>
              <p className="about__copy">Sebagai Asisten dan Pengajar Laboratorium Sistem Informasi sejak November 2024, saya mengelola operasional praktikum, mengoordinasi tim asisten, serta mengajar materi basis data, UI/UX, dan data science.</p>
              <a className="text-link text-link--underlined" href="#work">Lihat proyek pilihan <Arrow /></a>
            </div>
            <aside className="about-card" id="skills" data-reveal aria-label="Fokus keahlian data analyst">
              <div className="about-card__header"><span>FOKUS UTAMA / DATA ANALYST</span><span className="about-card__seal"><Sparkle /></span></div>
              <p>Mengubah data<br />jadi <em>insight.</em></p>
              <div className="about-card__divider" />
              <span className="about-card__label">KEAHLIAN UTAMA</span>
              <ul className="tag-list tag-list--large">
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        <section className="work section-block" id="work" aria-labelledby="work-title">
          <div className="work__heading" data-reveal>
            <div>
              <div className="section-kicker"><span>02</span><span>PROYEK PILIHAN</span></div>
              <h2 id="work-title">Data, sistem,<br />dan <em>manusia.</em></h2>
            </div>
            <p>Pilihan proyek dan pengalaman yang menunjukkan cara saya mengolah data, membangun solusi web, serta berbagi pengetahuan UI/UX.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
          <p className="work__note"><Sparkle /> ANALISIS DATA · BUSINESS INTELLIGENCE · WEB · SYSTEM ANALYSIS · MENTORSHIP</p>
        </section>

        <section className="contact section-block" id="contact" aria-labelledby="contact-title">
          <div className="contact-card" data-reveal>
            <div className="contact-card__decoration" aria-hidden="true"><span /><span /><span /></div>
            <div className="contact-card__content">
              <div className="section-kicker section-kicker--light"><span>03</span><span>SELANJUTNYA</span></div>
              <h2 id="contact-title">Ada ide?<br /><em>Ayo ngobrol.</em></h2>
              <p>Saya terbuka untuk peluang Data Analyst, Business Intelligence, dan peran teknis IT lainnya. Hubungi saya untuk berdiskusi.</p>
              <a className="button button--light" href="mailto:stefyruslanda14@gmail.com"><span>stefyruslanda14@gmail.com</span> <Arrow diagonal /></a>
              <ul className="contact-socials" aria-label="Profil profesional Stefy Ruslanda">
                <li><a href="https://www.linkedin.com/in/stefy-ruslanda-s1509/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a></li>
                <li><a href="https://github.com/stefyrrr" target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a></li>
                <li><a href="https://wa.me/6281818251276" target="_blank" rel="noopener noreferrer">WhatsApp · 0818 1825 1276 <Arrow diagonal /></a></li>
              </ul>
            </div>
            <div className="contact-card__signature"><span>TERBUKA UNTUK PELUANG</span><span>✳</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-top" href="#top">KEMBALI KE ATAS <span>↑</span></a>
        <p>Dirancang sebagai ruang untuk <em>cerita berikutnya.</em></p>
        <span className="footer-copy">© {new Date().getFullYear()} · PORTOFOLIO PERSONAL</span>
      </footer>
      </div>
    </div>
  )
}

export default App
