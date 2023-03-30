const fs = require('fs');

fs.readdir('./_posts/', (err, files) => {
    const allfilesArr = files.map((file) => {
        console.log(file);
        const filePath = `./_posts/${file}`;
        const data = fs.readFileSync(filePath, {encoding:'utf8', flag:'r'});
        const fileLinesArr = data.split('\n');
        return fileLinesArr.slice(3).join('\n');
    });
    const allfilesJoined = allfilesArr.join('\n\n\n');
  
const resultData = `
---
layout: page
title: All
permalink: /all/
---


${allfilesJoined}`;
  fs.writeFileSync('all.markdown', resultData, {encoding: 'utf8', flag: 'w'} );
  
});
