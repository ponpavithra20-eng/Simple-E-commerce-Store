function addCart(name,price){


let cart =
JSON.parse(localStorage.getItem("cart")) || [];


cart.push({

name:name,
price:price

});


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert("Product Added To Cart");


}



function showCart(){


let cart =
JSON.parse(localStorage.getItem("cart")) || [];


let output="";

let total=0;


cart.forEach(item=>{


output +=
"<p>"+item.name+
" - ₹"+item.price+
"</p>";


total += item.price;


});


document.getElementById("cartItems").innerHTML=output;


document.getElementById("total").innerHTML=
"Total Amount : ₹"+total;



}



function order(){


alert(
"Order Placed Successfully!"
);


localStorage.removeItem("cart");


}



function register(){


let user={


name:
document.getElementById("name").value,


email:
document.getElementById("email").value,


password:
document.getElementById("password").value


};



localStorage.setItem(
"user",
JSON.stringify(user)
);



alert("Registration Successful");


}



function login(){


let user =
JSON.parse(localStorage.getItem("user"));


let email =
document.getElementById("loginEmail").value;


let password =
document.getElementById("loginPassword").value;



if(user.email==email &&
user.password==password){


alert("Login Successful");


}

else{


alert("Invalid Login");


}


}



if(location.pathname.includes("cart.html")){

showCart();

}
