export const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777)
    .toString(16)
    .padStart(6, 0)}`;

export const getRandomColors = () =>
  `#${Math.floor(Math.random() * 16777231)
    .toString(16)
    .padStart(6, 0)}`;
