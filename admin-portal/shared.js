// Mock Data
const PLANS = [
  { id: 1, name: 'Starter', crawlLimit: 5000, keywordLimit: 10, topicLimit: 5, sourceLimit: 3, price: 0, customerCount: 12 },
  { id: 2, name: 'Basic', crawlLimit: 15000, keywordLimit: 30, topicLimit: 15, sourceLimit: 10, price: 500000, customerCount: 28 },
  { id: 3, name: 'Professional', crawlLimit: 50000, keywordLimit: 100, topicLimit: 50, sourceLimit: 30, price: 1500000, customerCount: 18 },
  { id: 4, name: 'Enterprise', crawlLimit: 200000, keywordLimit: 500, topicLimit: 200, sourceLimit: 100, price: 5000000, customerCount: 5 },
];

const CUSTOMERS = [
  { id: 1, org: 'Sở TT&TT Hậu Giang', email: 'hgiang@sottt.haugiang.gov.vn', phone: '02933856234', planId: 3, status: 'active', createdAt: '2026-03-15', note: 'KH ưu tiên', usage: { crawl: 38200, keywords: 78, topics: 42, sources: 25 } },
  { id: 2, org: 'Trung tâm XTTM An Giang', email: 'info@xttmangiang.gov.vn', phone: '02963861234', planId: 2, status: 'active', createdAt: '2026-04-01', note: '', usage: { crawl: 12500, keywords: 22, topics: 10, sources: 8 } },
  { id: 3, org: 'Bộ TT&TT', email: 'vanphong@mic.gov.vn', phone: '02439432156', planId: 4, status: 'active', createdAt: '2026-01-10', note: 'KH trọng điểm', usage: { crawl: 145000, keywords: 320, topics: 120, sources: 75 } },
  { id: 4, org: 'Sở TT&TT Đà Nẵng', email: 'so@sottt.dn.gov.vn', phone: '02363822345', planId: 3, status: 'inactive', createdAt: '2026-02-20', note: 'Tạm ngưng do hết hợp đồng', usage: { crawl: 0, keywords: 0, topics: 0, sources: 0 } },
  { id: 5, org: 'Trung tâm CNTT Thừa Thiên Huế', email: 'contact@hueic.gov.vn', phone: '02343823456', planId: 2, status: 'active', createdAt: '2026-05-12', note: '', usage: { crawl: 9800, keywords: 18, topics: 12, sources: 6 } },
  { id: 6, org: 'Sở TT&TT Quảng Nam', email: 'sottt@quangnam.gov.vn', phone: '02353815678', planId: 1, status: 'active', createdAt: '2026-06-01', note: '', usage: { crawl: 3200, keywords: 6, topics: 3, sources: 2 } },
  { id: 7, org: 'Phòng TT&TT TP. Huế', email: 'ptt@hue.gov.vn', phone: '02343847890', planId: 2, status: 'active', createdAt: '2026-04-18', note: '', usage: { crawl: 14200, keywords: 28, topics: 14, sources: 9 } },
  { id: 8, org: 'Trung tâm CNTT Khánh Hòa', email: 'it@khanhhoa.gov.vn', phone: '02583822345', planId: 3, status: 'active', createdAt: '2026-02-28', note: 'Đang đánh giá hiệu quả', usage: { crawl: 35600, keywords: 65, topics: 38, sources: 22 } },
  { id: 9, org: 'Sở TT&TT Cần Thơ', email: 'sottt@cantho.gov.vn', phone: '02923829012', planId: 2, status: 'inactive', createdAt: '2026-03-05', note: 'Chờ gia hạn hợp đồng', usage: { crawl: 0, keywords: 0, topics: 0, sources: 0 } },
  { id: 10, org: 'Báo Tuổi Trẻ Online', email: 'admin@tuoitre.vn', phone: '02839312345', planId: 4, status: 'active', createdAt: '2026-01-20', note: 'Đối tác lớn', usage: { crawl: 189000, keywords: 450, topics: 180, sources: 95 } },
  { id: 11, org: 'Trung tâm Chính sách Số', email: 'info@dcp.org.vn', phone: '02437762345', planId: 3, status: 'active', createdAt: '2026-05-20', note: '', usage: { crawl: 42000, keywords: 88, topics: 45, sources: 28 } },
  { id: 12, org: 'Viện Chiến lược TT&TT', email: 'vlstt@miit.gov.vn', phone: '02435534567', planId: 4, status: 'active', createdAt: '2026-02-10', note: 'Nghiên cứu chính sách', usage: { crawl: 120000, keywords: 280, topics: 95, sources: 60 } },
  { id: 13, org: 'Sở TT&TT Lâm Đồng', email: 'sottt@lamdong.gov.vn', phone: '02633823456', planId: 1, status: 'active', createdAt: '2026-07-01', note: '', usage: { crawl: 1800, keywords: 4, topics: 2, sources: 1 } },
  { id: 14, org: 'Trung tâm PTTH Nghệ An', email: 'ptth@nghean.gov.vn', phone: '02383845678', planId: 2, status: 'active', createdAt: '2026-06-15', note: '', usage: { crawl: 7500, keywords: 15, topics: 8, sources: 5 } },
  { id: 15, org: 'Sở TT&TT Tiền Giang', email: 'sottt@tiengiang.gov.vn', phone: '02733856789', planId: 3, status: 'active', createdAt: '2026-04-10', note: '', usage: { crawl: 30000, keywords: 55, topics: 30, sources: 18 } },
  { id: 16, org: 'Viện Nghiên cứu Chính sách', email: 'vnccs@most.gov.vn', phone: '02435567890', planId: 2, status: 'inactive', createdAt: '2026-03-25', note: 'Tạm ngưng', usage: { crawl: 0, keywords: 0, topics: 0, sources: 0 } },
  { id: 17, org: 'Trung tâm PTQG Bình Dương', email: 'info@binhduong.gov.vn', phone: '02743823456', planId: 3, status: 'active', createdAt: '2026-05-05', note: '', usage: { crawl: 28000, keywords: 60, topics: 35, sources: 20 } },
  { id: 18, org: 'Sở TT&TT Bắc Ninh', email: 'sottt@bacninh.gov.vn', phone: '02223829012', planId: 1, status: 'active', createdAt: '2026-08-01', note: '', usage: { crawl: 2800, keywords: 5, topics: 3, sources: 2 } },
  { id: 19, org: 'Phòng CNTT TP.HCM', email: 'cntt@hcmc.gov.vn', phone: '02838234567', planId: 4, status: 'active', createdAt: '2026-01-05', note: 'KH lớn nhất', usage: { crawl: 195000, keywords: 480, topics: 190, sources: 88 } },
  { id: 20, org: 'Trung tâm DLQG Đà Lạt', email: 'info@dulichdallat.vn', phone: '02633556789', planId: 2, status: 'active', createdAt: '2026-07-15', note: '', usage: { crawl: 4500, keywords: 10, topics: 5, sources: 4 } },
  { id: 21, org: 'Sở TT&TT Thanh Hóa', email: 'sottt@thanhhoa.gov.vn', phone: '02373829012', planId: 2, status: 'active', createdAt: '2026-06-20', note: '', usage: { crawl: 11000, keywords: 20, topics: 10, sources: 7 } },
  { id: 22, org: 'Hội CCCD Việt Nam', email: 'contact@cccd.org.vn', phone: '02439435678', planId: 3, status: 'active', createdAt: '2026-03-10', note: '', usage: { crawl: 36000, keywords: 70, topics: 40, sources: 24 } },
];

