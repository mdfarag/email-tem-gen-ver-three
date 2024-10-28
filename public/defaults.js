
function fillDefaults() {
    // create fill defaults function
    var ftLinksLang = document.querySelector("#tempLang").value;

    if (ftLinksLang === "en") {

        // Banner Title EN
        tempBnrTitle = document.querySelector("#tempBnrTitle").value = "Top Picks";

        // Header Texts EN
        document.querySelector("#FirstLinkText").value = "Mobile";
        document.querySelector("#SecondLinkText").value = "Laptops";
        document.querySelector("#ThirdLinkText").value = "Appliances";
        document.querySelector("#FourthLinkText").value = "iTunes";

        // Header Links EN
        document.querySelector("#FirstLinkUrl").value = "https://www.xcite.com/mobile-phones-department";
        document.querySelector("#SecondLinkUrl").value = "https://www.xcite.com/computers-tablets-department";
        document.querySelector("#ThirdLinkUrl").value = "https://www.xcite.com/small-appliances-department";
        document.querySelector("#FourthLinkUrl").value = "https://www.xcite.com/gift-cards-department";

        // main strip default value
        document.querySelector("#tempStripImg").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/EmailButtons-ViewAllDeals-EN-JPG_1.jpg";
        document.querySelector("#tempStripLink").value = "https://www.xcite.com/";

    }

    else if (ftLinksLang === "ar") {

        // Banner Title AR
        tempBnrTitle = document.querySelector("#tempBnrTitle").value = "أفضل المقتنيات";

        // Header Texts AR
        document.querySelector("#FirstLinkText").value = "الموبايلات";
        document.querySelector("#SecondLinkText").value = "اللابتوبات";
        document.querySelector("#ThirdLinkText").value = "أجهزة المنزل";
        document.querySelector("#FourthLinkText").value = "التلفزيونات";

        // Header Links AR
        document.querySelector("#FirstLinkUrl").value = "https://www.xcite.com/ar-KW/mobile-phones-department";
        document.querySelector("#SecondLinkUrl").value = "https://www.xcite.com/ar-KW/computers-tablets-department";
        document.querySelector("#ThirdLinkUrl").value = "https://www.xcite.com/ar-KW/large-appliances-department";
        document.querySelector("#FourthLinkUrl").value = "https://www.xcite.com/ar-KW/home-entertainment-department";

        // main strip default value
        document.querySelector("#tempStripImg").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/EmailButtons-ViewAllDeals-AR%3DJPG_1.jpg";
        document.querySelector("#tempStripLink").value = "https://www.xcite.com/ar-KW";

    }
}

function resetFields() {
    tempGen.disabled = false;
    tempGen.style.color = "#fff";

    document.querySelectorAll(".req-field input").forEach(function (input) {
        if (input.id !== "tempLang" && input.id !== "tempType") {
            input.style.setProperty("border", "1px solid #ddd");
            input.value = ""
        }

    });

    // reset all data arrays to start fresh with defaults
    headerLinksTexts = [];
    headerLinksUrls = [];
    bannerStripArray = [];
    URLsArray = [];
    productsArray = [];
    supplierImgs = [];
    supplierLinks = [];

    // Empty cliboard
    navigator.clipboard.writeText("");

    // empty final template container
    if (result) {
        result.value = "";
    }


    hideAllSections()

}

function resetTemplate() {
    // reset template field
    document.querySelector(".req-field input#tempType").style.setProperty("border", "1px solid #ddd");
    document.querySelector(".req-field input#tempType").value = ""

    // reset all fields except language 
    resetFields()
}

function resetAll() {
    // reset language field
    document.querySelector(".req-field input#tempLang").style.setProperty("border", "1px solid #ddd");
    document.querySelector(".req-field input#tempLang").value = ""

    // reset Template selection
    resetTemplate()

    // hide template options 
    jQuery("#Template").hide();

}

function hideAllSections() {
    jQuery("#tempBanner").hide();
    jQuery("#tempStrip").hide();
    jQuery("#TempForm1").hide();
    jQuery("#TempForm2").hide();
    jQuery("#productsPart2").hide();
    jQuery("#bannersPart1").hide();
    jQuery("#bannersPart2").hide();
    jQuery("#headerLinks").hide();
    jQuery("#Submit").hide();
    jQuery("#finalTemp").hide();
    if (jQuery("#BnrBrdctPart").css("display") === "block") {
        jQuery("#BnrBrdctPart").hide();
    }
}