"use strict";

const express = require('express')
const app = express()
const port = 3000

// Routes
app.use(express.static("pages"));
// Static assets
app.use("/assets", express.static("assets"));
// Metadata
app.use("/robots.txt", express.static("assets/meta/robots.txt"));
app.use("/favicon.ico", express.static("assets/meta/favicon.ico"));
app.use("/android-chrome-192x192.png", express.static("assets/meta/android-chrome-192x192.png"));
app.use("/android-chrome-512x512.png", express.static("assets/meta/android-chrome-512x512.png"));
app.use("/apple-touch-icon.png", express.static("assets/meta/apple-touch-icon.png"));
app.use("/favicon-16x16.png", express.static("assets/meta/favicon-16x16.png"));
app.use("/favicon-32x32.png", express.static("assets/meta/favicon-32x32.png"));
app.use("/site.webmanifest", express.static("assets/meta/site.webmanifest"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});