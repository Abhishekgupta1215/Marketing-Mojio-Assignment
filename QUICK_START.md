# 🚀 Quick Start Guide

Get your Expense Tracker running in 2 minutes!

## Step 1: Install Dependencies

### Windows
```bash
setup.bat
```

### Mac/Linux
```bash
bash setup.sh
```

### Or manually
```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

## Step 3: Open in Browser

Visit: **[http://localhost:3000](http://localhost:3000)**

---

## ✨ You're Ready!

Your Expense Tracker is running locally. Try:

1. **Add an expense**: "Coffee" → "$5.50" → "Food"
2. **See it update**: Check the summary panel
3. **Change currency**: Select "EUR" from dropdown
4. **Delete it**: Click the ✕ button
5. **Refresh page**: Expenses are saved! 💾

---

## 🌐 Deploy to Vercel (5 Minutes)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" → Select this repo
4. Click "Deploy"
5. ✅ Live at `yourproject.vercel.app`

For detailed deployment options, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📚 Learn More

- [README.md](README.md) - Complete project overview
- [FEATURES.md](FEATURES.md) - Component documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guides

---

## ❓ Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Styles not loading?
- Clear browser cache: Ctrl+Shift+Del (or Cmd+Shift+Del)
- Restart dev server: Stop and run `npm run dev` again

### API errors?
- Check internet connection
- Verify you can access: https://open.er-api.com/v6/latest/USD

---

**Happy tracking! 💰**
