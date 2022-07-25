controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 150, 150)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
    item = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.Food)
    item.setPosition(randint(0, 160), randint(0, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.pewPew.play()
    mySprite.startEffect(effects.fountain, 1000)
    info.changeLifeBy(-1)
    pause(1000)
})
let SmallEnemy: Sprite = null
let item: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
mySprite.setPosition(0, 0)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
item = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Food)
let BigEnemy = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `, SpriteKind.Enemy)
BigEnemy.setVelocity(50, 50)
BigEnemy.setFlag(SpriteFlag.BounceOnWall, true)
let EnemyFlag1 = 0
let EnemyFlag2 = 0
info.setLife(7)
forever(function () {
    if (info.score() > 9) {
        if (EnemyFlag1 == 0) {
            SmallEnemy = sprites.create(img`
                . . . . . . 3 b b b . . . . . . 
                . . . . . . b 4 4 4 b . . . . . 
                . . . . . . b b 4 4 4 b . . . . 
                . . . . . b 4 b b b 4 4 b . . . 
                . . . . b d 5 5 5 4 b 4 4 b . . 
                . . . . b 3 2 3 5 5 4 e 4 4 b . 
                . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                . . . b 5 3 2 3 5 5 5 5 e e e e 
                . . b d 7 5 5 5 3 2 3 5 5 e e e 
                . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                b d 3 2 d 5 5 5 d d d 4 4 . . . 
                b 5 5 5 5 d d 4 4 4 4 . . . . . 
                4 d d d 4 4 4 . . . . . . . . . 
                4 4 4 4 . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            SmallEnemy.follow(mySprite, 20)
            EnemyFlag1 = 1
        }
    }
    if (info.score() > 19) {
        if (EnemyFlag2 == 0) {
            scene.cameraShake(4, 5000)
            music.spooky.play()
            BigEnemy.setImage(img`
                ...........ccccc66666...........
                ........ccc8888888888666........
                ......cc888888888bb8888866......
                .....cb8888bb8888b5b888888b.....
                ....eb8888b5b88888b88888888b....
                ...ebb88888b8888888888b888886...
                ..eb6bb888888888bb888b5b888886..
                ..e6bb5b88888888b5b888b88bb88e..
                .e66b8b8888888888b8888888b5b88e.
                .e6bb888888888888888888888bb88e.
                eb66b88888bb888888888888888888be
                eb66bb888b5b88888888bb88888888be
                fb666b888bb888888888b5b8888888bf
                fcb666b88888888888888bb888888bcf
                .fbb6666b88888888888888888888bf.
                .efbb66666bb8888888888888888bfe.
                .86fcbb66666bbb88888888888bcc688
                8776effcbbbbbbbbbbbbbbbbcfc66778
                87766666cccccccccccccccc66666678
                f866666666666666666666666676686f
                fef866677766667777776667777fffef
                fbff877768f86777777666776fffffbf
                fbeffeefffeff7766688effeeeefeb6f
                f6bfffeffeeeeeeeeeeeeefeeeeebb6e
                f66ddfffffeeeffeffeeeeeffeedb46e
                .c66ddd4effffffeeeeeffff4ddbc6e.
                .fc6b4dddddddddddddddddddbcccee.
                ..ff6bbcccccccccccccccccccccee..
                ....ffbbbbccccccccccccccccee....
                ......ffebbbbbbcccccccceee......
                .........fffffffcccccee.........
                ................................
                `)
            SmallEnemy.setImage(img`
                . . . . . . b b b b . . . . . . 
                . . . . . . b 4 4 4 b . . . . . 
                . . . . . . b b 4 4 4 b . . . . 
                . . . . . b 4 b b b 4 4 b . . . 
                . . . . b d 6 6 6 4 b 4 4 b . . 
                . . . . b 3 2 3 6 6 4 e 4 4 b . 
                . . . b d 2 2 2 6 7 6 4 e 4 4 e 
                . . . b 5 3 2 3 6 6 6 6 e e e e 
                . . b d 7 c c c 3 2 3 6 6 e e e 
                . . b c c c c c 2 2 2 6 6 d e e 
                . b 3 2 3 c 7 c 3 2 3 6 d d e 4 
                . b 2 2 2 c c c c c c d d e 4 . 
                b d 3 2 d c c c d d d 4 4 . . . 
                b 6 6 6 6 d d 4 4 4 4 . . . . . 
                4 d d d 4 4 4 . . . . . . . . . 
                4 4 4 4 . . . . . . . . . . . . 
                `)
            BigEnemy.setVelocity(100, 100)
            SmallEnemy.follow(mySprite, 30)
            EnemyFlag2 = 1
        }
    }
})
