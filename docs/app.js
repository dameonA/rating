import tester from"./reviews.js";import data from"./reviews.js";function stars(a){switch(a){case 1:return'\n        <div>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>\n        </div>\n        ';case 2:return'\n        <div>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>\n        </div>\n        ';case 3:return'\n        <div>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>\n        </div>\n        ';case 4:return'\n        <div>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star"></i>\n        </div>\n        ';case 5:return'\n        <div>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        <i class="fa fa-star" style="color:#ffe500"></i>\n        </div>\n        ';default:return'\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>\n        <i class="fa fa-star"></i>'}}console.log(stars());const ratings=document.querySelector(".name"),container=document.querySelector(".container");container.innerHTML=data.map(a=>`\n    <ul class="frame">\n        <li class="name">${a.name}</li>\n        <li class="rating">${stars(a.rating)}</li>\n        <li class="comments">${a.review}</li>\n    </ul>\n    `).join(" ");