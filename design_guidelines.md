# Wazirabad Cutlery & Kitchenware - Design Guidelines

## Design Approach

**Reference-Based Luxury E-commerce**

Drawing inspiration from premium product showcases like luxury watch brands (Rolex, Omega), high-end kitchenware retailers (Williams Sonoma Select), and Grand Wazir's aesthetic. This approach emphasizes craftsmanship, heritage, and product excellence through sophisticated visual hierarchy and refined interactions.

**Core Principles:**
- Luxury through restraint: Let products shine with minimal distraction
- Craftsmanship storytelling: Every element reflects precision and quality
- Premium user experience: Smooth, polished interactions throughout

## Color Palette

**Dark Mode (Primary):**
- Background: 0 0% 8% (rich charcoal)
- Surface: 0 0% 12% (elevated panels)
- Text Primary: 40 40% 92% (warm off-white)
- Text Secondary: 40 15% 65%
- Accent Gold: 45 80% 60% (brushed gold, use sparingly for CTAs and highlights)
- Accent Silver: 0 0% 75% (metallic accents, borders)

**Light Mode:**
- Background: 40 20% 97% (warm white)
- Surface: 0 0% 100%
- Text Primary: 0 0% 15%
- Text Secondary: 0 0% 40%
- Accent Gold: 40 65% 45% (deeper gold for contrast)
- Accent Silver: 0 0% 55%

**Product Card Overlays:** Semi-transparent black (0 0% 0% / 40%) for image overlays and glass-morphism effects on hover states.

## Typography

**Primary Font:** Playfair Display (serif) - for headings, hero text, luxury feel via Google Fonts
**Secondary Font:** Inter (sans-serif) - for body text, UI elements, optimal readability

**Scale:**
- Hero Headlines: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Headings: text-4xl md:text-5xl, font-semibold
- Product Titles: text-2xl, font-medium
- Body Text: text-base md:text-lg, leading-relaxed
- UI Elements: text-sm md:text-base

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24, 32 (p-4, m-8, gap-12, py-16, etc.)

**Container Strategy:**
- Max-width: max-w-7xl for content sections
- Product grids: max-w-screen-2xl for catalog pages
- Text content: max-w-4xl for About/Contact pages
- Full-bleed: w-full for hero sections and category banners

**Grid Patterns:**
- Product Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4, gap-8
- Feature Sections: grid-cols-1 lg:grid-cols-2, gap-16
- Testimonials: grid-cols-1 md:grid-cols-3, gap-8

## Component Library

**Navigation:**
- Sticky header with glass-morphism effect (backdrop-blur-lg)
- Logo left, navigation center, dark/light toggle and cart right
- Smooth scroll behavior with section highlighting
- Mobile: Slide-in drawer with elegant transitions

**Hero Section (Home):**
- Full viewport height with background video/parallax image of knife craftsmanship
- Centered content with large Playfair headline
- Subtle scroll indicator at bottom
- Gradient overlay (black to transparent) for text legibility

**Product Cards:**
- High-quality product images with 4:3 aspect ratio
- Hover: Scale image slightly (1.05), reveal quick-view button with gold accent
- Card surface slightly elevated on hover
- Price in gold accent color
- "Add to Collection" CTA button

**Modals:**
- Quick-view: Large product image left, details right on desktop
- Full-screen on mobile with smooth slide-up animation
- Close button top-right with backdrop click-to-close
- Glass-morphism background overlay

**Forms:**
- Floating labels with smooth animation
- Input borders: subtle silver in rest state, gold on focus
- Submit buttons: Gold background with black text, hover darkens
- Validation: Inline with smooth fade-in

**Testimonials Carousel:**
- Card-based layout with customer photo, quote, and name
- Auto-rotate every 5 seconds with manual navigation
- Progress indicators as thin gold lines

**Footer:**
- Three-column layout: Brand info left, Quick Links center, Contact right
- Social media icons in silver with gold hover
- Subtle top border with gradient from silver to gold

## Images

**Critical Image Placements:**

1. **Home Hero:** Large background video or high-resolution parallax image showing knife forging process, steel close-ups, or artisan craftsmanship (1920x1080 minimum). Dark overlay for text contrast.

2. **Featured Products:** Professional product photography on neutral backgrounds (white/light gray for light mode, dark charcoal for dark mode). Images should show knife details, blade patterns, and handle craftsmanship (800x600px minimum per product).

3. **About Page Timeline:** Historical photos of Wazirabad knife-making, factory scenes, artisan portraits (600x400px each milestone).

4. **Product Category Banners:** Hero-style images for each category page (Cutlery, Knives, Kitchenware, Sets) showing category highlights (1600x500px).

5. **Contact Page:** Embedded Google Map of Wazirabad plus background image of workshop/storefront as subtle overlay.

6. **Testimonial Section:** Customer photos (circular crops, 100x100px) with authentic, diverse representations.

## Animations

**Framer Motion Implementation:**
- Page transitions: Smooth fade-in with slight upward motion (y: 20 to 0)
- Product cards: Stagger children animation on scroll-into-view
- Hero text: Letter-by-letter reveal on page load
- Timeline (About): Progress line draws as user scrolls, milestones fade in sequentially
- Loading screen: Logo scales in with elegant fade, then transitions to page
- Scroll-triggered: Parallax effects on hero images, fade-in on section entry

**Performance Priority:** Use will-change sparingly, prefer transform and opacity properties, lazy-load animations below the fold.

## Dark/Light Mode

Toggle positioned in header navigation. Smooth theme transition using Tailwind's dark: modifier with 300ms ease-in-out on background and text colors. Icons switch: Moon for light mode, Sun for dark mode. Default to dark mode for luxury aesthetic.

## Accessibility

- Maintain 4.5:1 contrast ratio minimum for all text
- Focus states: 2px gold outline with offset
- Keyboard navigation fully supported across all interactive elements
- Alt text for all product images describing knife type, material, and key features
- ARIA labels for icon-only buttons and navigation elements

This comprehensive design framework creates a sophisticated, luxury e-commerce experience that honors Wazirabad's knife-making heritage while providing modern, performant user interactions.