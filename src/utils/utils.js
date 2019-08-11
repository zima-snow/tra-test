import { DateTime } from 'luxon';
import findIndex from 'lodash.findindex';

export const toCapitalize = word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const convertUpperCaseSnakeCaseToCapitalizeText = (source = '') =>
  source
    .toLowerCase()
    .split('_')
    .map(toCapitalize)
    .join(' ');

export const compareDateTimeWithToday = dateTime => dateTime.hasSame(DateTime.local(), 'days');

export const fromNow = dateTime => {
  const diffInMinutes = dateTime.diff(DateTime.local(), 'minutes');
  const { minutes } = diffInMinutes.toObject();
  const normalizeMinutes = Math.trunc(minutes * -1);
  const hours = Math.trunc(normalizeMinutes / 60);
  return hours === 0
    ? `${normalizeMinutes} minutes ago`
    : `${hours} hours ${normalizeMinutes - hours * 60} minutes ago`;
};

export const getObjectFromArrayByProp = (arr, prop) => {
  const index = findIndex(arr, prop);
  if (index !== -1) {
    return arr[index];
  }

  return {};
};

export const upsertObjectToArray = (arr, key, newVal) => {
  const index = findIndex(arr, key);
  if (index !== -1) {
    arr.splice(index, 1, newVal);
  } else {
    arr.push(newVal);
  }
};
