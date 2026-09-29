// ============ Mock Data ============

const CURRENT_CUSTOMER = {
  id: 1,
  org: 'Tập đoàn Nam Long',
  email: 'monitoring@namlonggroup.com',
  planId: 3,
  plan: { name: 'Professional', crawlLimit: 50000, keywordLimit: 100, topicLimit: 50, sourceLimit: 30, price: 1500000 },
  usage: { crawl: 24680, keywords: 45, topics: 12, sources: 18 }
};

const SOURCES = [
  { id: 1, name: 'Báo VnExpress', url: 'https://vnexpress.net', type: 'Báo chí', status: 'active', addedAt: '2026-03-20', topicIds: [1, 2, 4], keywordIds: [1, 2, 3] },
  { id: 2, name: 'Báo Tuổi Trẻ', url: 'https://tuoitre.vn', type: 'Báo chí', status: 'active', addedAt: '2026-03-20', topicIds: [1, 3], keywordIds: [1, 4] },
  { id: 3, name: 'Báo Thanh Niên', url: 'https://thanhnien.vn', type: 'Báo chí', status: 'active', addedAt: '2026-04-01', topicIds: [2, 4], keywordIds: [1, 5] },
  { id: 4, name: 'Fanpage Sở TT&TT HG', url: 'https://facebook.com/sottt.haugiang', type: 'Facebook Fanpage', status: 'active', addedAt: '2026-04-05', topicIds: [1, 3], keywordIds: [2] },
  { id: 5, name: 'Báo Dân Trí', url: 'https://dantri.com.vn', type: 'Báo chí', status: 'active', addedAt: '2026-04-10', topicIds: [2, 4], keywordIds: [3] },
  { id: 6, name: 'YouTube VTV Huế', url: 'https://youtube.com/@vtvhue', type: 'YouTube', status: 'active', addedAt: '2026-05-01', topicIds: [3], keywordIds: [4] },
  { id: 7, name: 'TikTok @sottt.haugiang', url: 'https://tiktok.com/@sottt.haugiang', type: 'TikTok', status: 'active', addedAt: '2026-05-10', topicIds: [1], keywordIds: [2] },
  { id: 8, name: 'Báo VietnamNet', url: 'https://vietnamnet.vn', type: 'Báo chí', status: 'error', addedAt: '2026-04-15', topicIds: [], keywordIds: [], errorReason: 'Không thể truy cập: 403 Forbidden' },
  { id: 9, name: 'Zalo OA Sở TT&TT', url: 'https://oa.zalo.me/sottt-haugiang', type: 'Zalo OA', status: 'active', addedAt: '2026-06-01', topicIds: [3], keywordIds: [5] },
  { id: 10, name: 'Fanpage UBND Tỉnh', url: 'https://facebook.com/ubndhaugiang', type: 'Facebook Fanpage', status: 'pending', addedAt: '2026-06-15', topicIds: [], keywordIds: [] },
  { id: 11, name: 'Báo Lao Động', url: 'https://laodong.vn', type: 'Báo chí', status: 'active', addedAt: '2026-06-20', topicIds: [4], keywordIds: [] },
  { id: 12, name: 'YouTube Hậu Giang Today', url: 'https://youtube.com/@haugiangtoday', type: 'YouTube', status: 'active', addedAt: '2026-07-01', topicIds: [3], keywordIds: [5] },
  { id: 13, name: 'Báo Pháp Luật', url: 'https://plo.vn', type: 'Báo chí', status: 'rejected', addedAt: '2026-08-01', topicIds: [], keywordIds: [], rejectReason: 'Nguồn spam/không phù hợp' },
  { id: 14, name: 'Fanpage Du lịch HG', url: 'https://facebook.com/dulichhaugiang', type: 'Facebook Fanpage', status: 'paused', addedAt: '2026-05-20', topicIds: [], keywordIds: [] },
];

