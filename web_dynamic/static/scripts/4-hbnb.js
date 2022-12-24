#!/usr/bin/node
const qs = document.querySelector("div.amenities h4");
const bx = document.getElementsByTagName("input");
const le = bx.length;
const arr = [];
const dicId = {};

for (let i = 0; i < le; i++) {
  let checkbox = document.getElementsByTagName("input")[i];
  checkbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      if (String(qs.innerHTML) === "&nbsp;") {
        arr.push(checkbox.dataset.name);
        dicId[dataset.id] = dataset.name;
        qs.innerHTML = arr.join(", ");
      } else {
        arr.push(checkbox.dataset.name);
        arrId.push(checkbox.dataset.id);
        qs.innerHTML = arr.join(", ");
      }
    } else if (event.currentTarget.checked === false) {
      const idx = arr.indexOf(checkbox.dataset.name);
      arr.splice(idx, 1);
      delete dicId[dataset.id];
      if (arr.length === 0) {
        qs.innerHTML = "&nbsp;";
      } else {
        qs.innerHTML = arr.join(", ");
      }
    }
  });
}

async function makeRequest() {
  try {
    const response = await fetch("http://localhost:5001/api/v1/status/");

    const data = await response.json();

    const circle = document.getElementById("api_status");

    console.log(data);

    if (data.status === "OK") {
      circle.classList.add("available");
    } else {
      circle.classList.remove("available");
    }
  } catch (err) {
    console.log(err);
  }
}

makeRequest();

function amenPost() {
  fetch("http://localhost:5001/api/v1/places_search/", {})
    .then((response) => response.json())
    .then((data) => {
      if (data.status != "OK") {
        return;
      }
    });
  fetch("http://localhost:5001/api/v1/places_search/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amenities: dicId }),
  })
    .then((response) => response.json())
    .then((data) => {
      for (const place of data) {
        pls.innerHTML += `<article>
              <div class="title_box">
                <h2>${place.name}}</h2>
                <div class="price_by_night">$${place.price_by_night}</div>
              </div>
              <div class="information">
                <div class="max_guest">${place.max_guest} Guest${
          place.max_guest != 1 ? "s" : ""
        }</div>
                      <div class="number_rooms">${place.number_rooms} Bedroom${
          place.number_rooms != 1 ? "s" : ""
        }</div>
                      <div class="number_bathrooms">${
                        place.number_bathrooms
                      } Bathroom${place.number_bathrooms != 1 ? "s" : ""}</div>
              </div>
              <div class="user">
                      <b>Owner:</b> ${place.user.first_name} ${
          place.user.last_name
        }
                    </div>
                    <div class="description">
                ${place.description | safe}
                    </div>
            </article>`;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const but = document.querySelector('button[type="button"]');
but.addEventListener("click", amenPost());
