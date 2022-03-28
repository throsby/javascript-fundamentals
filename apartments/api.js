let div = document.getElementById("container")
let data;

const request = async () => {
    let req = await fetch("https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json")
    let res = await req.json()
    data = res
    console.log(data)
    res.forEach((el) => {
        let img = document.createElement("img")
        let button = document.createElement('button')
        let h3 = document.createElement("h3")
        let h4 = document.createElement("h4")
        h3.innerText = el.company_name
        h4.innerText = `Vacancies ${el.vacancies}`
        button.innerHTML = `Rent Building ${el.id}`
        button.addEventListener("click",()=> {
          let updatedVacancies = --el.vacancies;
          if (updatedVacancies < 0) return alert("No More Vacancies")
          h4.innerText = `Vacancies ${updatedVacancies}`
        })
        img.setAttribute("src",el.photo)
        div.appendChild(h3)
        div.appendChild(h4)
        div.appendChild(img)
        div.appendChild(button)
    })
}

request()