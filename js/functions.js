
const convertTimeToMinutes = (time) =>{
  const [hours, minutes] = time.split(':').map(Number);

  return hours * 60 + minutes;
};


const isMeetingTimeAvailable = (start, end, meeting, meetingDuration) => {
  const [workDayStart, workDayEnd, meetingStart] = [start, end, meeting,].map(convertTimeToMinutes);

  const meetingEnd = meetingStart + meetingDuration;

  // eslint-disable-next-line no-console
  return console.log(meetingStart >= workDayStart && meetingEnd <= workDayEnd);
};

isMeetingTimeAvailable('08:00', '17:30', '14:00', 90);
isMeetingTimeAvailable('8:0', '10:0', '8:0', 120);
isMeetingTimeAvailable('08:00', '14:30', '14:00', 90);
isMeetingTimeAvailable('14:00', '17:30', '08:0', 90);
isMeetingTimeAvailable('8:00', '17:30', '08:00', 900);
isMeetingTimeAvailable('08:00', '17:00', '09:00', 120);
