# 🎯 PDF Flow Application

<div align="center">

![PDF Flow](public/images/pdf-flow-icon.png)

**A modern, intuitive platform for converting and managing documents with ease**

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## ✨ Features

PDF Flow offers a comprehensive suite of document conversion and management tools:

<div align="center">

### Document Conversion

| ![DOCX to PDF](public/images/docx-icon.png) | ![Excel to PDF](public/images/excel-icon.png) | ![PPT to PDF](public/images/ppt-icon.png) | ![Image to PDF](public/images/png-icon.png) |
|:---:|:---:|:---:|:---:|
| **Word Documents** | **Spreadsheets** | **Presentations** | **Images** |
| Convert DOCX files to PDF | Transform Excel sheets to PDF | Convert PowerPoint slides | Convert images to PDF |

</div>

### Core Capabilities

- 📄 **Multi-Format Conversion** - Convert DOCX, Excel, PPT, and images to PDF
- 🔗 **PDF Merging** - Combine multiple PDF files into a single document
- 🚀 **Fast Processing** - Powered by Gotenberg service for reliable conversions
- 💻 **User-Friendly Interface** - Intuitive step-by-step workflow
- 🔄 **Batch Operations** - Handle multiple documents efficiently
- 📦 **API Support** - RESTful endpoints for programmatic access

---

## 🏗️ Project Structure

```
pdf-flow/
├── app/
│   ├── api/
│   │   ├── convert/          # Document conversion endpoints
│   │   └── merge/            # PDF merging endpoints
│   ├── components/
│   │   └── StepperFlow.js    # Main workflow component
│   ├── convert/              # Conversion pages
│   │   ├── docx-to-pdf/
│   │   ├── excel-to-pdf/
│   │   ├── image-to-pdf/
│   │   ├── pdf-merge/
│   │   └── ppt-to-pdf/
│   ├── layout.js
│   ├── page.js               # Home page
│   └── globals.css
├── public/
│   └── images/               # UI icons and assets
├── gotenberg-service/        # Gotenberg Docker configuration
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn**
- **Docker** (for Gotenberg service)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pdf-flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Gotenberg service** (in a separate terminal)
   ```bash
   cd gotenberg-service
   docker build -t gotenberg-service .
   docker run -p 3000:3000 gotenberg-service
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Tech Stack

### Frontend
- **Next.js 15** - React-based framework with built-in optimization
- **React 19** - Modern UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **PDF-Lib** - PDF manipulation library

### Backend Services
- **Gotenberg** - Docker-based document conversion service
- **Node.js API Routes** - RESTful endpoints

### Development Tools
- **ESLint 9** - Code quality and style
- **Babel React Compiler** - Optimized React compilation

---

## 🎨 Usage

### Converting Documents

1. **Select Conversion Type** - Choose from available formats
2. **Upload File** - Submit your document
3. **Configure Options** - Set conversion parameters if needed
4. **Download Result** - Get your converted PDF

### Merging PDFs

1. **Navigate to PDF Merge** - Go to the merge section
2. **Upload Multiple PDFs** - Select files to combine
3. **Arrange Order** - Customize the merge sequence
4. **Download Merged File** - Get the final combined PDF

---

## 🔌 API Endpoints

### Convert Document
```http
POST /api/convert
Content-Type: multipart/form-data

{
  "file": <file>,
  "format": "docx|excel|ppt|image"
}
```

### Merge PDFs
```http
POST /api/merge
Content-Type: multipart/form-data

{
  "files": [<file1>, <file2>, ...]
}
```

---

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## 🤝 Contributing

We welcome contributions! Please feel free to:

- Report bugs by opening an issue
- Suggest new features
- Submit pull requests with improvements
- Improve documentation

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🆘 Troubleshooting

### Gotenberg Service Not Connecting
- Ensure Docker is running
- Check port 3000 availability
- Verify Gotenberg container logs

### Conversion Failures
- Verify file format is supported
- Check file size limits
- Review browser console for errors

### Performance Issues
- Clear browser cache
- Restart development server
- Check system resources

---

## 📞 Support

For questions, issues, or suggestions:
- Open an issue on the repository
- Check existing documentation
- Review the project's AGENTS.md for advanced configuration

---

<div align="center">

**Made with ❤️ for seamless document management**

[⬆ Back to Top](#-pdf-flow-application)

</div>
