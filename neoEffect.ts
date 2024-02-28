//%icon="\uf110" color="#1964d2"
namespace efffect {
    //%block="run flash effect"
    export function flashEffect() {
        strip.clear()
        strip.setBrightness(brightness)
        while (true) {
            basic.pause(randint(1500, 3500))
            for (let index = 0; index < randint(6, 9); index++) {
                strip.showColor(neopixel.colors(NeoPixelColors.Blue))
                strip.show()
                basic.pause(20)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
                basic.pause(20)
            }
        }
    }
    //%block="run neopixel timer r $R g $G b $B milis $milis"
    export function neopixelTimer(R: number, G: number, B: number, milis: number) {
        strip.clear()
        strip.setBrightness(brightness)
        while (true) {
            strip.shift(1)
            strip.setPixelColor(0, neopixel.rgb(R, G, B))
            strip.show()
            basic.pause(milis)
        }
    }
    //%block="run random effect"
    export function randomEffect() {
        strip.setBrightness(brightness)
        while (true) {
            strip.setPixelColor(randint(0, length - 1), neopixel.rgb(randint(1, 50), randint(1, 50), randint(1, 50)))
            strip.show()
        }
    }
    //%block="run circling effect r $R g $G b $B milis $milis"
    export function circlingEffect(R: number, G: number, B: number, milis: number) {
        strip.setBrightness(brightness)
        strip.clear()
        for (let index = 0; index < length; index++) {
            strip.shift(1)
            strip.setPixelColor(0, neopixel.rgb(R, G, B))
            strip.show()
            basic.pause(milis)
        }
        strip.showColor(neopixel.rgb(R, G, B))
        strip.show()
        for (let index = 0; index < length; index++) {
            strip.shift(1)
            strip.setPixelColor(0, neopixel.rgb(0, 0, 0))
            strip.show()
            basic.pause(milis)
        }
    }
    //%block="run infinity circling effect r $R g $G b $B milis $milis"
    export function infinityCirclingEffect(R: number, G: number, B: number, milis: number) {
        strip.setBrightness(brightness)
        strip.clear()
        while (true) {
            for (let index = 0; index < length; index++) {
                strip.shift(1)
                strip.setPixelColor(0, neopixel.rgb(R, G, B))
                strip.show()
                basic.pause(milis)
            }
            strip.showColor(neopixel.rgb(R, G, B))
            strip.show()
            for (let index = 0; index < length; index++) {
                strip.shift(1)
                strip.setPixelColor(0, neopixel.rgb(0, 0, 0))
                strip.show()
                basic.pause(milis)
            }
        }
    }
    // Otáčanie farby umožňuje otáčať vlastnú farbu RGB vlastnou rýchlosťou
    //%block="run color rtation r $R g $G b $B milis $milis"
    export function colorRotation(R: number, G: number, B: number, milis: number) {
        strip.setBrightness(brightness)
        strip.clear()
        strip.setPixelColor(0, neopixel.rgb(R, G, B))
        strip.show()
        while (0 == 0) {
            basic.pause(milis)
            strip.rotate(1)
            strip.show()
        }
    }
    // Zväčšuje jas
    //%advance=true weight=60
    //%block="increase brightness"
    export function increaseBrightness() {
        if (brightness <= 240) {
            brightness += 10
        }
        serial.writeLine("" + (brightness))
    }
    // Dúhový efekt umožňuje rotovať dúhu od farby po farbu vlastnou rýchlosťou
    //%block="run rainbov effect from $from to $to milis $milis"
    export function rainbovEffect(_from: number, to: number, milis: number) {
        strip.setBrightness(brightness)
        strip.clear()
        strip.showRainbow(_from, to)
        while (0 == 0) {
            basic.pause(milis)
            strip.rotate(1)
            strip.show()
        }
    }
    // Nastaveniefarby nastavuje vlastnú farbu RGB
    function setColor(R: number, G: number, B: number) {
        strip.clear()
        strip.setBrightness(brightness)
        strip.showColor(neopixel.rgb(R, G, B))
        strip.show()
    }
    // Dúha vykresľuje na neopixeli dúhu
    function rainbowColor(_from: number, to: number) {
        strip.clear()
        strip.setBrightness(brightness)
        strip.showRainbow(_from, to)
        strip.show()
    }
    // Zmenšuje jas
    //%block="decrease brightness"
    //%advance=true weight=50
    export function decreaseBrightness() {
        if (brightness >= 10) {
            brightness += -10
        }
        serial.writeLine("" + (brightness))
    }
    //%advance=true weight=100
    //%block="initial setup length $myLength"
    export function initialSetup(myLength: number) {
        serial.redirectToUSB()
        brightness = 50
        length = myLength
        strip = neopixel.create(DigitalPin.P0, length, NeoPixelMode.RGB)
    }
    //%block="run neopixel timer r $R g $G b $B milis $milis"
    export function neopixelCountdown(R: number, G: number, B: number, milis: number) {
        strip.clear()
        strip.setBrightness(brightness)
        strip.showColor(neopixel.rgb(R, G, B))
        strip.show()
        while (true) {
            strip.shift(1)
            strip.setPixelColor(0, neopixel.rgb(0, 0, 0))
            strip.show()
            basic.pause(milis)
        }
    }
    let length = 0
    let brightness = 0
    let strip: neopixel.Strip = null
}