const { app, BrowserWindow } = await import("electron");
const path = await import("path");
const isDev = await import("electron-is-dev");
const { ipcMain, dialog } = await import("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    minWidth: 600,
    minHeight: 500,
    webPreferences: {
      preload: "preload.js",
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => {
    mainWindow = null;
    app.quit();
  });
  mainWindow.focus();
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.handle("dialog:question", async () => {
  const result = await dialog.showMessageBox({
    type: "question",
    title: "Question",
    defaultId: 0,
    message: "비밀번호를 저장할까요?",
    buttons: ["확인", "취소"],
  });
  return result.response;
});
ipcMain.handle("dialog:warning", async () => {
  const result = await dialog.showMessageBox({
    type: "warning",
    title: "Warning",
    defaultId: 0,
    message: "비밀번호를 확인해주세요",
    buttons: ["확인"],
  });
  return result.response;
});
