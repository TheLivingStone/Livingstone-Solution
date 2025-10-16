# The LivingStone Solution - Portfolio

A modern, premium Next.js portfolio website for LivingStoneSolution Technologies - showcasing web development, app development, and AI automation projects with stunning animations and interactive components.

## 🚀 Features

### Interactive Project Showcase
- **Categorized Project Sliders** - Three distinct sections for Web Development, App Development, and AI Automation
- **Smooth Animations** - Elastic transitions with fade-in effects
- **Hover Effects** - Cards lift with enhanced shadows and content reveals
- **Auto-play Carousel** - Pauses on hover for better user experience
- **Responsive Grid** - Adapts from 1 to 3 columns based on screen size

### Modern UI Components
- **Full-Image Cards** - Text overlays with glassmorphism effects
- **Team Modal** - Detailed team member profiles with contact information
- **Testimonial Slider** - Client feedback carousel
- **Partners Section** - Infinite scrolling partner logos
- **Blog Integration** - Latest posts with markdown support

### Technical Highlights
- Built with **Next.js** and **React**
- **Swiper.js** for smooth carousels
- **SCSS** for advanced styling
- **Gray-matter** for markdown frontmatter parsing
- **Dynamic routing** for projects and blog posts
- **Server-side rendering** for optimal performance

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (TeamModal, etc.)
│   │   ├── sections/        # Page sections (Hero, About, Services, Team)
│   │   └── sliders/         # Carousel components
│   ├── data/
│   │   ├── projects/        # Project markdown files
│   │   ├── posts/           # Blog post markdown files
│   │   └── sections/        # JSON data for sections
│   ├── pages/               # Next.js pages
│   ├── styles/              # SCSS stylesheets
│   └── lib/                 # Utility functions
├── public/
│   ├── img/                 # Images and assets
│   └── css/                 # Compiled CSS
└── README.md
```

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd livingstone-solution

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Content Management

### Adding Projects

Create a new markdown file in `src/data/projects/`:

```markdown
---
title: Project Name
image: /img/works/project.jpg
category: Web Developmment  # or "App Development" or "AI Automation"
date: january 15 2024

layout: "one"

introTitle: "Project <span class=\"mil-thin\">Name</span>"
fullImage: /img/works/project-full.jpg
details:
    - label: "Client:"
      value: "Client Name"
    - label: "Year:"
      value: "2024"
    - label: "Duration"
      value: "30 Days"

description:
    enabled: 1
    title: "About"
    content: "<p>Project description here...</p>"
---
```

### Adding Team Members

Edit `src/data/sections/team.json`:

```json
{
  "name": "Team Member Name",
  "role": "Position",
  "image": "/img/faces/photo.jpg",
  "bio": "Biography text",
  "contact": {
    "location": "City, Country",
    "email": "email@example.com",
    "phone": "+1234567890"
  },
  "social": [
    {
      "link": "https://linkedin.com/in/username",
      "icon": "fab fa-linkedin",
      "title": "LinkedIn"
    }
  ]
}
```

### Adding Blog Posts

Create markdown files in `src/data/posts/`:

```markdown
---
title: 'Blog Post Title'
date: '2024-01-15'
image: "/img/blog/post.jpg"
category:
    - Category Name
short: Brief description of the post

author:
    name: "Author Name"
---

Post content here...
```

## 🎨 Customization

### Colors

Edit accent colors in `src/components/sliders/ModernCategorizedProjects.jsx`:

```javascript
const categories = [
    {
        name: 'Web Development',
        searchTerm: 'web',
        bgColor: '#f8f9fa',
        accentColor: '#667eea'  // Change this
    },
    // ...
];
```

### Styling

Main styles are in `src/styles/scss/`:
- `_components.scss` - Component styles
- `_variables.scss` - Colors, fonts, and global variables

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📦 Key Dependencies

- **next** - React framework
- **react** & **react-dom** - UI library
- **swiper** - Modern carousel library
- **gray-matter** - Markdown frontmatter parser
- **remark** - Markdown processor
- **sass** - CSS preprocessor

## 🌟 Features Breakdown

### Project Slider
- Auto-categorizes projects by type
- Smooth elastic animations
- Hover effects with shadow enhancement
- Other cards fade and blur on hover
- Responsive navigation arrows
- Pagination dots with active states

### Team Section
- Grid layout with hover effects
- Modal popup with full details
- Contact information display
- Social media links
- Responsive design

### Services Section
- Four main service categories
- Icon-based cards
- Hover animations
- Links to detailed service pages

## 📄 License

© 2024 LivingStoneSolution Technologies. All rights reserved.

## 🤝 Contact

**LivingStoneSolution**
- Website: [thelivingstonesolution.com](https://thelivingstonesolution.com)
- Location: Washington, D.C., USA

---

Built with ❤️ by LivingStoneSolution Technologies
