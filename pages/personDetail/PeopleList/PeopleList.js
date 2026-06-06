const API_KEY = "4db4c127c9e12cf3e22406d2a3f62323";

const grid = document.getElementById("people-grid");

const pagination = document.getElementById("pagination");

let currentPage = 1;

const TOTAL_PAGES = 500;
async function loadPeople(page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&page=${page}`,
  );

  const data = await response.json();

  renderPeople(data.results);

  createPagination(page);
}
function renderPeople(people) {
  grid.innerHTML = "";

  people.forEach((person) => {
    const image = person.profile_path
      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
      : "https://via.placeholder.com/500";

    const knownFor = person.known_for
      .map((item) => item.title || item.name)
      .join(", ");

    grid.innerHTML += `
      <div class="card">
        <img src="${image}" alt="${person.name}">

        <div class="card-body">
          <h3>${person.name}</h3>

          <p>
            ${knownFor || "No known titles"}
          </p>
        </div>
      </div>
    `;
  });
}

function createPagination(page) {
  pagination.innerHTML = "";

  let start = Math.max(1, page - 3);

  let end = Math.min(TOTAL_PAGES, page + 3);

  for (let i = start; i <= end; i++) {
    const btn = document.createElement("button");

    btn.textContent = i;

    btn.classList.add("page-btn");

    if (i === page) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      currentPage = i;

      loadPeople(i);
    });

    pagination.appendChild(btn);
  }
}
loadPeople(1);
