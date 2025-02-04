```
npx create-expo-app@latest expo-52-bug
cd expo-52-bug
npm install -g eas-cli
eas login
eas build:configure
# ?
npx expo install expo-updates
eas build --platform android --profile development
# In app/\(tabs\)/index.tsx, add "yoyo" after "Welcome"
eas update --channel development --message "yoyo" --non-interactive --platform android
```
