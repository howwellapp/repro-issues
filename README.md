```
npx create-expo-app update-bug --template expo-template-blank@sdk-51
cd update-bug
npm install -g eas-cli
eas login
eas build:configure --platform android
eas update:configure
eas build --platform android --profile development
# In App.js, add "yo 51" before "Open up App.js"
eas update --channel development --message "yo 51" --non-interactive --platform android
# Take "yo 51" out of App.js
npx expo start
# In Android emulator, tap on Extensions tab and login. Select "yo 51" update.
```
