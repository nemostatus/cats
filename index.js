const div = document.getElementById("test")
const handle = () => {
fetch('https://cat-fact.herokuapp.com/facts')
.then(resp => resp.json())
.then(data => {  
 for(let cat of data.all){
 document.getElementById("test").innerHTML += `<ul><li>${cat.text}</li></ul>`
 }})
}