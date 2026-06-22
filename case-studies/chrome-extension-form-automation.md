# Chrome Extension Form Automation

Status: Completed helper tools, should be anonymized  
Original paths:
- `E:\tools\tample\週週打開補入系統`
- `E:\tools\tample\週週打開終極版v1`
- `E:\tools\tample\各班期報名系統`
- `E:\tools\tample\新增資料夾\道務系統輔助報名系統`
- `E:\tools\tample\macautoall\weekly-helper-extension`

Public strategy: mock extension demo

## Summary

A set of Manifest V3 Chrome extensions for structured form automation, attendance extraction, name parsing, browser storage, and Google Sheet / Apps Script export.

For public use, this should be converted into a generic form automation demo that runs against a mock HTML form.

## What I Built

- Manifest V3 Chrome extension structure
- Content scripts for reading and filling legacy web pages
- Popup UI for task input and progress feedback
- Name-list parser for semi-structured human text
- `chrome.storage` state persistence
- Attendance extraction and export workflow
- Apps Script / Google Sheet integration in one variant

## Engineering Highlights

- Browser extension architecture
- Human-text parsing into structured task data
- DOM automation and page-state detection
- Local state recovery across popup/content-script boundaries
- Workflow bridge between browser UI and spreadsheet reporting

## Validation

Main JavaScript files passed `node --check` in the inspected extension folders.

## Public Demo Plan

Create:

- `mock-form.html`
- A sanitized extension with fake permissions
- Demo data such as `Alice`, `Bob`, and sample attendance rows
- A README showing parse -> fill -> verify -> export

## Public Safety Notes

Remove:

- Real domains
- Real Apps Script deployment URLs
- Real Google Sheet CSV URLs
- Spreadsheet IDs
- Organization-specific language

## Suggested Public Repo Name

- `chrome-form-automation-demo`
- `structured-form-helper-extension`
- `attendance-export-extension-demo`

