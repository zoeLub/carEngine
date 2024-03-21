const Engine = {
    name: "Super Engine",
    make: "Awesome Motors",
    model: "Turbo 2000",
    serialNumber: "ZL12365824034T",
    year: 2024,
    capacity: "2.0L",
    displayInfo: function() {
        console.log(`Engine: ${this.name}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Capacity: ${this.capacity}`);
    }
};

export default Engine;