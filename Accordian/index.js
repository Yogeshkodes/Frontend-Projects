// import data from "./data";

const Section = document.querySelector(".Section");

const data = [
  {
    question: "What are accordian components?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis mollitia eum. Quas, quia sunt. Eos quae iure aliquam aperiam sunt sit asperiores commodi, ratione voluptatibus dignissimos voluptas, minima libero",
  },
  {
    question: "What are they used for?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis mollitia eum. Quas, quia sunt. Eos quae iure aliquam aperiam sunt sit asperiores commodi, ratione voluptatibus dignissimos voluptas, minima libero",
  },
  {
    question: "Accordian as musical instrument?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis mollitia eum. Quas, quia sunt. Eos quae iure aliquam aperiam sunt sit asperiores commodi, ratione voluptatibus dignissimos voluptas, minima libero",
  },
  {
    question: "Can i create an accordian component with a different framework?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis mollitia eum. Quas, quia sunt. Eos quae iure aliquam aperiam sunt sit asperiores commodi, ratione voluptatibus dignissimos voluptas, minima libero",
  },
  {
    question: "What are accordian components?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis mollitia eum. Quas, quia sunt. Eos quae iure aliquam aperiam sunt sit asperiores commodi, ratione voluptatibus dignissimos voluptas, minima libero",
  },
];

function createElement() {
  data.map((data) => {
    const div = document.createElement("div");
    // div.classList.add("accordian");
    div.innerHTML = `
   <h3>${data.question}</h3>
        <p class="answer">
         ${data.answer}
        </p>
       <i class="fa-solid fa-arrow-down icon"></i>
  `;

    div.classList.add("accordian");

    return Section.appendChild(div);
  });
}

createElement();

const Icon = document.querySelectorAll(".icon");
const Answer = document.querySelectorAll(".answer");
console.log(Answer);

Icon.forEach((icon, index) =>
  icon.addEventListener("click", () => {
    // This is for when we click on something it open the accordian
    // Answer[index].classList.toggle("answer");
    // icon.classList.toggle("active");
    // Now i want to implement that if i click on another accordian it should remove previous clicked

    Answer.forEach((ans, i) => {
      if (i !== index) {
        ans.classList.add("answer");
        icon.classList.toggle("active");
      }

      Answer[index].classList.toggle("answer");
      icon.classList.toggle("active");
    });
  })
);
