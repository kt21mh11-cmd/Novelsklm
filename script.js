/* الصفحة الاولى */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            if (navActions) navActions.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.right = '5%';
            navLinks.style.backgroundColor = 'rgba(18,13,9,0.97)';
            navLinks.style.backdropFilter = 'blur(20px)';
            navLinks.style.padding = '1.5rem';
            navLinks.style.borderRadius = '1.5rem';
            navLinks.style.width = '220px';
            navLinks.style.zIndex = '99';
            navLinks.style.border = '1px solid rgba(200,155,109,0.3)';
            if (navActions) {
                navActions.style.display = 'flex';
                navActions.style.position = 'absolute';
                navActions.style.top = '260px';
                navActions.style.right = '5%';
                navActions.style.backgroundColor = 'rgba(18,13,9,0.95)';
                navActions.style.padding = '1rem';
                navActions.style.borderRadius = '1.2rem';
                navActions.style.width = '220px';
                navActions.style.flexDirection = 'column';
                navActions.style.gap = '0.7rem';
                navActions.style.backdropFilter = 'blur(16px)';
                navActions.style.border = '1px solid rgba(200,155,109,0.3)';
            }
        }
    })
};
window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
        if (navLinks) navLinks.style.display = '';
        if (navActions) navActions.style.display = '';
        if (navLinks) navLinks.style.position = '';
        if (navActions) navActions.style.position = '';
    } else {
        if (navLinks && navLinks.style.display === 'flex' && window.innerWidth > 900) {
            navLinks.style.display = '';
            navActions.style.display = '';
        }
    }
});
/* الصفحة الثانية روايات مميزة */
// تصفية الكتب بناءً على التصنيف (احترافي و سلس)
const filterBtns = document.querySelectorAll('.filter-btn');
const allCards = document.querySelectorAll('.book-card');
function filterBooks(filterValue) {
    allCards.forEach(card => {
        if (filterValue === 'all') {
            card.style.display = 'flex';
            return;
        }
        const category = card.getAttribute('data-category');
        if (category === filterValue) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // إزالة active من جميع الأزرار
        filterBtns.forEach(bt => bt.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        filterBooks(filterValue);
    });
});
// إضافة تأثيرات للبطاقات لتقليد نعومة عند اللمس
const cards = document.querySelectorAll('.book-card');
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // منع التداخل مع الأزرار
        if (e.target.tagName === 'BUTTON') return;
        // يمكنك إضافة رابط لو أردت
    });
});
/* تجعل جميع البطاقات تظهر بشكل جميل (تأكد من display Flex)*/
allCards.forEach(card => { card.style.display = 'flex'; });


/* الصفحة الثالثة ماذا نقدم */
// =========================
// SCROLL REVEAL ANIMATION
// =========================