const KEYWORDS = [
  { id: 1, name: 'Chính sách CNTT', sourceIds: [1, 2, 3, 5], status: 'active', createdAt: '2026-03-25', totalMentions: 1840, monthMentions: 320 },
  { id: 2, name: 'Chuyển đổi số', sourceIds: [1, 4, 7], status: 'active', createdAt: '2026-03-25', totalMentions: 956, monthMentions: 180 },
  { id: 3, name: 'Phát triển hạ tầng viễn thông', sourceIds: [1, 5], status: 'active', createdAt: '2026-04-02', totalMentions: 623, monthMentions: 95 },
  { id: 4, name: 'An toàn thông tin', sourceIds: [2, 6], status: 'active', createdAt: '2026-05-05', totalMentions: 412, monthMentions: 78 },
  { id: 5, name: 'Phổ cập Internet', sourceIds: [3, 9, 12], status: 'paused', createdAt: '2026-06-01', totalMentions: 189, monthMentions: 0 },
];

const TOPICS = [
  {
    id: 1, name: 'Chính sách Hậu Giang', status: 'active', createdAt: '2026-03-28',
    primaryKeywords: ['Hậu Giang', 'tỉnh Hậu Giang', 'UBND tỉnh'],
    secondaryKeywords: ['chính sách', 'quy hoạch', 'đầu tư'],
    excludeKeywords: ['tuyển dụng', 'tuyển sinh', 'rao vặt'],
    sourceIds: [1, 2, 4, 7],
    totalMentions: 3420, monthMentions: 580,
  },
  {
    id: 2, name: 'Infra CNTT',
    status: 'active', createdAt: '2026-04-01',
    primaryKeywords: ['hạ tầng CNTT', 'data center', 'cloud computing'],
    secondaryKeywords: ['vietnam', 'Việt Nam'],
    excludeKeywords: ['tuyển'],
    sourceIds: [1, 3, 5],
    totalMentions: 2100, monthMentions: 390,
  },
  {
    id: 3, name: 'Truyền thông Sở',
    status: 'active', createdAt: '2026-05-01',
    primaryKeywords: ['Sở Thông tin và Truyền thông', 'Sở TT&TT'],
    secondaryKeywords: ['Hậu Giang'],
    excludeKeywords: [],
    sourceIds: [2, 4, 6, 9, 12],
    totalMentions: 1560, monthMentions: 245,
  },
  {
    id: 4, name: 'AI & XR',
    status: 'paused', createdAt: '2026-06-10',
    primaryKeywords: ['trí tuệ nhân tạo', 'AI', 'thực tế ảo', 'XR'],
    secondaryKeywords: ['Việt Nam', 'hàm'],
    excludeKeywords: ['giáo dục', 'trường học'],
    sourceIds: [1, 3, 5, 11],
    totalMentions: 890, monthMentions: 0,
  },
  {
    id: 5, name: 'Chủ đề: Nam Long',
    status: 'active', createdAt: '2026-09-15',
    primaryKeywords: ['công ty cổ phần đầu tư nam long'],
    secondaryKeywords: ['nam long group', 'bất động sản nam long', 'chủ tịch nguyễn xuân quang', 'dự án bất động sản', 'waterpoint', 'izumi city', 'mizuki park', 'nam long đại phước', 'elyse island'],
    excludeKeywords: ['tuyển dụng', 'tuyển sinh'],
    sourceIds: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114],
    totalMentions: 1847, monthMentions: 1847,
  },
];

