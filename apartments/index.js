let apt1 = {
    bedrooms: 2, 
    sqft: 50, 
    bathrooms: 3,
    windows: 0,
    rent: 4500,
    unit: "1A",    
    tenants: [],
}

let apt2 = {
    bedrooms: 1,
    sqft: 500,
    bathrooms: 1,
    windows: 2,
    rent: 1500,
    unit: "1B",
    tenants: [],
}

let apt3 = {
    bedrooms: 2, 
    sqft: 51, 
    bathrooms: 3,
    windows: 2,
    rent: 2400,
    unit: "1C",
    tenants: [],
}

let apt4 = {
    bedrooms: 0, 
    sqft: 11, 
    bathrooms: 0,
    windows: 0,
    rent: 0,
    unit: "1D", 
    tenants: [],
}

let tenant1 = {
    name: "John Doe",
    creditScore: 400,
    salary: 15000,
    age: 30,
}

let tenant2 = {
    name: "Jane Doe",
    creditScore: 800,
    salary: 95000,
    age: 30,
    pet: "Fido"
}

let building = {
    streetAddress: "11 Broadway",
    laundry: false,
    allowsPets: false,
    apartments: [apt1, apt2, apt3],
    lease: function (apt, tenant) {
        if (apt.tenants.length === apt.bedrooms) {
            return `${apt.unit} is already full!`;
        }
        if (this.allowsPets === false && tenant.pet) {
            return `${apt.unit} is available, but you'll have to put ${tenant.pet} up for adoption`
        }
        let t = apt.tenants.push(tenant);   
        console.log(tenant.name, "has rented out", apt.unit);
        return t;
    },
    occupiedApts: function() {
        // returns only the apts that have tenants within the tenants array
        // condition to test: apt.tenants.length
        return this.apartments.filter((apt) => {
            return apt.tenants.length > 0;
        })
    },
    fullApt: function () {
      // returns only the apts that are completely full
      // condition to test: apt.tenants.length === apt.bedrooms
      return this.apartments.filter((apt) => {
          return apt.tenants.length === apt.bedrooms;
      })  
    },
}

const div = document.getElementById("building")

const render = () => {
    let h2 = document.createElement('h2')
    h2.innerText = building.streetAddress
    div.append(h2)
    let ul = document.createElement('ul')
    building.apartments.forEach((element) => {
        let li = document.createElement("li")
        li.innerText = element.unit
        let button = document.createElement("button")

        button.innerText = `RENT: Vacancies: ${element.bedrooms}`
        li.innerText = `UNIT ${element.unit}`

        button.addEventListener('click',() => {
            if (element.bedrooms <= 0) return alert("Sorry, New York is has no place for you.")
            let vacancies = element.bedrooms - 1;
            button.innerText = `RENT: Vacancies: ${vacancies}`
            element.bedrooms -= 1;
        })
        li.append(button)
        ul.append(li)
    })
    div.append(ul)
}

render()


