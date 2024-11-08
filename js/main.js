const setUpRow = () => {
  const firstHiddenRow = document.querySelector(".hidden-row");
  if(!firstHiddenRow) return

  const items = document.querySelectorAll(".row:not(.hidden-row) .up-item");
  const lastItem = items[items.length - 1];
  lastItem.classList.add("show-more");
  const showMore = document.createElement("h3");
  showMore.classList.add("show-more-text");
  showMore.innerText = "Zobacz więcej";
  lastItem.appendChild(showMore);

  lastItem.addEventListener("click", function() {
    this.classList.remove("show-more");
    firstHiddenRow.classList.remove("hidden-row");
    setUpRow();
  });
};

setUpRow();
