# 💰 Expense Tracker

A modern, responsive personal expense tracker built with React and Next.js. Track your spending across categories and convert amounts to different currencies in real-time.

## ✨ Features

### Core Functionality
- ✅ Add expenses with name, amount, and category
- ✅ Display expenses as beautiful cards with category icons
- ✅ Real-time running total of all expenses
- ✅ Category-wise spending breakdown with visual progress bars
- ✅ Delete expenses individually
- ✅ Live currency conversion using exchangerate-api.com (free tier)
- ✅ **💾 Persistent storage**: Expenses saved to browser (survives page refresh)

### Design & UX
- 📱 Responsive design for desktop (1600px), tablet, and mobile (414px)
- 🎨 Modern gradient UI with color scheme: `#3c1642`, `#086375`, `#1dd3b0`, `#affc41`, `#b2ff9e`
- ✨ Smooth animations and transitions
- 🏗️ Clean, semantic component-based structure
- ⚠️ Error handling for API failures

### Technical Stack
- ⚛️ React 18 with Hooks (useState, useEffect)
- 🚀 Next.js 14 (App Router)
- 🎯 CSS Modules for scoped styling
- 🌐 Public API integration (exchangerate-api.com)
- 📦 No external state management libraries
- 🎭 No UI kit templates

---

## 🎯 Component Documentation

### ExpenseForm (Add Expenses)
- Users input expense details in a clean, validated form
- **Validation**: Name (required, max 50 chars), Amount (required, >0, decimals supported), Category (5 pre-defined options)
- **UX**: Smooth form reset after submission, visual feedback on interactions, mobile-friendly (16px font)
- **Example**: "Coffee" → "$5.50" → "Food" category

### ExpenseList (Display & Manage)
- Shows all expenses in card format with:
  - Category emoji icon (🍔 Food, ✈️ Travel, 📢 Marketing, 💡 Utilities, 📝 Other)
  - Expense name, category badge, date added
  - Amount in USD + converted amount (if currency changed)
  - Delete button (✕)
- **Features**: Colorful category badges, smooth hover effects, empty state message
- **Responsive**: Horizontal layout on desktop, stacked layout on mobile

### SummaryPanel (Analytics)
- **Total Card**: Large gradient display showing total amount and expense count
- **Category Breakdown**: Spending per category with visual progress bars
- **Updates**: Real-time as expenses are added/deleted
- **Styling**: Teal gradients, color-coded categories

### CurrencyConverter
- Real-time currency conversion widget
- Displays converted amounts for all expenses
- Free tier support (1,500 requests/month)

---

## 📁 Project Structure

```
Marketing-Mojio-Assignment/
├── app/
│   ├── layout.js           # Root layout
│   └── page.js             # Main page component
├── components/
│   ├── ExpenseForm.js      # Form to add expenses
│   ├── ExpenseList.js      # Display expenses as cards
│   ├── SummaryPanel.js     # Total and category breakdown
│   └── CurrencyConverter.js # Currency conversion widget
├── styles/
│   ├── globals.css         # Global styles
│   ├── Home.module.css     # Main page styles
│   ├── ExpenseForm.module.css
│   ├── ExpenseList.module.css
│   ├── SummaryPanel.module.css
│   └── CurrencyConverter.module.css
├── utils/
│   └── categoryColors.js   # Category color utilities
├── public/                 # Static assets
├── jsconfig.json           # JavaScript config
├── next.config.js          # Next.js config
└── package.json            # Dependencies
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

1. Clone the repository:
```bash
git clone https://github.com/Abhishekgupta1215/Marketing-Mojio-Assignment.git
cd Marketing-Mojio-Assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

**That's it!** Your expense tracker is running locally.

### Try These Actions
1. **Add an expense**: "Coffee" → "$5.50" → "Food" category
2. **See it update**: Check the summary panel
3. **Change currency**: Select a different currency from dropdown
4. **Delete it**: Click the ✕ button
5. **Refresh page**: Expenses persist! 💾

### Build for Production

```bash
npm run build
npm start
```

---

## 📋 Usage Guide

### Adding an Expense
- Enter expense name (required)
- Enter amount in USD (required)
- Select a category: Food, Travel, Marketing, Utilities, or Other
- Click "Add Expense"

### Viewing & Managing
- All expenses appear in the "Recent Expenses" section
- Each card shows: emoji icon, name, category badge, date, amount, delete button
- Click "✕" to delete an expense
- Summary panel updates automatically

