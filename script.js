const nav = document.querySelector('.contact us')
fetch('/contact.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})