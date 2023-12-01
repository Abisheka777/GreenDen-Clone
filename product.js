var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})



var searchbox = document.getElementById("searchbox")
var productcontainer = document.getElementById("productcontainer")
var list = productcontainer.querySelectorAll("div")

searchbox.addEventListener("keyup", function () {
    var searchvalue = event.target.value.toUpperCase()


    for (count = 0; count < list.length; count++) {

        //this selects all the h1 values inside the div
        var productname = list[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(searchvalue) < 0) {
            list[count].style.display = "none"
        }
        else {
            list[count].style.display = "block"
        }

    }
})

