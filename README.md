# Guru Studio: Photography Website (React + Vite)

A website for Guru Studio. The frontend is built with React and Vite. There is no backend yet.

## 1. What you need

- Windows 10 or 11
- Node.js 22 LTS from https://nodejs.org (any version 20 or newer should also work)
- VS Code from https://code.visualstudio.com
- Google Chrome

Check Node.js in PowerShell:

```powershell
node -v
npm -v
```

## 2. Extract the ZIP

1. Right-click `guru-studio.zip` and choose **Extract All…**.
2. Move the `GuruStudio` folder somewhere short, such as `C:\dev\GuruStudio`. Avoid OneDrive folders.

## 3. Open the project in VS Code

1. Open VS Code.
2. Choose **File → Open Folder…** and select the `GuruStudio` folder (the one that contains `package.json`).
3. Open a terminal with **Terminal → New Terminal**.

## 4. Install the packages (first time only)

```powershell
npm install
```

This downloads the packages the project needs and creates the `node_modules` folder on your computer.

## 5. Start the website

```powershell
npm run dev
```

Wait for the line `Local: http://localhost:5173/`. Hold Ctrl and click the address, or open Chrome and go to `http://localhost:5173`.
Press **Ctrl + C** in the terminal to stop the server.

## 6. Build the finished website

```powershell
npm run build
```

This creates a `dist` folder. It is the version you would upload to a web host.

## 7. If something breaks

Delete the packages and install them again:

```powershell
Remove-Item -Recurse -Force .\node_modules
npm install
```

## 8. Where to make changes

| What | File |
| --- | --- |
| Phone, email, address (placeholders) | `src/siteInfo.js` |
| Header and menu | `src/components/Header.jsx` |
| Hero text and background photo | `src/components/Hero.jsx` |
| About text and 25+ experience box | `src/components/About.jsx` |
| Services and their photos | `src/components/Services.jsx` |
| Gallery photos and filter categories | `src/components/Gallery.jsx` |
| Contact section and form | `src/components/Contact.jsx` |
| Footer | `src/components/Footer.jsx` |
| Colours and fonts | `src/styles/global.css` (top of the file) |
| Section styling | `src/styles/*.css` (one file per section) |

## 9. Photos and logo

- The logo is `public/images/logo.png`. The header and footer both use it.
- Photos are in `public/images/` in folders: `marriage`, `wedding`, `engagement`, `puberty`, and `birthday`.
- To use a new photo, copy it into the right folder, then add a line to the list in `src/components/Gallery.jsx`:

```jsx
{ category: 'weddings', src: '/images/wedding/w-8.jpeg', alt: 'Short description of the photo' },
```

- The original files from your ZIP are kept in the `images` folder. The website does not use that folder.

## 10. Project structure

```
GuruStudio/
├── index.html           Page shell and font links
├── package.json         Project details and package list
├── vite.config.js       Vite settings
├── public/images/       Logo and photos used by the website
├── images/              Your original files (backup, not used by the website)
└── src/
    ├── main.jsx         Starts React
    ├── App.jsx          Sets the order of the sections
    ├── siteInfo.js      Contact details
    ├── components/      One file per section
    └── styles/          One CSS file per section
```
