let apt1 = {
    bedrooms: 2, 
    sqft: 50, 
    bathrooms: 3,
    windows: 0,
    rent: 4500,
    unit: "1A",
    lease: function (tenant) {
        this.tenants.push(tenant);
        console.log(tenant.name, "has rented out", this.unit);    
    },    
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
}

let building = {
    streetAddress: "11 Broadway",
    laundry: false,
    allowsPets: false,
    apartments: [apt1, apt2, apt3],
}

