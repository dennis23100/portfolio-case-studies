# Stock Analysis Sidekick

Status: Completed MVP  
Original path: `E:\tools\stock\stock_tool`  
Public strategy: case study plus possible sanitized demo source

## Summary

A mobile-first US stock decision-support system with a Next.js frontend, FastAPI backend, shared TypeScript types, and a Chrome side panel extension for TradingView-assisted analysis.

The project focuses on turning scattered stock information into a structured workflow: search a symbol, review technical/fundamental signals, manage watchlists, inspect portfolio snapshots, and generate prompts for AI-assisted reasoning.

## What I Built

- Next.js App Router frontend with TypeScript and Tailwind
- FastAPI backend with SQLAlchemy models and JSON fallback data
- Shared type package for frontend/backend contracts
- Portfolio, watchlist, settings, and stock detail views
- Chrome extension side panel that detects TradingView symbols
- Local AI prompt workflow for ChatGPT/Claude-assisted stock review
- Mock data mode so the UI still works without live API credentials

## Engineering Highlights

- Full-stack monorepo structure
- Shared schema thinking between API and frontend
- Defensive fallback behavior when live data is unavailable
- Browser extension integration with a local backend
- Production build and typecheck validation

## Validation

- Frontend typecheck passed
- Next.js production build passed
- Backend Python compile check passed

## Public Safety Notes

Before publishing source, remove:

- `apps/api/.env`
- `apps/web/.env.local`
- `.venv/`, `node_modules/`, `.next/`
- `logs/`, `run/`
- Any real API keys or private portfolio data

## Suggested Public Repo Name

- `stock-analysis-sidekick`
- `tradingview-stock-sidekick`
- `us-stock-decision-dashboard`

