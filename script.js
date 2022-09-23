function market_search() {
    let search = document.getElementById("market_search");
    let magnifier = document.getElementById("magnifier");
    search.addEventListener("focus", function () {
        magnifier.style.display = "none";
        search.style.placeItems = "center";
    });
}

market_search();