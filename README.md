
## 👀 About 

PlantManager is an application developed in order to help people who have plants at home to remember to water them.

Application built on the React Natvie track from Next Level Week #05 from @rocketseat during April 19-25, 2021.

<br>

## 🚀 Technologies

- [React.js](https://reactjs.org/)
- [ReactNative](https://reactnative.dev/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)

<br>

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Expo](https://expo.io/)
- [yarn](https://yarnpkg.com/) (optional)

<br>

## Features

- [x] Authenticate with the name.
- [ ] Select plant to be reminded to water.
- [ ] Choose a time to be reminded to water the plant.
- [ ] Receive a notification reminding you to water the plant at the time you choose.
- [ ] Remove plants.
- [ ] All data is saved to the device's Local Storage.

<br>

## 💻 Getting started

```bash
# Clone the project and access the folder
$ git clone https://github.com/sestevao/plantmanager.git
$ cd plantmanager

# now predicting that you already have node.js with npm or yarn on your computer, install the global expo cli with the command
$ npm install --global expo-cli
# or
$ yarn add expo-cli

# after that, just run the following commands on separate terminals to run the fake server
npm json-server ./src/services/server.json --host localhost --port 3333 --delay 700
# or
yarn json-server ./src/services/server.json --host localhost --port 3333 --delay 700

# Finally run the project in a development environment
npm start
# or
yarn start

# and just open it on your emulator or device using Expo
# Well done, PlantManager is started!
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.