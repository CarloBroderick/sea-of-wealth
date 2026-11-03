(() => {
  const previewSection = new URLSearchParams(window.location.search).get("preview-section");
  if (previewSection) window.addEventListener("load", () => setTimeout(() => document.getElementById(previewSection)?.scrollIntoView(), 250));
  const content = window.SEA_OF_WEALTH || { retailers: [], events: [], press: [] };
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderRetailers = () => {
    const container = document.querySelector("[data-retailers]");
    if (!container) return;
    container.innerHTML = content.retailers.map((item, index) =>
      `<a class="retailer-button ${index === 0 ? "featured" : ""}" href="${item.url}" target="_blank" rel="noreferrer">${item.label}<span aria-hidden="true">↗</span></a>`
    ).join("");
  };

  const formatDate = (date) => new Intl.DateTimeFormat("en-US", {
    month: "short", day: "numeric", year: "numeric"
  }).format(new Date(`${date}T12:00:00`));

  const renderEvents = () => {
    const container = document.querySelector("[data-events]");
    if (!container) return;
    if (!content.events.length) {
      container.innerHTML = `<div class="empty-state reveal"><span>Tour dates coming soon</span><p>Check back for readings, talks, and conversations about the future of the ocean.</p></div>`;
      return;
    }
    container.innerHTML = content.events.map((event) => `
      <a class="event-row reveal" href="${event.url}" target="_blank" rel="noreferrer">
        <time datetime="${event.date}">${formatDate(event.date)}</time>
        <span><strong>${event.city}</strong><small>${event.venue}${event.note ? ` · ${event.note}` : ""}</small></span>
        <b aria-hidden="true">↗</b>
      </a>`).join("");
  };

  const renderPress = () => {
    const container = document.querySelector("[data-press]");
    if (!container) return;
    if (!content.press.length) {
      container.innerHTML = `
        <div class="press-placeholder reveal"><span>Reviews</span><p>Critical responses and book reviews will appear here.</p></div>
        <div class="press-placeholder reveal"><span>Conversations</span><p>Interviews and podcasts will appear here.</p></div>
        <div class="press-placeholder reveal"><span>Excerpts</span><p>Selected writing and adapted excerpts will appear here.</p></div>`;
      return;
    }
    container.innerHTML = content.press.map((item) => `
      <a class="press-card reveal" href="${item.url}" target="_blank" rel="noreferrer">
        <span>${item.type} · ${formatDate(item.date)}</span><h3>${item.title}</h3><p>${item.outlet}</p><b aria-hidden="true">Read ↗</b>
      </a>`).join("");
  };

  navToggle?.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav?.classList.toggle("open", !open);
    document.body.classList.toggle("nav-open", !open);
  });

  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("open");
    document.body.classList.remove("nav-open");
  }));

  const creditToggle = document.querySelector("[data-credit-toggle]");
  const credits = document.querySelector("[data-credits]");
  creditToggle?.addEventListener("click", () => {
    const open = creditToggle.getAttribute("aria-expanded") === "true";
    creditToggle.setAttribute("aria-expanded", String(!open));
    credits.hidden = open;
  });

  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  renderRetailers();
  renderEvents();
  renderPress();
  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  const reveals = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    reveals.forEach((el) => observer.observe(el));
  }
})();
