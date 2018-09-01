export default `
<svg class="defs-svg" viewBox="0 0 2 500">
    <title>Defs</title>
    <defs>
        <path id="rain-line" fill="none" stroke-width="2" stroke="#FFFFFF"
              d="M1,0 L1,1000" stroke-linecap="round" stroke-dasharray="50 160 70 270"/>
        <pattern id="rain" width="500" height="500" patternUnits="userSpaceOnUse">
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(10 0)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(200 -200)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(350 -300)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(490 -400)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(75 -20)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(140 -120)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(270 -220)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(400 -320)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(450 -420)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(105 -180)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(165 -270)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(375 -370)"/>
            <use class="rain-line-svg" xlink:href="#rain-line" transform="translate(460 -500)"/>
        </pattern>
    </defs>
</svg>

<div class="outside">
    <div class="outside-lightning"></div>

    <svg class="rain-back-svg">
        <title>Rain in the back</title>
        <rect fill="url(#rain)" width="100%" height="100%"/>
    </svg>
</div>
`;