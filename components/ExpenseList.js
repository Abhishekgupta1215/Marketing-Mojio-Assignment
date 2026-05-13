import styles from '@/styles/ExpenseList.module.css'

const getCategoryColor = (category) => {
  const colors = {
    Food: '#FF6B6B',
    Travel: '#4ECDC4',
    Marketing: '#45B7D1',
    Utilities: '#FFA07A',
    Other: '#DDA0DD',
  }
  return colors[category] || '#999'
}

const getCategoryIcon = (category) => {
  const icons = {
    Food: '🍔',
    Travel: '✈️',
    Marketing: '📢',
    Utilities: '💡',
    Other: '📝',
  }
  return icons[category] || '💰'
}

export default function ExpenseList({
  expenses,
  onDeleteExpense,
  selectedCurrency,
  exchangeRate,
}) {
  if (expenses.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>📭</div>
        <p>No expenses yet. Add your first expense above!</p>
      </div>
    )
  }

  return (
    <div className={styles.listContainer}>
      {expenses.map((expense) => (
        <div key={expense.id} className={styles.card}>
          <div className={styles.cardLeft}>
            <div
              className={styles.categoryBadge}
              style={{ backgroundColor: getCategoryColor(expense.category) }}
            >
              {getCategoryIcon(expense.category)}
            </div>
            <div className={styles.expenseInfo}>
              <h3>{expense.name}</h3>
              <div className={styles.meta}>
                <span className={styles.category}>{expense.category}</span>
                <span className={styles.date}>{expense.date}</span>
              </div>
            </div>
          </div>

          <div className={styles.cardRight}>
            <div className={styles.amount}>
              <span className={styles.amountPrimary}>
                {expense.currency || 'USD'} {expense.amount.toFixed(2)}
              </span>
              {selectedCurrency !== (expense.currency || 'USD') && (
                <span className={styles.amountSecondary}>
                  {selectedCurrency}:{' '}
                  {((expense.amountInUsd ?? expense.amount) * exchangeRate).toFixed(2)}
                </span>
              )}
            </div>
            <button
              className={styles.deleteBtn}
              onClick={() => onDeleteExpense(expense.id)}
              title="Delete expense"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
