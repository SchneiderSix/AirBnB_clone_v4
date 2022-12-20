#!/usr/bin/node
const checkbox = document.getElementsByClassName('ckbx');
const mydiv = document.getElementsByClassName('amenities.h4');
const myarr = [];
const mydict = {};

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    mydict[checkbox.dataset.id] = checkbox.dataset.name;
    for (const i of mydict) {
      if (i === 0) {
        myarr.push(mydict[i]);
      } else {
        myarr.push(', ' + mydict[i]);
      }
    };
  } else {
    delete mydict[checkbox.dataset.id];
  }
});
return mydiv.innerHTML = myarr;
