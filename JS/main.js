const ProgressDiv = document.querySelector(".progress-div"),
  ProgressBar = document.querySelectorAll(".progress-bar"),
  CounterDiv = document.querySelector(".counter-div"),
  CounterTag = document.querySelectorAll(".counter-div h3");

ScrollOut({
  targets: ".progress-div, .counter-div",
});

//
window.addEventListener("scroll", function () {
  if (ProgressDiv.dataset.scroll == "in") {
    ProgressBar.forEach((el) => {
      let ValueNow = el.getAttribute("aria-valuenow");
      el.style.width = ValueNow + "%";
      let counterspan = el.parentElement.parentElement.querySelector(
        ".progress-value span"
      );
      let timer = setInterval(() => {
        if (Number(counterspan.textContent) < ValueNow) {
          counterspan.textContent = Number(counterspan.textContent) + 1;
        } else {
          clearInterval(timer);
        }
      }, 500);
    });
  } else {
    ProgressBar.forEach((el) => {
      el.style.width = 0 + "%";
      el.parentElement.parentElement.querySelector(
        ".progress-value span"
      ).textContent = 0;
    });
  }

  //Counter//

  if (CounterDiv.dataset.scroll == "in") {
    CounterTag.forEach((el) => {
      let time = setInterval(() => {
        if (Number(el.innerText) < el.dataset.counter) {
          el.innerText = Number(el.innerText) + 1;
        } else {
          clearInterval(time);
        }
      }, 1000);
    });
  } else {
    CounterTag.forEach((el) => {
      el.innerText = 0;
    });
  }
});
// Filter //
const filterListItems = document.querySelectorAll(".list-group li"),
  filterItems = document.querySelectorAll(".filterd-items a");
filterListItems.forEach((list) => {
  list.addEventListener("click", () => {
    document.querySelector(".list-group li.active").classList.remove("active");
    list.classList.add("active");
    let FilterValue = list.dataset.filter;
    filterItems.forEach((item) => {
      if (item.classList.contains(FilterValue)) {
        item.classList.add("active");
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
        item.classList.remove("active");
      }
    });
  });
});
//lightgallery

lightGallery(document.getElementById("lightgallery"), {});

//Aos init
AOS.init();
