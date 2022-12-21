#!/usr/bin/node
window.onload = function() {
        const qs = document.querySelector('div.amenities h4');
        const bx = document.getElementsByTagName("input");
        const le = bx.length;
        const arr = [];
      
        for (let i = 0; i < le; i++) {
          let checkbox = document.getElementsByTagName("input")[i];
          checkbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
              if (String(qs.innerHTML) === '&nbsp;') {
                arr.push(checkbox.dataset.name);
                qs.innerHTML = arr.join(', ');
              } else {
                arr.push(checkbox.dataset.name);
                qs.innerHTML = arr.join(', ');
              };
            } else if (event.currentTarget.checked === false) {
              const idx = arr.indexOf(checkbox.dataset.name);
              arr.splice(idx, 1);
              if (arr.length === 0) {
                qs.innerHTML = '&nbsp;';
              } else {
                qs.innerHTML = arr.join(', ');
              };
            };
          });
        };

        async function makeRequest() {
          try {
            const response = await fetch('http://0.0.0.0:5001/api/v1/status/');
      
            const circle = document.querySelector('#api_status');
            if (response.status === 'OK') {
              circle.classList.add('available');
            } else {
              circle.classList.remove('available');
            };

          } catch (err) {
            console.log(err);
          }
        }
  
        makeRequest();
};
      