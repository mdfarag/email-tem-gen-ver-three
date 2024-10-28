
function returnHeader(headerIndex, headerLinksUrls, headerLinksTexts) {
    console.log('here is header index selected', headerIndex)
    console.log('here is header links selected', headerLinksUrls)
    console.log('here is header texts selected', headerLinksTexts)

    if (headerIndex === 0) {
        return `
   
        <table class="row row-1" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background: linear-gradient(#00355f, #00355f); background-color: #00355f;color:#333;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1" width="41.666666666666664%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:15px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-top:5px;padding-right:0;padding-left:0">
                                                <div class="alignment" align="left" style="line-height:10px">
                                                    <div style="max-width:133.167px">
                                                        <a href="https://www.xcite.com/" target="_blank"
                                                            style="outline:0" tabindex="-1">
                                                            <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/MicrosoftTeams-image%20%282%29.jpg"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="133.167">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2" width="58.333333333333336%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:5px;padding-right:10px;padding-top:12px;padding-left:0">
                                                <div class="alignment" align="right" style="line-height:10px">
                                                    <div style="max-width:138.833px">
                                                        <a href="https://apps.apple.com/kw/app/xcite-by-alghanim-electronics/id649610123"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/Download_on_the_App_Store_Badge2.png"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="138.833" alt="Apple Store" title="Apple Store">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:5px;padding-right:10px;padding-top:5px;padding-left:0">
                                                <div class="alignment" align="right" style="line-height:10px">
                                                    <div style="max-width:138.833px">
                                                        <a href="https://play.google.com/store/apps/details?id=com.developmentnow.xcite"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/Google_Play_Store_badge_EN2.png"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="138.833" alt="Google Play Store"
                                                                title="Google Play Store">
                                                        </a>
                                                    </div>
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

<table class="row row-2" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#ededed;border-radius:0;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="button_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-top:10px;text-align:center">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.xcite.com/mobile-phones-department" style="height:16px;width:46px;v-text-anchor:middle;" arcsize="25%" stroke="false" fill="false">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#00355f; font-family:sans-serif; font-size:14px">
<![endif]-->
                                                    <a href="${headerLinksUrls[0]}"
                                                        target="_blank"
                                                        style="text-decoration:none;display:inline-block;color:#00355f;background-color:transparent;border-radius:4px;width:auto;border-top:0 solid transparent;font-weight:700;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;padding-top:0;padding-bottom:0;font-family:Calibri,sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all">
                                                        <span
                                                            style="padding-left:0;padding-right:0;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span
                                                                style="word-break:break-word;line-height:16.8px">${headerLinksTexts[0]}</span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="button_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-top:10px;text-align:center">
                                                <div class="alignment" align="center"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.xcite.com/computers-tablets-department" style="height:16px;width:45px;v-text-anchor:middle;" arcsize="25%" stroke="false" fill="false">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#00355f; font-family:sans-serif; font-size:14px">
<![endif]-->
                                                    <a href="${headerLinksUrls[1]}"
                                                        target="_blank"
                                                        style="text-decoration:none;display:inline-block;color:#00355f;background-color:transparent;border-radius:4px;width:auto;border-top:0 solid transparent;font-weight:700;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;padding-top:0;padding-bottom:0;font-family:Calibri,sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all">
                                                        <span
                                                            style="padding-left:0;padding-right:0;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span
                                                                style="word-break:break-word;line-height:16.8px">${headerLinksTexts[1]}</span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-3" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="button_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-top:10px;text-align:center">
                                                <div class="alignment" align="center"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.xcite.com/small-appliances-department" style="height:16px;width:63px;v-text-anchor:middle;" arcsize="25%" stroke="false" fill="false">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#00355f; font-family:sans-serif; font-size:14px">
<![endif]-->
                                                    <a href="${headerLinksUrls[2]}"
                                                        target="_blank"
                                                        style="text-decoration:none;display:inline-block;color:#00355f;background-color:transparent;border-radius:4px;width:auto;border-top:0 solid transparent;font-weight:700;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;padding-top:0;padding-bottom:0;font-family:Calibri,sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all">
                                                        <span
                                                            style="padding-left:0;padding-right:0;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span
                                                                style="word-break:break-word;line-height:16.8px">${headerLinksTexts[2]}</span>
                                                        </span>
                                                    </a><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-4" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="button_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-top:10px;text-align:center">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.xcite.com/gift-cards-department" style="height:16px;width:37px;v-text-anchor:middle;" arcsize="25%" stroke="false" fill="false">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#00355f; font-family:sans-serif; font-size:14px">
<![endif]-->
                                                    <a href="${headerLinksUrls[3]}"
                                                        target="_blank"
                                                        style="text-decoration:none;display:inline-block;color:#00355f;background-color:transparent;border-radius:4px;width:auto;border-top:0 solid transparent;font-weight:700;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;padding-top:0;padding-bottom:0;font-family:Calibri,sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all">
                                                        <span
                                                            style="padding-left:0;padding-right:0;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span
                                                                style="word-break:break-word;line-height:16.8px">${headerLinksTexts[3]}</span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
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

    else if (headerIndex === 1) {
        return `
            
        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
        style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
        <tbody>
            <tr>
                <td>
                    <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                        style="mso-table-lspace:0;mso-table-rspace:0;background: linear-gradient(#00355f, #00355f); background-color: #00355f;color:#333;margin:0 auto"
                        width="100%">
                        <tbody>
                            <tr>
                                <td class="column column-1" width="58.333333333333336%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:15px;padding-top:15px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                    <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                        cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody>
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:5px;padding-left:10px;padding-top:2pxpadding-right:0">
                                                    <div class="alignment" align="left" style="line-height:10px">
                                                        <div style="max-width:119px">
                                                            <a href="https://apps.apple.com/kw/app/xcite-by-alghanim-electronics/id649610123"
                                                                target="_blank" style="outline:0" tabindex="-1">
                                                                <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/Download_on_the_App_Store_Badge_AR_RGB_blk2.png"
                                                                    style="display:block;height:auto;border:0;width:100%"
                                                                    width="119" alt="Apple Store" title="Apple Store">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="image_block block-2" width="100%" border="0" cellpadding="0"
                                        cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody>
                                            <tr>
                                                <td class="pad" style="padding-left:10px;padding-right:0">
                                                    <div class="alignment" align="left" style="line-height:10px">
                                                        <div style="max-width:119px">
                                                            <a href="https://play.google.com/store/apps/details?id=com.developmentnow.xcite"
                                                                target="_blank" style="outline:0" tabindex="-1">
                                                                <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/google-play-AR2.png"
                                                                    style="display:block;height:auto;border:0;width:100%"
                                                                    width="119" alt="Google Play Store"
                                                                    title="Google Play Store">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td class="column column-2" width="41.666666666666664%"
                                    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:10px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                    <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                        cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody>
                                            <tr>
                                                <td class="pad"
                                                    style="padding-right:10px;padding-top:20px;padding-left:0">
                                                    <div class="alignment" align="right" style="line-height:10px">
                                                        <div style="max-width:133.167px">
                                                            <a href="https://www.xcite.com/ar-KW"
                                                                target="_blank" style="outline:0" tabindex="-1">
                                                                <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/MicrosoftTeams-image%20%283%29.png"
                                                                    style="display:block;height:auto;border:0;width:100%"
                                                                    width="133.167">
                                                            </a>
                                                        </div>
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

    <table class="row row-2" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#ededed;border-radius:0;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="button_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-top:10px;text-align:center">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.xcite.com/ar-KW/home-entertainment-department" style="height:16px;width:53px;v-text-anchor:middle;" arcsize="25%" stroke="false" fill="false">
    <w:anchorlock/>
    <v:textbox inset="0px,0px,0px,0px">
    <center style="color:#00355f; font-family:sans-serif; font-size:14px">
    <![endif]-->
                                                    <a href="${headerLinksUrls[0]}"
                                                        target="_blank"
                                                        style="text-decoration:none;display:inline-block;color:#00355f;background-color:transparent;border-radius:4px;width:auto;border-top:0 solid transparent;font-weight:700;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;padding-top:0;padding-bottom:0;font-family:Calibri,sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all">
                                                        <span
                                                            style="padding-left:0;padding-right:0;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span
                                                                style="word-break:break-word;line-height:16.8px">${headerLinksTexts[0]}</span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="button_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-top:10px;text-align:center">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.xcite.com/ar-KW/large-appliances-department" style="height:16px;width:59px;v-text-anchor:middle;" arcsize="25%" stroke="false" fill="false">
    <w:anchorlock/>
    <v:textbox inset="0px,0px,0px,0px">
    <center style="color:#00355f; font-family:sans-serif; font-size:14px">
    <![endif]-->
                                                    <a href="${headerLinksUrls[1]}"
                                                        target="_blank"
                                                        style="text-decoration:none;display:inline-block;color:#00355f;background-color:transparent;border-radius:4px;width:auto;border-top:0 solid transparent;font-weight:700;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;padding-top:0;padding-bottom:0;font-family:Calibri,sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all">
                                                        <span
                                                            style="padding-left:0;padding-right:0;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span style="word-break:break-word;line-height:16.8px">${headerLinksTexts[1]}</span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-3" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="button_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-top:10px;text-align:center">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.xcite.com/ar-KW/computers-tablets-department" style="height:16px;width:46px;v-text-anchor:middle;" arcsize="25%" stroke="false" fill="false">
    <w:anchorlock/>
    <v:textbox inset="0px,0px,0px,0px">
    <center style="color:#00355f; font-family:sans-serif; font-size:14px">
    <![endif]-->
                                                    <a href="${headerLinksUrls[2]}"
                                                        target="_blank"
                                                        style="text-decoration:none;display:inline-block;color:#00355f;background-color:transparent;border-radius:4px;width:auto;border-top:0 solid transparent;font-weight:700;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;padding-top:0;padding-bottom:0;font-family:Calibri,sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all">
                                                        <span
                                                            style="padding-left:0;padding-right:0;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span
                                                                style="word-break:break-word;line-height:16.8px">${headerLinksTexts[2]}</span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-4" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="button_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-top:10px;text-align:center">
                                                <div class="alignment" align="center">
                                                    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.xcite.com/ar-KW/mobile-phones-department" style="height:16px;width:48px;v-text-anchor:middle;" arcsize="25%" stroke="false" fill="false">
    <w:anchorlock/>
    <v:textbox inset="0px,0px,0px,0px">
    <center style="color:#00355f; font-family:sans-serif; font-size:14px">
    <![endif]-->
                                                    <a href="${headerLinksUrls[3]}"
                                                        target="_blank"
                                                        style="text-decoration:none;display:inline-block;color:#00355f;background-color:transparent;border-radius:4px;width:auto;border-top:0 solid transparent;font-weight:700;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;padding-top:0;padding-bottom:0;font-family:Calibri,sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all">
                                                        <span
                                                            style="padding-left:0;padding-right:0;font-size:14px;display:inline-block;letter-spacing:normal">
                                                            <span
                                                                style="word-break:break-word;line-height:16.8px">${headerLinksTexts[3]}</span>
                                                        </span>
                                                    </a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
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
