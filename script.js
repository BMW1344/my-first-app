document.getElementById("open-modal-btn").addEventListener("click",function() {
    document.getElementById("my-modal").classList.add("open")
})


document.getElementById("close-my-modal-btn").addEventListener("click",function() {
    document.getElementById("my-modal").classList.remove("open")
})

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
})