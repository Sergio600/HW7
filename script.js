let data1;

$.ajax({
    method: "GET",
    url: "https://restcountries.eu/rest/v2/all",
    success(data) {
        data1 = data;
        let container = $("#container")[0];

        for (let countrty of data) {
            let divContainerOfCountry = document.createElement('div');
            let divCountry = document.createElement('div');
            let divPopulation = document.createElement('div');
            let divFlag = document.createElement('div');
            let divTimeZone = document.createElement('div');

            divCountry.innerText = countrty.name;
            divPopulation.innerText = countrty.population;
            divFlag.innerHTML = `<img width = 50px src = "${countrty.flag}"></img>`;
            divTimeZone.innerText = countrty.timezones;

            divCountry.style = "width: 200px";
            divPopulation.style = "width: 200px";
            divFlag.style = "width: 200px";
            divTimeZone.style = "width: 200px";

            divContainerOfCountry.appendChild(divCountry);
            divContainerOfCountry.appendChild(divPopulation);
            divContainerOfCountry.appendChild(divFlag);
            divContainerOfCountry.appendChild(divTimeZone);

            divContainerOfCountry.style = "display: flex";

            container.appendChild(divContainerOfCountry);
        }
    },
    error(x, text) {
        console.log("mistake!");
    }
});

function searchBtn(value) {
    let container = $("#container")[0];
    let choosedCountry = $("#choosedCountry")[0];
    container.style = "display: none;"

    let isFind = false;

    console.log(data1);

    for (let country of data1) {
        if (value == country.name) {
            console.log("We find!");

            let divContainerOfCountry = document.createElement('div');
            let divCountry = document.createElement('div');
            let divPopulation = document.createElement('div');
            let divFlag = document.createElement('div');
            let divTimeZone = document.createElement('div');

            divCountry.innerText = country.name;
            divPopulation.innerText = country.population;
            divFlag.innerHTML = `<img width = 50px src = "${country.flag}"></img>`;
            divTimeZone.innerText = country.timezones;

            divCountry.style = "width: 200px; height: 50px";
            divPopulation.style = "width: 200px; height: 50px";
            divFlag.style = "width: 200px; height: 50px";
            divTimeZone.style = "width: 200px; height: 50px";


            divContainerOfCountry.appendChild(divCountry);
            divContainerOfCountry.appendChild(divPopulation);
            divContainerOfCountry.appendChild(divFlag);
            divContainerOfCountry.appendChild(divTimeZone);

            divContainerOfCountry.style = "display: flex";

            choosedCountry.appendChild(divContainerOfCountry);

            isFind = true;
            break;
        }

    }

    function addDiv() {

    }



}

function resetBtn() {
    let container = $("#container")[0];
    container.style = "display: block;"
    let choosedCountry = $("#choosedCountry")[0];
    choosedCountry.innerHTML = "";
}