import './style.css'
import idCardGenerator from './IdCardGenerator'

const idCardGeneratorForm = document.querySelector<HTMLElement>(".idCardGeneratorForm")

idCardGeneratorForm!.addEventListener("submit", (e)=>{
    e.preventDefault()
    idCardGenerator()
})

