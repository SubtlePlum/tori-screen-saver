import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

const electronHandler = {
  showQuestionBox: () => ipcRenderer.invoke("dialog:question"),
  showWarningBox: () => ipcRenderer.invoke("dialog:warning"),
};

contextBridge.exposeInMainWorld("electron", electronHandler);
