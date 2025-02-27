fetch("products.json") // get the json with fitch 
    .then(Response => Response.json())  // then get the json as object
    .then(data => { // loop on every product in this data
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        const swiperItemsSale = document.getElementById("swiper-items-sale")
        data.forEach(product => {
            if (product.old_price) { // if there is an old price there is a sale
                const isfound = cart.some(cartItem => cartItem.id == product.id) 
                const sale = Math.floor((product.old_price - product.price) / product.price  * 100)
                swiperItemsSale.innerHTML += // add every thing to the products section

                    `
        <div class="swiper-slide product">
                    <span class="sale-presetn">${sale}%</span>
                    <div class="img-product">
                    <a href=""><img src="${product.img}" alt=""></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product">
                        <a href="">${product.name}</a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old-price">$${product.old_price}</p>
                    </div>
                    <div class="icons">
                  <span class="btn-add-cart ${isfound ? "active" : ""} " data-id="${product.id}">

                            <i class="fa-solid fa-cart-shopping"></i>${isfound ? "Item In Cart" : "Add To Cart"}
                        </span>
                        <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
                `
            }

        })
    })
// ############## 
    fetch("products.json")
    .then(Response => Response.json())
    .then(data => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
    
        const swiperSale = document.getElementById("swiper-item")
        data.forEach(product => {
            if (product.catetory == "electronics") {
                const isfound = cart.some(cartItem => cartItem.id == product.id) 
                
                const oldPriceP = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
                const sale = Math.floor((product.old_price - product.price) / product.price  * 100)
                const salePres = product.old_price ? `<span class="sale-presetn">${sale}%</span>` : "";
                
                swiperSale.innerHTML +=

                    `
        <div class="swiper-slide product">
                    ${salePres}
                    <div class="img-product">
                    <a href=""><img src="${product.img}" alt=""></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product">
                        <a href="">${product.name}</a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${oldPriceP}
                    </div>
                    <div class="icons">
                             <span class="btn-add-cart ${isfound ? "active" : ""} " data-id="${product.id}">

                            <i class="fa-solid fa-cart-shopping"></i>${isfound ? "Item In Cart" : "Add To Cart"}

                        </span>
                        <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
                `
            }

        })
    })

//  mobil
    
   fetch("products.json")
    .then(Response => Response.json())
       .then(data => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        
    
        const mobilCAt = document.getElementById("swiper-item-mobil")
        data.forEach(product => {
            if (product.catetory == "mobiles") {
                const isfound = cart.some(cartItem => cartItem.id == product.id) 

                   const oldPriceP = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
                const sale = Math.floor((product.old_price - product.price) / product.price  * 100)
                const salePres = product.old_price ? `<span class="sale-presetn">${sale}%</span>` : "";
                
                mobilCAt.innerHTML +=

                    `
        <div class="swiper-slide product">
                    <div class="img-product">
                    ${salePres}
                    <a href=""><img src="${product.img}" alt=""></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product">
                        <a href="">${product.name}</a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${oldPriceP}
                    </div>
                    <div class="icons">
                            <span class="btn-add-cart ${isfound ? "active" : ""} " data-id="${product.id}">


                                                       <i class="fa-solid fa-cart-shopping"></i>${isfound ? "Item In Cart" : "Add To Cart"}

                        </span>
                        <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
                `
            }

        })
    })
// electrical devices 
      fetch("products.json")
    .then(Response => Response.json())
          .then(data => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        
    
        const appliances = document.getElementById("swiper-item-appliances")
        data.forEach(product => {

            
            if (product.catetory == "appliances") {
                const isfound = cart.some(cartItem => cartItem.id == product.id) // check if the item in local sotrage or no


                   const oldPriceP = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
                const sale = Math.floor((product.old_price - product.price) / product.price  * 100)
                const salePres = product.old_price ? `<span class="sale-presetn">${sale}%</span>` : "";
                
                appliances.innerHTML +=
                    `
        <div class="swiper-slide product">
                    <div class="img-product">
                    ${salePres}
                    <a href=""><img src="${product.img}" alt=""></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product">
                        <a href="">${product.name}</a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${oldPriceP}
                    </div>
                    <div class="icons">
                                      <span class="btn-add-cart ${isfound ? "active" : ""} " data-id="${product.id}">
                                      
                            <i class="fa-solid fa-cart-shopping"></i>${isfound ? "Item In Cart" : "Add To Cart"}

                        </span>
                        <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
                `
            }
        })
    })