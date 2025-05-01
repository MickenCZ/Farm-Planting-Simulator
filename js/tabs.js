for (const tab of document.querySelectorAll(".tab")) {
    tab.addEventListener("click", () => {showTab(tab.dataset.tab)})
}

function showTab(tabName) {
    // Make everything inactive
    document.querySelectorAll('.tab').forEach(tab => {tab.classList.remove('active')})
    document.querySelectorAll('.tab-content').forEach(content => {content.classList.remove('active')})

    // change styles of both tab header and show the content
    document.getElementById(tabName).classList.add("active")
    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active")
}