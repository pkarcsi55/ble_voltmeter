bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    bluetooth.startUartService()
    Kaocsolatban = true
})
bluetooth.onBluetoothDisconnected(function () {
    Kaocsolatban = false
    basic.showIcon(IconNames.No)
})
let Kaocsolatban = false
Kaocsolatban = false
basic.showString("V")
control.waitMicros(1000)
basic.forever(function () {
    if (Kaocsolatban) {
        control.waitMicros(1000)
        basic.showIcon(IconNames.Square)
        bluetooth.uartWriteString("" + convertToText(pins.analogReadPin(AnalogPin.P1)) + "\r\n")
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