### Currency Conversion
- Select any currency from the dropdown
- All amounts instantly convert using live exchange rates
- Free API (1,500 requests/month) - no configuration needed
- For higher limits, set `NEXT_PUBLIC_EXCHANGE_RATE_API_URL` env variable with your API key

---

## 🔧 Development Commands

```bash
npm run dev      # Start dev server (hot reload)
npm run build    # Create production build
npm start        # Run production server
npm run lint     # Run ESLint
```

---

## ❓ Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server

**API errors?**
- Check internet connection
- Verify: https://open.er-api.com/v6/latest/USD is accessible

---

## 📚 Technical Highlights

- **Zero Setup**: Works out of the box, no environment variables needed for free tier
- **Persistent Storage**: Uses browser localStorage for expense data
- **Responsive**: Optimized for mobile (414px), tablet, and desktop (1600px)
- **Performance**: Lightweight components, no unnecessary dependencies
- **CORS Enabled**: Public API with excellent uptime
- **Accessible**: Semantic HTML, proper form validation



**Happy tracking! 💰**

3. **Track Spending**
   - Total expenses updates automatically in the Summary Panel
   - Category breakdown shows spending distribution
   - Visual progress bars indicate relative spending per category

4. **Convert Currency**
   - Select a currency from the dropdown (USD, EUR, GBP, INR, CAD, AUD)
   - Exchange rate updates in real-time
   - See your total expenses converted to the selected currency

## 🌐 Responsive Design

The app is optimized for:
- **Desktop**: 1600px × 900px
- **Mobile**: 414px × 749px
- **Tablet**: All resolutions between

Layout adapts seamlessly:
- Desktop: 2-column layout (Form + Summary on left/right, List below)
- Mobile: Single column, stacked components

## 🔌 API Integration

### exchangerate-api.com (Currency Exchange)
- **Free API**: No API key required (open.er-api.com endpoint)
- **Endpoint**: `https://open.er-api.com/v6/latest/USD`
- **Features**: Real-time exchange rates for 160+ currencies
- **Reliability**: High uptime, excellent CORS support
- **Rate Limit**: 1,500 requests/month (more than sufficient for personal use)
- **Error Handling**: Graceful fallback if API fails

---

## 📝 Additional Configuration

### Data Persistence (✅ Already Enabled)
- Expenses are saved to browser's localStorage
- Survives page refresh and browser restart
- Automatically loaded on app start
- Data is stored locally (no server transmission)

### Environment Variables
- **Currently**: None required - uses free exchangerate-api.com
- **If adding features later**: Create `.env.local` (see `.env.example`)

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Change Color Scheme
Edit `styles/globals.css`:
```css
:root {
  --primary-dark: #3c1642;
  --primary-teal: #086375;
  --accent-teal: #1dd3b0;
  --accent-yellow: #affc41;
  --light-green: #b2ff9e;
}
```

### Add More Categories
Edit `app/page.js`:
```javascript
const CATEGORIES = ['Food', 'Travel', 'Marketing', 'Utilities', 'Other', 'YourCategory']
```

### Add More Currencies
Edit `app/page.js`:
```javascript
const CURRENCIES = ['USD', 'EUR', 'GBP', 'INR', 'CAD', 'AUD', 'JPY']
```

## 🐛 Troubleshooting

### Exchange rate not updating?
- Check your internet connection
- Verify exchangerate-api.com is accessible: https://open.er-api.com/v6/latest/USD
- API has rate limits, wait a moment before trying again

### Styles not loading?
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server: `npm run dev`
- Check that CSS Modules are properly imported

### Expenses not persisting after refresh?
- This is by design (in-memory storage for this version)
- To add persistence, integrate with:
  - LocalStorage (browser)
  - Firebase Firestore
  - Backend database (MongoDB, PostgreSQL, etc.)

## � Future Enhancements

- [ ] Local storage persistence
- [ ] Monthly/Yearly charts and reports
- [ ] Budget alerts
- [ ] Recurring expenses
- [ ] CSV export
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Backend integration for user accounts

## 👤 Author

**Abhishek Gupta**
- GitHub: [@Abhishekgupta1215](https://github.com/Abhishekgupta1215)

---

**Ready to deploy?** Follow the quick deployment steps at the top of this README!

