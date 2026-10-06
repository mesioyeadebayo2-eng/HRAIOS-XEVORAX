const services = [
  {
    name: "Kitchen Remodeling",
    desc: "Modern kitchens made for living.",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=82"
  },
  {
    name: "Bathroom Remodeling",
    desc: "Luxury and comfort in every detail.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=82"
  },
  {
    name: "Basement Remodeling",
    desc: "Turn unused space into opportunity.",
    img: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=900&q=82"
  },
  {
    name: "Whole-Home Remodeling",
    desc: "A complete transformation.",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=82"
  },
  {
    name: "Home Additions",
    desc: "More space for what matters.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=82"
  },
  {
    name: "Exterior Remodeling",
    desc: "Boost curb appeal and value.",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&q=82"
  }
];

const projects = [
  {
    id: 1,
    name: "Modern Kitchen Remodel",
    category: "Kitchen",
    location: "Dallas, TX",
    time: "8 weeks",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=82",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82"
    ]
  },
  {
    id: 2,
    name: "Luxury Bathroom",
    category: "Bathroom",
    location: "Plano, TX",
    time: "5 weeks",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=82",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82"
    ]
  },
  {
    id: 3,
    name: "Finished Basement",
    category: "Basement",
    location: "Frisco, TX",
    time: "7 weeks",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=82"
    ]
  },
  {
    id: 4,
    name: "Whole Home Remodel",
    category: "Whole Home",
    location: "Dallas, TX",
    time: "14 weeks",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=82",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82"
    ]
  },
  {
    id: 5,
    name: "Modern Home Addition",
    category: "Whole Home",
    location: "McKinney, TX",
    time: "10 weeks",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1000&q=82"
    ]
  },
  {
    id: 6,
    name: "Exterior Upgrade",
    category: "Exterior",
    location: "Allen, TX",
    time: "6 weeks",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1000&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1000&q=82",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=82"
    ]
  }
];

function header() {
  const el = document.getElementById("site-header");
  if (!el) return;

  const page = location.pathname.split("/").pop() || "index.html";

  el.innerHTML = `
    <header class="site-header">
      <div class="container nav">

        <a class="logo" href="index.html">
          <span class="logo-mark"></span>
          <span class="logo-text">
            XEVORAX
            <small>PREMIER HOME REMODELING</small>
          </span>
        </a>

        <nav class="nav-links" id="navLinks">
          <a class="${page === "index.html" ? "active" : ""}" href="index.html">Home</a>
          <a class="${page === "services.html" ? "active" : ""}" href="services.html">Services</a>
          <a class="${page === "projects.html" || page === "project.html" ? "active" : ""}" href="projects.html">Projects</a>
          <a class="${page === "about.html" ? "active" : ""}" href="about.html">About</a>
          <a href="index.html#reviews">Reviews</a>
          <a class="${page === "contact.html" ? "active" : ""}" href="contact.html">Contact</a>
        </nav>

        <a class="nav-cta" href="contact.html">Get a Free Estimate</a>

        <button class="menu-btn" id="menuBtn" aria-label="Open menu" type="button">
          ☰
        </button>

      </div>
    </header>
  `;

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
}

