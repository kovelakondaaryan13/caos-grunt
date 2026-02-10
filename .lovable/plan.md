

# Enhancements: Animated Counters, Background Textures, Testimonial Cards, and Button Routing Fix

## 1. Animated Metric Counters (ValueOutcomes)

Create a custom `useCountUp` hook that animates numbers from 0 to their target value when scrolled into view.

- "70%" will animate from 0 to 70 with a "%" suffix
- "Improved", "Reduced", "Scalable" are text values -- these will fade in with a typewriter-like feel instead of counting
- Animation duration: ~1.5 seconds with an ease-out curve
- Triggered by the existing Intersection Observer visibility flag

**Files:** New hook `src/hooks/useCountUp.ts`, update `src/components/ValueOutcomes.tsx`

---

## 2. Subtle Background Textures

Add a CSS-based dot grid pattern to alternating sections (using `radial-gradient` for tiny dots) and a subtle noise overlay using a CSS pattern. No external images needed.

- `.section-gradient` gets an additional dot-grid overlay
- New `.section-dots` utility class for sections that want the pattern
- Applied to: ProblemSection, FeatureGrid, CaseStudies, and ValueOutcomes (the sections that already use `section-gradient`)

**File:** `src/index.css`

---

## 3. Testimonial Cards with Avatars

Replace the single-quote carousel with a grid of 3 visible testimonial cards, each with:
- A colored avatar circle with initials (no real photos needed)
- The quote text
- Author name and firm
- Soft shadow, rounded-2xl, subtle hover lift

Add 2 more testimonials (total 5), show 3 at a time on desktop, stack on mobile.

**File:** `src/components/Testimonials.tsx`

---

## 4. Button Routing Fix

Current nav links map to these anchors:
- Home -> `#home` (exists on Hero)
- About -> `#solution` (exists on SolutionSection)
- Proof of Work -> `#features` (exists on FeatureGrid)
- Case Studies -> `#case-studies` (exists on CaseStudies)
- Contact -> `#early-access` (exists on EarlyAccess)

All section IDs are correctly set and the `handleClick` uses `scrollIntoView`. The issue is likely that `scrollIntoView` on the Hero section (`#home`) doesn't scroll because it's already at top, and the "See How It Works" button targets `#solution` which also exists.

The actual fix: ensure the `scrollIntoView` calls account for the fixed navbar height (64px) by using `scroll-margin-top` on each section, so content isn't hidden behind the sticky nav.

Additionally, the Footer's "Join Early Access" button and CaseStudies' "Apply for Early Access" button both target `#early-access` -- these are correct but also need the scroll margin fix.

**Files:** `src/index.css` (add `scroll-margin-top` to sections), verify all section `id` attributes

---

## Technical Summary

| Change | Files |
|---|---|
| Count-up animation hook | New: `src/hooks/useCountUp.ts` |
| Animated metrics | `src/components/ValueOutcomes.tsx` |
| Background dot textures | `src/index.css` |
| Testimonial cards with avatars | `src/components/Testimonials.tsx` |
| Scroll-margin fix for nav | `src/index.css` |

