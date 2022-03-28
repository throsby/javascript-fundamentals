
//Bad, no, don't
const request = () => {
    return fetch("https://raw.githubusercontent.com/throsby/javascript-fundamentals/main/test/asdf.json")
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log("Data returned is: ",data)
    })
}


let data;
const request2 = async () => {
    let req = await fetch("https://raw.githubusercontent.com/throsby/javascript-fundamentals/main/test/asdf.json")
    let res = await req.json();
    // console.log(await res)
    data = res
    return res
}


// data = request2()
// Fetch 
// returns a Promise object
// in order to operate on that, 
// you need to wait until the promise resolves