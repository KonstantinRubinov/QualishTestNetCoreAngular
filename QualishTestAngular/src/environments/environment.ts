// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const mainUrl = 'http://localhost:56204/api/'
export const appointmentsUrl = mainUrl + "appointments/";
export const appointmentTypesUrl = mainUrl + "appointmentTypes/";
export const appointmentImportancesUrl = mainUrl + "appointmentImportances/";
export const alldataUrl = mainUrl + "alldata/";