const FEED = [
  { id: 1, title: 'UBND tỉnh Hậu Giang phê duyệt quy hoạch mạng viễn thông đến 2030', source: 'Báo VnExpress', sourceType: 'Báo chí', date: '2026-09-17 08:30', sentiment: 'positive', topicIds: [1], keywordIds: [1], excerpt: 'UBND tỉnh <mark>Hậu Giang</mark> vừa ban hành quyết định phê duyệt quy hoạch mạng lưới viễn thông trên địa bàn tỉnh đến năm 2030, tầm nhìn đến 2040...' },
  { id: 2, title: 'Hội nghị chuyển đổi số toàn quốc: Hậu Giang chia sẻ kinh nghiệm', source: 'Báo Tuổi Trẻ', sourceType: 'Báo chí', date: '2026-09-16 14:15', sentiment: 'positive', topicIds: [1, 3], keywordIds: [1, 2], excerpt: 'Tại hội nghị <mark>chuyển đổi số</mark> toàn quốc, đại diện <mark>Sở TT&TT Hậu Giang</mark> đã chia sẻ mô hình chuyển đổi số...' },
  { id: 3, title: 'Sở TT&TT Hậu Giang ra mắt nền tảng dữ liệu mở', source: 'Fanpage Sở TT&TT HG', sourceType: 'Facebook', date: '2026-09-15 10:00', sentiment: 'positive', topicIds: [3], keywordIds: [2], excerpt: '<mark>Sở Thông tin và Truyền thông</mark> <mark>Hậu Giang</mark> vừa chính thức ra mắt nền tảng dữ liệu mở phục vụ người dân và doanh nghiệp...' },
  { id: 4, title: 'Thách thức an ninh mạng trong chuyển đổi số tại ĐBSCL', source: 'Báo Thanh Niên', sourceType: 'Báo chí', date: '2026-09-14 09:20', sentiment: 'neutral', topicIds: [1, 2], keywordIds: [1, 4], excerpt: 'Các tỉnh Đồng bằng sông Cửu Long, trong đó có <mark>Hậu Giang</mark>, đang đối mặt với nhiều <mark>thách thức an ninh mạng</mark> trong quá trình <mark>chuyển đổi số</mark>...' },
  { id: 5, title: 'FPT đầu tư trung tâm dữ liệu tại Hậu Giang', source: 'YouTube VTV Huế', sourceType: 'YouTube', date: '2026-09-13 16:45', sentiment: 'positive', topicIds: [2], keywordIds: [3], excerpt: 'Tập đoàn FPT vừa công bố kế hoạch đầu tư <mark>trung tâm dữ liệu</mark> tại khu công nghiệp <mark>Hậu Giang</mark>, với tổng vốn đầu tư 500 tỷ đồng...' },
  { id: 6, title: 'Cảnh báo lừa đảo trực tuyến tăng mạnh tại Hậu Giang', source: 'Báo Dân Trí', sourceType: 'Báo chí', date: '2026-09-12 11:30', sentiment: 'negative', topicIds: [1], keywordIds: [1, 4], excerpt: 'Phòng An ninh mạng <mark>Hậu Giang</mark> cảnh báo tình trạng lừa đảo trực tuyến gia tăng, đặc biệt nhắm vào người cao tuổi...' },
  { id: 7, title: 'Triển khai 5G tại Hậu Giang: Tiến độ và thách thức', source: 'TikTok @sottt.haugiang', sourceType: 'TikTok', date: '2026-09-11 09:00', sentiment: 'neutral', topicIds: [1], keywordIds: [1, 3], excerpt: '<mark>Sở TT&TT Hậu Giang</mark> cập nhật tiến độ triển khai mạng <mark>5G</mark> trên địa bàn tỉnh, dự kiến hoàn thành cơ bản trong Q4/2026...' },
  { id: 8, title: 'Hội thảo ứng dụng AI trong quản lý hành chính', source: 'Báo VnExpress', sourceType: 'Báo chí', date: '2026-09-10 07:45', sentiment: 'positive', topicIds: [4], keywordIds: [], excerpt: 'Hội thảo "Ứng dụng <mark>trí tuệ nhân tạo</mark> trong quản lý hành chính nhà nước" đã thu hút hơn 200 chuyên gia tham dự...' },
  { id: 9, title: 'Sở TT&TT tổ chức tập huấn an toàn thông tin mạng', source: 'Zalo OA Sở TT&TT', sourceType: 'Zalo', date: '2026-09-09 15:20', sentiment: 'positive', topicIds: [3], keywordIds: [4], excerpt: '<mark>Sở Thông tin và Truyền thông</mark> <mark>Hậu Giang</mark> vừa tổ chức lớp tập huấn <mark>an toàn thông tin</mark> mạng cho 150 cán bộ...' },
  { id: 10, title: 'Kết nối Internet nông thôn: Hậu Giang đạt 95% hộ gia đình', source: 'Báo Thanh Niên', sourceType: 'Báo chí', date: '2026-09-08 10:10', sentiment: 'positive', topicIds: [1], keywordIds: [1, 5], excerpt: '<mark>Hậu Giang</mark> là một trong những tỉnh đầu tiên tại ĐBSCL đạt tỷ lệ <mark>phổ cập Internet</mark> nông thôn trên 95%...' },
  { id: 11, title: 'Phát triển kinh tế số Hậu Giang: Cơ hội và rào cản', source: 'Báo Lao Động', sourceType: 'Báo chí', date: '2026-09-07 14:00', sentiment: 'neutral', topicIds: [1], keywordIds: [1, 2], excerpt: 'Kinh tế số <mark>Hậu Giang</mark> đang tăng trưởng 15%/năm nhưng vẫn còn nhiều rào cản về nguồn nhân lực <mark>chuyển đổi số</mark>...' },
  { id: 12, title: 'Rao vặt: Bán đất nền KDCM Hậu Giang giá rẻ', source: 'Fanpage Sở TT&TT HG', sourceType: 'Facebook', date: '2026-09-06 08:00', sentiment: 'neutral', topicIds: [], keywordIds: [], excerpt: 'Bán đất nền khu dân cư mới <mark>Hậu Giang</mark>, giá từ 800tr/nền, thổ cư 100%, sẵn sàng ra sổ...' },
];

