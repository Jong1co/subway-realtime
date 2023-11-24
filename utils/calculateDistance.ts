export type Coordinate = {
  lat: number;
  lng: number;
};

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

function rad2deg(rad: number) {
  return rad * (180 / Math.PI);
}

export function calculateDistance(
  currentPosition: Coordinate,
  targetPosition: Coordinate
) {
  const { lat: currentlat, lng: currentlng } = currentPosition;
  const { lat: targetlat, lng: targetlng } = targetPosition;

  const theta = currentlng - targetlng;
  let distance =
    Math.sin(deg2rad(currentlat)) * Math.sin(deg2rad(targetlat)) +
    Math.cos(deg2rad(currentlat)) *
      Math.cos(deg2rad(targetlat)) *
      Math.cos(deg2rad(theta));

  distance = Math.acos(distance);
  distance = rad2deg(distance);
  distance = distance * 60 * 1.1515 * 1.609344 * 1000;

  return distance;
}
