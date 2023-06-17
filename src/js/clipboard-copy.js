const textContainers = document.querySelectorAll(".text-container");

function unhighlightSelection() {
  if (window.getSelection) {
    var selection = window.getSelection();
    selection.removeAllRanges();

    // Check if there is a focused element and remove its focus
    var focusedElement = document.activeElement;
    if (focusedElement && focusedElement.blur) {
      focusedElement.blur();
    }
  } else if (document.selection) {
    document.selection.empty();
  }
}

textContainers.forEach((container) => {
  container.querySelector("button").addEventListener("click", () => {
    const input = container.querySelector("input");
    input.select();
    document.execCommand("copy");
    container.classList.add("active");
    unhighlightSelection();
    setTimeout(function () {
      container.classList.remove("active");
    }, 500);
  });
});
