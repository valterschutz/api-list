renderAPIs()

async function renderAPIs() {
    const apis = await getAPIs()
    console.log(apis);
    document.body.innerHTML = apis.entries.map(getAPIHTML).join('')
}


async function getAPIs() {
    const res = await fetch("https://api.publicapis.org/entries")
    return res.json()
}

function getAPIHTML(api) {
    return `
    <div class="api">
        <div class="api-header">
            <a href="${api.Link}">${api.API} : ${api.Category}</a>
        </div>
        <div class="api-body">
            <p class="api-body-desc">${api.Description}</p>
            <p class="api-body-auth">Auth: ${api.Auth}</p>
            <p class="api-body-https">Supports HTTPS: ${api.HTTPS}</p>
        </div>
    </div>
    `
}