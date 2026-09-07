/**
 * Haseeb Ali Creative Portfolio - Interactive Scripts
 * Handles modal previews, copy to clipboard, smooth scrolling, and project data.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Project Detailed Data Store
  const projectsData = {
    levensa: {
      title: "LEVENSA E-COMMERCE CAMPAIGN",
      category: "GRAPHIC DESIGN / E-COMMERCE BRANDING",
      client: "Levensa (Saudi Arabia)",
      tools: "Photoshop, Canva Pro, Figma",
      timeline: "10 Months (Remote)",
      themeClass: "preview-levensa",
      heroHeadline: "50+ BANNERS & AD SUITES",
      heroSub: "Saudi E-Commerce Commercial Visuals",
      description: "Comprehensive graphic design support for a Saudi Arabia-based e-commerce brand. Produced over 50-70+ high-converting promotional banners, seasonal sale graphics, Instagram carousel posts, hero slider banners, and product highlight creatives adhering to strict Middle Eastern luxury and modern retail aesthetic guidelines.",
      deliverables: ["Shopify & Web Banners", "Meta & Snapchat Ad Creatives", "Product Feature Callouts", "Seasonal Promotional Sets"]
    },
    fitness: {
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

  // Modal Lightbox Elements
  const modalBackdrop = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const projectCards = document.querySelectorAll('.project-card');

  // Open Modal Function
  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

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

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close Modal Function
  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Attach card click handlers
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  // Close modal events
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
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
      showToast('Drive / Portfolio archive link ready for integration!');
    });
  }
});
