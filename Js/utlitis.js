function pageF(url) {
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}


function showContentHideSpinner(spinner, data, delay) {
    setTimeout(() => {
        document.querySelector(spinner).style.display = 'none'
        document.querySelector(data).style.display = 'block'
    }, delay);
}

window.onload = function () {
    showContentHideSpinner('.spinner', '.body-card', 2000)
}


export default showContentHideSpinner;