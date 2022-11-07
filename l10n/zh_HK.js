OC.L10N.register(
    "memories",
    {
    "Memories" : "回憶",
    "Yet another photo management app" : "又一個照片管理應用程式",
    "# Memories\n\nMemories is a photo management app for Nextcloud with advanced features including:\n\n- **📸 Timeline**: Sort photos and videos by date taken, parsed from Exif data.\n- **⏪ Rewind**: Jump to any time in the past instantly and relive your memories.\n- **🤖 AI Tagging**: Group photos by people and objects using AI, powered by [recognize](https://github.com/nextcloud/recognize).\n- **🖼️ Albums**: Create albums to group photos and videos together. Then share these albums with others.\n- **🫱🏻‍🫲🏻 External Sharing**: Share photos and videos with people outside of your Nextcloud instance.\n- **📱 Mobile Support**: Works on devices of any shape and size through the web app.\n- **✏️ Edit Metadata**: Edit dates on photos quickly and easily.\n- **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n- **⚡️ Performance**: Memories is extremely fast.\n\n## 🌐 Online Demo\n\n- To get an idea of what memories looks and feels like, check out the [public demo](https://memories-demo.radialapps.com/apps/memories/).\n- The demo is read-only and may be slow (free tier VM from [Oracle Cloud](https://www.oracle.com/cloud/free/)).\n- Photo credits go to [Unsplash](https://unsplash.com/) (for individual credits, refer to each folder).\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store.\n1. Perform the recommended [configuration steps](https://github.com/pulsejet/memories/wiki/Extra-Configuration).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos." : "# 回憶\n\n回憶是一個有進階功能的相片管理 Nextcloud 應用程式，包含了以下功能：\n\n- **📸 時間軸**：從 Exif 資料中按拍攝日期對照片與影片進行排序。\n- **⏪ 倒帶**：立刻跳回過去的任何時間，重溫您的回憶。\n- **🤖 AI 標記**：使用 [recognize](https://github.com/nextcloud/recognize) 應用程式提供的 AI 功能按人物與物體對照片進行分組。\n- **🖼️ 相簿**：建立相簿以將照片與影片分組。然後將這些相簿與其他人分享。\n- **🫱🏻‍🫲🏻 外部分享**：與您 Nextcloud 站台以外的人們分享照片與影片。\n- **📱 行動裝置支援**：透過網路應用程式在任何形狀與大小的裝置上運作。\n- **✏️ 編輯詮釋資料**：快速輕鬆地編輯照片上的 Exif 日期。\n- **📦 封存**：將您不想在時間軸中看到的照片儲存在單獨的資料夾中。\n- **⚡️ 效能**：本應用程式超快。\n\n## 🌐 線上展示\n\n- 想看看本應用程式的外觀與感覺，請見[公開展示](https://memories-demo.radialapps.com/apps/memories/).\n- 展示站是唯讀的，可能會有點慢（來自 [Oracle Cloud](https://www.oracle.com/cloud/free/) 的免費層級虛擬機器）。\n- 照片則歸功於 [Unsplash](https://unsplash.com/)（若要檢視單獨的署名，請參見每個資料夾中的資訊）。\n\n\n## 🚀 安裝\n1. 從 Nextcloud 應用程式商店安裝應用程式\n1. 執行建議的[設定步驟](https://github.com/pulsejet/memories/wiki/Extra-Configuration)。\n1. 執行 `php ./occ memories:index` 以產生既有照片的詮釋資料索引。\n1. 在 Nextcloud 開啟 📷 回憶應用程式並設定包含您照片的目錄。",
    "Timeline" : "時間線",
    "Folders" : "資料夾",
    "Favorites" : "最愛",
    "Videos" : "影片",
    "Albums" : "專輯 ",
    "People" : "人物",
    "Archive" : "存檔",
    "On this day" : "當年今日",
    "Tags" : "標籤",
    "Maps" : "地圖",
    "Settings" : "設定",
    "A better photos experience awaits you" : "更好的照片體驗正等著您",
    "Choose the root folder of your timeline to begin" : "選擇您時間軸的根資料夾以開始",
    "If you just installed Memories, run:" : "若您安裝了 Memories，請執行：",
    "Continue to Memories" : "繼續使用 Memories",
    "Choose again" : "再次選擇",
    "Click here to start" : "點擊此處以開始",
    "You can always change this later in settings" : "您總是可以稍後在設定中變更此選項",
    "Choose the root of your timeline" : "選擇您時間線的根",
    "The selected folder does not seem to be valid. Try again." : "選定的資料夾似乎是無效的。請再試一次。",
    "Found {total} photos in {path}" : "在 {path} 中找到 {total} 張照片",
    "Cancel" : "取消",
    "Delete" : "刪除",
    "Remove from album" : "從相簿移除",
    "Download" : "下載",
    "Favorite" : "我的最愛",
    "Unarchive" : "取消封存",
    "Edit Date/Time" : "編輯日期／時間",
    "View in folder" : "在資料夾中檢視",
    "Add to album" : "添加至相簿",
    "Move to another person" : "移動到其他人",
    "Remove from person" : "從人中刪除",
    "You are about to download a large number of files. Are you sure?" : "您即將下載大量檔案。你確定嗎？",
    "You are about to delete a large number of files. Are you sure?" : "您即將刪除大量檔案。你確定嗎？",
    "You are about to touch a large number of files. Are you sure?" : "您將要處理大量檔案。你確定嗎？",
    "Could not remove photos from album" : "無法從相簿移除照片",
    "_{n} selected_::_{n} selected_" : ["已選擇 {n} 個"],
    "Timeline Path" : "時間線途徑",
    "Folders Path" : "資料夾路徑",
    "Show hidden folders" : "顯示隱藏資料夾",
    "Square grid mode" : "方形網格模式",
    "Choose the root for the folders view" : "選擇資料夾檢視的根",
    "Your Timeline" : "您的時間線",
    "Failed to load some photos" : "未能加載一些照片",
    "Sidebar" : "側邊欄",
    "Processing … {n}/{m}" : "處理中 ... {n}/{m}",
    "{n} photos added to album" : "已新增 {n} 張照片至相簿",
    "Search for collaborators" : "尋找協作者",
    "Search people or groups" : "搜尋人或群組",
    "Add {collaboratorLabel} to the collaborators list" : "將 {collaboratorsLabel} 添加到協作者清單",
    "No collaborators available" : "沒有可用的協作者",
    "Remove {collaboratorLabel} from the collaborators list" : "從協作者清單中移除 {collaboratorLabel}",
    "Copy the public link" : "複製公開連結",
    "Delete the public link" : "刪除公開連結",
    "Add people or groups who can edit your album" : "添加可以編輯您的相簿的用戶或群組",
    "Public link copied!" : "公開連結已複製！",
    "Copy public link" : "複製公開連結",
    "Share via public link" : "透過公用連結分享",
    "Failed to fetch collaborators list." : "擷取協作者清單失敗。",
    "Public link" : "公開連結",
    "Failed to fetch album." : "擷取相簿失敗。",
    "Failed to update album." : "更新相簿失敗。",
    "New album" : "新相簿",
    "Create new album" : "創建新相簿",
    "Edit album details" : "編輯相簿的詳細資料",
    "Could not load the selected album" : "無法載入選定的相簿",
    "Remove Album" : "移除相簿",
    "Failed to delete {name}." : "刪除 {name} 失敗。",
    "Name of the album" : "相簿名稱",
    "Location of the album" : "相簿位置",
    "Go back to the previous view." : "回到前一個檢視。",
    "Go to the add collaborators view." : "到添加協作者檢視。",
    "Back to the new album form." : "回到新相簿表格。",
    "Back" : "返回",
    "Add collaborators" : "添加協作者",
    "Save" : "保存",
    "Create album" : "創建相簿",
    "Add selection to album {albumName}" : "將選擇添加至相簿 {albumName}",
    "Create a new album." : "創建新相簿。",
    "_Share with %n user_::_Share with %n users_" : ["與 %n 個用戶分享"],
    "_%n item_::_%n items_" : ["%n 個項目"],
    "Save collaborators for this album." : "保存此相簿的協作者。",
    "Share Album" : "分享相簿",
    "Year" : "年",
    "Month" : "月",
    "Day" : "日",
    "Time" : "時間",
    "Hour" : "小時",
    "Minute" : "分鐘",
    "Update Exif" : "更新 Exif",
    "Newest" : "最新",
    "Oldest" : "最舊",
    "This feature modifies files in your storage to update Exif data." : "此功能會修改存儲中的檔案以更新 Exif 數據。",
    "Exercise caution and make sure you have backups." : "謹慎行事並確保您有備份。",
    "Loading data … {n}/{m}" : "正在加載數據 ... {n}/{m}",
    "Remove person" : "移除人",
    "Are you sure you want to remove {name}?" : "您確定要移除 {name} 嗎？",
    "Name" : "名字",
    "Rename person" : "重新命名人",
    "Update" : "更新",
    "Failed to rename {oldName} to {name}." : "重新命名 {oldName} 為 {name} 失敗。",
    "Loading …" : "加載中 …",
    "Merge {name} with person" : "將 {name} 與人合併",
    "Are you sure you want to merge {name} with {newName}?" : "您確定要將 {name} 與 {newName} 合併嗎？",
    "Too many failures, aborting" : "失敗次數過多，中止",
    "Error while moving {basename}" : "移動 {basename} 時出錯",
    "Failed to move {name}." : "移動 {name} 失敗。",
    "Move selected photos to person" : "移動選定的照片到人",
    "Are you sure you want to move the selected photos from {name} to {newName}?" : "您確定您想要從 {name} 移動選定的照片至 {newName} 嗎？",
    "Share Folder" : "分享資料夾",
    "You cannot share the root folder" : "您無法分享根資料夾",
    "Use the sidebar to share this folder." : "使用側邊欄以分享此資料夾。",
    "If you create a public link share, click on refresh and a corresponding link to Memories will be shown below." : "若您建立公開連結分享，請點擊「重新整理」，下方將會顯示對應的 Memories 連結。",
    "Refresh" : "刷新",
    "Share album" : "分享相簿",
    "Delete album" : "刪除相簿",
    "Merge with different person" : "與其他人合併",
    "Mark person in preview" : "在預覽中標記人",
    "Share folder" : "分享資料夾",
    "Move left" : "向左移動",
    "Move right" : "向右移動",
    "Shared Folder" : "分享資料夾",
    "Failed to create {albumName}." : "創建 {albumName} 失敗。",
    "Failed to rename {currentAlbumName} to {newAlbumName}." : "重新命名 {currentAlbumName} 為 {newAlbumName} 失敗。",
    "General Failure" : "一般故障",
    "Error: {msg}" : "錯誤：{msg}",
    "Failed to delete files." : "刪除檔案失敗。",
    "Failed to delete {fileName}." : "刪除 {fileName} 失敗。",
    "Failed to download some files." : "下載部份檔案失敗。",
    "Failed to favorite files." : "加入最愛失敗。",
    "Failed to favorite some files." : "將部份檔案加入最愛失敗。",
    "Failed to favorite {fileName}." : "將 {fileName} 加入最愛失敗。"
},
"nplurals=1; plural=0;");
