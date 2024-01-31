export function getExperienceAsString() {
  try {
    const experienceDate = new Date(2015, 6, 1);
    const now = new Date();
    let years = now.getFullYear() - experienceDate.getFullYear();
    let months = now.getMonth() - experienceDate.getMonth();
    let days = now.getDate() - experienceDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} years, ${months} months and ${days} days of experience`;
  } catch (error) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const years = currentYear - 2015 - (currentMonth < 6 ? 1 : 0);

    return `${years}+ years of experience`;
  }
}