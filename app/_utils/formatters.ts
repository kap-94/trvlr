import moment, { Moment } from "moment";

export interface CurrencyFormatOptions {
  separation?: number; // Number of digits in each group separated by separator
  separator?: string; // Separator character for the groups
  symbol?: string; // Currency symbol
  decimals?: number; // Number of decimal places to display
  decimalSeparator?: string; // Decimal separator character
}

export const formatTime = (timeInput: string | number): string => {
  const time: Moment = moment(timeInput, "HH:mm:ss");

  const duration: moment.Duration = moment.duration(
    time.diff(moment().startOf("day"))
  );
  const formattedTime: string = moment
    .utc(duration.as("milliseconds"))
    .format("H:mm");

  return `${formattedTime} mins`;
};

export const formatCurrency = (
  num: number | string, // Input number or string representation of the number
  options: CurrencyFormatOptions = {}
): string => {
  const {
    separation = 3,
    separator = ",",
    symbol = "$",
    decimals = 2,
    decimalSeparator = ".",
  } = options;

  // Parse the input number if it's a string
  const parsedNum: number = typeof num === "string" ? parseFloat(num) : num;

  // Format the number with separators
  const formattedNum: string = parsedNum
    .toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  // Split the formatted number into integer and decimal parts
  const [integerPart, decimalPart] = formattedNum.split(".");

  // Combine the parts and return the formatted currency string
  return `${symbol} ${integerPart}${decimalSeparator}${decimalPart || ""}`;
};
