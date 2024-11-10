var slok = 1;

const getShlok = async () => {
    try {
        const response = await fetch("https://vedicscriptures.github.io/slok/3/" + slok, {});
        const json = await response.json();
        document.getElementById('shlok').innerHTML = json.slok;
        document.getElementById('shlokEng').innerHTML = json.siva.et;
        slok++;

    } catch (error) {
        console.log(error);
    }
};


document.getElementById('loadShlokBtn').addEventListener('click', getShlok);
