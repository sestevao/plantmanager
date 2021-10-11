<div align="center">
  <img src="https://github.com/sestevao/plantmanager/blob/main/.github/icon.png?raw=true" alt="icon" width="150" />
  <pre>🌱 Application to help people take care of their plants 🌱</pre>
</div>

## 💻 About the Project

Many people have plants at home and always forget to water them. Well your problems are over, the **🌱Plant Manager🌱** came to remind you to be lazy that only stays on the PC all day, water your little platter that is dying of thirst. The app will send a notification to your cell phone every time you need to water your plant according to the type it is.

Application built on the React Native track from Next Level Week NLW#05 from @rocketseat during April 19-25, 2021.

<div align="center">
  <img src="https://github.com/sestevao/plantmanager/blob/main/.github/PlantManager.png" width=400 height=230 style="border-radius:5px; padding-right:20px;">
</div>

## 🛠️ Features

- [x] Authenticate with the name.
- [x] Select plant to be reminded to water.
- [x] Choose a time to be reminded to water the plant.
- [x] Receive a notification reminding you to water the plant at the time you choose.
- [x] Remove plants.
- [x] All data is saved to the device's Local Storage.

## 🚀 Requirements

- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [ReactNative](https://reactnative.dev/)
- [yarn](https://yarnpkg.com/) (optional)

## ✨ Technologies

- [@expo/vector-icon](https://docs.expo.io/guides/icons/)
- [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Expo Local Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [Async Storage](https://reactnative.dev/docs/asyncstorage)
- [Axios](https://aboutreact.com/react-native-axios/)
- [Date Fns](https://www.npmjs.com/package/date-fns)
- [Lottie](https://lottiefiles.com/)
- [React Navigation Stack](https://reactnavigation.org/docs/stack-navigator/) & [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [Json Server](https://github.com/typicode/json-server)

## 🎨 Layout

You can view the project layout via [this link](https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager). Remembering that you need to have a Figma account to access it.

## ✅ Getting started

Use **yarn** or **npm install** to install project dependencies. Then start the project and fake API with JSON Server.

```bash
# Clone the project and access the folder
$ gh repo clone sestevao/plantmanager
$ cd plantmanager

# now predicting that you already have node.js with npm or yarn on your
# computer, install the global expo cli with the command
$ npm install --global expo-cli
# or
$ yarn add expo-cli

# after that, just run the following commands on separate terminals to run the fake server
$ json-server ./src/services/server.json --host myIp --port 3333 --delay 700

# Finally run the project in a development environment
$ expo start

# and just open it on your emulator or device using Expo
# Well done, PlantManager is started!
```

Replace the host with your local **IP address**. Do the same for the API file inside services.

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "http://myIp:3333",
});

export default api;
```

**⚠️ Remember to use your machine's IP address**

After doing this, the metro bundler will open in your browser. Scan QrCode in Expo server interface. Some options for running the Application:

**1 - Android emulator -**
On the metro bundler page, click on "Run on Android device/emulator" and wait to load. Keep in mind that it is necessary to have gone through the process of installing the android sdk, etc.

**2 - IOS Emulator -**
On the metro bundler page, click on "Run on iOS simulator" and wait to load.

**3 - Your smartphone -**
Download the Expo app. After downloading, go back to the metro bundler page and scan the QR Code with the Expo app.

- [iOS 🍎](https://apps.apple.com/app/apple-store/id982107779)
- [Android 👾](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

For more details on how to run the app on an emulator or on your physical device, [click on here](https://react-native.rocketseat.dev/).

## 🔥 Additional functionalities

- Share care actions on social networks
- Scoring for watering done on plants
- Add plants to the listing by the user
- Add a dark theme
- Remove the question of environments
- Took the icons of the plants and put real photos, I added tips on plant lighting
- Fix some bugs in notifications, daily and weekly notifications work properly
- Add the days of the week that they have to be watered on the cards of the plants
- Correct the order in which they are displayed on screen

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<sub align="center">made with 💜 by sestevao</sub>
