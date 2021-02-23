const filterItems = () => {
    // I would like to call api based on filter
    console.log('calling api');
}

const betterFunc = debounce(filterItems, 300);

function debounce (fn, timeTowwait){
    var timer;
    return () => {
        let context = this;
        clearTimeout(index);
        timer = setTimeout(() => {
           fn.apply(context, arguments);
        }, timeTowwait);
    }
}