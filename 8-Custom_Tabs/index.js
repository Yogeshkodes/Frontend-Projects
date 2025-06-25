const tabs = ["Home", "Services", "Project", "Protfolio", "Contact"];

const Container = document.querySelector(".container");
const TabsContainer = document.querySelector(".tabs-container");
const Content = document.querySelector(".content");

function showTabs() {
  tabs.map((tab, index) => {
    const btn = document.createElement("button");
    btn.classList.add("tabs");
    btn.textContent = tab;
    if (index === 0) {
      Content.textContent = `This is ${tab} Section`;
      btn.classList.add("active");
    }
    TabsContainer.appendChild(btn);
  });
}

showTabs();

const btnTabs = document.querySelectorAll(".tabs");

btnTabs.forEach((btnTab, index) => {
  btnTab.addEventListener("click", (e, index) => {
    btnTabs.forEach((btn) => btn.classList.remove("active"));

    btnTab.classList.add("active");
    const value = e.target.textContent;
    Content.textContent = `This is ${value} Section`;
  });
});
