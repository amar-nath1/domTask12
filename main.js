let uname=document.getElementById('name').value
let memail=document.getElementById('email').value
let myform=document.getElementById('my-form')
let showuser=document.getElementById('showuser')
let litems=document.getElementById('mylistitems')




myform.addEventListener('submit',addtolocal)
showuser.addEventListener('click',showAllUser)
function addtolocal(e){

    e.preventDefault()

    let uname=document.getElementById('name').value
    let memail=document.getElementById('email').value
    let key=memail
    
    let userDetails={
        Name:uname,
        Email:memail
    }
    let ud_serialized=JSON.stringify(userDetails)

    localStorage.setItem(key,ud_serialized)
    let detdes=JSON.parse(localStorage.getItem(key))

    // Booking Made with User Details
    document.write('<h3>Booking Done</h3>')
    document.write("<br>")
    document.write('Name -',detdes.Name,'<br>')
    document.write('Email -', detdes.Email)
}


function showAllUser(e){


e.preventDefault()

if (litems.firstElementChild==null){

let users=''
// list of all the users
for (let i=0;i<localStorage.length;i++){
users=JSON.parse(localStorage.getItem(localStorage.key(i))).Name

let textli=document.createElement('li')
textli.appendChild(document.createTextNode(document.createTextNode(users).textContent))
litems.appendChild(textli)
}
}
}







