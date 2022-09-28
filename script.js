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

const market_detail_close = () => {
    const market_detail = document.getElementById("market_detail");
    market_detail.classList.add("move_left");
    setTimeout(() => {
        market_detail.style.display = "none";
        market_detail.classList.remove("move_left");
    }
        , 500);
}

const market_detail_content_img = () => {
    const market_detail_content = document.getElementById("market_detail_content");
    // create img
    const img_list = []
    for (let i = 1; i < 5; i++) {
        const img = document.createElement("img");
        img.src = `./detail_img/00${i}.jpg`;
        img_list.push(img);
        img.classList.add("market_detail_content_img");
    }
    // append img
    for (let i = 0; i < img_list.length; i++) {
        market_detail_content.appendChild(img_list[i]);
    }
}
market_detail_content_img();