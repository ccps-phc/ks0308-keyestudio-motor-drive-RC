radio.setGroup(67)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(1)
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.sendNumber(2)
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(3)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(99)
    }
})
