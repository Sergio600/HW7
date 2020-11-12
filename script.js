let data1;
let container = $("#container")[0];
let choosedCountry = $("#choosedCountry")[0];

$.ajax({
    method: "GET",
    url: "https://restcountries.eu/rest/v2/all",
    success(data) {
        data1 = data;

        for (let country of data) {
            container.appendChild(displayInformation(country));
        }
    },
    error(x, text) {
        console.log("mistake!");
    }
});

function searchBtn(value) {
    container.style = "display: none;"
    let isFind = false;

    for (let country of data1) {
        if (value.toLowerCase() == country.name.toLowerCase()) {
            choosedCountry.appendChild(displayInformation(country));
            isFind = true;
            break;
        }
    }

    if (isFind == false) {
        alert("Country is not founded!")
    }
}

function resetBtn() {
    let container = $("#container")[0];
    container.style = "display: block;"
    let choosedCountry = $("#choosedCountry")[0];
    choosedCountry.innerHTML = "";
}

function displayInformation(country) {
    let divContainerOfCountry = document.createElement('div');
    let divCountry = document.createElement('div');
    let divPopulation = document.createElement('div');
    let divFlag = document.createElement('div');
    let divTimeZone = document.createElement('div');

    divCountry.innerText = country.name;
    divPopulation.innerText = country.population;
    divFlag.innerHTML = `<img width = 50px src = "${country.flag}"></img>`;
    divTimeZone.innerText = country.timezones;

    divCountry.style = "width: 80px; min-width: 80px";
    divPopulation.style = "width: 80px; min-width: 80px";
    divFlag.style = "width: 80px; min-width: 80px";
    divTimeZone.style = "width: 80px; word-wrap: break-word; min-width: 80px";


    divContainerOfCountry.appendChild(divCountry);
    divContainerOfCountry.appendChild(divPopulation);
    divContainerOfCountry.appendChild(divFlag);
    divContainerOfCountry.appendChild(divTimeZone);

    divContainerOfCountry.style = "display: flex";

    return divContainerOfCountry;

}