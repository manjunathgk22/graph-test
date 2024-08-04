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


export function generateColors(n) {
    const colors = [];
    const saturation = 70; // Adjust as needed (percentage)
    const lightness = 50;  // Adjust as needed (percentage)
  
    for (let i = 0; i < n; i++) {
      const hue = Math.floor((i * 360 / n) % 360);
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      colors.push(color);
    }
  
    return colors;
  }