# Design System Specification: The Cognitive Architecture

## 1. Overview & Creative North Star
This design system is built to reflect the intersection of human intelligence and automated precision. Our Creative North Star is **"The Cognitive Architecture."** 

To achieve a high-end, editorial feel for an AI-powered business systems company, we must move away from the "standard SaaS" aesthetic—characterized by rigid grids and heavy borders—and move toward a fluid, layered experience. We prioritize **intentional asymmetry** and **tonal depth**. By utilizing overlapping elements and a dramatic typography scale, we create a sense of professional authority that feels like a bespoke digital workspace rather than a generic tool.

## 2. Color Strategy: Tonal Sophistication
Our palette is rooted in deep, atmospheric blues and greys, punctuated by vibrant AI-inspired accents. 

### The Palette
*   **Surface Foundation:** `surface` (#0b1326) provides a deep, professional "midnight" canvas.
*   **Primary Accent:** `primary` (#89ceff) is our "AI Glow," used for high-importance actions and focused highlights.
*   **Secondary/Tertiary Accents:** `secondary` (#c0c1ff) and `tertiary` (#ddb7ff) introduce the electric purple/lavender hues that signify "Intelligence" and "Synthesis."

### The "No-Line" Rule
To maintain a premium aesthetic, **1px solid borders are strictly prohibited for sectioning.** We define boundaries through:
1.  **Tonal Shifts:** Placing a `surface-container-low` (#131b2e) element against a `surface` (#0b1326) background.
2.  **Negative Space:** Using the spacing scale to let elements breathe and define their own territory.
3.  **Shadow Depth:** Utilizing ambient shadows (see Elevation) to imply separation.

### Signature Textures & Gradients
Main CTAs and hero backgrounds should utilize subtle gradients. Transition from `primary` (#89ceff) to `on-primary-container` (#0089c3) at a 135-degree angle. This prevents the "flat" look and adds a sense of light-source energy characteristic of high-end AI interfaces.

## 3. Typography: Editorial Authority
We pair the geometric precision of **Manrope** for high-impact display with the functional clarity of **Inter** for data-heavy business systems.

*   **Display & Headline (Manrope):** Use these for core value propositions. The `display-lg` (3.5rem) should feel massive and confident, often utilizing `on-surface` text with slight tracking adjustments (-0.02em) for a tighter, more premium look.
*   **Title & Body (Inter):** These tokens handle the "work" of the UI. `title-md` (1.125rem) is your go-to for card headers. 
*   **Hierarchy Tip:** Never settle for a uniform text layout. Offset a `headline-sm` with a `label-md` in a `secondary` color to create an asymmetric, editorial focal point.

## 4. Elevation & Depth: The Layering Principle
Hierarchy in this design system is achieved through **Tonal Layering** rather than traditional structural lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of frosted glass.
*   **Base:** `surface` (#0b1326)
*   **Nesting Level 1:** `surface-container-low` (#131b2e) for large layout blocks.
*   **Nesting Level 2 (The Card):** `surface-container` (#171f33) or `surface-container-high` (#222a3d) for interactive elements.
*   **The Lift:** Place a `surface-container-highest` card on a `surface-container-low` background to create a soft, natural lift without a border.

### Ambient Shadows & Glassmorphism
*   **Floating Elements:** Use extra-diffused shadows. Blur: 40px-60px, Opacity: 4%-8%. The shadow color must be a tinted version of `on-surface` (#dae2fd), never pure black.
*   **Glassmorphism:** For overlays or navigation bars, use `surface` tokens at 60% opacity with a `backdrop-filter: blur(12px)`. This "frosted glass" effect allows the background "intelligence" to bleed through, softening the interface.
*   **The Ghost Border:** If a boundary is strictly required for accessibility, use the `outline-variant` (#45464d) at 20% opacity. 

## 5. Components

### Buttons
*   **Primary:** A gradient from `primary` to `on-primary-container`. Corner radius: `md` (0.75rem). Text should be `on-primary` (#00344d) to ensure a high-contrast, clickable feel.
*   **Secondary:** `surface-container-highest` background with a `primary` "Ghost Border."
*   **Hover State:** Increase the `backdrop-filter: brightness` or add a subtle `primary` outer glow (4px blur).

### Premium Service Cards
*   **Structure:** No dividers. Use `surface-container` with 12px (`lg`) rounded corners.
*   **Interaction:** On hover, the card should shift from `surface-container` to `surface-container-highest`, and the `primary` accent icon should slightly "glow" using a drop-shadow effect.
*   **Content:** Group related information with 24px-32px of vertical white space to replace line-based separation.

### Inputs & Fields
*   **Style:** Use the "Ghost Border" approach. The field background should be `surface-container-lowest` to create a "recessed" feel.
*   **Focus:** Transition the border to 100% opacity `primary` and add a subtle `primary` inner glow.

### Additional Components: The "Intelligence Chip"
*   **Usage:** Used for AI-generated tags or system statuses.
*   **Style:** `secondary-container` background with `on-secondary-container` text. Use the `full` (9999px) roundedness scale for a soft, organic feel.

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place a large headline on the left and a smaller, high-detail list on the right with significant gutter space.
*   **Embrace Dark Space:** Allow the `surface` color to dominate. This is a high-end SaaS; it shouldn't feel crowded.
*   **Layer with Purpose:** Always ask "What layer is this on?" before assigning a background token.

### Don't:
*   **No High-Contrast Borders:** Never use #FFFFFF or #000000 for lines. It breaks the "Cognitive Architecture" immersion.
*   **Avoid Generic Shadows:** Do not use the default "Drop Shadow" settings in design tools. Always increase blur and decrease opacity.
*   **No Divider Overuse:** If you find yourself reaching for a `<hr>` tag, use a 32px margin or a background color shift instead.