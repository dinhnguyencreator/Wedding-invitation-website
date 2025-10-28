// Language Switcher with i18n Support

// Translation data
const translations = {
    vi: {
        hero: {
            wedding: "Đám Cưới",
            date: "27 Tháng 12, 2025"
        },
        countdown: {
            title: "Đếm Ngược Đến Ngày Trọng Đại",
            days: "Ngày",
            hours: "Giờ",
            minutes: "Phút",
            seconds: "Giây"
        },
        couple: {
            title: "Cô Dâu & Chú Rể",
            groom: "Chú Rể",
            bride: "Cô Dâu",
            groomFather: "Con ông: Nguyễn Văn A",
            groomMother: "Con bà: Trần Thị B",
            brideFather: "Con ông: Lê Văn C",
            brideMother: "Con bà: Phạm Thị D"
        },
        timeline: {
            title: "Câu Chuyện Tình Yêu"
        },
        gallery: {
            title: "Album Ảnh Cưới"
        },
        venue: {
            title: "Địa Điểm Tổ Chức",
            restaurant: "Nhà Hàng Tiệc Cưới",
            address: "194 Hoàng Quốc Việt, Cầu Giấy, Hà Nội",
            time: "18:00 - 27/12/2025",
            viewMap: "Xem Bản Đồ"
        },
        rsvp: {
            title: "Xác Nhận Tham Dự",
            subtitle: "Vui lòng cho chúng tôi biết bạn có thể tham dự không",
            nameLabel: "Họ và Tên",
            namePlaceholder: "Nhập họ và tên của bạn",
            attendanceLabel: "Tình Trạng Tham Dự",
            attendanceSelect: "Chọn tình trạng",
            attendanceYes: "Sẽ tham dự",
            attendanceNo: "Không thể tham dự",
            attendanceMaybe: "Chưa chắc chắn",
            guestCountLabel: "Số Người Tham Dự",
            vegetarianLabel: "Tôi ăn chay",
            matchmakingLabel: "Tôi muốn tham gia \"Tìm người yêu\" tại tiệc cưới",
            genderLabel: "Giới Tính",
            genderSelect: "Chọn giới tính",
            genderMale: "Nam",
            genderFemale: "Nữ",
            genderOther: "Khác",
            socialLinkLabel: "Link Mạng Xã Hội (Facebook, Instagram, Zalo...)",
            socialLinkPlaceholder: "https://facebook.com/yourprofile",
            socialLinkHint: "Chia sẻ link để chúng tôi có thể kết nối bạn với những người phù hợp",
            messageLabel: "Lời Nhắn",
            messagePlaceholder: "Gửi lời chúc đến cô dâu chú rể...",
            submitButton: "Gửi Xác Nhận"
        },
        gift: {
            title: "Hộp Mừng Cưới",
            subtitle: "Thay vì hoa và quà tặng, chúng tôi sẽ rất vui nếu nhận được lời chúc phúc từ quý khách",
            groom: "Chú Rể",
            bride: "Cô Dâu",
            bank: "Ngân hàng:",
            copyButton: "Sao chép STK",
            qrLabel: "Quét mã QR để chuyển khoản",
            note: "Sự hiện diện của quý khách là món quà ý nghĩa nhất với chúng tôi!"
        },
        footer: {
            thankYou: "Thank You",
            subtitle: "Cảm ơn bạn đã ghé thăm!"
        },
        invitation: {
            loading: "Đang tải thiệp mời...",
            respectfullyInvite: "Trân trọng kính mời",
            clickHint: "Nhấp vào phong thư để mở thiệp mời",
            cardTitle: "THIỆP MỜI ĐÁM CƯỚI",
            infoTitle: "THÔNG TIN ĐÁM CƯỚI",
            weddingDate: "Thứ Bảy, 27 Tháng 12, 2025",
            weddingTime: "18:00 Giờ",
            quote: '"Tình yêu là điều tuyệt vời nhất mà hai con người có thể trao cho nhau"',
            groomFamily: "Gia Đình Chú Rể",
            groomFather: "Ông: Nguyễn Văn A",
            groomMother: "Bà: Trần Thị B",
            groomSon: "Con trai: Nguyễn Đức Khánh",
            brideFamily: "Gia Đình Cô Dâu",
            brideFather: "Ông: Lê Văn C",
            brideMother: "Bà: Phạm Thị D",
            brideDaughter: "Con gái: Lê Hải Ngọc",
            venueTitle: "Địa Điểm Tổ Chức",
            presenceMessage: "Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi",
            confirmAttendance: "Xác Nhận Tham Dự",
            weddingInfo: "Thông Tin Đám Cưới"
        }
    },
    en: {
        hero: {
            wedding: "Wedding",
            date: "December 27, 2025"
        },
        countdown: {
            title: "Countdown to Our Special Day",
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds"
        },
        couple: {
            title: "Bride & Groom",
            groom: "Groom",
            bride: "Bride",
            groomFather: "Son of: Mr. Nguyen Van A",
            groomMother: "And: Mrs. Tran Thi B",
            brideFather: "Daughter of: Mr. Le Van C",
            brideMother: "And: Mrs. Pham Thi D"
        },
        timeline: {
            title: "Our Love Story"
        },
        gallery: {
            title: "Wedding Gallery"
        },
        venue: {
            title: "Venue",
            restaurant: "Wedding Reception",
            address: "194 Hoang Quoc Viet, Cau Giay, Hanoi",
            time: "6:00 PM - December 27, 2025",
            viewMap: "View Map"
        },
        rsvp: {
            title: "RSVP",
            subtitle: "Please let us know if you can make it",
            nameLabel: "Full Name",
            namePlaceholder: "Enter your full name",
            attendanceLabel: "Attendance Status",
            attendanceSelect: "Select status",
            attendanceYes: "Will attend",
            attendanceNo: "Can't attend",
            attendanceMaybe: "Not sure yet",
            guestCountLabel: "Number of Guests",
            vegetarianLabel: "I'm vegetarian",
            matchmakingLabel: "I want to join \"Find Your Love\" at the wedding",
            genderLabel: "Gender",
            genderSelect: "Select gender",
            genderMale: "Male",
            genderFemale: "Female",
            genderOther: "Other",
            socialLinkLabel: "Social Media Link (Facebook, Instagram, Zalo...)",
            socialLinkPlaceholder: "https://facebook.com/yourprofile",
            socialLinkHint: "Share your link so we can connect you with suitable people",
            messageLabel: "Message",
            messagePlaceholder: "Send your wishes to the bride and groom...",
            submitButton: "Submit RSVP"
        },
        gift: {
            title: "Wedding Gift",
            subtitle: "Instead of flowers and gifts, we would be delighted to receive your best wishes",
            groom: "Groom",
            bride: "Bride",
            bank: "Bank:",
            copyButton: "Copy Account",
            qrLabel: "Scan QR code to transfer",
            note: "Your presence is the most meaningful gift to us!"
        },
        footer: {
            thankYou: "Thank You",
            subtitle: "Thanks for visiting!"
        },
        invitation: {
            loading: "Loading invitation...",
            respectfullyInvite: "Respectfully Invite",
            clickHint: "Click the envelope to open invitation",
            cardTitle: "WEDDING INVITATION",
            infoTitle: "WEDDING INFORMATION",
            weddingDate: "Saturday, December 27, 2025",
            weddingTime: "6:00 PM",
            quote: '"Love is the most wonderful thing two people can give to each other"',
            groomFamily: "Groom's Family",
            groomFather: "Father: Mr. Nguyen Van A",
            groomMother: "Mother: Mrs. Tran Thi B",
            groomSon: "Son: Nguyen Duc Khanh",
            brideFamily: "Bride's Family",
            brideFather: "Father: Mr. Le Van C",
            brideMother: "Mother: Mrs. Pham Thi D",
            brideDaughter: "Daughter: Le Hai Ngoc",
            venueTitle: "Venue",
            presenceMessage: "Your presence is the greatest honor for our family",
            confirmAttendance: "Confirm Attendance",
            weddingInfo: "Wedding Information"
        }
    }
};

