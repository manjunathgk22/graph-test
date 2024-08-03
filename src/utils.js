export function formatNumberWithIntl(num) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  if (num >= 1e6) {
    return formatter.format(num / 1e6) + "M";
  } else if (num >= 1e3) {
    return formatter.format(num / 1e3) + "K";
  } else {
    return formatter.format(num);
  }
}

