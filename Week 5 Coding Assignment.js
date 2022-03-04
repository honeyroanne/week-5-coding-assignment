//Menu App
class musician {
    constructor(name, instrument){
        this.name = name;
        this.instrument = instrument;
    }

    describe() {
        return `${this.name} plays ${this.instrument}.`;
    }
}

class band {
    constructor(name) {
        this.name = name;
        this.musicians = [];
    }

    addmusician(musician) {
        if (musician instanceof musician) {
            this.musicians.push(musician);
        } else {
          throw new Error(`You can only add an instance of musician. Argument is not a musician; ${musician}`);  
        }
    }

    describe() {
        return `${this.names} has ${this.musician.length} musician.`;
    }
}

class Menu {
    constructor() {
        this.bands = [];
        this.selectedband = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch (selection) {
                case '1':
                    this.createband();
                    break;
                case '2':
                    this.viewband();
                    break;
                case '3':
                    this.deleteband();
                    break;
                case '4':
                    this.displaybands();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt (`
        0) exit
        1) create new band
        2) view band
        3) delete band
        4) display all bands
        `);
    }

    showbandMenuOptions(bandInfo) {
        return prompt (`
        0) back
        1) create musician
        2) delete musician
        ---------------------
        ${bandInfo}
        `);
    }

    displaybands() {
        let bandString = '';
        for (let i = 0; i < this.bands.length; i++) {
            bandString += i +') ' + this.bands[i].name + '\n'; 
        }
        alert(bandString);
    }

    createband() {
        let name = prompt(' Enter name for new band:');
        this.bands.push(new band(name));
    }

    viewband() {
        let index = prompt('Enter the index of the band you wish to view:');
        if(index > -1 && index < this.bands.length) {
            this.selectedband = this.bands[index];
            let description = 'band Name: ' + this.selectedband.name + '\n';

            for (let i = 0; i < this.selectedband.musicians.length; i++) {
                description += i + ') ' + this.selectedband.musicians[i].name
                + ' - ' + this.selectedband.musicians[i].instrument + '\n';
            }

            let selection = this.showbandMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createmusician();
                    break;
                case '2':
                    this.deletemusician();
            }
        }
    }

    deleteband() {
        let index = prompt('Enter the index of the band you wish to delete:')
        if (index > -1 && index < this.bands.length) {
            this.bands.splice(index, 1);
        }
    }

    createmusician() {
        let name = prompt('Enter name for new musician:');
        let instrument = prompt('Enter instrument for new musician:');
        this.selectedband.musicians.push(new musician(name, instrument));
    }

    deletemusician() {
        let index = prompt('Enter the index of the musician you wish to delete:');
        if(index > -1 && index < this.selectedband.musicians.length) {
            this.selectedband.musicians.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();