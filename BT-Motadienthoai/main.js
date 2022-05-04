class Battery {
    energy;
    constructor(energy) {
        this.energy = energy;
    }
    chargeEnergy() {
        this.energy++;
}
    downEnergy() {
        this.energy--;
    }
}
class mobiphone {
    battery;
    memorySend = [];
    memoryRecive = [];
    message = "";
    status = false;

    constructor(battery) {
        this.battery = battery;
    }

    turnOn() {
        this.status = true;
        this.battery.downEnergy();
    }

    turnOff() {
        this.status = false;
        alert("The phone is off")
    }

    turnOnOff() {
        return this.status !== this.status;
    }

    chargeBattery() {
        this.battery.chargeEnergy();
    }
    setMessage() {
        if (this.status && this.battery>0) {
            this.memorySend.push(this.message);
            phone.memoryRecive.push(this.message);
            alert("Message sent successfully")
            this.battery.downEnergy();
        } else if (this.battery<=0) {
            alert("Battery off")
        } else {
            alert("The phone is off")
        }
    }
}
let supperBattery = new Battery();
let iphone12 = new mobiphone();
let iphone13 = new mobiphone();








