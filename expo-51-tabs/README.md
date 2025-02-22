Repro:
```
npm install supabase --save-dev
npx supabase init
npx supabase start
```
In `lib/supabase.ts`, update `supabaseAnonKey`.

# How this repo was created:
## Supabase user management
```
# https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native
npx create-expo-app -t expo-template-blank-typescript@sdk-51 expo-user-management
cd expo-user-management
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @rneui/themed
```
Populate `lib/supabase.ts`, `components/Auth.tsx`, `App.tsx` as described at
https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native
Copy `index.js` from [here](https://github.com/supabase/supabase/blob/master/examples/user-management/expo-user-management/index.js)
Copy `components/Accounts.tsx` from this repo.

## Expo router
Install expo router (manual installation): https://docs.expo.dev/router/installation/#manual-installation
Put in `app/index.js`:
```
import { Text } from 'react-native';

import App from '../App';

export default function Page() {
  return App();
}
```

## Expo router tabs
Set up tabs from https://docs.expo.dev/router/advanced/tabs/
