
// showing select options from inputs to choose from
jQuery(".searchable input").focus(function () {
    jQuery(this).closest(".searchable").find("ul").show();
});

// hiding select options from inputs after select one
jQuery(".searchable input").blur(function () {
    let that = this;
    setTimeout(function () {
        jQuery(that).closest(".searchable").find("ul").hide();
    }, 200);
});

// get selected value and assign it to the input field
jQuery(document).on("click", ".searchable.pos ul li", function () {
    jQuery(this).closest(".searchable").find("input").val(jQuery(this).text());
});

// add selected class to the selected option
jQuery(".searchable ul li").click(function () {
    jQuery(this).closest(".searchable").find("ul li.selected").removeClass("selected");
    jQuery(this).addClass("selected");
});

jQuery("#Language li").click(function () {
    // reset all input fileds 
    resetTemplate()

    // show template options after selecting language 
    jQuery("#Template").show();
});

jQuery("#Template li").click(function () {

    // reset all fields except language 
    resetFields()

    // set which template selected 
    selectedTemplate = jQuery(this).index();

    // showing Banner & Strip fields
    jQuery("#tempBanner").show();
    jQuery("#tempStrip").show()

    // check wich type of templates selected 
    switch (jQuery(this).attr("id")) {
        case "Temp-1":
            // hide all sections related to temp-2
            jQuery("#BnrBrdctPart").hide();
            jQuery("#BnrBrdctPart").find('input').prop('required', false);
            jQuery("#TempForm2").hide();
            jQuery("#TempForm2").find('input').prop('required', false);
            jQuery("#productsPart2").hide();
            jQuery("#productsPart2").find('input').prop('required', false);
            jQuery("#bannersPart1").hide();
            jQuery("#bannersPart1").find('input').prop('required', false);
            jQuery("#bannersPart2").hide();
            jQuery("#bannersPart2").find('input').prop('required', false);

            // show all sections related to temp-1
            jQuery("#tempBanner").show();
            jQuery("#tempBanner").find('input').prop('required', true);
            jQuery("#tempStrip").show();
            jQuery("#tempStrip").find('input').prop('required', true);
            jQuery("#TempForm1").show();
            jQuery("#TempForm1").find('input').prop('required', true);
            jQuery("#headerLinks").show();
            jQuery("#headerLinks").find('input').prop('required', true);
            jQuery("#Submit").show();
            break;
        case "Temp-2":
            // hide all sections related to temp-1
            jQuery("#tempBanner").hide();
            jQuery("#tempBanner").find('input').prop('required', false);
            jQuery("#tempStrip").hide();
            jQuery("#tempStrip").find('input').prop('required', false);
            jQuery("#TempForm1").hide();
            jQuery("#TempForm1").find('input').prop('required', false);
            jQuery("#productsPart2").hide();
            jQuery("#productsPart2").find('input').prop('required', false);
            jQuery("#bannersPart1").hide();
            jQuery("#bannersPart1").find('input').prop('required', false);
            jQuery("#bannersPart2").hide();
            jQuery("#bannersPart2").find('input').prop('required', false);
            jQuery("#headerLinks").hide();
            jQuery("#headerLinks").find('input').prop('required', false);
            // hide generate template button
            jQuery("#Submit").hide();
            // reset selected version of BnrBrdctPart
            jQuery("#BnrBrdctPart .searchable.pos ul li").removeClass("selected");

            // show list of last template part
            jQuery("#BnrBrdctPart").show();
            jQuery("#BnrBrdctPart").find('input').prop('required', true);
            break;
    }

    fillDefaults();
});

jQuery("#BnrBrdctPart li").click(function () {

    selectedBnrBrdctPart = jQuery(this).index();
    // show all sections related to temp-2
    jQuery("#tempBanner").show();
    jQuery("#tempBanner").find('input').prop('required', true);
    jQuery("#tempStrip").show();
    jQuery("#tempStrip").find('input').prop('required', true);
    jQuery("#TempForm2").show();
    jQuery("#TempForm2").find('input').prop('required', true);
    jQuery("#headerLinks").show();
    jQuery("#headerLinks").find('input').prop('required', true);
    jQuery("#Submit").show();

    // select which version of last part to show
    switch (jQuery(this).attr("id")) {
        case "product":
            jQuery("#productsPart2").show();
            jQuery("#productsPart2").find('input').prop('required', true);
            jQuery("#bannersPart1").hide();
            jQuery("#bannersPart1").find('input').prop('required', false);
            jQuery("#bannersPart2").hide();
            jQuery("#bannersPart2").find('input').prop('required', false);
            break;
        case "TowBnrs":
            jQuery("#productsPart2").hide();
            jQuery("#productsPart2").find('input').prop('required', false);
            jQuery("#bannersPart1").show();
            jQuery("#bannersPart1").find('input').prop('required', true);
            jQuery("#bannersPart2").hide();
            jQuery("#bannersPart2").find('input').prop('required', false);
            break;
        case "FourBnrs":
            jQuery("#productsPart2").hide();
            jQuery("#productsPart2").find('input').prop('required', false);
            jQuery("#bannersPart1").hide();
            jQuery("#bannersPart1").find('input').prop('required', false);
            jQuery("#bannersPart2").show();
            jQuery("#bannersPart2").find('input').prop('required', true);
            break;
    }

    if (result) {
        result.value = "";
    }
});
