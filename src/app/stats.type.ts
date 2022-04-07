export type Stats = {
    cases: boolean;
    cumulative_cases: boolean;
    deaths: boolean;
    cumulative_deaths: boolean;
    recovered: boolean;
    cumulative_recovered: boolean;
    federal:boolean;
    provincial:boolean;
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
    federal: false,
    provincial:true,
    startdate:'',
    enddate:''
};

export default DEFAULT_FILTER;
