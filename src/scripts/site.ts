const root = document.documentElement;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (!reduce && fine) {
  let frame = 0;
  let x = 0.72;
  let y = 0.22;

  window.addEventListener(
    "pointermove",
    (event) => {
      x = event.clientX / window.innerWidth;
      y = event.clientY / window.innerHeight;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        root.style.setProperty("--px", x.toFixed(3));
        root.style.setProperty("--py", y.toFixed(3));
      });
    },
    { passive: true },
  );
}

const menu = document.querySelector<HTMLDetailsElement>(".nav-menu");

if (menu) {
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.open = false;
    });
  });

  document.addEventListener("click", (event) => {
    if (!menu.open) return;
    if (event.target instanceof Node && menu.contains(event.target)) return;
    menu.open = false;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) menu.open = false;
  });
}
