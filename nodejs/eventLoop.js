const fs = require('fs');

const readFile = () => {
    const startTime = Date.now();
    fs.readFile('./movieRecords.json', (error ,data) => {
        if(error) {
            console.log(error);
        }else{
            console.log(Date.now() - startTime, 'ms');
            console.log(data);
        }
    })
    setTimeout(()=>{
        console.log('SetTimeout executinh');
    }, 0);
    setImmediate(()=>{
        console.log('set Immediate executinh');
    });
    
    
}
readFile()


