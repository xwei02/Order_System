const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// 設定靜態文件路徑
app.use(express.static(path.join(__dirname, '..', 'public')));

// 主頁路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// 監聽指定端口上的請求
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
