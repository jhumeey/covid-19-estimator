// Challenge 3
import { infectionsByTimeForImpact, infectionsByTimeForSevereImpact, convertToDays } from './infections';

export const ICUCasesForImpact = (data) => {
  try {
    const casesForICUByRequestedTime = Math.trunc((5 / 100) * infectionsByTimeForImpact(data));
    return casesForICUByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const ICUCasesForSevereImpact = (data) => {
  try {
    const casesForICUByRequestedTime = Math.trunc((5 / 100)
    * infectionsByTimeForSevereImpact(data));
    return casesForICUByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const casesForVentilatorsForImpact = (data) => {
  try {
    const casesForVentilatorsByRequestedTime = Math.trunc((2 / 100)
    * infectionsByTimeForImpact(data));
    return casesForVentilatorsByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const casesForVentilatorsForSevereImpact = (data) => {
  try {
    const casesForVentilatorsByRequestedTime = Math.trunc((2 / 100)
    * infectionsByTimeForSevereImpact(data));
    return casesForVentilatorsByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const dollarsInFlightForImpact = (param) => {
  try {
    const {
      region: { avgDailyIncomePopulation },
      region: { avgDailyIncomeInUSD }
    } = param;
    const dollarsInFlight = Math.trunc((infectionsByTimeForImpact(param) * avgDailyIncomePopulation)
      * (avgDailyIncomeInUSD * convertToDays(param)));
    return dollarsInFlight;
  } catch (error) {
    return error.message;
  }
};

export const dollarsInFlightForSevereImpact = (param) => {
  try {
    const {
      region: { avgDailyIncomePopulation },
      region: { avgDailyIncomeInUSD }
    } = param;
    const dollarsInFlight = Math.trunc((infectionsByTimeForSevereImpact(param)
    * avgDailyIncomePopulation) * (avgDailyIncomeInUSD * convertToDays(param)));
    return dollarsInFlight;
  } catch (error) {
    return error.message;
  }
};
