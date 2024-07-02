console.log(document.getElementById("header"))
window.addEventListener("scroll",() => 
    {document.getElementById("bg").classList.add("backg")
        document.getElementById("header").classList.remove("backg2")
    })  