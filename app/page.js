'use client'

import { useState, useEffect } from 'react'
import ExpenseForm from '@/components/ExpenseForm'
import ExpenseList from '@/components/ExpenseList'
import SummaryPanel from '@/components/SummaryPanel'
import CurrencyConverter from '@/components/CurrencyConverter'
import styles from '@/styles/Home.module.css'

const CATEGORIES = ['Food', 'Travel', 'Marketing', 'Utilities', 'Other']
const CURRENCIES = ['USD', 'EUR', 'GBP', 'INR', 'CAD', 'AUD']

export default function Home() {
  const [expenses, setExpenses] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [exchangeRates, setExchangeRates] = useState({ USD: 1 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Load expenses from localStorage on mount
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses')
    if (savedExpenses) {
      try {
        setExpenses(JSON.parse(savedExpenses))
      } catch (err) {
        console.error('Failed to load expenses from localStorage:', err)
      }
    }
  }, [])

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  // Fetch exchange rates
  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true)
      setError(null)
      try {
        // Using exchangerate-api.com free tier - no API key required
        const response = await fetch(
          `https://open.er-api.com/v6/latest/USD`,
          {
            headers: {
              'Accept': 'application/json'
            }
          }
        )
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rate')
        }
        const data = await response.json()
        if (data.result === 'success' && data.rates) {
          setExchangeRates({
            USD: 1,
            ...data.rates,
          })
        } else {
          throw new Error('Invalid API response')
        }
      } catch (err) {
        setError('Unable to fetch exchange rate. Using previous rate.')
        console.error('Exchange rate fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchExchangeRates()
  }, [])

  const exchangeRate = exchangeRates[selectedCurrency] || 1

  const addExpense = (expense) => {
    const expenseCurrency = expense.currency || 'USD'
    const rate = exchangeRates[expenseCurrency] || 1
    const amountInUsd =
      expenseCurrency === 'USD'
        ? expense.amount
        : expense.amount / rate

    const newExpense = {
      id: Date.now(),
      ...expense,
      currency: expenseCurrency,
      amount: expense.amount,
      amountInUsd,
      date: new Date().toLocaleDateString(),
    }
    setExpenses((currentExpenses) => [newExpense, ...currentExpenses])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const totalAmount = expenses.reduce(
    (sum, expense) => sum + (expense.amountInUsd ?? expense.amount),
    0
  )
  const convertedAmount = (totalAmount * exchangeRate).toFixed(2)

  const categoryBreakdown = CATEGORIES.reduce((acc, category) => {
    const sum = expenses
      .filter((expense) => expense.category === category)
      .reduce(
        (catSum, expense) => catSum + (expense.amountInUsd ?? expense.amount),
        0
      )
    if (sum > 0) {
      acc[category] = sum
    }
    return acc
  }, {})

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>💰 Expense Tracker</h1>
        <p>Manage your expenses with real-time currency conversion</p>
      </div>

      {/* Full width total card above all content */}
      <div className={styles.topTotal}>
        <SummaryPanel
          mode="total"
          totalAmount={totalAmount}
          expenseCount={expenses.length}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <ExpenseForm 
            categories={CATEGORIES}
            currencies={CURRENCIES}
            onAddExpense={addExpense} 
          />
        </div>

        <div className={styles.rightPanel}>
          {/* Stack converter and breakdown; their combined height will match the left panel */}
          <div className={styles.rightStack}>
            <CurrencyConverter
              currencies={CURRENCIES}
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              exchangeRate={exchangeRate}
              totalAmount={totalAmount}
              convertedAmount={convertedAmount}
              loading={loading}
              error={error}
            />

            <SummaryPanel
              mode="breakdown"
              totalAmount={totalAmount}
              categoryBreakdown={categoryBreakdown}
            />
          </div>
        </div>
      </div>

      <div className={styles.listSection}>
        <h2>Recent Expenses</h2>
        <ExpenseList 
          expenses={expenses} 
          onDeleteExpense={deleteExpense}
          currencies={CURRENCIES}
          selectedCurrency={selectedCurrency}
          exchangeRate={exchangeRate}
        />
      </div>
    </main>
  )
}
