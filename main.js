var _0x34d5 = ["ogario", "jQuery", "id", "x", "y", "lastX", "lastY", "mass", "clanTag", "setNick", "skinURL", "length", "color", "alive", "updateTime", "now", "canvas", "getElementById", "mousemove", "play", "cursorTracking", "setCursorPosition", "clientX", "clientY", "addEventListener", "MC", "showNickDialog", "_showNickDialog", "apply", "show", "#main-panel", "onkeydown", "_showStatsDialog", "showStatsDialog", "_onPlayerSpawn", "onPlayerSpawn", "sendPlayerSpawn", "_onPlayerDeath", "onPlayerDeath", "hide", ".menu-panel", "skipStats", "#stats", "sendPlayerDeath", "playerX", "playerY", "updateDeathLocations", "disabled", "prop", ".btn-spectate", "_onAgarioCoreLoaded", "onAgarioCoreLoaded", "_wasInitialized", "wasInitialized", "getDefaultSettings", "innerWidth", "innerHeight", "#helloContainer", "menuHeight", "min", "round", "translate(-50%, 0%) scale(", ")", "transform", "css", "-ms-transform", "-webkit-transform", "top", "", "px", "innerW", "innerH", "exit", "/ogario", "pathname", "location", "history", "replaceState", "title", "document", "/", "hash", "NREUM", "core", "http://agar.io/agario.core.js", "$1 var ogario=$2.ogario,gameCtx=null;", "replace", "if($2.id===\"canvas\"){$1 gameCtx=$2;}else{$1}", "$1if(ogario.pause){$2=ogario.innerW/2*ogario.canvasScale; $3=ogario.innerH/2*ogario.canvasScale;}$4", "$1 ogario.getString=$2;", "$1 if(ogario.setMapCoords){ogario.setMapCoords($3,$5,$7,$9,$2,$8);}", "if($1<ogario.zoomResetValue){", "if(!ogario.autoZoom){$3=ogario.zoomValue;} $1$2 (ogario.zoomSpeedValue||0.9) $5 ogario.zoomValue=$1;", "$1 if(!ogario.autoZoom){$3=ogario.zoomValue;}else{$2}$5", "ogario.playerCellsMass=[]; $1$2; ogario.playerCellsMass.push($2)$3 ogario.playerMass=$5; if(ogario.calculateMass){ogario.calculateMass();}", "$1 ogario.viewScale=$2; ogario.playerX=$4; ogario.playerY=$5; if(ogario.customDraw){ogario.customDraw(gameCtx);}", "$1$6", "{}", "$1$2{if(ogario.drawGrid){ogario.drawGrid(gameCtx);} return;", "ogario.cellMemOffset=$2; $1 if(ogario.customSkins){$4=0;}else{$3}else", "var nick=null,color=null,skin=null,cellSize=null,isFood=false,isVirus=false,isPlayerCell=false,skipCell=false;do if($1=1,$1){cellSize=$4;$2 if(!$3){isFood=true;if(!ogario.showFood){break;} if(ogario.autoHideFood&&ogario.playerMass>1000){ogario.showFood=false;} if(!ogario.rainbowFood){ogario.foodCache.push({x:$6,y:$7,size:cellSize});break;}} if(ogario.hideSmallBots&&cellSize<=36){skipCell=true;break;}$5$8 if($3){if(gameCtx){ogario.globalApha=gameCtx.globalAlpha;if(gameCtx.lineJoin===\'miter\'){isVirus=true;if(ogario.play&&ogario.virColors&&ogario.setVirusColor&&ogario.setVirusStrokeColor){gameCtx.fillStyle=ogario.setVirusColor(cellSize);gameCtx.strokeStyle=ogario.setVirusStrokeColor(cellSize);}else{gameCtx.fillStyle=ogario.virusColor;gameCtx.strokeStyle=ogario.virusStrokeColor;}gameCtx.stroke();if(ogario.transparentViruses){gameCtx.globalAlpha*=ogario.virusAlpha;} if(ogario.virusesRange&&ogario.play){ogario.virusesCache.push({x:$6,y:$7,size:cellSize});}}else{if(ogario.nameMemOffset&&ogario.cellMemOffset&&ogario.getString){if((a[ogario.cellMemOffset+ogario.nameMemOffset+4>>0]&1)==0|0){nick=ogario.getString(ogario.cellMemOffset+ogario.nameMemOffset+5);}else{nick=ogario.getString(c[ogario.cellMemOffset+ogario.nameMemOffset+12>>2]|0);}} if(ogario.rgb2Hex){color=ogario.rgb2Hex($10,$11,$12);} if(nick&&nick.length>0&&color){if(ogario.showCustomSkins&&ogario.customSkins&&ogario.getCustomSkin){skin=ogario.getCustomSkin(nick);}} if(ogario.play){if(ogario.cellMemOffset&&ogario.idOffset&&ogario.idMemOffset){var idA=c[ogario.cellMemOffset+ogario.idOffset>>2]|0;var idB=c[ogario.idMemOffset]|0;var idC=c[ogario.idMemOffset+1]|0;loop:do{if((idB|0)!=(idC|0)){while(true){if((c[idB>>2]|0)==(idA|0)){break loop;}idB=idB+4|0;if((idB|0)==(idC|0)){idB=idC;break;}}}}while(false);isPlayerCell=(idB|0)!=(idC|0);} if(isPlayerCell&&ogario.playerCells){ogario.playerCells.push({x:$6,y:$7,size:cellSize});ogario.playerColor=color;} if(((ogario.oppColors&&!ogario.oppRings)||ogario.myCustomColor)&&ogario.setOppColor){gameCtx.fillStyle=ogario.setOppColor(cellSize,isPlayerCell);}else{$9} if(!isPlayerCell&&(ogario.splitRange||ogario.oppRings)&&ogario.cacheCells){ogario.cacheCells($6,$7,cellSize);}}else{$9} if(ogario.transparentCells){gameCtx.globalAlpha*=ogario.cellsAlpha;}}$13 gameCtx.globalAlpha=ogario.globalApha;if(((ogario.transparentSkins||(ogario.play&&ogario.oppColors))&&!(isPlayerCell&&!ogario.myTransparentSkin))||isPlayerCell&&ogario.myTransparentSkin){gameCtx.globalAlpha*=ogario.skinsAlpha;} if(skin){gameCtx.save();gameCtx.clip();gameCtx.drawImage(skin,$6-cellSize,$7-cellSize,2*cellSize,2*cellSize);gameCtx.restore();}}else{$9$13}break;", "if(gameCtx&&ogario){gameCtx.globalAlpha=ogario.globalApha;}$1 if(!(skipCell||(ogario.autoHideCellsInfo&&ogario.setAutoHideCellsInfo&&cellSize&&!isFood&&!isVirus&&!isPlayerCell&&ogario.setAutoHideCellsInfo(cellSize)))){$2}", "$1 ogario.idOffset=$2; ogario.idMemOffset=$3; $4", "$1 1.5 $2", "$1 if($2<0.3){$2=0.3}", "$1 $2*=2;", "do if(($2&&!($1&&ogario.hideMyName))||!ogario.nameMemOffset){", "$1 ogario.nameMemOffset=$2;", "$140.0||$5&&ogario.hideMyMass$3$6", "script", "createElement", "textContent", "async", "appendChild", "body", "text", "GET", "ajax", "en", "Start", "Ustawienia", "Auto zoom", "Autoukrywanie nazw i masy", "Autoukrywanie pokarmu", "Ukryj wÅ‚asnÄ… nazwÄ™", "Ukryj wÅ‚asnÄ… masÄ™", "WÅ‚asne skiny", "\x4D\xF3\x6A\x20\x70\x72\x7A\x65\x7A\x72\x6F\x63\x7A\x79\x73\x74\x79\x20\x73\x6B\x69\x6E", "\x4D\xF3\x6A\x20\x77\u0142\x61\x73\x6E\x79\x20\x6B\x6F\x6C\x6F\x72", "Przezroczyste kulki", "Przezroczyste wirusy", "Przezroczyste skiny", "Siatka", "Sektory w tle", "Granice mapy", "PokaÅ¼ minimapÄ™", "Kolorowy pokarm", "\x4B\x6F\x6C\x6F\x72\x79\x20\x70\x72\x7A\x65\x63\x69\x77\x6E\x69\x6B\xF3\x77", "\x52\x69\x6E\x67\x69\x20\x70\x72\x7A\x65\x63\x69\x77\x6E\x69\x6B\xF3\x77", "\x4B\x6F\x6C\x6F\x72\x79\x20\x77\x69\x72\x75\x73\xF3\x77", "ZasiÄ™g podziaÅ‚u", "\x5A\x61\x73\x69\u0119\x67\x20\x77\x69\x72\x75\x73\xF3\x77", "\x4F\x62\x77\xF3\x64\x6B\x69\x20\x74\x65\x6B\x73\x74\x75", "Åšledzenie kursora", "Split myszkÄ…", "Feed myszkÄ…", "\x4F\x64\x77\x72\xF3\u0107\x20\x6B\x6C\x61\x77\x69\x73\x7A\x65\x20\x6D\x79\x73\x7A\x6B\x69", "Ukryj czat", "PokaÅ¼ top 5 teamu", "PokaÅ¼ aktualny czas", "PokaÅ¼ statsy", "Statsy: Masa", "Statsy: STE", "Statsy: n/16", "Statsy: FPS", "\x53\x6B\x72\xF3\x74\x79\x20\x6B\x6C\x61\x77\x69\x73\x7A\x6F\x77\x65", "\x41\x62\x79\x20\x75\x73\x74\x61\x77\x69\u0107\x20\x73\x6B\x72\xF3\x74\x20\x6B\x6C\x61\x77\x69\x73\x7A\x6F\x77\x79\x20\x6B\x6C\x69\x6B\x6E\x69\x6A\x20\x6E\x61\x20\x63\x7A\x65\x72\x77\x6F\x6E\x79\x6D\x20\x70\x6F\x6C\x75\x20\x69\x20\x6E\x61\x63\x69\u015B\x6E\x69\x6A\x20\x77\x79\x62\x72\x61\x6E\x79\x20\x6B\x6C\x61\x77\x69\x73\x7A\x2E", "\x41\x62\x79\x20\x75\x73\x75\x6E\u0105\u0107\x20\x73\x6B\x72\xF3\x74\x20\x6B\x6C\x61\x77\x69\x73\x7A\x6F\x77\x79\x20\x6B\x6C\x69\x6B\x6E\x69\x6A\x20\x6E\x61\x20\x63\x7A\x65\x72\x77\x6F\x6E\x79\x6D\x20\x70\x6F\x6C\x75\x20\x69\x20\x6E\x61\x63\x69\u015B\x6E\x69\x6A\x20\x6B\x6C\x61\x77\x69\x73\x7A\x20\x44\x45\x4C\x45\x54\x45\x2E", "\x4D\x6F\u017C\x6C\x69\x77\x65\x20\x6B\x6F\x6D\x62\x69\x6E\x61\x63\x6A\x65\x20\x73\x6B\x72\xF3\x74\xF3\x77\x20\x6B\x6C\x61\x77\x69\x73\x7A\x6F\x77\x79\x63\x68\x20\x7A\x20\x75\u017C\x79\x63\x69\x65\x6D\x20\x6B\x6C\x61\x77\x69\x73\x7A\x79\x20\x43\x54\x52\x4C\x20\x6F\x72\x61\x7A\x20\x41\x4C\x54\x2E", "Feed", "Szybki feed", "PodziaÅ‚", "\x50\x6F\x64\x77\xF3\x6A\x6E\x79\x20\x70\x6F\x64\x7A\x69\x61\u0142", "PodziaÅ‚ na 16", "Pauza kulki", "PokaÅ¼/ukryj top 5 teamu", "PokaÅ¼/ukryj aktualny czas", "PokaÅ¼/ukryj zasiÄ™g podziaÅ‚u", "PokaÅ¼/ukryj zasiÄ™g podziaÅ‚u z ringami", "\x50\x6F\x6B\x61\u017C\x2F\x75\x6B\x72\x79\x6A\x20\x6B\x6F\x6C\x6F\x72\x79\x20\x70\x72\x7A\x65\x63\x69\x77\x6E\x69\x6B\xF3\x77", "PrzeÅ‚Ä…cz skiny (wÅ‚asne/standardowe)", "PokaÅ¼/ukryj skiny", "PokaÅ¼/ukryj statystyki gry", "PrzeÅ‚Ä…cz kulkÄ™ (najmniejsza/najwiÄ™ksza)", "PokaÅ¼/ukryj pokarm", "PokaÅ¼/ukryj siatkÄ™", "PokaÅ¼/ukryj czat", "PokaÅ¼/ukryj HUD", "Kopiuj topkÄ™", "PokaÅ¼/ukryj topkÄ™", "Reset zoomu", "Zoom - poziom", "PrzeÅ‚Ä…cz miejsce Å›mierci", "PokaÅ¼ historiÄ™ czatu / CzyÅ›Ä‡ czat", "PokaÅ¼/ukryj sektory w tle", "PokaÅ¼/ukryj maÅ‚e boty", "PokaÅ¼/ukryj nazwy", "PokaÅ¼/ukryj masÄ™", "PokaÅ¼/ukryj minimapÄ™", "Napisz wiadomoÅ›Ä‡ na czacie", "Szybki respawn", "Komendy", "Feeduj!", "Dziel siÄ™!", "Pomocy na %currentSector%!", "\x57\x72\xF3\x67\x20\x6E\x61\x20\x25\x63\x75\x72\x72\x65\x6E\x74\x53\x65\x63\x74\x6F\x72\x25\x21", "Zabij pomocnika!", "Strzel z wirusa!", "Zjedz wirusa!", "ZjebaÅ‚em, wybacz.", "Ja pierdolÄ™...", "Kurwa maÄ‡!", "Trick!", "Lewo!", "\x47\xF3\x72\x61\x21", "Prawo!", "\x44\xF3\u0142\x21", "Zapisz komendy", "WyglÄ…d", "Motyw", "Typ motywu", "Ciemny motyw", "Jasny motyw", "\x4B\x6F\x6C\x6F\x72\x20\x67\u0142\xF3\x77\x6E\x79", "Kolor tÅ‚a", "Kolor pokarmu", "\x4B\x6F\x6C\x6F\x72\x20\x73\x69\x61\x74\x6B\x69\x20\x2F\x20\x73\x65\x6B\x74\x6F\x72\xF3\x77", "Kolor granic", "Kolor tekstu komend", "\x4E\x61\x67\u0142\xF3\x77\x65\x6B\x20\x22\x4C\x65\x61\x64\x65\x72\x62\x6F\x61\x72\x64\x22", "WyÅ›rodkowana topka", "\x53\x74\x61\x74\x79\x73\x74\x79\x6B\x69\x20\x6E\x61\x20\x67\xF3\x72\x7A\x65", "Siatka minimapy", "Czat jest aktywny!", "Czat zostaÅ‚ ukryty!", "Skiny sÄ… widoczne!", "Skiny zostaÅ‚y ukryte!", "MaÅ‚e boty sÄ… widoczne!", "MaÅ‚e boty zostaÅ‚y ukryte!", "Profil", "Zapisz ustawienia", "Resetuj ustawienia", "Zamknij", "Napisz wiadomoÅ›Ä‡", "Aktywne party", "PAUZA!", "OdwiedÅº", "OGARio by szymy: Czy na pewno chcesz opuÅ›cic grÄ™?", "Settings", "Auto hide names and mass", "Auto hide food", "Hide my name", "Hide my mass", "Custom skins", "My transparent skin", "My custom color", "Transparent cells", "Transparent viruses", "Transparent skins", "Show grid", "Show background sectors", "Show map borders", "Show minimap", "Rainbow food", "Opponents colors", "Opponents rings", "Viruses colors", "Split range", "Viruses range", "Text stroke", "Cursor tracking", "Mouse split", "Mouse feed", "Invert mouse buttons", "Hide chat", "Show team top 5", "Show current time", "Show game stats", "Game stats: Mass", "Game stats: STE", "Game stats: n/16", "Game stats: FPS", "Hotkeys", "To assign a hotkey click on the red field and press your chosen key.", "To delete a hotkey click on the red field and press the DELETE key.", "Possible key combinations with the CTRL and ALT keys.", "Macro feed", "Split", "Double split", "Split 16", "Cell pause", "Show/hide team top 5", "Show/hide current time", "Show/hide split range", "Show/hide split indicators", "Show/hide opponents colors", "Toggle skins (custom/default)", "Show/hide skins", "Show/hide game stats", "Toggle own cells (smallest/biggest)", "Show/hide food", "Show/hide grid", "Show/hide chat", "Show/hide HUD", "Copy leaderboard", "Show/hide leaderboard", "Reset zoom", "Zoom level", "Toggle death location", "Show chat history / Clear chat", "Show/hide background sectors", "Show/hide small bots", "Show/hide names", "Show/hide mass", "Show/hide minimap", "Enter chat message", "Quick respawn", "Commands", "Feed me!", "Split into me!", "Need backup at %currentSector%!", "Enemy spotted at %currentSector%!", "Need a teammate!", "Tank the virus!", "Eat the virus!", "Let\'s bait!", "Fake tricksplit!", "Fuck!", "Tricksplit!", "Left!", "Up!", "Right!", "Bottom!", "Save commands", "Theme", "Theme preset", "Theme type", "Dark theme", "Light theme", "Main color", "Background color", "Food color", "Grid / sectors color", "Borders color", "Commands text color", "\"Leaderboard\" header", "Centered leaderboard", "Game stats at the top", "Minimap grid", "Chat is visible!", "Chat is hidden!", "Skins are visible!", "Skins are hidden!", "Small bots are visible!", "Small bots are hidden!", "Profile", "Save settings", "Reset to default", "Close", "Active partys", "PAUSE!", "Visit", "OGARio by szymy: Are you sure you want to quit the game?", "comm1", "comm2", "comm3", "comm4", "comm5", "comm6", "comm7", "comm8", "comm9", "comm0", "comm10", "comm11", "comm12", "comm13", "comm14", "&amp;", "&lt;", "&gt;", "&quot;", "&#39;", "&#x2F;", "OGARio Gold", "#b5a642", "#000000", "#111111", "#998c36", "#ffffff", "#666666", "OGARio Orange", "#ff7800", "#292929", "#e16400", "SniiKz\'s Style", "#ff90e8", "#08151d", "#5a00ff", "HKG Style", "#651fff", "Agario Light", "#f2fbff", "#ced6d9", "#858a8c", "#2de52d", "#33ff33", "Agario Dark", "#333333", "#999999", "ogario-orange", "prototype", "ogarioThemeSettings", "getItem", "localStorage", "parse", "hasOwnProperty", "ogarioTheme", "stringify", "setItem", "<div class=\"color-box theme-box\"><span class=\"title\">", "themePreset", "</span><select id=\"theme-presets\" class=\"form-control\"></select></div> <div class=\"color-box theme-box\"><span class=\"title\">", "themeType", "</span><div id=\"theme-type\" class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn btn-default\"><input type=\"radio\" name=\"options\" id=\"darkTheme\">", "darkTheme", "</label><label class=\"btn btn-default\"><input type=\"radio\" name=\"options\" id=\"lightTheme\">", "lightTheme", "</label></div></div> <div class=\"color-box\"><span class=\"title\">", "mainColor", "</span><div class=\"input-group main-color-picker\"><input type=\"text\" value=\"", "\" id=\"mainColor\" class=\"form-control\" /><span class=\"input-group-addon\"><i></i></span></div></div> <div class=\"color-box\"><span class=\"title\">", "bgColor", "</span><div class=\"input-group background-color-picker\"><input type=\"text\" value=\"", "\" id=\"bgColor\" class=\"form-control\" /><span class=\"input-group-addon\"><i></i></span></div></div> <div class=\"color-box\"><span class=\"title\">", "foodColor", "</span><div class=\"input-group food-color-picker\"><input type=\"text\" value=\"", "\" id=\"foodColor\" class=\"form-control\" /><span class=\"input-group-addon\"><i></i></span></div></div> <div class=\"color-box\"><span class=\"title\">", "gridColor", "</span><div class=\"input-group grid-color-picker\"><input type=\"text\" value=\"", "\" id=\"gridColor\" class=\"form-control\" /><span class=\"input-group-addon\"><i></i></span></div></div> <div class=\"color-box\"><span class=\"title\">", "bordersColor", "</span><div class=\"input-group borders-color-picker\"><input type=\"text\" value=\"", "\" id=\"bordersColor\" class=\"form-control\" /><span class=\"input-group-addon\"><i></i></span></div></div> <div class=\"color-box\"><span class=\"title\">", "commandsTextColor", "</span><div class=\"input-group text-color-picker\"><input type=\"text\" value=\"", "\" id=\"commandsTextColor\" class=\"form-control\" /><span class=\"input-group-addon\"><i></i></span></div></div></div>", "append", "#theme", "<option value=\"", "\">", "name", "</option>", "#theme-presets", "preset", "val", "changeThemePreset", "change", "changeColor.colorpicker", "toHex", "setMainColor", "on", "hex", "colorpicker", "#theme .main-color-picker", "background-color", "#theme .background-color-picker", "#theme .food-color-picker", "#theme .grid-color-picker", "#theme .borders-color-picker", "#theme .text-color-picker", "<div id=\"theme-options\"><label><input type=\"checkbox\" onchange=\"setThemeSettings(\'centeredLb\', $(this).is(\':checked\'));\" id=\"centeredLb\">", "centeredLb", "</label><label><input type=\"checkbox\" onchange=\"setThemeSettings(\'normalLb\', $(this).is(\':checked\'));\" id=\"normalLb\">", "normalLb", "</label><label><input type=\"checkbox\" onchange=\"setThemeSettings(\'fpsAtTop\', $(this).is(\':checked\'));\" id=\"fpsAtTop\">", "fpsAtTop", "</label><label><input type=\"checkbox\" onchange=\"setThemeSettings(\'miniMapGrid\', $(this).is(\':checked\'));\" id=\"miniMapGrid\">", "miniMapGrid", "</label></div>", "<button class=\"btn btn-block btn-success btn-save\" onclick=\"saveThemeSettings();\">", "saveSett", "</button>", "attr", "input:checked", "find", "changeThemeType", "#theme-type", "#color", ".skin", "setOptions", "checked", "#centeredLb", "#normalLb", "#fpsAtTop", "#miniMapGrid", "customStyle", "head", "appendTo", "<style type=\'text/css\'>", ".main-color, .menu-tabs .active, center, #cancel-party-btn { color: ", "; } #main-menu, .agario-side-panel { border-color: ", "} .toast-warning { background-color: ", "; } .toast-warning .toast-message { color: ", "; }", "html", "hud-text-center", "addClass", "#leaderboard-hud", "removeClass", "Leaderboard", "ogario.ovh", "#leaderboard-hud h4", "hud-top", "hud-bottom", "#stats-hud", "setTheme", "setValue", "virusColor", "virusStrokeColor", "opacity", "0.1", "#minimap-sectors", "0.25", "setCenteredLb", "setNormalLb", "setFpsAtTop", "resetMiniMapSectors", "active", "label", "closest", "#lightTheme", "#darkTheme", "loadThemeSettings", "init", "setThemeSettings", "saveThemeSettings", "saveSettings", "I <3 szymy", "â“‚", "PI", "nick", "fillStyle", "#FFFFFF", "font", "10px Arial", "textAlign", "center", "fillText", "beginPath", "pi2", "arc", "closePath", "fill", "OGARio by szymy", "v2.0.3", "ws://164.132.227.101:3000", "b2dhcmlvLm92aA==", "mapOffsetX", "mapOffsetY", "eject", "feedInterval", "feed", "split", "customSkins", "selectBiggestCell", ":party", "gameMode", "showTop5", "setTop5", "#top5-hud", "showTime", "#time-hud", "displayTime", "splitRange", "showSplitInd", "oppRings", "oppColors", "noSkins", "setSkins", "showCustomSkins", "showSkinsMsg", "displayChatInfo", "toggle", "showFood", "#overlays-hud", "showGrid", ":teams", "showBgSectors", "hideSmallBots", "hideSmallBotsMsg", "noNames", "setNames", "showMass", "setShowMass", "showMiniMap", "setMiniMap", "#minimap-hud", "zoomResetValue", "zoomValue", "retryResp", "click", ".btn-play", "tryResp", "#join-party-btn", "<input>", "select", "#leaderboard-positions", "copy", "execCommand", "remove", "hideChat", "#message", "hideChatMsg", "pause", "#pause-hud", "A", "info", "B", "error", "ogarioSettings", "ogarioPlayerProfiles", "Profile #", "push", "ogarioSelectedProfile", "selectedProfile", "fadeIn", "-default", "#", "empty", "crossOrigin", "Anonymous", "onload", "changeSkinPreview", "src", "prev-profile", "setSkinPreview", "skin-preview", "next-profile", "#nick", "#clantag", "#skin", "setPlayerSettings", "setProfile", "<div id=\"main-menu\" class=\"agario-panel\"><ul class=\"menu-tabs ", "\"><li class=\"start-tab active\"><a href=\"#main-panel\" class=\"active\">", "start", "</a></li><li class=\"profile-tab\"><a href=\"#profile\">", "profile", "</a></li><li class=\"settings-tab\"><a href=\"#og-settings\">", "settings", "</a></li><li class=\"theme-tab\"><a href=\"#theme\">", "theme", "</a></li></ul><div id=\"main-panel\" class=\"menu-panel\"></div><div id=\"profile\" class=\"menu-panel\"></div><div id=\"og-settings\" class=\"menu-panel\"></div><div id=\"theme\" class=\"menu-panel\"></div></div>", "before", "#mainPanel", "<div id=\"profiles\"><div id=\"prev-profile\"></div><div id=\"skin-preview\"></div><div id=\"next-profile\"></div></div>", "#mainPanel div[role=form]", "#main-panel div[role=form] .form-group:first", "<input id=\"clantag\" class=\"form-control\" placeholder=\"Tag Clan“‚\" maxlength=\"10\" /><div class=\"input-group nick\"></div>", ".nick", "<span class=\"input-group-btn\"><button id=\"stream-mode\" class=\"btn active icon-eye\"></button></span>", "<div class=\"input-group skin\"><input id=\"skin\" class=\"form-control\" placeholder=\"Skin URL (imgur.com direct link)\"  maxlength=\"60\" /><input type=\"hidden\" id=\"color\" value=\"", "\" maxlength=\"7\" /><span class=\"input-group-addon\"><i></i></span><span class=\"input-group-btn\"><button id=\"hide-url\" class=\"btn active icon-eye\"></button></span></div>", "after", "insertAfter", "#locationKnown, #locationUnknown", "#agario-main-buttons", ".btn-spectate, .btn-logout", "<br clear=\"both\"/>", "<div id=\"ogario-party\"><input id=\"joinPartyToken\" class=\"partyToken form-control\" placeholder=\"Party token\" /><button class=\"btn btn-info btn-copy-token copy-party-token\">Copy</button></div>", "#helloContainer div[role=form]", "#ogario-party", "#create-party-btn, #join-party-btn", "btn-success", "<button id=\"og-reconnect-btn\" class=\"btn btn-success icon-loop2\"></button>", "#og-settings", "#settingsChoice, #options", "menu-panel", "#main-menu", "statsContinue2", "#statsContinue", "<div id=\"version\" class=\"main-color\">", "visit", " <a href=\"http://ogario.ovh\" target=\"_blank\">ogario.ovh</a> | ", "version", "</div>", ".center-container", "removeAttr", "#leftPanel, #rightPanel", "agario-side-panel", "#profile", ".agario-profile-panel, .agario-panel-freecoins, .agario-shop-panel", ".left-container", "<div class=\"agario-panel ogario-yt-panel\"><h5 class=\"main-color\">Team OGARio (tag: â“‚)</h5><div class=\"g-ytsubscribe\" data-channelid=\"UCaWiPNJWnhzYDrBQoXokn6w\" data-layout=\"full\" data-theme=\"dark\" data-count=\"default\"></div></div>", ".agario-shop-panel", "<div class=\"agario-panel radio-panel\"><h5 class=\"main-color\">Radio</h5><audio src=\"http://192.99.0.170:5529/;\" controls></audio></div>", ".ogario-yt-panel", "#tags-container", ".agario-party-6", ".right-container", "<div class=\"agario-party\"></div>", ".agario-party", ".agario-party h4, #cancel-party-btn", ".btn-settings, .text-muted, .tosBox, .agario-promo, #agario-web-incentive, span[data-itr=\'option_dark_theme\'], #options #darkTheme", "display", "none", "#advertisement, #adbg, #a320x250, #g320x250, #s320x250, #adsBottom", "agario-panel", "#advertisement", "1", "0", "-100px", "#adsBottom", "<input id=\"zoom-speed\" type=\"range\" min=\"0.79\" max=\"0.99\" value=\"", "zoomSpeedValue", "\" step=\"0.01\"><div id=\"zoom-speed-value\">Zoom speed: ", "prepend", "Zoom speed: ", "#zoom-speed-value", "#zoom-speed", "<div id=\"og-options\"></div>", "<label><input type=\"checkbox\" onchange=\"setSettings(\'", "\', $(this).is(\':checked\'));\" id=\"", "</label>", "#og-options", "each", "#og-settings input:checkbox", "setThemeMenu", "<div id=\"overlays-hud\"><div id=\"stats-hud\" class=\"hud main-color\"></div> <div id=\"top5-hud\" class=\"hud\"><h5 class=\"main-color\">Team top 5</h5><ol id=\"top5p-hud\"></ol></div> <div id=\"time-hud\" class=\"hud main-color\"></div> <div id=\"pause-hud\" class=\"hud\">", "</div> <div id=\"leaderboard-hud\" class=\"hud-b\"><h4 class=\"main-color\">ogario.ovh</h4><div id=\"leaderboard-positions\"></div></div> <div id=\"minimap-hud\" class=\"hud-b\"><canvas id=\"minimap-sectors\"></canvas><canvas id=\"minimap\"></canvas></div></div>", "<ul id=\"messages\"></ul>", "<input id=\"message\" class=\"form-control\" type=\"text\" placeholder=\"", "enterChatMsg", "...\" maxlength=\"80\" />", "options", "toast-bottom-left", "15000", "preventDefault", "parent", "siblings", "a", "href", "not", ".menu-tabs a", "ready", "value", "isSocketOpen", "close", "socket", ".partyToken", "#gamemode", "#cancel-party-btn", "input", "prevProfile", "#prev-profile", "nextProfile", "#next-profile", "contextmenu", "bind", "#canvas", "streamMode", "setStreamMode", "#stream-mode", "hideSkinUrl", "setHideSkinUrl", "#hide-url", "statsHUD", "stats-hud", "activePartys", "activepartys", "top5pHUD", "top5p-hud", "leaderboardPositionsHUD", "leaderboard-positions", "timeHUD", "time-hud", ":checked", "is", "#noSkins", "#noNames", "noColors", "#noColors", "#showMass", "#skipStats", "#options input", "getQuality", "#quality", "scale_setting", "setCanvasScale", "setParty", "devicePixelRatio", "High", "Medium", "Low", "VeryLow", "canvasScale", "partyToken", "icon-eye-blocked", "stream-mode", "#clantag, #nick", "hide-url", "btn-play", "getElementsByClassName", "btn-play-guest", "btn-spectate", "create-party-btn", "join-party-btn", "og-reconnect-btn", "handleConnect", "spectate", "#stats, #main-panel", "#og-reconnect-btn", "closeConnection", "addKeyListeners", "autoHideFood", "playerBestMass", "ga", "create", "UA-67142685-2", "auto", "ogarioTracker", "ogarioTracker.send", "pageview", "trim", "playerNick", "width", "complete", "cacheSkin", "customSkinsCache", "getCachedSkin", "mapOffsetFixed", "currentSector", "mapOffset", "mapSize", "sectorsY", "floor", "fromCharCode", "sectorsX", "lastDeath", "deathLocations", "splice", "showMapBorders", "strokeStyle", "lineWidth", "moveTo", "lineTo", "stroke", "miniMap", "clearRect", "miniMapCtx", "minimap", "2d", "getContext", "ogarioCtx", "height", "drawSelectedCell", "calculateCurrentSector", "globalAlpha", "16px Arial", "miniMapSectors", "drawMiniMapSectors", "save", "translate", "teamPlayers", "drawPosition", "restore", "minimap-sectors", "dTok", "drawSectors", "drawMapBorders", "px Arial", "textBaseline", "middle", "viewScale", "playerCellsMass", "showStatsSTE", "14px Arial", "right", "token", "size", "#C80000", "playerMaxMass", "playerMinMass", "#FFDC00", "#FF008C", "#00C8FF", "#64FF00", "#FF0A00", "#BE00FF", "innerHTML", "showStatsFPS", "fpsLastRequest", "rFps", "renderedFrames", "showStats", "showStatsMass", "playerMass", "Mass: ", " | ", "Score: ", "STE", " | STE: ", "showStatsN16", "/16", "FPS: ", "displayStats", "toLocaleString", "partys", "OGARio by szymy: Connecting to server", "log", "privateMode", "privateIP", "publicIP", "ogarioWS", "binaryType", "arraybuffer", "onopen", "OGARio by szymy: Socket open", "strToBuff", "sendBuffer", "onmessage", "handleMessage", "onclose", "OGARio by szymy: Socket close", "onerror", "OGARio by szymy: Socket error", "connect", "updatePlayerInfo", "ZamkniÄ™to poÅ‚Ä…czenie z serwerem!", "updateMaxTick", "updateInterval", "PrzeÅ‚Ä…czono na serwer prywatny!", ".party-panel", "PrzeÅ‚Ä…czono na serwer publiczny!", "#activepartys", "readyState", "OPEN", "createView", "setUint8", "charCodeAt", "setUint16", "buffer", "send", "data", "readMessage", "getUint8", "updateTeamPlayers", "displayTop5", "updatePartys", "displayPartys", "readChatMessage", "getUint16", "getUint32", "getInt32", "checkPlayerID", "cacheCustomSkin", "updateTick", "sort", "top5", "<li><a href=\"http://agar.io/#", "\" onclick=\"$(\'#joinPartyToken\').val(\'", "\'); $(\'#join-party-btn\').click();\">http://agar.io/#", "</a></li>", "<li>[", "] ", "</li>", "byteLength", "escapeHTML", ": ", "<span class=\"message-nick main-color\">", ": </span>", "success", "chatHistory", "warning", "#messages", "clear", "<li><span class=\"message-nick main-color\">", "message", "lastMessageSend", "%currentSector%", "comm", "prepareCommand", "sendChatMessage", ":visible", "blur", "focus", "getPlayerX", "setInt32", "getPlayerY", "setUint32", "loadSettings", "loadProfiles", "setMenu", "setButtons", "drawMiniMap", "updatePlayer", "resize", "onbeforeunload", "setSettings", "displayLeaderboard", "leaderboardHTML", "customDraw", "countFPS", "mapMinX", "mapMinY", "mapMaxX", "mapMaxY", "bordersWidth", "sectorsWidth", "virusesCache", "foodCache", "playerCells", "biggerSTECellsCache", "drawCircle", "biggerCellsCache", "smallerCellsCache", "cursorX", "cursorY", "STECellsCache", "drawGrid", "getCustomSkin", "setVirusColor", "setVirusStrokeColor", "setOppColor", "hk-feed", "W", "normal", "hk-macroFeed", "E", "macroFeed", "hk-split", "SPACE", "hk-doubleSplit", "Q", "doubleSplit", "hk-split16", "SHIFT", "split16", "hk-pause", "R", "setPause", "hk-showTop5", "T", "setShowTop5", "hk-showTime", "ALT+T", "setShowTime", "hk-showSplitRange", "U", "setShowSplitRange", "hk-showSplitInd", "I", "setShowSplitInd", "hk-showOppColors", "O", "setShowOppColors", "hk-toggleSkins", "toggleSkins", "hk-showSkins", "S", "setShowSkins", "hk-showStats", "ALT+S", "setShowStats", "hk-toggleCells", "D", "toggleCells", "hk-showFood", "F", "setShowFood", "hk-showGrid", "G", "setShowGrid", "hk-hideChat", "H", "hk-showHUD", "ALT+H", "setShowHUD", "hk-copyLb", "L", "copyLb", "hk-showLb", "ALT+L", "setShowLb", "hk-resetZoom", "Z", "resetZoom", "hk-toggleDeath", "X", "toggleDeath", "hk-clearChat", "C", "displayChatHistory", "hk-showBgSectors", "setShowBgSectors", "hk-hideBots", "ALT+B", "setHideSmallBots", "hk-showNames", "N", "setShowNames", "hk-showMass", "M", "hk-showMiniMap", "ALT+M", "setShowMiniMap", "hk-chatMessage", "ENTER", "enterChatMessage", "special", "hk-quickResp", "TILDE", "quickResp", "hk-zoomLevel", " 1", "ALT+1", "setZoom", " 2", "ALT+2", " 3", "ALT+3", " 4", "ALT+4", " 5", "ALT+5", "PrzeÅ‚Ä…cz serwer [publiczny/prywatny]", "=", "switchServerMode", "sendCommand", "command", "2", "3", "4", "5", "6", "7", "8", "9", "MOUSE WHEEL", "LEFT", "UP", "RIGHT", "DOWN", "custom-key-in form-control input-sm", "defaultKey", "spec-messageKey", "defaultMessageKey", "ogarioHotkeys", "loadDefaultHotkeys", "ogarioCommands", "saveCommands", "#hotkeys .command-in", "#hotkeys-cfg .custom-key-in", "<div id=\"hotkeys\"><div id=\"hotkeys-menu\"><button class=\"btn btn-primary\" onclick=\"resetHotkeys();\">", "resetSett", "</button> <button class=\"btn btn-success\" onclick=\"saveHotkeys();\">", "</button> <button class=\"btn btn-danger\" onclick=\"closeHotkeys();\">", "</button></div><div id=\"hotkeys-cfg\"></div><div id=\"hotkeys-inst\"><ul><li>", "hk-inst-assign", "</li><li>", "hk-inst-delete", "hk-inst-keys", "</li></ul></div></div>", "<button class=\"btn btn-success btn-block  btn-hotkeys\" onclick=\"showHotkeys();\">", "hotkeys", "hk-switchServerMode", "type", "hk-", "<div class=\"row\"><div class=\"key-label\"><input id=\"", "\" class=\"command-in form-control input-sm\" value=\"", "\" maxlength=\"80\" /></div><div class=\"default-key\">", "</div><div class=\"custom-key\"><input id=\"", "\" class=\"custom-key-in form-control input-sm\" value=\"", "\" /></div></div>", "#hotkeys-cfg", "<div class=\"row\"><div class=\"key-label\">", "</div><div class=\"default-key\">", "TAB", "DEL", "keyCode", "ctrlKey", "CTRL", "altKey", "ALT", "+", "lastPressedKey", "lastKeyId", "deleteHotkey", "setDefaultHotkey", "loadHotkeys", "setHotkeysMenu", "getPressedKey", "INPUT", "tagName", "target", "className", "inputClassName", "setHotkey", "keyDown", "onkeyup", "keyUp", "specialOn", "#oferwallContainer", "closeOfferwall", "#videoContainer", "closeVideoContainer", "specialOff", "onmousedown", "#overlays", "which", "mouseSplit", "mouseInvert", "mouseFeed", "onmouseup", "resetHotkeys", "saveHotkeys", "#hotkeys", "showHotkeys", "closeHotkeys","#0976e8"];
! function(_0x6da1x1, _0x6da1x2, _0x6da1x3) {
    function _0x6da1x4() {}

    function _0x6da1x5(_0x6da1x1, _0x6da1x2, _0x6da1x3, _0x6da1x4, _0x6da1x5, _0x6da1x6, _0x6da1x7, _0x6da1x8) {
        this[_0x34d5[2]] = _0x6da1x1, this[_0x34d5[3]] = _0x6da1x2, this[_0x34d5[4]] = _0x6da1x3, this[_0x34d5[5]] = _0x6da1x2, this[_0x34d5[6]] = _0x6da1x3, this[_0x34d5[7]] = _0x6da1x4, this[_0x34d5[8]] = _0x6da1x5, this[_0x34d5[9]](_0x6da1x6), this[_0x34d5[10]] = _0x6da1x7, 7 == _0x6da1x8[_0x34d5[11]] && (this[_0x34d5[12]] = _0x6da1x8), this[_0x34d5[13]] = !0, this[_0x34d5[14]] = Date[_0x34d5[15]]()
    }

    function _0x6da1x6() {}

    function _0x6da1x7() {
        if (document[_0x34d5[17]](_0x34d5[16])) {
            var _0x6da1x1 = document[_0x34d5[17]](_0x34d5[16]);
            return void(_0x6da1x1)[_0x34d5[24]](_0x34d5[18], function(_0x6da1x1) {
                _0x6da1x2[_0x34d5[19]] && _0x6da1x2[_0x34d5[20]] && _0x6da1x2[_0x34d5[21]] && (_0x6da1x2[_0x34d5[22]] = _0x6da1x1[_0x34d5[22]], _0x6da1x2[_0x34d5[23]] = _0x6da1x1[_0x34d5[23]], _0x6da1x2[_0x34d5[21]]())
            }, !1)
        };
        setTimeout(_0x6da1x7, 50)
    }

    function _0x6da1x8() {
        return _0x6da1x1[_0x34d5[25]] && _0x6da1x1[_0x34d5[25]][_0x34d5[26]] ? (_0x6da1x1[_0x34d5[25]][_0x34d5[27]] = _0x6da1x1[_0x34d5[25]][_0x34d5[26]], _0x6da1x1[_0x34d5[25]][_0x34d5[26]] = function() {
            _0x6da1x1[_0x34d5[25]][_0x34d5[27]][_0x34d5[28]](this, arguments), _0x6da1x3(_0x34d5[30])[_0x34d5[29]](), _0x6da1x1[_0x34d5[31]] = function() {}
        }, _0x6da1x1[_0x34d5[25]][_0x34d5[32]] = _0x6da1x1[_0x34d5[25]][_0x34d5[33]], _0x6da1x1[_0x34d5[25]][_0x34d5[33]] = function() {
            _0x6da1x1[_0x34d5[25]][_0x34d5[32]][_0x34d5[28]](this, arguments), _0x6da1x1[_0x34d5[31]] = function() {}
        }, _0x6da1x1[_0x34d5[25]][_0x34d5[34]] = _0x6da1x1[_0x34d5[25]][_0x34d5[35]], _0x6da1x1[_0x34d5[25]][_0x34d5[35]] = function() {
            _0x6da1x1[_0x34d5[25]][_0x34d5[34]][_0x34d5[28]](this, arguments), _0x6da1x2[_0x34d5[19]] = !0, _0x6da1x17[_0x34d5[36]]()
        }, _0x6da1x1[_0x34d5[25]][_0x34d5[37]] = _0x6da1x1[_0x34d5[25]][_0x34d5[38]], _0x6da1x1[_0x34d5[25]][_0x34d5[38]] = function() {
            _0x6da1x1[_0x34d5[25]][_0x34d5[37]][_0x34d5[28]](this, arguments), _0x6da1x3(_0x34d5[40])[_0x34d5[39]](), _0x6da1x17[_0x34d5[41]] ? _0x6da1x3(_0x34d5[30])[_0x34d5[29]]() : _0x6da1x3(_0x34d5[42])[_0x34d5[29]](), _0x6da1x2[_0x34d5[19]] = !1, _0x6da1x17[_0x34d5[43]](), _0x6da1x17[_0x34d5[46]](_0x6da1x2[_0x34d5[44]], _0x6da1x2[_0x34d5[45]]), _0x6da1x3(_0x34d5[49])[_0x34d5[48]](_0x34d5[47], !1), _0x6da1x1[_0x34d5[31]] = function() {}
        }, _0x6da1x1[_0x34d5[25]][_0x34d5[50]] = _0x6da1x1[_0x34d5[25]][_0x34d5[51]], _0x6da1x1[_0x34d5[25]][_0x34d5[51]] = function() {
            _0x6da1x1[_0x34d5[25]][_0x34d5[50]][_0x34d5[28]](this, arguments), _0x6da1x9()
        }, _0x6da1x1[_0x34d5[25]][_0x34d5[52]] = _0x6da1x1[_0x34d5[25]][_0x34d5[53]], void((_0x6da1x1[_0x34d5[25]][_0x34d5[53]] = function() {
            _0x6da1x1[_0x34d5[25]][_0x34d5[52]][_0x34d5[28]](this, arguments), setTimeout(function() {
                _0x6da1x9(), _0x6da1x17 && _0x6da1x17[_0x34d5[54]](), _0x6da1x3(_0x34d5[49])[_0x34d5[48]](_0x34d5[47], !1), _0x6da1x1[_0x34d5[31]] = function() {}
            }, 1e3)
        }))) : void(setTimeout)(_0x6da1x8, 50)
    }

    function _0x6da1x9() {
        var _0x6da1x4 = 1 * _0x6da1x1[_0x34d5[55]],
            _0x6da1x5 = 1 * _0x6da1x1[_0x34d5[56]],
            _0x6da1x6 = _0x6da1x3(_0x34d5[57]),
            _0x6da1x7 = _0x6da1x6[_0x34d5[56]]();
        _0x6da1x7 > 0 ? _0x6da1x2[_0x34d5[58]] = _0x6da1x7 : _0x6da1x7 = _0x6da1x2[_0x34d5[58]] || 580;
        var _0x6da1x8 = Math[_0x34d5[59]](1, _0x6da1x5 / _0x6da1x7),
            _0x6da1x9 = _0x6da1x7 * _0x6da1x8,
            _0x6da1xa = Math[_0x34d5[60]](_0x6da1x5 / 2 - 0.5 * _0x6da1x9),
            _0x6da1xb = _0x34d5[61] + _0x6da1x8 + _0x34d5[62];
        _0x6da1x6[_0x34d5[64]](_0x34d5[63], _0x6da1xb), _0x6da1x6[_0x34d5[64]](_0x34d5[65], _0x6da1xb), _0x6da1x6[_0x34d5[64]](_0x34d5[66], _0x6da1xb), _0x6da1x6[_0x34d5[64]](_0x34d5[67], _0x34d5[68] + _0x6da1xa + _0x34d5[69]), _0x6da1x2[_0x34d5[70]] = _0x6da1x4, _0x6da1x2[_0x34d5[71]] = _0x6da1x5
    }

    function _0x6da1xa() {
        return _0x6da1x2[_0x34d5[19]] ? _0x6da1xd[_0x6da1xc][_0x34d5[72]] : void(0)
    }

    function _0x6da1xb() {}
    _0x34d5[73] == _0x6da1x1[_0x34d5[75]][_0x34d5[74]] && _0x6da1x1[_0x34d5[76]] && _0x6da1x1[_0x34d5[76]][_0x34d5[77]] && _0x6da1x1[_0x34d5[76]][_0x34d5[77]]({}, _0x6da1x1[_0x34d5[79]][_0x34d5[78]], _0x34d5[80] + _0x6da1x1[_0x34d5[75]][_0x34d5[81]]),
        function() {
            _0x6da1x1[_0x34d5[82]] && (_0x6da1x1[_0x34d5[82]] = null, delete _0x6da1x1[_0x34d5[82]]), _0x6da1x1[_0x34d5[83]] && (_0x6da1x1[_0x34d5[83]] = null, delete _0x6da1x1[_0x34d5[83]]), _0x6da1x3[_0x34d5[117]](_0x34d5[84], {
                success: function(_0x6da1x1) {
                    var _0x6da1x2 = _0x6da1x1;
                    _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(\(function\(([\w$]+)\){)/i, _0x34d5[85]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(([\w$]+)=[\w$]+\.getContext\(\"2d\"\);)/i, _0x34d5[87]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(setTarget:function\((\w),(\w)\)\{)([\w$]+\(\w,\w\)})/i, _0x34d5[88]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(function\s*([\w$]+)\(\w\){return\s*[\w$]+\(\w,\w\)})/i, _0x34d5[89]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);)/i, _0x34d5[90]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/if\((\+\w\[\w>>3\])<1\.0\){/i, _0x34d5[91]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(\w)(=\+(\w\[\w>>3\])\*\+\w\()(\.\d)(,\+\w\);)/i, _0x34d5[92]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(\w=\w\[\w>>2\]\|0;)((\w\[\w>>3\])=(\w);)(\w\[\w>>0\]=a\[\w>>0\];)/i, _0x34d5[93]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(do{\w=\+\w\[\(\w\[\w>>2\]\|0\)\+\d+>>2];\w=\w\+\s*)(\+\(~~\+\w\(\+\(\w\*\w\/100\.0\)\)\|0\))(;\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);(\w)=(\w);)/i, _0x34d5[94]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/([\w$]+\(\d+,\w\[\w>>2\]\|0,(\+\w),(\+\w)\)\|0;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+-(\+\w\[\w\+\d+>>3\]),\+-(\+\w\[\w\+\d+>>3\])\)\|0;)/i, _0x34d5[95]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(while\(0\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)(\w\[\w\+\d+>>0\]=1;\w=\w;return})/i, _0x34d5[96]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/[\w$]+\(\w,\d+,15\);else/i, _0x34d5[97]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(\d\.\d;return}function\s*)([\w$]+\(.,.\)){/i, _0x34d5[98]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(if\(\(\w\[\d+\]\|0\)!=0\?\(\w\[\d+\]\|\w\[(\w)\+\d+>>0\]\)<<24>>24==0:0\))((\w)=\w\[(\w)\+\d+>>2\]\|0;)else/i, _0x34d5[99]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/do\s*if\((\w)\){((\w)=!\((\+\w\[\w>>2\])<=20\.0\);)([\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;[\w$]+\(\d+,\w\[\w>>2]\|0,(\+\(\+\w\[\w>>2\]\)),(\+\(\+\w\[\w>>2\]\)),\+\(\+\w\[\w>>2\])\+5\.0(\),0\.0,6\.283185307179586,0\)\|0;[\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;\w=\w\[\w>>2\]\|0;)if\(\w\){([\w$]+\(\d+,\w\|0,(\w&255\|0),(\w&255\|0),(\w&255\|0)\)\|0;)([\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;)/i, _0x34d5[100]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(if\(\(\w\[\w\+\d+>>0\]\|0\)==0\?\(\(\(\(\w\[\w\+\d+>>2\]\|0\)\+\(\w\[\d+\]\|0\)\|0\)>>>0\)%10\|0\|0\)!=0:0\){\w=\w\[\w>>2\]\|0;[\w$]+\(\d+,\w\|0\)\|0;\w=\w;return})([\w$]+\(\w,\w\);)/i, _0x34d5[101]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(\w=0;\w=\w\[\w\+(\d+)>>2\]\|0;\w=\w\[(\d+)\]\|0;\w=\w\[\d+\]\|0;)(\w:do)/i, _0x34d5[102]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(\w=\w\+5\+\(\(\w\|0\)\/)2(\|0\)\|0)/i, _0x34d5[103]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/((\w)=\+[\w$]+\(\+\(\+[\w$]+\(\d+\)\*10.0\)\)\/10.0;)/i, _0x34d5[104]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/((\w)=\(\w\|0\)<20\?20.0:\+\(\w\|0\);)/i, _0x34d5[105]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/do\s+if\((\w)\|(\(\w\[\d+\]\|0\)\!=0)\){/i, _0x34d5[106]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(\w=\w\+(\d+)\|0;\w=~~\(\+\w\[\w\+\d+>>2\]\*\.3\);)/i, _0x34d5[107]), _0x6da1x2 = _0x6da1x2[_0x34d5[86]](/(if\(\w<=)(20\.0)(\){\w=\w;return})(if\(!(\w)\){if\(\(\w\[\d+\]\|0\)!=\(\w\[\d+\]\|0\)\){\w=\w;return}if\(\(\w\[\w\+\d+>>0\]\|0\)!=0\?\(\w\[\w>>0\]\|0\)==0:0\){\w=\w;return}})((\w\[\w>>2\])=~~\+[\w$]+\(\+\((\w)\*\w\/100\.0\)\);)/i, _0x34d5[108]);
                    var _0x6da1x3 = document[_0x34d5[110]](_0x34d5[109]);
                    _0x6da1x3[_0x34d5[111]] = _0x6da1x2, _0x6da1x3[_0x34d5[112]] = !0, document[_0x34d5[114]][_0x34d5[113]](_0x6da1x3)
                },
                dataType: _0x34d5[115],
                method: _0x34d5[116],
                cache: !1,
                crossDomain: !0
            })
        }();
    var _0x6da1xc = _0x34d5[118],
        _0x6da1xd = {
            pl: {
                start: _0x34d5[119],
                settings: _0x34d5[120],
                autoZoom: _0x34d5[121],
                autoHideCellsInfo: _0x34d5[122],
                autoHideFood: _0x34d5[123],
                hideMyName: _0x34d5[124],
                hideMyMass: _0x34d5[125],
                customSkins: _0x34d5[126],
                myTransparentSkin: _0x34d5[127],
                myCustomColor: _0x34d5[128],
                transparentCells: _0x34d5[129],
                transparentViruses: _0x34d5[130],
                transparentSkins: _0x34d5[131],
                showGrid: _0x34d5[132],
                showBgSectors: _0x34d5[133],
                showMapBorders: _0x34d5[134],
                showMiniMap: _0x34d5[135],
                rainbowFood: _0x34d5[136],
                oppColors: _0x34d5[137],
                oppRings: _0x34d5[138],
                virColors: _0x34d5[139],
                splitRange: _0x34d5[140],
                virusesRange: _0x34d5[141],
                textStroke: _0x34d5[142],
                cursorTracking: _0x34d5[143],
                mouseSplit: _0x34d5[144],
                mouseFeed: _0x34d5[145],
                mouseInvert: _0x34d5[146],
                hideChat: _0x34d5[147],
                showTop5: _0x34d5[148],
                showTime: _0x34d5[149],
                showStats: _0x34d5[150],
                showStatsMass: _0x34d5[151],
                showStatsSTE: _0x34d5[152],
                showStatsN16: _0x34d5[153],
                showStatsFPS: _0x34d5[154],
                hotkeys: _0x34d5[155],
                "hk-inst-assign": _0x34d5[156],
                "hk-inst-delete": _0x34d5[157],
                "hk-inst-keys": _0x34d5[158],
                "hk-feed": _0x34d5[159],
                "hk-macroFeed": _0x34d5[160],
                "hk-split": _0x34d5[161],
                "hk-doubleSplit": _0x34d5[162],
                "hk-split16": _0x34d5[163],
                "hk-pause": _0x34d5[164],
                "hk-showTop5": _0x34d5[165],
                "hk-showTime": _0x34d5[166],
                "hk-showSplitRange": _0x34d5[167],
                "hk-showSplitInd": _0x34d5[168],
                "hk-showOppColors": _0x34d5[169],
                "hk-toggleSkins": _0x34d5[170],
                "hk-showSkins": _0x34d5[171],
                "hk-showStats": _0x34d5[172],
                "hk-toggleCells": _0x34d5[173],
                "hk-showFood": _0x34d5[174],
                "hk-showGrid": _0x34d5[175],
                "hk-hideChat": _0x34d5[176],
                "hk-showHUD": _0x34d5[177],
                "hk-copyLb": _0x34d5[178],
                "hk-showLb": _0x34d5[179],
                "hk-resetZoom": _0x34d5[180],
                "hk-zoomLevel": _0x34d5[181],
                "hk-toggleDeath": _0x34d5[182],
                "hk-clearChat": _0x34d5[183],
                "hk-showBgSectors": _0x34d5[184],
                "hk-hideBots": _0x34d5[185],
                "hk-showNames": _0x34d5[186],
                "hk-showMass": _0x34d5[187],
                "hk-showMiniMap": _0x34d5[188],
                "hk-chatMessage": _0x34d5[189],
                "hk-quickResp": _0x34d5[190],
                commands: _0x34d5[191],
                comm1: _0x34d5[192],
                comm2: _0x34d5[193],
                comm3: _0x34d5[194],
                comm4: _0x34d5[195],
                comm5: _0x34d5[196],
                comm6: _0x34d5[197],
                comm7: _0x34d5[198],
                comm8: _0x34d5[199],
                comm9: _0x34d5[200],
                comm0: _0x34d5[201],
                comm10: _0x34d5[202],
                comm11: _0x34d5[203],
                comm12: _0x34d5[204],
                comm13: _0x34d5[205],
                comm14: _0x34d5[206],
                saveComm: _0x34d5[207],
                theme: _0x34d5[208],
                themePreset: _0x34d5[209],
                themeType: _0x34d5[210],
                darkTheme: _0x34d5[211],
                lightTheme: _0x34d5[212],
                mainColor: _0x34d5[213],
                bgColor: _0x34d5[214],
                foodColor: _0x34d5[215],
                gridColor: _0x34d5[216],
                bordersColor: _0x34d5[217],
                commandsTextColor: _0x34d5[218],
                normalLb: _0x34d5[219],
                centeredLb: _0x34d5[220],
                fpsAtTop: _0x34d5[221],
                miniMapGrid: _0x34d5[222],
                hideChatMsgA: _0x34d5[223],
                hideChatMsgB: _0x34d5[224],
                showSkinsMsgA: _0x34d5[225],
                showSkinsMsgB: _0x34d5[226],
                hideSmallBotsMsgA: _0x34d5[227],
                hideSmallBotsMsgB: _0x34d5[228],
                profile: _0x34d5[229],
                saveSett: _0x34d5[230],
                resetSett: _0x34d5[231],
                close: _0x34d5[232],
                enterChatMsg: _0x34d5[233],
                activePartys: _0x34d5[234],
                pause: _0x34d5[235],
                visit: _0x34d5[236],
                exit: _0x34d5[237]
            },
            en: {
                start: _0x34d5[119],
                settings: _0x34d5[238],
                autoZoom: _0x34d5[121],
                autoHideCellsInfo: _0x34d5[239],
                autoHideFood: _0x34d5[240],
                hideMyName: _0x34d5[241],
                hideMyMass: _0x34d5[242],
                customSkins: _0x34d5[243],
                myTransparentSkin: _0x34d5[244],
                myCustomColor: _0x34d5[245],
                transparentCells: _0x34d5[246],
                transparentViruses: _0x34d5[247],
                transparentSkins: _0x34d5[248],
                showGrid: _0x34d5[249],
                showBgSectors: _0x34d5[250],
                showMapBorders: _0x34d5[251],
                showMiniMap: _0x34d5[252],
                rainbowFood: _0x34d5[253],
                oppColors: _0x34d5[254],
                oppRings: _0x34d5[255],
                virColors: _0x34d5[256],
                splitRange: _0x34d5[257],
                virusesRange: _0x34d5[258],
                textStroke: _0x34d5[259],
                cursorTracking: _0x34d5[260],
                mouseSplit: _0x34d5[261],
                mouseFeed: _0x34d5[262],
                mouseInvert: _0x34d5[263],
                hideChat: _0x34d5[264],
                showTop5: _0x34d5[265],
                showTime: _0x34d5[266],
                showStats: _0x34d5[267],
                showStatsMass: _0x34d5[268],
                showStatsSTE: _0x34d5[269],
                showStatsN16: _0x34d5[270],
                showStatsFPS: _0x34d5[271],
                hotkeys: _0x34d5[272],
                "hk-inst-assign": _0x34d5[273],
                "hk-inst-delete": _0x34d5[274],
                "hk-inst-keys": _0x34d5[275],
                "hk-feed": _0x34d5[159],
                "hk-macroFeed": _0x34d5[276],
                "hk-split": _0x34d5[277],
                "hk-doubleSplit": _0x34d5[278],
                "hk-split16": _0x34d5[279],
                "hk-pause": _0x34d5[280],
                "hk-showTop5": _0x34d5[281],
                "hk-showTime": _0x34d5[282],
                "hk-showSplitRange": _0x34d5[283],
                "hk-showSplitInd": _0x34d5[284],
                "hk-showOppColors": _0x34d5[285],
                "hk-toggleSkins": _0x34d5[286],
                "hk-showSkins": _0x34d5[287],
                "hk-showStats": _0x34d5[288],
                "hk-toggleCells": _0x34d5[289],
                "hk-showFood": _0x34d5[290],
                "hk-showGrid": _0x34d5[291],
                "hk-hideChat": _0x34d5[292],
                "hk-showHUD": _0x34d5[293],
                "hk-copyLb": _0x34d5[294],
                "hk-showLb": _0x34d5[295],
                "hk-resetZoom": _0x34d5[296],
                "hk-zoomLevel": _0x34d5[297],
                "hk-toggleDeath": _0x34d5[298],
                "hk-clearChat": _0x34d5[299],
                "hk-showBgSectors": _0x34d5[300],
                "hk-hideBots": _0x34d5[301],
                "hk-showNames": _0x34d5[302],
                "hk-showMass": _0x34d5[303],
                "hk-showMiniMap": _0x34d5[304],
                "hk-chatMessage": _0x34d5[305],
                "hk-quickResp": _0x34d5[306],
                commands: _0x34d5[307],
                comm1: _0x34d5[308],
                comm2: _0x34d5[309],
                comm3: _0x34d5[310],
                comm4: _0x34d5[311],
                comm5: _0x34d5[312],
                comm6: _0x34d5[313],
                comm7: _0x34d5[314],
                comm8: _0x34d5[315],
                comm9: _0x34d5[316],
                comm0: _0x34d5[317],
                comm10: _0x34d5[318],
                comm11: _0x34d5[319],
                comm12: _0x34d5[320],
                comm13: _0x34d5[321],
                comm14: _0x34d5[322],
                saveComm: _0x34d5[323],
                theme: _0x34d5[324],
                themePreset: _0x34d5[325],
                themeType: _0x34d5[326],
                darkTheme: _0x34d5[327],
                lightTheme: _0x34d5[328],
                mainColor: _0x34d5[329],
                bgColor: _0x34d5[330],
                foodColor: _0x34d5[331],
                gridColor: _0x34d5[332],
                bordersColor: _0x34d5[333],
                commandsTextColor: _0x34d5[334],
                normalLb: _0x34d5[335],
                centeredLb: _0x34d5[336],
                fpsAtTop: _0x34d5[337],
                miniMapGrid: _0x34d5[338],
                hideChatMsgA: _0x34d5[339],
                hideChatMsgB: _0x34d5[340],
                showSkinsMsgA: _0x34d5[341],
                showSkinsMsgB: _0x34d5[342],
                hideSmallBotsMsgA: _0x34d5[343],
                hideSmallBotsMsgB: _0x34d5[344],
                profile: _0x34d5[345],
                saveSett: _0x34d5[346],
                resetSett: _0x34d5[347],
                close: _0x34d5[348],
                enterChatMsg: _0x34d5[305],
                activePartys: _0x34d5[349],
                pause: _0x34d5[350],
                visit: _0x34d5[351],
                exit: _0x34d5[352]
            }
        },
        _0x6da1xe = {
            comm1: _0x6da1xd[_0x6da1xc][_0x34d5[353]],
            comm2: _0x6da1xd[_0x6da1xc][_0x34d5[354]],
            comm3: _0x6da1xd[_0x6da1xc][_0x34d5[355]],
            comm4: _0x6da1xd[_0x6da1xc][_0x34d5[356]],
            comm5: _0x6da1xd[_0x6da1xc][_0x34d5[357]],
            comm6: _0x6da1xd[_0x6da1xc][_0x34d5[358]],
            comm7: _0x6da1xd[_0x6da1xc][_0x34d5[359]],
            comm8: _0x6da1xd[_0x6da1xc][_0x34d5[360]],
            comm9: _0x6da1xd[_0x6da1xc][_0x34d5[361]],
            comm0: _0x6da1xd[_0x6da1xc][_0x34d5[362]],
            comm10: _0x6da1xd[_0x6da1xc][_0x34d5[363]],
            comm11: _0x6da1xd[_0x6da1xc][_0x34d5[364]],
            comm12: _0x6da1xd[_0x6da1xc][_0x34d5[365]],
            comm13: _0x6da1xd[_0x6da1xc][_0x34d5[366]],
            comm14: _0x6da1xd[_0x6da1xc][_0x34d5[367]]
        },
        _0x6da1xf = {
            "&": _0x34d5[368],
            "<": _0x34d5[369],
            ">": _0x34d5[370],
            "\"": _0x34d5[371],
            "\'": _0x34d5[372],
            "/": _0x34d5[373]
        },
        _0x6da1x10 = {
            "ogario-gold": {
                name: _0x34d5[374],
                centeredLb: !0,
                fpsAtTop: !0,
                miniMapGrid: !1,
                darkTheme: !0,
                mainColor: _0x34d5[375],
                bgColor: _0x34d5[376],
                gridColor: _0x34d5[377],
                bordersColor: _0x34d5[375],
                foodColor: _0x34d5[378],
                commandsTextColor: _0x34d5[379],
                virusColor: _0x34d5[380],
                virusStrokeColor: _0x34d5[380]
            },
            "ogario-orange": {
                name: _0x34d5[381],
                centeredLb: !0,
                fpsAtTop: !0,
                miniMapGrid: !1,
                darkTheme: !0,
                mainColor: _0x34d5[382],
                bgColor: _0x34d5[377],
                gridColor: _0x34d5[383],
                bordersColor: _0x34d5[382],
                foodColor: _0x34d5[384],
                commandsTextColor: _0x34d5[379],
                virusColor: _0x34d5[380],
                virusStrokeColor: _0x34d5[380]
            },
            "sniikz-style": {
                name: _0x34d5[385],
                centeredLb: !1,
                fpsAtTop: !1,
                miniMapGrid: !1,
                darkTheme: !0,
                mainColor: _0x34d5[386],
                bgColor: _0x34d5[376],
                gridColor: _0x34d5[387],
                bordersColor: _0x34d5[379],
                foodColor: _0x34d5[388],
                commandsTextColor: _0x34d5[376],
                virusColor: _0x34d5[380],
                virusStrokeColor: _0x34d5[380]
            },
            "hkg-style": {
                name: _0x34d5[389],
                centeredLb: !1,
                fpsAtTop: !1,
                miniMapGrid: !1,
                darkTheme: !0,
                mainColor: _0x34d5[390],
                bgColor: _0x34d5[376],
                gridColor: _0x34d5[377],
                bordersColor: _0x34d5[379],
                foodColor: _0x34d5[390],
                commandsTextColor: _0x34d5[379],
                virusColor: _0x34d5[380],
                virusStrokeColor: _0x34d5[380]
            },
            "agario-light": {
                name: _0x34d5[391],
                centeredLb: !0,
                fpsAtTop: !1,
                miniMapGrid: !0,
                darkTheme: !1,
                mainColor: _0x34d5[379],
                bgColor: _0x34d5[392],
                gridColor: _0x34d5[393],
                bordersColor: _0x34d5[394],
                foodColor: _0x34d5[395],
                commandsTextColor: _0x34d5[377],
                virusColor: _0x34d5[396],
                virusStrokeColor: _0x34d5[395]
            },
            "agario-dark": {
                name: _0x34d5[397],
                centeredLb: !0,
                fpsAtTop: !1,
                miniMapGrid: !0,
                darkTheme: !1,
                mainColor: _0x34d5[379],
                bgColor: _0x34d5[377],
                gridColor: _0x34d5[398],
                bordersColor: _0x34d5[399],
                foodColor: _0x34d5[395],
                commandsTextColor: _0x34d5[377],
                virusColor: _0x34d5[396],
                virusStrokeColor: _0x34d5[395]
            }
        },
        _0x6da1x11 = {
            preset: _0x34d5[400],
            normalLb: !1,
            centeredLb: !0,
            fpsAtTop: !0,
            miniMapGrid: !1,
            darkTheme: !0,
            mainColor: _0x34d5[382],
            bgColor: _0x34d5[377],
            gridColor: _0x34d5[383],
            bordersColor: _0x34d5[382],
            foodColor: _0x34d5[384],
            commandsTextColor: _0x34d5[379],
            virusColor: _0x34d5[380],
            virusStrokeColor: _0x34d5[380],
            sectorsX: 5,
            sectorsY: 5,
            bordersWidth: 20,
            sectorsWidth: 40,
            cellsAlpha: 0.9,
            skinsAlpha: 0.7
        };
    _0x6da1x4[_0x34d5[401]] = {
        customStyle: null,
        loadThemeSettings: function() {
            var _0x6da1x3 = null;
            null !== _0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[402]) && (_0x6da1x3 = JSON[_0x34d5[405]](_0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[402])));
            for (var _0x6da1x4 in _0x6da1x11) {
                _0x6da1x11[_0x34d5[406]](_0x6da1x4) && (_0x6da1x3 && _0x6da1x3[_0x34d5[406]](_0x6da1x4) && (_0x6da1x11[_0x6da1x4] = _0x6da1x3[_0x6da1x4]), _0x6da1x2[_0x34d5[406]](_0x6da1x4) && (_0x6da1x2[_0x6da1x4] = _0x6da1x11[_0x6da1x4]))
            }
        },
        saveThemeSettings: function() {
            _0x6da1x1[_0x34d5[404]][_0x34d5[409]](_0x34d5[407], JSON[_0x34d5[408]](_0x6da1x11))
        },
        setThemeMenu: function() {
            var _0x6da1x1 = this;
            _0x6da1x3(_0x34d5[438])[_0x34d5[437]](_0x34d5[410] + _0x6da1xd[_0x6da1xc][_0x34d5[411]] + _0x34d5[412] + _0x6da1xd[_0x6da1xc][_0x34d5[413]] + _0x34d5[414] + _0x6da1xd[_0x6da1xc][_0x34d5[415]] + _0x34d5[416] + _0x6da1xd[_0x6da1xc][_0x34d5[417]] + _0x34d5[418] + _0x6da1xd[_0x6da1xc][_0x34d5[419]] + _0x34d5[420] + _0x6da1x11[_0x34d5[419]] + _0x34d5[421] + _0x6da1xd[_0x6da1xc][_0x34d5[422]] + _0x34d5[423] + _0x6da1x11[_0x34d5[422]] + _0x34d5[424] + _0x6da1xd[_0x6da1xc][_0x34d5[425]] + _0x34d5[426] + _0x6da1x11[_0x34d5[425]] + _0x34d5[427] + _0x6da1xd[_0x6da1xc][_0x34d5[428]] + _0x34d5[429] + _0x6da1x11[_0x34d5[428]] + _0x34d5[430] + _0x6da1xd[_0x6da1xc][_0x34d5[431]] + _0x34d5[432] + _0x6da1x11[_0x34d5[431]] + _0x34d5[433] + _0x6da1xd[_0x6da1xc][_0x34d5[434]] + _0x34d5[435] + _0x6da1x11[_0x34d5[434]] + _0x34d5[436]);
            for (var _0x6da1x4 in _0x6da1x10) {
                _0x6da1x10[_0x34d5[406]](_0x6da1x4) && _0x6da1x3(_0x34d5[443])[_0x34d5[437]](_0x34d5[439] + _0x6da1x4 + _0x34d5[440] + _0x6da1x10[_0x6da1x4][_0x34d5[441]] + _0x34d5[442])
            };
            _0x6da1x3(_0x34d5[443])[_0x34d5[445]](_0x6da1x11[_0x34d5[444]]), _0x6da1x3(_0x34d5[443])[_0x34d5[447]](function() {
                var _0x6da1x2 = _0x6da1x3(this)[_0x34d5[445]]();
                _0x6da1x1[_0x34d5[446]](_0x6da1x2)
            }), _0x6da1x3(_0x34d5[454])[_0x34d5[453]]({
                format: _0x34d5[452]
            })[_0x34d5[451]](_0x34d5[448], function(_0x6da1x2) {
                _0x6da1x11[_0x34d5[419]] = _0x6da1x2[_0x34d5[12]][_0x34d5[449]](), _0x6da1x1[_0x34d5[450]]()
            }), _0x6da1x3(_0x34d5[456])[_0x34d5[453]]({
                format: _0x34d5[452]
            })[_0x34d5[451]](_0x34d5[448], function(_0x6da1x1) {
                _0x6da1x11[_0x34d5[422]] = _0x6da1x1[_0x34d5[12]][_0x34d5[449]](), _0x6da1x3(_0x34d5[114])[_0x34d5[64]](_0x34d5[455], _0x6da1x11[_0x34d5[422]])
            }), _0x6da1x3(_0x34d5[457])[_0x34d5[453]]({
                format: _0x34d5[452]
            })[_0x34d5[451]](_0x34d5[448], function(_0x6da1x1) {
                _0x6da1x11[_0x34d5[425]] = _0x6da1x1[_0x34d5[12]][_0x34d5[449]](), _0x6da1x2[_0x34d5[425]] = _0x6da1x11[_0x34d5[425]]
            }), _0x6da1x3(_0x34d5[458])[_0x34d5[453]]({
                format: _0x34d5[452]
            })[_0x34d5[451]](_0x34d5[448], function(_0x6da1x1) {
                _0x6da1x11[_0x34d5[428]] = _0x6da1x1[_0x34d5[12]][_0x34d5[449]]()
            }), _0x6da1x3(_0x34d5[459])[_0x34d5[453]]({
                format: _0x34d5[452]
            })[_0x34d5[451]](_0x34d5[448], function(_0x6da1x1) {
                _0x6da1x11[_0x34d5[431]] = _0x6da1x1[_0x34d5[12]][_0x34d5[449]]()
            }), _0x6da1x3(_0x34d5[460])[_0x34d5[453]]({
                format: _0x34d5[452]
            })[_0x34d5[451]](_0x34d5[448], function(_0x6da1x2) {
                _0x6da1x11[_0x34d5[434]] = _0x6da1x2[_0x34d5[12]][_0x34d5[449]](), _0x6da1x1[_0x34d5[450]]()
            }), _0x6da1x3(_0x34d5[438])[_0x34d5[437]](_0x34d5[461] + _0x6da1xd[_0x6da1xc][_0x34d5[462]] + _0x34d5[463] + _0x6da1xd[_0x6da1xc][_0x34d5[464]] + _0x34d5[465] + _0x6da1xd[_0x6da1xc][_0x34d5[466]] + _0x34d5[467] + _0x6da1xd[_0x6da1xc][_0x34d5[468]] + _0x34d5[469]), _0x6da1x3(_0x34d5[438])[_0x34d5[437]](_0x34d5[470] + _0x6da1xd[_0x6da1xc][_0x34d5[471]] + _0x34d5[472]), _0x6da1x3(_0x34d5[477])[_0x34d5[447]](function() {
                var _0x6da1x2 = _0x6da1x3(this)[_0x34d5[475]](_0x34d5[474])[_0x34d5[473]](_0x34d5[2]);
                _0x6da1x1[_0x34d5[476]](_0x6da1x2)
            }), _0x6da1x3(_0x34d5[479])[_0x34d5[453]]({
                format: _0x34d5[452],
                input: _0x34d5[478]
            }), this[_0x34d5[480]]()
        },
        setOptions: function() {
            _0x6da1x3(_0x34d5[482])[_0x34d5[48]](_0x34d5[481], _0x6da1x11[_0x34d5[462]]), _0x6da1x3(_0x34d5[483])[_0x34d5[48]](_0x34d5[481], _0x6da1x11[_0x34d5[464]]), _0x6da1x3(_0x34d5[484])[_0x34d5[48]](_0x34d5[481], _0x6da1x11[_0x34d5[466]]), _0x6da1x3(_0x34d5[485])[_0x34d5[48]](_0x34d5[481], _0x6da1x11[_0x34d5[468]])
        },
        setMainColor: function() {
            this[_0x34d5[486]] || (this[_0x34d5[486]] = _0x6da1x3(_0x34d5[489])[_0x34d5[488]](_0x34d5[487])), this[_0x34d5[486]][_0x34d5[495]](_0x34d5[490] + _0x6da1x11[_0x34d5[419]] + _0x34d5[491] + _0x6da1x11[_0x34d5[419]] + _0x34d5[492] + _0x6da1x11[_0x34d5[419]] + _0x34d5[493] + _0x6da1x11[_0x34d5[434]] + _0x34d5[494])
        },
        setCenteredLb: function() {
            _0x6da1x11[_0x34d5[462]] ? _0x6da1x3(_0x34d5[498])[_0x34d5[497]](_0x34d5[496]) : _0x6da1x3(_0x34d5[498])[_0x34d5[499]](_0x34d5[496])
        },
        setNormalLb: function() {
            _0x6da1x3(_0x34d5[502])[_0x34d5[495]](_0x6da1x11[_0x34d5[464]] ? _0x34d5[500] : _0x34d5[501])
        },
        setFpsAtTop: function() {
            _0x6da1x11[_0x34d5[466]] ? _0x6da1x3(_0x34d5[505])[_0x34d5[499]](_0x34d5[504])[_0x34d5[497]](_0x34d5[503]) : _0x6da1x3(_0x34d5[505])[_0x34d5[499]](_0x34d5[503])[_0x34d5[497]](_0x34d5[504])
        },
        changeThemePreset: function(_0x6da1x1) {
            if (_0x6da1x10[_0x6da1x1]) {
                _0x6da1x11[_0x34d5[444]] = _0x6da1x1;
                var _0x6da1x1 = _0x6da1x10[_0x6da1x1];
                for (var _0x6da1x4 in _0x6da1x1) {
                    _0x6da1x1[_0x34d5[406]](_0x6da1x4) && _0x6da1x11[_0x34d5[406]](_0x6da1x4) && (_0x6da1x11[_0x6da1x4] = _0x6da1x1[_0x6da1x4], _0x6da1x2[_0x34d5[406]](_0x6da1x4) && (_0x6da1x2[_0x6da1x4] = _0x6da1x11[_0x6da1x4]))
                };
                this[_0x34d5[506]](), _0x6da1x3(_0x34d5[454])[_0x34d5[453]](_0x34d5[507], _0x6da1x11[_0x34d5[419]]), _0x6da1x3(_0x34d5[456])[_0x34d5[453]](_0x34d5[507], _0x6da1x11[_0x34d5[422]]), _0x6da1x3(_0x34d5[457])[_0x34d5[453]](_0x34d5[507], _0x6da1x11[_0x34d5[425]]), _0x6da1x3(_0x34d5[458])[_0x34d5[453]](_0x34d5[507], _0x6da1x11[_0x34d5[428]]), _0x6da1x3(_0x34d5[459])[_0x34d5[453]](_0x34d5[507], _0x6da1x11[_0x34d5[431]]), _0x6da1x3(_0x34d5[460])[_0x34d5[453]](_0x34d5[507], _0x6da1x11[_0x34d5[434]])
            }
        },
        changeThemeType: function(_0x6da1x1) {
            _0x34d5[415] === _0x6da1x1 ? (_0x6da1x11[_0x34d5[415]] = !0, _0x6da1x11[_0x34d5[422]] = _0x34d5[376], _0x6da1x11[_0x34d5[428]] = _0x34d5[377], _0x6da1x11[_0x34d5[508]] = _0x34d5[399], _0x6da1x11[_0x34d5[509]] = _0x34d5[399], _0x6da1x3(_0x34d5[456])[_0x34d5[453]](_0x34d5[507], _0x34d5[376]), _0x6da1x3(_0x34d5[458])[_0x34d5[453]](_0x34d5[507], _0x34d5[377]), _0x6da1x3(_0x34d5[512])[_0x34d5[64]](_0x34d5[510], _0x34d5[511])) : (_0x6da1x11[_0x34d5[415]] = !1, _0x6da1x11[_0x34d5[422]] = _0x34d5[392], _0x6da1x11[_0x34d5[428]] = _0x34d5[393], _0x6da1x11[_0x34d5[508]] = _0x34d5[380], _0x6da1x11[_0x34d5[509]] = _0x34d5[380], _0x6da1x3(_0x34d5[456])[_0x34d5[453]](_0x34d5[507], _0x34d5[392]), _0x6da1x3(_0x34d5[458])[_0x34d5[453]](_0x34d5[507], _0x34d5[393]), _0x6da1x3(_0x34d5[512])[_0x34d5[64]](_0x34d5[510], _0x34d5[513]))
        },
        setTheme: function() {
            this[_0x34d5[480]](), this[_0x34d5[450]](), this[_0x34d5[514]](), this[_0x34d5[515]](), this[_0x34d5[516]](), _0x6da1x17 && _0x6da1x17[_0x34d5[517]](), _0x6da1x3(_0x34d5[114])[_0x34d5[64]](_0x34d5[455], _0x6da1x11[_0x34d5[422]]), _0x6da1x11[_0x34d5[415]] ? (_0x6da1x3(_0x34d5[512])[_0x34d5[64]](_0x34d5[510], _0x34d5[511]), _0x6da1x3(_0x34d5[521])[_0x34d5[520]](_0x34d5[519])[_0x34d5[499]](_0x34d5[518]), _0x6da1x3(_0x34d5[522])[_0x34d5[520]](_0x34d5[519])[_0x34d5[497]](_0x34d5[518])) : (_0x6da1x3(_0x34d5[512])[_0x34d5[64]](_0x34d5[510], _0x34d5[513]), _0x6da1x3(_0x34d5[522])[_0x34d5[520]](_0x34d5[519])[_0x34d5[499]](_0x34d5[518]), _0x6da1x3(_0x34d5[521])[_0x34d5[520]](_0x34d5[519])[_0x34d5[497]](_0x34d5[518]))
        },
        init: function() {
            this[_0x34d5[523]]()
        }
    };
    var _0x6da1x12 = new _0x6da1x4;
    _0x6da1x12[_0x34d5[524]](), _0x6da1x1[_0x34d5[525]] = function(_0x6da1x1, _0x6da1x2) {
        if (_0x6da1x11[_0x34d5[406]](_0x6da1x1) && null !== _0x6da1x2) {
            switch (_0x6da1x11[_0x6da1x1] = _0x6da1x2, _0x6da1x1) {
                case _0x34d5[462]:
                    _0x6da1x12[_0x34d5[514]]();
                    break;
                case _0x34d5[464]:
                    _0x6da1x12[_0x34d5[515]]();
                    break;
                case _0x34d5[466]:
                    _0x6da1x12[_0x34d5[516]]();
                    break;
                case _0x34d5[468]:
                    _0x6da1x17 && _0x6da1x17[_0x34d5[517]]()
            }
        }
    }, _0x6da1x1[_0x34d5[526]] = function() {
        _0x6da1x17 && _0x6da1x17[_0x34d5[527]](_0x6da1x11, _0x34d5[402])
    };
    var _0x6da1x13 = [],
        _0x6da1x14 = {},
        _0x6da1x15 = {
            nick: _0x34d5[528],
            clanTag: _0x34d5[529],
            skinURL: _0x34d5[68],
            color: _0x6da1x11[_0x34d5[419]]
        },
        _0x6da1x16 = {
            autoZoom: !0,
            autoHideCellsInfo: !0,
            autoHideFood: !0,
            hideMyName: !0,
            hideMyMass: !1,
            customSkins: !0,
            myTransparentSkin: !1,
            myCustomColor: !1,
            transparentCells: !1,
            transparentViruses: !0,
            transparentSkins: !1,
            showGrid: !1,
            showBgSectors: !1,
            showMapBorders: !0,
            showMiniMap: !0,
            rainbowFood: !1,
            oppColors: !1,
            oppRings: !1,
            virColors: !1,
            splitRange: !1,
            virusesRange: !1,
            textStroke: !1,
            cursorTracking: !0,
            mouseSplit: !1,
            mouseFeed: !1,
            mouseInvert: !1,
            hideChat: !1,
            showTop5: !0,
            showTime: !0,
            showStats: !0,
            showStatsMass: !1,
            showStatsSTE: !1,
            showStatsN16: !1,
            showStatsFPS: !0,
            zoomSpeedValue: 0.9,
            streamMode: !1,
            hideSkinUrl: !1
        };
    _0x6da1x5[_0x34d5[401]] = {
        id: 0,
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
        mass: 0,
        clanTag: _0x34d5[68],
        nick: _0x34d5[68],
        nickImg: null,
        skinURL: _0x34d5[68],
        color: _0x6da1x11[_0x34d5[419]],
        alive: !1,
        updateTime: null,
        pi2: 2 * Math[_0x34d5[530]],
        setNick: function(_0x6da1x1) {
            _0x6da1x1 && _0x6da1x1 != this[_0x34d5[531]] && (this[_0x34d5[531]] = _0x6da1x1)
        },
        drawPosition: function(_0x6da1x1, _0x6da1x2, _0x6da1x3) {
            if (this[_0x34d5[13]]) {
                this[_0x34d5[5]] = (29 * this[_0x34d5[5]] + this[_0x34d5[3]]) / 30, this[_0x34d5[6]] = (29 * this[_0x34d5[6]] + this[_0x34d5[4]]) / 30;
                var _0x6da1x4 = (this[_0x34d5[5]] + _0x6da1x2) * _0x6da1x3,
                    _0x6da1x5 = (this[_0x34d5[6]] + _0x6da1x2) * _0x6da1x3;
                this[_0x34d5[531]][_0x34d5[11]] > 0 && (_0x6da1x1[_0x34d5[532]] = _0x34d5[533], _0x6da1x1[_0x34d5[534]] = _0x34d5[535], _0x6da1x1[_0x34d5[536]] = _0x34d5[537], _0x6da1x1[_0x34d5[538]](this[_0x34d5[531]], _0x6da1x4, _0x6da1x5 - 12)), _0x6da1x1[_0x34d5[539]](), _0x6da1x1[_0x34d5[541]](_0x6da1x4, _0x6da1x5, 5, 0, this[_0x34d5[540]], !1), _0x6da1x1[_0x34d5[542]](), _0x6da1x1[_0x34d5[532]] = _0x34d5[1210], _0x6da1x1[_0x34d5[543]]()
            }
        }
    }, _0x6da1x6[_0x34d5[401]] = {
        name: _0x34d5[544],
        version: _0x34d5[545],
        privateMode: !1,
        publicIP: _0x34d5[546],
        privateIP: null,
        updateInterval: 900,
        updateTick: 0,
        updateMaxTick: 2,
        currentSector: _0x34d5[68],
        miniMap: null,
        miniMapCtx: null,
        miniMapSectors: null,
        pi2: 2 * Math[_0x34d5[530]],
        socket: null,
        teamPlayers: [],
        partys: [],
        chatHistory: [],
        customSkinsCache: {},
        deathLocations: [],
        lastDeath: 0,
        gameMode: _0x34d5[68],
        partyToken: _0x34d5[68],
        selectedProfile: 0,
        playerMass: 0,
        lastMessageSend: Date[_0x34d5[15]](),
        rFps: 0,
        renderedFrames: 0,
        fpsLastRequest: null,
        statsHUD: null,
        leaderboardPositionsHUD: null,
        activePartys: null,
        top5HUD: null,
        timeHUD: null,
        retryResp: 0,
        token: _0x34d5[547],
        canvasScale: 1,
        selectBiggestCell: !0,
        noSkins: !1,
        noNames: !1,
        noColors: !1,
        showMass: !0,
        skipStats: !1,
        showSplitInd: !1,
        pause: !1,
        feedInterval: null,
        getPlayerX: function() {
            return _0x6da1x2[_0x34d5[44]] + _0x6da1x2[_0x34d5[548]]
        },
        getPlayerY: function() {
            return _0x6da1x2[_0x34d5[45]] + _0x6da1x2[_0x34d5[549]]
        },
        feed: function() {
            _0x6da1x1[_0x34d5[83]] && _0x6da1x1[_0x34d5[83]][_0x34d5[550]] && _0x6da1x1[_0x34d5[83]][_0x34d5[550]]()
        },
        macroFeed: function(_0x6da1x1) {
            if (_0x6da1x1) {
                if (this[_0x34d5[551]]) {
                    return
                };
                var _0x6da1x2 = this;
                this[_0x34d5[552]](), this[_0x34d5[551]] = setInterval(function() {
                    _0x6da1x2[_0x34d5[552]]()
                }, 80)
            } else {
                this[_0x34d5[551]] && (clearInterval(this[_0x34d5[551]]), this[_0x34d5[551]] = null)
            }
        },
        split: function() {
            _0x6da1x1[_0x34d5[83]] && _0x6da1x1[_0x34d5[83]][_0x34d5[553]] && _0x6da1x1[_0x34d5[83]][_0x34d5[553]]()
        },
        doubleSplit: function() {
            var _0x6da1x1 = this;
            _0x6da1x1[_0x34d5[553]](), setTimeout(function() {
                _0x6da1x1[_0x34d5[553]]()
            }, 40)
        },
        split16: function() {
            var _0x6da1x1 = this;
            _0x6da1x1[_0x34d5[553]](), setTimeout(function() {
                _0x6da1x1[_0x34d5[553]]()
            }, 40), setTimeout(function() {
                _0x6da1x1[_0x34d5[553]]()
            }, 80), setTimeout(function() {
                _0x6da1x1[_0x34d5[553]]()
            }, 120)
        },
        toggleSkins: function() {
            _0x6da1x2[_0x34d5[554]] = !_0x6da1x2[_0x34d5[554]]
        },
        toggleCells: function() {
            this[_0x34d5[555]] = !this[_0x34d5[555]], _0x6da1x2[_0x34d5[555]] = this[_0x34d5[555]]
        },
        setShowTop5: function() {
            _0x34d5[556] === this[_0x34d5[557]] && (_0x6da1x16[_0x34d5[558]] = !_0x6da1x16[_0x34d5[558]], this[_0x34d5[559]]())
        },
        setTop5: function() {
            _0x6da1x16[_0x34d5[558]] && _0x34d5[556] === this[_0x34d5[557]] ? _0x6da1x3(_0x34d5[560])[_0x34d5[29]]() : _0x6da1x3(_0x34d5[560])[_0x34d5[39]]()
        },
        setShowTime: function() {
            _0x6da1x16[_0x34d5[561]] = !_0x6da1x16[_0x34d5[561]], _0x6da1x16[_0x34d5[561]] ? (_0x6da1x3(_0x34d5[562])[_0x34d5[29]](), this[_0x34d5[563]]()) : _0x6da1x3(_0x34d5[562])[_0x34d5[39]]()
        },
        setShowSplitRange: function() {
            _0x6da1x16[_0x34d5[564]] = !_0x6da1x16[_0x34d5[564]], _0x6da1x2[_0x34d5[564]] = _0x6da1x16[_0x34d5[564]]
        },
        setShowSplitInd: function() {
            this[_0x34d5[565]] = !this[_0x34d5[565]], _0x6da1x16[_0x34d5[564]] = this[_0x34d5[565]], _0x6da1x16[_0x34d5[566]] = this[_0x34d5[565]], _0x6da1x2[_0x34d5[564]] = _0x6da1x16[_0x34d5[564]], _0x6da1x2[_0x34d5[566]] = _0x6da1x16[_0x34d5[566]]
        },
        setShowOppColors: function() {
            _0x6da1x16[_0x34d5[567]] = !_0x6da1x16[_0x34d5[567]], _0x6da1x2[_0x34d5[567]] = _0x6da1x16[_0x34d5[567]]
        },
        setShowSkins: function() {
            this[_0x34d5[568]] = !this[_0x34d5[568]], _0x6da1x1[_0x34d5[83]] && _0x6da1x1[_0x34d5[83]][_0x34d5[569]] && _0x6da1x1[_0x34d5[83]][_0x34d5[569]](!this[_0x34d5[568]]), _0x6da1x2[_0x34d5[570]] = !this[_0x34d5[568]], this[_0x34d5[572]](!this[_0x34d5[568]], _0x34d5[571])
        },
        setShowStats: function() {
            _0x6da1x3(_0x34d5[505])[_0x34d5[573]]()
        },
        setShowFood: function() {
            _0x6da1x2[_0x34d5[574]] = !_0x6da1x2[_0x34d5[574]]
        },
        setShowHUD: function() {
            _0x6da1x3(_0x34d5[575])[_0x34d5[573]]()
        },
        setShowGrid: function() {
            _0x6da1x16[_0x34d5[576]] = !_0x6da1x16[_0x34d5[576]], _0x6da1x2[_0x34d5[576]] = _0x6da1x16[_0x34d5[576]]
        },
        setShowLb: function() {
            _0x34d5[577] !== this[_0x34d5[557]] && _0x6da1x3(_0x34d5[498])[_0x34d5[573]]()
        },
        setShowBgSectors: function() {
            _0x6da1x16[_0x34d5[578]] = !_0x6da1x16[_0x34d5[578]]
        },
        setHideSmallBots: function() {
            _0x6da1x2[_0x34d5[579]] = !_0x6da1x2[_0x34d5[579]], this[_0x34d5[572]](!_0x6da1x2[_0x34d5[579]], _0x34d5[580])
        },
        setShowNames: function() {
            this[_0x34d5[581]] = !this[_0x34d5[581]], _0x6da1x1[_0x34d5[83]] && _0x6da1x1[_0x34d5[83]][_0x34d5[582]] && _0x6da1x1[_0x34d5[83]][_0x34d5[582]](!this[_0x34d5[581]])
        },
        setShowMass: function() {
            this[_0x34d5[583]] = !this[_0x34d5[583]], _0x6da1x1[_0x34d5[83]] && _0x6da1x1[_0x34d5[83]][_0x34d5[584]] && _0x6da1x1[_0x34d5[83]][_0x34d5[584]](this[_0x34d5[583]])
        },
        setShowMiniMap: function() {
            _0x6da1x16[_0x34d5[585]] = !_0x6da1x16[_0x34d5[585]], this[_0x34d5[586]]()
        },
        setMiniMap: function() {
            _0x6da1x16[_0x34d5[585]] ? _0x6da1x3(_0x34d5[587])[_0x34d5[29]]() : _0x6da1x3(_0x34d5[587])[_0x34d5[39]]()
        },
        resetZoom: function(_0x6da1x1) {
            _0x6da1x1 ? (_0x6da1x2[_0x34d5[588]] = 1, _0x6da1x2[_0x34d5[589]] = 1) : _0x6da1x2[_0x34d5[588]] = 0
        },
        setZoom: function(_0x6da1x1) {
            _0x6da1x2[_0x34d5[589]] = _0x6da1x1
        },
        tryResp: function() {
            if (_0x6da1x2[_0x34d5[19]] || 20 == this[_0x34d5[590]]) {
                return void((this[_0x34d5[590]] = 0))
            };
            this[_0x34d5[590]]++;
            var _0x6da1x1 = this;
            setTimeout(function() {
                _0x6da1x3(_0x34d5[592])[_0x34d5[591]](), _0x6da1x2[_0x34d5[19]] || _0x6da1x1[_0x34d5[593]]()
            }, 250)
        },
        quickResp: function() {
            _0x34d5[556] === this[_0x34d5[557]] && _0x6da1x3(_0x34d5[594])[_0x34d5[591]](), _0x6da1x2[_0x34d5[19]] = !1, this[_0x34d5[593]]()
        },
        copyLb: function() {
            var _0x6da1x1 = _0x6da1x3(_0x34d5[595]);
            _0x6da1x3(_0x34d5[114])[_0x34d5[437]](_0x6da1x1), _0x6da1x1[_0x34d5[445]](_0x6da1x3(_0x34d5[597])[_0x34d5[115]]())[_0x34d5[596]]();
            try {
                document[_0x34d5[599]](_0x34d5[598])
            } catch (_0x6da1x2) {};
            _0x6da1x1[_0x34d5[600]]()
        },
        hideChat: function() {
            _0x34d5[556] === this[_0x34d5[557]] && (_0x6da1x16[_0x34d5[601]] = !_0x6da1x16[_0x34d5[601]], _0x6da1x16[_0x34d5[601]] && _0x6da1x3(_0x34d5[602])[_0x34d5[39]](), this[_0x34d5[572]](!_0x6da1x16[_0x34d5[601]], _0x34d5[603]))
        },
        setPause: function() {
            this[_0x34d5[604]] = !this[_0x34d5[604]], _0x6da1x2[_0x34d5[604]] = this[_0x34d5[604]], this[_0x34d5[604]] ? _0x6da1x3(_0x34d5[605])[_0x34d5[29]]() : _0x6da1x3(_0x34d5[605])[_0x34d5[39]]()
        },
        displayChatInfo: function(_0x6da1x1, _0x6da1x2) {
            _0x6da1x1 ? toastr[_0x34d5[607]](_0x6da1xd[_0x6da1xc][_0x6da1x2 + _0x34d5[606]]) : toastr[_0x34d5[609]](_0x6da1xd[_0x6da1xc][_0x6da1x2 + _0x34d5[608]])
        },
        loadSettings: function() {
            var _0x6da1x3 = null;
            null !== _0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[610]) && (_0x6da1x3 = JSON[_0x34d5[405]](_0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[610])));
            for (var _0x6da1x4 in _0x6da1x16) {
                _0x6da1x16[_0x34d5[406]](_0x6da1x4) && (_0x6da1x3 && _0x6da1x3[_0x34d5[406]](_0x6da1x4) && (_0x6da1x16[_0x6da1x4] = _0x6da1x3[_0x6da1x4]), _0x6da1x2[_0x34d5[406]](_0x6da1x4) && (_0x6da1x2[_0x6da1x4] = _0x6da1x16[_0x6da1x4]))
            }
        },
        saveSettings: function(_0x6da1x2, _0x6da1x3) {
            _0x6da1x1[_0x34d5[404]][_0x34d5[409]](_0x6da1x3, JSON[_0x34d5[408]](_0x6da1x2))
        },
        loadProfiles: function() {
            if (null !== _0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[611])) {
                _0x6da1x13 = JSON[_0x34d5[405]](_0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[611]))
            } else {
                for (var _0x6da1x2 = 0; 10 > _0x6da1x2; _0x6da1x2++) {
                    _0x6da1x13[_0x34d5[613]]({
                        nick: _0x34d5[612] + (_0x6da1x2 + 1),
                        clanTag: _0x34d5[68],
                        skinURL: _0x34d5[68],
                        color: _0x6da1x11[_0x34d5[419]]
                    })
                }
            };
            null !== _0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[614]) && (this[_0x34d5[615]] = JSON[_0x34d5[405]](_0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[614]))), _0x6da1x15[_0x34d5[531]] = _0x6da1x13[this[_0x34d5[615]]][_0x34d5[531]], _0x6da1x15[_0x34d5[8]] = _0x6da1x13[this[_0x34d5[615]]][_0x34d5[8]], _0x6da1x15[_0x34d5[10]] = _0x6da1x13[this[_0x34d5[615]]][_0x34d5[10]], _0x6da1x15[_0x34d5[12]] = _0x6da1x13[this[_0x34d5[615]]][_0x34d5[12]]
        },
        changeSkinPreview: function(_0x6da1x1, _0x6da1x2) {
            _0x6da1x1 && _0x6da1x2 && _0x6da1x3(_0x34d5[618] + _0x6da1x2)[_0x34d5[499]](_0x6da1x2 + _0x34d5[617])[_0x34d5[437]](_0x6da1x3(_0x6da1x1)[_0x34d5[616]](500))
        },
        setSkinPreview: function(_0x6da1x1, _0x6da1x2) {
            if (_0x6da1x3(_0x34d5[618] + _0x6da1x2)[_0x34d5[619]]()[_0x34d5[497]](_0x6da1x2 + _0x34d5[617]), _0x6da1x1 && 0 != _0x6da1x1[_0x34d5[11]]) {
                var _0x6da1x4 = this,
                    _0x6da1x5 = new Image;
                _0x6da1x5[_0x34d5[620]] = _0x34d5[621], _0x6da1x5[_0x34d5[622]] = function() {
                    _0x6da1x14[_0x6da1x1] = _0x6da1x5, _0x6da1x4[_0x34d5[623]](_0x6da1x5, _0x6da1x2)
                }, _0x6da1x5[_0x34d5[624]] = _0x6da1x1
            }
        },
        setProfile: function() {
            var _0x6da1x1 = (_0x6da1x13[_0x34d5[11]] + this[_0x34d5[615]] - 1) % _0x6da1x13[_0x34d5[11]],
                _0x6da1x2 = (this[_0x34d5[615]] + 1) % _0x6da1x13[_0x34d5[11]];
            this[_0x34d5[626]](_0x6da1x13[_0x6da1x1][_0x34d5[10]], _0x34d5[625]), this[_0x34d5[626]](_0x6da1x13[this[_0x34d5[615]]][_0x34d5[10]], _0x34d5[627]), this[_0x34d5[626]](_0x6da1x13[_0x6da1x2][_0x34d5[10]], _0x34d5[628]), _0x6da1x3(_0x34d5[629])[_0x34d5[445]](_0x6da1x13[this[_0x34d5[615]]][_0x34d5[531]]), _0x6da1x3(_0x34d5[630])[_0x34d5[445]](_0x6da1x13[this[_0x34d5[615]]][_0x34d5[8]]), _0x6da1x3(_0x34d5[631])[_0x34d5[445]](_0x6da1x13[this[_0x34d5[615]]][_0x34d5[10]]), _0x6da1x3(_0x34d5[478])[_0x34d5[445]](_0x6da1x13[this[_0x34d5[615]]][_0x34d5[12]]), _0x6da1x3(_0x34d5[479])[_0x34d5[453]](_0x34d5[507], _0x6da1x13[this[_0x34d5[615]]][_0x34d5[12]])
        },
        prevProfile: function() {
            this[_0x34d5[632]](), this[_0x34d5[615]] = (_0x6da1x13[_0x34d5[11]] + this[_0x34d5[615]] - 1) % _0x6da1x13[_0x34d5[11]], this[_0x34d5[633]]()
        },
        nextProfile: function() {
            this[_0x34d5[632]](), this[_0x34d5[615]] = (this[_0x34d5[615]] + 1) % _0x6da1x13[_0x34d5[11]], this[_0x34d5[633]]()
        },
        setMenu: function() {
            var _0x6da1x1 = this;
            document[_0x34d5[78]] = _0x34d5[544], _0x6da1x3(_0x34d5[645])[_0x34d5[644]](_0x34d5[634] + _0x6da1xc + _0x34d5[635] + _0x6da1xd[_0x6da1xc][_0x34d5[636]] + _0x34d5[637] + _0x6da1xd[_0x6da1xc][_0x34d5[638]] + _0x34d5[639] + _0x6da1xd[_0x6da1xc][_0x34d5[640]] + _0x34d5[641] + _0x6da1xd[_0x6da1xc][_0x34d5[642]] + _0x34d5[643]), _0x6da1x3(_0x34d5[30])[_0x34d5[437]](_0x34d5[646]), _0x6da1x3(_0x34d5[647])[_0x34d5[488]](_0x6da1x3(_0x34d5[30])), _0x6da1x3(_0x34d5[648])[_0x34d5[600]](), _0x6da1x3(_0x34d5[629])[_0x34d5[644]](_0x34d5[649]), _0x6da1x3(_0x34d5[629])[_0x34d5[488]](_0x6da1x3(_0x34d5[650])), _0x6da1x3(_0x34d5[650])[_0x34d5[437]](_0x34d5[651]), _0x6da1x3(_0x34d5[650])[_0x34d5[654]](_0x34d5[652] + _0x6da1x15[_0x34d5[12]] + _0x34d5[653]), _0x6da1x3(_0x34d5[656])[_0x34d5[655]](_0x6da1x3(_0x34d5[479])), _0x6da1x3(_0x34d5[658])[_0x34d5[488]](_0x34d5[657]), _0x6da1x3(_0x34d5[657])[_0x34d5[437]](_0x34d5[659]), _0x6da1x3(_0x34d5[661])[_0x34d5[654]](_0x34d5[660]), _0x6da1x3(_0x34d5[663])[_0x34d5[488]](_0x6da1x3(_0x34d5[662])), _0x6da1x3(_0x34d5[594])[_0x34d5[497]](_0x34d5[664]), _0x6da1x3(_0x34d5[662])[_0x34d5[437]](_0x34d5[665]), _0x6da1x3(_0x34d5[667])[_0x34d5[488]](_0x6da1x3(_0x34d5[666])), _0x6da1x3(_0x34d5[42])[_0x34d5[488]](_0x6da1x3(_0x34d5[669]))[_0x34d5[497]](_0x34d5[668]), _0x6da1x3(_0x34d5[671])[_0x34d5[473]](_0x34d5[2], _0x34d5[670]), _0x6da1x3(_0x34d5[645])[_0x34d5[619]]()[_0x34d5[600]](), _0x6da1x3(_0x34d5[677])[_0x34d5[437]](_0x34d5[672] + _0x6da1xd[_0x6da1xc][_0x34d5[673]] + _0x34d5[674] + this[_0x34d5[675]] + _0x34d5[676]), _0x6da1x3(_0x34d5[679])[_0x34d5[678]](_0x34d5[2]), _0x6da1x3(_0x34d5[682])[_0x34d5[488]](_0x6da1x3(_0x34d5[681]))[_0x34d5[499]](_0x34d5[680]), _0x6da1x3(_0x34d5[683])[_0x34d5[619]](), _0x6da1x3(_0x34d5[685])[_0x34d5[654]](_0x34d5[684]), _0x6da1x3(_0x34d5[687])[_0x34d5[654]](_0x34d5[686]), _0x6da1x3(_0x34d5[688])[_0x34d5[488]](_0x6da1x3(_0x34d5[681])), _0x6da1x3(_0x34d5[689])[_0x34d5[488]](_0x6da1x3(_0x34d5[677])), _0x6da1x3(_0x34d5[690])[_0x34d5[619]](), _0x6da1x3(_0x34d5[690])[_0x34d5[437]](_0x34d5[691]), _0x6da1x3(_0x34d5[689])[_0x34d5[488]](_0x6da1x3(_0x34d5[692])), _0x6da1x3(_0x34d5[693])[_0x34d5[600]](), _0x6da1x3(_0x34d5[694])[_0x34d5[600]](), _0x6da1x3(_0x34d5[697])[_0x34d5[64]](_0x34d5[695], _0x34d5[696]), _0x6da1x3(_0x34d5[699])[_0x34d5[499]](_0x34d5[698]), _0x6da1x3(_0x34d5[703])[_0x34d5[64]]({
                "z-index": _0x34d5[700],
                opacity: _0x34d5[701],
                bottom: _0x34d5[702]
            }), _0x6da1x3(_0x34d5[666])[_0x34d5[707]](_0x34d5[704] + _0x6da1x16[_0x34d5[705]] + _0x34d5[706] + _0x6da1x16[_0x34d5[705]] + _0x34d5[676]), _0x6da1x3(_0x34d5[710])[_0x34d5[451]](_0x34d5[447], function() {
                var _0x6da1x4 = _0x6da1x3(this)[_0x34d5[445]]();
                _0x6da1x16[_0x34d5[705]] = _0x6da1x4, _0x6da1x2[_0x34d5[705]] = _0x6da1x4, _0x6da1x3(_0x34d5[709])[_0x34d5[495]](_0x34d5[708] + _0x6da1x4), _0x6da1x1[_0x34d5[527]](_0x6da1x16, _0x34d5[610])
            }), _0x6da1x3(_0x34d5[666])[_0x34d5[437]](_0x34d5[711]);
            for (var _0x6da1x4 in _0x6da1x16) {
                if (_0x6da1x16[_0x34d5[406]](_0x6da1x4)) {
                    if (_0x34d5[705] === _0x6da1x4) {
                        break
                    };
                    _0x6da1x3(_0x34d5[715])[_0x34d5[437]](_0x34d5[712] + _0x6da1x4 + _0x34d5[713] + _0x6da1x4 + _0x34d5[440] + _0x6da1xd[_0x6da1xc][_0x6da1x4] + _0x34d5[714])
                }
            };
            _0x6da1x3(_0x34d5[717])[_0x34d5[716]](function() {
                var _0x6da1x1 = _0x6da1x3(this)[_0x34d5[473]](_0x34d5[2]);
                _0x6da1x16[_0x34d5[406]](_0x6da1x1) && _0x6da1x3(this)[_0x34d5[48]](_0x34d5[481], _0x6da1x16[_0x6da1x1])
            }), _0x6da1x12 && _0x6da1x12[_0x34d5[718]](), _0x6da1x3(_0x34d5[114])[_0x34d5[437]](_0x34d5[719] + _0x6da1xd[_0x6da1xc][_0x34d5[604]] + _0x34d5[720]), _0x6da1x3(_0x34d5[114])[_0x34d5[437]](_0x34d5[721]), _0x6da1x3(_0x34d5[114])[_0x34d5[437]](_0x34d5[722] + _0x6da1xd[_0x6da1xc][_0x34d5[723]] + _0x34d5[724]), toastr[_0x34d5[725]] = {
                newestOnTop: !1,
                positionClass: _0x34d5[726],
                timeOut: _0x34d5[727]
            }, _0x6da1x3(document)[_0x34d5[735]](function() {
                _0x6da1x3(_0x34d5[734])[_0x34d5[591]](function(_0x6da1x1) {
                    _0x6da1x1[_0x34d5[728]]();
                    var _0x6da1x2 = _0x6da1x3(this);
                    _0x6da1x2[_0x34d5[497]](_0x34d5[518]), _0x6da1x2[_0x34d5[729]]()[_0x34d5[497]](_0x34d5[518]), _0x6da1x2[_0x34d5[729]]()[_0x34d5[730]]()[_0x34d5[499]](_0x34d5[518]), _0x6da1x2[_0x34d5[729]]()[_0x34d5[730]]()[_0x34d5[475]](_0x34d5[731])[_0x34d5[499]](_0x34d5[518]);
                    var _0x6da1x4 = _0x6da1x2[_0x34d5[473]](_0x34d5[732]);
                    _0x6da1x3(_0x34d5[40])[_0x34d5[733]](_0x6da1x4)[_0x34d5[64]](_0x34d5[695], _0x34d5[696]), _0x6da1x3(_0x6da1x4)[_0x34d5[616]](), _0x6da1x9()
                })
            }), _0x6da1x3(_0x34d5[741])[_0x34d5[451]](_0x34d5[447], function() {
                _0x6da1x1[_0x34d5[557]] = _0x6da1x2[_0x34d5[557]] = this[_0x34d5[736]], _0x34d5[556] !== this[_0x34d5[736]] && _0x6da1x1[_0x34d5[737]]() && (_0x6da1x1[_0x34d5[739]][_0x34d5[738]](), _0x6da1x3(_0x34d5[740])[_0x34d5[445]](_0x34d5[68])), _0x6da1x1[_0x34d5[559]]()
            }), _0x6da1x3(_0x34d5[742])[_0x34d5[451]](_0x34d5[591], function() {
                _0x6da1x1[_0x34d5[557]] = _0x6da1x2[_0x34d5[557]] = _0x34d5[68], _0x6da1x1[_0x34d5[739]][_0x34d5[738]](), _0x6da1x3(_0x34d5[740])[_0x34d5[445]](_0x34d5[68])
            }), _0x6da1x3(_0x34d5[631])[_0x34d5[451]](_0x34d5[743], function() {
                var _0x6da1x2 = _0x6da1x3(this)[_0x34d5[445]]();
                _0x6da1x1[_0x34d5[626]](_0x6da1x2, _0x34d5[627])
            }), _0x6da1x3(_0x34d5[745])[_0x34d5[451]](_0x34d5[591], function() {
                _0x6da1x1[_0x34d5[744]]()
            }), _0x6da1x3(_0x34d5[747])[_0x34d5[451]](_0x34d5[591], function() {
                _0x6da1x1[_0x34d5[746]]()
            }), _0x6da1x3(_0x34d5[750])[_0x34d5[749]](_0x34d5[748], function() {
                return !1
            }), _0x6da1x3(_0x34d5[753])[_0x34d5[451]](_0x34d5[591], function() {
                _0x6da1x16[_0x34d5[751]] = !_0x6da1x16[_0x34d5[751]], _0x6da1x1[_0x34d5[527]](_0x6da1x16, _0x34d5[610]), _0x6da1x1[_0x34d5[752]]()
            }), _0x6da1x3(_0x34d5[756])[_0x34d5[451]](_0x34d5[591], function() {
                _0x6da1x16[_0x34d5[754]] = !_0x6da1x16[_0x34d5[754]], _0x6da1x1[_0x34d5[527]](_0x6da1x16, _0x34d5[610]), _0x6da1x1[_0x34d5[755]]()
            }), this[_0x34d5[757]] = document[_0x34d5[17]](_0x34d5[758]), this[_0x34d5[759]] = document[_0x34d5[17]](_0x34d5[760]), this[_0x34d5[761]] = document[_0x34d5[17]](_0x34d5[762]), this[_0x34d5[763]] = document[_0x34d5[17]](_0x34d5[764]), this[_0x34d5[765]] = document[_0x34d5[17]](_0x34d5[766])
        },
        getDefaultSettings: function() {
            this[_0x34d5[568]] = _0x6da1x3(_0x34d5[769])[_0x34d5[768]](_0x34d5[767]), this[_0x34d5[581]] = _0x6da1x3(_0x34d5[770])[_0x34d5[768]](_0x34d5[767]), this[_0x34d5[771]] = _0x6da1x3(_0x34d5[772])[_0x34d5[768]](_0x34d5[767]), this[_0x34d5[583]] = _0x6da1x3(_0x34d5[773])[_0x34d5[768]](_0x34d5[767]), this[_0x34d5[41]] = _0x6da1x3(_0x34d5[774])[_0x34d5[768]](_0x34d5[767]), _0x6da1x2[_0x34d5[570]] = !this[_0x34d5[568]];
            var _0x6da1x4 = this;
            if (_0x6da1x3(_0x34d5[775])[_0x34d5[451]](_0x34d5[591], function() {
                    var _0x6da1x1 = _0x6da1x3(this),
                        _0x6da1x5 = _0x6da1x1[_0x34d5[473]](_0x34d5[2]);
                    void(0) !== _0x6da1x4[_0x6da1x5] && (_0x6da1x4[_0x6da1x5] = _0x6da1x1[_0x34d5[768]](_0x34d5[767]), _0x34d5[568] === _0x6da1x5 && (_0x6da1x2[_0x34d5[570]] = !_0x6da1x4[_0x34d5[568]]))
                }), _0x6da1x3(_0x34d5[777])[_0x34d5[451]](_0x34d5[447], function() {
                    var _0x6da1x1 = _0x6da1x3(this)[_0x34d5[445]]();
                    _0x6da1x4[_0x34d5[776]](_0x6da1x1)
                }), null !== _0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[778])) {
                var _0x6da1x5 = JSON[_0x34d5[405]](_0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[778]));
                this[_0x34d5[779]](_0x6da1x5)
            } else {
                var _0x6da1x6 = _0x6da1x3(_0x34d5[777])[_0x34d5[445]]();
                this[_0x34d5[776]](_0x6da1x6)
            };
            this[_0x34d5[780]](), _0x34d5[556] === _0x6da1x17[_0x34d5[557]] && _0x6da1x1[_0x34d5[75]][_0x34d5[81]] && _0x6da1x3(_0x34d5[594])[_0x34d5[591]]()
        },
        getQuality: function(_0x6da1x2) {
            var _0x6da1x3 = _0x34d5[781] in _0x6da1x1,
                _0x6da1x4 = 1;
            switch (_0x6da1x3 && (_0x6da1x4 = _0x6da1x1[_0x34d5[781]]), _0x6da1x2) {
                case _0x34d5[782]:
                    this[_0x34d5[779]](1);
                    break;
                case _0x34d5[783]:
                    this[_0x34d5[779]](0.9);
                    break;
                case _0x34d5[784]:
                    this[_0x34d5[779]](0.75);
                    break;
                case _0x34d5[785]:
                    this[_0x34d5[779]](0.5);
                    break;
                default:
                    this[_0x34d5[779]](_0x6da1x4)
            }
        },
        setCanvasScale: function(_0x6da1x1) {
            this[_0x34d5[786]] = _0x6da1x1, _0x6da1x2[_0x34d5[786]] = _0x6da1x1
        },
        setParty: function() {
            if (this[_0x34d5[557]] = _0x6da1x3(_0x34d5[741])[_0x34d5[445]](), this[_0x34d5[559]](), _0x34d5[556] === this[_0x34d5[557]]) {
                var _0x6da1x1 = _0x6da1x3(_0x34d5[740])[_0x34d5[445]]();
                _0x6da1x1 && _0x6da1x1[_0x34d5[11]] > 5 && (_0x6da1x1 = _0x6da1x1[_0x34d5[553]](_0x34d5[618]), this[_0x34d5[787]] = _0x6da1x1[1])
            }
        },
        setStreamMode: function() {
            _0x6da1x16[_0x34d5[751]] ? (_0x6da1x3(_0x34d5[753])[_0x34d5[497]](_0x34d5[788]), _0x6da1x3(_0x34d5[790])[_0x34d5[497]](_0x34d5[789])) : (_0x6da1x3(_0x34d5[753])[_0x34d5[499]](_0x34d5[788]), _0x6da1x3(_0x34d5[790])[_0x34d5[499]](_0x34d5[789]))
        },
        setHideSkinUrl: function() {
            _0x6da1x16[_0x34d5[754]] ? (_0x6da1x3(_0x34d5[756])[_0x34d5[497]](_0x34d5[788]), _0x6da1x3(_0x34d5[631])[_0x34d5[497]](_0x34d5[791])) : (_0x6da1x3(_0x34d5[756])[_0x34d5[499]](_0x34d5[788]), _0x6da1x3(_0x34d5[631])[_0x34d5[499]](_0x34d5[791]))
        },
        setButtons: function() {
            var _0x6da1x1 = this,
                _0x6da1x2 = document[_0x34d5[793]](_0x34d5[792])[0],
                _0x6da1x4 = document[_0x34d5[793]](_0x34d5[794])[0],
                _0x6da1x5 = document[_0x34d5[793]](_0x34d5[795])[0],
                _0x6da1x6 = document[_0x34d5[17]](_0x34d5[796]),
                _0x6da1x7 = document[_0x34d5[17]](_0x34d5[797]),
                _0x6da1x8 = document[_0x34d5[17]](_0x34d5[670]),
                _0x6da1x9 = document[_0x34d5[17]](_0x34d5[798]);
            _0x6da1x2[_0x34d5[24]](_0x34d5[591], function() {
                _0x6da1x1[_0x34d5[799]](), _0x6da1x1[_0x34d5[19]]()
            }, !1), _0x6da1x4[_0x34d5[24]](_0x34d5[591], function() {
                _0x6da1x1[_0x34d5[799]](), _0x6da1x1[_0x34d5[19]]()
            }, !1), _0x6da1x5[_0x34d5[24]](_0x34d5[591], function() {
                _0x6da1x1[_0x34d5[799]](), _0x6da1x1[_0x34d5[800]]()
            }, !1), _0x6da1x6[_0x34d5[24]](_0x34d5[591], function() {
                _0x6da1x1[_0x34d5[799]](), _0x6da1x1[_0x34d5[43]]()
            }, !1), _0x6da1x7[_0x34d5[24]](_0x34d5[591], function() {
                _0x6da1x1[_0x34d5[799]](), _0x6da1x1[_0x34d5[43]]()
            }, !1), _0x6da1x8[_0x34d5[24]](_0x34d5[591], function() {
                _0x6da1x3(_0x34d5[801])[_0x34d5[573]]()
            }, !1), _0x6da1x9[_0x34d5[24]](_0x34d5[591], function() {
                _0x34d5[556] === _0x6da1x1[_0x34d5[557]] && (_0x6da1x3(_0x34d5[802])[_0x34d5[48]](_0x34d5[47], !0), _0x6da1x1[_0x34d5[803]](), _0x6da1x1[_0x34d5[799]]())
            }, !1)
        },
        play: function() {
            _0x6da1x3(_0x34d5[30])[_0x34d5[39]](), _0x6da1x1[_0x34d5[804]](), _0x6da1x2[_0x34d5[800]] = !1, _0x6da1x2[_0x34d5[805]] && (_0x6da1x2[_0x34d5[574]] = !0), _0x6da1x2[_0x34d5[806]] = 0, _0x6da1x1[_0x34d5[807]] && _0x6da1x1[_0x34d5[807]](_0x34d5[808], _0x34d5[809], _0x34d5[810], _0x34d5[811]), _0x6da1x1[_0x34d5[807]] && _0x6da1x1[_0x34d5[807]](_0x34d5[812], _0x34d5[813])
        },
        spectate: function() {
            _0x6da1x3(_0x34d5[30])[_0x34d5[39]](), _0x6da1x1[_0x34d5[804]](), this[_0x34d5[43]](), _0x6da1x2[_0x34d5[19]] = !1, _0x6da1x2[_0x34d5[800]] = !0, _0x6da1x2[_0x34d5[805]] && (_0x6da1x2[_0x34d5[574]] = !1)
        },
        setPlayerSettings: function() {
            var _0x6da1x1 = _0x6da1x3(_0x34d5[629])[_0x34d5[445]](),
                _0x6da1x4 = _0x6da1x3(_0x34d5[630])[_0x34d5[445]](),
                _0x6da1x5 = _0x6da1x3(_0x34d5[631])[_0x34d5[445]](),
                _0x6da1x6 = _0x6da1x3(_0x34d5[478])[_0x34d5[445]]();
            _0x6da1x15[_0x34d5[531]] = _0x6da1x1 || _0x34d5[68], _0x6da1x15[_0x34d5[8]] = _0x6da1x4[_0x34d5[814]]() || _0x34d5[68], _0x6da1x15[_0x34d5[10]] = _0x6da1x5[_0x34d5[814]]() || _0x34d5[68], 7 == _0x6da1x6[_0x34d5[11]] && (_0x6da1x15[_0x34d5[12]] = _0x6da1x6), _0x6da1x2[_0x34d5[815]] = _0x6da1x15[_0x34d5[531]], _0x6da1x15[_0x34d5[8]][_0x34d5[11]] > 0 && (_0x6da1x2[_0x34d5[8]] = _0x6da1x15[_0x34d5[8]]), _0x6da1x13[this[_0x34d5[615]]][_0x34d5[531]] = _0x6da1x15[_0x34d5[531]], _0x6da1x13[this[_0x34d5[615]]][_0x34d5[8]] = _0x6da1x15[_0x34d5[8]], _0x6da1x13[this[_0x34d5[615]]][_0x34d5[10]] = _0x6da1x15[_0x34d5[10]], _0x6da1x13[this[_0x34d5[615]]][_0x34d5[12]] = _0x6da1x15[_0x34d5[12]], this[_0x34d5[527]](_0x6da1x13, _0x34d5[611]), this[_0x34d5[527]](this[_0x34d5[615]], _0x34d5[614])
        },
        cacheSkin: function(_0x6da1x1, _0x6da1x2, _0x6da1x3) {
            _0x6da1x3 ? (_0x6da1x1[_0x6da1x2] = new Image, _0x6da1x1[_0x6da1x2][_0x34d5[620]] = _0x34d5[621], _0x6da1x1[_0x6da1x2][_0x34d5[624]] = _0x6da1x3) : _0x6da1x1[_0x6da1x2] && delete _0x6da1x1[_0x6da1x2]
        },
        getCachedSkin: function(_0x6da1x1, _0x6da1x2) {
            return _0x6da1x1[_0x6da1x2] && _0x6da1x1[_0x6da1x2][_0x34d5[816]] && _0x6da1x1[_0x6da1x2][_0x34d5[817]] ? _0x6da1x1[_0x6da1x2] : null
        },
        cacheCustomSkin: function(_0x6da1x1, _0x6da1x2, _0x6da1x3) {
            if (_0x6da1x2[_0x34d5[11]] > 0) {
                if (_0x6da1x1[_0x34d5[406]](_0x6da1x2) && _0x6da1x1[_0x6da1x2][_0x34d5[624]] == _0x6da1x3) {
                    return
                };
                this[_0x34d5[818]](_0x6da1x1, _0x6da1x2, _0x6da1x3)
            }
        },
        getCustomSkin: function(_0x6da1x1) {
            return _0x6da1x1 && 0 != _0x6da1x1[_0x34d5[11]] ? this[_0x34d5[819]][_0x34d5[406]](_0x6da1x1) ? this[_0x34d5[820]](this[_0x34d5[819]], _0x6da1x1) : void(0) : null
        },
        calculateCurrentSector: function() {
            if (!_0x6da1x2[_0x34d5[821]]) {
                return void((this[_0x34d5[822]] = _0x34d5[68]))
            };
            var _0x6da1x1 = _0x6da1x2[_0x34d5[548]] + _0x6da1x2[_0x34d5[823]],
                _0x6da1x3 = _0x6da1x2[_0x34d5[549]] + _0x6da1x2[_0x34d5[823]],
                _0x6da1x4 = String[_0x34d5[827]](65 + Math[_0x34d5[826]]((_0x6da1x2[_0x34d5[45]] + _0x6da1x3) / (_0x6da1x2[_0x34d5[824]] / _0x6da1x11[_0x34d5[825]]))),
                _0x6da1x5 = _0x34d5[68] + (Math[_0x34d5[826]]((_0x6da1x2[_0x34d5[44]] + _0x6da1x1) / (_0x6da1x2[_0x34d5[824]] / _0x6da1x11[_0x34d5[828]])) + 1);
            this[_0x34d5[822]] = _0x6da1x4 + _0x6da1x5
        },
        toggleDeath: function() {
            this[_0x34d5[829]]--, this[_0x34d5[829]] < 0 && (this[_0x34d5[829]] = this[_0x34d5[830]][_0x34d5[11]] - 1)
        },
        updateDeathLocations: function(_0x6da1x1, _0x6da1x3) {
            _0x6da1x2[_0x34d5[821]] && (this[_0x34d5[830]][_0x34d5[613]]({
                x: _0x6da1x1 + _0x6da1x2[_0x34d5[548]],
                y: _0x6da1x3 + _0x6da1x2[_0x34d5[549]]
            }), 6 == this[_0x34d5[830]][_0x34d5[11]] && this[_0x34d5[830]][_0x34d5[831]](0, 1), this[_0x34d5[829]] = this[_0x34d5[830]][_0x34d5[11]] - 1)
        },
        drawMapBorders: function(_0x6da1x1, _0x6da1x3, _0x6da1x4, _0x6da1x5, _0x6da1x6, _0x6da1x7, _0x6da1x8) {
            _0x6da1x2[_0x34d5[821]] && _0x6da1x16[_0x34d5[832]] && (_0x6da1x1[_0x34d5[833]] = _0x6da1x7, _0x6da1x1[_0x34d5[834]] = _0x6da1x8, _0x6da1x1[_0x34d5[539]](), _0x6da1x1[_0x34d5[835]](_0x6da1x3, _0x6da1x4), _0x6da1x1[_0x34d5[836]](_0x6da1x5, _0x6da1x4), _0x6da1x1[_0x34d5[836]](_0x6da1x5, _0x6da1x6), _0x6da1x1[_0x34d5[836]](_0x6da1x3, _0x6da1x6), _0x6da1x1[_0x34d5[542]](), _0x6da1x1[_0x34d5[837]]())
        },
        drawMiniMap: function() {
            if (_0x6da1x2[_0x34d5[821]]) {
                this[_0x34d5[838]] ? this[_0x34d5[840]][_0x34d5[839]](0, 0, 200, 220) : (this[_0x34d5[838]] = document[_0x34d5[17]](_0x34d5[841]), this[_0x34d5[840]] = this[_0x34d5[838]][_0x34d5[843]](_0x34d5[842]), this[_0x34d5[840]][_0x34d5[844]] = !0, this[_0x34d5[838]][_0x34d5[816]] = 200, this[_0x34d5[838]][_0x34d5[845]] = 220);
                var _0x6da1x1 = 182 / _0x6da1x2[_0x34d5[824]],
                    _0x6da1x3 = _0x6da1x2[_0x34d5[548]] + _0x6da1x2[_0x34d5[823]],
                    _0x6da1x4 = _0x6da1x2[_0x34d5[549]] + _0x6da1x2[_0x34d5[823]];
                if (this[_0x34d5[846]](this[_0x34d5[840]]), this[_0x34d5[847]](), this[_0x34d5[840]][_0x34d5[848]] = 1, this[_0x34d5[840]][_0x34d5[534]] = _0x34d5[849], this[_0x34d5[840]][_0x34d5[532]] = _0x6da1x11[_0x34d5[419]], this[_0x34d5[840]][_0x34d5[538]](this[_0x34d5[822]], 10, 20), this[_0x34d5[850]] || this[_0x34d5[851]](_0x6da1x11[_0x34d5[828]], _0x6da1x11[_0x34d5[825]], 182, 220), this[_0x34d5[840]][_0x34d5[852]](), this[_0x34d5[840]][_0x34d5[853]](9.5, 29.5), this[_0x34d5[840]][_0x34d5[532]] = _0x34d5[533], this[_0x34d5[840]][_0x34d5[539]](), this[_0x34d5[840]][_0x34d5[541]]((_0x6da1x2[_0x34d5[44]] + _0x6da1x3) * _0x6da1x1, (_0x6da1x2[_0x34d5[45]] + _0x6da1x4) * _0x6da1x1, 5, 0, this[_0x34d5[540]], !1), this[_0x34d5[840]][_0x34d5[542]](), this[_0x34d5[840]][_0x34d5[543]](), _0x34d5[556] === this[_0x34d5[557]] && this[_0x34d5[854]][_0x34d5[11]] > 0) {
                    for (var _0x6da1x5 = 0; _0x6da1x5 < this[_0x34d5[854]][_0x34d5[11]]; _0x6da1x5++) {
                        this[_0x34d5[854]][_0x6da1x5][_0x34d5[855]](this[_0x34d5[840]], _0x6da1x2[_0x34d5[823]], _0x6da1x1)
                    }
                };
                if (this[_0x34d5[830]][_0x34d5[11]] > 0) {
                    var _0x6da1x6 = Math[_0x34d5[60]]((this[_0x34d5[830]][this[_0x34d5[829]]][_0x34d5[3]] + _0x6da1x2[_0x34d5[823]]) * _0x6da1x1),
                        _0x6da1x7 = Math[_0x34d5[60]]((this[_0x34d5[830]][this[_0x34d5[829]]][_0x34d5[4]] + _0x6da1x2[_0x34d5[823]]) * _0x6da1x1);
                    this[_0x34d5[840]][_0x34d5[834]] = 1, this[_0x34d5[840]][_0x34d5[833]] = this[_0x34d5[830]][_0x34d5[11]] - 1 == this[_0x34d5[829]] ? _0x6da1x11[_0x34d5[419]] : _0x34d5[533], this[_0x34d5[840]][_0x34d5[539]](), this[_0x34d5[840]][_0x34d5[835]](_0x6da1x6 - 4.5, _0x6da1x7), this[_0x34d5[840]][_0x34d5[836]](_0x6da1x6 + 4.5, _0x6da1x7), this[_0x34d5[840]][_0x34d5[835]](_0x6da1x6, _0x6da1x7 - 4.5), this[_0x34d5[840]][_0x34d5[836]](_0x6da1x6, _0x6da1x7 + 4.5), this[_0x34d5[840]][_0x34d5[837]]()
                };
                this[_0x34d5[840]][_0x34d5[856]]()
            }
        },
        drawMiniMapSectors: function(_0x6da1x1, _0x6da1x2, _0x6da1x3, _0x6da1x4) {
            this[_0x34d5[850]] = document[_0x34d5[17]](_0x34d5[857]);
            var _0x6da1x5 = this[_0x34d5[850]][_0x34d5[843]](_0x34d5[842]);
            _0x6da1x5[_0x34d5[844]] = !0, this[_0x34d5[850]][_0x34d5[816]] = _0x6da1x3, this[_0x34d5[850]][_0x34d5[845]] = _0x6da1x4, _0x6da1x5[_0x34d5[532]] = _0x34d5[533], this[_0x34d5[858]](_0x6da1x5), this[_0x34d5[859]](_0x6da1x5, _0x6da1x1, _0x6da1x2, 0.5, 29.5, _0x6da1x3 - 0.5, _0x6da1x4 - 9.5, _0x34d5[533], 1, !1), _0x6da1x5.clearRect(0,0,182,28)
        },
        resetMiniMapSectors: function() {
            this[_0x34d5[850]] = null
        },
        drawSectors: function(_0x6da1x1, _0x6da1x3, _0x6da1x4, _0x6da1x5, _0x6da1x6, _0x6da1x7, _0x6da1x8, _0x6da1x9, _0x6da1xa, _0x6da1xb) {
            if (!_0x6da1xb || _0x6da1x2[_0x34d5[821]] && _0x6da1x16[_0x34d5[578]]) {
                var _0x6da1xc = Math[_0x34d5[826]]((_0x6da1x7 - _0x6da1x5) / _0x6da1x3),
                    _0x6da1xd = Math[_0x34d5[826]]((_0x6da1x8 - _0x6da1x6) / _0x6da1x4),
                    _0x6da1xe = Math[_0x34d5[826]](0.5 * _0x6da1xd),
                    _0x6da1xf = 0,
                    _0x6da1x10 = 0;
                if (_0x6da1x1[_0x34d5[833]] = _0x6da1x9, _0x6da1x1[_0x34d5[532]] = _0x6da1x9, _0x6da1x1[_0x34d5[834]] = _0x6da1xa, _0x6da1xb || !_0x6da1xb && _0x6da1x11[_0x34d5[468]]) {
                    _0x6da1x1[_0x34d5[539]]();
                    for (var _0x6da1x12 = 0; _0x6da1x3 + 1 > _0x6da1x12; _0x6da1x12++) {
                        _0x6da1xf = _0x6da1x5 + _0x6da1xc * _0x6da1x12, _0x6da1x1[_0x34d5[835]](_0x6da1x12 == _0x6da1x3 ? _0x6da1x7 : _0x6da1xf, _0x6da1x6), _0x6da1x1[_0x34d5[836]](_0x6da1x12 == _0x6da1x3 ? _0x6da1x7 : _0x6da1xf, _0x6da1x8)
                    };
                    for (var _0x6da1x12 = 0; _0x6da1x4 + 1 > _0x6da1x12; _0x6da1x12++) {
                        _0x6da1x10 = _0x6da1x6 + _0x6da1xd * _0x6da1x12, _0x6da1x1[_0x34d5[835]](_0x6da1x5 - _0x6da1xa / 2, _0x6da1x12 == _0x6da1x4 ? _0x6da1x8 : _0x6da1x10), _0x6da1x1[_0x34d5[836]](_0x6da1x7 + _0x6da1xa / 2, _0x6da1x12 == _0x6da1x4 ? _0x6da1x8 : _0x6da1x10)
                    };
                    _0x6da1x1[_0x34d5[837]]()
                } else {
                    this[_0x34d5[860]](_0x6da1x1, _0x6da1x5, _0x6da1x6, _0x6da1x7, _0x6da1x8, _0x6da1x9, _0x6da1xa)
                };
                _0x6da1x1[_0x34d5[534]] = _0x6da1xe + _0x34d5[861], _0x6da1x1[_0x34d5[536]] = _0x34d5[537], _0x6da1x1[_0x34d5[862]] = _0x34d5[863];
                for (var _0x6da1x12 = 0; _0x6da1x4 > _0x6da1x12; _0x6da1x12++) {
                    for (var _0x6da1x13 = 0; _0x6da1x3 > _0x6da1x13; _0x6da1x13++) {
                        var _0x6da1x14 = String[_0x34d5[827]](65 + _0x6da1x12) + (_0x6da1x13 + 1);
                        _0x6da1xf = Math[_0x34d5[826]](_0x6da1x5 + _0x6da1xc / 2 + _0x6da1x13 * _0x6da1xc), _0x6da1x10 = Math[_0x34d5[826]](_0x6da1x6 + _0x6da1xd / 2 + _0x6da1x12 * _0x6da1xd), _0x6da1x1[_0x34d5[538]](_0x6da1x14, _0x6da1xf, _0x6da1x10)
                    }
                }
            }
        },
        drawGrid: function(_0x6da1x1) {
            if (_0x6da1x16[_0x34d5[576]]) {
                var _0x6da1x3 = _0x6da1x2[_0x34d5[70]] / _0x6da1x2[_0x34d5[864]],
                    _0x6da1x4 = _0x6da1x2[_0x34d5[71]] / _0x6da1x2[_0x34d5[864]],
                    _0x6da1x5 = (-_0x6da1x2[_0x34d5[44]] + _0x6da1x3 / 2) % 50,
                    _0x6da1x6 = (-_0x6da1x2[_0x34d5[45]] + _0x6da1x4 / 2) % 50;
                for (_0x6da1x1[_0x34d5[833]] = _0x6da1x11[_0x34d5[428]], _0x6da1x1[_0x34d5[848]] = 1 * _0x6da1x2[_0x34d5[864]], _0x6da1x1[_0x34d5[539]](); _0x6da1x3 > _0x6da1x5; _0x6da1x5 += 50) {
                    _0x6da1x1[_0x34d5[835]](_0x6da1x5 * _0x6da1x2[_0x34d5[864]] - 0.5, 0), _0x6da1x1[_0x34d5[836]](_0x6da1x5 * _0x6da1x2[_0x34d5[864]] - 0.5, _0x6da1x4 * _0x6da1x2[_0x34d5[864]])
                };
                for (; _0x6da1x4 > _0x6da1x6; _0x6da1x6 += 50) {
                    _0x6da1x1[_0x34d5[835]](0, _0x6da1x6 * _0x6da1x2[_0x34d5[864]] - 0.5), _0x6da1x1[_0x34d5[836]](_0x6da1x3 * _0x6da1x2[_0x34d5[864]], _0x6da1x6 * _0x6da1x2[_0x34d5[864]] - 0.5)
                };
                _0x6da1x1[_0x34d5[837]](), _0x6da1x1[_0x34d5[848]] = 1
            }
        },
        drawSelectedCell: function(_0x6da1x1) {
            _0x6da1x2[_0x34d5[19]] && _0x6da1x2[_0x34d5[865]] && _0x6da1x2[_0x34d5[865]][_0x34d5[11]] > 1 && (_0x6da1x16[_0x34d5[564]] || _0x6da1x16[_0x34d5[567]] || _0x6da1x16[_0x34d5[566]] || _0x6da1x16[_0x34d5[866]]) && (_0x6da1x1[_0x34d5[532]] = _0x34d5[533], _0x6da1x1[_0x34d5[848]] = this[_0x34d5[555]] ? 0.6 : 0.3, _0x6da1x1[_0x34d5[539]](), _0x6da1x1[_0x34d5[541]](48, 15, 6, 0, this[_0x34d5[540]], !1), _0x6da1x1[_0x34d5[542]](), _0x6da1x1[_0x34d5[543]](), _0x6da1x1[_0x34d5[848]] = this[_0x34d5[555]] ? 0.3 : 0.6, _0x6da1x1[_0x34d5[539]](), _0x6da1x1[_0x34d5[541]](60, 15, 4, 0, this[_0x34d5[540]], !1), _0x6da1x1[_0x34d5[542]](), _0x6da1x1[_0x34d5[543]]())
        },
        dTok: function(_0x6da1x1) {
            _0x6da1x1[_0x34d5[534]] = _0x34d5[867], _0x6da1x1[_0x34d5[536]] = _0x34d5[868], _0x6da1x1[_0x34d5[862]] = _0x34d5[67], _0x6da1x1[_0x34d5[538]](atob(this[_0x34d5[869]]), 181, 7)
        },
        drawCircle: function(_0x6da1x1, _0x6da1x2, _0x6da1x3, _0x6da1x4, _0x6da1x5, _0x6da1x6) {
            _0x6da1x1[_0x34d5[834]] = _0x6da1x4, _0x6da1x1[_0x34d5[848]] = _0x6da1x5, _0x6da1x1[_0x34d5[833]] = _0x6da1x6;
            for (var _0x6da1x7 = 0; _0x6da1x7 < _0x6da1x2[_0x34d5[11]]; _0x6da1x7++) {
                _0x6da1x1[_0x34d5[539]](), _0x6da1x1[_0x34d5[541]](_0x6da1x2[_0x6da1x7][_0x34d5[3]], _0x6da1x2[_0x6da1x7][_0x34d5[4]], _0x6da1x2[_0x6da1x7][_0x34d5[870]] + _0x6da1x3, this[_0x34d5[540]], !1), _0x6da1x1[_0x34d5[542]](), _0x6da1x1[_0x34d5[837]]()
            };
            _0x6da1x1[_0x34d5[848]] = 1
        },
        setVirusColor: function(_0x6da1x1) {
            var _0x6da1x2 = Math[_0x34d5[826]](_0x6da1x1 * _0x6da1x1 / 100);
            return _0x6da1x2 > 183 ? _0x34d5[871] : _0x6da1x11[_0x34d5[508]]
        },
        setVirusStrokeColor: function(_0x6da1x1) {
            if (_0x6da1x2[_0x34d5[19]] && 0 != _0x6da1x2[_0x34d5[872]]) {
                var _0x6da1x3 = Math[_0x34d5[826]](_0x6da1x1 * _0x6da1x1 / 100),
                    _0x6da1x4 = _0x6da1x3 / (this[_0x34d5[555]] ? _0x6da1x2[_0x34d5[872]] : _0x6da1x2[_0x34d5[873]]);
                return _0x6da1x4 > 0.76 ? _0x34d5[874] : _0x34d5[871]
            };
            return _0x6da1x11[_0x34d5[509]]
        },
        setOppColor: function(_0x6da1x1, _0x6da1x3) {
            if (_0x6da1x3) {
                return _0x6da1x15[_0x34d5[12]]
            };
            var _0x6da1x4 = Math[_0x34d5[826]](_0x6da1x1 * _0x6da1x1 / 100),
                _0x6da1x5 = this[_0x34d5[555]] ? _0x6da1x2[_0x34d5[872]] : _0x6da1x2[_0x34d5[873]],
                _0x6da1x6 = _0x6da1x4 / _0x6da1x5;
            if (_0x6da1x6 && _0x6da1x6 > 0) {
                var _0x6da1x7 = 1e3 > _0x6da1x5 ? 0.35 : 0.38;
                return _0x6da1x6 > 11 ? _0x34d5[875] : 2.5 > _0x6da1x6 ? 1.25 > _0x6da1x6 ? 1.25 > _0x6da1x6 && _0x6da1x6 > 0.75 ? _0x34d5[874] : _0x6da1x6 > _0x6da1x7 ? _0x34d5[876] : _0x34d5[877] : _0x34d5[878] : _0x34d5[879]
            }
        },
        displayLeaderboard: function(_0x6da1x1) {
            this[_0x34d5[763]] && (this[_0x34d5[763]][_0x34d5[880]] = _0x6da1x1)
        },
        countFPS: function() {
            if (_0x6da1x16[_0x34d5[881]]) {
                if (!this[_0x34d5[882]]) {
                    return void((this[_0x34d5[882]] = Date[_0x34d5[15]]()))
                };
                var _0x6da1x1 = Date[_0x34d5[15]](),
                    _0x6da1x2 = _0x6da1x1 - this[_0x34d5[882]];
                1e3 > _0x6da1x2 || (this[_0x34d5[883]] = this[_0x34d5[884]], this[_0x34d5[884]] = 0, this[_0x34d5[882]] = _0x6da1x1), this[_0x34d5[884]]++
            }
        },
        displayStats: function() {
            if (!_0x6da1x16[_0x34d5[885]]) {
                return void(_0x6da1x3)(_0x34d5[505])[_0x34d5[39]]()
            };
            var _0x6da1x1 = _0x34d5[68];
            _0x6da1x2[_0x34d5[19]] && (_0x6da1x16[_0x34d5[886]] && _0x6da1x2[_0x34d5[887]] && (_0x6da1x1 += _0x34d5[888] + _0x6da1x2[_0x34d5[887]] + _0x34d5[889]), _0x6da1x2[_0x34d5[806]] && (_0x6da1x1 += _0x34d5[890] + _0x6da1x2[_0x34d5[806]]), _0x6da1x16[_0x34d5[866]] && _0x6da1x2[_0x34d5[891]] && (_0x6da1x1 += _0x34d5[892] + _0x6da1x2[_0x34d5[891]]), _0x6da1x16[_0x34d5[893]] && _0x6da1x2[_0x34d5[865]] && (_0x6da1x1 += _0x34d5[889] + _0x6da1x2[_0x34d5[865]][_0x34d5[11]] + _0x34d5[894]), _0x6da1x16[_0x34d5[881]] && (_0x6da1x1 += _0x34d5[889])), _0x6da1x16[_0x34d5[881]] && (_0x6da1x1 += _0x34d5[895] + this[_0x34d5[883]]), this[_0x34d5[757]][_0x34d5[111]] = _0x6da1x1;
            var _0x6da1x4 = this;
            setTimeout(function() {
                _0x6da1x4[_0x34d5[896]]()
            }, 250)
        },
        displayTime: function() {
            if (!_0x6da1x16[_0x34d5[561]]) {
                return void(_0x6da1x3)(_0x34d5[562])[_0x34d5[39]]()
            };
            var _0x6da1x1 = (new Date)[_0x34d5[897]]();
            this[_0x34d5[765]][_0x34d5[111]] = _0x6da1x1;
            var _0x6da1x2 = this;
            setTimeout(function() {
                _0x6da1x2[_0x34d5[563]]()
            }, 1e3)
        },
        connect: function() {
            if (this[_0x34d5[780]](), this[_0x34d5[803]](), this[_0x34d5[854]] = [], this[_0x34d5[898]] = [], _0x34d5[556] === this[_0x34d5[557]] && this[_0x34d5[787]][_0x34d5[11]] <= 5) {
                console[_0x34d5[900]](_0x34d5[899]), this[_0x34d5[739]] = new WebSocket(this[_0x34d5[901]] && this[_0x34d5[902]] ? this[_0x34d5[902]] : this[_0x34d5[903]]), this[_0x34d5[739]][_0x34d5[904]] = !0, this[_0x34d5[739]][_0x34d5[905]] = _0x34d5[906];
                var _0x6da1x1 = this;
                this[_0x34d5[739]][_0x34d5[907]] = function() {
                    console[_0x34d5[900]](_0x34d5[908]), _0x6da1x1[_0x34d5[910]](_0x6da1x1[_0x34d5[909]](80, _0x6da1x1[_0x34d5[787]])), _0x6da1x1[_0x34d5[910]](_0x6da1x1[_0x34d5[909]](0, _0x6da1x15[_0x34d5[531]])), _0x6da1x1[_0x34d5[910]](_0x6da1x1[_0x34d5[909]](1, _0x6da1x15[_0x34d5[8]])), _0x6da1x3(_0x34d5[802])[_0x34d5[48]](_0x34d5[47], !1)
                }, this[_0x34d5[739]][_0x34d5[911]] = function(_0x6da1x2) {
                    _0x6da1x1[_0x34d5[912]](_0x6da1x2)
                }, this[_0x34d5[739]][_0x34d5[913]] = function() {
                    console[_0x34d5[900]](_0x34d5[914])
                }, this[_0x34d5[739]][_0x34d5[915]] = function() {
                    console[_0x34d5[900]](_0x34d5[916])
                }
            }
        },
        closeConnection: function() {
            if (this[_0x34d5[739]]) {
                this[_0x34d5[739]][_0x34d5[911]] = null;
                try {
                    this[_0x34d5[739]][_0x34d5[738]]()
                } catch (_0x6da1x1) {};
                this[_0x34d5[739]] = null
            }
        },
        handleConnect: function() {
            if (this[_0x34d5[632]](), !this[_0x34d5[737]]()) {
                var _0x6da1x1 = this;
                setTimeout(function() {
                    _0x6da1x1[_0x34d5[917]]()
                }, 1e3)
            };
            this[_0x34d5[918]]()
        },
        switchServerMode: function() {
            this[_0x34d5[902]] && (this[_0x34d5[901]] = !this[_0x34d5[901]], this[_0x34d5[737]]() && (this[_0x34d5[803]](), toastr[_0x34d5[609]](_0x34d5[919])), this[_0x34d5[901]] ? (this[_0x34d5[920]] = 5, this[_0x34d5[921]] = 200, toastr[_0x34d5[607]](_0x34d5[922]), _0x6da1x3(_0x34d5[923])[_0x34d5[29]]()) : (this[_0x34d5[920]] = 2, this[_0x34d5[921]] = 900, toastr[_0x34d5[607]](_0x34d5[924]), _0x6da1x3(_0x34d5[925])[_0x34d5[619]](), _0x6da1x3(_0x34d5[923])[_0x34d5[39]]()), this[_0x34d5[799]]())
        },
        isSocketOpen: function() {
            return null != this[_0x34d5[739]] && this[_0x34d5[739]][_0x34d5[926]] == this[_0x34d5[739]][_0x34d5[927]]
        },
        createView: function(_0x6da1x1) {
            return new DataView(new ArrayBuffer(_0x6da1x1))
        },
        strToBuff: function(_0x6da1x1, _0x6da1x2) {
            var _0x6da1x3 = this[_0x34d5[928]](1 + 2 * _0x6da1x2[_0x34d5[11]]);
            _0x6da1x3[_0x34d5[929]](0, _0x6da1x1);
            for (var _0x6da1x4 = 0; _0x6da1x4 < _0x6da1x2[_0x34d5[11]]; _0x6da1x4++) {
                _0x6da1x3[_0x34d5[931]](1 + 2 * _0x6da1x4, _0x6da1x2[_0x34d5[930]](_0x6da1x4), !0)
            };
            return _0x6da1x3
        },
        sendBuffer: function(_0x6da1x1) {
            this[_0x34d5[739]][_0x34d5[933]](_0x6da1x1[_0x34d5[932]])
        },
        handleMessage: function(_0x6da1x1) {
            this[_0x34d5[935]](new DataView(_0x6da1x1[_0x34d5[934]]))
        },
        readMessage: function(_0x6da1x1) {
            var _0x6da1x2 = _0x6da1x1[_0x34d5[936]](0);
            switch (_0x6da1x2) {
                case 16:
                    this[_0x34d5[937]](_0x6da1x1), this[_0x34d5[938]]();
                    break;
                case 96:
                    this[_0x34d5[939]](_0x6da1x1), this[_0x34d5[940]]();
                    break;
                case 100:
                    _0x6da1x16[_0x34d5[601]] || this[_0x34d5[941]](_0x6da1x1)
            }
        },
        checkPlayerID: function(_0x6da1x1) {
            for (var _0x6da1x2 = 0; _0x6da1x2 < this[_0x34d5[854]][_0x34d5[11]]; _0x6da1x2++) {
                if (this[_0x34d5[854]][_0x6da1x2][_0x34d5[2]] == _0x6da1x1) {
                    return _0x6da1x2
                }
            };
            return null
        },
        updateTeamPlayers: function(_0x6da1x1) {
            function _0x6da1x2() {
                for (var _0x6da1x2 = _0x34d5[68];;) {
                    var _0x6da1x3 = _0x6da1x1[_0x34d5[942]](_0x6da1x6, !0);
                    if (0 == _0x6da1x3) {
                        break
                    };
                    _0x6da1x2 += String[_0x34d5[827]](_0x6da1x3), _0x6da1x6 += 2
                };
                return _0x6da1x6 += 2, _0x6da1x2
            }
            for (var _0x6da1x3 = Date[_0x34d5[15]](), _0x6da1x4 = _0x6da1x1[_0x34d5[936]](1), _0x6da1x6 = 2, _0x6da1x7 = 0; _0x6da1x4 > _0x6da1x7; _0x6da1x7++) {
                var _0x6da1x8 = _0x6da1x1[_0x34d5[943]](_0x6da1x6, !0),
                    _0x6da1x9 = _0x6da1x1[_0x34d5[944]](_0x6da1x6 + 4, !0),
                    _0x6da1xa = _0x6da1x1[_0x34d5[944]](_0x6da1x6 + 8, !0),
                    _0x6da1xb = _0x6da1x1[_0x34d5[943]](_0x6da1x6 + 12, !0);
                if (_0x6da1xb && 0 != _0x6da1xb) {
                    _0x6da1x6 += 16;
                    var _0x6da1xc = _0x6da1x2(),
                        _0x6da1xd = _0x6da1x2(),
                        _0x6da1xe = _0x6da1x2(),
                        _0x6da1xf = _0x6da1x2(),
                        _0x6da1x10 = this[_0x34d5[945]](_0x6da1x8);
                    if (null != _0x6da1x10) {
                        this[_0x34d5[854]][_0x6da1x10][_0x34d5[3]] = _0x6da1x9, this[_0x34d5[854]][_0x6da1x10][_0x34d5[4]] = _0x6da1xa, this[_0x34d5[854]][_0x6da1x10][_0x34d5[7]] = _0x6da1xb, this[_0x34d5[854]][_0x6da1x10][_0x34d5[8]] = _0x6da1xc, this[_0x34d5[854]][_0x6da1x10][_0x34d5[9]](_0x6da1xd), this[_0x34d5[854]][_0x6da1x10][_0x34d5[10]] = _0x6da1xe, this[_0x34d5[854]][_0x6da1x10][_0x34d5[12]] = _0x6da1xf, this[_0x34d5[854]][_0x6da1x10][_0x34d5[13]] = !0, this[_0x34d5[854]][_0x6da1x10][_0x34d5[14]] = _0x6da1x3
                    } else {
                        var _0x6da1x11 = new _0x6da1x5(_0x6da1x8, _0x6da1x9, _0x6da1xa, _0x6da1xb, _0x6da1xc, _0x6da1xd, _0x6da1xe, _0x6da1xf);
                        this[_0x34d5[854]][_0x34d5[613]](_0x6da1x11)
                    };
                    this[_0x34d5[946]](this[_0x34d5[819]], _0x6da1xd, _0x6da1xe)
                }
            };
            if (this[_0x34d5[947]]++, this[_0x34d5[947]] == this[_0x34d5[920]]) {
                for (var _0x6da1x7 = 0; _0x6da1x7 < this[_0x34d5[854]][_0x34d5[11]]; _0x6da1x7++) {
                    _0x6da1x3 - this[_0x34d5[854]][_0x6da1x7][_0x34d5[14]] > 1e3 && (this[_0x34d5[854]][_0x6da1x7][_0x34d5[13]] = !1)
                };
                this[_0x34d5[947]] = 0
            };
            this[_0x34d5[854]][_0x34d5[948]](function(_0x6da1x1, _0x6da1x2) {
                return _0x6da1x2[_0x34d5[7]] - _0x6da1x1[_0x34d5[7]]
            }), this[_0x34d5[949]] = [];
            for (var _0x6da1x7 = 0; _0x6da1x7 < this[_0x34d5[854]][_0x34d5[11]] && (!this[_0x34d5[854]][_0x6da1x7][_0x34d5[13]] || (this[_0x34d5[949]][_0x34d5[613]]({
                    nick: this[_0x34d5[854]][_0x6da1x7][_0x34d5[531]],
                    mass: this[_0x34d5[854]][_0x6da1x7][_0x34d5[7]]
                }), 5 != this[_0x34d5[949]][_0x34d5[11]])); _0x6da1x7++) {;
            }
        },
        updatePartys: function(_0x6da1x1) {
            this[_0x34d5[898]] = [];
            for (var _0x6da1x2 = _0x6da1x1[_0x34d5[936]](1), _0x6da1x3 = 2, _0x6da1x4 = 0; _0x6da1x2 > _0x6da1x4; _0x6da1x4++) {
                for (var _0x6da1x5 = _0x34d5[68];;) {
                    var _0x6da1x6 = _0x6da1x1[_0x34d5[942]](_0x6da1x3, !0);
                    if (0 == _0x6da1x6) {
                        break
                    };
                    _0x6da1x5 += String[_0x34d5[827]](_0x6da1x6), _0x6da1x3 += 2
                };
                _0x6da1x3 += 2, this[_0x34d5[898]][_0x34d5[613]](_0x6da1x5)
            }
        },
        displayPartys: function() {
            for (var _0x6da1x1 = _0x34d5[68], _0x6da1x2 = 0; _0x6da1x2 < this[_0x34d5[898]][_0x34d5[11]]; _0x6da1x2++) {
                _0x6da1x1 += _0x34d5[950] + this[_0x34d5[898]][_0x6da1x2] + _0x34d5[951] + this[_0x34d5[898]][_0x6da1x2] + _0x34d5[952] + this[_0x34d5[898]][_0x6da1x2] + _0x34d5[953]
            };
            this[_0x34d5[759]][_0x34d5[880]] = _0x6da1x1
        },
        displayTop5: function() {
            if (_0x6da1x16[_0x34d5[558]]) {
                for (var _0x6da1x1 = _0x34d5[68], _0x6da1x2 = 0; _0x6da1x2 < this[_0x34d5[949]][_0x34d5[11]] && (_0x6da1x1 += _0x34d5[954] + this[_0x34d5[949]][_0x6da1x2][_0x34d5[7]] + _0x34d5[955] + this[_0x34d5[949]][_0x6da1x2][_0x34d5[531]] + _0x34d5[956], 4 != _0x6da1x2); _0x6da1x2++) {;
                };
                this[_0x34d5[761]][_0x34d5[880]] = _0x6da1x1
            }
        },
        escapeHTML: function(_0x6da1x1) {
            return (_0x6da1x1 + _0x34d5[68])[_0x34d5[86]](/[&<>"'\/]/g, function(_0x6da1x1) {
                return _0x6da1xf[_0x6da1x1]
            })
        },
        readChatMessage: function(_0x6da1x1) {
            for (var _0x6da1x2 = _0x6da1x1[_0x34d5[936]](1), _0x6da1x4 = _0x34d5[68], _0x6da1x5 = 2; _0x6da1x5 < _0x6da1x1[_0x34d5[957]]; _0x6da1x5 += 2) {
                var _0x6da1x6 = _0x6da1x1[_0x34d5[942]](_0x6da1x5, !0);
                if (0 == _0x6da1x6) {
                    break
                };
                _0x6da1x4 += String[_0x34d5[827]](_0x6da1x6)
            };
            var _0x6da1x7 = this[_0x34d5[958]](_0x6da1x4);
            if (_0x6da1x7[_0x34d5[11]] > 0) {
                var _0x6da1x8 = _0x6da1x7[_0x34d5[553]](_0x34d5[959], 1);
                _0x6da1x7 = _0x6da1x7[_0x34d5[86]](_0x6da1x8 + _0x34d5[959], _0x34d5[68]), 101 == _0x6da1x2 ? (toastr[_0x34d5[962]](_0x34d5[960] + _0x6da1x8 + _0x34d5[961] + _0x6da1x7), this[_0x34d5[963]][_0x34d5[613]]({
                    nick: _0x6da1x8,
                    message: _0x6da1x7
                }), this[_0x34d5[963]][_0x34d5[11]] > 15 && this[_0x34d5[963]][_0x34d5[831]](0, 1)) : 102 == _0x6da1x2 ? toastr[_0x34d5[964]](_0x6da1x8 + _0x34d5[959] + _0x6da1x7) : _0x6da1x3(_0x34d5[965])[_0x34d5[437]](_0x6da1x4)
            }
        },
        displayChatHistory: function(_0x6da1x1) {
            if (_0x6da1x1) {
                _0x6da1x3(_0x34d5[965])[_0x34d5[619]](), toastr[_0x34d5[966]]();
                for (var _0x6da1x2 = 0; _0x6da1x2 < this[_0x34d5[963]][_0x34d5[11]]; _0x6da1x2++) {
                    _0x6da1x3(_0x34d5[965])[_0x34d5[437]](_0x34d5[967] + this[_0x34d5[963]][_0x6da1x2][_0x34d5[531]] + _0x34d5[961] + this[_0x34d5[963]][_0x6da1x2][_0x34d5[968]] + _0x34d5[956])
                }
            } else {
                _0x6da1x3(_0x34d5[965])[_0x34d5[619]]()
            }
        },
        sendChatMessage: function(_0x6da1x1, _0x6da1x2) {
            if (Date[_0x34d5[15]]() - this[_0x34d5[969]] >= 500 && 0 != _0x6da1x2[_0x34d5[11]] && 0 != _0x6da1x15[_0x34d5[531]][_0x34d5[11]] && this[_0x34d5[737]]()) {
                var _0x6da1x2 = _0x6da1x15[_0x34d5[531]] + _0x34d5[959] + _0x6da1x2,
                    _0x6da1x3 = this[_0x34d5[928]](2 + 2 * _0x6da1x2[_0x34d5[11]]);
                _0x6da1x3[_0x34d5[929]](0, 100), _0x6da1x3[_0x34d5[929]](1, _0x6da1x1);
                for (var _0x6da1x4 = 0; _0x6da1x4 < _0x6da1x2[_0x34d5[11]]; _0x6da1x4++) {
                    _0x6da1x3[_0x34d5[931]](2 + 2 * _0x6da1x4, _0x6da1x2[_0x34d5[930]](_0x6da1x4), !0)
                };
                this[_0x34d5[910]](_0x6da1x3), this[_0x34d5[969]] = Date[_0x34d5[15]]()
            }
        },
        prepareCommand: function(_0x6da1x1) {
            var _0x6da1x2 = _0x6da1x1[_0x34d5[86]](_0x34d5[970], this[_0x34d5[822]]);
            return _0x6da1x2
        },
        sendCommand: function(_0x6da1x1) {
            var _0x6da1x2 = this[_0x34d5[972]](_0x6da1xe[_0x34d5[971] + _0x6da1x1]);
            this[_0x34d5[973]](102, _0x6da1x2)
        },
        enterChatMessage: function() {
            if (_0x34d5[556] === this[_0x34d5[557]]) {
                var _0x6da1x1 = _0x6da1x3(_0x34d5[602]);
                if (_0x6da1x1[_0x34d5[768]](_0x34d5[974])) {
                    var _0x6da1x4 = _0x6da1x1[_0x34d5[445]]();
                    _0x6da1x4[_0x34d5[11]] > 0 ? (this[_0x34d5[973]](101, _0x6da1x4), _0x6da1x2[_0x34d5[19]] && (_0x6da1x1[_0x34d5[975]](), _0x6da1x1[_0x34d5[39]]())) : (_0x6da1x1[_0x34d5[975]](), _0x6da1x1[_0x34d5[39]]()), _0x6da1x1[_0x34d5[445]](_0x34d5[68])
                } else {
                    _0x6da1x1[_0x34d5[29]](), _0x6da1x1[_0x34d5[976]](), _0x6da1x1[_0x34d5[445]](_0x34d5[68])
                }
            }
        },
        updatePlayer: function() {
            if (this[_0x34d5[737]]()) {
                if (_0x6da1x2[_0x34d5[19]]) {
                    var _0x6da1x1 = this[_0x34d5[928]](13);
                    _0x6da1x1[_0x34d5[929]](0, 16), _0x6da1x1[_0x34d5[978]](1, this[_0x34d5[977]](), !0), _0x6da1x1[_0x34d5[978]](5, this[_0x34d5[979]](), !0), void(0) !== _0x6da1x2[_0x34d5[887]] ? _0x6da1x1[_0x34d5[980]](9, _0x6da1x2[_0x34d5[887]], !0) : _0x6da1x1[_0x34d5[980]](9, this[_0x34d5[887]], !0), this[_0x34d5[910]](_0x6da1x1), this[_0x34d5[36]]()
                } else {
                    this[_0x34d5[43]]()
                }
            }
        },
        sendPlayerSpawn: function() {
            this[_0x34d5[737]]() && (view = this[_0x34d5[928]](2), view[_0x34d5[929]](0, 64), view[_0x34d5[929]](1, 1), this[_0x34d5[910]](view))
        },
        sendPlayerDeath: function() {
            this[_0x34d5[737]]() && (view = this[_0x34d5[928]](2), view[_0x34d5[929]](0, 64), view[_0x34d5[929]](1, 0), this[_0x34d5[910]](view))
        },
        updatePlayerInfo: function() {
            if (this[_0x34d5[946]](this[_0x34d5[819]], _0x6da1x15[_0x34d5[531]], _0x6da1x15[_0x34d5[10]]), this[_0x34d5[737]]()) {
                this[_0x34d5[910]](this[_0x34d5[909]](0, _0x6da1x15[_0x34d5[531]])), this[_0x34d5[910]](this[_0x34d5[909]](1, _0x6da1x15[_0x34d5[8]])), this[_0x34d5[910]](this[_0x34d5[909]](2, _0x6da1x15[_0x34d5[10]])), this[_0x34d5[910]](this[_0x34d5[909]](3, _0x6da1x15[_0x34d5[12]]));
                var _0x6da1x1 = this;
                setTimeout(function() {
                    _0x6da1x1[_0x34d5[780]](), _0x6da1x1[_0x34d5[910]](_0x6da1x1[_0x34d5[909]](80, _0x6da1x1[_0x34d5[787]]))
                }, 1e3)
            }
        },
        init: function() {
            this[_0x34d5[981]](), this[_0x34d5[982]](), this[_0x34d5[983]](), _0x6da1x12 && _0x6da1x12[_0x34d5[506]](), this[_0x34d5[633]](), this[_0x34d5[984]](), this[_0x34d5[752]](), this[_0x34d5[755]](), this[_0x34d5[586]](), this[_0x34d5[559]](), this[_0x34d5[563]](), this[_0x34d5[896]]();
            var _0x6da1x1 = this;
            setInterval(function() {
                _0x6da1x1[_0x34d5[985]]()
            }, 33), setInterval(function() {
                _0x6da1x1[_0x34d5[986]]()
            }, this[_0x34d5[921]])
        }
    };
    var _0x6da1x17 = new _0x6da1x6;
    _0x6da1x17[_0x34d5[524]](), _0x6da1x7(), _0x6da1x8(), _0x6da1x1[_0x34d5[24]](_0x34d5[987], function() {
        setTimeout(_0x6da1x9, 50)
    }, !1), _0x6da1x1[_0x34d5[988]] = _0x6da1xa, _0x6da1x1[_0x34d5[989]] = function(_0x6da1x1, _0x6da1x4) {
        if (_0x6da1x16[_0x34d5[406]](_0x6da1x1) && null !== _0x6da1x4) {
            switch (_0x6da1x16[_0x6da1x1] = _0x6da1x4, _0x6da1x2[_0x34d5[406]](_0x6da1x1) && (_0x6da1x2[_0x6da1x1] = _0x6da1x4), _0x6da1x1) {
                case _0x34d5[585]:
                    _0x6da1x17[_0x34d5[586]]();
                    break;
                case _0x34d5[558]:
                    _0x6da1x17[_0x34d5[559]]();
                    break;
                case _0x34d5[561]:
                    _0x6da1x17[_0x34d5[563]](), _0x6da1x3(_0x34d5[562])[_0x34d5[29]]();
                    break;
                case _0x34d5[885]:
                    _0x6da1x17[_0x34d5[896]](), _0x6da1x3(_0x34d5[505])[_0x34d5[29]]()
            };
            _0x6da1x17[_0x34d5[527]](_0x6da1x16, _0x34d5[610])
        }
    }, _0x6da1x2[_0x34d5[990]] = function() {
        _0x6da1x17[_0x34d5[990]](_0x6da1x2[_0x34d5[991]])
    }, _0x6da1x2[_0x34d5[992]] = function(_0x6da1x1) {
        if (_0x6da1x1) {
            _0x6da1x17[_0x34d5[993]]();
            var _0x6da1x3 = Math[_0x34d5[826]](_0x6da1x2[_0x34d5[994]] - _0x6da1x2[_0x34d5[548]]),
                _0x6da1x4 = Math[_0x34d5[826]](_0x6da1x2[_0x34d5[995]] - _0x6da1x2[_0x34d5[549]]),
                _0x6da1x5 = Math[_0x34d5[826]](_0x6da1x2[_0x34d5[996]] - _0x6da1x2[_0x34d5[548]]),
                _0x6da1x6 = Math[_0x34d5[826]](_0x6da1x2[_0x34d5[997]] - _0x6da1x2[_0x34d5[549]]),
                _0x6da1x7 = _0x6da1x11[_0x34d5[998]] / 2;
            if (_0x6da1x17[_0x34d5[859]](_0x6da1x1, _0x6da1x11[_0x34d5[828]], _0x6da1x11[_0x34d5[825]], _0x6da1x3, _0x6da1x4, _0x6da1x5, _0x6da1x6, _0x6da1x11[_0x34d5[428]], _0x6da1x11[_0x34d5[999]], !0), _0x6da1x17[_0x34d5[860]](_0x6da1x1, _0x6da1x3 - _0x6da1x7, _0x6da1x4 - _0x6da1x7, _0x6da1x5 + _0x6da1x7, _0x6da1x6 + _0x6da1x7, _0x6da1x11[_0x34d5[431]], _0x6da1x11[_0x34d5[998]]), _0x6da1x2[_0x34d5[1000]] && _0x6da1x2[_0x34d5[1000]][_0x34d5[11]] > 0) {
                _0x6da1x1[_0x34d5[539]]();
                for (var _0x6da1x8 = 0; _0x6da1x8 < _0x6da1x2[_0x34d5[1000]][_0x34d5[11]]; _0x6da1x8++) {
                    var _0x6da1x9 = _0x6da1x2[_0x34d5[1000]][_0x6da1x8][_0x34d5[3]],
                        _0x6da1xa = _0x6da1x2[_0x34d5[1000]][_0x6da1x8][_0x34d5[4]];
                    _0x6da1x1[_0x34d5[835]](_0x6da1x9, _0x6da1xa), _0x6da1x1[_0x34d5[541]](_0x6da1x9, _0x6da1xa, _0x6da1x2[_0x34d5[1000]][_0x6da1x8][_0x34d5[870]] + 820, _0x6da1x17[_0x34d5[540]], !1)
                };
                _0x6da1x1[_0x34d5[532]] = _0x6da1x11[_0x34d5[508]], _0x6da1x1[_0x34d5[848]] = 0.1, _0x6da1x1[_0x34d5[543]](), _0x6da1x2[_0x34d5[1000]] = []
            };
            if (_0x6da1x2[_0x34d5[1001]] && _0x6da1x2[_0x34d5[1001]][_0x34d5[11]] > 0) {
                _0x6da1x1[_0x34d5[539]]();
                for (var _0x6da1x8 = 0; _0x6da1x8 < _0x6da1x2[_0x34d5[1001]][_0x34d5[11]]; _0x6da1x8++) {
                    var _0x6da1x9 = _0x6da1x2[_0x34d5[1001]][_0x6da1x8][_0x34d5[3]],
                        _0x6da1xa = _0x6da1x2[_0x34d5[1001]][_0x6da1x8][_0x34d5[4]];
                    _0x6da1x1[_0x34d5[835]](_0x6da1x9, _0x6da1xa), _0x6da1x1[_0x34d5[541]](_0x6da1x9, _0x6da1xa, _0x6da1x2[_0x34d5[1001]][_0x6da1x8][_0x34d5[870]] + 5, _0x6da1x17[_0x34d5[540]], !1)
                };
                _0x6da1x1[_0x34d5[532]] = _0x6da1x11[_0x34d5[425]], _0x6da1x1[_0x34d5[848]] = 1, _0x6da1x1[_0x34d5[543]](), _0x6da1x2[_0x34d5[1001]] = []
            };
            if (_0x6da1x2[_0x34d5[19]]) {
                if (_0x6da1x16[_0x34d5[564]]) {
                    if (_0x6da1x2[_0x34d5[1002]] && _0x6da1x2[_0x34d5[1002]][_0x34d5[11]] > 0) {
                        _0x6da1x2[_0x34d5[1002]][_0x34d5[948]](function(_0x6da1x1, _0x6da1x2) {
                            return _0x6da1x2[_0x34d5[870]] - _0x6da1x1[_0x34d5[870]]
                        });
                        var _0x6da1xb = _0x6da1x17[_0x34d5[555]] ? 0 : _0x6da1x2[_0x34d5[1002]][_0x34d5[11]] - 1;
                        _0x6da1x1[_0x34d5[834]] = 6, _0x6da1x1[_0x34d5[848]] = _0x6da1x11[_0x34d5[415]] ? 0.7 : 0.35, _0x6da1x1[_0x34d5[833]] = _0x6da1x11[_0x34d5[415]] ? _0x34d5[533] : _0x34d5[376], _0x6da1x1[_0x34d5[539]](), _0x6da1x1[_0x34d5[541]](_0x6da1x2[_0x34d5[1002]][_0x6da1xb][_0x34d5[3]], _0x6da1x2[_0x34d5[1002]][_0x6da1xb][_0x34d5[4]], _0x6da1x2[_0x34d5[1002]][_0x6da1xb][_0x34d5[870]] + 760, _0x6da1x17[_0x34d5[540]], !1), _0x6da1x1[_0x34d5[542]](), _0x6da1x1[_0x34d5[837]]()
                    };
                    _0x6da1x17[_0x34d5[1004]](_0x6da1x1, _0x6da1x2[_0x34d5[1003]], 760, 4, 0.4, _0x34d5[879])
                };
                if (_0x6da1x16[_0x34d5[566]]) {
                    var _0x6da1xc = 14 + 2 / _0x6da1x2[_0x34d5[864]],
                        _0x6da1xd = 12 + 1 / _0x6da1x2[_0x34d5[864]];
                    _0x6da1x17[_0x34d5[1004]](_0x6da1x1, _0x6da1x2[_0x34d5[1003]], _0x6da1xc, _0x6da1xd, 0.75, _0x34d5[879]), _0x6da1x17[_0x34d5[1004]](_0x6da1x1, _0x6da1x2[_0x34d5[1005]], _0x6da1xc, _0x6da1xd, 0.75, _0x34d5[878]), _0x6da1x17[_0x34d5[1004]](_0x6da1x1, _0x6da1x2[_0x34d5[1006]], _0x6da1xc, _0x6da1xd, 0.75, _0x34d5[876]), _0x6da1x17[_0x34d5[1004]](_0x6da1x1, _0x6da1x2.STECellsCache, _0x6da1xc, _0x6da1xd, 0.75, _0x34d5[877])
                };
                if (_0x6da1x16[_0x34d5[20]] && _0x6da1x2[_0x34d5[21]]) {
                    _0x6da1x2[_0x34d5[21]](), _0x6da1x1[_0x34d5[834]] = 2, _0x6da1x1[_0x34d5[848]] = _0x6da1x11[_0x34d5[415]] ? 0.7 : 0.35, _0x6da1x1[_0x34d5[833]] = _0x6da1x11[_0x34d5[415]] ? _0x34d5[533] : _0x34d5[376], _0x6da1x1[_0x34d5[539]]();
                    for (var _0x6da1x8 = 0; _0x6da1x8 < _0x6da1x2[_0x34d5[1002]][_0x34d5[11]]; _0x6da1x8++) {
                        _0x6da1x1[_0x34d5[835]](_0x6da1x2[_0x34d5[1002]][_0x6da1x8][_0x34d5[3]], _0x6da1x2[_0x34d5[1002]][_0x6da1x8][_0x34d5[4]]), _0x6da1x1[_0x34d5[836]](_0x6da1x2[_0x34d5[1007]], _0x6da1x2[_0x34d5[1008]])
                    };
                    _0x6da1x1[_0x34d5[837]](), _0x6da1x1[_0x34d5[848]] = 1
                }
            };
            _0x6da1x2[_0x34d5[1002]] = [], (_0x6da1x16[_0x34d5[564]] || _0x6da1x16[_0x34d5[566]]) && (_0x6da1x2[_0x34d5[1003]] = [], _0x6da1x2[_0x34d5[1005]] = [], _0x6da1x2[_0x34d5[1006]] = [], _0x6da1x2[_0x34d5[1009]] = [])
        }
    }, _0x6da1x2[_0x34d5[1010]] = function(_0x6da1x1) {
        _0x6da1x17[_0x34d5[1010]](_0x6da1x1)
    }, _0x6da1x2[_0x34d5[1011]] = function(_0x6da1x1) {
        return _0x6da1x17[_0x34d5[1011]](_0x6da1x1)
    }, _0x6da1x2[_0x34d5[1012]] = function(_0x6da1x1) {
        return _0x6da1x17[_0x34d5[1012]](_0x6da1x1)
    }, _0x6da1x2[_0x34d5[1013]] = function(_0x6da1x1) {
        return _0x6da1x17[_0x34d5[1013]](_0x6da1x1)
    }, _0x6da1x2[_0x34d5[1014]] = function(_0x6da1x1, _0x6da1x2) {
        return _0x6da1x17[_0x34d5[1014]](_0x6da1x1, _0x6da1x2)
    };
    var _0x6da1x18 = {},
        _0x6da1x19 = {},
        _0x6da1x1a = {
            "hk-feed": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1015]],
                defaultKey: _0x34d5[1016],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[552]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-macroFeed": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1018]],
                defaultKey: _0x34d5[1019],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1020]](!0)
                },
                keyUp: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1020]](!1)
                },
                type: _0x34d5[1017]
            },
            "hk-split": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1021]],
                defaultKey: _0x34d5[1022],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[553]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-doubleSplit": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1023]],
                defaultKey: _0x34d5[1024],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1025]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-split16": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1026]],
                defaultKey: _0x34d5[1027],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1028]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-pause": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1029]],
                defaultKey: _0x34d5[1030],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1031]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showTop5": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1032]],
                defaultKey: _0x34d5[1033],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1034]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showTime": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1035]],
                defaultKey: _0x34d5[1036],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1037]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showSplitRange": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1038]],
                defaultKey: _0x34d5[1039],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1040]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showSplitInd": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1041]],
                defaultKey: _0x34d5[1042],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1043]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showOppColors": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1044]],
                defaultKey: _0x34d5[1045],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1046]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-toggleSkins": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1047]],
                defaultKey: _0x34d5[606],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1048]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showSkins": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1049]],
                defaultKey: _0x34d5[1050],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1051]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showStats": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1052]],
                defaultKey: _0x34d5[1053],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1054]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-toggleCells": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1055]],
                defaultKey: _0x34d5[1056],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1057]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showFood": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1058]],
                defaultKey: _0x34d5[1059],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1060]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showGrid": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1061]],
                defaultKey: _0x34d5[1062],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1063]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-hideChat": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1064]],
                defaultKey: _0x34d5[1065],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[601]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showHUD": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1066]],
                defaultKey: _0x34d5[1067],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1068]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-copyLb": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1069]],
                defaultKey: _0x34d5[1070],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1071]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showLb": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1072]],
                defaultKey: _0x34d5[1073],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1074]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-resetZoom": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1075]],
                defaultKey: _0x34d5[1076],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1077]](!0)
                },
                keyUp: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1077]](!1)
                },
                type: _0x34d5[1017]
            },
            "hk-toggleDeath": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1078]],
                defaultKey: _0x34d5[1079],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1080]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-clearChat": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1081]],
                defaultKey: _0x34d5[1082],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1083]](!0)
                },
                keyUp: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1083]](!1)
                },
                type: _0x34d5[1017]
            },
            "hk-showBgSectors": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1084]],
                defaultKey: _0x34d5[608],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1085]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-hideBots": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1086]],
                defaultKey: _0x34d5[1087],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1088]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showNames": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1089]],
                defaultKey: _0x34d5[1090],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1091]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showMass": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1092]],
                defaultKey: _0x34d5[1093],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[584]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-showMiniMap": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1094]],
                defaultKey: _0x34d5[1095],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1096]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-chatMessage": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1097]],
                defaultKey: _0x34d5[1098],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1099]]()
                },
                keyUp: null,
                type: _0x34d5[1100]
            },
            "hk-quickResp": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1101]],
                defaultKey: _0x34d5[1102],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1103]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-zoom1": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1104]] + _0x34d5[1105],
                defaultKey: _0x34d5[1106],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1107]](0.5)
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-zoom2": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1104]] + _0x34d5[1108],
                defaultKey: _0x34d5[1109],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1107]](0.25)
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-zoom3": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1104]] + _0x34d5[1110],
                defaultKey: _0x34d5[1111],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1107]](0.125)
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-zoom4": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1104]] + _0x34d5[1112],
                defaultKey: _0x34d5[1113],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1107]](0.075)
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-zoom5": {
                label: _0x6da1xd[_0x6da1xc][_0x34d5[1104]] + _0x34d5[1114],
                defaultKey: _0x34d5[1115],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1107]](0.05)
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-switchServerMode": {
                label: _0x34d5[1116],
                defaultKey: _0x34d5[1117],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1118]]()
                },
                keyUp: null,
                type: _0x34d5[1017]
            },
            "hk-comm1": {
                label: _0x6da1xe[_0x34d5[353]],
                defaultKey: _0x34d5[700],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](1)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm2": {
                label: _0x6da1xe[_0x34d5[354]],
                defaultKey: _0x34d5[1121],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](2)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm3": {
                label: _0x6da1xe[_0x34d5[355]],
                defaultKey: _0x34d5[1122],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](3)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm4": {
                label: _0x6da1xe[_0x34d5[356]],
                defaultKey: _0x34d5[1123],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](4)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm5": {
                label: _0x6da1xe[_0x34d5[357]],
                defaultKey: _0x34d5[1124],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](5)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm6": {
                label: _0x6da1xe[_0x34d5[358]],
                defaultKey: _0x34d5[1125],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](6)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm7": {
                label: _0x6da1xe[_0x34d5[359]],
                defaultKey: _0x34d5[1126],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](7)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm8": {
                label: _0x6da1xe[_0x34d5[360]],
                defaultKey: _0x34d5[1127],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](8)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm9": {
                label: _0x6da1xe[_0x34d5[361]],
                defaultKey: _0x34d5[1128],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](9)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm0": {
                label: _0x6da1xe[_0x34d5[362]],
                defaultKey: _0x34d5[701],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](0)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm10": {
                label: _0x6da1xe[_0x34d5[363]],
                defaultKey: _0x34d5[1129],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](10)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm11": {
                label: _0x6da1xe[_0x34d5[364]],
                defaultKey: _0x34d5[1130],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](11)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm12": {
                label: _0x6da1xe[_0x34d5[365]],
                defaultKey: _0x34d5[1131],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](12)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm13": {
                label: _0x6da1xe[_0x34d5[366]],
                defaultKey: _0x34d5[1132],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](13)
                },
                keyUp: null,
                type: _0x34d5[1120]
            },
            "hk-comm14": {
                label: _0x6da1xe[_0x34d5[367]],
                defaultKey: _0x34d5[1133],
                keyDown: function() {
                    _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](14)
                },
                keyUp: null,
                type: _0x34d5[1120]
            }
        };
    _0x6da1xb[_0x34d5[401]] = {
        lastPressedKey: _0x34d5[68],
        lastKeyId: _0x34d5[68],
        defaultMessageKey: _0x34d5[1098],
        inputClassName: _0x34d5[1134],
        loadDefaultHotkeys: function() {
            _0x6da1x19 = {};
            for (var _0x6da1x1 in _0x6da1x1a) {
                _0x6da1x1a[_0x34d5[406]](_0x6da1x1) && (_0x6da1x19[_0x6da1x1a[_0x6da1x1][_0x34d5[1135]]] = _0x6da1x1)
            };
            _0x6da1x19[_0x34d5[1136]] = this[_0x34d5[1137]]
        },
        loadHotkeys: function() {
            null !== _0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[1138]) ? _0x6da1x19 = JSON[_0x34d5[405]](_0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[1138])) : this[_0x34d5[1139]](), null !== _0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[1140]) && (_0x6da1xe = JSON[_0x34d5[405]](_0x6da1x1[_0x34d5[404]][_0x34d5[403]](_0x34d5[1140])))
        },
        saveHotkeys: function() {
            _0x6da1x1[_0x34d5[404]][_0x34d5[409]](_0x34d5[1138], JSON[_0x34d5[408]](_0x6da1x19)), this[_0x34d5[1141]]()
        },
        saveCommands: function() {
            _0x6da1x3(_0x34d5[1142])[_0x34d5[716]](function() {
                var _0x6da1x1 = _0x6da1x3(this),
                    _0x6da1x2 = _0x6da1x1[_0x34d5[473]](_0x34d5[2]);
                _0x6da1xe[_0x34d5[406]](_0x6da1x2) && (_0x6da1xe[_0x6da1x2] = _0x6da1x1[_0x34d5[445]]())
            }), _0x6da1x1[_0x34d5[404]][_0x34d5[409]](_0x34d5[1140], JSON[_0x34d5[408]](_0x6da1xe))
        },
        resetHotkeys: function() {
            this[_0x34d5[1139]](), _0x6da1x3(_0x34d5[1143])[_0x34d5[716]](function() {
                var _0x6da1x1 = _0x6da1x3(this)[_0x34d5[473]](_0x34d5[2]);
                _0x6da1x1a[_0x6da1x1] && _0x6da1x3(this)[_0x34d5[445]](_0x6da1x1a[_0x6da1x1][_0x34d5[1135]])
            })
        },
        setHotkeysMenu: function() {
            _0x6da1x3(_0x34d5[114])[_0x34d5[437]](_0x34d5[1144] + _0x6da1xd[_0x6da1xc][_0x34d5[1145]] + _0x34d5[1146] + _0x6da1xd[_0x6da1xc][_0x34d5[471]] + _0x34d5[1147] + _0x6da1xd[_0x6da1xc][_0x34d5[738]] + _0x34d5[1148] + _0x6da1xd[_0x6da1xc][_0x34d5[1149]] + _0x34d5[1150] + _0x6da1xd[_0x6da1xc][_0x34d5[1151]] + _0x34d5[1150] + _0x6da1xd[_0x6da1xc][_0x34d5[1152]] + _0x34d5[1153]), _0x6da1x3(_0x34d5[666])[_0x34d5[707]](_0x34d5[1154] + _0x6da1xd[_0x6da1xc][_0x34d5[1155]] + _0x34d5[472]);
            for (keyId in _0x6da1x1a) {
                if (_0x6da1x1a[_0x34d5[406]](keyId)) {
                    var _0x6da1x1 = _0x6da1x1a[keyId],
                        _0x6da1x2 = _0x34d5[68];
                    for (var _0x6da1x4 in _0x6da1x19) {
                        if (_0x6da1x19[_0x34d5[406]](_0x6da1x4) && _0x6da1x19[_0x6da1x4] === keyId) {
                            _0x6da1x2 = _0x6da1x4;
                            break
                        }
                    };
                    if (_0x34d5[1156] === keyId && _0x6da1x17 && !_0x6da1x17[_0x34d5[902]]) {
                        continue
                    };
                    if (_0x34d5[1120] === _0x6da1x1[_0x34d5[1157]]) {
                        var _0x6da1x5 = keyId[_0x34d5[86]](_0x34d5[1158], _0x34d5[68]);
                        _0x6da1x3(_0x34d5[1165])[_0x34d5[437]](_0x34d5[1159] + _0x6da1x5 + _0x34d5[1160] + _0x6da1xe[_0x6da1x5] + _0x34d5[1161] + _0x6da1x1[_0x34d5[1135]] + _0x34d5[1162] + keyId + _0x34d5[1163] + _0x6da1x2 + _0x34d5[1164])
                    } else {
                        _0x6da1x3(_0x34d5[1165])[_0x34d5[437]](_0x34d5[1166] + _0x6da1x1[_0x34d5[519]] + _0x34d5[1167] + _0x6da1x1[_0x34d5[1135]] + _0x34d5[1162] + keyId + _0x34d5[1163] + _0x6da1x2 + _0x34d5[1164])
                    }
                }
            }
        },
        getPressedKey: function(_0x6da1x1) {
            var _0x6da1x2 = _0x34d5[68],
                _0x6da1x3 = _0x34d5[68];
            switch (_0x6da1x1[_0x34d5[1171]] || 17 == _0x6da1x1[_0x34d5[1170]] ? _0x6da1x2 = _0x34d5[1172] : (_0x6da1x1[_0x34d5[1173]] || 18 == _0x6da1x1[_0x34d5[1170]]) && (_0x6da1x2 = _0x34d5[1174]), _0x6da1x1[_0x34d5[1170]]) {
                case 9:
                    _0x6da1x3 = _0x34d5[1168];
                    break;
                case 13:
                    _0x6da1x3 = _0x34d5[1098];
                    break;
                case 16:
                    _0x6da1x3 = _0x34d5[1027];
                    break;
                case 17:
                    break;
                case 18:
                    break;
                case 32:
                    _0x6da1x3 = _0x34d5[1022];
                    break;
                case 37:
                    _0x6da1x3 = _0x34d5[1130];
                    break;
                case 38:
                    _0x6da1x3 = _0x34d5[1131];
                    break;
                case 39:
                    _0x6da1x3 = _0x34d5[1132];
                    break;
                case 40:
                    _0x6da1x3 = _0x34d5[1133];
                    break;
                case 46:
                    _0x6da1x3 = _0x34d5[1169];
                    break;
                case 61:
                    _0x6da1x3 = _0x34d5[1117];
                    break;
                case 187:
                    _0x6da1x3 = _0x34d5[1117];
                    break;
                case 192:
                    _0x6da1x3 = _0x34d5[1102];
                    break;
                default:
                    _0x6da1x3 = String[_0x34d5[827]](_0x6da1x1[_0x34d5[1170]])
            };
            return _0x34d5[68] !== _0x6da1x2 ? _0x34d5[68] !== _0x6da1x3 ? _0x6da1x2 + _0x34d5[1175] + _0x6da1x3 : _0x6da1x2 : _0x6da1x3
        },
        deleteHotkey: function(_0x6da1x1, _0x6da1x2) {
            delete _0x6da1x19[_0x6da1x1], _0x6da1x3(_0x34d5[618] + _0x6da1x2)[_0x34d5[445]](_0x34d5[68])
        },
        setDefaultHotkey: function(_0x6da1x1) {
            var _0x6da1x2 = !1;
            return _0x6da1x1a[_0x6da1x1] && !_0x6da1x19[_0x34d5[406]](_0x6da1x1a[_0x6da1x1][_0x34d5[1135]]) ? (_0x6da1x2 = _0x6da1x1a[_0x6da1x1][_0x34d5[1135]], _0x6da1x19[_0x6da1x2] = _0x6da1x1, _0x6da1x2) : _0x6da1x2
        },
        setHotkey: function(_0x6da1x1, _0x6da1x2) {
            if (_0x6da1x2 && (this[_0x34d5[1176]] !== _0x6da1x1 || this[_0x34d5[1177]] !== _0x6da1x2)) {
                var _0x6da1x4 = _0x6da1x3(_0x34d5[618] + _0x6da1x2)[_0x34d5[445]]();
                if (this[_0x34d5[1178]](_0x6da1x4, _0x6da1x2), _0x34d5[1169] !== _0x6da1x1) {
                    if (_0x6da1x19[_0x6da1x1] && _0x6da1x19[_0x6da1x1] !== _0x6da1x2) {
                        var _0x6da1x5 = _0x6da1x19[_0x6da1x1],
                            _0x6da1x6 = this[_0x34d5[1179]](_0x6da1x5);
                        _0x6da1x6 ? (_0x6da1x19[_0x6da1x6] = _0x6da1x5, _0x6da1x3(_0x34d5[618] + _0x6da1x5)[_0x34d5[445]](_0x6da1x6)) : this[_0x34d5[1178]](_0x6da1x1, _0x6da1x5)
                    };
                    _0x6da1x19[_0x6da1x1] = _0x6da1x2, _0x6da1x3(_0x34d5[618] + _0x6da1x2)[_0x34d5[445]](_0x6da1x1), _0x34d5[1097] === _0x6da1x2 && (_0x6da1x19[_0x34d5[1136]] = _0x6da1x1), this[_0x34d5[1176]] = _0x6da1x1, this[_0x34d5[1177]] = _0x6da1x2
                }
            }
        },
        init: function() {
            this[_0x34d5[1180]](), this[_0x34d5[1181]]()
        }
    };
    var _0x6da1x1b = new _0x6da1xb;
    _0x6da1x1b[_0x34d5[524]](), document[_0x34d5[31]] = function(_0x6da1x1) {
        var _0x6da1x2 = _0x6da1x1b[_0x34d5[1182]](_0x6da1x1);
        if ((_0x34d5[1183] !== _0x6da1x1[_0x34d5[1185]][_0x34d5[1184]] || _0x6da1x1[_0x34d5[1185]][_0x34d5[1186]] === _0x6da1x1b[_0x34d5[1187]] || _0x6da1x2 === _0x6da1x19[_0x34d5[1136]]) && _0x34d5[68] !== _0x6da1x2 && !_0x6da1x18[_0x6da1x2]) {
            if (_0x6da1x18[_0x6da1x2] = !0, _0x6da1x1[_0x34d5[1185]][_0x34d5[1186]] === _0x6da1x1b[_0x34d5[1187]]) {
                return _0x6da1x1[_0x34d5[728]](), void(_0x6da1x1b)[_0x34d5[1188]](_0x6da1x2, _0x6da1x1[_0x34d5[1185]][_0x34d5[2]])
            };
            if (_0x6da1x19[_0x6da1x2]) {
                _0x6da1x1[_0x34d5[728]]();
                var _0x6da1x3 = _0x6da1x19[_0x6da1x2];
                _0x34d5[68] !== _0x6da1x3 && _0x6da1x1a[_0x6da1x3] && _0x6da1x1a[_0x6da1x3][_0x34d5[1189]] && _0x6da1x1a[_0x6da1x3][_0x34d5[1189]]()
            }
        }
    }, document[_0x34d5[1190]] = function(_0x6da1x1) {
        var _0x6da1x2 = _0x6da1x1b[_0x34d5[1182]](_0x6da1x1);
        if (_0x34d5[68] !== _0x6da1x2) {
            if (_0x6da1x19[_0x6da1x2]) {
                var _0x6da1x3 = _0x6da1x19[_0x6da1x2];
                _0x34d5[68] !== _0x6da1x3 && _0x6da1x1a[_0x6da1x3] && _0x6da1x1a[_0x6da1x3][_0x34d5[1191]] && _0x6da1x1a[_0x6da1x3][_0x34d5[1191]]()
            };
            _0x6da1x18[_0x6da1x2] = !1
        }
    }, _0x6da1x1[_0x34d5[804]] = function() {
        _0x6da1x1[_0x34d5[31]] = function(_0x6da1x2) {
            switch (_0x6da1x2[_0x34d5[1170]]) {
                case 81:
                    _0x6da1x1[_0x34d5[83]] && _0x6da1x1[_0x34d5[83]][_0x34d5[1192]] && _0x6da1x1[_0x34d5[83]][_0x34d5[1192]]();
                    break;
                case 27:
                    _0x6da1x2[_0x34d5[728]](), _0x6da1x1[_0x34d5[25]][_0x34d5[26]](300), _0x6da1x3(_0x34d5[1193])[_0x34d5[768]](_0x34d5[974]) && _0x6da1x1[_0x34d5[1194]](), _0x6da1x3(_0x34d5[1195])[_0x34d5[768]](_0x34d5[974]) && _0x6da1x1[_0x34d5[1196]]()
            }
        }, _0x6da1x1[_0x34d5[1190]] = function(_0x6da1x2) {
            81 == _0x6da1x2[_0x34d5[1170]] && _0x6da1x1[_0x34d5[1197]] && _0x6da1x1[_0x34d5[83]][_0x34d5[1197]]()
        }
    }, _0x6da1x1[_0x34d5[1198]] = function(_0x6da1x1) {
        _0x6da1x3(_0x34d5[1199])[_0x34d5[768]](_0x34d5[974]) || (2 == _0x6da1x1[_0x34d5[1200]] ? (_0x6da1x1[_0x34d5[728]](), _0x6da1x17 && _0x6da1x17[_0x34d5[1119]](10)) : (_0x6da1x16[_0x34d5[1201]] && (1 == _0x6da1x1[_0x34d5[1200]] && !_0x6da1x16[_0x34d5[1202]] || 3 == _0x6da1x1[_0x34d5[1200]] && _0x6da1x16[_0x34d5[1202]]) && _0x6da1x17 && _0x6da1x17[_0x34d5[553]](), _0x6da1x16[_0x34d5[1203]] && (3 == _0x6da1x1[_0x34d5[1200]] && !_0x6da1x16[_0x34d5[1202]] || 1 == _0x6da1x1[_0x34d5[1200]] && _0x6da1x16[_0x34d5[1202]]) && _0x6da1x17 && _0x6da1x17[_0x34d5[1020]](!0)))
    }, _0x6da1x1[_0x34d5[1204]] = function(_0x6da1x1) {
        _0x6da1x16[_0x34d5[1203]] && (3 == _0x6da1x1[_0x34d5[1200]] && !_0x6da1x16[_0x34d5[1202]] || 1 == _0x6da1x1[_0x34d5[1200]] && _0x6da1x16[_0x34d5[1202]]) && _0x6da1x17 && _0x6da1x17[_0x34d5[1020]](!1)
    }, _0x6da1x1[_0x34d5[1205]] = function() {
        _0x6da1x1b && _0x6da1x1b[_0x34d5[1205]]()
    }, _0x6da1x1[_0x34d5[1206]] = function() {
        _0x6da1x1b && _0x6da1x1b[_0x34d5[1206]](), _0x6da1x3(_0x34d5[1207])[_0x34d5[39]]()
    }, _0x6da1x1[_0x34d5[1208]] = function() {
        _0x6da1x1[_0x34d5[31]] = function() {}, _0x6da1x3(_0x34d5[1207])[_0x34d5[29]]()
    }, _0x6da1x1[_0x34d5[1209]] = function() {
        _0x6da1x3(_0x34d5[1207])[_0x34d5[39]]()
    }
}(window, window[_0x34d5[0]], window[_0x34d5[1]])
