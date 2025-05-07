export default function renderInternetState() {
    const stateTag = document.getElementById("internetState")
    if (navigator.onLine) {
        stateTag.innerText = "Online"
    } else {
        stateTag.innerText = "Offline"
    }
}

window.addEventListener("online", renderInternetState)

window.addEventListener("offline", renderInternetState)