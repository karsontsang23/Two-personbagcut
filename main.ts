enum RadioMessage {
    message1 = 49434,
    二 = 31386,
    三 = 46385
}
input.onGesture(Gesture.TiltLeft, function () {
    _ = randint(1, 3)
    game.resume()
    music.playMelody("C D E F F E D C ", 1402)
    if (_ == 1) {
        radio.sendMessage(RadioMessage.message1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (_ == 2) {
        radio.sendMessage(RadioMessage.二)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # . . # #
            # # . # #
            `)
    }
    if (_ == 3) {
        radio.sendMessage(RadioMessage.三)
        basic.showLeds(`
            . . . . .
            . . # # #
            # # # # #
            . . # # #
            . . # # #
            `)
    }
    music.playMelody("A C5 B A A A B C5 ", 1935)
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
    包剪揼 = randint(1, 3)
    game.resume()
    music.playMelody("C D E F F E D C ", 1402)
    if (包剪揼 == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (包剪揼 == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # . . # #
            # # . # #
            `)
    }
    if (包剪揼 == 3) {
        basic.showLeds(`
            . . . . .
            . . # # #
            # # # # #
            . . # # #
            . . # # #
            `)
    }
    music.playMelody("A C5 B A A A B C5 ", 1935)
    game.pause()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    game.gameOver()
})
input.onGesture(Gesture.TiltRight, function () {
    _ = randint(1, 3)
    game.resume()
    music.playMelody("C D E F F E D C ", 1402)
    if (_ == 1) {
        radio.sendMessage(RadioMessage.message1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (_ == 2) {
        radio.sendMessage(RadioMessage.二)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # . . # #
            # # . # #
            `)
    }
    if (_ == 3) {
        radio.sendMessage(RadioMessage.三)
        basic.showLeds(`
            . . . . .
            . . # # #
            # # # # #
            . . # # #
            . . # # #
            `)
    }
    music.playMelody("A C5 B A A A B C5 ", 1935)
    game.pause()
})
let _ = 0
let 包剪揼 = 0
radio.setGroup(1)
包剪揼 = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    # . . # #
    # # . # #
    `)
basic.showLeds(`
    . . . . .
    . . # # #
    # # # # #
    . . # # #
    . . # # #
    `)
basic.forever(function () {
    if (包剪揼 == 1 && _ == 2) {
        game.addScore(1)
    }
})
basic.forever(function () {
    if (_ == 1 && 包剪揼 == 2) {
        game.addScore(1)
    }
})
basic.forever(function () {
    if (_ == 3 && 包剪揼 == 2) {
        game.addScore(1)
    }
})
basic.forever(function () {
    if (包剪揼 == 3 && _ == 2) {
        game.addScore(1)
    }
})
basic.forever(function () {
    if (包剪揼 == 3 && _ == 1) {
        game.addScore(1)
    }
})
basic.forever(function () {
    if (_ == 3 && 包剪揼 == 1) {
        game.addScore(1)
    }
})
