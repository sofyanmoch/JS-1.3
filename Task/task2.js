const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January','February','March','April','Mei','Juni','July','August','September','October','November','Desember'];
        if(!error){
            callback(null,month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    },4000)
};

getMonth((zonk,showCallback) => {
    if(showCallback) {
        showCallback.map(m => console.log(m))
    }else{
        console.log(zonk.message)
    }

})