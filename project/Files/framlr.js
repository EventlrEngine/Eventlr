        (function () {
            // Retrieve remote BrowserWindow
            const {BrowserWindow} = require('electron').remote

            function init() {
                // Minimize task
                document.getElementById("minimize").addEventListener("click", (e) => {
                    var window = BrowserWindow.getFocusedWindow();
                    window.minimize();
                });

                // Maximize window
                document.getElementById("maximize").addEventListener("click", (e) => {
                    var window = BrowserWindow.getFocusedWindow();
                    if(window.isMaximized()) {
                        window.unmaximize();
						document.getElementById("maximize").classList.remove("restore");
                    }
					else {
                        window.maximize();
						document.getElementById("maximize").classList.add("restore");
                    }
                });

                // Close app
                document.getElementById("close").addEventListener("click", (e) => {
                    var window = BrowserWindow.getFocusedWindow();
                    window.close();
                });
            };

            document.onreadystatechange =  () => {
                if (document.readyState == "complete") {
                    init();
                }
            };
        })();