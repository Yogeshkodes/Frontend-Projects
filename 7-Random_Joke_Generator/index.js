const JokeContainer = document.querySelector(".joke-container");

const Refreshbtn = document.querySelector(".btn");

let loading = false;

const fetchJoke = async function () {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
    );

    const data = await res.json();
    console.log(data.data);
    if (data && data.data) showJoke(data.data);
  } catch (error) {
    console.error(error);
  } finally {
    loading = false;
  }
};

function showJoke(data) {
  const htmlString = `
    <div class="jokes">
        ${data.content}
    </div>
  `;

  JokeContainer.innerHTML = htmlString;
}

Refreshbtn.addEventListener("click", () => {
  try {
    loading = true;

    if (loading) {
      const htmlString = `
    <div class="loading">
       Loading ! Please Wait 
    </div>
  `;
      JokeContainer.innerHTML = htmlString;
    }
    fetchJoke();
  } catch (error) {
    console.error(error);
  } finally {
    loading = false;
  }
});

fetchJoke();
