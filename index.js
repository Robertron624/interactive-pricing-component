const prices = [8, 12, 16, 24, 36];
const pricesAnnual = [72, 108, 144, 216, 324]; // with a 25% discount
const pageViewValuesMonthly = [10, 50, 100, 500, "1M"];
const pageViewsValuesAnnual = [600, 900, "1.2M", "1.8M", "2.4M"];
const timeElements = document.querySelectorAll(".time"); // All the elements with the class time (one for desktop and one for mobile)

let isYearly = false;

const sliderInput = document.getElementById("myRange");
const price = document.querySelector(".price");
const priceElements = document.querySelectorAll(".price"); // All the elements with the class price (one for desktop and one for mobile)
const pageviews = document.querySelector(".pageviews");
const discountElement = document.querySelector(".discount");

const toggleBackground = document.querySelector(".toggler");

const toggle_checkbox = document.querySelector(
    ".switch input[type='checkbox']"
);

toggle_checkbox.addEventListener("change", function () {
    if (this.checked) {
        isYearly = true;

        toggleBackground.classList.add("toggler--on");

        let pageViewToDisplay = pageViewsValuesAnnual[sliderInput.value];

        // Add K to the pageviews if the value is a number (not a string)
        if (typeof pageViewToDisplay === "number") {
            pageViewToDisplay += "K PAGEVIEWS";
        } else {
            pageViewToDisplay = pageViewToDisplay + " PAGEVIEWS";
        }

        timeElements.forEach((timeElement) => {
            timeElement.innerHTML = " / year";
        });

        priceElements.forEach((priceElement) => {
            priceElement.innerHTML =
                "$" +
                pricesAnnual[sliderInput.value] + ".00";
        })
        pageviews.innerHTML = pageViewToDisplay;
    } else {
        isYearly = false;

        toggleBackground.classList.remove("toggler--on");

        let pageViewToDisplay = pageViewValuesMonthly[sliderInput.value];

        // Add K to the pageviews if the value is a number (not a string)
        if (typeof pageViewToDisplay === "number") {
            pageViewToDisplay += "K PAGEVIEWS";
        } else {
            pageViewToDisplay = pageViewToDisplay + " PAGEVIEWS";
        }

        timeElements.forEach((timeElement) => {
            timeElement.innerHTML = " / month";
        });

        priceElements.forEach((priceElement) => {
            priceElement.innerHTML =
                "$" +
                prices[sliderInput.value] + ".00";
        });
        pageviews.innerHTML = pageViewToDisplay;
    }
});

sliderInput.oninput = function () {
    let value = sliderInput.value;

    let priceToDisplay = isYearly
        ? pricesAnnual[value]
        : prices[value];

    priceElements.forEach((priceElement) => {
        priceElement.innerHTML = "$" + priceToDisplay + ".00";
    });

    let pageViewToDisplay = isYearly
        ? pageViewsValuesAnnual[value]
        : pageViewValuesMonthly[value];


    if (typeof pageViewToDisplay === "number") {
        pageViewToDisplay += "K PAGEVIEWS";
    } else {
        pageViewToDisplay = pageViewToDisplay + " PAGEVIEWS";
    }

    pageviews.innerHTML = pageViewToDisplay;
};

// Update the slider value when the user drags the slider to apply the CSS color
sliderInput?.addEventListener("input", (e) => {
    if (e.target) {
        const sliderPercentage = e.target.value * 25;

        sliderInput.style.setProperty(
            "--p",
            sliderPercentage + "%"
        );
    }
});