const SOURCES = [
  { id: 1, name: 'Báo VnExpress', url: 'https://vnexpress.net', type: 'Báo chí', status: 'active', followers: [1, 3, 5, 7, 8, 10, 11, 12, 15, 17, 19], addedAt: '2026-01-05', origin: 'approved' },
  { id: 2, name: 'Báo Tuổi Trẻ', url: 'https://tuoitre.vn', type: 'Báo chí', status: 'active', followers: [1, 2, 3, 6, 8, 10, 14, 19, 21], addedAt: '2026-01-05', origin: 'approved' },
  { id: 3, name: 'Báo Thanh Niên', url: 'https://thanhnien.vn', type: 'Báo chí', status: 'active', followers: [1, 3, 8, 10, 11, 19, 22], addedAt: '2026-01-10', origin: 'approved' },
  { id: 4, name: 'Fanpage Chính phủ', url: 'https://facebook.com/chinhphu.vn', type: 'Facebook Fanpage', status: 'active', followers: [3, 10, 11, 12, 19], addedAt: '2026-01-15', origin: 'approved' },
  { id: 5, name: 'YouTube VTV News', url: 'https://youtube.com/@VTVNews', type: 'YouTube', status: 'active', followers: [3, 8, 10, 19, 22], addedAt: '2026-01-20', origin: 'admin' },
  { id: 6, name: 'Báo Dân Trí', url: 'https://dantri.com.vn', type: 'Báo chí', status: 'active', followers: [1, 2, 5, 7, 14, 15, 17, 21], addedAt: '2026-02-01', origin: 'approved' },
  { id: 7, name: 'Fanpage Sở TT&TT Hậu Giang', url: 'https://facebook.com/sottt.haugiang', type: 'Facebook Fanpage', status: 'active', followers: [1], addedAt: '2026-03-15', origin: 'admin' },
  { id: 8, name: 'Báo VietnamNet', url: 'https://vietnamnet.vn', type: 'Báo chí', status: 'error', followers: [1, 3, 10, 11, 12, 19], addedAt: '2026-01-10', origin: 'approved' },
  { id: 9, name: 'TikTok @vietnamnews', url: 'https://tiktok.com/@vietnamnews', type: 'TikTok', status: 'active', followers: [10, 19], addedAt: '2026-03-01', origin: 'approved' },
  { id: 10, name: 'Báo Lao Động', url: 'https://laodong.vn', type: 'Báo chí', status: 'active', followers: [1, 2, 5, 8, 14, 15, 21, 22], addedAt: '2026-02-15', origin: 'approved' },
  { id: 11, name: 'Fanpage Bộ TT&TT', url: 'https://facebook.com/bộthôngtinvàtruyenthông', type: 'Facebook Fanpage', status: 'active', followers: [3, 11, 12, 19], addedAt: '2026-01-10', origin: 'approved' },
  { id: 12, name: 'YouTube FPT Play', url: 'https://youtube.com/@FPTPlay', type: 'YouTube', status: 'active', followers: [8, 10, 19], addedAt: '2026-04-01', origin: 'admin' },
  { id: 13, name: 'Báo Tuổi Trẻ CN', url: 'https://tuoitre.vn/cong-nghe.htm', type: 'Báo chí', status: 'active', followers: [1, 3, 10, 15, 17], addedAt: '2026-02-20', origin: 'approved' },
  { id: 14, name: 'Facebook Group Chính sách số', url: 'https://facebook.com/groups/chinhsachso', type: 'Facebook Group', status: 'active', followers: [3, 11, 12], addedAt: '2026-03-10', origin: 'approved' },
  { id: 15, name: 'Báo VOV', url: 'https://vov.vn', type: 'Báo chí', status: 'error', followers: [1, 2, 5, 7, 8, 14, 15, 17, 21], addedAt: '2026-01-20', origin: 'approved' },
  { id: 16, name: 'YouTube VTC Now', url: 'https://youtube.com/@VTCNow', type: 'YouTube', status: 'active', followers: [3, 10, 19], addedAt: '2026-05-01', origin: 'admin' },
  { id: 17, name: 'Báo Infonet', url: 'https://infonet.vn', type: 'Báo chí', status: 'paused', followers: [1, 11], addedAt: '2026-06-15', origin: 'approved' },
  { id: 18, name: 'TikTok @thanhnien', url: 'https://tiktok.com/@thanhnien_official', type: 'TikTok', status: 'active', followers: [10, 19, 22], addedAt: '2026-04-10', origin: 'approved' },
  { id: 19, name: 'Fanpage Sở TT&TT Đà Nẵng', url: 'https://facebook.com/sottt.danang', type: 'Facebook Fanpage', status: 'active', followers: [4, 8], addedAt: '2026-02-20', origin: 'admin' },
  { id: 20, name: 'YouTube扬子晚报', url: 'https://youtube.com/@Yangtse', type: 'YouTube', status: 'error', followers: [], addedAt: '2026-05-10', origin: 'admin' },
];

