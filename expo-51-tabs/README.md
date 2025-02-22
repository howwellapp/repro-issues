Repro:
```
npm install supabase --save-dev
npx supabase init
npx supabase start
```
In `lib/supabase.ts`, update `supabaseAnonKey`.

How this repo was created:
```
# https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native
npx create-expo-app -t expo-template-blank-typescript@sdk-51 expo-user-management
cd expo-user-management
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @rneui/themed
```
Populate `lib/supabase.ts`, `components/Auth.tsx`, `App.tsx` as described at
https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native
Copy `index.js` from [here](https://github.com/supabase/supabase/blob/master/examples/user-management/expo-user-management/index.js)

# Put into components/Account.tsx:
```
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, View, Alert,Text } from 'react-native'
import { Button, Input } from '@rneui/themed'
import { Session } from '@supabase/supabase-js'

export default function Account({ session }: { session: Session }) {
  return (
    <View style={styles.container}>
      <Text>{session?.user?.email} logged in</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 400,
    padding: 12,
  },
})
```
