const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const fs = require('fs');
const multer = require('multer');
const mysql = require('mysql');


// 创建数据库连接
const db = mysql.createConnection({
  host: 'localhost', // 数据库地址
  port : 3306,
  user: 'root', // 数据库用户
  password: 'wei920116', // 数据库密码
  database: 'order_schema' // 要连接的数据库名
});

// 连接数据库
db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});


// 設定靜態文件路徑
app.use(express.static(path.join(__dirname, '..', 'public')));

// 主頁路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/user', (req, res) => {
  db.query('SELECT * FROM user', (error, results, fields) => {
    if (error) {
      res.status(500).send('資料庫查詢錯誤');
      return;
    }
    res.json(results); // 发送JSON格式的数据
  });
});

app.get('/api/user_password', (req, res) => {
  db.query('SELECT * FROM user_password', (error, results, fields) => {
    if (error) {
      res.status(500).send('資料庫查詢錯誤');
      return;
    }
    res.json(results); // 发送JSON格式的数据
  });
});




// 監聽指定端口上的請求
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
