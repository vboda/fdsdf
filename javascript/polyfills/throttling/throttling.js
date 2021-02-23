let counter = 1;
const resizingWindow = () => {
    console.log('window resizing', counter++);
}

const betterFunc = throttling(resizingWindow, 300);

window.addEventListener('resize', betterFunc);

function throttling (fn, delayTime) {
    let flag = true;
    return function () {
        const context = this;
        const args = arguments;
        if(flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout( () => {
                flag = true;
            }, delayTime)
        }
    }
}