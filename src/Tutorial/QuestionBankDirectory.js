const fs = require('fs');
const path = require('path');

// 获取当前组件 A 文件所在的目录
const currentDirectory = path.dirname(__filename);

// 读取当前目录下的所有文件
fs.readdir(currentDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // 过滤出所有以 ".js" 结尾的文件
  const jsFiles = files.filter((file) => file.endsWith('.js'));

  // 导入并使用所有符合条件的文件
  jsFiles.forEach((file) => {
    const module = require(path.join(currentDirectory, file));
    // 根据文件名去掉 ".js" 后缀作为属性名，并将模块导出
    const propertyName = path.basename(file, '.js');
    exports[propertyName] = module;
  });

  console.log('All JavaScript files imported and exported in component A.');
});
