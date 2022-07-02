input.onButtonPressed(Button.A, function () {
    ST.move(-1)
})
input.onButtonPressed(Button.B, function () {
    ST.move(1)
})
let IT2: game.LedSprite = null
let IT1: game.LedSprite = null
let ST: game.LedSprite = null
ST = game.createSprite(2, 4)
let SC = 0
let SP = 500
basic.forever(function () {
    IT1 = game.createSprite(randint(0, 4), 0)
    IT1.turn(Direction.Right, 90)
    basic.pause(randint(0, 7 * 100))
    for (let index = 0; index < 4; index++) {
        IT1.move(1)
        basic.pause(300)
    }
    IT1.delete()
    SC += 1
    SP += -10
})
basic.forever(function () {
    IT2 = game.createSprite(randint(0, 4), 0)
    IT2.turn(Direction.Right, 90)
    basic.pause(randint(0, 7 * 100))
    for (let index = 0; index < 4; index++) {
        IT2.move(1)
        basic.pause(300)
    }
    IT2.delete()
    SC += 1
    SP += -10
})
basic.forever(function () {
    if (ST.isTouching(IT1) || ST.isTouching(IT2)) {
        game.pause()
        basic.showNumber(SC)
        basic.pause(100)
        game.gameOver()
    }
})
