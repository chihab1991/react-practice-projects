const idCardGenerator = ():void =>{
    const name:HTMLInputElement = <HTMLInputElement>document.getElementById("name")
    const collegeName:HTMLInputElement = <HTMLInputElement>document.getElementById("collegeName")
    const location:HTMLInputElement = <HTMLInputElement>document.getElementById("location")

    const cardName:HTMLElement = <HTMLElement>document.querySelector(".cardName")
    const cardCollege:HTMLElement = <HTMLElement>document.querySelector(".cardCollege")
    const cardLocation:HTMLElement = <HTMLElement>document.querySelector(".cardLocation")
    
    cardName.innerText = name.value
    cardCollege.innerText = collegeName.value
    cardLocation.innerText = location.value
    
    name.value= ""
    collegeName.value=""
    location.value= ""

    const idCardWrapper =  document.querySelector<HTMLElement>(".idCardWrapper")
    idCardWrapper!.style.display = "block"
}

export default idCardGenerator