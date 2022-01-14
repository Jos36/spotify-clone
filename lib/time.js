export function millistoMinutesAndSeconds(millies) {
  const mins = Math.floor(millies / 60000);
  const seconds = ((millies % 60000) / 1000).toFixed(0);
  return seconds == 60
    ? mins + 1 + ":00"
    : mins + ":" + (seconds < 10 ? "0" : "") + seconds;
}
