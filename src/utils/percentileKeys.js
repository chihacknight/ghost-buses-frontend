
export default function findPercentileIndex(route) {
  const percentileIndex = Number(
    (route.properties.percentiles * 100).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })[0]
  );

  return percentileIndex
}
