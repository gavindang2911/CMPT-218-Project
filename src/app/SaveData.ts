export default class SaveData {
    time_save:  string;
    stat: object;
    location: string[];
    time: object;

    constructor() {

    }
}

// {
//     id: 1,
//     timeSave: (new Date()).getTime(),
//     stat: {
//         Cases: 100,
//         Deaths: 10
//     },
//     location : ['Province', 'Regional'],
//     time: {
//         start: "March-05-2020",
//         end: 'June-06-2020',
//     }
//   },