import {
  currentlyInfectedForImpact,
  currentlyInfectedForSevereImpact,
  infectionsByTimeForImpact,
  infectionsByTimeForSevereImpact
} from './infections';
import {
  severeCasesForImpact,
  severeCasesForSevereImpact,
  hospitalByRequestedTimeForImpact,
  hospitalByRequestedTimeForSevereImpact
} from './severeCases';
import {
  ICUCasesForImpact,
  ICUCasesForSevereImpact,
  casesForVentilatorsForImpact,
  casesForVentilatorsForSevereImpact,
  dollarsInFlightForImpact,
  dollarsInFlightForSevereImpact
} from './ICU';

let userData = {
  data: {
    region: {
      name: 'Afrtica',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 4,
      avgDailyIncomePopulation: 0.73
    },
    periodType: 'days',
    timeToElapse: 38,
    reportedCases: 2747,
    population: 92931687,
    totalHospitalBeds: 678874
  }
};

const covid19ImpactEstimator = (inputData) => {
  userData = inputData;
  return {
    data: userData,
    impact: {
      currentlyInfected: currentlyInfectedForImpact(userData),
      infectionsByRequestedTime: infectionsByTimeForImpact(),
      severeCasesByRequestedTime: severeCasesForImpact(),
      hospitalBedsByRequestedTime: hospitalByRequestedTimeForImpact(userData),
      casesForICUByRequestedTime: ICUCasesForImpact(),
      casesForVentilatorsByRequestedTime: casesForVentilatorsForImpact(),
      dollarsInFlight: dollarsInFlightForImpact(userData)
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedForSevereImpact(userData),
      infectionsByRequestedTime: infectionsByTimeForSevereImpact(),
      severeCasesByRequestedTime: severeCasesForSevereImpact(),
      hospitalBedsByRequestedTime: hospitalByRequestedTimeForSevereImpact(userData),
      casesForICUByRequestedTime: ICUCasesForSevereImpact(),
      casesForVentilatorsByRequestedTime: casesForVentilatorsForSevereImpact(),
      dollarsInFlight: dollarsInFlightForSevereImpact(userData)
    }
  };
};

export default covid19ImpactEstimator;
