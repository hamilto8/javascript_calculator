# 🌟 JavaScript Glassmorphic Calculator

A beautiful, modern, high-quality, and responsive JavaScript calculator with a premium glassmorphic interface, mathematical operator precedence (PEMDAS) parsing, full keyboard control, memory register functionality, and an interactive VIP easter egg.

![JavaScript Calculator Screenshot](images/screenshot.png) *(Placeholder or visualization description: A sleek dark glass card with glowing cyan display text, set against a dark background with blurred neon blue and pink ambient light circles.)*

---

## ✨ Features

- **🎨 Premium Aesthetics:** Stunning frosted-glass UI (Glassmorphism) with fluid animations, neon glow highlights, and custom active/tactile click scaling.
- **🌗 Native Theme Switcher:** Light & Dark mode toggle that defaults to the user's operating system setting and preserves their manual choice in local storage. Prevents Flash of Unstyled Content (FOUC) on load.
- **🧮 PEMDAS Engine:** A secure mathematical expression evaluator tokenizing and parsing inputs with proper order of operations (rather than simple left-to-right evaluation or unsafe `eval()`).
- **🎯 Precision Floating-Point Arithmetic:** Handles floating-point roundings (e.g. `0.1 + 0.2` returns `0.3` instead of `0.30000000000000004`).
- **♿ Standard Accessibility (a11y):** Rewritten entirely using semantic `<button>` elements with keyboard focus visible outlines, ARIA roles, and polite screen reader alerts.
- **⌨️ Tactile Keyboard Mapping:** Support for typing numbers and operations directly on your physical keyboard. Keys map to corresponding button animations to maintain a hardware feel.
- **🧠 Full Memory Registers:** MC (Clear), M+ (Add), M- (Subtract), and MR (Recall) functions. A small `M` indicator light illuminates when value is stored in memory.
- **💎 VIP Mode Easter Egg:** Double-click the calculator/special icon button to toggle a premium golden VIP theme complete with neon glowing matrix loading animations on the screen.

---

## ⌨️ Keyboard Shortcut Controls

The calculator listens globally for standard mathematical keyboard entries:

| Keyboard Key | Calculator Action |
|---|---|
| `0` - `9` | Digits |
| `.` | Decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Percentage |
| `Enter` or `=` | Calculate Result |
| `Backspace` | Delete last digit or pop previous operators |
| `Escape` | Clear calculation (`C`) |

---

## 🛠️ Technology Stack

- **HTML5:** Semantic architecture, data attributes, meta SEO attributes.
- **CSS3:** Custom properties (CSS variables), Grid system, `@supports` feature queries, backdrop blurs, keyframe animations, `@media` preference queries.
- **Vanilla ES6+ JavaScript:** Event delegation, custom infix tokenizer & evaluator, browser local storage, click/keydown handlers.

No external CSS frameworks (such as Tailwind or Skeleton) are required. The layout is written in fully optimized, native vanilla CSS for maximal styling control.

---

## 🚀 Getting Started

To run the project locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/hamilto8/javascript_calculator.git
   ```
2. Open the project folder:
   ```bash
   cd javascript_calculator
   ```
3. Open `index.html` directly in any modern web browser, or serve it using a lightweight dev server:
   ```bash
   npx serve .
   ```

---

## 📜 License

Created in 2026 by Michael Hamilton. Open source and free to use.
