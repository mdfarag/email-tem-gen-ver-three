docTypeStart = `
<title></title>
<meta content="text/html; charset=utf-8" http-equiv=Content-Type>
<meta content="width=device-width,initial-scale=1" name=viewport>
<!--[if mso]><xml><o:officedocumentsettings><o:pixelsperinch>96</o:pixelsperinch><o:allowpng></o:officedocumentsettings></xml><![endif]-->
<style>
    * {box-sizing: border-box;border-spacing: 0;}
    body {margin: 0;padding: 0}
    a[x-apple-data-detectors] {color: inherit !important;text-decoration: inherit !important}
    #MessageViewBody a {color: inherit;text-decoration: none}
    p {line-height: inherit}
    .desktop_hide,
    .desktop_hide table {mso-hide: all;display: none;max-height: 0;overflow: hidden}
    .hideEmptySave {display: none !important}
    @media (max-width:600px) {
        .image_block img.big,.row-content {width: 100%}
        .footer-link {font-size: 22px}
        .mobile_hide {display: none}
        .stack .column {width: 100%;display: inline-block}
        .stack .halfcolumn {width: 50%;display: inline-block}
        .stack .ftLink {display: inline-block}
        .bfrPriceMbl {display: block}
        .mobile_hide {min-height: 0;max-height: 0;max-width: 0;overflow: hidden;font-size: 0}
        .desktop_hide,.desktop_hide table {display: table !important;max-height: none !important}
    }
</style>`;

