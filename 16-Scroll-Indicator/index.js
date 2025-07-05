const Container = document.querySelector(".container");
const scrollBar = document.querySelector(".scroll-bar");
const activeBar = document.querySelector(".active-scrollbar");
const ContentContainer = document.querySelector(".content");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  activeBar.style.width = `${scrollPercent}%`;
});

async function fetchContent() {
  const res = await fetch(
    "https://api.freeapi.app/api/v1/public/randomjokes?limit=50"
  );

  const data = await res.json();

  if (data && data.data.data) displayContent(data.data.data);
}

fetchContent();

function displayContent(content) {
  content.map((jokes) => {
    const div = document.createElement("div");
    div.classList.add("content");
    div.innerHTML = `
     <p>${jokes.id}</p>

        <span>${jokes.content}</span>
      
    `;

    Container.appendChild(div);
  });
}
