// Año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Última modificación
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;




const temperature = parseFloat(document.querySelector("#temp").textContent);
const windSpeed = parseFloat(document.querySelector("#wind").textContent);



function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}


const windChillSpan = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillSpan.textContent = "N/A";
}