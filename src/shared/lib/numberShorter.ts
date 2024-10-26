export default function numberShorter(count: number): string {
  if (!count) {
    return String(0);
  }
  if (count < 1000) {
    return count.toString();
  } else if (count < 1_000_000) {
    const value = (count / 1000).toFixed(1);
    return parseFloat(value) + "K";
  } else if (count < 1_000_000_000) {
    const value = (count / 1_000_000).toFixed(1);
    return parseFloat(value) + "M";
  } else {
    const value = (count / 1_000_000_000).toFixed(1);
    return parseFloat(value) + "B";
  }
}
