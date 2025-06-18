const Container = document.querySelector(".container");

// const fetchRequest = () => {
//   const data = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => data.json())

//     .then((data) => {
//       const newData = data.slice(0, 10);

//       newData.forEach((data, index) => {
//         const div = document.createElement("div");
//         div.innerHTML = `
//         <span>${data.id}</span>
//         <h3>${data.title}</h3>
//         <p>${data.body}</p>
//         `;
//         Container.appendChild(div);
//         console.log(data);
//       });
//     })
//     .catch((err) => console.log(err.message));
// };

// fetchRequest();

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const newArray = data.slice(0, 10);

  newArray.forEach((data) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="data">
    <span>${data.id}</span>
    <h3>${data.title}</h3>
    </div>
    <p>${data.body}</p>
    `;

    Container.appendChild(div);
  });

  console.log(data);
}

fetchData();
