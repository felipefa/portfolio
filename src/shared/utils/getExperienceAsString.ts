import { formatDuration, intervalToDuration } from 'date-fns';

export function getExperienceAsString() {
  try {
    const experienceDuration = intervalToDuration({
      start: new Date(2015, 6, 1),
      end: new Date()
    });

    const dateInReadableFormat = formatDuration(experienceDuration, {
      format: ['years', 'months', 'days']
    });

    return dateInReadableFormat;
  } catch (error) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const years = currentYear - 2015 - (currentMonth < 6 ? 1 : 0);

    return `${years}+ years`;
  }
}