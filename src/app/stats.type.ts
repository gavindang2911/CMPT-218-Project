export type Stats = {
    cases: boolean;
    cumulative_cases: boolean;
    deaths: boolean;
    cumulative_deaths: boolean;
    recovered: boolean;
    cumulative_recovered: boolean;
    location: string;
    // federal:boolean;
    // provincial:boolean;
    startdate:string;
    enddate:string;
    // [key: string]: boolean;
};

const DEFAULT_FILTER: Stats = {
    cases: true,
    cumulative_cases: false,
    deaths: true,
    cumulative_deaths: false,
    recovered: true,
    cumulative_recovered: false,
    location: 'prov',
    // federal: false,
    // provincial:true,
    startdate:'',
    enddate:''
};

export function convertString(s: string): string {
    let returnValue: string;
    switch (s) {
        case 'cases':
            returnValue = 'Cases';
            break;
        case 'cumulative_cases':
            returnValue = 'Cummulative Cases';
            break;
        case 'deaths':
            returnValue = 'Deaths';
            break;
        case 'cumulative_deaths':
            returnValue = 'Cumulative Deaths';
            break;
        case 'recovered':
            returnValue = 'Recovered';
            break;
        case 'cumulative_recovered':
            returnValue = 'Cumulative Recovered';
            break;
    }
    return returnValue;
}

export default DEFAULT_FILTER;
