// Xử lý phần chuyển đổi hình ảnh tướng khi chọn vào icon tab tương ứng
const categoryHero = [
    {
        title : "Akali",
        subtitle: "The Rogue Assassin",
        src : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&fit=fill&q=80&w=869',
        src_background: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png?auto=format&fit=fill&q=80&w=656'
    },
    {
        title : "Yasuo",
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

// Phần more menu
document.addEventListener('DOMContentLoaded', function () {
    function createAndAppendListItems() {
        // Mỗi lần gọi đều lấy lại danh sách phần tử mới
        const responsiveDivs = document.querySelectorAll('.responsive-div');
        const responsiveUl = document.getElementById('more-submenu');
        const liAvailable = responsiveUl.querySelector('li'); // Giữ lại li đầu tiên làm "placeholder"
        const responsiveDivs_p = document.querySelectorAll('.responsive-div p');
        const responsiveDivs_p_svg = document.querySelectorAll('.responsive-div p svg');

        if (responsiveDivs_p) {
            responsiveDivs_p.forEach(p => {
                p.style.textTransform = 'none';
                p.classList.remove('text-color-white')
                p.classList.add('text-color-c7c7c7')
                p.classList.remove('text-yellow')
            })
        }
    
        if (responsiveDivs_p_svg) {
            responsiveDivs_p_svg.forEach(svg => {
                svg.style.width = '8px'
                svg.style.height = '8px'
                // Thay đổi màu fill của svg
                const paths = svg.querySelectorAll('path')
                paths.forEach(path => {
                    path.style.fill = '#c7c7c7'
                })
            })
        }

        // Duyệt qua từng div, clone nội dung sang li, sau đó ẩn div gốc
        responsiveDivs.forEach(div => {
            // Nếu div đã bị ẩn rồi (đã chuyển sang li) thì bỏ qua
            if (div.style.display === 'none') return;

            // Tạo li mới với class dựa trên li placeholder
            const li = document.createElement('li');
            if (liAvailable) {
                li.className = liAvailable.className;
                li.classList.remove('margin-top-16');
                li.classList.add('no-hover');
                li.style.marginBottom = '5px';
            }
            
            // Clone nội dung của div, loại bỏ phần không cần thiết (ví dụ: .gach-duoi-mau-xanh)
            const clone = div.cloneNode(true);
            const underline = clone.querySelector('.gach-duoi-mau-xanh');
            if (underline) underline.remove();
            li.innerHTML = clone.innerHTML;
            li.style.textTransform = 'none';

            // Thêm hiệu ứng hover cho li
            li.addEventListener('mouseenter', () => {
                const p = li.querySelector('p');
                if (p) p.style.color = '#f9f9f9';
                const svg = li.querySelector('svg');
                if (svg) {
                    svg.querySelectorAll('path').forEach(path => {
                        path.style.fill = '#f9f9f9';
                    });
                }
            });
            li.addEventListener('mouseleave', () => {
                const p = li.querySelector('p');
                if (p) p.style.color = '';
                const svg = li.querySelector('svg');
                if (svg) {
                    svg.querySelectorAll('path').forEach(path => {
                        path.style.fill = '#c7c7c7';
                    });
                }
            });
            
            // Thêm li vào ul và ẩn đi div gốc
            responsiveUl.appendChild(li);
            div.style.display = 'none';
        });
        
        // Điều chỉnh hiển thị cho ul và căn chỉnh chiều cao các li
        responsiveUl.style.display = 'inline-block';
        const lastLi = responsiveUl.lastElementChild;
        if (lastLi) {
            lastLi.style.marginBottom = '16px';
        }
        let maxHeight = 0;
        const liElements = responsiveUl.querySelectorAll('li');
        liElements.forEach(li => {
            maxHeight = Math.max(maxHeight, li.offsetHeight);
        });
        liElements.forEach(li => {
            li.style.height = maxHeight + 'px';
        });
    }

    function resetListItems() {
        const responsiveUl = document.getElementById('more-submenu');
        const liAvailable = responsiveUl.querySelector('li'); // placeholder ban đầu
        const responsiveDivs = document.querySelectorAll('.responsive-div');
        const responsiveDivs_p = document.querySelectorAll('.responsive-div p');
        const responsiveDivs_p_svg = document.querySelectorAll('.responsive-div p svg');

        // Hiển thị lại các div ban đầu
        responsiveDivs.forEach(div => {
            div.style.display = 'inline-flex';
        });

        const navbarEsport = document.getElementById('navbar-Esport');
        const navbarPatchNote = document.getElementById('navbar-PatchNotes');
        if (window.innerWidth > 1143) {
            const navbarPatchNote = document.getElementById('navbar-PatchNotes');
            // navbarPatchNote.classList.remove('responsive-div');
            navbarPatchNote.style.display = 'inline-flex'
        }
        if (window.innerWidth > 1264) {
            const navbarEsport = document.getElementById('navbar-Esport');
            // navbarEsport.classList.remove('responsive-div');
            navbarEsport.style.display = 'inline-flex'
        }

        // Đặt lại hiển thị của ul và xóa bỏ các li được thêm vào
        responsiveUl.style.display = 'block';
        while (responsiveUl.lastChild !== liAvailable) {
            responsiveUl.removeChild(responsiveUl.lastChild);
        }
        if (responsiveDivs_p) {
            responsiveDivs_p.forEach(p => {
                p.style.textTransform = '';
                p.classList.add('text-color-white')
                p.classList.remove('text-color-c7c7c7')
                p.classList.add('text-yellow')
            })
        }
    
        if (responsiveDivs_p_svg) {
            responsiveDivs_p_svg.forEach(svg => {
                svg.style.width = ''
                svg.style.height = ''
                // Thay đổi màu fill của svg
                const paths = svg.querySelectorAll('path')
                paths.forEach(path => {
                    path.style.fill = ''
                })
            })
        }

        if (liAvailable) {
            liAvailable.classList.add('margin-bottom-16')
            liAvailable.style.marginBottom = ''
        }
    }

    window.createAndAppendListItems = createAndAppendListItems
    window.resetListItems = resetListItems

    function handleResize() {
        const threshold = 1287;
        const navbarEsport = document.getElementById('navbar-Esport');
        const navbarPatchNote = document.getElementById('navbar-PatchNotes');

        if (window.innerWidth < threshold) {
            // Với kích thước nhỏ hơn threshold, xử lý chuyển div sang ul
            if (window.innerWidth <= 1264) {
                navbarEsport.classList.add('responsive-div');
            } 
            else {
                navbarEsport.classList.remove('responsive-div');
            }
            if (window.innerWidth <= 1143) {
                navbarPatchNote.classList.add('responsive-div');
            } 
            else {
                navbarPatchNote.classList.remove('responsive-div');
            }
            createAndAppendListItems();
        } else {
            // Với kích thước lớn trở lại, hiển thị lại div gốc
            resetListItems();
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});

// Khi click vào nút "World"
function clickWorld() {
    const WORLDButton = document.querySelector('.WORLD')
    const listLanguage = document.querySelector('.locale-switcher-language')

    WORLDButton.addEventListener('click', function(e) {
        e.stopPropagation()
        if (listLanguage) {
            listLanguage.style.display = (listLanguage.style.display === 'block') ? 'none' : 'block'
        }
    })
    // Khi click ra ngoài nút WORLD hoặc bên ngoài list => ẩn list
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.WORLD') && !e.target.closest('.locale-switcher-language')) {
            listLanguage.style.display = 'none'
        }
    })
}
clickWorld()

// Khi click vào nút "Tìm kiếm"
function clickSearch() {
    const searchButton = document.querySelector('.search-input-container');
    const inputSearch = document.querySelector('.search-input-container input');
    const cancelButton = document.querySelector('.button-cancel');
    
    searchButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài, khi click vào nút search thì chỉ có sự kiện ở nút search diễn ra mà không làm kích hoạt các nút kháckhác
        inputSearch.style.width = '270px';
        cancelButton.style.visibility = 'visible';
        window.createAndAppendListItems()
    });
    cancelButton.addEventListener('click', function(e) {
        e.stopPropagation();
        inputSearch.style.width = '25px';
        cancelButton.style.visibility = 'hidden';
        window.resetListItems()
    });
}
clickSearch();

