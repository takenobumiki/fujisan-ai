# Fujisan.AI Changelog

All notable changes to this project will be documented in this file.

## [18.15.0] - 2025-01-11

### Changed
- **Today's Focus Enhanced**: Completely redesigned Today's Focus section
  - Now shows 3 actionable items: SRS due items, mistakes to practice, current unit progress
  - Each item is clickable and starts the relevant action
  - Added "Start Review" button for quick access to primary task
  - Removed separate DUE TODAY / LEARNING / MASTERED stats bar (redundant)

### Removed
- **SRS Stats Bar Removed**: Removed the bottom 3-button stats display (DUE TODAY, LEARNING, MASTERED)
  - Information now integrated into Today's Focus card
  - Cleaner, less cluttered interface

### Fixed
- Today's Focus now always visible (was hidden by default)
- Improved Today's Focus UI with better visual hierarchy

## [16.2.0] - 2025-01-06

### Fixed
- **Plan Selection Bug**: Fixed Stripe payment link key mismatch ('monthly' → 'basic_monthly')
- Plan selection now correctly maps to Stripe payment links

### Changed
- **Signup Modal Redesigned**: Dropdown selector for all 6 plans (Basic/Standard/Premium × Monthly/Annual)
- Removed outdated "Offer available until January 31, 2025" text
- Default plan changed from 'annual' to 'basic_annual'

### Added
- **Upgrade/Downgrade Policy** added to Terms of Service (v1.2.0):
  - Upgrades: Prorated billing, immediate effect
  - Downgrades: Takes effect at next billing period
- Terms of Service updated to version 1.2.0

## [16.1.2] - 2025-01-06

### Added
- **Standalone Legal Pages**: Created independent URLs for legal documents
  - `/terms.html` - Terms of Service
  - `/privacy.html` - Privacy Policy
- Footer links now point to standalone pages instead of modals

### Changed
- Footer Terms/Privacy links updated to use new standalone pages
- Signup form Terms/Privacy links open in new tab

## [16.1.1] - 2025-01-06

### Fixed
- **Stripe Links Updated**: All payment links corrected to match current Stripe configuration
  - Basic: $7.99/month, $47.99/year
  - Standard: $14.99/month, $89.99/year  
  - Premium: $29.99/month, $179.99/year
- Updated STRIPE_LINKS in app.js with correct URLs
- Updated STRIPE_CONFIG in index.html with correct URLs
- Fixed changelog entries to reflect accurate pricing history

## [16.1.0] - 2025-01-06

### Changed
- **Dashboard Simplified**: Merged "Learn" and "Quiz" into single "Quiz" button
- Dashboard now has 3 buttons: Quiz, Review, Mock Test (was 4 buttons)
- Mock Test button is now full-width for better visibility
- Updated Drill screen to match new Quiz/Review structure
- Renamed `startLearning()` function to `startQuiz()`

### Removed
- Removed redundant "Learn" button from dashboard
- Removed "Learning" mode (functionality merged into Quiz)

## [8.2.0] - 2025-12-26

### Changed
- **Stripe Payment Links Updated**: All 12 payment links replaced with new URLs
  - Normal links (7-day trial): Basic/Standard/Premium × Monthly/Annual
  - Referral links (14-day trial): Basic/Standard/Premium × Monthly/Annual

### Fixed
- Corrected all Stripe Payment Link URLs to match new price IDs

## [8.1.0] - 2024-12-26

### Added
- Version meta tag in HTML head
- Version constants in JavaScript (APP_VERSION, APP_BUILD_DATE)
- Console logging of app version on load
- VERSION file
- CHANGELOG.md file

## [8.0.0] - 2024-12-25

### Previous Release
- Initial versioned release
