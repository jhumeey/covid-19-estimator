// Challenge 3
import { infectionsByTimeForImpact, infectionsByTimeForSevereImpact, convertToDays } from './infections';

const userData = {
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

export const ICUCasesForImpact = () => {
  try {
    const casesForICUByRequestedTime = Math.trunc((5 / 100) * infectionsByTimeForImpact());
    return casesForICUByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const ICUCasesForSevereImpact = () => {
  try {
    const casesForICUByRequestedTime = Math.trunc((5 / 100) * infectionsByTimeForSevereImpact());
    return casesForICUByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const casesForVentilatorsForImpact = () => {
  try {
    const casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * infectionsByTimeForImpact());
    return casesForVentilatorsByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const casesForVentilatorsForSevereImpact = () => {
  try {
    const casesForVentilatorsByRequestedTime = Math.trunc((2 / 100)
    * infectionsByTimeForSevereImpact());
    return casesForVentilatorsByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const dollarsInFlightForImpact = (param) => {
  try {
    const {
      data: { region: { avgDailyIncomePopulation } },
      data: { region: { avgDailyIncomeInUSD } }
    } = param;
    const dollarsInFlight = Math.trunc((infectionsByTimeForImpact() * avgDailyIncomePopulation)
      * (avgDailyIncomeInUSD * convertToDays(userData)));
    return dollarsInFlight;
  } catch (error) {
    return error.message;
  }
};

export const dollarsInFlightForSevereImpact = (param) => {
  try {
    const {
      data: { region: { avgDailyIncomePopulation } },
      data: { region: { avgDailyIncomeInUSD } }
    } = param;
    const dollarsInFlight = Math.trunc((infectionsByTimeForSevereImpact()
    * avgDailyIncomePopulation) * (avgDailyIncomeInUSD * convertToDays(userData)));
    return dollarsInFlight;
  } catch (error) {
    return error.message;
  }
};