// Thanh trượt tin tức
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.trigger-previous');
    const nextButton = document.querySelector('.trigger-next');
    const slider = document.querySelector('.vi-tri-cac-khoi-tintuc');
    const cards = document.querySelectorAll('.vi-tri-cac-khoi-tintuc .card');

    const triggerNextColor = document.querySelector('.trigger-next .color-trigger')
    const triggerPrevColor = document.querySelector('.trigger-previous .color-trigger')

    const indicator = document.querySelector('.indicator')

    const totalCards = cards.length;
    
    // Giả sử bạn tính số card hiển thị trong container dựa trên kích thước container
    const container = document.querySelector('.container-tin-tuc');
    let containerWidth = container.offsetWidth;
    let cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
    let visibleCards = Math.floor(containerWidth / cardWidth);
    
    let currentSlide = 0; // số lượng card đã dịch chuyển
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }
    
    nextButton.addEventListener('click', () => {
        // Kiểm tra nếu còn card ẩn bên phải
        if (currentSlide < totalCards - visibleCards) {
            currentSlide++;
            updateSlider();
            if (visibleCards === 2) {
                indicator.style.width = '100%'
            } else if (visibleCards === 1) {
                if (currentSlide < totalCards - visibleCards) {
                    indicator.style.width = '50%'
                } else {
                    indicator.style.width = '100%'
                }
            }
            triggerPrevColor.style.backgroundColor = '#c8aa6e'
            if (currentSlide === totalCards - visibleCards) {
                triggerNextColor.style.backgroundColor = '#ced0d4'
                nextButton.disabled = true
            } else {
                nextButton.disabled = false
            }
            prevButton.disabled = false
        } 
    });
    
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
            if (visibleCards === 2) {
                indicator.style.width = '0%'
            } else if (visibleCards === 1) {
                if (currentSlide > 0) {
                    indicator.style.width = '50%'
                } else {
                    indicator.style.width = '0%'
                }
            }
            triggerNextColor.style.backgroundColor = '#c8aa6e'
            if (currentSlide === 0) {
                triggerPrevColor.style.backgroundColor = '#ced0d4'
                prevButton.disabled = true
            } else {
                prevButton.disabled = false
            }
            nextButton.disabled = false
        }
    });
    
    // Nếu cần, cập nhật lại số lượng card hiển thị khi thay đổi kích thước màn hình
    window.addEventListener('resize', () => {
        containerWidth = container.offsetWidth;
        cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
        visibleCards = Math.floor(containerWidth / cardWidth);
        updateSlider();
    });
});

