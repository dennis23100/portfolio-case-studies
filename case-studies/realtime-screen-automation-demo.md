# Realtime Screen Automation Demo

Status: Completed prototype, should be repackaged  
Original paths:
- `E:\tools\LinHelper_v1.2.2\lineage-helper`
- `E:\tools\lineage-helper-v1.4-single-hpmp.zip`

Public strategy: mock desktop demo, not raw source

## Summary

A Windows desktop automation prototype that reads screen state in real time, estimates visual meter values with OpenCV, applies threshold-based rules, and sends keyboard actions through Windows input APIs.

For public presentation, the project should be reframed as a generic screen-state automation demo. The public version should use a mock HP/MP meter window instead of any game client or private screenshots.

## What I Built

- PyQt5 GUI for settings and live status
- Screen capture using `mss` and Windows GDI fallback
- OpenCV HSV mask detection for red/blue meter regions
- Calibration flow for selecting regions of interest
- Rule engine with thresholds, cooldowns, and background loop
- Keyboard sending via Windows API / SendInput
- Packaging script for building a Windows executable

## Engineering Highlights

- Closed-loop automation: capture -> detect -> decide -> act
- Real-time UI updates while a background engine runs
- Practical handling of DPI, foreground windows, and screen capture reliability
- Experimentation notes comparing SendInput and lower-level keyboard strategies

## Public Demo Plan

Create a mock demo with:

- A generated meter window
- Adjustable red/blue bars
- Live percentage detection
- Rule-triggered action log
- Optional keyboard event simulation

This keeps the technical value visible without exposing private usage context.

## Public Safety Notes

Do not publish:

- Game names or game-specific instructions
- Debug screenshots from real sessions
- Window titles from real applications
- AI chat logs or troubleshooting transcripts
- Vendored dependencies or packaged binaries

## Suggested Public Repo Name

- `realtime-screen-automation-demo`
- `opencv-desktop-assistant`
- `screen-state-action-automation`