// Current language (default: Vietnamese)
let currentLang = localStorage.getItem('weddingLang') || 'vi';

// Initialize language switcher
function initLanguage() {
    // Set initial language
    setLanguage(currentLang);

    // Toggle dropdown
    const langToggle = document.getElementById('langToggle');
    const languageSwitcher = document.getElementById('languageSwitcher');
    const langDropdown = document.getElementById('langDropdown');

    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            languageSwitcher.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (languageSwitcher && !languageSwitcher.contains(e.target)) {
            languageSwitcher.classList.remove('active');
        }
    });

    // Language option click handlers
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = option.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                setLanguage(lang);
                languageSwitcher.classList.remove('active');
            }
        });
    });
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('weddingLang', lang);

    // Update current language display
    const currentLangFlag = document.getElementById('currentLangFlag');
    const currentLangText = document.getElementById('currentLangText');

    if (currentLangFlag && currentLangText) {
        if (lang === 'vi') {
            currentLangFlag.textContent = '🇻🇳';
            currentLangText.textContent = 'VI';
        } else {
            currentLangFlag.textContent = '🇬🇧';
            currentLangText.textContent = 'EN';
        }
    }

    // Update active state in dropdown
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // Update all translated elements
    updateContent();

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
}

// Update content based on current language
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[currentLang], key);

        if (translation) {
            element.textContent = translation;
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getNestedTranslation(translations[currentLang], key);

        if (translation) {
            element.placeholder = translation;
        }
    });

    // Update form select options
    updateFormSelects();
}

// Update form select options
function updateFormSelects() {
    const attendance = document.getElementById('attendance');
    if (attendance) {
        const selectedValue = attendance.value;
        const trans = translations[currentLang].rsvp;

        attendance.innerHTML = `
            <option value="">${trans.attendanceSelect}</option>
            <option value="Sẽ tham dự">${trans.attendanceYes}</option>
            <option value="Không thể tham dự">${trans.attendanceNo}</option>
            <option value="Chưa chắc chắn">${trans.attendanceMaybe}</option>
        `;

        if (selectedValue) {
            attendance.value = selectedValue;
        }
    }

    const gender = document.getElementById('gender');
    if (gender) {
        const selectedValue = gender.value;
        const trans = translations[currentLang].rsvp;

        gender.innerHTML = `
            <option value="">${trans.genderSelect}</option>
            <option value="Nam">${trans.genderMale}</option>
            <option value="Nữ">${trans.genderFemale}</option>
            <option value="Khác">${trans.genderOther}</option>
        `;

        if (selectedValue) {
            gender.value = selectedValue;
        }
    }
}

// Helper function to get nested translation
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Get current language (for use in other scripts)
function getCurrentLanguage() {
    return currentLang;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setLanguage,
        getCurrentLanguage,
        translations
    };
}
