document.addEventListener("DOMContentLoaded", () => {
    const randomComment = document.querySelector(".random-comment")
    const btn = document.querySelector(".btn")
    const apiUrl = "https://jsonplaceholder.typicode.com/comments/";

    async function getJoke() {
      const randomNum = Math.floor(Math.random() * 500) + 1;
      const response = await fetch(apiUrl + randomNum);
      const data = await response.json();

      randomComment.innerHTML = `Comments: ${data.body}`
    }

    btn.addEventListener("click", getJoke);
})