function returnProducts(template, products, tempLang, index) {

    if (template === 0 && tempLang === "en") {
        return `
<!-- Template 1 EN Main Banner -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;color:#000" width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                width="100%">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="width:100%;padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${tempBnrLink}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${tempBnrImg}"
                                                            style="display:block;height:auto;border:0" width="100%">
                                                    </a>
                                                </div>
                                                <div align="center">
                                                    <p
                                                        style="padding:30px 0 20px 0;margin:0;text-align:center;font-size:30px;background:#fff">
                                                        ${tempBnrTitle}
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 1 EN Products 1 & 2 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;" width="100%"
                    align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding:0 3%"
                                                width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[0].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[0].pdName}" src="${products[0].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[0].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding:0 3%"
                                                width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[1].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[1].pdName}" src="${products[1].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[1].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white"
                                                    class="alignment" align="center">
                                                    ${products[0].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">' +
                products[0].pdSvAmnt + '</span>' : ''}
                                                    ${products[0].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[0].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white"
                                                    class="alignment" align="center">
                                                    ${products[1].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">' +
                products[1].pdSvAmnt + '</span>' : ''}
                                                    ${products[1].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[1].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word;" width="100%">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[0].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[1].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[0].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class=pad width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[1].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[0].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pa" d width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[1].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[0].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[1].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 1 EN Products 3 & 4 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000" width="100%"
                    align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding:0 3%"
                                                width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[2].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[2].pdName}" src="${products[2].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[2].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding:0 3%"
                                                width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[3].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[3].pdName}" src="${products[3].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[3].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white"
                                                    class="alignment" align="center">
                                                    ${products[2].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">' +
                products[2].pdSvAmnt + '</span>' : ''}
                                                    ${products[2].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[2].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white"
                                                    class="alignment" align="center">
                                                    ${products[3].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">' +
                products[3].pdSvAmnt + '</span>' : ''}
                                                    ${products[3].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[3].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border=0 cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role=presentation
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[2].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[3].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[2].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[3].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[2].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[3].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[2].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[3].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 1 EN Products 5 & 6 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000" width="100%"
                    align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding:0 3%"
                                                width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[4].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[4].pdName}" src="${products[4].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[4].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding:0 3%"
                                                width="50%">
                                                <div
                                                    style="line-height:10px;position:relative class=alignment align=center">
                                                    <a href="${products[5].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[5].pdName}" src="${products[5].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[5].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white"
                                                    class="alignment" align="center">
                                                    ${products[4].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">' +
                products[4].pdSvAmnt + '</span>' : ''}
                                                    ${products[4].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[4].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white"
                                                    class="alignment" align="center">
                                                    ${products[5].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">' +
                products[5].pdSvAmnt + '</span>' : ''}
                                                    ${products[5].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[5].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[4].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[5].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[4].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[5].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[4].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[5].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[4].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[5].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

<!-- Template 1 EN Strip -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;color:#000" width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${tempStripLink}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${tempStripImg}"
                                                            style="display:block;height:auto;border:0;"
                                                            width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
`;
    }

    else if (template === 0 && tempLang === "ar") {
        return `

        <!-- Template 1 AR Main Banner -->
        <table border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation"
            style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;" align="center">
            <tbody>
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                            style="mso-table-lspace:0;mso-table-rspace:0;color:#000" width="100%" align="center">
                            <tbody>
                                <tr>
                                    <td class="column column-1"
                                        style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                        <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                            role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="pad" style="width:100%;padding-right:0;padding-left:0">
                                                        <div align="center" class="alignment" style="line-height:10px">
                                                            <a href="${tempBnrLink}" style="outline:0" tabindex="-1"
                                                                target="_blank">
                                                                <img class="big" src="${tempBnrImg}"
                                                                    style="display:block;height:auto;border:0"
                                                                    width="100%">
                                                            </a>
                                                        </div>
                                                        <div align="center">
                                                            <p
                                                                style="padding:30px 0 20px 0;margin:0;text-align:center;font-size:30px;background:#fff">
                                                                ${tempBnrTitle}
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>


<!-- Template 1 AR Products 1 & 2 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;" align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center"><a href="${products[0].pdUrl}" style="outline:0"
                                                        target="_blank" tabindex="-1">
                                                        <div style="width:100%;height:auto"><img
                                                                alt="${products[0].pdName}" src="${products[0].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[0].pdName}"></div>
                                                    </a></div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center"><a href="${products[1].pdUrl}" style="outline:0"
                                                        target="_blank" tabindex="-1">
                                                        <div style="width:100%;height:auto"><img
                                                                alt="${products[1].pdName}" src="${products[1].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[1].pdName}"></div>
                                                    </a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[0].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[0].pdSvAmnt + '</span>' : ''}
                                                    ${products[0].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[0].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[1].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[1].pdSvAmnt + '</span>' : ''}
                                                    ${products[1].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[1].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[0].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[1].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style=font-size:18px>${products[0].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[1].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[0].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[1].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation" width="100%" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[0].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a><!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[1].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a><!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 1 AR Products 3 & 4 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000" width="100%"
                    align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[2].pdUrl}" style="outline:0"
                                                    target="_blank" tabindex="-1">
                                                    <div style="width:100%;height:auto">
                                                        <img alt="${products[2].pdName}" src="${products[2].pdImg}"
                                                            style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                            title="${products[2].pdName}">
                                                    </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[3].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[3].pdName}" src="${products[3].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[3].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[2].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[2].pdSvAmnt + '</span>' : ''}
                                                    ${products[2].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[2].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[3].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[3].pdSvAmnt + '</span>' : ''}
                                                    ${products[3].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[3].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[2].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[3].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[2].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[3].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[2].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[3].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation" width="100%" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[2].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[3].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 1 AR Products 5 & 6 -->
<table border="0" cellpadding="0 cellspacing=" 0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000" width="100%"
                    align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[4].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto"><img
                                                                alt="${products[4].pdName}" src="${products[4].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[4].pdName}"></div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[5].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[5].pdName}" src="${products[5].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[5].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[4].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[4].pdSvAmnt + '</span>' : ''}
                                                    ${products[4].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[4].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[5].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[5].pdSvAmnt + '</span>' : ''}
                                                    ${products[5].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[5].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[4].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[5].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[4].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[5].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[4].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[5].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation" width="100%" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[4].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[5].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 1 AR Strip -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;color:#000" width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${tempStripLink}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${tempStripImg}"
                                                            style="display:block;height:auto;border:0" width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

`;
    }






    else if (template === 1 && tempLang === "en") {
        var part1 = `

<!-- Template 2 EN Main Banner -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;color:#000" width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${tempBnrLink}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${tempBnrImg}"
                                                            style="display:block;height:auto;border:0"
                                                            width="100%">
                                                    </a>
                                                </div>
                                                <div align="center">
                                                    <p
                                                        style="padding:30px 0 20px 0;margin:0;text-align:center;font-size:30px;background:#fff">
                                                        ${tempBnrTitle}
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 2 EN Products 1 & 2 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[0].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[0].pdName}" src="${products[0].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[0].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[1].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[1].pdName}" src="${products[1].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[1].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[0].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[0].pdSvAmnt + '</span>' : ''}
                                                    ${products[0].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[0].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[1].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[1].pdSvAmnt + '</span>' : ''}
                                                    ${products[1].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[1].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[0].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[1].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style=color:#d00000>
                                                                    <span
                                                                        style=font-size:18px>${products[0].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style=color:#d00000>
                                                                    <span
                                                                        style=font-size:18px>${products[1].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[0].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[1].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[0].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY
                                                                    NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[1].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 2 EN Products 3 & 4 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div
                                                    style="line-height:10px;position:relative class=alignment align=center">
                                                    <a href="${products[2].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[2].pdName}" src="${products[2].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[2].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div
                                                    style="line-height:10px;position:relative class=alignment align=center">
                                                    <a href="${products[3].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[3].pdName}" src="${products[3].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[3].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[2].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[2].pdSvAmnt + '</span>' : ''}
                                                    ${products[2].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[2].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[3].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[3].pdSvAmnt + '</span>' : ''}
                                                    ${products[3].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[3].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[2].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[3].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[2].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style=color:#d00000>
                                                                    <span
                                                                        style=font-size:18px>${products[3].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[2].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[3].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[2].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY
                                                                    NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[3].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY
                                                                    NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 2 EN Strip -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;padding:20px 0 0;background: #fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;color:#000" width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${tempStripLink}" style="outline:0 tabindex=-1"
                                                        target="_blank">
                                                        <img class="big" src="${tempStripImg}"
                                                            style="display:block;height:auto;border:0"
                                                            width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

`;




        if (index === 0) {
            return part1 + `

<!-- Template 2 EN Products 5 & 6 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;padding-top:20px" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000" width="100%"
                    align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[4].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[4].pdName}" src="${products[4].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[4].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[5].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[5].pdName}" src="${products[5].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[5].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[4].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                    +
                    products[4].pdSvAmnt + '</span>' : ''}
                                                    ${products[4].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                    products[4].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[5].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                    +
                    products[5].pdSvAmnt + '</span>' : ''}
                                                    ${products[5].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                    products[5].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[4].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[5].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[4].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[5].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[4].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[5].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation" width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[4].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a><!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[5].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY
                                                                    NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 2 EN Products 7 & 8 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[6].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[6].pdName}" src="${products[6].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[6].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[7].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[7].pdName}" src="${products[7].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[7].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[6].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                    +
                    products[6].pdSvAmnt + '</span>' : ''}
                                                    ${products[6].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                    products[6].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[7].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                    +
                    products[7].pdSvAmnt + '</span>' : ''}
                                                    ${products[7].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                    products[7].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[6].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[7].pdName}</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[6].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p style="margin:0;font-size:14px;text-align:center">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[7].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[6].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[7].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[6].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[7].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">BUY NOW</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

 `}


        //<!-- Template 2 EN if index === 1 -->    

        else if (index === 1) {
            return part1 + `



            <table border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;padding-top:5px" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;padding-top:0;background:#fff;padding-bottom:5px;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${suplireBnrLink1}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${suplireBnrImg1}"
                                                            style="display:block;height:auto;border:0"
                                                            width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<table border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background:#fff;padding-bottom:0;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${suplireBnrLink2}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${suplireBnrImg2}"
                                                            style="display:block;height:auto;border:0"
                                                            width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
`;
        }



        //<!-- Template 2 EN if index === 1 -->   
        else if (index === 2) {
            return part1 + `




<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;padding-top:5px">
    <tbody>
        <tr>
            <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;width:50% !important;padding-top:0;background:#fff;padding-bottom:5px;padding-right:2.5px;padding-left:0"
                                width="50%">
                                <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2"
                                    style="mso-table-lspace:0;mso-table-rspace:0;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div align="center" class="alignment" style="line-height:10px;">
                                                    <a href="${suplireBnrLink3}" style="outline:none;" tabindex="-1"
                                                        target="_blank">
                                                        <img class="fullMobileWidth" src="${suplireBnrImg3}"
                                                            style="display: block; height: auto; border: 0px;"
                                                            width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;width:50% !important;padding-top:0;background:#fff;padding-bottom:5px;padding-right:0;padding-left:2.5px"
                                width="50%">
                                <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2"
                                    style="mso-table-lspace:0;mso-table-rspace:0;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div align="center" class="alignment" style="line-height:10px;">
                                                    <a href="${suplireBnrLink4}" style="outline:none;" tabindex="-1"
                                                        target="_blank">
                                                        <img class="fullMobileWidth" src="${suplireBnrImg4}"
                                                            style="display:block;height:auto;border:0" width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;width:50% !important;background:#fff;padding-bottom:0;padding-right:2.5px;padding-left:0"
                                width="50%">
                                <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2"
                                    style="mso-table-lspace:0;mso-table-rspace:0;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div align="center" class="alignment" style="line-height:10px;">
                                                    <a href="${suplireBnrLink5}" style="outline:none;" tabindex="-1"
                                                        target="_blank">
                                                        <img class="fullMobileWidth" src="${suplireBnrImg5}"
                                                            style="display: block; height: auto; border: 0px"
                                                            width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;width:50% !important;background:#fff;padding-bottom:0;padding-right:0;padding-left:2.5px"
                                width="50%">
                                <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2"
                                    style="mso-table-lspace:0;mso-table-rspace:0;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div align="center" class="alignment" style="line-height:10px;">
                                                    <a href="${suplireBnrLink6}" style="outline:none;" tabindex="-1"
                                                        target="_blank">
                                                        <img class="fullMobileWidth" src="${suplireBnrImg6}"
                                                            style="display:block;height:auto;border:0" width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
`;
        }

    }



    else if (template === 1 && tempLang === "ar") {

        var part1 = `
<!-- Template 2 AR Banner -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;color:#000" width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${tempBnrLink}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${tempBnrImg}"
                                                            style="display:block;height:auto;border:0" width="100%">
                                                    </a>
                                                </div>
                                                <div align="center">
                                                    <p
                                                        style="padding:30px 0 20px 0;margin:0;text-align:center;font-size:30px;background:#fff">
                                                        ${tempBnrTitle}
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 2 AR Products 1 & 2 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[0].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[0].pdName}" src="${products[0].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[0].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[1].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[1].pdName}" src="${products[1].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[1].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[0].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[0].pdSvAmnt + '</span>' : ''}
                                                    ${products[0].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[0].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[1].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[1].pdSvAmnt + '</span>' : ''}
                                                    ${products[1].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[1].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[0].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[1].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[0].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[1].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[0].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[1].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[0].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a><!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[1].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

    
<!-- Template 2 AR Products 3 & 4 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;background:#fff;width: 100%;max-width: 600px;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[2].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[2].pdName}" src="${products[2].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[2].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[3].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[3].pdName}" src="${products[3].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[3].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[2].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[2].pdSvAmnt + '</span>' : ''}
                                                    ${products[2].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[2].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[3].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                +
                products[3].pdSvAmnt + '</span>' : ''}
                                                    ${products[3].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                products[3].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[2].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[3].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[2].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[3].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[2].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[3].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[2].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[3].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a><!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 2 AR Strip -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;padding:20px 0 0;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;color:#000" width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${tempStripLink}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${tempStripImg}"
                                                            style="display:block;height:auto;border:0" width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
`;



        //<!-- Template 2 AR if index === 0 => 4 products -->
        if (index === 0) {
            return part1 + `


    <table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;padding-top:20px" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000" width="100%"
                    align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[4].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[4].pdName}" src="${products[4].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[4].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[5].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[5].pdName}" src="${products[5].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[5].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[4].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                    +
                    products[4].pdSvAmnt + '</span>' : ''}
                                                    ${products[4].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                    products[4].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[5].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                    +
                    products[5].pdSvAmnt + '</span>' : ''}
                                                    ${products[5].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                    products[5].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[4].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[5].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[4].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style=color:#d00000>
                                                                    <span
                                                                        style=font-size:18px>${products[5].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[4].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[5].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[4].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a><!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[5].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a><!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


<!-- Template 2 AR Products 7 & 8 -->
<table border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width:100%;max-width:600px;background:#fff;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-2 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[6].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[6].pdName}" src="${products[6].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[6].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="pad" style="padding:0 3%" width="50%">
                                                <div style="line-height:10px;position:relative" class="alignment"
                                                    align="center">
                                                    <a href="${products[7].pdUrl}" style="outline:0" target="_blank"
                                                        tabindex="-1">
                                                        <div style="width:100%;height:auto">
                                                            <img alt="${products[7].pdName}" src="${products[7].pdImg}"
                                                                style="display:block;height:auto;border:0;max-width:100%;max-height:100%"
                                                                title="${products[7].pdName}">
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                    class="block-2 image_block" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[6].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                    +
                    products[6].pdSvAmnt + '</span>' : ''}
                                                    ${products[6].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                    products[6].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                            <td class="pad" style="padding-right:0;padding-left:0" width="50%">
                                                <div style="position:relative;color:white" class="alignment"
                                                    align="center">
                                                    ${products[7].pdSvAmnt ? '<span style="background:#d8473c;padding:3px 8px;margin:0 2px;display:inline-block">'
                    +
                    products[7].pdSvAmnt + '</span>' : ''}
                                                    ${products[7].pdBestSeller ? '<span style="background:#7fb069;padding:3px 8px;margin:0 2px">' +
                    products[7].pdBestSeller + '</span>' : ''}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr style="display:flex;">
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style=color:#000;>${products[6].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"
                                                        class=txtTinyMce-wrapper>
                                                        <p
                                                            style="margin:0;font-size:16px;text-align:center;min-height:40px;line-height:1.3;overflow:hidden;margin-top:5px">
                                                            <span style="color:#000;">${products[7].pdName}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word;">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[6].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:0"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;">
                                                            <strong>
                                                                <span style="color:#d00000">
                                                                    <span
                                                                        style="font-size:18px">${products[7].pdAftPrice}</span>
                                                                </span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[6].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pad" width="50%">
                                                <div style="font-family:sans-serif">
                                                    <div style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"
                                                        class="txtTinyMce-wrapper">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;direction:rtl;height:16px">
                                                            <span style="text-decoration:line-through;color:#777"
                                                                class="bfrPriceMbl">${products[7].pdBfrPrice}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" class="block-5 button_block"
                                    role="presentation"
                                    width="100%"
                                    style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[6].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                            <td class="pad"
                                                style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center"
                                                width="50%">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=xcite.com/alba-42mm-analog-gents-metal-watch-ag8j89x1.html style=height:38px;width:106px;v-text-anchor:middle arcsize=11% stroke=false fillcolor=#ff9900><w:anchorlock><v:textbox inset=0px,0px,0px,0px><center style=color:#fff;font-family:Arial,sans-serif;font-size:14px><![endif]-->
                                                    <a href="${products[7].pdUrl}"
                                                        style="text-decoration:none;display:inline-block;color:#fff;background-color:#d10000;border-radius:4px;width:auto;border-top:1px solid #d10000;font-weight:400;border-right:1px solid #d10000;border-bottom:1px solid #d10000;border-left:1px solid #d10000;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all"
                                                        target="_blank">
                                                        <span
                                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="margin:0;word-break:break-word">
                                                                <span style="line-height:28px;font-weight:bold;"
                                                                    data-mce-style="">اشتر
                                                                    الآن</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
`;
        }


        //<!-- Template 2 AR if index === 1 => 2 banners -->

        else if (index === 1) {
            return part1 + `
<table border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;padding-top:5px" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;padding-top:0;background:#fff;padding-bottom:5px;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${suplireBnrLink1}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${suplireBnrImg1}"
                                                            style="display:block;height:auto;border:0" width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;" align="center">
    <tbody>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background:#fff;padding-bottom:0;color:#000"
                    width="100%" align="center">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table border="0" cellpadding="0" cellspacing="0" class="block-1 image_block"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-right:0;padding-left:0">
                                                <div align="center" class="alignment" style="line-height:10px">
                                                    <a href="${suplireBnrLink2}" style="outline:0" tabindex="-1"
                                                        target="_blank">
                                                        <img class="big" src="${suplireBnrImg2}"
                                                            style="display:block;height:auto;border:0" width="100%">
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
`;
        }



        //<!-- Template 2 AR if index === 1 => 4 banners -->
        else if (index === 2) {
            return part1 + `


            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8 heri"
            style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;padding-top:5px">
            <tbody>
                <tr>
                    <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                            style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000"
                            width="100%">
                            <tbody>
                                <tr>
                                    <td class="column column-1"
                                        style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;width:50% !important;padding-top:0;background:#fff;padding-bottom:5px;padding-right:2.5px;padding-left:0"
                                        width="50%">
                                        <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2"
                                            style="mso-table-lspace:0;mso-table-rspace:0;" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="pad">
                                                        <div align="center" class="alignment" style="line-height:10px;">
                                                            <a href="${suplireBnrLink3}" style="outline:none;" tabindex="-1"
                                                                target="_blank">
                                                                <img class="fullMobileWidth" src="${suplireBnrImg3}"
                                                                    style="display: block; height: auto; border: 0px"
                                                                    width="100%">
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="column column-2"
                                        style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;width:50% !important;padding-top:0;background:#fff;padding-bottom:5px;padding-right:0;padding-left:2.5px"
                                        width="50%">
                                        <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2"
                                            style="mso-table-lspace:0;mso-table-rspace:0;" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="pad">
                                                        <div align="center" class="alignment" style="line-height:10px;">
                                                            <a href="${suplireBnrLink4}" style="outline:none;" tabindex="-1"
                                                                target="_blank"><img class="fullMobileWidth"
                                                                    src="${suplireBnrImg4}"
                                                                    style="display:block;height:auto;border:0" width="100%">
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8 heri"
            style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
            <tbody>
                <tr>
                    <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                            style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000"
                            width="100%">
                            <tbody>
                                <tr>
                                    <td class="column column-1"
                                        style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;width:50% !important;background:#fff;padding-bottom:0;padding-right:2.5px;padding-left:0"
                                        width="50%">
                                        <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2"
                                            style="mso-table-lspace:0;mso-table-rspace:0;" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="pad">
                                                        <div align="center" class="alignment" style="line-height:10px;">
                                                            <a href="${suplireBnrLink5}" style="outline:none;" tabindex="-1"
                                                                target="_blank">
                                                                <img class="fullMobileWidth" src="${suplireBnrImg5}"
                                                                    style="display: block; height: auto; border: 0px"
                                                                    width="100%">
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="column column-2"
                                        style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;width:50% !important;background:#fff;padding-bottom:0;padding-right:0;padding-left:2.5px"
                                        width="50%">
                                        <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2"
                                            style="mso-table-lspace:0;mso-table-rspace:0;" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="pad">
                                                        <div align="center" class="alignment" style="line-height:10px;">
                                                            <a href="${suplireBnrLink6}" style="outline:none;" tabindex="-1"
                                                                target="_blank">
                                                                <img class="fullMobileWidth" src="${suplireBnrImg6}"
                                                                    style="display:block;height:auto;border:0" width="100%">
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>

    `;
        }

    }

}


