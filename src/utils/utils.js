import { DateTime } from 'luxon';

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
