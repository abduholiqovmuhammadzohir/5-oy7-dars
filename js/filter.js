import { getDataFromLocalStorage,createCard } from "./functions.js";

const wrapper = document.getElementById("product-list");
const button = document.getElementById("button");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const type = document.getElementById("type");
const color = document.getElementById("color");
const search = document.getElementById("search");
const form = document.getElementById('form');

let data = getDataFromLocalStorage();
document.addEventListener('DOMContentLoaded', function (){
    if (data.length) {
        data.forEach(phone => {
            let card = createCard(phone);
            wrapper.innerHTML += card;
        });
    }
}) 

button && button.addEventListener('click', function(e){

    e.preventDefault();
    let filter = {};

    if (color.value) {
        filter.color = color.value;
    }
    if (type.value) {
        filter.type = type.value;
    }
    if (minPrice.value) {
        filter.minPrice = minPrice.value;
    }
    if (maxPrice.value) {
        filter.maxPrice = maxPrice.value;
    }
    if (search.value) {
        filter.search = search.value;
    }

     let filterData = JSON.parse(JSON.stringify(data));
     if (filter.color) {
        filterData = filterData.filter( el => {
            return el.color == filter.color
        })
     }

     if (filter.type) {
        filterData = filterData.filter( el => {
            return el.type == filter.type
        })
     }

     if (filter.minPrice) {
        filterData = filterData.filter( el => {
            return el.price >= filter.minPrice
        })
     }

     if (filter.maxPrice) {
        filterData = filterData.filter( el => {
            return el.price <= filter.maxPrice
        })
     }

     if (filter.search) {
        filterData = filterData.filter( el => {
            return el.search <= filter.search
        })
     }
   

     wrapper.innerHTML = '';
     if (filterData.length) {
        filterData.forEach(phone => {
            let card = createCard(phone);
            wrapper.innerHTML += card;
        })
     }else{
        wrapper.innerHTML = "Bunday mahsulot mavjud emas"
     }

     form.reset();

}) 