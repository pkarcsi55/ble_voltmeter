def on_bluetooth_connected():
    global Kaocsolatban
    basic.show_icon(IconNames.YES)
    bluetooth.start_uart_service()
    Kaocsolatban = True
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    global Kaocsolatban
    Kaocsolatban = False
    basic.show_icon(IconNames.NO)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

Kaocsolatban = False
Kaocsolatban = False
basic.show_string("V")
control.wait_micros(1000)

def on_forever():
    if Kaocsolatban:
        control.wait_micros(1000)
        basic.show_icon(IconNames.SQUARE)
        bluetooth.uart_write_string("" + convert_to_text(pins.analog_read_pin(AnalogPin.P1)) + "\r\n")
        basic.show_icon(IconNames.SMALL_SQUARE)
    else:
        basic.show_icon(IconNames.SAD)
basic.forever(on_forever)
