// Challenge 1

export const currentlyInfectedForImpact = (param) => {
  try {
    const { reportedCases } = param;
    const currentlyInfected = reportedCases * 10;
    return currentlyInfected;
  } catch (error) {
    return error.message;
  }
};

export const currentlyInfectedForSevereImpact = (param) => {
  try {
    const { reportedCases } = param;
    const currentlyInfected = reportedCases * 50;
    return currentlyInfected;
  } catch (error) {
    return error.message;
  }
};


export const convertToDays = (param) => {
  let days;
  const { timeToElapse, periodType } = param;
  const setPeriodTypeToLowerCase = periodType.toLowerCase();
  switch (setPeriodTypeToLowerCase) {
    case 'days':
      days = timeToElapse;
      break;
    case 'weeks':
      days = timeToElapse * 7;
      break;
    case 'months':
      days = timeToElapse * 30;
      break;
    default:
      days = timeToElapse;
  }
  return days;
};


export const infectionsByTimeForImpact = (data) => {
  try {
    const factor = Math.trunc(convertToDays(data) / 3);
    const infectionByRequestedTime = Math.trunc(currentlyInfectedForImpact(data)
      * (2 ** factor));
    return infectionByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const infectionsByTimeForSevereImpact = (data) => {
  try {
    const factor = Math.trunc(convertToDays(data) / 3);
    const infectionByRequestedTime = Math.trunc(currentlyInfectedForSevereImpact(data)
      * (2 ** factor));
    return infectionByRequestedTime;
  } catch (error) {
    return error.message;
  }
};
