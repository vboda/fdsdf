// var gplay = require('google-play-scraper');  //statement 1
// /* google-play-scraper is a module under npm, which avails you data about applications on play store.*/
// const  scrapper = async (app_package) => {
//     console.log("Hi I got called");
//     var result = await gplay.app({appId: app_package}).catch();
//     console.log("app_package_name :", result.appId);
//     console.log("title :", result.title);
//     console.log("installs :",   result.installs);
//     console.log("score :",   result.score);
//     console.log("ratings :",   result.ratings);
//     console.log("released :",   result.released);
// }
// const printNumbersForEvery2Sec = (n)=>{
//     for (let i = 1; i <= 50; i++) {
//         // console.log(i);
//         setTimeout( () =>{
//           console.log(i)
//         }, 1000)
//     }
// }

// const printNumbersForEvery = (n)=>{
//     for (let i = 51; i <= 100; i++) {
//         // console.log(i);
//         setTimeout( () =>{
//           console.log(i)
//         }, 0)
//     }
// }
// scrapper("com.whatsapp");     //statement 2
// /* com.whatsapp is the app_package_name for WhatsApp.*/

// printNumbersForEvery2Sec(10);    // statement 3
// /* prints a number after every two seconds.*/
// printNumbersForEvery(23);

function test() {
    /* let i = 0;
    while(i < 5) {
        if(i === 3) return 'returning value';
        else {
            console.log(i);
            i++;
        }
    } */

    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 1; j ++) {
            if(i === 3) return 'returning value';
            else console.log(i);
        }
    }
}

console.log(test());