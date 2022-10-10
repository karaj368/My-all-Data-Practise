const btnsModel = document.querySelectorAll(".model");

const modelWindow = document.querySelector(".model-window");

const closeModel = document.querySelector(".close-model");

const overlay = document.querySelector(".overlay");

for (var i = 0; i < btnsModel.length; i++)
  btnsModel[i].addEventListener("click", function () {
    modelWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

closeModel.addEventListener("click", function () {
  modelWindow.classList.add("hidden");
  overlay.classList.add("hidden");
});
