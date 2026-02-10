

# Complete CAOS Website Rebuild

Scrapping the current multi-section layout and rebuilding from scratch to match the reference design language: bold centered headings with purple accent keywords, alternating two-column feature showcases with CSS mockup cards, clean testimonial grid, and FAQ grid.

## Site Structure (Top to Bottom)

1. **Navbar** -- Logo left, nav links center, dark "Join Early Access" CTA button right (rounded-full, bg-foreground)
2. **Hero** -- Centered layout: small pill badge up top, massive bold heading "Automate the Grunt Work." with "Grunt Work." in primary purple, one-line subtitle, trust badges row (300+ Firms Analyzed | 15+ Partner Firms | ICAI Insights), single dark CTA button
3. **How It Works** -- Section heading "How CAOS Works" with "CAOS" in purple. 3 alternating two-column feature blocks, each with a CSS mockup card on one side and icon + heading + description on the other:
   - Block 1 (mockup right): "Unified Document Intake" -- CSS card showing a document list with checkboxes, bill numbers, vendor names
   - Block 2 (mockup left): "Intelligent Reconciliation" -- CSS card showing invoice-ledger matching table with status badges  
   - Block 3 (mockup right): "Closed-Loop Tracking" -- CSS card showing workflow pipeline with status indicators
4. **Features Grid** -- Heading "Everything You Need" with "Need" in purple. 2x5 or 3-col grid of the 10 features, each as a clean card with icon, bold title, short description
5. **Testimonials** -- Heading "Real Results, Real Success" with "Real Success" in purple. 3-column card grid with colored top border accent, quote text, author name + firm
6. **FAQ** -- Heading "Frequently Asked Questions" with "Questions" in purple. 3-column grid layout (not accordion), bold question + answer text below
7. **Early Access CTA** -- Full section with subtle lavender background, heading, form card
8. **Footer** -- Clean minimal footer

## Design System

- **Headings**: text-5xl to text-7xl, font-black, tracking-tight
- **Accent keyword**: text-primary (purple)
- **Backgrounds**: Alternating between white and a subtle lavender (hsl primary at 3-5% opacity)
- **Cards**: bg-white, rounded-2xl, border border-border/30, shadow-sm
- **Mockup cards**: Larger rounded-2xl cards with shadow-xl, containing simulated UI elements (tables, checkboxes, progress bars, status badges)
- **CTA buttons**: bg-foreground text-background (dark/black), rounded-full, px-8

## Files to Create/Modify

| Action | File | Purpose |
|--------|------|---------|
| Rewrite | `src/pages/Index.tsx` | New section order |
| Rewrite | `src/components/Navbar.tsx` | Centered links, dark CTA |
| Rewrite | `src/components/Hero.tsx` | Centered hero, massive heading, trust row |
| Create | `src/components/HowItWorks.tsx` | 3 alternating feature blocks with CSS mockups |
| Rewrite | `src/components/FeatureGrid.tsx` | 10 features from content pack |
| Rewrite | `src/components/Testimonials.tsx` | 6 reviews from content pack, 3-col grid |
| Create | `src/components/FAQ.tsx` | 8 FAQs from content pack, grid layout |
| Rewrite | `src/components/EarlyAccess.tsx` | Lavender bg CTA section |
| Rewrite | `src/components/Footer.tsx` | Clean minimal |
| Update | `src/index.css` | Add lavender section bg utility |
| Delete (unused) | `SocialProof.tsx`, `ProblemSection.tsx`, `SolutionSection.tsx`, `Differentiation.tsx`, `CaseStudies.tsx`, `ValueOutcomes.tsx`, `Vision.tsx` | No longer needed |

## Technical Details

### CSS Mockup Cards (HowItWorks)
Built entirely with Tailwind divs -- no images. Each mockup simulates a product UI:
- **Document Intake mockup**: A card with rows showing checkbox + bill number + vendor name, styled like a data table
- **Reconciliation mockup**: A card with tab headers ("Needs Review" / "Accounting Ready"), search bar, table rows with To/From, Account, Amount, Status columns
- **Tracking mockup**: A card showing workflow steps with colored status dots (Detected, Requested, Received, Processed, Finalized)

### Alternating Layout Pattern
Odd blocks: text left, mockup right. Even blocks: mockup left, text right. Each block has a small colored icon circle above the heading (like reference images).

### Lavender Section Backgrounds
Add `.section-lavender` utility: `background-color: hsl(var(--primary) / 0.04)` for alternating sections.

### Content
All copy comes directly from the user's content pack -- 10 features, 6 reviews, 8 FAQs, hero feature description. No invented content.

