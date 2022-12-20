#!/usr/bin/node
window.onload = function() {
  const qs = document.querySelector('div.amenities h4');
  //qs.innerHTML = "<b>foo</b>";
  const checkbox = document.getElementsByClassName('ckbx');
  const mydict = {};

  checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      mydict[checkbox.dataset.id] = checkbox.dataset.name;
    } else {
      delete mydict[checkbox.dataset.id];
    }
  });
  qs.innerHTML = mydict;
};
