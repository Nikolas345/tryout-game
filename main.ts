controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 9 . . . 9 . . . . . . . . . 
        . . 9 9 . . . . . . 8 8 8 . . . 
        . . . 9 . . . . 8 8 8 8 8 8 . . 
        . . . . . 8 8 8 8 8 8 8 8 8 8 . 
        . . . . 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . . 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . . 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . . . . 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 . . . . 9 . . . . . 
        . . 9 9 9 . . . . 9 9 . . . . . 
        . . . . . . . . . 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, extinguisher, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray)
    sprite.startEffect(effects.fire)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
otherSprite.startEffect(effects.ashes)



})
let fire: Sprite = null
let water: Sprite = null
let extinguisher: Sprite = null
scene.setBackgroundColor(7)
info.setLife(3)

extinguisher = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f . . f f f f f f f f . . . 
    . . f . . f f f f f f f f . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . 2 1 1 2 . . . . . . . 
    . . . . 2 2 1 1 2 2 . . . . . . 
    . . . . 2 2 1 1 2 2 . . . . . . 
    . . . . 2 2 1 1 2 2 . . . . . . 
    . . . . 2 2 1 1 2 2 . . . . . . 
    . . . . 2 2 1 1 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
extinguisher.setPosition(15, 60)
controller.moveSprite(extinguisher)
extinguisher.setStayInScreen(true)



game.onUpdateInterval(2000, function () {
    fire = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 . . . 4 . . . . . . 4 
        . . . . . . . . . . . . . . . . 
        . . 4 . . . . 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 4 2 2 . . . 
        . . . 2 2 2 2 4 4 4 4 2 2 . 4 . 
        . . . 2 4 4 4 4 5 4 2 2 . . . . 
        . . . 2 2 4 5 5 5 4 4 2 . . . . 
        . . . . 2 4 5 5 5 4 4 2 . . . . 
        . . . 2 4 4 5 5 4 4 2 2 . . . . 
        . . . 2 4 5 5 5 4 2 2 . . . . . 
        . . . 2 4 4 5 4 2 2 . . . . . . 
        . . . 2 2 4 4 4 2 . . . . . . . 
        . . . . 2 2 4 4 2 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    fire.setPosition(160, randint(0, 120))
    fire.setVelocity(-50, 0)
})
