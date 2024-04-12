input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
})
voiceRecognition.init()
voiceRecognition.setVolume(6)
voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
voiceRecognition.setWakeTime(20)
serial.writeLine("" + (voiceRecognition.getWakeTime()))
voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
serial.writeLine("==================")
servos.P2.stop()
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W62)) {
            basic.showIcon(IconNames.Happy)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W63)) {
            basic.showIcon(IconNames.Sad)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W64)) {
            basic.showIcon(IconNames.Heart)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W92)) {
            music.play(music.stringPlayable("C5 B A G F E D C ", 240), music.PlaybackMode.UntilDone)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W75)) {
            servos.P2.run(50)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W76)) {
            servos.P2.stop()
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W103)) {
            pins.digitalWritePin(DigitalPin.P8, 1)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W104)) {
            pins.digitalWritePin(DigitalPin.P8, 0)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W65)) {
            basic.clearScreen()
        }
    }
})
