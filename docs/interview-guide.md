# Interview Guide

This guide lists project-specific topics that can be used in interviews.

## Stock Analysis Sidekick

Possible questions:
- How did you split responsibility between frontend, backend, shared types, and browser extension?
- How does the app behave when live financial data is unavailable?
- What should be mocked before publishing a public demo?
- How do AI prompts fit into the user workflow without pretending to be financial advice?

## Realtime Screen Automation Demo

Possible questions:
- How do you select and calibrate a screen region?
- Why use HSV masks instead of OCR for meter detection?
- How do cooldowns prevent repeated accidental actions?
- What are the tradeoffs between `mss`, Windows GDI, SendInput, and lower-level input strategies?

## Legacy Site Automation Worker

Possible questions:
- How do you recover from white pages, duplicate login, or broken sessions?
- What should be logged as an artifact?
- How do you design tests for parsers and automation state?
- Why separate API, worker, parser, browser, and extension responsibilities?

## Chrome Extension Form Automation

Possible questions:
- How do popup scripts and content scripts communicate?
- When should state live in `chrome.storage`?
- How do you parse human-written name lists into structured tasks?
- How do you anonymize an extension that was originally built for a real internal workflow?

## Mobile Location Testing Tool

Possible questions:
- What did you customize from the upstream project?
- How do you frame location simulation as QA tooling?
- How does Leaflet route interaction connect to ADB commands?
- How do you avoid overstating authorship when working from a fork?

## Portfolio Source Protection

Possible questions:
- Why not publish all source code?
- What belongs in a public case study?
- What belongs in a private repo?
- How do you make a project reviewable when the real system cannot be shown publicly?