// Merge Nam Long data (loaded from data_namlong.js)
if (typeof NAMLONG_SOURCES !== 'undefined') { SOURCES.push(...NAMLONG_SOURCES); }
if (typeof NAMLONG_FEED !== 'undefined') { FEED.push(...NAMLONG_FEED); }

// ============ Helpers ============
function getSourceTypeIcon(type) {
  const s = 'width:16px;height:16px;vertical-align:middle;flex-shrink:0;';
  const icons = {
    'Facebook': `<svg style="${s}" viewBox="0 0 36 36"><path fill="#1877F2" d="M36 18C36 8.06 27.94 0 18 0S0 8.06 0 18c0 8.99 6.58 16.42 15.19 17.78V23.2h-4.57V18h4.57v-3.97c0-4.51 2.69-7.01 6.81-7.01 1.97 0 4.04.35 4.04.35v4.43h-2.28c-2.25 0-2.95 1.39-2.95 2.82V18h5l-.8 5.2h-4.2v12.58C29.42 34.42 36 26.99 36 18"/><path fill="#FFF" d="M25.01 23.2L25.81 18h-5v-3.38c0-1.43.7-2.82 2.95-2.82h2.28V7.37s-2.07-.35-4.04-.35c-4.12 0-6.81 2.5-6.81 7.01V18h-4.57v5.2h4.57v12.58a18.2 18.2 0 005.62 0V23.2z"/></svg>`,
    'Facebook Fanpage': `<svg style="${s}" viewBox="0 0 36 36"><path fill="#1877F2" d="M36 18C36 8.06 27.94 0 18 0S0 8.06 0 18c0 8.99 6.58 16.42 15.19 17.78V23.2h-4.57V18h4.57v-3.97c0-4.51 2.69-7.01 6.81-7.01 1.97 0 4.04.35 4.04.35v4.43h-2.28c-2.25 0-2.95 1.39-2.95 2.82V18h5l-.8 5.2h-4.2v12.58C29.42 34.42 36 26.99 36 18"/><path fill="#FFF" d="M25.01 23.2L25.81 18h-5v-3.38c0-1.43.7-2.82 2.95-2.82h2.28V7.37s-2.07-.35-4.04-.35c-4.12 0-6.81 2.5-6.81 7.01V18h-4.57v5.2h4.57v12.58a18.2 18.2 0 005.62 0V23.2z"/></svg>`,
    'Facebook Group': `<svg style="${s}" viewBox="0 0 36 36"><path fill="#1877F2" d="M36 18C36 8.06 27.94 0 18 0S0 8.06 0 18c0 8.99 6.58 16.42 15.19 17.78V23.2h-4.57V18h4.57v-3.97c0-4.51 2.69-7.01 6.81-7.01 1.97 0 4.04.35 4.04.35v4.43h-2.28c-2.25 0-2.95 1.39-2.95 2.82V18h5l-.8 5.2h-4.2v12.58C29.42 34.42 36 26.99 36 18"/><path fill="#FFF" d="M25.01 23.2L25.81 18h-5v-3.38c0-1.43.7-2.82 2.95-2.82h2.28V7.37s-2.07-.35-4.04-.35c-4.12 0-6.81 2.5-6.81 7.01V18h-4.57v5.2h4.57v12.58a18.2 18.2 0 005.62 0V23.2z"/></svg>`,
    'Threads': `<svg style="${s}" viewBox="0 0 192 192"><path fill="#000" d="M141.537 84.153c-1.218-5.46-3.015-10.643-5.384-15.438l-.004-.007c6.258-8.17 10.072-18.37 10.072-29.458 0-27.24-21.853-49.367-48.753-49.367-15.4 0-29.316 7.266-38.338 18.587 7.338-1.165 14.953-1.792 22.76-1.792 4.074 0 8.088.224 12.012.656-17.04-6.927-36.928-5.06-50.532 5.222-11.597 8.776-18.893 21.648-20.166 35.855-7.703 3.98-13.62 9.92-17.176 17.092C18.264 104.6 16 130.21 27.453 151.29c10.184 18.698 29.614 30.143 51.014 30.143 7.83 0 15.364-1.232 22.38-3.578 17.35-5.77 30.926-17.346 38.69-32.81 4.873-9.686 7.612-20.72 8.13-32.64.03-.685.046-1.37.046-2.055 0-7.538-.667-14.888-1.932-21.895a89 89 0 00-.227-2.35zm-34.18 23.26c-4.24 9.02-12.59 14.726-22.418 15.387-.496.033-.993.05-1.492.05-8.66 0-16.742-3.116-22.74-8.79-5.447-5.154-8.57-12.188-8.57-19.644 0-14.83 11.518-26.925 25.726-26.925 1.98 0 3.915.22 5.78.642-8.267-5.39-14.22-11.27-19.274-20.56l-.004-.008c20.197 1.047 35.78 16.84 35.78 36.24 0 5.394-1.165 10.547-3.282 15.252z"/></svg>`,
    'TikTok': `<svg style="${s}" viewBox="0 0 48 48"><path fill="#00F2EA" d="M42.7 13.3c-2.7-1.8-4.5-4.7-4.9-8h-3.7v26c0 3.7-3 6.7-6.7 6.7s-6.7-3-6.7-6.7 3-6.7 6.7-6.7c.7 0 1.3.1 2 .3v-3.8c-.7-.1-1.3-.2-2-.2-5.7 0-10.4 4.7-10.4 10.4S20.8 45 26.5 45s10.4-4.7 10.4-10.4V18.4c2.1 1.5 4.7 2.4 7.4 2.4v-3.7c-1.6 0-3.1-.5-4.3-1.3-.5-.3-.9-.7-1.3-1.1z"/><path fill="#00F2EA" d="M37.8 11.3V5.6h-3.7c.5 3.3 2.3 6.2 4.9 8 .4.4.8.8 1.3 1.1v-3.4z"/><path fill="#FF004F" d="M37.8 11.3c-2.6-1.8-4.4-4.7-4.9-8h-4.8v26c0 3.7-3 6.7-6.7 6.7-1.3 0-2.5-.4-3.5-1 2 1.8 4.7 2.9 7.6 2.9 5.7 0 10.4-4.7 10.4-10.4V18.4c2.1 1.5 4.7 2.4 7.4 2.4v-5.8c-1.4 0-2.7-.4-3.8-1.1-.5-.3-1-.7-1.7-2.6z"/><path fill="#FFF" d="M36.1 13.3c-.4-.4-.8-.7-1.3-1.1-1.1-.8-2.4-1.3-3.8-1.3v5.8c-2.7 0-5.3-.9-7.4-2.4v16.6c0 5.7-4.7 10.4-10.4 10.4-2.9 0-5.5-1.1-7.6-2.9 1 .6 2.2 1 3.5 1 5.7 0 10.4-4.7 10.4-10.4V5.6h4.8c.5 3.3 2.3 6.2 4.9 8 .7.9 1.2 1.8 1.3 2.6v-2.9z"/></svg>`,
    'YouTube': `<svg style="${s}" viewBox="0 0 24 24"><path fill="#FF0000" d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8z"/><path fill="#FFF" d="M9.6 15.5l6.2-3.5-6.2-3.5v7z"/></svg>`,
    'Zalo': `<svg style="${s}" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#0068FF"/><path fill="#FFF" d="M17.5 31.8c-.4 0-.8-.1-1.1-.3-.6-.4-1-1.1-1-1.9v-1.3l-1.6-2.3c-.3-.4-.4-.9-.4-1.4v-4.8c0-1.5.6-2.9 1.7-4 1.1-1.1 2.5-1.7 4-1.7h7.7c1.5 0 2.9.6 4 1.7 1.1 1.1 1.7 2.5 1.7 4v4.8c0 1.5-.6 2.9-1.7 4-1.1 1.1-2.5 1.7-4 1.7h-4.3l-4.6 3.4c-.6.4-1.1.2-1.4-.3zm3.8-7.4c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm4.4 0c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm4.4 0c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1z"/></svg>`,
    'Báo chí': `<svg style="${s}" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2"/><line x1="10" y1="6" x2="18" y2="6"/><line x1="10" y1="10" x2="18" y2="10"/><line x1="10" y1="14" x2="18" y2="14"/><line x1="10" y1="18" x2="14" y2="18"/></svg>`,
  };
  return icons[type] || `<svg style="${s}" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`;
}
function getSourceTypeBadge(type) { return `<span class="source-type-icon" style="display:inline-flex;align-items:center;">${getSourceTypeIcon(type)}</span>${type}`; }
function getStatusBadge(status) {
  const map = { active: ['Đang chạy', 'badge-success'], error: ['Lỗi', 'badge-danger'], pending: ['Chờ duyệt', 'badge-warning'], rejected: ['Bị từ chối', 'badge-danger'], paused: ['Tạm ngưng bởi hệ thống', 'badge-neutral'] };
  const [label, cls] = map[status] || ['Không rõ', 'badge-neutral'];
  return `<span class="badge ${cls}">${label}</span>`;
}
function getSentimentBadge(s) {
  const map = { positive: ['Tích cực', 'badge-positive'], neutral: ['Trung lập', 'badge-neutral'], negative: ['Tiêu cực', 'badge-negative'] };
  const [label, cls] = map[s] || ['—', 'badge-neutral'];
  return `<span class="badge ${cls}" style="font-size:11px;">${label}</span>`;
}
function formatNumber(n) { return n.toLocaleString('vi-VN'); }
function formatDate(d) { return new Date(d).toLocaleDateString('vi-VN'); }
function usagePercent(used, limit) { return limit > 0 ? Math.round((used / limit) * 100) : 0; }
function usageColor(pct) { return pct > 90 ? 'red' : pct > 70 ? 'yellow' : 'green'; }

