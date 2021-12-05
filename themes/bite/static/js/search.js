/**
 * TODO: Code is not great, but works as expected.
 * Optimise later.
 */
const search = () => {
  let callback = (param) => {
    const topics = document.querySelectorAll("[data-topic]");
    const input = param.target.value;
    if (input.length < 3) {
      topics.forEach((el) => {
        el.classList.remove("hidden");
      });
      return;
    }

    topics.forEach((el) => {
      const topic = el.getAttribute("data-topic");
      if (topic.toLocaleLowerCase().includes(input)) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });
  };

  const searchInput = document.querySelector("#filter-topic");
  searchInput.addEventListener("keydown", callback);
  searchInput.addEventListener("keyup", callback);
};

document.addEventListener("DOMContentLoaded", search, false);
