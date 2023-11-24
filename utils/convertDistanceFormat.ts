export const convertDistanceFormat = (distance: number) => {
  if (distance < 1000) {
    return `${distance}m`;
  } else {
    return `${distance / 1000}km`;
  }
};
