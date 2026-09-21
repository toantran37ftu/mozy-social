// ============ Mock Data ============

const CURRENT_CUSTOMER = {
  id: 1,
  org: 'Sở TT&TT Hậu Giang',
  email: 'hgiang@sottt.haugiang.gov.vn',
  planId: 3,
  plan: { name: 'Professional', crawlLimit: 50000, keywordLimit: 100, topicLimit: 50, sourceLimit: 30, price: 1500000 },
  usage: { crawl: 38200, keywords: 78, topics: 42, sources: 25 }
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

// ============ Helpers ============
function getSourceTypeIcon(type) {
  const map = { 'Báo chí': '📰', 'Facebook Fanpage': '📘', 'Facebook Group': '👥', 'TikTok': '🎵', 'YouTube': '▶️', 'Zalo OA': '💬', 'Facebook': '📘' };
  return map[type] || '🌐';
}
function getSourceTypeBadge(type) { return `<span class="source-type-icon">${getSourceTypeIcon(type)}</span>${type}`; }
function getStatusBadge(status) {
  const map = { active: ['Đang chạy', 'badge-success'], error: ['Lỗi', 'badge-danger'], pending: ['Chờ xác thực', 'badge-warning'], paused: ['Tạm dừng', 'badge-neutral'] };
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
        <a href="topics.html" class="${activePage === 'topics' ? 'active' : ''}">
          <span class="nav-icon">&#128196;</span> Chủ đề & Từ khoá
        </a>
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
