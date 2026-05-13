# 💰 Expense Tracker

A modern, responsive personal expense tracker built with React and Next.js. Track your spending across categories and convert amounts to different currencies in real-time.

**⚡ [Quick Start →](QUICK_START.md) (Get running in 2 minutes)**

## Features

✨ **Core Functionality**
- Add expenses with name, amount, and category
- Display expenses as beautiful cards with category icons
- Real-time running total of all expenses
- Category-wise spending breakdown with visual progress bars
- Delete expenses individually
- Live currency conversion using exchangerate-api.com (free tier)
- **💾 Persistent storage**: Expenses saved to browser (survives page refresh)

🎨 **Design & UX**
- Responsive design for desktop (1600px), tablet, and mobile (414px)
- Modern gradient UI with color scheme: `#3c1642`, `#086375`, `#1dd3b0`, `#affc41`, `#b2ff9e`
- Smooth animations and transitions
- Clean, semantic component-based structure
- Error handling for API failures

⚙️ **Technical Stack**
- React 18 with Hooks (useState, useEffect)
- Next.js 14 (App Router)
- CSS Modules for scoped styling
- Public API integration (exchangerate-api.com)
- No external state management libraries
- No UI kit templates

## 📁 Project Structure

```
expense-tracker/
├── app/
│   ├── layout.js           # Root layout
│   ├── page.js             # Main page component
├── components/
│   ├── ExpenseForm.js      # Form to add expenses
│   ├── ExpenseList.js      # Display expenses as cards
│   ├── SummaryPanel.js     # Total and category breakdown
│   ├── CurrencyConverter.js # Currency conversion widget
├── styles/
│   ├── globals.css         # Global styles
│   ├── Home.module.css     # Main page styles
│   ├── ExpenseForm.module.css
│   ├── ExpenseList.module.css
│   ├── SummaryPanel.module.css
│   ├── CurrencyConverter.module.css
├── public/                 # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhishekgupta1215/Marketing-Mojio-Assignment.git
cd Marketing-Mojio-Assignment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📋 Usage

1. **Add an Expense**
   - Enter expense name (required)
   - Enter amount in USD (required)
   - Select a category (Food, Travel, Marketing, Utilities, Other)
   - Click "Add Expense"

2. **View Expenses**
   - All expenses appear in the "Recent Expenses" section
   - Each card shows name, category, date, and amount
   - Click the "✕" button to delete an expense

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

## 📝 Configuration for Deployment

### ⚡ Quick Deployment to Vercel (Recommended - 5 Minutes)

**This is the easiest way to deploy:**

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial Expense Tracker"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select this repository
   - Click "Deploy"
   - ✅ Done! Your site is live at `yourproject.vercel.app`

3. **That's it!**
   - No configuration needed
   - Auto-deploys on every push to main
   - Free SSL/HTTPS
   - Lightning-fast performance

**For detailed deployment options (GitHub Pages, Netlify, Docker, etc.), see [DEPLOYMENT.md](DEPLOYMENT.md)**

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

### 1. **GitHub Repository Details**
   - ✅ Make sure your repository is **public** for GitHub Pages
   - If deploying to Vercel, it can be public or private

### 2. **Deployment Options**
   - **Recommended**: Vercel (steps above)
   - **Alternative**: See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages, Netlify, Docker, etc.

## 🔐 Security Considerations

- No sensitive data stored locally (uses sessionStorage/localStorage if needed in future)
- API calls use public endpoints without authentication
- Input validation on all forms
- XSS protection through React's built-in escaping

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

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abhishek Gupta**
- GitHub: [@Abhishekgupta1215](https://github.com/Abhishekgupta1215)

---

**Ready to deploy?** Follow the quick deployment steps at the top of this README!