// انتظر تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function () {

    // اختيار جميع بطاقات الخدمات
    const serviceCards = document.querySelectorAll('.service-card');

    // إضافة كلاس للبطاقات المخفية أولاً (إذا لم تكن مخفية بالفعل في CSS)
    // CSS بالفعل يبدأ بـ opacity: 0, transform: translateY(70px)

    // وظيفة التحقق من ظهور العناصر في الشاشة
    function checkVisibility() {
        serviceCards.forEach(card => {
            // الحصول على موقع العنصر بالنسبة للشاشة
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // إذا كان العنصر ظاهراً في الشاشة (جزء منه أو كله)
            // (نسبة الظهور: عندما يكون الجزء العلوي للعنصر أقل من 85% من ارتفاع الشاشة)
            if (rect.top < windowHeight - 100 && rect.bottom > 0) {
                card.classList.add('revealed');
            }
        });
    }

    // تشغيل الفحص فور تحميل الصفحة
    checkVisibility();

    // تشغيل الفحص عند التمرير
    window.addEventListener('scroll', function () {
        checkVisibility();
    });

    // تشغيل الفحص عند تغيير حجم الشاشة (لحالات تغيير الاتجاه في الهاتف)
    window.addEventListener('resize', function () {
        checkVisibility();
    });

    // دعم إضافي للأجهزة التي تعمل باللمس
    window.addEventListener('touchmove', function () {
        checkVisibility();
    });
});
// إضافة تأثير إضافي: إشعاع مؤقت عند الضغط على الأيقونة (للأجهزة التي تدعم اللمس)
document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.service-icon');
    icons.forEach(icon => {
        // حدث اللمس للأجهزة المحمولة
        icon.addEventListener('touchstart', function (e) {
            this.style.transform = 'scale(0.95) rotate(-5deg)';
            this.style.background = 'linear-gradient(135deg, #e8a76a, #b97f4b)';
            this.style.boxShadow = '0 0 30px rgba(185, 127, 75, 0.8)';
            // إعادة الوضع الطبيعي بعد 200ms
            setTimeout(() => {
                this.style.transform = '';
                this.style.background = '';
                this.style.boxShadow = '';
            }, 200);
        });
        // حدث الماوس للكمبيوتر
        icon.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.95) rotate(-5deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
// =========================
// SHOP PAGE - NOVELS DATA & LOGIC
// =========================
const novelsData = [
    {
        id: 1,
        title: "مدينة الرماد",
        description: "رواية غموض مليئة بالأسرار والتحقيقات المثيرة.",
        category: "غموض",
        price: 12.99,
        rating: 4.9,
        image: "images/ImgNV8.jpg"
    },
    {
        id: 2,
        title: "رسائل الشتاء",
        description: "قصة دافئة ومؤثرة عن الحب والتضحية.",
        category: "رومانسية",
        price: 9.50,
        rating: 5.0,
        image: "images/ImgNV2.jpg"
    },
    {
        id: 3,
        title: "أطياف السيليكون",
        description: "خيال علمي في عالم مستقبلي مذهل مليء بالتقنية.",
        category: "خيال علمي",
        price: 15.00,
        rating: 4.7,
        image: "images/ImgNV1.jpg"
    },
    {
        id: 4,
        title: "مملكة الظلال",
        description: "فانتازيا ملحمية في عوالم السحر والتنانين.",
        category: "فانتازيا",
        price: 14.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "اللغز الأخير",
        description: "تشويق وغموض حتى الصفحة الأخيرة.",
        category: "غموض",
        price: 11.99,
        rating: 4.9,
        image: "images/ImgNV6.jpg"
    },
    {
        id: 6,
        title: "قلوب متقاطعة",
        description: "رومانسية عصرية بأسلوب شيق.",
        category: "رومانسية",
        price: 8.99,
        rating: 4.6,
        image: "images/ImgNV3.jpg"
    }
];

function renderProducts(products) {
    const grid = document.getElementById('shopGrid');
    const noResults = document.getElementById('noResults');
    if (products.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    grid.innerHTML = products.map(product => `
        <div class="shop-card">
            <div class="shop-image">
                <img src="${product.image}" alt="${product.title}">
                <span class="price-tag">$${product.price}</span>
            </div>
            <div class="shop-content">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="shop-footer">
                    <span class="category">${product.category}</span>
                    <span class="rating">★ ${product.rating}</span>
                </div>
                <button class="buy-btn" data-id="${product.id}">
                    <i class="fa-solid fa-cart-shopping"></i>
                    إضافة إلى السلة
                </button>
            </div>
        </div>
    `).join('');
    revealOnScroll();
}
function filterAndSortProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filtered = [...novelsData];
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    if (priceRange === 'under10') {
        filtered = filtered.filter(p => p.price < 10);
    } else if (priceRange === '10-15') {
        filtered = filtered.filter(p => p.price >= 10 && p.price <= 15);
    } else if (priceRange === 'over15') {
        filtered = filtered.filter(p => p.price > 15);
    }
    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }
    if (sort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }
    renderProducts(filtered);
}
function revealOnScroll() {
    const cards = document.querySelectorAll('.shop-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 80 && rect.bottom > 0) {
            card.classList.add('revealed');
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    renderProducts(novelsData);
    document.getElementById('categoryFilter').addEventListener('change', filterAndSortProducts);
    document.getElementById('sortFilter').addEventListener('change', filterAndSortProducts);
    document.getElementById('priceFilter').addEventListener('change', filterAndSortProducts);
    document.getElementById('searchInput').addEventListener('input', filterAndSortProducts);
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
    setTimeout(revealOnScroll, 100);
});
document.addEventListener('click', function (e) {
    if (e.target.closest('.buy-btn')) {
        const btn = e.target.closest('.buy-btn');
        const id = btn.getAttribute('data-id');
        const product = novelsData.find(p => p.id == id);
        if (product) {
            alert(`✨ تم إضافة "${product.title}" إلى سلة التسوق!`);
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => { btn.style.transform = ''; }, 150);
        }
    }
});
/* صفحة من نحن */
// =========================
// SCROLL REVEAL - ABOUT SECTION
// الظهور التدريجي عند التمرير
// =========================
document.addEventListener('DOMContentLoaded', function () {
    // العناصر التي ستظهر تدريجياً
    const revealElements = document.querySelectorAll('.reveal-right, .reveal-left, .reveal-item');
    // إضافة كلاس مخفي في البداية
    revealElements.forEach(el => {
        el.classList.remove('revealed');
    });
    // وظيفة التحقق من ظهور العناصر
    function checkReveal() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const revealDelay = element.getAttribute('data-delay') || 0;

            // إذا كان العنصر ظاهراً في الشاشة
            if (rect.top < windowHeight - 100 && rect.bottom > 0) {
                setTimeout(() => {
                    element.classList.add('revealed');
                }, revealDelay);
            }
        });
    }
    // تشغيل الفحص عند تحميل الصفحة
    setTimeout(checkReveal, 100);
    // تشغيل الفحص عند التمرير
    window.addEventListener('scroll', checkReveal);
    // تشغيل الفحص عند تغيير حجم الشاشة
    window.addEventListener('resize', checkReveal);
    // إعادة تشغيل الفحص بشكل دوري لتغطية جميع الحالات
    setInterval(checkReveal, 500);
});
// تأثير إضافي: إضافة كلاس للعناوين عند التمرير لزيادة الإشعاع
window.addEventListener('scroll', function () {
    const glowTitle = document.querySelector('.glow-title');
    if (glowTitle) {
        const rect = glowTitle.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            glowTitle.style.animation = 'titleFloat 4s ease-in-out infinite, textGlow 1.5s ease-in-out infinite';
        }
    }
});
// =========================
// FOOTER SCROLL REVEAL
// =========================
document.addEventListener('DOMContentLoaded', function () {
    const footerElements = document.querySelectorAll('.reveal-footer');
    function checkFooterReveal() {
        const windowHeight = window.innerHeight;
        footerElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const delay = element.getAttribute('data-delay') || 0;
            if (rect.top < windowHeight - 80 && rect.bottom > 0) {
                setTimeout(() => {
                    element.classList.add('revealed');
                }, delay);
            }
        });
    }
    // Initial check
    setTimeout(checkFooterReveal, 100);
    // Check on scroll
    window.addEventListener('scroll', checkFooterReveal);
    window.addEventListener('resize', checkFooterReveal);
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert(`✨ شكراً لتسجيلك! سيتم إرسال النشرة البريدية إلى: ${emailInput.value}`);
                emailInput.value = '';
            } else {
                alert('الرجاء إدخال بريدك الإلكتروني');
            }
        });
    }
});