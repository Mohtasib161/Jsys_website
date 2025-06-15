# JSYS Tech - React Client App

A modern, multi-language website for JSYS Tech built with React 19, TypeScript, and Tailwind CSS. Optimized for static hosting and deployment on shared hosting platforms.

## 🚀 Features

- **React 19** - Latest React version with modern features
- **TypeScript** - Type-safe development
- **Multi-language Support** - English and Japanese with react-i18next
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Static Hosting Ready** - Deployable on any static hosting service
- **Contact Form** - Integrated with Web3Forms API
- **Animations** - AOS and Framer Motion for smooth interactions
- **Fast Loading** - Optimized bundle with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Routing**: React Router v6
- **Internationalization**: react-i18next
- **Build Tool**: Vite
- **Animations**: Framer Motion, AOS
- **Forms**: Web3Forms API
- **SEO**: React Helmet Async

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-client-app
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

## 🚀 Deployment

### Static Hosting (Recommended)

This app is optimized for static hosting. You can deploy to:

- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Import project and deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Shared Hosting**: Upload the `dist` folder to your web root

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Shared Hosting Setup

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web root
3. Ensure `.htaccess` is uploaded for proper routing
4. Configure your domain to point to the uploaded files

## 🌐 Supported Languages

- **English** (`/en`) - Default language
- **Japanese** (`/ja`) - Full translation available

The app automatically detects the user's preferred language and provides language switching functionality.

## 📧 Contact Form

The contact form uses Web3Forms API for serverless form handling. To configure:

1. Sign up at [Web3Forms](https://web3forms.com)
2. Get your API key
3. Update `VITE_WEB3FORMS_API_KEY` in your environment file

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'primary': '#0066CC',
  'secondary': '#FF6B6B',
  'accent': '#4ECDC4',
  // Add your custom colors
}
```

### Content
Update translations in:
- `src/locales/en.json` - English content
- `src/locales/ja.json` - Japanese content

### Styling
- Global styles: `src/styles/globals.css`
- Component styles: Tailwind classes in component files

## 📁 Project Structure

```
src/
├── components/         # React components
├── hooks/             # Custom React hooks
├── i18n/              # Internationalization config
├── locales/           # Translation files
├── pages/             # Page components
├── styles/            # Global styles
└── utils/             # Utility functions
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking

## 📝 License

© 2024 JSYS Tech. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support, email contact@jsystech.com or visit our website.