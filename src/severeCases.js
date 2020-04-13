// challenge 2
import { infectionsByTimeForImpact, infectionsByTimeForSevereImpact } from './infections';

const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 4,
    avgDailyIncomePopulation: 0.73
  },
  periodType: 'days',
  timeToElapse: 38,
  reportedCases: 2747,
  population: 92931687,
  totalHospitalBeds: 678874
};

export const severeCasesForImpact = () => {
  try {
    const infection = infectionsByTimeForImpact(data);
    const severeCasesByRequestedTime = Math.trunc((15 / 100) * infection);
    return severeCasesByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const severeCasesForSevereImpact = () => {
  try {
    const infection = infectionsByTimeForSevereImpact(data);
    const severeCasesByRequestedTime = Math.trunc((15 / 100) * infection);
    return severeCasesByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const hospitalByRequestedTimeForImpact = (param) => {
  try {
    const { totalHospitalBeds } = param;
    const severeCases = severeCasesForImpact();
    const hospitalByRequestedTime = Math.trunc(((35 / 100) * totalHospitalBeds) - severeCases);
    return hospitalByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const hospitalByRequestedTimeForSevereImpact = (param) => {
  try {
    const { totalHospitalBeds } = param;
    const severeCases = severeCasesForSevereImpact();
    const hospitalByRequestedTime = Math.trunc(((35 / 100) * totalHospitalBeds) - severeCases);
    return hospitalByRequestedTime;
  } catch (error) {
    return error.message;
  }
};