// Source Approval Requests
const SOURCE_REQUESTS = [
  { id: 1, customerId: 3, url: 'https://baochinhphu.vn', name: 'Báo Chính phủ', type: 'Báo chí', techValidation: 'valid', status: 'pending', requestedAt: '2026-09-18 09:15', note: '' },
  { id: 2, customerId: 10, url: 'https://facebook.com/ThanhNienOnline', name: 'Fanpage Thanh Niên', type: 'Facebook Fanpage', techValidation: 'valid', status: 'pending', requestedAt: '2026-09-18 10:30', note: '' },
  { id: 3, customerId: 19, url: 'https://tiktok.com/@vtv24h', name: 'TikTok VTV24h', type: 'TikTok', techValidation: 'valid', status: 'pending', requestedAt: '2026-09-18 11:00', note: '' },
  { id: 4, customerId: 1, url: 'https://vnexpress.net', name: 'Báo VnExpress', type: 'Báo chí', techValidation: 'valid', status: 'pending', requestedAt: '2026-09-18 14:20', note: 'Nguồn đã tồn tại — đang được 11 KH khác theo dõi' },
  { id: 5, customerId: 8, url: 'https://facebook.com/groups/doanhnghiepso', name: 'FB Group Doanh nghiệp Số', type: 'Facebook Group', techValidation: 'valid', status: 'pending', requestedAt: '2026-09-19 08:00', note: '' },
  { id: 6, customerId: 12, url: 'https://youtube.com/@VNewsSpecial', name: 'YouTube VNews Special', type: 'YouTube', techValidation: 'valid', status: 'pending', requestedAt: '2026-09-19 09:30', note: '' },
  { id: 7, customerId: 2, url: 'https://baoanGiang.vn', name: 'Báo An Giang', type: 'Báo chí', techValidation: 'error', status: 'pending', requestedAt: '2026-09-19 10:15', note: 'URL không truy cập được — 404' },
  { id: 8, customerId: 11, url: 'https://facebook.com/chinhsachsodienbien', name: 'Fanpage Chính sách số ĐB', type: 'Facebook Fanpage', techValidation: 'valid', status: 'pending', requestedAt: '2026-09-19 14:00', note: '' },
  { id: 9, customerId: 17, url: 'https://vnexpress.net', name: 'Báo VnExpress', type: 'Báo chí', techValidation: 'valid', status: 'approved', requestedAt: '2026-09-15 09:00', approvedAt: '2026-09-15 14:00', note: 'Nguồn đã tồn tại — đang được 11 KH khác theo dõi' },
  { id: 10, customerId: 5, url: 'https://tuoitre.vn', name: 'Báo Tuổi Trẻ', type: 'Báo chí', techValidation: 'valid', status: 'approved', requestedAt: '2026-09-14 11:00', approvedAt: '2026-09-14 15:30', note: '' },
  { id: 11, customerId: 21, url: 'https://spam-link.xyz', name: 'Spam Site', type: 'Báo chí', techValidation: 'valid', status: 'rejected', requestedAt: '2026-09-13 16:00', rejectedAt: '2026-09-14 09:00', rejectReason: 'Nguồn spam/không phù hợp', note: '' },
  { id: 12, customerId: 6, url: 'https://facebook.com/quangnamgov', name: 'Fanpage UBND Quảng Nam', type: 'Facebook Fanpage', techValidation: 'valid', status: 'approved', requestedAt: '2026-09-12 08:30', approvedAt: '2026-09-12 11:00', note: '' },
];
const REJECT_REASONS = ['Vi phạm chính sách nội dung', 'Nguồn spam/không phù hợp', 'Trùng lặp không cần thiết', 'Khác'];

