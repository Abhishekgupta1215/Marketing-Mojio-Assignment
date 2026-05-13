export default function PieChart({ data, size = 150, colors: propColors }) {
  const defaultColors = [
    '#0B6478', // Teal
    '#E74C3C', // Red/Orange
    '#F39C12', // Yellow/Gold
    '#9B59B6', // Purple
    '#1ABC9C', // Turquoise
    '#34495E', // Dark Gray
    '#E67E22', // Dark Orange
    '#16A085', // Green
  ];
  const colors = propColors || defaultColors;

  let currentAngle = 0;
  let totalAmount = 0;

  // Calculate total
  data.forEach(item => {
    totalAmount += item.amount;
  });

  // Create path data for each slice
  const slices = data.map((item, index) => {
    const sliceAngle = (item.amount / totalAmount) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;

    // Convert to radians
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    // Calculate coordinates
    const radius = size / 2;
    const x1 = radius + radius * Math.cos(startRad);
    const y1 = radius + radius * Math.sin(startRad);
    const x2 = radius + radius * Math.cos(endRad);
    const y2 = radius + radius * Math.sin(endRad);

    // Large arc flag
    const largeArc = sliceAngle > 180 ? 1 : 0;

    // Create path
    const path = `M ${radius} ${radius} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

    const percentage = ((item.amount / totalAmount) * 100).toFixed(0);

    currentAngle = endAngle;

    return {
      path,
      color: colors[index % colors.length],
      category: item.category,
      amount: item.amount,
      percentage,
    };
  });

  return (
    <div>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {slices.map((slice, index) => (
          <path key={index} d={slice.path} fill={slice.color} stroke="white" strokeWidth="2" />
        ))}
      </svg>
    </div>
  );
}
