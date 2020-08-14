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
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

const handlerSuccess = success => {
    console.log(success)
}

const handlerRejected = rejected => {
    console.log(rejected.message)
}

cekHariKerja('sejglasa')
.then(handlerSuccess)
.catch(handlerRejected)

