export let date = new Date("10.1.2023");

export function selectData(mode, year, month) {
  month !== "Month" ? (date = new Date(month + year)) : (date = new Date(year));

  switch (month) {
    case "Jan":
      return january;
    case "Feb":
      return february;
    case "Mar":
      return march;
    case "Apr":
      return dataYear;

    default:
      return dataYear;
  }
}

Math.floor(Math.random() * 2000);

export const dataYear = [
  ["Year", "MB used"],
  ["Jan", Math.floor(Math.random() * 1000)],
  ["Feb", Math.floor(Math.random() * 1000)],
  ["Mar", Math.floor(Math.random() * 1000)],
  ["Apr", Math.floor(Math.random() * 1000)],
  ["May", Math.floor(Math.random() * 1000)],
  ["Jun", Math.floor(Math.random() * 1000)],
  ["Jul", Math.floor(Math.random() * 1000)],
  ["Aug", Math.floor(Math.random() * 1000)],
  ["Sep", Math.floor(Math.random() * 1000)],
  ["Oct", Math.floor(Math.random() * 1000)],
  ["Nov", Math.floor(Math.random() * 1000)],
  ["Dec", Math.floor(Math.random() * 1000)],
];

export const january = [
  ["day", "MB used"],
  ["1", Math.floor(Math.random() * 1000)],
  ["2", Math.floor(Math.random() * 1000)],
  ["3", Math.floor(Math.random() * 1000)],
  ["4", Math.floor(Math.random() * 1000)],
  ["5", Math.floor(Math.random() * 1000)],
  ["6", Math.floor(Math.random() * 1000)],
  ["7", Math.floor(Math.random() * 1000)],
  ["8", Math.floor(Math.random() * 1000)],
  ["9", Math.floor(Math.random() * 1000)],
  ["10", Math.floor(Math.random() * 1000)],
  ["11", Math.floor(Math.random() * 1000)],
  ["12", Math.floor(Math.random() * 1000)],
  ["13", Math.floor(Math.random() * 1000)],
  ["14", Math.floor(Math.random() * 1000)],
  ["15", Math.floor(Math.random() * 1000)],
  ["16", Math.floor(Math.random() * 1000)],
  ["17", Math.floor(Math.random() * 1000)],
  ["18", Math.floor(Math.random() * 1000)],
  ["19", Math.floor(Math.random() * 1000)],
  ["20", Math.floor(Math.random() * 1000)],
  ["21", Math.floor(Math.random() * 1000)],
  ["22", Math.floor(Math.random() * 1000)],
  ["23", Math.floor(Math.random() * 1000)],
  ["24", Math.floor(Math.random() * 1000)],
  ["25", Math.floor(Math.random() * 1000)],
  ["26", Math.floor(Math.random() * 1000)],
  ["27", Math.floor(Math.random() * 1000)],
  ["28", Math.floor(Math.random() * 1000)],
  ["29", Math.floor(Math.random() * 1000)],
  ["30", Math.floor(Math.random() * 1000)],
  ["31", Math.floor(Math.random() * 1000)],
];

export const february = [
  ["day", "MB used"],
  ["1", 34],
  ["2", 110],
  ["3", 111],
  ["4", 112],
  ["5", 157],
  ["6", 255],
  ["7", 273],
  ["8", 293],
  ["9", 404],
  ["10", 406],
  ["11", 433],
  ["12", 435],
  ["13", 446],
  ["14", 457],
  ["15", 514],
  ["16", 521],
  ["17", 523],
  ["18", 524],
  ["19", 574],
  ["20", 585],
  ["21", 590],
  ["22", 620],
  ["23", 673],
  ["24", 680],
  ["25", 694],
  ["26", 749],
  ["27", 821],
  ["28", 993],
];

export const march = [
  ["day", "MB used"],
  ["1", 31000],
  ["2", 1170],
  ["3", 660],
  ["4", 1030],
  ["5", 1330],
  ["6", 630],
  ["7", 220],
  ["8", 630],
  ["9", 1330],
  ["10", 630],
  ["11", 1330],
  ["12", 630],
  ["13", 1000],
  ["14", 1170],
  ["15", 660],
  ["16", 1030],
  ["17", 1330],
  ["18", 630],
  ["19", 220],
  ["20", 630],
  ["21", 1330],
  ["22", 630],
  ["23", 1330],
  ["24", 630],
  ["25", 1170],
  ["26", 660],
  ["27", 1030],
  ["28", 1330],
  ["29", 630],
  ["30", 220],
  ["31", 630],
];
