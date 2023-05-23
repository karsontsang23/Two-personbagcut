def on_gesture_shake():
    global 包剪揼
    包剪揼 = randint(1, 3)
    game.resume()
    if 包剪揼 == 1:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
    if 包剪揼 == 2:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        # . . # #
                        # # . # #
        """)
    if 包剪揼 == 3:
        basic.show_leds("""
            . . . . .
                        . . # # #
                        # # # # #
                        . . # # #
                        . . # # #
        """)
    music.play_melody("C D E F G A B C5 ", 120)
    game.pause()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    basic.clear_screen()
    game.game_over()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

包剪揼 = 0
包剪揼 = 0
basic.show_leds("""
    # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
""")
basic.show_leds("""
    # . . . #
        . # . # .
        . . # . .
        # . . # #
        # # . # #
""")
basic.show_leds("""
    . . . . .
        . . # # #
        # # # # #
        . . # # #
        . . # # #
""")