// Xử lý phần thanh trượt của các thể loại tướng
document.addEventListener('DOMContentLoaded', function () {
    function thanhTruotTuong() {
        const thanhTruot = document.querySelector('.khoi-thanh-truot-tin-tuc#the-loai-tuong')
        const iconCacTuong = document.querySelector('.icon-cac-tuong')
        if (window.innerWidth <= 1287) {
            thanhTruot.style.opacity = '1'
        } else {
            thanhTruot.style.opacity = '0'
        }
    }

    window.addEventListener('resize', thanhTruotTuong)
    thanhTruotTuong()
})

// Mobile menu 
function openMobileMenu() {
    // Chỉ chọn phần tử cần mở menu, ví dụ nếu menu có class riêng như .mobile-menu
    const mobileMenuContainer = document.querySelector('.mobile-menu');
    if (mobileMenuContainer) {
        mobileMenuContainer.style.visibility = 'visible';
    }
}

function closeMobileMenu() {
    const mobileMenuContainer = document.querySelector('.mobile-menu');
    if (mobileMenuContainer) {
        mobileMenuContainer.style.visibility = 'hidden';
    }
}

function mobileMenu() {
    // Các nút mở và đóng menu được phân biệt bằng selector riêng
    const openMenuButton = document.querySelector('.button-detail-PLAYNOW');
    const closeMenuButton = document.querySelector('.mobile-menu-close');

    if (openMenuButton) {
        openMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            openMobileMenu();
        });
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileMenu();
        });
    }
}

mobileMenu();

// Xóa text khi click vào nút xóa
document.addEventListener('DOMContentLoaded', function () {
    const cancelButton = document.querySelector('.mobile-menu-search-cancel');
    const searchInput = document.querySelector('.mobile-menu-search-div input[type="text"]');
    
    if (cancelButton && searchInput) {
        cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
            searchInput.value = '';
        });
    }
});

// 
document.addEventListener('DOMContentLoaded', function() {
    const buttonMenuSubLinkNews = document.querySelector('#menu-link-news')
    const iconArrow = document.querySelector('#icon-arrow-news')
    const subMenu = document.querySelectorAll('.mobile-menu-sublink')

    buttonMenuSubLinkNews.addEventListener('click', function() {
        subMenu.forEach((sub, index) => {
            if (sub.style.display === 'flex') {
                sub.style.display = 'none'
                iconArrow.style.transform = 'rotate(90deg)'
            } else {
                sub.style.display = 'flex'
                iconArrow.style.transform = 'rotate(270deg)'
            }
        })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const buttonMenuSubLinkDiscover = document.querySelector('#menu-link-discover');
    const iconArrow = document.querySelector('#icon-arrow-discover');
    let subMenus = document.querySelectorAll('.open-menu-sublink');

    buttonMenuSubLinkDiscover.addEventListener('click', function() {
        subMenus.forEach((sub, index) => {
            if (sub.style.display === 'flex') {
                sub.style.display = 'none'
                iconArrow.style.transform = 'rotate(90deg)'
            } else {
                sub.style.display = 'flex'
                iconArrow.style.transform = 'rotate(270deg)'
            }
        })
    })
})