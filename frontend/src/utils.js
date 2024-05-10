export function percentDifference(a, b) {
  return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2);
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export const rgbaColors = [
  "rgba(54, 46, 243, 1)",
  "rgba(88, 213, 97, 1)",
  "rgba(245, 146, 11, 1)",
  "rgba(162, 221, 112, 1)",
  "rgba(148, 156, 191, 1)",
  "rgba(124, 209, 209, 1)",
  "rgba(68, 235, 184, 1)",
  "rgba(2, 75, 194, 1)",
  "rgba(253, 22, 192, 1)",
  "rgba(171, 214, 209, 1)",
  "rgba(197, 9, 115, 1)",
  "rgba(4, 74, 100, 1)",
  "rgba(42, 99, 15, 1)",
  "rgba(197, 114, 47, 1)",
  "rgba(26, 245, 208, 1)",
  "rgba(222, 116, 125, 1)",
  "rgba(242, 155, 204, 1)",
  "rgba(106, 170, 60, 1)",
  "rgba(159, 78, 21, 1)",
  "rgba(132, 177, 167, 1)",
  "rgba(92, 200, 165, 1)",
  "rgba(82, 78, 11, 1)",
  "rgba(152, 68, 191, 1)",
  "rgba(228, 61, 75, 1)",
  "rgba(113, 235, 183, 1)",
  "rgba(205, 248, 180, 1)",
  "rgba(241, 163, 95, 1)",
  "rgba(1, 218, 234, 1)",
  "rgba(249, 14, 156, 1)",
  "rgba(59, 21, 62, 1)",
];
