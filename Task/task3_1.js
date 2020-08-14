const makeCoffe = new Promise((resolve,reject) => {
    let bijiKopi = 2
    setTimeout(() => {
        if(bijiKopi >= 5){
            resolve("Kopi akan dibuat")
        }else{
            reject("Biji Kopi Habis")
        }
    },3000)
})

makeCoffe.then((response) => {
    console.log('Terpenuhi')
    console.log(response)
}).catch((error) => {
    console.log('Tidak Terpenuhi')
    console.log(error)
})