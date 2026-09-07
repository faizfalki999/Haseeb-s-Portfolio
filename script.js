/**
 * Haseeb Ali Creative Portfolio - Interactive Scripts
 * Handles 36-work Levensa gallery modal, fullscreen image lightbox, copy to clipboard, and project previews.
 */

document.addEventListener('DOMContentLoaded', () => {

  // All 35 Levensa E-Commerce Design Assets (curated)
  const levensaGallery = [
    { src: 'LEVENSA/Deal of the Day 2.jpg', title: 'Deal of the Day Exclusive Campaign', category: 'offers', tag: 'DEAL BANNER' },
    { src: 'LEVENSA/100 brands.jpg', title: '100+ Global Luxury Brands Promo', category: 'campaign', tag: 'CAMPAIGN BANNER' },
    { src: 'LEVENSA/CH1.png', title: 'Carolina Herrera Perfume Feature Banner', category: 'fragrance', tag: 'HERO BANNER' },
    { src: 'LEVENSA/ramadan offer.jpg', title: 'Ramadan Festive Mega Sale Creative', category: 'campaign', tag: 'SEASONAL SALE' },
    { src: 'LEVENSA/ramadan offer 75_ arabic.jpg', title: 'Ramadan 75% Off Special Offer (Arabic)', category: 'campaign', tag: 'SEASONAL SALE' },
    { src: 'LEVENSA/deal of the day.jpg', title: 'Flash Deal of the Day Promo', category: 'offers', tag: 'PROMO AD' },
    { src: 'LEVENSA/Collections arabic.jpg', title: 'Arabic Collection Showcase Banner', category: 'banners', tag: 'COLLECTION BANNER' },
    { src: 'LEVENSA/collection banner new .png', title: 'New Seasonal Collection Banner', category: 'banners', tag: 'COLLECTION BANNER' },
    { src: 'LEVENSA/banner eng.png', title: 'E-Commerce Hero Slider Banner', category: 'banners', tag: 'HERO SLIDER' },
    { src: 'LEVENSA/slider 1 arabic.jpg', title: 'Arabic E-Commerce Hero Slider', category: 'banners', tag: 'HERO SLIDER' },
    { src: 'LEVENSA/gift banner 2 arabic.jpg', title: 'Luxury Gift Sets Promotional Banner', category: 'offers', tag: 'GIFT CAMPAIGN' },
    { src: 'LEVENSA/top picks post.jpg', title: 'Top Picks of the Season Social Post', category: 'campaign', tag: 'SOCIAL POST' },
    { src: 'LEVENSA/women_s item arabic.jpg', title: 'Women\'s Luxury Fragrances Campaign', category: 'fragrance', tag: 'PRODUCT BANNER' },
    { src: 'LEVENSA/Men_s..png', title: 'Men\'s Designer Fragrance Spotlight', category: 'fragrance', tag: 'PRODUCT BANNER' },
    { src: 'LEVENSA/GA(SWY).png', title: 'Giorgio Armani Stronger With You', category: 'fragrance', tag: 'BRAND SPOTLIGHT' },
    { src: 'LEVENSA/GA(O).png', title: 'Giorgio Armani Luxury Oud Creative', category: 'fragrance', tag: 'BRAND SPOTLIGHT' },
    { src: 'LEVENSA/GA113.png', title: 'Armani Privé Haute Parfumerie Ad', category: 'fragrance', tag: 'PRODUCT CREATIVE' },
    { src: 'LEVENSA/A(PF).png', title: 'Acqua Di Gio Profumo Campaign', category: 'fragrance', tag: 'PRODUCT CREATIVE' },
    { src: 'LEVENSA/B11.png', title: 'Burberry Hero Fragrance Ad', category: 'fragrance', tag: 'BRAND SPOTLIGHT' },
    { src: 'LEVENSA/C(CM).png', title: 'Chanel Coco Mademoiselle Creative', category: 'fragrance', tag: 'BRAND SPOTLIGHT' },
    { src: 'LEVENSA/C(HS).png', title: 'Chanel Luxury Collection Visual', category: 'fragrance', tag: 'PRODUCT CREATIVE' },
    { src: 'LEVENSA/CK(O).png', title: 'Calvin Klein One Product Poster', category: 'fragrance', tag: 'PRODUCT POSTER' },
    { src: 'LEVENSA/HB(B).png', title: 'Hugo Boss Bottled Signature Ad', category: 'fragrance', tag: 'BRAND SPOTLIGHT' },
    { src: 'LEVENSA/HB(BO).png', title: 'Hugo Boss Luxury Oud Edition', category: 'fragrance', tag: 'PRODUCT CREATIVE' },
    { src: 'LEVENSA/L(Abs).png', title: 'Lancôme Absolue Luxury Creative', category: 'fragrance', tag: 'PRODUCT CREATIVE' },
    { src: 'LEVENSA/L(JD).png', title: 'Lancôme La Vie Est Belle Visual', category: 'fragrance', tag: 'BRAND SPOTLIGHT' },
    { src: 'LEVENSA/Lblack1.png', title: 'Lancôme Trésor Midnight Rose', category: 'fragrance', tag: 'PRODUCT CREATIVE' },
    { src: 'LEVENSA/Lblue1.png', title: 'Lancôme Idôle Fragrance Poster', category: 'fragrance', tag: 'PRODUCT POSTER' },
    { src: 'LEVENSA/MB(LP).png', title: 'Montblanc Legend Product Creative', category: 'fragrance', tag: 'PRODUCT CREATIVE' },
    { src: 'LEVENSA/MD1.png', title: 'Miss Dior Fragrance Campaign Visual', category: 'fragrance', tag: 'BRAND SPOTLIGHT' },
    { src: 'LEVENSA/V(V).png', title: 'Versace Eros Flame Product Poster', category: 'fragrance', tag: 'PRODUCT POSTER' },
    { src: 'LEVENSA/V12.png', title: 'Versace Dylan Blue Campaign Creative', category: 'fragrance', tag: 'PRODUCT CREATIVE' },
    { src: 'LEVENSA/&.png', title: 'Luxury Brands Identity Showcase', category: 'banners', tag: 'BRAND COLLAGE' },
    { src: 'LEVENSA/.12.png', title: 'Signature Fragrance Highlights', category: 'fragrance', tag: 'PRODUCT HIGHLIGHT' },
    { src: 'LEVENSA/.332.png', title: 'Exclusive E-Commerce Product Deck', category: 'banners', tag: 'CATALOG BANNER' }
  ];

  // Projects Data
  const projectsData = {
    levensa: {
      type: 'gallery',
      title: "LEVENSA E-COMMERCE CAMPAIGN",
      category: "GRAPHIC DESIGN / 35 COMMERCIAL DESIGNS DELIVERED",
      client: "Levensa (Saudi Arabia)",
      tools: "Adobe Photoshop, Canva Pro, Figma",
      timeline: "10 Months Remote",
      description: "Full suite of 35+ high-converting promotional banners, seasonal sale creatives (Ramadan & Eid), hero sliders, and international luxury brand product ads designed for Saudi Arabia's leading online fragrance and lifestyle destination.",
      items: levensaGallery
    },
    fitness: {
      type: 'standard',
      title: "APEX FIT MAGAZINE EDITORIAL SPREAD",
      category: "EDITORIAL / TYPOGRAPHY / PRINT DESIGN",
      client: "Apex Fitness Media",
      tools: "Photoshop, InDesign / Illustrator",
      timeline: "Academic & Editorial Project",
      themeClass: "preview-fitness",
      heroHeadline: "BOLD TYPOGRAPHY & GRIDS",
      heroSub: "Multi-page Modern Sports Publication",
      description: "An editorial design exploration focused on modern athletic magazine formatting. Structured complex multi-column typography, high-contrast monochrome and vibrant neon color accents, dynamic athlete cutouts, and readable infoboxes.",
      deliverables: ["Cover Page Design", "Two-Page Feature Spread", "Typography Hierarchy Guide", "Print-Ready CMYK PDF"]
    },
    rainaware: {
      type: 'standard',
      title: "RAINAWARE CLIMATE CAMPAIGN VISUALS",
      category: "POSTER DESIGN / AWARENESS CAMPAIGN",
      client: "University Public Initiative",
      tools: "Photoshop, Illustrator, Canva",
      timeline: "Campaign Project",
      themeClass: "preview-rainaware",
      heroHeadline: "ENVIRONMENTAL STORYTELLING",
      heroSub: "Public Awareness Poster Series",
      description: "A cohesive series of visual advocacy posters designed to educate and inspire action around urban rainfall harvesting and flood preparedness. Utilized moody green and dark slate textures, bold headline typography, and clear informational iconography.",
      deliverables: ["A2 Exhibition Posters", "Instagram Educational Carousels", "Infographic Handouts", "Vector Icon Badges"]
    },
    documentary: {
      type: 'standard',
      title: "WATER CRISIS DOCUMENTARY STILLS",
      category: "VIDEO EDITING / COLOR GRADING / CINEMATIC",
      client: "Independent Media Project",
      tools: "Adobe Premiere Pro, After Effects",
      timeline: "Documentary Post-Production",
      themeClass: "preview-doc",
      heroHeadline: "CINEMATIC PACING & TONE",
      heroSub: "Color Graded Stills & Title Sequences",
      description: "Complete video editing and color grading for a documentary short exploring regional water scarcity. Executed multi-camera synchronization, ambient sound design, custom subtitle styling, and cinematic color palettes reflecting arid and emotional tones.",
      deliverables: ["4K Master Edit", "Color Grade LUTs", "Sound Design & Mix", "Motion Title Cards"]
    }
  };

  // DOM Elements
  const modalBackdrop = document.getElementById('projectModal');
  const modalDialog = modalBackdrop ? modalBackdrop.querySelector('.modal-dialog') : null;
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const projectCards = document.querySelectorAll('.project-card');

  // Fullscreen Image Lightbox Elements
  const imageViewerModal = document.getElementById('imageViewerModal');
  const viewerImage = document.getElementById('viewerImage');
  const viewerCounter = document.getElementById('viewerCounter');
  const viewerTitle = document.getElementById('viewerTitle');
  const viewerCategory = document.getElementById('viewerCategory');
  const viewerCloseBtn = document.getElementById('viewerCloseBtn');
  const viewerPrevBtn = document.getElementById('viewerPrevBtn');
  const viewerNextBtn = document.getElementById('viewerNextBtn');

  let currentActiveGallery = [];
  let currentImageIndex = 0;

  // Render Levensa Gallery Inside Modal
  function renderLevensaGallery() {
    if (!modalDialog || !modalBody) return;
    
    modalDialog.classList.add('modal-wide');

    modalBody.innerHTML = `
      <!-- Gallery Header -->
      <div style="margin-bottom: 20px;">
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--crimson-bright); letter-spacing: 2px; margin-bottom: 6px;">
          LEVENSA • SAUDI ARABIA E-COMMERCE
        </div>
        <h2 style="font-family: var(--font-hero); font-size: clamp(2rem, 4vw, 3rem); letter-spacing: 2px; color: var(--text-cream-hero); line-height: 1;">
          COMPLETE COMMERCIAL DESIGN PORTFOLIO
        </h2>
      </div>

      <!-- Stats Bar -->
      <div class="gallery-header-stats">
        <div class="gallery-stat-pill">
          <span>Total Designs:</span>
          <span class="highlight">35 Commercial Assets</span>
        </div>
        <div class="gallery-stat-pill">
          <span>Client Scope:</span>
          <span class="highlight">E-Commerce Brand (Saudi Arabia)</span>
        </div>
        <div class="gallery-stat-pill">
          <span>Tools:</span>
          <span class="highlight">Photoshop • Canva Pro • Figma</span>
        </div>
        <div class="gallery-stat-pill">
          <span style="color: var(--crimson-bright);">✦ Click any design to view fullscreen</span>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="gallery-filter-bar">
        <button class="filter-btn active" data-filter="all">All Designs (35)</button>
        <button class="filter-btn" data-filter="fragrance">Luxury Fragrances (18)</button>
        <button class="filter-btn" data-filter="banners">Hero & Category Banners (8)</button>
        <button class="filter-btn" data-filter="campaign">Campaigns & Seasonal (5)</button>
        <button class="filter-btn" data-filter="offers">Flash Deals & Offers (4)</button>
      </div>

      <!-- Gallery Grid Container -->
      <div class="gallery-grid" id="levensaGrid">
        <!-- Rendered dynamically -->
      </div>
    `;

    populateGalleryGrid('all');
    setupFilterEvents();
  }

  // Populate Grid Items
  function populateGalleryGrid(filterCategory) {
    const grid = document.getElementById('levensaGrid');
    if (!grid) return;

    const filteredItems = filterCategory === 'all' 
      ? levensaGallery 
      : levensaGallery.filter(item => item.category === filterCategory);

    currentActiveGallery = filteredItems;

    grid.innerHTML = filteredItems.map((item, idx) => `
      <div class="gallery-item" data-index="${idx}">
        <div class="gallery-thumb-box">
          <img src="${item.src}" alt="${item.title}" class="gallery-thumb-img" loading="lazy" onerror="this.src='LEVENSA/CH1.png'"/>
          <div class="gallery-hover-tag">
            <div class="zoom-icon-badge">⤢</div>
            <span class="zoom-text">VIEW FULLSCREEN</span>
          </div>
        </div>
        <div class="gallery-meta">
          <div class="gallery-title" title="${item.title}">${item.title}</div>
          <div class="gallery-category-tag">${item.tag}</div>
        </div>
      </div>
    `).join('');

    // Attach click events for fullscreen viewer
    const items = grid.querySelectorAll('.gallery-item');
    items.forEach(el => {
      el.addEventListener('click', () => {
        const index = parseInt(el.getAttribute('data-index'), 10);
        openFullscreenViewer(index);
      });
    });
  }

  // Filter Buttons Handler
  function setupFilterEvents() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        populateGalleryGrid(filter);
      });
    });
  }

  // Open Fullscreen Lightbox
  function openFullscreenViewer(index) {
    if (!currentActiveGallery || currentActiveGallery.length === 0) return;
    currentImageIndex = index;
    updateViewerImage();
    if (imageViewerModal) {
      imageViewerModal.classList.add('active');
    }
  }

  // Update Image in Lightbox
  function updateViewerImage() {
    const item = currentActiveGallery[currentImageIndex];
    if (!item) return;

    if (viewerImage) viewerImage.src = item.src;
    if (viewerCounter) viewerCounter.textContent = `${currentImageIndex + 1} / ${currentActiveGallery.length}`;
    if (viewerTitle) viewerTitle.textContent = item.title;
    if (viewerCategory) viewerCategory.textContent = `${item.tag} • LEVENSA SAUDI ARABIA`;
  }

  function closeFullscreenViewer() {
    if (imageViewerModal) {
      imageViewerModal.classList.remove('active');
    }
  }

  function nextImage() {
    if (currentActiveGallery.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentActiveGallery.length;
    updateViewerImage();
  }

  function prevImage() {
    if (currentActiveGallery.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentActiveGallery.length) % currentActiveGallery.length;
    updateViewerImage();
  }

  // Fullscreen Viewer Event Listeners
  if (viewerCloseBtn) viewerCloseBtn.addEventListener('click', closeFullscreenViewer);
  if (viewerNextBtn) viewerNextBtn.addEventListener('click', nextImage);
  if (viewerPrevBtn) viewerPrevBtn.addEventListener('click', prevImage);

  if (imageViewerModal) {
    imageViewerModal.addEventListener('click', (e) => {
      if (e.target === imageViewerModal) {
        closeFullscreenViewer();
      }
    });
  }

  // Standard Modal Renderer
  function renderStandardModal(data) {
    if (!modalDialog || !modalBody) return;
    
    modalDialog.classList.remove('modal-wide');

    modalBody.innerHTML = `
      <div class="modal-hero-banner ${data.themeClass}">
        <div>
          <div class="modal-project-category">${data.category}</div>
          <h2 class="modal-project-title">${data.title}</h2>
          <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-ivory); letter-spacing: 1px;">
            ${data.heroHeadline} • ${data.heroSub}
          </p>
        </div>
      </div>

      <p class="modal-desc">${data.description}</p>

      <div class="modal-spec-grid">
        <div class="spec-item">
          <span class="spec-key">CLIENT / SCOPE</span>
          <span class="spec-val">${data.client}</span>
        </div>
        <div class="spec-item">
          <span class="spec-key">TOOLS USED</span>
          <span class="spec-val">${data.tools}</span>
        </div>
        <div class="spec-item">
          <span class="spec-key">TIMELINE</span>
          <span class="spec-val">${data.timeline}</span>
        </div>
      </div>

      <div style="margin-top: 15px;">
        <h4 style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--crimson-bright); letter-spacing: 1.5px; margin-bottom: 10px;">
          KEY DELIVERABLES & ASSETS
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${data.deliverables.map(d => `<span style="font-family: var(--font-mono); font-size: 0.75rem; background: rgba(230,57,70,0.12); color: var(--text-ivory); border: 1px solid rgba(230,57,70,0.3); padding: 5px 12px; border-radius: 4px;">✦ ${d}</span>`).join('')}
        </div>
      </div>
    `;
  }

  // Open Project Modal
  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    if (data.type === 'gallery') {
      renderLevensaGallery();
    } else {
      renderStandardModal(data);
    }

    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  // Close Main Modal
  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  // Attach card click handlers
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  // Modal close events
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Global Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (imageViewerModal && imageViewerModal.classList.contains('active')) {
      if (e.key === 'Escape') closeFullscreenViewer();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    } else if (modalBackdrop && modalBackdrop.classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
    }
  });

  // Copy Email Functionality
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toast');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2600);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const email = 'haseebali.creatives@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email address copied to clipboard!');
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }

  // View more projects action
  const viewMoreLink = document.getElementById('viewMoreLink');
  if (viewMoreLink) {
    viewMoreLink.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectModal('levensa');
    });
  }
});