function showToast(msg, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) { container = document.createElement('div'); container.id = 'toast-container'; container.className = 'toast-container'; document.body.appendChild(container); }
  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3000);
}
function openModal(id) { const m = document.getElementById(id); if (m) m.classList.add('active'); }
function closeModal(id) { const m = document.getElementById(id); if (m) m.classList.remove('active'); }

function buildSidebar(activePage) {
  const plan = CURRENT_CUSTOMER.plan;
  const uPct = usagePercent(CURRENT_CUSTOMER.usage.crawl, plan.crawlLimit);
  return `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">M</div>
        <span>Mozy</span>
      </div>
      <nav class="sidebar-nav">
        <a href="dashboard.html" class="${activePage === 'dashboard' ? 'active' : ''}">
          <span class="nav-icon">&#128200;</span> Tổng quan
        </a>
        <div style="display:flex;align-items:center;justify-content:space-between;padding-right:12px;" class="${activePage === 'topics' ? 'active' : ''}">
          <a href="topics.html" style="flex:1;display:flex;align-items:center;gap:10px;padding:10px 24px;color:inherit;font-size:14px;text-decoration:none;">
            <span class="nav-icon">&#128196;</span> Tất cả chủ đề
          </a>
          <button onclick="event.preventDefault();event.stopPropagation();openCreateTopicFromSidebar()" title="Tạo chủ đề" style="width:24px;height:24px;border-radius:6px;border:1px solid var(--gray-600);background:transparent;color:var(--gray-400);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;line-height:1;transition:all 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.color='#fff';this.style.borderColor='var(--gray-400)'" onmouseout="this.style.background='transparent';this.style.color='var(--gray-400)';this.style.borderColor='var(--gray-600)'">+</button>
        </div>
        ${TOPICS.map(t => `
        <a href="detail.html?type=topic&id=${t.id}" style="padding-left:44px;font-size:13px;" class="${activePage === 'topic-'+t.id ? 'active' : ''}">
          <span style="width:6px;height:6px;border-radius:50%;background:${t.status === 'active' ? 'var(--success)' : 'var(--gray-400)'};flex-shrink:0;"></span>
          ${t.name}
        </a>`).join('')}
        <a href="sources.html" class="${activePage === 'sources' ? 'active' : ''}">
          <span class="nav-icon">&#128279;</span> Nguồn theo dõi
        </a>
      </nav>
      <div class="sidebar-footer">
        <div class="plan-widget">
          <div class="plan-name">Gói: ${plan.name}</div>
          <div class="plan-usage">
            <div style="margin-bottom:4px;">${formatNumber(CURRENT_CUSTOMER.usage.crawl)}/${formatNumber(plan.crawlLimit)} tin tháng</div>
            <div class="progress-bar" style="height:4px;">
              <div class="progress-fill ${usageColor(uPct)}" style="width:${uPct}%;"></div>
            </div>
          </div>
        </div>
        <div style="font-size:13px;color:var(--gray-500);">${CURRENT_CUSTOMER.org}</div>
        <a href="login.html" style="color:var(--gray-500);font-size:13px;display:block;margin-top:8px;">&#10148; Đăng xuất</a>
      </div>
    </aside>`;
}

