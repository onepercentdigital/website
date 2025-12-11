# Known Issues

## iOS Safari: Navigation bar flicker during page transitions

**Status:** Known limitation, no fix available

**Description:** On iOS Safari, when clicking internal links while scrolled down on a page, the sticky navigation bar may briefly disappear for a split second before reappearing.

**Root Cause:** iOS Safari removes sticky/fixed elements from the render tree during programmatic scroll operations (`window.scrollTo()`) as a performance optimization. This is fundamental WebKit behavior, not a bug in our code.

**Conditions:**
- Only occurs on iOS Safari (iPhone/iPad)
- Only when scrolled down on the current page
- Does not occur when already at top of page
- Does not occur on desktop browsers

**Attempted Fixes (Unsuccessful):**
- `transform-gpu` / `translate3d(0,0,0)` GPU layer hints
- `scrollRestorationBehavior: 'instant'` in TanStack Router
- `backface-visibility: hidden` compositing hints

**References:**
- https://bugs.webkit.org/show_bug.cgi?id=89475
- https://github.com/ampproject/amphtml/issues/18469

**Impact:** Minor visual glitch, does not affect functionality.
