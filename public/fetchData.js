// functin to check if url is valid or incorrect
const isValidUrl = (url) => {
    try {
        return new URL(url);
    } catch (err) {
        return false;
    }
}

// create a function to send POST request with list of urls to  API endpoint
const fetchProducts = async (list) => {
    loader.style.display = "block";
    if (navigator.onLine) {
        console.log("yes connected")
        console.log("api URL form fetch before fetch is: ", apiUrl)
        try {
            const sent = await fetch(apiUrl + '/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(list)
            })

            // need to check if respose is ok or not
            // need to handle errors while fetching data coz fetch API doesnot thorow any erros
            console.log("api URL form fetch after fetch is: ", apiUrl)

            // retreive products info from API endpoint 
            // console.log("sent is: ", sent)
            const response = await sent.json()

            // parsing info to JSON object 
            console.log("response is: ", response)
            console.log("response type is: ", typeof response)

            const products = Object.values(response)
            console.log("products is: ", products)
            console.log("products type is: ", typeof products)
            products.forEach((pd, idx) => {
                pd.pdUrl = list[idx]
                console.log("here is pd.Url: ", pd.pdUrl)
                productsArray.push(pd)
                console.log("here is full product: ", pd)
            })
            console.log("i'm products array: ", productsArray)

            fillTemplateWithProducts()
            // console.log('products are: ', products)

        } catch (error) {
            console.log(error.message)
            console.log("i'm the errr: ", error)
            loader.style.display = "none";
        }
    } else {
        console.log("sorry you are offline check your connection");
        loader.style.display = "none";
    }
}

const prepareUrls = (URLs) => {
    // create empty list to hold the final URLs
    const list = []

    // looping through URLs NodeList to extract url value
    URLs.forEach((url) => {

        console.log("i'm url: ", url)
        // check if its a valid URL
        if (isValidUrl(url)) {
            // adding a valid url to list of urls
            list.push(url)
            console.log("list of urls is: ", list)
        } else {
            console.log(url, ' is not valid url')
        }
    })
    // check if the list of urls is not empty
    if (list.length > 0) {
        // calling fetchProducts to get products info
        console.log("================ here ================")
        console.log("final list of urls sent to API: ", list)
        console.log("======================================")
        fetchProducts(list)
    }
}

function fillTemplateWithProducts() {

    var Html = document.createElement("html"),
        Body = document.createElement("body");

    if (tempLang === "en") {
        Html.setAttribute('lang', 'en');
    } else if (tempLang === "ar") {
        Html.setAttribute('lang', 'ar');
    }

    Html.setAttribute('xmlns:o', 'urn:schemas-microsoft-com:office:office');
    Html.setAttribute('xmlns:v', 'urn:schemas-microsoft-com:vml');
    Body.style.cssText = 'background-color: #f1f1f1; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;';
    if (productsArray.length > 0) {
        Body.innerHTML = returnHeader(headerIndex, headerLinksUrls, headerLinksTexts) +
            returnProducts(selectedTemplate, productsArray, tempLang, selectedBnrBrdctPart) +
            returnFooter(footerIndex);
        Html.innerHTML = docTypeStart + Body.outerHTML;
        result.value = "<!DOCTYPE html>" + Html.outerHTML.trim();
        console.log(productsArray)
        result.style.cssText = `font - size: 15px; color: darkgrey; padding - top: 20px`;
        jQuery("#finalTemp").show()

        // end loading state
        loader.style.display = "none";

        // scroll to copy template and show it
        document.getElementById("finalTemp").scrollIntoView({ behavior: 'smooth' });

        copyToClip.classList.add("blinking");
    }
}