function buildHeader(title) {
  return `
    <header class="header">
      <span class="header-title">${title}</span>
      <div class="header-actions">
        <div class="header-user">
          <div class="avatar">ST</div>
          <span>${CURRENT_CUSTOMER.org}</span>
        </div>
      </div>
    </header>`;
}

// ============ Sidebar Create Topic ============
function openCreateTopicFromSidebar() {
  if (document.getElementById('sidebarTopicModal')) {
    openModal('sidebarTopicModal');
    return;
  }

  const html = `
    <div class="modal-overlay" id="sidebarTopicModal">
      <div class="modal" style="max-width:600px;">
        <div class="modal-header">
          <h3>Tạo chủ đề mới</h3>
          <button class="modal-close" onclick="closeModal('sidebarTopicModal')">&times;</button>
        </div>
        <div class="modal-body">
          <form id="sidebarTopicForm" onsubmit="event.preventDefault();submitSidebarTopic();">
            <div class="form-group">
              <label class="form-label">Tên chủ đề <span class="required">*</span></label>
              <input type="text" class="form-input" id="sTName" required placeholder="VD: Chính sách Hậu Giang">
              <div class="form-error" id="sTNameError"></div>
            </div>
            <div class="form-group">
              <label class="form-label">Nhóm Keyword chính <span class="required">*</span></label>
              <div class="form-hint" style="margin-bottom:6px;">Nhập từ rồi bấm Enter để thêm.</div>
              <div class="tag-input-wrap" id="sidebarTagPrimary">
                <input type="text" class="tag-input-field" placeholder="Nhập keyword chính...">
              </div>
              <div class="form-error" id="sTPrimaryError"></div>
            </div>
            <div class="form-group">
              <label class="form-label">Nhóm Keyword phụ</label>
              <div class="form-hint" style="margin-bottom:6px;">Tuỳ chọn. Nếu có, tin bài phải chứa thêm 1 từ trong nhóm này.</div>
              <div class="tag-input-wrap" id="sidebarTagSecondary">
                <input type="text" class="tag-input-field" placeholder="Nhập keyword phụ...">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Nhóm Keyword loại trừ</label>
              <div class="form-hint" style="margin-bottom:6px;">Tuỳ chọn. Tin bài chứa từ này sẽ bị loại bỏ.</div>
              <div class="tag-input-wrap negative" id="sidebarTagExclude">
                <input type="text" class="tag-input-field" placeholder="Nhập keyword loại trừ...">
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline" onclick="closeModal('sidebarTopicModal')">Hủy</button>
          <button class="btn btn-primary" onclick="submitSidebarTopic()">Tạo</button>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
  window._sidebarTagPrimary = createTagInput('sidebarTagPrimary', []);
  window._sidebarTagSecondary = createTagInput('sidebarTagSecondary', []);
  window._sidebarTagExclude = createTagInput('sidebarTagExclude', []);
  openModal('sidebarTopicModal');
}

function submitSidebarTopic() {
  const name = document.getElementById('sTName').value.trim();
  const primary = window._sidebarTagPrimary.getTags();
  const nameErr = document.getElementById('sTNameError');
  const primaryErr = document.getElementById('sTPrimaryError');

  if (!name) return;
  if (primary.length === 0) { primaryErr.textContent = 'Cần ít nhất 1 keyword chính'; primaryErr.classList.add('visible'); return; }
  primaryErr.classList.remove('visible');

  const exists = TOPICS.some(t => t.name.toLowerCase() === name.toLowerCase());
  if (exists) { nameErr.textContent = 'Tên chủ đề đã tồn tại'; nameErr.classList.add('visible'); return; }
  nameErr.classList.remove('visible');

  // Always use all active sources
  const sourceIds = SOURCES.filter(s => s.status === 'active').map(s => s.id);

  TOPICS.push({
    id: TOPICS.length + 100, name, primaryKeywords: primary,
    secondaryKeywords: window._sidebarTagSecondary.getTags(),
    excludeKeywords: window._sidebarTagExclude.getTags(),
    sourceIds, status: 'active',
    createdAt: new Date().toISOString().slice(0, 10), totalMentions: 0, monthMentions: 0
  });

  closeModal('sidebarTopicModal');
  showToast('Tạo chủ đề "' + name + '" thành công');
  if (typeof render === 'function') render();
}

// ============ Tag Input Component ============
function createTagInput(containerId, initialTags = []) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return { getTags: () => [] };
  let tags = [...initialTags];

  function renderTags() {
    const field = wrap.querySelector('.tag-input-field');
    wrap.querySelectorAll('.tag').forEach(t => t.remove());
    tags.forEach((tag, i) => {
      const el = document.createElement('span');
      el.className = 'tag';
      el.innerHTML = `${tag}<span class="tag-remove" data-idx="${i}">&times;</span>`;
      wrap.insertBefore(el, field);
    });
  }

  wrap.addEventListener('click', () => wrap.querySelector('.tag-input-field').focus());
  wrap.querySelector('.tag-input-field').addEventListener('keydown', function(e) {
    if ((e.key === 'Enter' || e.key === ',') && this.value.trim()) {
      e.preventDefault();
      const val = this.value.trim().replace(/,/g, '');
      if (val && !tags.includes(val)) { tags.push(val); renderTags(); }
      this.value = '';
    }
    if (e.key === 'Backspace' && !this.value && tags.length) {
      tags.pop(); renderTags();
    }
  });
  wrap.addEventListener('click', function(e) {
    if (e.target.classList.contains('tag-remove')) {
      tags.splice(parseInt(e.target.dataset.idx), 1); renderTags();
    }
  });

  renderTags();
  return { getTags: () => [...tags], setTags: (t) => { tags = [...t]; renderTags(); } };
}
