// Backend
setURL('https://gruppe-130.developerakademie.net/smallest_backend_ever');




async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('EXAMPLE')) || [];
};