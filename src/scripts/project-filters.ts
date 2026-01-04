const filterButtons = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-tag-filter]"),
);
const projectCards = Array.from(
  document.querySelectorAll<HTMLElement>("[data-project-card]"),
);

if (filterButtons.length > 0 && projectCards.length > 0) {
  const setActiveButton = (activeTag: string) => {
    filterButtons.forEach((button) => {
      const isActive = button.dataset.tag === activeTag;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  };

  const applyFilter = (tag: string) => {
    const normalizedTag = tag.toLowerCase();

    projectCards.forEach((card) => {
      const cardTags = (card.dataset.tags ?? "").split(",");
      const hasTag =
        normalizedTag === "all" || cardTags.includes(normalizedTag);
      if (hasTag) {
        card.dataset.hidden = "false";
      } else {
        card.dataset.hidden = "true";
      }
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedTag = button.dataset.tag ?? "all";
      setActiveButton(selectedTag);
      applyFilter(selectedTag);
    });
  });
}