function getPendingRequestCount() { return SOURCE_REQUESTS.filter(r => r.status === 'pending').length; }

// Helpers
function getPlan(id) { return PLANS.find(p => p.id === id); }
function getCustomerName(id) { const c = CUSTOMERS.find(c => c.id === id); return c ? c.org : ''; }
function formatNumber(n) { return n.toLocaleString('vi-VN'); }
function formatPrice(n) { return n === 0 ? 'Miễn phí' : n.toLocaleString('vi-VN') + ' đ/tháng'; }
function formatDate(d) { return new Date(d).toLocaleDateString('vi-VN'); }
function usagePercent(used, limit) { return limit > 0 ? Math.round((used / limit) * 100) : 0; }
function usageColor(pct) { return pct > 90 ? 'red' : pct > 70 ? 'yellow' : 'green'; }

function showToast(msg, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3000);
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add('active'); m._modalId = id; }
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}
// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.detail-panel.open').forEach(p => p.classList.remove('open'));
    document.querySelectorAll('.detail-backdrop.open').forEach(b => b.classList.remove('open'));
  }
});
// Close modal on backdrop click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay') && e.target.classList.contains('active')) {
    e.target.classList.remove('active');
  }
  if (e.target.classList.contains('detail-backdrop') && e.target.classList.contains('open')) {
    e.target.classList.remove('open');
    document.querySelectorAll('.detail-panel.open').forEach(p => p.classList.remove('open'));
  }
});

function buildSidebar(activePage) {
  const pendingCount = getPendingRequestCount();
  return `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">M</div>
        <span>Mozy Admin</span>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section">Quản lý</div>
        <a href="customers.html" class="${activePage === 'customers' ? 'active' : ''}">
          <span class="nav-icon">&#128101;</span> Khách hàng
        </a>
        <a href="subscriptions.html" class="${activePage === 'subscriptions' ? 'active' : ''}">
          <span class="nav-icon">&#128196;</span> Gói dịch vụ
        </a>
        <a href="approvals.html" class="${activePage === 'approvals' ? 'active' : ''}">
          <span class="nav-icon">&#9989;</span> Duyệt đề xuất Nguồn
          ${pendingCount > 0 ? `<span class="sidebar-badge">${pendingCount}</span>` : ''}
        </a>
        <div class="nav-section">Giám sát</div>
        <a href="sources.html" class="${activePage === 'sources' ? 'active' : ''}">
          <span class="nav-icon">&#128279;</span> Quản lý Nguồn
        </a>
      </nav>
      <div class="sidebar-footer">
        <a href="login.html" style="color: var(--gray-500);">&#10148; Đăng xuất</a>
      </div>
    </aside>`;
}

function buildHeader(title) {
  return `
    <header class="header">
      <span class="header-title">${title}</span>
      <div class="header-actions">
        <div class="header-user">
          <div class="avatar">AD</div>
          <span>Admin</span>
        </div>
      </div>
    </header>`;
}
