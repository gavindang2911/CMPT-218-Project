import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculation',
})
export class CalculationPipe implements PipeTransform {
  transform(data: any, location: string): any {
    if (location == 'canada') {
      return canada_cal(data);
    } else if (location == 'prov') {
      return prov_cal(data);
    } else if (location == 'hr') {
      return hr_cal(data);
    } else {
      return prov_cal(data);
    }
  }
}

export function canada_cal(data: any) {
  let calculatedArray = [];

  let init = {
    cases: 0,
    cumulative_cases: 0,
    deaths: 0,
    cumulative_deaths: 0,
    recovered: 0,
    cumulative_recovered: 0,
  };

  calculatedArray.push(
    data.reduce((a, b) => {
      let temp = {
        province: b.province,
        cases: a.cases + b.cases,
        cumulative_cases: b.cumulative_cases,
        deaths: a.deaths + b.deaths,
        cumulative_deaths: b.cumulative_deaths,
        recovered: a.recovered + b.recovered,
        cumulative_recovered: b.cumulative_recovered,
      };
      return temp;
    }, init)
  );
  return calculatedArray;
}

export function prov_cal(data: any) {
  let arr0 = [];
  let arr = [];
  let calculatedArray = [];

  data.forEach((e) => {
    if (arr.length == 0) {
      arr.push(e);
    } else if (e.province == arr[0].province) {
      arr.push(e);
    } else {
      arr0.push(arr);
      arr = [];
      arr.push(e);
    }
  });

  arr0.push(arr);
  arr0.forEach((e) => {
    let init = {
      cases: 0,
      cumulative_cases: 0,
      deaths: 0,
      cumulative_deaths: 0,
      recovered: 0,
      cumulative_recovered: 0,
    };
    calculatedArray.push(
      e.reduce((a, b) => {
        let temp = {
          province: b.province,
          cases: a.cases + b.cases,
          cumulative_cases: b.cumulative_cases,
          deaths: a.deaths + b.deaths,
          cumulative_deaths: b.cumulative_deaths,
          recovered: a.recovered + b.recovered,
          cumulative_recovered: b.cumulative_recovered,
        };
        return temp;
      }, init)
    );
  });
  return calculatedArray;
}
export function hr_cal(data: any) {
  let arr0 = [];
  let arr = [];
  let calculatedArray = [];
  data.forEach((element) => {
    if (arr.length == 0) {
      arr.push(element);
    } else if (element.health_region == arr[0].health_region) {
      arr.push(element);
    } else {
      arr0.push(arr);
      arr = [];
      arr.push(element);
    }
  });
  arr0.push(arr);
  arr0.forEach((e) => {
    let init = {
      cases: 0,
      cumulative_cases: 0,
      deaths: 0,
      cumulative_deaths: 0,
      recovered: 0,
      cumulative_recovered: 0,
    };
    calculatedArray.push(
      e.reduce((a, b) => {
        let temp = {
          province: b.province,
          health_region: b.health_region,
          cases: a.cases + b.cases,
          cumulative_cases: b.cumulative_cases,
          deaths: a.deaths + b.deaths,
          cumulative_deaths: b.cumulative_deaths,
          recovered: a.recovered + b.recovered,
          cumulative_recovered: b.cumulative_recovered,
        };
        return temp;
      }, init)
    );
  });
  return calculatedArray;
}
