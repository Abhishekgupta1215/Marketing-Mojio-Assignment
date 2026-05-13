import styles from '@/styles/CurrencyConverter.module.css'

export default function CurrencyConverter({
  currencies,
  selectedCurrency,
  onCurrencyChange,
  exchangeRate,
  totalAmount,
  convertedAmount,
  loading,
  error,
}) {
  return (
    <div className={styles.converter}>
      <div className={styles.header}>
        <h3>Currency Converter</h3>
        <span className={styles.badge}>Real-time</span>
      </div>

      <div className={styles.currencySelect}>
        <label htmlFor="currency-select">Convert to:</label>
        <select
          id="currency-select"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={loading}
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.rateDisplay}>
        <div className={styles.rateItem}>
          <span className={styles.rateLabel}>Exchange Rate:</span>
          <span className={styles.rateValue}>
            {loading ? (
              <span className={styles.loading}>Loading...</span>
            ) : (
              `1 USD = ${exchangeRate.toFixed(4)} ${selectedCurrency}`
            )}
          </span>
        </div>
      </div>

      <div className={styles.conversionBox}>
        <div className={styles.conversionField}>
          <div className={styles.conversionLabel}>USD</div>
          <div className={styles.conversionValue}>
            ${totalAmount.toFixed(2)}
          </div>
        </div>
        <div className={styles.conversionArrow}>→</div>
        <div className={styles.conversionField}>
          <div className={styles.conversionLabel}>{selectedCurrency}</div>
          <div className={styles.conversionValue}>
            {loading ? (
              <span className={styles.loading}>...</span>
            ) : (
              convertedAmount
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className={styles.errorMessage}>
          <span>⚠️</span>
          <p>{error}</p>
        </div>
      )}

      <p className={styles.disclaimer}>
        Rates updated in real-time using exchangerate-api.com
      </p>
    </div>
  )
}
