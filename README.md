# 💍 Wedding Invitation Website

A beautiful, fully responsive wedding invitation website built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Hero Section** with live countdown timer
- **Love Story Timeline** with animated reveals
- **Wedding Programs** with detailed event cards
- **Photo Gallery** with lightbox functionality
- **RSVP Form** with validation
- **Responsive Design** for all devices
- **Smooth Animations** using Framer Motion
- **Romantic Color Palette** (cream, gold, blush pink, maroon)
- **Modern Typography** with Google Fonts

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd wedding
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Sections

### 1. Hero Section

- Couple names with elegant typography
- Live countdown timer to wedding date
- Call-to-action buttons
- Animated floating hearts
- Scroll indicator

### 2. Love Story Timeline

- Beautiful timeline layout
- Animated reveals on scroll
- Photo placeholders for memories
- Responsive design

### 3. Wedding Programs

- 9 detailed event cards:
  - 🌼 Lagan
  - 🙏 Mataji Pujan
  - 💛 Haldi Ceremony
  - 🎶 DJ Night
  - 🎉 Mosara
  - 🍽 Shadi Khana
  - 🌺 Bandoli
  - 🐎 Barat
  - 🎊 Phera
- Each card includes date, time, location, and description
- "Get Directions" functionality
- Mobile timeline view

### 4. Photo Gallery

- Filter by category (All, Engagement, Pre-Wedding, Family)
- Lightbox modal with navigation
- Hover effects and animations
- Responsive grid layout

### 5. RSVP Form

- Form validation
- Attendance selection
- Guest count
- Contact information
- Special message field
- Success confirmation

### 6. Footer

- Contact information
- Wedding details summary
- Thank you message

## 🎨 Design System

### Colors

- **Cream**: #faf7f0 (Primary background)
- **Gold**: #d4af37 (Accent color)
- **Rose**: #f4c2c2 (Secondary accent)
- **Blush**: #ffc0cb (Highlights)
- **Maroon**: #800020 (Text accent)

### Typography

- **Primary**: Inter (body text)
- **Script**: Dancing Script (headings)
- **Elegant**: Playfair Display (titles)

### Components

- Reusable Button component with variants
- Card component with hover effects
- Form inputs with validation states
- Animated sections with Framer Motion

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Google Fonts

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── LoveStorySection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── RSVPSection.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
├── data/
│   └── wedding.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

## 🎯 Customization

### Wedding Data

Edit `src/data/wedding.ts` to customize:

- Couple names
- Wedding date
- Event details
- Timeline events
- Gallery images

### Styling

- Colors: Update CSS variables in `globals.css`
- Fonts: Modify font imports in `layout.tsx`
- Components: Customize in respective component files

### Content

- Update event descriptions and locations
- Add real photos to the gallery
- Modify love story timeline
- Customize RSVP form fields

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 🔧 Environment Setup

If you encounter Node.js version issues:

1. Install Node.js 20+ from [nodejs.org](https://nodejs.org)
2. Or use nvm:

```bash
nvm install 20
nvm use 20
```

## 📝 RSVP Integration

To integrate with a backend service:

1. Replace the mock API call in `RSVPSection.tsx`
2. Add your endpoint URL
3. Configure form submission handling

Example integrations:

- Google Sheets API
- Airtable
- Custom backend
- Netlify Forms

## 🎨 Adding Photos

1. Add images to `public/images/` directory
2. Update image paths in `src/data/wedding.ts`
3. Optimize images for web (WebP format recommended)

## 📞 Support

For customization help or questions:

- Review the component documentation
- Check the data structure in `wedding.ts`
- Modify styles in component files

## 📄 License

This project is created for wedding invitation purposes. Feel free to customize and use for your special day!

---

Made with ❤️ for Sunil & Nisha's Wedding
