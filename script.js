const item_info = () => {
    const item_detail = document.getElementById("item_detail");
    item_detail.style.display = "flex";
}
const modal_close = () => {
    const item_detail = document.getElementById("item_detail");
    item_detail.classList.add("move_left");
    setTimeout(() => {
        item_detail.style.display = "none";
        item_detail.classList.remove("move_left");
    }
    , 500);
}

const market_detail_show = () => {
    const market_detail = document.getElementById("market_detail");
    market_detail.style.display = "flex";
}

const msg_alert = (msg) => {
    Swal.fire({
        title: msg,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
}