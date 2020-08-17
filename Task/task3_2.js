const warteg = menu => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const menuMakan = ['ayam bakar','ayam goyeng','puyuh','pizza','nasi bakar']
            let cekMenu = menuMakan.find(m => {
                return m === menu
            })
            if(cekMenu){
                resolve('Menu yang dipesan tersedia')
            }else{
                reject(`Menu yg dipesan tidak tersedia`)
            }
        },3000)
    })
}

const cekPesanan = async() => {
    try{
        const result =  await warteg('ayamf bakar')
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
cekPesanan()