const item_info = () => {
    const item_detail = document.getElementById("item_detail");
    item_detail.style.display = "flex";
}
const modal_close = () => {
    const item_detail = document.getElementById("item_detail");
    setTimeout(() => {
        item_detail.style.animation = "left_to_right";
        item_detail.style.display = "none";
    }, 500);
}