for (const tab of document.querySelectorAll(".tab")) {
    tab.addEventListener("click", () => {showTab(tab.dataset.tab)})
}

function showTab(tabName) {
    //change url for history
    history.pushState({tab: tabName}, "", `#${tabName}`)

    // Make everything inactive
    document.querySelectorAll('.tab').forEach(tab => {tab.classList.remove('active')})
    document.querySelectorAll('.tab-content').forEach(content => {content.classList.remove('active')})

    // change styles of both tab header and show the content
    document.getElementById(tabName).classList.add("active")
    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active")
}

//history API
window.addEventListener("popstate", (event) => {
    const tabName = (event.state && event.state.tab) || location.hash.replace("#", "")
    showTab(tabName)
})

// Load the correct tab on initial load
window.addEventListener("DOMContentLoaded", () => {
    const tabFromURL = location.hash.replace("#", "") || "settings"
    history.replaceState({ tab: tabFromURL }, "", `#${tabFromURL}`)
    showTab(tabFromURL)
})