# Design Brief: College Discovery App

**Purpose**: Connect college students with peers from their home state or city through modern, intuitive discovery interface.

## Aesthetic & Tone

Modern minimal startup style — clean, purposeful, human-centered. Emphasis on discovery and connection. Trust and approachability over corporate formality.

## Color Palette

| Role | Light OKLCH | Dark OKLCH | Usage |
|------|------------|-----------|-------|
| Primary | 0.55 0.25 200 | 0.72 0.22 180 | CTAs, active states, key actions |
| Accent | 0.58 0.28 165 | 0.75 0.25 155 | Secondary emphasis, highlights |
| Secondary | 0.92 0.03 260 | 0.22 0.02 260 | UI containers, backgrounds |
| Destructive | 0.56 0.22 28 | 0.65 0.19 22 | Warnings, destructive actions |
| Neutral | 0.97 0.01 260 (light), 0.12 0.01 260 (dark) | Base backgrounds |

## Typography

- **Display**: GeneralSans (modern, distinctive, friendly, 24–32px)
- **Body**: DM Sans (refined, highly readable, 14–16px)
- **Mono**: GeistMono (code, technical, 12–14px)
- Type scale: 12, 14, 16, 18, 24, 32 px
- Line height: 1.4 (tight), 1.6 (body), 1.8 (loose)

## Shape Language

- Border radius: 0.625rem (cards, inputs, buttons)
- Spacing: 4px base unit (4, 8, 12, 16, 24, 32, 48, 64px)
- Shadows: card (2px blur, 8px), elevated (4px blur, 16px), subtle (1px blur, 3px)

## Structural Zones

| Zone | Treatment | Purpose |
|------|-----------|----------|
| Header | Bg card, border-b | Clear navigation, elevated presence |
| Content | Bg background, card grid | Main discovery interface |
| Card | Bg card, shadow-card, border | Individual user profiles |
| Footer | Bg muted/5, border-t | Minimal, discreet |

## Component Patterns

- **Cards**: Profile cards with nickname, location, branch, year, interests, Connect button
- **Buttons**: Primary (teal bg, white text), Secondary (neutral bg, text fg)
- **Inputs**: Muted bg, subtle border, rounded
- **Filters**: Horizontal or vertical layout, toggle/checkbox style
- **Badges**: Branch, year, interests as inline badges

## Motion & Interaction

- **Transitions**: 0.3s cubic-bezier(0.4, 0, 0.2, 1) for all state changes
- **Hover**: Subtle shadow lift on cards, color shift on buttons
- **Loading**: Skeleton cards, fade-in on data load

## Differentiation

Clean card-based interface with intentional depth and breathing room. Emphasis on mobile-first responsiveness and fast, dynamic filtering. No clutter — every UI element serves a purpose.

## Responsive Breakpoints

- Mobile: <640px (single column, touch-friendly spacing)
- Tablet: 640–1024px (2-column grid)
- Desktop: >1024px (3-4 column grid)

## Dark Mode

Optional. Light theme is primary; dark mode uses inverted brightness with preserved color relationships for mood consistency.
