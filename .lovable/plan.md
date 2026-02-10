

# Hero Section Overhaul — Rich Visual Design

## Problem
The Hero section (and by extension the whole site) is too plain and text-heavy. The reference images show a design pattern with:
- Bold, large heading with an accent-colored keyword
- A pill/badge tag above the heading
- A rich visual element on the right side (not just text pills) — an interactive-looking card/mockup
- Rounded, visually prominent CTA buttons with clear contrast
- Overall feeling of depth through cards, shadows, and layered UI elements

## What Changes

### Hero Section (primary focus)
- Add a **pill badge** above the heading (e.g., "AI-Powered Workflows" with an icon, styled like the teal "HARMONY & TRUST" badge in the reference)
- Make the H1 much bolder with an **accent-colored keyword**: "Automate the **Grunt Work.**" where "Grunt Work." is in primary color
- Simplify the subtitle to one clean line
- Style the **secondary CTA** as an outlined rounded-full button (like "Explore Spaces" in reference) instead of a plain ghost button
- **Right column**: Replace the plain text pills with a **rich visual mockup card** — a simulated dashboard/app UI showing:
  - A card with rounded corners and shadow showing a "CAOS Dashboard" preview
  - Inside: a mini workflow status (document count, reconciliation progress bar, compliance check icon)
  - A floating badge overlay (like "96% Accuracy" or "12 Docs Processed") to create depth
  - This is all built with divs/CSS — no images needed

### Solution Section — Add a visual card on the right
- Convert from centered timeline to a **two-column layout** (like reference image 3)
- Left: heading + description + timeline steps
- Right: A mockup card showing "Your Workflow" with 4 mini stat blocks (Documents, Reconciled, Flagged, Ready) similar to the "Your Ideal Match" card in reference image 3
- Add a floating accent bar at the bottom of the card (like the teal "COMPATIBILITY 96%" bar)

### Feature Grid — Add visual depth
- Add subtle background fill to each card (not just on hover) — light `bg-card` with permanent soft shadow
- This makes them feel like real cards, not floating text

### Differentiation Section — Visual card treatment
- Wrap each side in a proper card with shadow and slight background
- Add a small visual indicator (a red X for traditional, green checkmark for CAOS) to make the comparison more visual

### Early Access Section — Gradient background
- Add a subtle gradient background to the entire section (light primary tint)
- The form card already looks good with shadow

---

## Technical Details

### Files to modify:
1. **`src/components/Hero.tsx`** — Complete redesign of right column with dashboard mockup card; add pill badge; style heading with accent color; update secondary CTA to outlined style
2. **`src/components/SolutionSection.tsx`** — Two-column layout with visual card on right showing workflow stats
3. **`src/components/FeatureGrid.tsx`** — Add permanent `bg-card shadow-md` to cards
4. **`src/components/Differentiation.tsx`** — Add shadow to cards, visual indicators
5. **`src/components/EarlyAccess.tsx`** — Add subtle gradient background to section
6. **`src/index.css`** — Add a `.section-gradient-primary` utility for tinted section backgrounds

### No external images or dependencies needed — all visuals built with Tailwind CSS divs, shadows, and gradients.

