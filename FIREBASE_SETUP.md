# Firebase Analytics Setup Guide

This guide will help you set up Firebase Analytics for the MindAnchor website.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter your project name (e.g., "MindAnchor")
4. Enable or disable Google Analytics (recommended: enable)
5. Choose your Analytics account or create a new one
6. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project dashboard, click the web icon (`</>`) to add a web app
2. Enter an app nickname (e.g., "MindAnchor Website")
3. Check "Also set up Firebase Hosting" if you plan to use it (optional)
4. Click "Register app"
5. You'll see your Firebase configuration object - **keep this page open**

## Step 3: Configure Environment Variables

1. Copy the `.env.local.example` file to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in your Firebase configuration values from Step 2:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Important:** Never commit `.env.local` to git. It's already in `.gitignore`.

## Step 4: Enable Google Analytics

1. In Firebase Console, go to your project
2. Click on "Analytics" in the left sidebar
3. Click "Google Analytics"
4. Your Analytics should already be enabled from Step 1
5. If not, enable it and link to your Google Analytics account

## Step 5: Test Analytics

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000` in your browser

3. Go to Firebase Console > Analytics > Events
   - You should see events like `page_view` and `website_visit` within a few minutes
   - Note: Analytics events may take up to 24 hours to show in the dashboard initially

## Step 6: View Analytics Data

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click "Analytics" in the left sidebar
4. Explore the following sections:
   - **Dashboard**: Overview of users, events, and conversions
   - **Events**: See all tracked events (`page_view`, `website_visit`, etc.)
   - **Realtime**: See users currently on your site
   - **Users**: User demographics and behavior

## Tracked Events

The following events are automatically tracked:

- `page_view` - Triggered when a user visits the page
- `website_visit` - Custom event to track initial visits

You can add more custom events in `app/components/FirebaseAnalytics.tsx` using:

```typescript
import { logEvent } from "firebase/analytics";
import { analytics } from "../lib/firebase";

logEvent(analytics, "custom_event_name", {
  parameter1: "value1",
  parameter2: "value2",
});
```

## Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables in your hosting platform's dashboard
2. Make sure all variables start with `NEXT_PUBLIC_` to be available in the browser
3. Redeploy your application

## Troubleshooting

- **No data showing**: Wait up to 24 hours for initial data to appear
- **Events not tracked**: Check browser console for errors
- **Build errors**: Make sure all environment variables are set correctly
- **Development**: Analytics works in both development and production

## Security Note

The Firebase API key in `NEXT_PUBLIC_FIREBASE_API_KEY` is safe to expose publicly. Firebase uses security rules to protect your data, not the API key.

For more information, visit the [Firebase Documentation](https://firebase.google.com/docs/analytics).
