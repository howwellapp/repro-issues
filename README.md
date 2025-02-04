```
npx create-expo-app update-bug --template expo-template-blank@sdk-51
cd update-bug
npm install -g eas-cli
eas login
eas build:configure --platform android
npx expo install expo-updates
eas build --platform android --profile development
# In Android emulator, open app. Tap on Extensions tab and login.
# In App.js, add "yo" before "Open up App.js"
eas update --channel development --message "yo" --non-interactive --platform android
# In Android emulator, no updates in Extensions tab.
# Since we can't open in Extensions tab, open from expo web console instead. In expo web console, open update and click on Preview. Will see this error:
```
<img width="523" alt="image" src="https://github.com/user-attachments/assets/a300f041-06b3-4711-b4aa-39802b4224f8" />

