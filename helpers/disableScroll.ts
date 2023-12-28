export function disableScroll(disable: boolean) {
  const body = document.querySelector("body")!;
  const header = document.querySelector("header") as HTMLElement;
  const footer = document.querySelector("footer") as HTMLElement;
  const main = document.querySelector("main") as HTMLElement;
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;

  if (header && scrollbarWidth !== 0) {
    header.classList.add("scroll-class");
  }

  if (footer && scrollbarWidth !== 0) {
    footer.classList.add("scroll-class");
  }

  if (main) {
    Object.assign(main.style, {
      paddingRight: disable ? `${scrollbarWidth}px` : 0,
    });
  }

  if (disable && scrollbarWidth !== 0) {
    body.classList.add("scroll-fixed");
  }

  if (!disable) {
    body.classList.remove("scroll-fixed");
    header.classList.remove("scroll-class");
    footer.classList.remove("scroll-class");
  }
}
