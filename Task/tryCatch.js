const cekHariKerja = (day) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(`${cek} merupakan hari kerja`)
            }else{
                reject(`${day} bukan hari kerja`)
            }
        },3000)
    })
}

const cekKerja = async() => {
    try{
        const result = await cekHariKerja('sdselasa')
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

cekKerja()