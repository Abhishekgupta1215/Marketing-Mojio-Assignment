import { useState } from 'react'
import styles from '@/styles/ExpenseForm.module.css'

export default function ExpenseForm({ categories, currencies, onAddExpense }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [category, setCategory] = useState(categories[0])
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Please enter an expense name')
      return
    }

    if (!amount || amount <= 0) {
      setError('Please enter a valid amount')
      return
    }

    onAddExpense({
      name: name.trim(),
      amount: parseFloat(amount),
      currency,
      category,
    })

    setName('')
    setAmount('')
    setCurrency('USD')
    setCategory(categories[0])
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.formGroup}>
        <label htmlFor="name">Expense Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Coffee, Gas, Flight ticket"
          maxLength={50}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="amount">Amount</label>
        <div className={styles.amountRow}>
          <input
            id="amount"
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            min="0"
          />
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            aria-label="Currency"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.submitBtn}>
        + Add Expense
      </button>
    </form>
  )
}
