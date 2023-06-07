const product = [
    {
        id: 0,
        image: "image/pexels-andrea-piacquadio.jpg",
        title: "pexels-andrea-piacquadio",
        price: 150,
    },
    {
        id: 1,
        image: "image/pexels-karolina-grabowska.jpg",
        title: "pexels karolina grabowska",
        price: 170,
    },
    {
        id: 2,
        image: "image/pexels-matheus-viana.jpg",
        title: "pexels matheus viana",
        price: 450,
    },
    {
        id: 3,
        image: "image/pexels-karolina-grabowska.jpg",
        title: "pexels karolina grabowska",
        price: 22,
    },
    {
        id: 4,
        image: "image/pexels-karolina-grabowskaa.jpg",
        title: "pexels karolina grabowskaa",
        price: 1024,
    }
];
[
    {
        id: 5,
        image: "image/pexels-pnw-production.jpg",
        title: "pexels-pnw-production",
        price: 210,
    },
    {
        id: 6,
        image: "image/soup.jpeg",
        title: "hot sweet soup",
        price: 85,
    },
    {
        id: 7,
        image: "image/pexels-anj-namoro.jpg",
        title: "pexels anj namoro",
        price: 250,
    },
    {
        id: 8,
        image: "image/pexels-erik-mclean.jpg",
        title: "pexels erik mclean",
        price: 350,
    }
];
[
    {
        id: 9,
        image: "image/pexels-hamza-nouasria.jpg",
        title: "pexels hamza nouasria",
        price: 412,
    },
    {
        id: 10,
        image: "image/pexels-hamza-nouasria-fav.jpg",
        title: "pexels hamza nouasria fav",
        price: 500,
    },
    {
        id: 11,
        image: "image/pexels-mica-asato.jpg",
        title: "pexels mica asato",
        price: 1000,
    },
    {
        id: 12,
        image: "image/pexels-pnw-production.jpg",
        title: "pexels pnw production",
        price: 1230,
    },
];
[
    {
        id: 13,
        image: "image/pexels-rumeysa-topuz.jpg",
        title: "pexels rumeysa topuz",
        price: 1220,
    },
    {
        id: 14,
        image: "image/pexels-timothy-paule-ii.jpg",
        title: "pexels timothy paule ii",
        price: 125,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById("root").innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class="box">
            <div class="img-box">
            <img class="images" src=${image}></img>
            </div>
            <div class="bottom">
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join("")

    var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function displaycart(a){
    cart.splice(a, 1);
    displaycart();
}

    function displaycart(a){
        let j = 0, total=0;
        document.getElementById("count").innerHTML =cart.length;
        if(cart.length==0){
            document.getElementById("cartItem").innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "$ "+0+".00";        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+total+".00";
                return(
                    `<div class="cart-item">
                    <div class="row-img">
                    <img class="rowing" src=${image}>
                    </div>
                    <p styel="font-size:12px;">${title}</p>
                    <h2 style="font-size: 15px;">$ ${title}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                ); 
            }).join("");
        }
    }