"use strict";
const container = document.querySelector(".main-container");
const nameOfFood = document.querySelector("p");
const renderPizza = () => {
  fetch("https://ig-food-menus.herokuapp.com/pizzas")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(function (el) {
        const html = `<div class="food-container">
        <img src="${el.img}" alt="" />
        <div  class="nameOfFood">Name: ${el.name}</div>
        <div class="price">Price: ${el.price}</div>
        <div class="country">Country:${el.country}</div>
        <div class="description">Description:${el.dsc}</div>
        <div class="rate">Rating:${el.rate}</div>
      </div>`;
        container.insertAdjacentHTML("afterbegin", html);
      });
    });
};
renderPizza();

const renderDrinks = () => {
  fetch("https://ig-food-menus.herokuapp.com/drinks")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(function (el) {
        const html = `<div class="food-container">
          <img src="${el.img}" alt="" />
          <div  class="nameOfFood">Name: ${el.name}</div>
          <div class="price">Price: ${el.price}</div>
          <div class="country">Country:${el.country}</div>
          <div class="description">Description:${el.dsc}</div>
          <div class="rate">Rating:${el.rate}</div>
        </div>`;
        container.insertAdjacentHTML("afterbegin", html);
      });
    });
};
renderDrinks();

// data.forEach(function (el) {
//   console.log(el);
// });