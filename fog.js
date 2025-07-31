// 创建云雾效果
function createFog() {
    // 检查是否已创建fog元素
    let fog = document.querySelector('.fog');
    if (!fog) {
        fog = document.createElement('div');
        fog.className = 'fog';
        document.body.appendChild(fog);
    }

    // 创建少量云雾元素
    for (let i = 0; i < 3; i++) {
        const fogElement = document.createElement('div');
        fogElement.style.position = 'fixed';
        fogElement.style.top = Math.random() * 100 + 'vh';
        fogElement.style.left = Math.random() * 100 + 'vw';
        fogElement.style.width = Math.random() * 200 + 100 + 'px';
        fogElement.style.height = Math.random() * 150 + 50 + 'px';
        fogElement.style.background = 'rgba(255, 255, 255, 0.1)';
        fogElement.style.borderRadius = '50%';
        fogElement.style.animation = 'float ' + (Math.random() * 10 + 15) + 's linear infinite';
        fogElement.style.zIndex = '-1';
        fog.appendChild(fogElement);
    }
}

// 执行云雾效果
createFog();