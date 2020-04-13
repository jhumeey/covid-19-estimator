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


const covid19ImpactEstimator = (userData) => ({
  data: userData,
  impact: {
    currentlyInfected: currentlyInfectedForImpact(userData),
    infectionsByRequestedTime: infectionsByTimeForImpact(userData),
    severeCasesByRequestedTime: severeCasesForImpact(userData),
    hospitalBedsByRequestedTime: hospitalByRequestedTimeForImpact(userData),
    casesForICUByRequestedTime: ICUCasesForImpact(userData),
    casesForVentilatorsByRequestedTime: casesForVentilatorsForImpact(userData),
    dollarsInFlight: dollarsInFlightForImpact(userData)
  },
  severeImpact: {
    currentlyInfected: currentlyInfectedForSevereImpact(userData),
    infectionsByRequestedTime: infectionsByTimeForSevereImpact(userData),
    severeCasesByRequestedTime: severeCasesForSevereImpact(userData),
    hospitalBedsByRequestedTime: hospitalByRequestedTimeForSevereImpact(userData),
    casesForICUByRequestedTime: ICUCasesForSevereImpact(userData),
    casesForVentilatorsByRequestedTime: casesForVentilatorsForSevereImpact(userData),
    dollarsInFlight: dollarsInFlightForSevereImpact(userData)
  }
});

export default covid19ImpactEstimator;
