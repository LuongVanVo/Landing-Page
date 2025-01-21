// Xử lý phần chuyển đổi hình ảnh tướng khi chọn vào icon tab tương ứng
const categoryHero = [
    {
        title : "Akali",
        subtitle: "The Rogue Assassin",
        src : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&fit=fill&q=80&w=869',
        src_background: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png?auto=format&fit=fill&q=80&w=656'
    },
    {
        title : "Yasou",
        subtitle: "The Unforgiven",
        src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?auto=format&fit=fill&q=80&w=668',
        src_background: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fab36e5433f9457968d5f4e5c2ebed38fdd4b17c-656x657.png?auto=format&fit=fill&q=80&w=656'
    },
    {
        title : "Lux",
        subtitle: "The Lady of Luminosity",
        src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=668',
        src_background: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b5fc531af3d3e8ef47d72cbf5a2ccdddd7912276-656x657.png?auto=format&fit=fill&q=80&w=656'
    },
    {
        title : "Jinx",
        subtitle: "The Loose Cannon",
        src : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=668',
        src_background: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/e5282eb187f0a06c879fe6996c9831ff2d7752a3-656x657.svg?auto=format&fit=fill&q=80&w=656'
    },
    {
        title : "Thresh",
        subtitle: "The Chain Warden",
        src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=668',
        src_background: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a2d0a92f82549cafa4006bc47e8d7287505a3c40-656x657.png?auto=format&fit=fill&q=80&w=656'
    },
    {
        title: "Leona",
        subtitle: "The Radiant Dawn",
        src : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=668',
        src_background: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ac80f85e9c522cb59b932c1b95caf3fa1ef81a13-656x657.png?auto=format&fit=fill&q=80&w=656'
    }
]

function changeHero(index)
{
    const imageHero = document.getElementById('hero-image')
    const titleHero = document.getElementById('hero-title')
    const subtitleHero = document.getElementById('hero-subtitle')
    const backgroundHero = document.getElementById('hero-background')

    imageHero.src = categoryHero[index].src
    subtitleHero.textContent = categoryHero[index].subtitle
    titleHero.textContent = categoryHero[index].title
    backgroundHero.src = categoryHero[index].src_background

    // Hủy lớp inactive để hiển thị màu, hover của icon ban đầu khi được chọn
    document.querySelectorAll('.icon-thu-nhat').forEach((li, liIndex) => {
        if (liIndex === index) {
            li.classList.remove('tab--inactive')
            li.classList.add('tab-active')
            li.classList.add('no-hover')
            
        } else {
            li.classList.add('tab--inactive')
            li.classList.remove('tab-active')
            li.classList.remove('no-hover')
        }
    })
}


// Chuyển đổi video map, background và tiêu đề của các map
const mapList = [
    {
        title: "the most popular game mode",
        description: "Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.",
        src: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4",
        background_map:  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0eb5bc3bbb7794eceea3a5e7948906e1cbcd027f-5120x1810.png?auto=format&fit=fill&q=80&w=1899"
    }, 
    {
        title: "ALL RANDOM, ALL MID",
        description: "Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.",
        src: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4",
        background_map: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/de076d7f25b6472f2a6f72a5795fc182d9413962-5120x1810.png?auto=format&fit=fill&q=80&w=1491"
    },
    {
        title: "A FREE-FOR-ALL WAR FOR SUPREMACY",
        description: "Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing.",
        src: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4",
        background_map: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/973e16ef8399297ebf1856cde64444d9a18631a0-5120x1810.png?auto=format&fit=fill&q=80&w=1491"
    }
]

function changeMap(index) {
    const mapTitle = document.getElementById('media-title');
    const mapDescription = document.getElementById('map-description');
    const mapVideo = document.getElementById('media-video')
    const mapBackground = document.getElementById('background-map')

    mapTitle.textContent = mapList[index].title
    mapDescription.textContent = mapList[index].description
    mapVideo.src = mapList[index].src
    mapBackground.src = mapList[index].background_map

    // Hủy lớp inactive để hiển thị màu, hover của icon ban đầu khi được chọn
    document.querySelectorAll('#li-icon-map').forEach((li, liIndex) => {
        if (liIndex === index) {
            li.classList.remove('tab--inactive')
            li.classList.add('tab-active')
            li.classList.add('no-hover')
            
        } else {
            li.classList.add('tab--inactive')
            li.classList.remove('tab-active')
            li.classList.remove('no-hover')
        }
    })
}

// Thêm sự kiện click cho mỗi nút tương ứng
document.querySelectorAll('#li-icon-map').forEach((li, index) => {
    li.addEventListener('click', function() {
        changeMap(index)
    })
})


// Thêm sự kiện click cho mỗi nút tương ứng
document.querySelectorAll('.icon-thu-nhat').forEach((li, index) => {
    li.addEventListener('click', function() {
        changeHero(index)
    })
})

// Hàm đổi tên thẻ div thành li và thêm vào ul
function changeDivToLiAndAddUl(divElement, ulElement) {
    if (!divElement || divElement.tagName !== "DIV" || !ulElement || ulElement.tagName !== "UL") {
        return
    }

    // Tạo thẻ li mới
    const liElement = document.createElement("li")
    liElement.className = "list-style-none text-hover margin-top-16 justify-content-center align-items-center margin-bottom-16"
    liElement.innerHTML = divElement.innerHTML

    // Them li vao ul
    ulElement.appendChild(liElement)

    divElement.remove()
}

// Hàm xử lý khi màn hình co lại
function handleResponsive(divContainerId, ulContainerId, maxVisibleWidth) {
    const divContainer = document.getElementById(divContainerId)
    const ulContainer = document.getElementById(ulContainerId)

    if (!divContainer || !ulContainer) {
        return
    }

    // Lấy danh sách các thẻ div con
    const divElements = divContainer.querySelectorAll('.text-tieu-de:not(#more-submenu)')

    divElements.forEach((divElement) => {
        const rect = divElement.getBoundingClientRect()

        if (rect.right > maxVisibleWidth) {
            changeDivToLiAndAddUl(divElement, ulContainer)
        }
    })
}

window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth
    const threshold = Math.max(screenWidth - 100, 0)
    handleResponsive("header-nav", "more-submenu", threshold)
})
