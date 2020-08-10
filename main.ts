bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    bluetooth.startTemperatureService()
    Kaocsolatban = true
})
bluetooth.onBluetoothDisconnected(function () {
    Kaocsolatban = false
    basic.showIcon(IconNames.No)
})
let Kaocsolatban = false
Kaocsolatban = false
let feszültseg = 0
basic.showString("V")
control.waitMicros(1000)
basic.forever(function () {
    if (Kaocsolatban) {
        control.waitMicros(1000)
        basic.showIcon(IconNames.Square)
        feszültseg = pins.analogReadPin(AnalogPin.P1)
        control.waitMicros(100)
        bluetooth.startUartService()
        bluetooth.uartWriteLine(convertToText(feszültseg))
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
