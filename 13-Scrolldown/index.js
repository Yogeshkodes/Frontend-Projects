const list = document.querySelector(".list");
const scrollBottom = document.querySelector(".scrollBottom");
const scrollUp = document.querySelector(".scrollUp");

async function fetchUsers() {
  const res = await fetch(
    "https://dummyjson.com/users?limit=100&select=firstName"
  );

  const data = await res.json();

  console.log(data.users);

  if (data && data.users) displayUsers(data.users);
}

fetchUsers();

function displayUsers(data) {
  data.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.firstName;

    list.appendChild(li);
  });
}

scrollBottom.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
