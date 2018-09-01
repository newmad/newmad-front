export default `
<style>
:root {
  --default-scene-height: 500px
}

body {
       margin: 0;
      min-width: 320px;
      height: 100vh;
}

.defs-svg {
  position: absolute;
  width: 0;
  height: 0;
}

.outside,
.outside-lightning {
  position: absolute;
  width: 100%;
  height: 278px;
}

.outside {
  background-image: linear-gradient(-180deg, #37455f 0%, #c8d1e5 100%);
}

.outside-lightning {
  background-image: linear-gradient(111deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 200%);
  animation: lightning 6s step-end infinite;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}

/*
 * Rain
 */
.rain-back-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: .2;
}
.rain-line-svg {
  animation: rain .4s linear infinite;
}
.rain-line-svg:nth-child(3n+0) {
  stroke-opacity: .6;
  animation-duration: .5s;
}
.rain-line-svg:nth-child(3n+1) {
  stroke-opacity: .7;
}
.rain-line-svg:nth-child(3n+2) {
  stroke-opacity: .9;
  animation-duration: .3s;
}

@keyframes rain {
  100% {
    stroke-dashoffset: -550px;
  }
}

/*
 * Cat
 */
.cat {
  position: relative;
  width: 0;
  height: calc(100% * 240 / 500);
  min-height: 240px;
}
.cat-svg {
  position: absolute;
  height: 100%;
  transform: translate(calc(-100% * 82 / 178), 0);
}
.cat-paw-right-svg {
  position: absolute;
  height: calc(100% * 26 / 240);
  transform: translate(calc(-100% * 82 / 40), calc(100% * 110 / 26));
}
.cat-paw-left-svg {
  position: absolute;
  height: calc(100% * 61 / 240);
  transform: translate(calc(100% * 23 / 48), calc(100% * 111 / 61));
}

/*
 * Umbrella
 */
.umbrella-svg {
  position: absolute;
  height: calc(100% * 212 / 240);
  transform: translate(calc(-100% * 229 / 359), calc(-100% * 65 / 212));
}

/*
 * Flowers
 */
.bunch-svg {
  position: absolute;
  height: calc(100% * 110 / 240);
  transform: translate(calc(-100% * 5 / 57), calc(100% * 96 / 110));
}

/*
 * Animations
 */
.umbrella-hat-light,
.umbrella-stick-light,
.bunch-light,
.cat-paw-right-light,
.cat-paw-left-light,
.cat-ear-left-light,
.cat-ear-right-light,
.cat-face-light,
.cat-scarf-light,
.cat-leg-left-light,
.cat-body-light {
  animation: lightning 6s step-end infinite;
}
.cat-eye-pupil {
  animation: 6s cat-eyes 3s linear infinite;
}

@keyframes lightning {
  0%, 53%, 61% {
    opacity: 0;
  }
  50%, 56% {
    opacity: 1;
  }
}
@keyframes cat-eyes {
  5%, 75% {
    rx: 4px;
    ry: 4px;
  }
  7%, 60% {
    rx: 1px;
    ry: 5px;
  }
}

</style>

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