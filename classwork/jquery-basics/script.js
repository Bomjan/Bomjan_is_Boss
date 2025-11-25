$(document).ready(() => {
  function animateAppend(container, items) {
    let delay = 0;
    const delayIncrement = 20; // milliseconds between each item appearing

    items.forEach((item) => {
      const p = $(`<p>${item}</p>`);
      setTimeout(() => {
        container.append(p);
      }, delay);
      delay += delayIncrement;
    });
  }

  $("#button").click(() => {
    const button = $("#button");
    const messageEl = $(".message");
    const inputVal = $("#input").val();
    const v = parseInt(inputVal, 10);

    $(".odds p").remove();
    $(".evens p").remove();
    messageEl.text("");

    if (isNaN(v) || v < 0 || inputVal.trim() === "") {
      messageEl.text("Please enter a valid non-negative number.");
      return; // Stop the function
    }

    button.prop("disabled", true).text("Finding...");

    setTimeout(() => {
      const evens = [];
      const odds = [];

      for (let n = 0; n <= v; n++) {
        n % 2 ? odds.push(n) : evens.push(n);
      }

      animateAppend($(".evens"), evens);
      animateAppend($(".odds"), odds);

      button.prop("disabled", false).text("Find");
    }, 10);
  });
});
