let collections = document.getElementsByClassName("calc");
for (const collectionitems of collections) {
    console.log(collectionitems);
}


function changeColor(){
    let helements = document.getElementsByClassName("h_1");
    for(hitem of helements){
        hitem.style.color = "red";
        hitem.innerText = "teka family"
        
    }
}

let person = {
    firstName:'aviel',
    lastName:'teka',
    age:22 , 
    job: 'developer',
}

function personAttribute(){
 let person = {
        firstName:'aviel',
        lastName:'teka',
        age:22 , 
        job: 'developer',
    }
    for(let personitem in person){
        document.body.innerHTML += `<div> ${person[personitem]} </div>`
    }
}
personAttribute()

function man2(){
let person2 = {
    firstName:'',
    lastName:'',
    age:''
} 
        let detailsUser1 = document.getElementById("userInput1").value;
        let lastNameUser2 = document.getElementById("userInput2").value;
        let ageUser3 = document.getElementById("userInput3").value;
    for(let some_key in person2){
      person2['firstName']  = detailsUser1
      person2['lastName']  = lastNameUser2
      person2['age']  = ageUser3
        document.body.innerHTML += `<div> ${some_key} : ${person2[some_key]}</div>`
    
    } 
}


