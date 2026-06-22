# Legacy Site Automation Worker

Status: Completed internal automation tool  
Original paths:
- `E:\tools\tample\autoall`
- `E:\tools\tample\macautoall`

Public strategy: architecture case study only, or a heavily sanitized mock demo

## Summary

A local automation worker for a legacy web system. It receives structured tasks, controls a browser through Playwright, coordinates with a Chrome extension, recovers from session failures, and records artifacts for debugging.

The most valuable part of this project is not one script. It is the reliability design around a brittle legacy website: queueing, checkpoints, browser recovery, page-state detection, and error artifacts.

## What I Built

- TypeScript automation worker
- Express local API
- Playwright browser control
- Electron desktop shell
- Chrome profile and extension integration
- Task queue and state checkpointing
- Session recovery for white pages, duplicate login, corrupted sessions, and failed navigation
- Parser tests and worker recovery tests

## Engineering Highlights

- Reliable automation against unstable legacy UI
- Separation between task API, browser worker, parser, and extension
- Artifacts for debugging long-running automation
- Cross-platform handoff between Windows and Mac variants

## Validation

- Typecheck passed for both Windows/Mac variants
- Test suite passed: 19/19

## Public Safety Notes

Do not publish raw files containing:

- `.env` or `.env.override`
- Real site URL or credentials
- Chrome profiles
- Screenshots, logs, and artifacts from real tasks
- Packaged executables
- Real organization-specific workflow names

## Suggested Public Repo Name

- `legacy-site-automation-worker`
- `line-triggered-automation-worker`
- `playwright-session-recovery-worker`

