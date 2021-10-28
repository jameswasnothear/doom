let mySprite: Sprite = null
let the_slayer = sprites.create(assets.image`slayer static position`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`hell on earth cityscape`)
controller.moveSprite(the_slayer)
scroller.setCameraScrollingMultipliers(1, 1)
characterAnimations.loopFrames(
mySprite,
assets.animation`slayer concept animations`,
500,
characterAnimations.rule(Predicate.NotMoving)
)
