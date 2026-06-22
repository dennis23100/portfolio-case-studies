# Mobile Location Testing Tool

Status: Fork customization / prototype  
Original path: `E:\tools\皮克敏\SimpleGPSMocker`  
Public strategy: fork/customization case study, not a main portfolio repo

## Summary

A customized mobile location testing tool based on the open-source `SimpleGPSMocker` project. The inspected local version includes UI and behavior changes around map controls, route simulation, speed presets, joystick-style movement, and ADB-based location service commands.

This should not be presented as a game-specific location modifier. The safer and more professional framing is:

> A mobile LBS QA tool for testing map, route replay, geofencing, and movement scenarios on Android devices.

## What I Customized

Observed local changes include:

- Larger Ionic/Angular home page rewrite
- Leaflet route polyline support
- Position, single-point, multi-point, joystick, and jump modes
- Speed presets such as walking, cycling, and driving
- Route point management
- ADB backend command adjustment
- UI styling overhaul

Local diff size at inspection:

- 4 modified files
- 1,331 insertions
- 429 deletions

## Engineering Highlights

- Ionic / Angular app customization
- Leaflet map interaction design
- ADB integration through a local Express backend
- Mobile testing workflow thinking
- Route simulation and movement control UX

## Why It Is Not First-Wave

- It is a fork, so authorship must be explained carefully.
- Location spoofing can be interpreted negatively if framed around games.
- It is better as a "fork customization and QA tooling" case study than as a headline project.

## Public Safety Notes

If published, include:

- Clear upstream attribution
- A note explaining what was customized
- No game names
- No instructions that encourage bypassing service rules

## Suggested Public Repo Name

- `mobile-location-testing-tool`
- `gps-route-simulation-lab`
- `mock-gps-qa-playground`

