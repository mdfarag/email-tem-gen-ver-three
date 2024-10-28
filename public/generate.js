templateForm.addEventListener("submit", function (e) {

    e.preventDefault()
    jQuery("#Submit").hide();

    // collecting template language
    tempLang = document.querySelector("#tempLang").value;

    console.log("template language is",tempLang )

    // collecting header links data
    firstLinkText = document.querySelector("#FirstLinkText").value;
    firstLinkUrl = document.querySelector("#FirstLinkUrl").value;
    secondLinkText = document.querySelector("#SecondLinkText").value;
    secondLinkUrl = document.querySelector("#SecondLinkUrl").value;
    thirdLinkText = document.querySelector("#ThirdLinkText").value;
    thirdLinkUrl = document.querySelector("#ThirdLinkUrl").value;
    fourthLinkText = document.querySelector("#FourthLinkText").value;
    fourthLinkUrl = document.querySelector("#FourthLinkUrl").value;
    // Adding header texts to texts array
    headerLinksTexts.push(firstLinkText);
    headerLinksTexts.push(secondLinkText);
    headerLinksTexts.push(thirdLinkText);
    headerLinksTexts.push(fourthLinkText);

    console.log("header texts are: ", headerLinksTexts)

    // Adding header links to links array
    headerLinksUrls.push(firstLinkUrl);
    headerLinksUrls.push(secondLinkUrl);
    headerLinksUrls.push(thirdLinkUrl);
    headerLinksUrls.push(fourthLinkUrl);

    console.log("header links are: ", headerLinksUrls)

    // collecting main banner title, image and link
    tempBnrTitle = document.querySelector("#tempBnrTitle").value;
    tempBnrImg = document.querySelector("#tempBnrImg").value;
    tempBnrLink = document.querySelector("#tempBnrLink").value;
    // collecting strip image and link
    tempStripImg = document.querySelector("#tempStripImg").value;
    tempStripLink = document.querySelector("#tempStripLink").value;
    // collecting array for main strip & main banner text, images & links
    bannerStripArray.push(tempBnrTitle);
    bannerStripArray.push(tempBnrImg);
    bannerStripArray.push(tempBnrLink);
    bannerStripArray.push(tempStripImg);
    bannerStripArray.push(tempStripLink);

    switch (tempLang) {
        case "en":
            headerIndex = 0; footerIndex = 0;
            break;

        case "ar":
            headerIndex = 1; footerIndex = 1;
            break;
    }

    switch (selectedTemplate) {
        case 0:
            Pd1Url = document.querySelector("#Pd1Url").value;
            Pd2Url = document.querySelector("#Pd2Url").value;
            Pd3Url = document.querySelector("#Pd3Url").value;
            Pd4Url = document.querySelector("#Pd4Url").value;
            Pd5Url = document.querySelector("#Pd5Url").value;
            Pd6Url = document.querySelector("#Pd6Url").value;
            URLsArray.push(Pd1Url)
            URLsArray.push(Pd2Url)
            URLsArray.push(Pd3Url)
            URLsArray.push(Pd4Url)
            URLsArray.push(Pd5Url)
            URLsArray.push(Pd6Url)
            break;

        case 1:
            if (selectedBnrBrdctPart === 0) {
                Pd1Url3 = document.querySelector("#Pd1Url3").value;
                Pd2Url3 = document.querySelector("#Pd2Url3").value;
                Pd3Url3 = document.querySelector("#Pd3Url3").value;
                Pd4Url3 = document.querySelector("#Pd4Url3").value;
                Pd5Url3 = document.querySelector("#Pd5Url3").value;
                Pd6Url3 = document.querySelector("#Pd6Url3").value;
                Pd7Url3 = document.querySelector("#Pd7Url3").value;
                Pd8Url3 = document.querySelector("#Pd8Url3").value;
                URLsArray.push(Pd1Url3)
                URLsArray.push(Pd2Url3)
                URLsArray.push(Pd3Url3)
                URLsArray.push(Pd4Url3)
                URLsArray.push(Pd5Url3)
                URLsArray.push(Pd6Url3)
                URLsArray.push(Pd7Url3)
                URLsArray.push(Pd8Url3)
            } else if (selectedBnrBrdctPart === 1) {
                Pd1Url3 = document.querySelector("#Pd1Url3").value;
                Pd2Url3 = document.querySelector("#Pd2Url3").value;
                Pd3Url3 = document.querySelector("#Pd3Url3").value;
                Pd4Url3 = document.querySelector("#Pd4Url3").value;
                URLsArray.push(Pd1Url3)
                URLsArray.push(Pd2Url3)
                URLsArray.push(Pd3Url3)
                URLsArray.push(Pd4Url3)
                suplireBnrImg1 = document.querySelector("#suplireBnrImg1").value;
                suplireBnrLink1 = document.querySelector("#suplireBnrLink1").value;
                suplireBnrImg2 = document.querySelector("#suplireBnrImg2").value;
                suplireBnrLink2 = document.querySelector("#suplireBnrLink2").value;
                supplierImgs.push(suplireBnrImg1)
                supplierImgs.push(suplireBnrImg2)
                supplierLinks.push(suplireBnrLink1)
                supplierLinks.push(suplireBnrLink2)
            } else if (selectedBnrBrdctPart === 2) {
                Pd1Url3 = document.querySelector("#Pd1Url3").value;
                Pd2Url3 = document.querySelector("#Pd2Url3").value;
                Pd3Url3 = document.querySelector("#Pd3Url3").value;
                Pd4Url3 = document.querySelector("#Pd4Url3").value;
                URLsArray.push(Pd1Url3)
                URLsArray.push(Pd2Url3)
                URLsArray.push(Pd3Url3)
                URLsArray.push(Pd4Url3)
                suplireBnrImg3 = document.querySelector("#suplireBnrImg3").value;
                suplireBnrLink3 = document.querySelector("#suplireBnrLink3").value;
                suplireBnrImg4 = document.querySelector("#suplireBnrImg4").value;
                suplireBnrLink4 = document.querySelector("#suplireBnrLink4").value;
                suplireBnrImg5 = document.querySelector("#suplireBnrImg5").value;
                suplireBnrLink5 = document.querySelector("#suplireBnrLink5").value;
                suplireBnrImg6 = document.querySelector("#suplireBnrImg6").value;
                suplireBnrLink6 = document.querySelector("#suplireBnrLink6").value;
                supplierImgs.push(suplireBnrImg3)
                supplierImgs.push(suplireBnrImg4)
                supplierImgs.push(suplireBnrImg5)
                supplierImgs.push(suplireBnrImg6)
                supplierLinks.push(suplireBnrLink3)
                supplierLinks.push(suplireBnrLink4)
                supplierLinks.push(suplireBnrLink5)
                supplierLinks.push(suplireBnrLink6)
            }
            break;
    }
    prepareUrls(URLsArray)
    console.log("here is urls array: ", URLsArray)
})