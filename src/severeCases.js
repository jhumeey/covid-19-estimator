// challenge 2
import { infectionsByTimeForImpact, infectionsByTimeForSevereImpact } from './infections';

export const severeCasesForImpact = (data) => {
  try {
    const infection = infectionsByTimeForImpact(data);
    const severeCasesByRequestedTime = Math.trunc((15 / 100) * infection);
    return severeCasesByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const severeCasesForSevereImpact = (data) => {
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
    const severeCases = severeCasesForImpact(param);
    const hospitalByRequestedTime = Math.trunc(((35 / 100) * totalHospitalBeds) - severeCases);
    return hospitalByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const hospitalByRequestedTimeForSevereImpact = (param) => {
  try {
    const { totalHospitalBeds } = param;
    const severeCases = severeCasesForSevereImpact(param);
    const hospitalByRequestedTime = Math.trunc(((35 / 100) * totalHospitalBeds) - severeCases);
    return hospitalByRequestedTime;
  } catch (error) {
    return error.message;
  }
};
