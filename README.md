# expo-app

A brief description of your React Native application built with Expo.

## ✨ Features

*   **Framework:** React Native with Expo SDK ~52
*   **Routing:** Expo Router (with Typed Routes enabled)
*   **Styling:** NativeWind (Tailwind CSS for React Native)
*   **State Management:** Zustand
*   **Language:** TypeScript
*   **Architecture:** New Architecture Enabled

## 🛠 Tech Stack

*   [React Native](https://reactnative.dev/)
*   [Expo](https://expo.dev/) (~52)
*   [Expo Router](https://docs.expo.dev/router/introduction/)
*   [NativeWind](https://www.nativewind.dev/)
*   [Zustand](https://github.com/pmndrs/zustand)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Lucide Icons](https://lucide.dev/)

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [Bun](https://bun.sh/) (or npm/yarn)
*   [Expo CLI](https://docs.expo.dev/get-started/installation/): `bun install -g expo-cli` (or `npm install -g expo-cli`)
*   A compatible device (iOS/Android) or simulator/emulator.

## 🚀 Getting Started

Follow these steps to get your development environment set up:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd expo-app
    ```

2.  **Install dependencies:**
    Using Bun (recommended based on `bun.lock`):
    ```bash
    bun install
    ```
    Alternatively, using npm or yarn:
    ```bash
    # npm install
    # yarn install
    ```

3.  **Run the application:**

    *   **On iOS/Android (using Expo Go):**
        ```bash
        bun start
        ```
        This will start the Metro bundler and provide a QR code. Scan it with the Expo Go app on your device. The `--tunnel` flag helps connect devices not on the same local network.

    *   **On Web:**
        ```bash
        bun run start-web
        ```
        This will open the application in your default web browser.

## 📂 Folder Structure

Here's a brief overview of the project structure:

```
.
├── app/              # Expo Router routes (screens and layouts)
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # Reusable UI components
├── constants/        # Constant values (colors, styles, configurations)
├── data/             # Static data or mock data
├── stores/           # Zustand state management stores
├── .gitignore
├── app.json          # Expo configuration file
├── bun.lock          # Bun lockfile
├── package.json      # Project metadata and dependencies
├── README.md         # You are here!
├── tsconfig.json     # TypeScript configuration
└── vercel.json       # Vercel deployment configuration (if applicable)
```

## Contributing

Contributions are welcome! Please follow the standard procedures for contributing to open-source projects (e.g., fork, branch, pull request).

## License

Specify your project's license here (e.g., MIT). 