export default class SaveData {
    time_save:  string;
    stat: string[];
    location: string[];
    time: string[];

    constructor() {
        this.time_save;
        this.stat = [];
        this.location = [];
        this.time = [];
    }
}

// {
//     id: 1,
//     timeSave: (new Date()).getTime(),
//     stat: ['Cases', 'Deaths'],
//     location : ['Province', 'Regional'],
//     time: ["March-05-2020", "June-06-2020"],


//   },