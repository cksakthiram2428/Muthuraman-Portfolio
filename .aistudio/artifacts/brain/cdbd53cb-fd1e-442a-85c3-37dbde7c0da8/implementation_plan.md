# Face Portrait Integration & Background Removal Plan

Implement high-precision background removal on the user's newly uploaded portrait photo, and integrate the resulting cutout into the portfolio website across both the Hero section and the About profile card styled as a circular floating badge with an online status indicator.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during interactive clarification and directly guide the implementation:

- **Placement Scope**: The new close-up face portrait will be featured prominently in both the **Hero section** and the **About Me executive profile card**.
- **Hero Presentation**: The Hero section will transition to showcasing this newly uploaded close-up portrait (replacing the previous full-length image), framed with editorial scale and typography.
- **Card Styling & Motif**: Rendered as a **circular floating badge with an active status dot** (`online / available for engineering roles`), with soft ambient backlighting and high-contrast border definition.

---

## 1. Overview & Core Concept

- **What It Does**: Processes the newly uploaded high-resolution face portrait to completely isolate Muthuraman's face, hair, and collar with a feathered, anti-aliased alpha channel. It deploys the transparent cutout into two primary focal points:
  1. **Hero Section (`EditorialHero.tsx`)**: Replaces the full-body figure with the new close-up face cutout, allowing the giant marquee lettering `MUTHURAMAN — C K` to flow cleanly behind the head and jawline.
  2. **About Me Section (`EditorialAbout.tsx`)**: Replaces the rectangular studio card with a circular floating badge avatar featuring an active status dot, subtle ambient glow, and verified credential tags.
- **Target Audience**: Recruiters, engineering managers, and technical founders reviewing Muthuraman C K's engineering portfolio.
- **Key Value**: Provides personal authenticity with the user's exact uploaded face, elevated by clean background isolation and sophisticated editorial layout.

---

## 2. User Experience & Visual Design

- **Hero Visual Composition**:
  - The close-up face cutout sits centered in the viewport above the fold, elevated with an ambient drop shadow (`drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]`).
  - Giant kinetic typography (`MUTHURAMAN — C K`) animates in the background plane directly behind the subject's face.
  - Quick action to replace or reset the exact photo remains available in the discreet glassmorphism control pill.
- **About Section Circular Badge**:
  - A circular frame with refined border styling (`ring-2 ring-slate-200 dark:ring-slate-800`), an ambient radial glow, and an online status indicator dot (`emerald-500` with subtle ping animation) signifying active availability.
  - Accompanied by unboxed metadata: *Muthuraman C K*, *Full Stack & AI Engineer*, *Tamil Nadu, India*.
- **Color & Typographic Harmony**:
  - Dark slate canvas with neutral tinting and electric blue accent.
  - Clean font pairing using Helvetica Neue / Neo-Grotesque display for headlines and tabular monospace for academic and technical stats.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct File Replacement & Dedicated Cutout Asset**
  - *Chosen Approach*: Generate `/public/muthuraman_face.png` and update `/public/image.png` with the new transparent cutout, while preserving a fallback copy in `src/assets/images/`.
  - *Why*: Instant browser caching without external network dependencies; works immediately in dev and static production builds.
  - *Alternative Considered*: Client-side canvas chroma-keying on every render (rejected due to flicker, mobile CPU overhead, and potential edge artifacts).
- **Decision 2: Dual Presentation (Hero Display & Circular Badge)**
  - *Chosen Approach*: In Hero, preserve full dramatic scale with transparent silhouette cutout; in About, house it within the user-requested circular floating badge with active status dot.
  - *Why*: Directly satisfies the user's explicit preference while ensuring each section retains its distinct architectural rhythm.

---

## 4. Technical Architecture & Data Strategy

### System Component & Asset Flow

```
┌────────────────────────────────────────────────────────┐
│               User Uploaded Photo                      │
│            (Close-Up Face Portrait)                    │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│             Background Removal Pipeline                │
│    (Floodfill + Alpha Mask Feathering + Edge Smooth)   │
└──────────────────────────┬─────────────────────────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
┌───────────────────────────┐ ┌──────────────────────────┐
│    /public/image.png      │ │ /public/muthuraman_face  │
│ (Hero Centered Cutout)    │ │ (Circular Floating Badge)│
└────────────┬──────────────┘ └──────────┬───────────────┘
             │                           │
             ▼                           ▼
┌───────────────────────────┐ ┌──────────────────────────┐
│   EditorialHero.tsx       │ │   EditorialAbout.tsx     │
│ - Marquee type behind     │ │ - Circular badge ring    │
│ - Ambient drop-shadow     │ │ - Active status dot      │
│ - Responsive height clamp │ │ - Verified credentials   │
└───────────────────────────┘ └──────────────────────────┘
```

### Execution Steps
1. **Background Removal**: Execute edge-aware alpha masking and feathering on the newly uploaded image to produce a transparent PNG asset with zero halo or fringe.
2. **Hero Integration**: Update `EditorialHero.tsx` to center and scale the close-up face cutout naturally within the typographic composition.
3. **About Section Integration**: Update `EditorialAbout.tsx` to format the avatar as a circular floating badge with an active status dot (`emerald-500`) and location metadata.
4. **Verification**: Run `compile_applet` and `lint_applet` to ensure full build integrity and responsive rendering.
