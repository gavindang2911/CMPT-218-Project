export type Stats = {
    cases: boolean;
    cumulativeCases: boolean;
    deaths: boolean;
    cumulativeDeaths: boolean;
    recovered: boolean;
    cumulativeRecovered: boolean;
    federal:boolean;
    provincial:boolean;
    startdate:string;
    enddate:string;
    // [key: string]: boolean;
};

const DEFAULT_FILTER: Stats = {
    cases: true,
    cumulativeCases: false,
    deaths: true,
    cumulativeDeaths: false,
    recovered: true,
    cumulativeRecovered: false,
    federal: false,
    provincial:true,
    startdate:'',
    enddate:''
};

export default DEFAULT_FILTER;
