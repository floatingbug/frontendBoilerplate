Vue 3 Modular Application

This project is a modular Vue 3 application built with the Composition API using the <script setup> syntax and PrimeVue as the UI framework.

The architecture follows a feature-based module structure with a clear separation between layouts, views, routing, state, and shared components.

Tech Stack

Vue 3

Vue Router

Pinia

PrimeVue

SCSS

Vite

Project Structure

src/
├─ components/        # Global, reusable UI components
├─ config/            # App & library configuration
├─ layouts/           # Application layouts
├─ modules/           # Feature modules (auth, dashboard, settings, etc.)
├─ router/            # Global router setup
├─ services/          # Shared service logic (e.g. API helpers)
├─ stores/            # Global Pinia stores
├─ styles/            # Global styles, variables, themes

Layout System

Layouts live in:

src/layouts/

Each layout acts as a page shell and renders module views via <RouterView />.

Example layouts:

AuthLayout

DashboardLayout

SettingsLayout

PublicLayout

Example

<template>
  <Topbar />
  <main>
    <RouterView />
  </main>
</template>

Layouts are assigned via routing, not inside views.

Feature Modules

Each feature is isolated in its own module under:

src/modules/

Example:

src/modules/auth/
├─ api/        # API calls related to auth
├─ components/ # Auth-specific components
├─ router/     # Module routes
├─ store/      # Module-specific state
├─ views/      # Route views

This keeps features self-contained and scalable.

Views

Views are located inside each module:

src/modules/auth/views/

Example:

ForgotPasswordView.vue
ResetPasswordView.vue
SignInView.vue
SignUpView.vue
VerifyEmailView.vue
VerifyEmailCallbackView.vue

Views are never reused across modules — they represent routes only.

Module Routing

Each module defines its own routes.

Example (auth module):

import {
  SignUpView,
  SignInView,
  VerifyEmailView,
  VerifyEmailCallbackView,
  ForgotPasswordView,
  ResetPasswordView,
} from "../views";
import { AuthLayout } from "@/layouts/authLayout";

export default [
  {
    path: "/auth",
    component: AuthLayout,
    meta: { requiresGuest: true },
    children: [
      { path: "signin", name: "auth.signin", component: SignInView },
      { path: "signup", name: "auth.signup", component: SignUpView },
      { path: "forgot-password", name: "auth.forgot-password", component: ForgotPasswordView },
      { path: "reset-password", name: "auth.reset-password", component: ResetPasswordView },
      { path: "verify-email", name: "verify-email", component: VerifyEmailView },
      { path: "verify-email/callback", name: "verify-email-callback", component: VerifyEmailCallbackView },
    ],
  },
];

Global Router

All module routes are composed in the global router:

import authRoutes from "@/modules/auth/router";
import homeRoutes from "@/modules/home/router";
import dashboardRoutes from "@/modules/dashboard/router";
import settingsRoutes from "@/modules/settings/router";

const routes = [
  ...authRoutes,
  ...homeRoutes,
  ...dashboardRoutes,
  ...settingsRoutes,
];

Route Guards

Authentication logic is handled globally:

requiresAuth

requiresGuest

automatic redirects

store initialization before navigation

router.beforeEach(async (to) => {
  const authStore = useAuthStore();

  if (!authStore.isInitialized) {
    await authStore.init();
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: "auth.signin" };
  }

  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    return { name: "dashboard" };
  }
});

Global Components

Reusable UI components live in:

src/components/

Examples:

Topbar

Sidebar

SidebarDrawer

UserMenu

NavToggle

BreadcrumbPath

Logo

These components:

are layout-agnostic

contain no business logic

can be reused across modules

Each component exposes an index.js for clean imports.

PrimeVue Configuration

PrimeVue setup is centralized in:

src/config/primevue/

This includes:

theme setup

environment configuration

global PrimeVue options

Styling

Global styles live in:

src/styles/

This includes:

CSS variables

spacing & typography scales

light/dark mode

layout helpers

Components and views use scoped SCSS, global styles only define foundations.

Architectural Principles

Feature-first structure

Layouts control page composition

Views = routes only

Reusable components are global

No cross-module coupling

Explicit routing

Scales well for large apps

Features

Authentication

Sign up (email + password)

Sign in

Sign out

Email verification flow

Password reset (forgot password & reset password)

Account & Profile

Update name

Update email (with confirmation flow)

Update password

Delete account

Routing & Access Control

Route-based layouts

Auth / guest guards

Automatic redirects

Why This Architecture

This project uses a feature-first, module-based architecture to keep complexity under control as the application grows.

Key Reasons

Clear ownership: Each module owns its routes, views, API calls and state

No hidden coupling: Modules do not depend on each other

Layouts are explicit: Page structure is decided by routing, not components

Easy to scale: Adding a feature means adding a new module

Backend-aligned: Frontend structure mirrors backend use cases

This avoids common problems like:

giant global components folders

unclear routing responsibilities

shared state becoming a dumping ground

Architecture Overview

graph TD
    Router[Global Router]
    Router --> Layouts
    Layouts --> Views

    Views --> ModuleAPI[Module API]
    Views --> ModuleStore[Module Store]

    ModuleAPI --> Backend

    Components[Global Components]
    Components --> Views
    Components --> Layouts

Backend Compatibility

All API endpoints required by this frontend already exist in the following backend template:

👉 backendBoilerplatehttps://github.com/floatingbug/backendBoilerplate

The frontend modules and flows (auth, email verification, password reset, account management) are designed to match this backend one-to-one.

You can use this frontend together with the backend template without any structural changes.

Self-Onboarding Guide

1. Add a new feature

Create a new folder under src/modules/

Add:

views/

router/

api/

store/ (if needed)

2. Add routes

Export routes from the module router

Register them in the global router

3. Choose a layout

Wrap your routes with an existing layout

Or create a new layout under src/layouts/

4. Reuse global components

Use components from src/components/

Do not put business logic into them

5. Keep views thin

Views coordinate data & actions

Logic lives in API services and stores

Summary

This architecture is designed to:

scale cleanly

keep features isolated

make routing predictable

avoid spaghetti imports

support large teams

If you add a new feature, you add a new module — not a new folder everywhere.

License

MIT
