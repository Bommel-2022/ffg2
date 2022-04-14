input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("name", 0)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("j")
})
radio.setGroup(1)
