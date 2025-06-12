# 🚀 Sample React App - Modern Business Website

A comprehensive React TypeScript application built with Vite, featuring a modern business website with multiple layouts (Frontend, Authentication, Admin). This project showcases best practices in React development with shadcn/ui components, React Router 7, and Tailwind CSS.

## ✨ Features

### 🎨 **Frontend Website**
- **Modern Landing Page** - Hero section with gradient backgrounds and animations
- **About Us Page** - Company story, values, and team showcase
- **Services Page** - Comprehensive service offerings with interactive cards
- **Contact Page** - Contact form with validation and business information
- **Responsive Design** - Mobile-first approach with beautiful UI/UX

### 🔐 **Authentication System**
- Login/Register forms with validation
- Forgot password functionality
- Protected routes and auth guards

### 👨‍💼 **Admin Dashboard**
- Dashboard with analytics and metrics
- Product management (CRUD operations)
- Categories management
- Stock management
- Reports and analytics
- User profile management
- System settings

### 🛠 **Technical Features**
- **React 19** with TypeScript
- **React Router 7** for SPA navigation
- **shadcn/ui** components with Radix UI
- **Tailwind CSS 4** for styling
- **Form handling** with React Hook Form
- **State management** with React hooks
- **Responsive design** across all devices
- **Modern build tools** with Vite

## 📂 Project Structure

```
sample-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── admin/          # Admin-specific components
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── front/          # Frontend components
│   │   │   ├── Footer.tsx  # Modern footer with social links
│   │   │   └── Navbar.tsx  # Responsive navigation
│   │   └── ui/             # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dropdown-menu.tsx
│   │       └── navigation-menu.tsx
│   ├── layouts/            # Layout wrappers
│   │   ├── AdminLayout.tsx # Admin dashboard layout
│   │   ├── AuthLayout.tsx  # Authentication layout
│   │   └── FrontLayout.tsx # Frontend website layout
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page with hero section
│   │   ├── About.tsx       # About us with company story
│   │   ├── Service.tsx     # Services showcase
│   │   ├── Contact.tsx     # Contact form and info
│   │   ├── admin/          # Admin pages
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Categories.tsx
│   │   │   ├── Stock.tsx
│   │   │   ├── Report.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── Setting.tsx
│   │   └── auth/           # Authentication pages
│   │       ├── Login.tsx
│   │       ├── Register.tsx
│   │       └── ForgotPassword.tsx
│   ├── routes/             # Router configuration
│   │   └── index.tsx       # All route definitions
│   ├── services/           # API services
│   │   └── apiAuth.ts      # Authentication API
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Helper functions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── components.json         # shadcn/ui configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite build configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sample-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🛠 Tech Stack

### **Frontend Framework**
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server

### **Styling & UI**
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful SVG icons

### **Routing & State**
- **React Router 7** - Client-side routing
- **React Hook Form** - Form handling and validation
- **React Hooks** - State management

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite** - Build tool and dev server

## 📱 Features Breakdown

### **Frontend Website**
- **Hero Section** - Eye-catching landing with gradients and stats
- **Features Grid** - Interactive cards with hover effects
- **About Section** - Company story with timeline
- **Services** - Detailed service offerings with process flow
- **Contact Form** - Functional contact form with validation
- **Responsive Navigation** - Mobile-friendly navbar with dropdowns

### **Admin Dashboard**
- **Analytics Dashboard** - Key metrics and charts
- **CRUD Operations** - Full product and category management
- **Stock Management** - Inventory tracking
- **Reporting** - Data insights and analytics
- **User Management** - Profile and settings

### **Authentication**
- **Login/Register** - Secure user authentication
- **Password Recovery** - Forgot password functionality
- **Route Protection** - Auth guards for protected routes

## 🎨 Design System

### **Color Themes**
- **Home** - Blue to Purple gradient
- **About** - Indigo to Purple gradient  
- **Services** - Emerald to Teal gradient
- **Contact** - Rose to Pink gradient

### **Components**
- **Cards** - Consistent card design with hover effects
- **Buttons** - Various button variants and sizes
- **Forms** - Styled form inputs with validation
- **Navigation** - Responsive navigation components

## 📦 Dependencies

### **Production Dependencies**
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router": "^7.6.2",
  "react-hook-form": "^7.57.0",
  "@radix-ui/react-*": "Latest",
  "tailwindcss": "^4.1.8",
  "axios": "^1.9.0",
  "lucide-react": "^0.514.0"
}
```

### **Development Dependencies**
```json
{
  "@vitejs/plugin-react": "^4.4.1",
  "typescript": "~5.8.3",
  "eslint": "^9.25.0",
  "vite": "^6.3.5"
}
```

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Routes

### **Frontend Routes**
- `/` - Home page
- `/about` - About us page
- `/service` - Services page
- `/contact` - Contact page

### **Authentication Routes**
- `/auth/login` - Login page
- `/auth/register` - Register page
- `/auth/forgot-password` - Password recovery

### **Admin Routes**
- `/admin/dashboard` - Admin dashboard
- `/admin/products` - Product management
- `/admin/categories` - Category management
- `/admin/stock` - Stock management
- `/admin/reports` - Reports and analytics
- `/admin/profile` - User profile
- `/admin/settings` - System settings

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful components
- **Tailwind CSS** for utility-first styling
- **React Router** for routing solution
- **Vite** for fast development experience
- **Radix UI** for accessible primitives

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
