# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Open Graph and Twitter Card metadata on all pages; shared links now render rich previews on social platforms and messaging apps
- Static pages (Build, Buy or Sell, Contribute, AI Skill, Brand, Blog index) use their hero image as og:image
- Blog post detail pages use post.image_url for og:image, with fallback to pelagora-app_homepage-crop.png
- Canonical base URL driven by NEXT_PUBLIC_SITE_URL env var (defaults to https://pelagora.org)
- NEXT_PUBLIC_SITE_URL documented in .env.local.example
