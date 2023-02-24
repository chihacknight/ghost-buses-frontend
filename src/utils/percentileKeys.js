export default function findPercentileIndex(percent) {
  const percentileIndex = Number(
    percent.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })[0]
  );

  return percentileIndex;
}
