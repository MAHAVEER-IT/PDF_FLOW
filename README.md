# PDF Flow

<div align="center">
  <img src="./public/images/logo.svg" alt="PDF Flow Logo" width="200" height="200" />
  
  **Premium file conversion for PDF, DOCX, PPT, XLSX, and images.**
  
  Clean conversions. Zero clutter. A fast, elegant path to perfect PDF exports.
</div>

---

## ✨ Features

- **DOCX to PDF** - Convert Word documents to PDF format
- **PPT to PDF** - Convert PowerPoint presentations to PDF
- **XLSX to PDF** - Convert Excel spreadsheets to PDF
- **Image to PDF** - Convert PNG, JPG, and other image formats to PDF
- **PDF Merge** - Combine multiple PDF files into a single document
- **No Sign-in Required** - Completely free to use, no registration needed
- **Clean UI** - Modern, intuitive interface with a stepper workflow
- **Fast Processing** - Quick file conversions with minimal overhead

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **React:** 19.2.4
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **PDF Manipulation:** [pdf-lib](https://github.com/Hopding/pdf-lib)
- **ESLint:** 9 (Code quality & linting)
- **Build Tool:** Next.js built-in compiler with SWC

---

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd pdf-flow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (if needed):**
   Create a `.env.local` file in the root directory and add any necessary configuration.

---

## 🎯 Getting Started

### Development Mode

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Check code quality:

```bash
npm run lint
```

---

## 📁 Project Structure

```
pdf-flow/
├── app/
│   ├── components/
│   │   └── StepperFlow.js        # Stepper flow component for conversion workflow
│   ├── convert/
│   │   ├── page.js               # Main conversion page
│   │   ├── docx-to-pdf/
│   │   │   └── page.js          # DOCX to PDF conversion
│   │   ├── excel-to-pdf/
│   │   │   └── page.js          # XLSX to PDF conversion
│   │   ├── image-to-pdf/
│   │   │   └── page.js          # Image to PDF conversion
│   │   ├── pdf-merge/
│   │   │   └── page.js          # PDF merge functionality
│   │   └── ppt-to-pdf/
│   │       └── page.js          # PPT to PDF conversion
│   ├── layout.js                 # Root layout with global styles
│   ├── page.js                   # Home/landing page
│   ├── error.js                  # Error page
│   ├── not-found.js              # 404 page
│   └── globals.css               # Global styles
├── public/
│   └── images/                   # Static images and assets
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── eslint.config.mjs             # ESLint configuration
├── package.json                  # Project dependencies
└── README.md                      # Project documentation
```

---

## 🎨 Key Components

### StepperFlow.js
A reusable component that manages the step-by-step workflow for file conversions, providing a user-friendly interface for users to select conversion types and upload files.

### Conversion Pages
Each conversion module (docx-to-pdf, ppt-to-pdf, etc.) contains its own page.js file that handles:
- File upload functionality
- Conversion logic using pdf-lib
- Download of converted files

---

## 📦 Dependencies

### Production
- **next** (^15) - React framework for production
- **react** (19.2.4) - JavaScript library for UI
- **react-dom** (19.2.4) - React DOM rendering
- **pdf-lib** (^1.17.1) - PDF manipulation library

### Development
- **@tailwindcss/postcss** (^4) - Tailwind CSS PostCSS plugin
- **tailwindcss** (^4) - Utility-first CSS framework
- **eslint** (^9) - JavaScript linting tool
- **eslint-config-next** (^15) - ESLint configuration for Next.js
- **babel-plugin-react-compiler** (1.0.0) - React compiler plugin

---

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4 with PostCSS for styling. Custom styles are located in `app/globals.css`.

### Next.js Config
The `next.config.mjs` file contains Next.js configuration options, including file upload size limit handling.

### ESLint
Code quality is maintained using ESLint 9 with Next.js recommended rules.

---

## 🌐 Usage

1. **Navigate to the application** at `http://localhost:3000`
2. **Click "Start a conversion"** on the landing page
3. **Select your conversion type:**
   - DOCX to PDF
   - PPT to PDF
   - XLSX to PDF
   - Image to PDF
   - PDF Merge
4. **Upload your file(s)**
5. **Download the converted PDF**

---

## 🐛 Troubleshooting

- **Port 3000 already in use:** Change the port by running `npm run dev -- -p 3001`
- **Module not found errors:** Run `npm install` to ensure all dependencies are installed
- **Build failures:** Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

---

## 📝 License

[Add your license information here]

---

## 🤝 Contributing

[Add contribution guidelines if applicable]

---

## 📧 Support

For issues, bugs, or feature requests, please [open an issue on the repository/contact support].

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [pdf-lib Documentation](https://pdf-lib.js.org/)

---

**Made with ❤️ by PDF Flow Team**
