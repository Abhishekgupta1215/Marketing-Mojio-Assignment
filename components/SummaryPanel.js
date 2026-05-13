import styles from '@/styles/SummaryPanel.module.css'

export default function SummaryPanel({
  totalAmount,
  categoryBreakdown,
  expenseCount,
}) {
  return (
    <div className={styles.panel}>
      <div className={styles.totalCard}>
        <h2>Total Expenses</h2>
        <div className={styles.amount}>
          ${totalAmount.toFixed(2)}
        </div>
        <p className={styles.subtitle}>{expenseCount} expense{expenseCount !== 1 ? 's' : ''}</p>
      </div>

      <div className={styles.breakdown}>
        <h3>Breakdown by Category</h3>
        {Object.keys(categoryBreakdown).length > 0 ? (
          <div className={styles.categoryList}>
            {Object.entries(categoryBreakdown).map(([category, amount]) => (
              <div key={category} className={styles.categoryItem}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryName}>{category}</span>
                  <span className={styles.categoryAmount}>
                    ${amount.toFixed(2)}
                  </span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{
                      width: `${(amount / totalAmount) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyMessage}>No expenses to break down yet</p>
        )}
      </div>
    </div>
  )
}
