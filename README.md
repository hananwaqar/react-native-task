# Project Overview

This repository contains a scalable architecture that integrates with mono repos to ensure project security and facilitate code reuse.

## Redux Tool/Kit Architecture

The repository incorporates a well-structured and maintainable Redux toolkit architecture, making state management more manageable and efficient. It leverages middleware, including `thunk`, `persist`, `reharadrate`, and `flush`, to handle asynchronous actions and enable data persistence across sessions. Redux slices are used to encapsulate related reducer logic, ensuring a clean separation of concerns and enhancing code organization.

## Dark and Light Theme

The project features a visually appealing user interface with seamless support for both dark and light themes. The Redux toolkit architecture empowers users to easily switch between themes, enhancing the overall user experience. Dynamic theming is achieved through the use of Redux slices, allowing components to respond in real-time to theme changes.

## Multilingual Support

- This repository goes beyond basic localization by offering advanced multilingual support using `react-i18next`.
- Users can effortlessly switch between different languages, such as English and Arabic, without restarting the application.
- The integration of `react-i18next` ensures that the app's text content remains consistent and engaging for users of various languages.

## Contact Screen and Bottom Bar

- The project showcases a well-designed contact screen, making it simple for users to interact with the app's contact information.
- Additionally, a bottom bar provides convenient navigation and access to essential features.
- The responsive design ensures a smooth user experience across various devices and screen sizes.

## Language Switching

- Language switching functionality is thoughtfully implemented, empowering users to change the app's language at their convenience.
- By interacting with the left side icon in the navbar, users can seamlessly switch between supported languages, making the app accessible to a broader audience.

## Independent Components

- This repository promotes code reusability and maintainability by housing independent components within a mono repo.
- The card list and profile card components can be effortlessly integrated into other projects, reducing development time and promoting consistency in UI design.

## Automated Testing

- To ensure the app's stability and robustness, a comprehensive test suite has been developed using `jest`.
- By employing automated testing, potential issues are detected early, preventing regressions, and ensuring a reliable and high-quality application.
- Dummy data is thoughtfully crafted to simulate real-world scenarios and edge cases.

## Multi-Variant Feature

The project includes a multi-variant feature with `dev`, `prod`, and `staging` variants. The configuration for each variant is set up in the `package.json` file. You can use the variants with the following commands:

- `npm run android-dev` for the development variant on Android.
- `npm run android-staging` for the staging variant on Android.
- `npm run android-prod` for the production variant on Android.

For iOS, you can choose the scheme from Xcode to use the desired variant.

## Getting Started

To get started with the project:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Run the project using `npm start`.

## Contribution

We welcome contributions from the developer community. Whether it's suggesting new features, reporting bugs, or submitting pull requests, your input is valuable in shaping the project's future.

## License

This project is licensed under the [MIT License](LICENSE).

---
