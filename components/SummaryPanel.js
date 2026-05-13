import styles from '@/styles/SummaryPanel.module.css'
import PieChart from '@/components/PieChart'
import categoryColors from '@/utils/categoryColors'

export default function SummaryPanel({
  totalAmount = 0,
  categoryBreakdown = {},
  expenseCount = 0,
  mode = 'both', // 'both' | 'total' | 'breakdown'
}) {
  // Convert categoryBreakdown to array format for PieChart
  const chartData = Object.entries(categoryBreakdown || {}).map(([category, amount]) => ({
    category,
    amount,
  }));

  // build colors array matching chartData order
  const colorsForChart = chartData.map(item => categoryColors[item.category] || '#ccc')

  return (
    <div className={styles.panel}>
      {(mode === 'both' || mode === 'total') && (
        <div className={styles.totalCard}>
          <h2>Total Expenses</h2>
          <div className={styles.amount}>
            ${totalAmount.toFixed(2)}
          </div>
          <p className={styles.subtitle}>{expenseCount} expense{expenseCount !== 1 ? 's' : ''}</p>
        </div>
      )}

      {(mode === 'both' || mode === 'breakdown') && (
        <div className={styles.breakdown}>
          <div className={styles.breakdownInner}>
            <h3>Breakdown by Category</h3>
            {Object.keys(categoryBreakdown).length > 0 ? (
              <div className={styles.pieChartContainer}>
                <div className={styles.chartWrapper}>
                  <PieChart data={chartData} size={140} colors={colorsForChart} />
                </div>
                <div className={styles.legend}>
                  {chartData.map((item, index) => (
                    <div key={item.category} className={styles.legendItem}>
                      <div
                        className={styles.legendColor}
                        style={{ backgroundColor: colorsForChart[index] }}
                      />
                      <div className={styles.legendContent}>
                        <div className={styles.legendCategory}>{item.category}</div>
                        <div className={styles.legendAmount}>
                          ${item.amount.toFixed(2)} ({((item.amount / totalAmount) * 100).toFixed(0)}%)
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className={styles.emptyMessage}>No expenses to break down yet</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
