
document.addEventListener('DOMContentLoaded', function() {
    function openIframedUrlInNewBlank(url) {
        const newWindow = window.open('about:blank', '_blank');

        if (newWindow) {
            newWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>about:blank</title>
                    <style>
                        body, html {
                            margin: 0;
                            padding: 0;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                        }
                        iframe {
                            width: 100%;
                            height: 100%;
                            border: none;
                        }
                    </style>
                </head>
                <body>
                    <iframe src="${url}" frameborder="0"></iframe>
                </body>
                </html>
            `);
            newWindow.document.close();
        } else {
            console.error("Please enable popups to continue!");
        }
    }

    document.getElementById('toggle').addEventListener('change', function() {
        if (this.checked) {
            openIframedUrlInNewBlank('info.html');
        } else {
            console.log("Toggle is OFF.");
        }
    });
});
