def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P8, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P8, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

voiceRecognition.init()
voiceRecognition.set_volume(7)
voiceRecognition.set_mute_mode(voiceRecognition.MUTE.OFF)
voiceRecognition.set_wake_time(20)
serial.write_line("" + str((voiceRecognition.get_wake_time())))
voiceRecognition.play_by_cmdid(voiceRecognition.check_word1(voiceRecognition.WakeupWords.W2))
serial.write_line("==================")
servos.P2.stop()

def on_forever():
    voiceRecognition.get_cmdid()
    if voiceRecognition.check_cmdid():
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W62):
            basic.show_icon(IconNames.HAPPY)
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W63):
            basic.show_icon(IconNames.SAD)
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W64):
            basic.show_icon(IconNames.HEART)
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W92):
            music.play(music.string_playable("C5 B A G F E D C ", 240),
                music.PlaybackMode.UNTIL_DONE)
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W75):
            servos.P2.run(25)
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W76):
            servos.P2.stop()
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W103):
            pins.digital_write_pin(DigitalPin.P8, 1)
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W104):
            pins.digital_write_pin(DigitalPin.P8, 0)
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W65):
            basic.clear_screen()
basic.forever(on_forever)
