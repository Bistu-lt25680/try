/*
function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('menu-open')) {
        menu.classList.remove('menu-open');
        menu.classList.add('menu-closed');
    } else {
        menu.classList.remove('menu-closed');
        menu.classList.add('menu-open');
    }
}

// 点击目录以外的地方收起目录
/*
window.onclick = function(event) {
    var menu = document.getElementById('menu');
    if (!event.target.matches('.nav2') && menu.classList.contains('menu-open')) {
        menu.classList.remove('menu-open');
        menu.classList.add('menu-closed');
    }
}

*/

//获取坐标
document.getElementById('school-map').addEventListener('click', function(event) {
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`X: ${x}, Y: ${y}`);
});


function showInfo(title, text) {
    document.getElementById('infoTitle').innerText = title;
    document.getElementById('infoText').innerText = text;
    document.getElementById('infoPanel').classList.add('open');
}

function hideInfo() {
    document.getElementById('infoPanel').classList.remove('open');
}

// 阻止点击信息面板时关闭面板
document.getElementById('infoPanel').addEventListener('click', function(event) {
    event.stopPropagation();
});

function updateMapCoords() {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    const areas = document.querySelectorAll('area');
    const coordsData = [
        {
            alt: '图书馆',
            coords: `${700/1280*currentWidth},${(410/469-0.25)*currentHeight},${770/1280*currentWidth},${(482/469-0.25)*currentHeight}`
        },
        {
            alt: '学生发展中心',
            coords: `${832/1280*currentWidth},${(448/469-0.25)*currentHeight},${881/1280*currentWidth},${(494/469-0.25)*currentHeight}`
        },
        {
            alt: '体育馆',
            coords: `${910/1280*currentWidth},${(447/469-0.25)*currentHeight},${968/1280*currentWidth},${(493/469-0.25)*currentHeight}`
        },
        {
            alt: '二食堂',
            coords: `${564/1280*currentWidth},${(562/469-0.25)*currentHeight},${585/1280*currentWidth},${(556/469-0.25)*currentHeight},${586/1280*currentWidth},${(535/469-0.25)*currentHeight},${553/1280*currentWidth},${(533/469-0.25)*currentHeight},${530/1280*currentWidth},${(553/469-0.25)*currentHeight},${531/1280*currentWidth},${(553/469-0.25)*currentHeight}`
        },
        {
            alt: '学一公寓A座',
            coords: `${860/1280*currentWidth},${(587/469-0.25)*currentHeight},${860/1280*currentWidth},${(600/469-0.25)*currentHeight},${912/1280*currentWidth},${(600/469-0.25)*currentHeight},${914/1280*currentWidth},${(650/469-0.25)*currentHeight},${926/1280*currentWidth},${(650/469-0.25)*currentHeight},${926/1280*currentWidth},${(588/469-0.25)*currentHeight}`
        },
        {
            alt: '东门',
            coords: `${991/1280*currentWidth},${(368/469-0.25)*currentHeight},${25/1280*currentWidth}`
        }
    ];

    areas.forEach(area => {
        const data = coordsData.find(item => item.alt === area.alt);
        if (data) {
            area.coords = data.coords;
        }
    });
}

window.addEventListener('resize', updateMapCoords);
window.addEventListener('load', updateMapCoords);