function footer() {
  const el = document.getElementById("site-footer");
  if (!el) return;

  el.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">

        <div>
          <a class="logo" href="index.html">
            <span class="logo-mark"></span>
            <span class="logo-text">
              XEVORAX
              <small>PREMIER HOME REMODELING</small>
            </span>
          </a>

          <p style="margin-top:15px">
            Beautiful spaces. Thoughtful remodeling. Built around you.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="index.html">Home</a>
          <a href="services.html">Services</a>
          <a href="projects.html">Projects</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </div>

        <div>
          <h4>Our Services</h4>
          <a href="services.html">Kitchen Remodeling</a>
          <a href="services.html">Bathroom Remodeling</a>
          <a href="services.html">Basement Remodeling</a>
          <a href="services.html">Whole-Home Remodeling</a>
          <a href="services.html">Home Additions</a>
        </div>

        <div>
          <h4>Service Areas</h4>
          <p>Dallas</p>
          <p>Plano</p>
          <p>Frisco</p>
          <p>McKinney</p>
          <p>Allen</p>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>+234 808 853 2922</p>
          <p>xevoraai2@gmail.com</p>
          <p>1234 Innovation Drive<br>Dallas, TX 75201</p>
        </div>

      </div>

      <div class="container footer-bottom">
        <span>© 2026 Xevorax Home Remodeling. All rights reserved.</span>
        <span>Privacy Policy &nbsp; Terms of Service</span>
      </div>
    </footer>
  `;
}

function serviceCard(service) {
  return `
    <article class="card">
      <img
        class="card__image"
        src="${service.img}"
        alt="${service.name}"
        loading="lazy"
      >

      <div class="card__body">
        <h3>${service.name}</h3>
        <p>${service.desc}</p>
        <a class="learn" href="contact.html">Learn More →</a>
      </div>
    </article>
  `;
}

function projectCard(project) {
  return `
    <article class="card project-card">

      <a href="project.html?id=${project.id}">
        <img
          class="card__image"
          src="${project.img}"
          alt="${project.name}"
          loading="lazy"
        >
      </a>

      <div class="card__body">
        <span class="tag">${project.category}</span>
        <h3>${project.name}</h3>
        <p>${project.location} • ${project.time}</p>

        <a class="learn" href="project.html?id=${project.id}">
          View Project →
        </a>
      </div>

    </article>
  `;
}

function renderHome() {
  const servicesGrid = document.getElementById("services-grid");

  if (servicesGrid) {
    servicesGrid.innerHTML = services.map(serviceCard).join("");
  }

  const featuredProjects = document.getElementById("featured-projects");

  if (featuredProjects) {
    featuredProjects.innerHTML =
      projects.slice(0, 3).map(projectCard).join("");
  }
}

function renderServices() {
  const el = document.getElementById("services-page-grid");

  if (!el) return;

  el.innerHTML = services.map(serviceCard).join("");
}

function renderProjects(filter = "All") {
  const el = document.getElementById("projects-grid");

  if (!el) return;

  const list =
    filter === "All"
      ? projects
      : projects.filter(project => project.category === filter);

  el.innerHTML = list.map(projectCard).join("");
}

function renderDetail() {
  const el = document.getElementById("project-detail");

  if (!el) return;

  const id =
    new URLSearchParams(location.search).get("id") || "1";

  const project =
    projects.find(item => String(item.id) === id) || projects[0];

  el.innerHTML = `
    <section
      class="detail-hero"
      style="
        background-image:
        linear-gradient(
          90deg,
          rgba(2,20,17,.8),
          rgba(2,20,17,.35)
        ),
        url('${project.img}')
      "
    >
      <div class="container">
        <p class="eyebrow">${project.category.toUpperCase()}</p>
        <h1>${project.name}</h1>
        <p>${project.location} • ${project.time}</p>
      </div>
    </section>

    <section class="section">
      <div class="container detail-body">

        <div class="detail-gallery">
          ${project.gallery.map((image, index) => `
            <img
              src="${image}"
              alt="${project.name} photo ${index + 1}"
            >
          `).join("")}
        </div>

        <aside class="detail-copy">

          <h2>Project Overview</h2>

          <p>
            This ${project.category.toLowerCase()} project was planned
            around the homeowner's goals, lifestyle and existing space.
            Our team handled the design coordination, construction and
            finishing details.
          </p>

          <div class="details-list">

            <div>
              <span>Location</span>
              <b>${project.location}</b>
            </div>

            <div>
              <span>Project Type</span>
              <b>${project.category}</b>
            </div>

            <div>
              <span>Timeline</span>
              <b>${project.time}</b>
            </div>

            <div>
              <span>Result</span>
              <b>Completed</b>
            </div>

          </div>

          <a
            class="btn btn--gold"
            style="margin-top:22px"
            href="contact.html"
          >
            Start Your Project →
          </a>

        </aside>

      </div>
    </section>
  `;
}


/* =========================================
   CONTACT FORM
   FORMSPREE + MAKE WEBHOOK
   ========================================= */

function setupEstimateForm() {
  const form = document.getElementById("estimate-form");

  if (!form) return;

  const message = document.getElementById("form-message");
  const submitButton = form.querySelector('button[type="submit"]');

  const FORMSPREE_ENDPOINT =
    "https://formspree.io/f/mvkgaane";

  const MAKE_WEBHOOK_URL =
    "https://hook.eu1.make.com/t457jivie6wja2xvuyz49dvgrokicrv4";

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (message) {
      message.textContent = "Sending your project information...";
      message.className = "form-message";
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    const formData = new FormData(form);

    try {

      /* =========================================
         1. SEND TO FORMSPREE
         ========================================= */

      const formspreeResponse = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );

      if (!formspreeResponse.ok) {

        let data = {};

        try {
          data = await formspreeResponse.json();
        } catch (error) {
          console.error("Formspree response error:", error);
        }

        if (message) {
          message.textContent =
            data.errors?.map(error => error.message).join(", ") ||
            "Something went wrong while sending your request.";
          message.className = "form-message error";
        }

        return;
      }


      /* =========================================
         2. SEND SAME DATA TO MAKE
         ========================================= */

      const makeResponse = await fetch(
        MAKE_WEBHOOK_URL,
        {
          method: "POST",
          body: formData
        }
      );

      if (!makeResponse.ok) {
        console.error(
          "Make webhook returned an error:",
          makeResponse.status
        );

        if (message) {
          message.textContent =
            "Your request was received, but our automation system could not process it right now.";
          message.className = "form-message error";
        }

        return;
      }


      /* =========================================
         3. SUCCESS
         ========================================= */

      if (message) {
        message.textContent =
          "Thank you! Your project information has been received. We'll get back to you soon.";
        message.className = "form-message success";
      }

      form.reset();

    } catch (error) {

      console.error(
        "Form submission error:",
        error
      );

      if (message) {
        message.textContent =
          "Unable to send your request right now. Please try again.";
        message.className = "form-message error";
      }

    } finally {

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent =
          "Get My Free Estimate →";
      }

    }
  });
}


/* =========================================
   PROJECT FILTERS
   ========================================= */

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll("[data-filter]");

  if (!filterButtons.length) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      renderProjects(button.dataset.filter);

    });
  });
}


/* =========================================
   START WEBSITE
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  header();

  footer();

  renderHome();

  renderServices();

  renderProjects();

  renderDetail();

  setupEstimateForm();

  setupProjectFilters();

});