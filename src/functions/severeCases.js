// challenge 2
import { infectionsByTimeForImpact, infectionsByTimeForSevereImpact } from './infections';

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

export const severeCasesForImpact = () => {
  try {
    const infection = infectionsByTimeForImpact(userData);
    const severeCasesByRequestedTime = Math.trunc((15 / 100) * infection);
    return severeCasesByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const severeCasesForSevereImpact = () => {
  try {
    const infection = infectionsByTimeForSevereImpact(userData);
    const severeCasesByRequestedTime = Math.trunc((15 / 100) * infection);
    return severeCasesByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const hospitalByRequestedTimeForImpact = (param) => {
  try {
    const { data: { totalHospitalBeds } } = param;
    const severeCases = severeCasesForImpact();
    const hospitalByRequestedTime = Math.trunc(((35 / 100) * totalHospitalBeds) - severeCases);
    return hospitalByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const hospitalByRequestedTimeForSevereImpact = (param) => {
  try {
    const { data: { totalHospitalBeds } } = param;
    const severeCases = severeCasesForSevereImpact();
    const hospitalByRequestedTime = Math.trunc(((35 / 100) * totalHospitalBeds) - severeCases);
    return hospitalByRequestedTime;
  } catch (error) {
    return error.message;
  }
};
