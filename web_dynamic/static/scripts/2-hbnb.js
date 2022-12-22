#!/usr/bin/node
const qs = document.querySelector("div.amenities h4");
const bx = document.getElementsByTagName("input");
const le = bx.length;
const arr = [];

for (let i = 0; i < le; i++) {
  let checkbox = document.getElementsByTagName("input")[i];
  checkbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      if (String(qs.innerHTML) === "&nbsp;") {
        arr.push(checkbox.dataset.name);
        qs.innerHTML = arr.join(", ");
      } else {
        arr.push(checkbox.dataset.name);
        qs.innerHTML = arr.join(", ");
      }
    } else if (event.currentTarget.checked === false) {
      const idx = arr.indexOf(checkbox.dataset.name);
      arr.splice(idx, 1);
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
