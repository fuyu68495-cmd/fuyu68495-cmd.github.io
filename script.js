const glow = document.querySelector(".cursor-glow");
const progress = document.querySelector(".scroll-progress");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("[data-section]")];
const archiveToggle = document.querySelector(".archive-toggle");
const archive = document.querySelector(".archive");
const modal = document.querySelector(".pdf-modal");
const openPdfButtons = document.querySelectorAll("[data-open-pdf]");
const closePdfButton = document.querySelector("[data-close-pdf]");

window.addEventListener("pointermove", (event) => {
  glow?.style.setProperty("--x", `${event.clientX}px`);
  glow?.style.setProperty("--y", `${event.clientY}px`);
});

const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const amount = max > 0 ? window.scrollY / max : 0;
  progress.style.transform = `scaleX(${amount})`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.hash === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-20% 0px -55% 0px",
    threshold: [0.1, 0.35, 0.65],
  },
);

sections.forEach((section) => observer.observe(section));

archiveToggle?.addEventListener("click", () => {
  const expanded = archiveToggle.getAttribute("aria-expanded") === "true";
  archiveToggle.setAttribute("aria-expanded", String(!expanded));
  archiveToggle.textContent = expanded ? "展开更多能力关键词" : "收起能力关键词";
  archive.hidden = expanded;
});

const openPdf = () => {
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  closePdfButton.focus();
};

const closePdf = () => {
  modal.hidden = true;
  document.body.style.overflow = "";
};

openPdfButtons.forEach((button) => button.addEventListener("click", openPdf));
closePdfButton?.addEventListener("click", closePdf);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) closePdf();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closePdf();
});
