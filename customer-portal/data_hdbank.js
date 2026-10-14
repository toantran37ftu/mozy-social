// ============ HDBANK Topic Data ============
// Nguồn: data_sample/*.csv + *.xlsx (01/10 - 14/10/2026), đã loại trùng (URL / nội dung) và tin tuyển dụng.
// Sentiment đánh theo góc độ truyền thông branding (HDBank, Vikki, HD SAISON, lãnh đạo).
// Tạo bởi script build (không sửa tay các id).

const HDBANK_SOURCES = [
  {
    id: 301,
    name: "VietNamNet",
    url: "https://vietnamnet.vn",
    type: "Báo chí",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 302,
    name: "Báo Xây dựng",
    url: "https://baoxaydung.vn",
    type: "Báo chí",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 303,
    name: "VnEconomy",
    url: "https://vneconomy.vn",
    type: "Báo chí",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 304,
    name: "Báo Nhân Dân",
    url: "https://nhandan.vn",
    type: "Báo chí",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 305,
    name: "CafeF",
    url: "https://cafef.vn",
    type: "Báo chí",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 306,
    name: "VnExpress",
    url: "https://vnexpress.net",
    type: "Báo chí",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 307,
    name: "Báo Tiền Phong",
    url: "https://tienphong.vn",
    type: "Báo chí",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 308,
    name: "HDBank (Facebook Fanpage)",
    url: "https://facebook.com/HDBank.com.vn",
    type: "Facebook Fanpage",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 309,
    name: "Ngân hàng Số Vikki",
    url: "https://facebook.com/Vikki.NganhangSo",
    type: "Facebook Fanpage",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 310,
    name: "Facebook Group tiết kiệm / thẻ tín dụng (79 bài)",
    url: "https://facebook.com/groups/guitietkiemnganhang",
    type: "Facebook Group",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 311,
    name: "Facebook trang / cá nhân (136 bài)",
    url: "https://facebook.com",
    type: "Facebook",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 312,
    name: "HD SAISON (Threads)",
    url: "https://threads.net/@hdsaisonfinancevn",
    type: "Threads",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 313,
    name: "Threads MXH",
    url: "https://threads.net",
    type: "Threads",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 314,
    name: "YouTube Tấn Lộc Capital",
    url: "https://youtube.com",
    type: "YouTube",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 315,
    name: "YouTube Đoàn Smart Trend",
    url: "https://youtube.com",
    type: "YouTube",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 316,
    name: "YouTube Quang CMT - Theo Dấu Dòng Tiền",
    url: "https://youtube.com",
    type: "YouTube",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 317,
    name: "YouTube HD INVESTMENT -  ECONOMIC CYCLE",
    url: "https://youtube.com",
    type: "YouTube",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 318,
    name: "YouTube chuyện tiền bạc",
    url: "https://youtube.com",
    type: "YouTube",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  },
  {
    id: 319,
    name: "YouTube khôi và cuộc sống hằng ngày",
    url: "https://youtube.com",
    type: "YouTube",
    status: "active",
    addedAt: "2026-10-01",
    topicIds: [
      6
    ],
    keywordIds: []
  }
];

const HDBANK_FEED = [
 {
  id: 401,
  title: "Làn sóng tăng vốn ngân hàng sắp chạm mốc kỷ lục với hơn 7,3 tỷ cổ phiếu chuẩn bị được tung ra...",
  source: "Titanlabs - Stock AI Agent",
  sourceType: "Facebook",
  date: "2026-10-14 15:40",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/titanlabsvn/posts/pfbid0ga2iv1RvyXv6UBauBEuEWvTThrTJUTbRfNPFGaGTM1TRHF41TLpLMqnyyMY6aQc9l",
  excerpt: "...t tốc độ huy động. 🎯 Điểm sáng tăng trưởng: Nhóm ngân hàng nhận chuyển giao bắt buộc gồm MBB, VPB, <mark>HDB</mark> được kỳ vọng dẫn đầu mức tăng trưởng tín dụng lên tới 17,9%. Liệu quy mô tăng vốn lần này sẽ tạo bệ phóng tăng trưởng dài hạn hay đem lại rủi ro pha loãng lớn cho danh mục của bạn? ChungKhoan CoPhieuNganHang TitanLabs TinTaiChinh DauTuChungKhoan",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 402,
  title: "Trong phiên giao dịch ngày 14/10, cổ phiếu HDB của Ngân hàng TMCP Phát triển TP.HCM (HDBank) ghi...",
  source: "VNReport",
  sourceType: "Facebook",
  date: "2026-10-14 15:32",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/Vnreport.vn/posts/pfbid0zvihspLmee89UVLXbkKzRJFaty9sdwT39caUeitwjtfQg6QKEHcSmahStSwkWmH7l",
  excerpt: "Trong phiên giao dịch ngày 14/10, cổ phiếu <mark>HDB</mark> của <mark>Ngân hàng TMCP Phát triển TP.HCM</mark> (<mark>HDBank</mark>) ghi nhận diễn biến tích cực khi đạt mức giá 23.150 đồng/cổ phiếu, duy trì tại vùng đỉnh lịch sử sau điều chỉnh. Với thị giá 23.100 đồng/cổ phiếu tại thời điểm chốt, vốn hóa thị trường của ngân hàng đạt khoảng 150.300 tỷ đồng, tương đương gần 5,7 tỷ USD. Số liệu...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 403,
  title: "LÃI VÀNG TRAO TAY, GỬI NGAY THÊM LỜI Lương về tay, Quý khách cùng thử ngay cách \"chia túi\" hiệu...",
  source: "HDBank Bình Dương",
  sourceType: "Facebook Fanpage",
  date: "2026-10-14 15:30",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/permalink.php?story_fbid=pfbid02XGXkxNW1ZJQPYBrmDergUJTqwkyEjgwM7udz2ikUSFvY4fGvQcYEKQTB2dHpw1fMl&id=61594949008539",
  excerpt: "...ền nhàn rỗi sinh lời tối ưu. ✨ Đặc biệt, vào Thứ 7 &amp; Chủ nhật - Ngày Vàng gửi tiết kiệm Online, App <mark>HDBank</mark> còn dành tặng ưu đãi: 💰 Khoản tiền gửi từ 20 triệu đồng - dưới 100 triệu đồng: +2,10%/năm. 💰 Khoản tiền gửi từ 100 triệu đồng trở lên: +2,35%/năm. 📍Áp dụng riêng cho khoản tiền gửi kỳ hạn 6 tháng, App <mark>HDBank</mark> tự động hiển thị lãi suất sau ưu...",
  engagement: {
   reactions: 11,
   shares: 0,
   comments: 5
  }
 },
 {
  id: 404,
  title: "Mình có 3 khoản vay Vpbank 119tr, đóng 6th S Easy 16tr, chưa góp kì nào Hdbank 50tr, góp 3 th...",
  source: "LivelyCranberry5133",
  sourceType: "Facebook Group",
  date: "2026-10-14 15:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/519234795850849/posts/1743201453454171/",
  excerpt: "Mình có 3 khoản vay Vpbank 119tr, đóng 6th S Easy 16tr, chưa góp kì nào <mark>Hdbank</mark> 50tr, góp 3 th Hiện tại 3 bên đã trễ 2-3thang Mình có 6 thẻ credit vẫn trả đủ hàng tháng Lúc đầu còn nghe máy, nghe chửi. Giờ mình sợ quá nên chặn hết dt luôn Giờ nhận dc tn này k biết bên nào luôn Thật sự giờ khó khăn quá. Mình hết xoay sở nổi Theo như tn này tầm bao lâu sẽ...",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 11
  }
 },
 {
  id: 405,
  title: "Ông trời tạo ra địa chấn, còn HDB là điểm nhấn. 🌋 Chiều nay cả thị trường rung lắc, người thì...",
  source: "Nguyễn Hai Anh",
  sourceType: "Facebook Group",
  date: "2026-10-14 14:56",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/bigboysdautucophieu/posts/3310296402490386/",
  excerpt: "Ông trời tạo ra địa chấn, còn <mark>HDB</mark> là điểm nhấn. 🌋 Chiều nay cả thị trường rung lắc, người thì run tay, người thì tim đập chân run. Nhưng giữa bão giông vẫn có một cổ phiếu đứng vững, xanh mướt như chưa từng có chuyện gì xảy ra. Không cần nhiều lời. Ai cầm <mark>HDB</mark> hôm nay chắc đang ngồi uống cà phê rất thong thả. ☕😎",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 406,
  title: "Ông Kim Byoungho, Chủ tịch HĐQT HDBank được nhận Cúp Thánh Gióng 2026 và trong Top 10 lãnh đạo...",
  source: "TechTimes.vn",
  sourceType: "Facebook",
  date: "2026-10-14 14:27",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/techtimesvietnam/posts/pfbid06TMupqW8w68m1NSJYktZiVPkG6GbDAp8cCaCC3ZN6Tu1p3HMJfYp26QCLFGn5c8Al",
  excerpt: "Ông Kim Byoungho, Chủ tịch HĐQT <mark>HDBank</mark> được nhận Cúp Thánh Gióng 2026 và trong Top 10 lãnh đạo doanh nghiệp xuất sắc Việt Nam giai đoạn 2021-2025 HÀ NỘI, VIỆT NAM – Media OutReach Newswire – Ngày 13 tháng 10 năm 2026 – Ông Kim Byoungho, Chủ tịch Hội đồng quản trị của Ngân hàng Thương mại cổ phần Phát triển Thành phố Hồ Chí Minh (<mark>HDBank</mark>) đã được vinh danh...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 407,
  title: "HDB vừa chạm đỉnh sau chia cổ tức, hôm nay lại có người đăng ký bán 922.823 cổ phiếu... Đọc lướt...",
  source: "Alphasensei.io",
  sourceType: "Facebook Group",
  date: "2026-10-14 14:21",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/chungkhoanvietnamss/posts/1821716342359811/",
  excerpt: "<mark>HDB</mark> vừa chạm đỉnh sau chia cổ tức, hôm nay lại có người đăng ký bán 922.823 cổ phiếu... Đọc lướt dễ tưởng có một lệnh tháo hàng. Nhưng số đăng ký này chỉ bằng 0,018% lượng cổ phiếu <mark>HDB</mark>, và mới là đăng ký bán chứ chưa phải giao dịch đã khớp. Điều em muốn soi hơn là cái nhiệt kế: giá vừa lập đỉnh sau điều chỉnh, FOMO lên 91 điểm, còn điểm Quant mới 52. Lưu...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 408,
  title: "LÃI VÀNG TRAO TAY, GỬI NGAY THÊM LỜI Lương về tay, Quý khách cùng thử ngay cách \"chia túi\" hiệu...",
  source: "Kiều Tiên",
  sourceType: "Facebook",
  date: "2026-10-14 13:45",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/kieutien.nguyen.520/posts/pfbid02wJVK5DwMGV4uE2fpv37jWJQ18ac3UngD8Nr4hVTB7CzuJTMwdWBAnTvKDauUNKKul",
  excerpt: "...ền nhàn rỗi sinh lời tối ưu. ✨ Đặc biệt, vào Thứ 7 &amp; Chủ nhật - Ngày Vàng gửi tiết kiệm Online, App <mark>HDBank</mark> còn dành tặng ưu đãi: 💰 Khoản tiền gửi từ 20 triệu đồng - dưới 100 triệu đồng: +2,10%/năm. 💰 Khoản tiền gửi từ 100 triệu đồng trở lên: +2,35%/năm. 📍Áp dụng riêng cho khoản tiền gửi kỳ hạn 6 tháng, App <mark>HDBank</mark> tự động hiển thị lãi suất sau ưu...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 409,
  title: "VINHOMES SAIGON PARK – SIÊU ĐÔ THỊ 1.080HA Bạn đang tìm kiếm cơ hội sở hữu bất động sản tại đại...",
  source: "Lệ Nhiên",
  sourceType: "Facebook Group",
  date: "2026-10-14 13:39",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/vinhomeshocmon2/posts/1583887366821287/",
  excerpt: "🏙️ VINHOMES SAIGON PARK – SIÊU ĐÔ THỊ 1.080HA Bạn đang tìm kiếm cơ hội sở hữu bất động sản tại đại đô thị quy mô hàng đầu TP.HCM? <mark>HDBank</mark> Nguyễn Lương Bằng đồng hành cùng khách hàng với chính sách vay hấp dẫn: ✅ Thời hạn vay lên đến 35 năm ✅ Ân hạn gốc tối đa 5 năm ✅ Miễn phí trả nợ trước hạn từ năm thứ 5 Liên hệ để được tư vấn phương án vay phù hợp và...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 410,
  title: "Mình có 500 đến 1T muốn gửi HD Bank. LS 6-12 tháng hiện tại bao nhiêu vậy các bác? Có kèm điều...",
  source: "UpbeatCherry5508",
  sourceType: "Facebook Group",
  date: "2026-10-14 11:13",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1420562683561857/",
  excerpt: "Mình có 500 đến 1T muốn gửi <mark>HD Bank</mark>. LS 6-12 tháng hiện tại bao nhiêu vậy các bác? Có kèm điều kiện gì không?",
  engagement: {
   reactions: 20,
   shares: 0,
   comments: 44
  }
 },
 {
  id: 411,
  title: "9.5-9.6 liên hệ em bên vikki bank 0795871129 Bích",
  source: "@hcibw_w",
  sourceType: "Threads",
  date: "2026-10-14 09:56",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hcibw_w/post/DedXK5lmY6u",
  excerpt: "9.5-9.6 liên hệ em bên <mark>vikki bank</mark> 0795871129 Bích",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 412,
  title: "Mình gửi 250tr 12 tháng tại Hà Đông (chỉ gửi tại Hà Đông ạ). Mình xin lãi suất của HD bank, SHB,...",
  source: "Hoàng Hà",
  sourceType: "Facebook Group",
  date: "2026-10-14 09:11",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/guitietkiemnganhang/posts/4459873517562658/",
  excerpt: "Mình gửi 250tr 12 tháng tại Hà Đông (chỉ gửi tại Hà Đông ạ). Mình xin lãi suất của <mark>HD bank</mark>, SHB, MB bank, không kèm theo điều kiện ạ.",
  engagement: {
   reactions: 28,
   shares: 0,
   comments: 103
  }
 },
 {
  id: 413,
  title: "Xem thêm chi tiết tại: https://www.hdsaison.com.vn/vn/vay-sinh-vien Tiếp vốn trao quyền 🎓 Sinh...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-14 09:08",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DedRq91HS73",
  excerpt: "📖 Xem thêm chi tiết tại: https://www.<mark>hdsaison</mark>.com.vn/vn/vay-sinh-vien Tiếp vốn trao quyền 🎓 Sinh viên tự tin trải nghiệm tại: 🌐 Website : https://credit4tomorrow.<mark>hdsaison</mark>.com.vn 📲 Hoặc Tải app <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/app-download.html 🚩 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 414,
  title: "Với những lúc cần thêm nguồn tài chính cho việc học hay sinh hoạt, gói vay Sinh viên HD SAISON...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-14 09:08",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DedRq9NHddv",
  excerpt: "Với những lúc cần thêm nguồn tài chính cho việc học hay sinh hoạt, gói vay Sinh viên <mark>HD SAISON</mark> với hạn mức 8 triệu đồng sẽ là nguồn trợ lực để các bạn tự tin sắp xếp cuộc sống, chủ động lo cho những nhu cầu cần thiết trong những năm tháng đại học.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 415,
  title: "THỊ TRƯỜNG 14/10 TRƯỚC ĐÁO HẠN PHÁI SINH VN-Index giảm phiên thứ 5 liên tiếp, đóng cửa quanh...",
  source: "Cổ Phiếu Trước Sóng",
  sourceType: "Facebook Group",
  date: "2026-10-14 08:48",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/536499490820250/posts/1809386413531545/",
  excerpt: "... và hồi phục, nhưng chưa đủ cơ sở khẳng định thị trường đã tạo đáy. Khối ngoại mua ròng đáng chú ý: <mark>HDB</mark> (43 tỷ), PNJ (35 tỷ), VHM (24 tỷ), BSR (17 tỷ), DGW (15 tỷ). Trước ĐHPS, thị trường có thể tiếp tục rung lắc. Ưu tiên quản trị margin, chọn lọc cổ phiếu khỏe và chờ tín hiệu cân bằng rõ hơn; kịch bản hồi phục sau đáo hạn vẫn cần được xác nhận. NĐT...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 416,
  title: "Tháng 9 hoàn thành nhiệm vụ 🎯 Cảm ơn quý khách hàng, đồng đội và những nỗ lực mỗi ngày. Tháng...",
  source: "Mạnh Linh",
  sourceType: "Facebook",
  date: "2026-10-14 08:43",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/dichvukhachsancualo/posts/pfbid0rJs7LyHCfPoqCWrDHwaZaKiy5x5w62YmUFkWnaT39sB16iPjH3bnMTzNCVCAAfS9l",
  excerpt: "Tháng 9 hoàn thành nhiệm vụ 🎯 Cảm ơn quý khách hàng, đồng đội và những nỗ lực mỗi ngày. Tháng 10 — mong mọi thứ ổn chút xíu 🥰💚☀️ <mark>HDBank</mark> iLove<mark>HDBank</mark>",
  engagement: {
   reactions: 58,
   shares: 0,
   comments: 40
  }
 },
 {
  id: 417,
  title: "HDB - Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh cophieu chungkhoan",
  source: "Son Nguyen",
  sourceType: "Facebook",
  date: "2026-10-14 08:38",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/1816201042914636/",
  excerpt: "<mark>HDB</mark> - <mark>Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh</mark> cophieu chungkhoan",
  engagement: {
   reactions: 0,
   shares: 9,
   comments: 0
  }
 },
 {
  id: 418,
  title: "Nhận định trước phiên 14/10/2026 -------------------------------------- Thị trường tiếp tục thử...",
  source: "Đầu Tư Chứng Khoán",
  sourceType: "Facebook",
  date: "2026-10-14 08:29",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/starinvestment88/posts/pfbid02Cz6ovU2P61qbgGBMU56AzKHxXcdF4enUbxWYiNjNVS4Uvi31vsxnNa7gsmM5Dehul",
  excerpt: "...ần gần đây nhóm ngân hàng có nhiều biến chuyển khá tốt đặc biệt là ở các ngân hàng tư nhân như VPB, <mark>HDB</mark>, TCB… Điều này cũng phù hợp với quan điểm mà tôi đã gửi đến nhà đầu tư đó là tập trung vào 4 nhóm chính bao gồm cổ phiếu ngân hàng, chứng khoán, họ Vin và dầu khí. Mặc dù vậy đây mới chỉ là tín hiệu tích cực nhà đầu tư cần hết sức lưu ý, chỉ tham...",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 419,
  title: "DÒNG TIỀN ĐANG PHÂN HÓA MẠNH – NHÓM MIDCAP CÓ ĐANG THU HÚT SỰ CHÚ Ý? Phiên 13/10, dữ liệu dòng...",
  source: "Minh Lý Invest - Đầu tư theo chỉ báo dòng tiền",
  sourceType: "Facebook",
  date: "2026-10-14 08:08",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/MLyinvest/posts/pfbid0E2pgENZEhAhiPSNaonSjBZwVFmHbUi7JoMwNG3ePtX9TWoseynertfn7RLZjwYccl",
  excerpt: "..., trong khi 122 cổ phiếu xuất hiện dấu hiệu phân phối hoặc xả hàng Điểm nhấn đáng chú ý: Ngân hàng: <mark>HDB</mark> nổi bật với động lượng giá và thanh khoản tích cực Nhóm Midcap: VPB, MSB, TNG, BFC, NT2, PVP tiếp tục nằm trong danh sách cần theo dõi dòng tiền Ở chiều ngược lại, MSR, FRT, DGW và NVB xuất hiện tín hiệu phân phối, cần thận trọng với các nhịp hồi kỹ...",
  engagement: {
   reactions: 0,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 420,
  title: "Cổ phiếu của tỷ phú Nguyễn Thị Phương Thảo lập đỉnh lịch sử, vốn hóa vượt Sacombank, ACB và LPBank",
  source: "CafeF",
  sourceType: "Báo chí",
  date: "2026-10-14 07:42",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://cafef.vn/co-phieu-cua-ty-phu-nguyen-thi-phuong-thao-lap-dinh-lich-su-von-hoa-vuot-sacombank-acb-va-lpbank-188261014143915461.chn",
  excerpt: "Cổ phiếu của tỷ phú <mark>Nguyễn Thị Phương Thảo</mark> lập đỉnh lịch sử, vốn hóa vượt Sacombank, ACB và LPBank Cổ phiếu <mark>HDB</mark> tiếp tục giao dịch tại vùng giá cao nhất lịch sử sau điều chỉnh, đưa vốn hóa <mark>HDBank</mark> vượt 150.000 tỷ đồng, đứng thứ 3 trong nhóm ngân hàng tư nhân niêm yết. Trong phiên giao dịch ngày 14/10, cổ phiếu <mark>HDB</mark> của <mark>Ngân hàng TMCP Phát triển TP.HCM</mark>..."
 },
 {
  id: 421,
  title: "Từ khoản đầu tư lớn nhất chiếm gần 11% danh mục, cổ phiếu VIC bất ngờ \"bốc hơi\" hoàn toàn khỏi...",
  source: "Titanlabs - Stock AI Agent",
  sourceType: "Facebook",
  date: "2026-10-14 04:40",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/titanlabsvn/posts/pfbid0fw1Qi4wER8QDLNJGUBQZutXzjUz6u6X3CS45WZycSK4PLFchwWoPXLtoQcrihp6Dl",
  excerpt: "...,62%. 🏦 Trụ cột Ngân hàng: Nhóm tài chính tiếp tục chi phối với 4/5 khoản đầu tư lớn nhất gồm TCB, <mark>HDB</mark>, VCB và MBB; đại diện phi tài chính duy nhất trong top 5 là MWG (chiếm 4,85%). 📉 Hiệu suất vượt trội nhẹ: SSI-SCA ghi nhận hiệu suất âm 3,1% trong tháng 9, đỡ tiêu cực hơn mức giảm 3,5% của VN-Index. Áp lực bán ròng ngoại xấp xỉ 179 triệu USD cùng...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 422,
  title: "Lãi suất ngân hàng hôm nay 14/10/2026: Lãi suất liên ngân hàng giảm kỳ hạn ngắn",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-14 02:14",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-14-10-2026-lai-suat-lien-ngan-hang-giam-manh-2564541.html",
  excerpt: "Lãi suất ngân hàng hôm nay, 14/10/2026, trong tuần từ 5-9/10, lãi suất bình quân trên thị trường liên ngân hàng bằng VND giảm mạnh ở các kỳ hạn qua đêm và 1 tuần, trong khi lãi suất kỳ hạn 6 tháng tăng."
 },
 {
  id: 423,
  title: "Ls tiết kiệm tại HDBank: 50tr - 6th 8.7 500tr - 6th 8.8 1 tỷ - 6th 9 2 tỷ - 6th 9.3 Lh...",
  source: "@phngah_166",
  sourceType: "Threads",
  date: "2026-10-13 23:24",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@phngah_166/post/DecOvDtDwJp",
  excerpt: "Ls tiết kiệm tại <mark>HDBank</mark>: 50tr - 6th 8.7 500tr - 6th 8.8 1 tỷ - 6th 9 2 tỷ - 6th 9.3 Lh 0365853534 <mark>HDBank</mark> HD HCM",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 424,
  title: "500 gởi vikki bank 9,5 á còn 100 thì tầm 9,2",
  source: "@hamai_1111",
  sourceType: "Threads",
  date: "2026-10-13 22:45",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hamai_1111/post/DecKSfOGqGD",
  excerpt: "500 gởi <mark>vikki bank</mark> 9,5 á còn 100 thì tầm 9,2",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 425,
  title: "Như bên Shb hoặc Vikki bank, khi mình ra giao dịch hoặc gửi tk, nó có cái camera chụp ảnh ở quầy...",
  source: "@ayami_9206",
  sourceType: "Threads",
  date: "2026-10-13 21:38",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@ayami_9206/post/DecCsklEwQb",
  excerpt: "Như bên Shb hoặc <mark>Vikki bank</mark>, khi mình ra giao dịch hoặc gửi tk, nó có cái camera chụp ảnh ở quầy , ngay lúc đó nó chụp ảnh mặt mình lù lù và lên hệ thống luôn á, hôm trc m để ý bị cam chụp và nó in ra tờ giấy ảnh trắng đen nhìn như đối tượng truy nã :))",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 426,
  title: "Mọi thứ chứ như kịch bản dựng sẵn. Nhân ngày Doanh nhân Việt Nam, tập thể HDBank Vĩnh Linh được...",
  source: "Vu Ke",
  sourceType: "Facebook",
  date: "2026-10-13 21:01",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/vuhoangke/posts/pfbid02KSuji2GuFbt4JqftGFr8t6tgLTuHdpgWjXP4bwL9aWBppTRz2DK9bVzy6tR7TPinl",
  excerpt: "Mọi thứ chứ như kịch bản dựng sẵn. Nhân ngày Doanh nhân Việt Nam, tập thể <mark>HDBank</mark> Vĩnh Linh được vinh danh. Hoà niềm vui ngày 13/10 thật nhiều ý nghĩa",
  engagement: {
   reactions: 72,
   shares: 0,
   comments: 21
  }
 },
 {
  id: 427,
  title: "VNINDEX hôm nay tiếp tục giảm nhẹ, cổ phiếu thì đa phần vẫn cưa chân bàn và đang dò đáy, thanh...",
  source: "Tuấn Đạt Chứng Khoán",
  sourceType: "Facebook Group",
  date: "2026-10-13 20:56",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/bovagau/posts/1889891075720946/",
  excerpt: ".... Ngân hàng: Phân hóa sức mạnh, cổ phiếu nào có câu chuyện thì dễ kéo ví dụ như MSB, VPB, TCB, VIB, <mark>HDB</mark>...còn lại ngắn hạn không có miếng thịt nào. 3. Thép: Dấu hiệu tạo đáy ngắn hạn rất cao, chú ý kỹ thêm, mạnh nhất là NKG, VGS 4. Đầu tư công: Sẽ kéo theo nhóm thép nếu có 5. Bất động sản: Dấu hiệu dừng giảm và mạnh hơn thị trường nhiều hôm đặc biệt...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 428,
  title: "VN-INDEX GIẢM PHIÊN THỨ 5 LIÊN TIẾP: TRỤ ĐỠ ĐIỂM, NHIỀU CỔ PHIẾU VẪN CHỊU ÁP LỰC Phiên 13/10,...",
  source: "TechProfit",
  sourceType: "Facebook Group",
  date: "2026-10-13 20:39",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/vnccs/posts/4782784668616346/",
  excerpt: "...ếu vốn hóa lớn khác như BID, CTG, MBB, VCB và VPB suy yếu trong phiên chiều. 🔹 Dòng tiền phân hóa: <mark>HDB</mark> tăng 2,21%, TPB tăng 1,74%, SHB đảo chiều tăng 0,48%. Ngược lại, VIX giảm 1,71%, VND giảm 1,9%, FRT giảm 3,81% và DGW giảm 2,13%. 🔹 Khối ngoại tiếp tục bán ròng: Giá trị bán ròng toàn thị trường khoảng 468 tỷ đồng. FPT bị bán ròng mạnh nhất trên...",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 429,
  title: "LỄ KỶ NIỆM 70 NĂM NGÀY TRUYỀN THỐNG HỘI LIÊN HIỆP THANH NIÊN VIỆT NAM 15/10/1956 - 15/10/2026 Có...",
  source: "Đạo diễn Hoàng Công Cường",
  sourceType: "Facebook",
  date: "2026-10-13 20:28",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/daodienhoangcongcuong/posts/pfbid02Pmz2mxQmaCC5nu2kfRy6Dy6HvysPPyvziJRZTca75qpGakfXuVTx2aP9998MwyMNl",
  excerpt: "...đoàn Điện lực Việt Nam (EVN) Công ty cổ phần khoáng sản và xây dựng Bình Dương (KSB) <mark>Ngân hàng TMCP Phát triển TP.HCM</mark> (<mark>HDBANK</mark>) Công ty cổ phần xe khách PHƯƠNG TRANG Tập đoàn Công nghiệp cao su Việt Nam Tập đoàn KN HOLDINGS 70HLHTNVN HCC VIETTINBANK",
  engagement: {
   reactions: 51,
   shares: 3,
   comments: 6
  }
 },
 {
  id: 430,
  title: "EmBo Vikki Bank xin chào cả nhà ạ🌷✨",
  source: "@_huienn._",
  sourceType: "Threads",
  date: "2026-10-13 19:46",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@_huienn._/post/Deb10DomMHN",
  excerpt: "EmBo <mark>Vikki Bank</mark> xin chào cả nhà ạ🌷✨",
  engagement: {
   reactions: 35,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 431,
  title: "Dự án ma của 1 banker : 🙂🙂 - Tháng nào cũng 100% kpi - Sáng cafe chill chill, tối lượn đường...",
  source: "Nguyễn Thu Hà",
  sourceType: "Facebook",
  date: "2026-10-13 19:46",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/ha.chan.ngan/posts/pfbid0zLRkEwiSJQhMXja8DqfMN14RMkDPeRqu22FCVuzKSdr8pyQchBP2vLDuWJKdMmLql",
  excerpt: "Dự án ma của 1 banker : 🙂🙂 - Tháng nào cũng 100% kpi - Sáng cafe chill chill, tối lượn đường ngắm hoa sữa - Con ông bà trông - Tháng chồng cho thêm 3 tháng lương <mark>HDBank</mark> xam",
  engagement: {
   reactions: 93,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 432,
  title: "Lãi suất tiết kiệm online tại HDBank đang rất tốt luôn mọi người ơiii. -6T từ 8,8% đến 9,2% -12T...",
  source: "@vthinnn_",
  sourceType: "Threads",
  date: "2026-10-13 19:44",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@vthinnn_/post/Deb1mHpCU80",
  excerpt: "Lãi suất tiết kiệm online tại <mark>HDBank</mark> đang rất tốt luôn mọi người ơiii. -6T từ 8,8% đến 9,2% -12T từ 8,7% đến 9,1% <mark>HDBank</mark> thì an toàn, uy tính. Gửi từ 100tr có quà tặng riêng từ em ạ! Liên hệ em Thịnh: 0794.086.340",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 433,
  title: "HDB, TCB, VPB: Ngân hàng nào lãi khủng nhất quý 3/2026? So sánh dự phóng từ 3 công ty chứng...",
  source: "Đoàn Smart Trend",
  sourceType: "Facebook",
  date: "2026-10-13 19:25",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/1105587425722480/",
  excerpt: "<mark>HDB</mark>, TCB, VPB: Ngân hàng nào lãi khủng nhất quý 3/2026? So sánh dự phóng từ 3 công ty chứng khoán Quý 3/2026, lợi nhuận VPB, TCB, <mark>HDB</mark> được dự phóng ra sao? Trong video này, Đoàn đặt số liệu dự phóng của VCBS, VPBankS và MBS cạnh nhau, phân tích NIM, tín dụng, chất lượng tài sản, định giá và đồ thị của 3 siêu cổ phiếu ngân hàng. Video cũng nói về việc cổ...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 434,
  title: "HDB, TCB, VPB: Ngân hàng nào lãi khủng nhất quý 3/2026? So sánh dự phóng từ 3 công ty chứng...",
  source: "Phạm Văn Đoàn",
  sourceType: "Facebook",
  date: "2026-10-13 19:23",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/1126758799868231/",
  excerpt: "<mark>HDB</mark>, TCB, VPB: Ngân hàng nào lãi khủng nhất quý 3/2026? So sánh dự phóng từ 3 công ty chứng khoán Quý 3/2026, lợi nhuận VPB, TCB, <mark>HDB</mark> được dự phóng ra sao? Trong video này, Đoàn đặt số liệu dự phóng của VCBS, VPBankS và MBS cạnh nhau, phân tích NIM, tín dụng, chất lượng tài sản, định giá và đồ thị của 3 siêu cổ phiếu ngân hàng. Video cũng nói về việc cổ...",
  engagement: {
   reactions: 8,
   shares: 0,
   comments: 3
  }
 },
 {
  id: 435,
  title: "TOP CỔ PHIẾU MẠNH & TỔNG KẾT THỊ TRƯỜNG NGÀY 13/10/2026 🚀 VN-INDEX GIẰNG CO ĐÃM CHÂN TẠI MỐC...",
  source: "Novus Wealth",
  sourceType: "Facebook Group",
  date: "2026-10-13 19:08",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/470718721335331/posts/1701507014923156/",
  excerpt: "TOP CỔ PHIẾU MẠNH &amp; TỔNG KẾT THỊ TRƯỜNG NGÀY 13/10/2026 🚀 VN-INDEX GIẰNG CO ĐÃM CHÂN TẠI MỐC 1719 ĐIỂM – KHỐI NGOẠI DUY TRÌ BÁN RÒNG NHẸ 433 TỶ, DÒNG TIỀN PHÂN HÓA NỔI BẬT TẠI NGÂN HÀNG VỚI <mark>HDB</mark> VƯỢT ĐỈNH LỊCH SỬ! 🔥Thị trường chứng khoán ngày 13/10/2026 tiếp tục duy trì trạng thái giằng co phân hóa khi chỉ số VN-INDEX chốt phiên giảm nhẹ -1,56 điểm...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 436,
  title: "SAU MSB ĐẾN HDB VƯỢT ĐỈNH DO THỊ TRƯỜNG XẤU ?| Phân tích chứng khoán",
  source: "Tấn Lộc Capital",
  sourceType: "YouTube",
  date: "2026-10-13 18:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.youtube.com/watch?v=2OiSIBhenVk",
  excerpt: "<mark>HDBank</mark> vượt đỉnh do thị trường xấu. một cái phiên rất là tuyệt vời và đánh dấu thêm với cổ móc đó là những cái cổ phiếu hàng đầu gọi là những cổ phiếu thị trường trên thị trường bắt đầu vượt đỉnh sau những cái cổ phiếu mà chúng ta mua và những con MSB thì ở đây á em có muốn đặt cho nhà đầu tư chúng ta một cái câu hỏi đó là những cái cổ phiếu MSB hay là...",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 437,
  title: "TOP CỔ PHIẾU SỨC MẠNH GIÁ – 13/10/2026 VN-Index giảm nhẹ 1,56 điểm (-0,09%) xuống 1.719,42 điểm,...",
  source: "Chứng Khoán Mirae Asset Việt Nam",
  sourceType: "Facebook",
  date: "2026-10-13 17:25",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/chungkhoanmiraeasset.vietnam/posts/pfbid0RyKkbVL9UzvztcxA9kJobT28mAcZUPqPKRL59yNZuU1cQB4EnxgrjLdCRknpWzuSl",
  excerpt: "... khoán Mirae Asset cập nhật danh sách cổ phiếu nổi bật theo tiêu chí Sức mạnh giá phiên hôm nay: 🔸 <mark>HDB</mark> – Ngân hàng Nhóm cổ phiếu lọt danh sách Sức mạnh giá được kỳ vọng sẽ có diễn biến tích cực hơn VN-Index trong ít nhất 1 đến 2 tuần tới. sucmanhgia <mark>hdb</mark>",
  engagement: {
   reactions: 0,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 438,
  title: "Giá euro xuống dưới 30.000 đồng",
  source: "VnExpress",
  sourceType: "Báo chí",
  date: "2026-10-13 17:04",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vnexpress.net/gia-euro-xuong-duoi-30-000-dong-5131940.html",
  excerpt: "Một số ngân hàng tư nhân như <mark>HDBank</mark>, Techcombank, Eximbank..."
 },
 {
  id: 439,
  title: "Động lực chính giúp cổ phiếu HDB (HDBank) tăng mạnh và chính thức bứt phá vượt đỉnh lịch sử...",
  source: "@vutuantrader",
  sourceType: "Threads",
  date: "2026-10-13 16:59",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@vutuantrader/post/DebitHXk6V0",
  excerpt: "Động lực chính giúp cổ phiếu <mark>HDB</mark> (<mark>HDBank</mark>) tăng mạnh và chính thức bứt phá vượt đỉnh lịch sử trong những ngày gần đây là câu chuyện chốt quyền chia cổ tức tỷ lệ cao và lộ trình tăng vốn điều lệ đầy tham vọng.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 3
  }
 },
 {
  id: 440,
  title: "1. Game tăng vốn và chia cổ tức lớn • Chia thưởng 30%: HDBank vừa chốt danh sách cổ đông vào...",
  source: "@vutuantrader",
  sourceType: "Threads",
  date: "2026-10-13 16:59",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@vutuantrader/post/DebiwyRE8iU",
  excerpt: "1. Game tăng vốn và chia cổ tức lớn • Chia thưởng 30%: <mark>HDBank</mark> vừa chốt danh sách cổ đông vào ngày 12/10/2026 để chia cổ tức bằng cổ phiếu tỷ lệ 25% và cổ phiếu thưởng 5%. • Tăng vốn điều lệ: Quy mô vốn tăng mạnh từ 50.053 tỷ đồng lên gần 65.069 tỷ đồng, giúp nâng cao năng lực tài chính và nới rộng room tăng trưởng tín dụng.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 441,
  title: "2. Nền tảng kinh doanh tăng trưởng mạnh • Lợi nhuận vượt trội: Lợi nhuận trước thuế 6 tháng đầu...",
  source: "@vutuantrader",
  sourceType: "Threads",
  date: "2026-10-13 16:59",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@vutuantrader/post/DebiwzIkya4",
  excerpt: "...tăng 31% so với cùng kỳ). • Cột mốc triệu tỷ: Tổng tài sản chính thức vượt mốc 1 triệu tỷ đồng, đưa <mark>HDBank</mark> gia nhập nhóm các ngân hàng thương mại lớn nhất Việt Nam.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 442,
  title: "100 DOANH NHÂN TIÊU BIỂU ĐƯỢC VINH DANH, CÓ 7 LÃNH ĐẠO NGÀNH NGÂN HÀNG VCCI tổ chức lễ tôn vinh...",
  source: "@giaimabanker2025",
  sourceType: "Threads",
  date: "2026-10-13 16:37",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@giaimabanker2025/post/DebgPKLAWVm",
  excerpt: "...hàng được vinh danh: ông Nguyễn Thanh Tùng (Vietcombank), ông Lê Ngọc Lâm (BIDV), ông Kim Byoungho (<mark>HDBank</mark>), ông Trần Khải Hoàn (Nam A Bank), ông Trịnh Văn Tuấn (OCB), bà Thái Hương (Bac A Bank) và bà Nguyễn Thị Nga (SeABank).",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 443,
  title: "HD SAISON – ƯU ĐÃI ĐẶC QUYỀN DÀNH CHO ĐỐI TÁC 🎁 DUY NHẤT TRONG THÁNG! Nhằm tri ân Quý Đối tác...",
  source: "@lyn_99officiall",
  sourceType: "Threads",
  date: "2026-10-13 16:25",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@lyn_99officiall/post/Debez90k5sk",
  excerpt: "📢 <mark>HD SAISON</mark> – ƯU ĐÃI ĐẶC QUYỀN DÀNH CHO ĐỐI TÁC 🎁 DUY NHẤT TRONG THÁNG! Nhằm tri ân Quý Đối tác đã luôn đồng hành cùng <mark>HD SAISON</mark>, team HD xin phép thông báo chương trình ưu đãi đặc biệt: 🔥 Lãi suất ưu đãi nay giảm thêm 💰 Khoản vay lên đến 270 TRIỆU ⏰ Chỉ áp dụng trong tháng 10 này 👉 Cơ hội đặc biệt dành riêng cho Đối tác. Cảm ơn anh chị đã đồng hành...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 444,
  title: "HDB, TCB, VPB: Ngân hàng nào lãi khủng nhất quý 3/2026? So sánh dự phóng từ 3 công ty chứng khoán",
  source: "Đoàn Smart Trend",
  sourceType: "YouTube",
  date: "2026-10-13 16:15",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.youtube.com/watch?v=HH04N-iln0g",
  excerpt: "Today , while our market is still declining , I , Doan Smart Chin , see that three super bank stocks — Techcombank , VPBank , and <mark>HDBank</mark> — are still performing very well with an extremely beautiful trend . Today is October 13 , 2026 , and indeed , <mark>HDBank</mark> is the best-performing stock on the market right now , everyone .",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 445,
  title: "IPAD GEN 11 128GB openbox mới kích hoạt Chưa sạc lần nào, số lần sạc 0 lần. Bh đến 4/10/2027 ....",
  source: "@lovephone.byly",
  sourceType: "Threads",
  date: "2026-10-13 15:58",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@lovephone.byly/post/DebbxfQICSq",
  excerpt: "... nhất 💲10Triệu_X - HỖ TRỢ THU CŨ ĐỔI MỚI 💕 TRẢ GÓP BAO NỢ XẤU - Quẹt thẻ tín dụng - Góp ngân hàng <mark>HD Saison</mark> , Mira 📲 𝟎𝟕𝟖𝟕𝟑𝟑𝟑𝟑𝟖𝟔 𝐋𝐲 Đ𝐢̣𝐚 𝐜𝐡𝐢̉ : 𝟏𝟒𝟓 Đ𝐨̂̃ 𝐐𝐮𝐚𝐧𝐠 - Đà Nẵng",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 446,
  title: "Cùng mang danh cổ phiếu vua, nhưng kẻ thì kín cổng cao tường, người lại rộng cửa kén rể: kịch...",
  source: "Vũ Ngọc Linh Stock",
  sourceType: "Facebook",
  date: "2026-10-13 15:55",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/thuylinh.tnt/posts/pfbid02TjYVRxs31UGMVfCZmj6JN5o9mtqFhA1M5ji7oy2en84i3ET8LJPTj6tXzZLTubmyl",
  excerpt: "...lái nội gom đủ hàng kiệt vol là kéo một mạch, nhưng muốn vẽ bánh vẽ bán vốn chiến lược kiểu VPB hay <mark>HDB</mark> để kích thích lòng tham là điều bất khả thi đó, chú ý margin nhé các con vợ! Trong khi cả làng bank rục rịch vào guồng, thì SHB của bác H vẫn kiên định quanh vùng mệnh 10k😤😤 Nhìn Tây lông quay xe gom ròng đột biến hơn 13 triệu cổ săn xác sống giá...",
  engagement: {
   reactions: 49,
   shares: 9,
   comments: 26
  }
 },
 {
  id: 447,
  title: "Có những món quà bắt đầu từ việc nhìn thấy mẹ vất vả.🤗 Mua sắm thông minh cùng HD SAISON:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-13 15:52",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DebbA7GD8gs",
  excerpt: "🎁 Có những món quà bắt đầu từ việc nhìn thấy mẹ vất vả.🤗 Mua sắm thông minh cùng <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/vn/mua-sam-thong-minh-khong-lo-tai-chinh.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 448,
  title: "Lãi suất đồng đô đang ở vùng cao nhất hơn 20 năm. Vậy mà các ngân hàng Việt vẫn xếp hàng vay...",
  source: "Trang Quỳnh ",
  sourceType: "Facebook",
  date: "2026-10-13 14:53",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/trangquynhchungkhoan/posts/pfbid0opVLiHAFCPkjCWAGrWAZA8eXfuK9YjaSjfyXJZ6NB7nFnQKXmsWLpcKgDPLCXkArl",
  excerpt: "...ất kể từ năm 2002. Đây là thước đo chi phí vốn USD trên toàn cầu. Dù vậy, VPBank đã ký 1,44 tỷ USD, <mark>HDBank</mark> 721 triệu, MB 550 triệu, VIB 285 triệu. Techcombank đang chờ duyệt thêm 1 tỷ. Lý do nằm ở Thông tư 50. Từ 1/12/2026, vốn vay nước ngoài được cộng vào “tổng tiền gửi” khi tính tỷ lệ cho vay trên tiền gửi (LDR), còn trần tỷ lệ này được nâng từ 85%...",
  engagement: {
   reactions: 114,
   shares: 7,
   comments: 3
  }
 },
 {
  id: 449,
  title: "CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13/10 ✨ Mỗi doanh nhân là một hành trình của bản lĩnh, khát...",
  source: "Quang Trường",
  sourceType: "Facebook",
  date: "2026-10-13 14:43",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/dop.bi.7/posts/pfbid02DRKkRqgFGAt1xfbaX5DXZKTZX8sZcVxReAD98xMRikKNkfGzHcPrnpp13QXj4w8l",
  excerpt: "✨ CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13/10 ✨ Mỗi doanh nhân là một hành trình của bản lĩnh, khát vọng và tinh thần không ngừng tiến về phía trước. Nhân Ngày Doanh nhân Việt Nam 13/10, <mark>HDBank</mark> trân trọng gửi lời chúc đến Quý Doanh nhân luôn vững tâm trước thử thách, bền chí trên hành trình phát triển và tiếp tục kiến tạo những giá trị tích cực cho doanh...",
  engagement: {
   reactions: 13,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 450,
  title: "Tháng 10 này, định mệnh bảo mấy bà phải giàu rồi, tranh thủ gửi tiết kiệm từ 01/10 đến 31/10 để...",
  source: "@hkootee",
  sourceType: "Threads",
  date: "2026-10-13 14:13",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hkootee/post/DebPuL8lM2m",
  excerpt: "...àn rỗi, vừa rinh ngay quà xinh. ☎️Liên hệ tui nha một nửa thế giới ơi : 0903716020 - Thái Hoàng 🕹️ <mark>HDBank</mark> Hóc Môn gần chợ Hóc Môn",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 451,
  title: "CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13/10 Nhân Ngày Doanh nhân Việt Nam, Ngân hàng Số Vikki kính...",
  source: "Ngân hàng Số Vikki",
  sourceType: "Facebook Fanpage",
  date: "2026-10-13 14:07",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/Vikki.NganhangSo/posts/pfbid0CJnZajDgJqKH6KhCxpDJeitUqgyN1u32Cm9kTiWymeg19JSh2YN1dKUYPMeAKfhPl",
  excerpt: "🎉 CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13/10 Nhân Ngày Doanh nhân Việt Nam, Ngân hàng Số <mark>Vikki</mark> kính chúc Quý Khách hàng luôn tràn đầy cảm hứng, vững bước tiên phong và không ngừng kiến tạo những giá trị tốt đẹp cho cộng đồng. 💜 Ngân hàng Số <mark>Vikki</mark> trân trọng đồng hành cùng Quý Khách hàng trên hành trình đổi mới, phát triển và vươn xa, cùng mở ra thêm...",
  engagement: {
   reactions: 1560,
   shares: 1036,
   comments: 1280
  }
 },
 {
  id: 452,
  title: "Êh, thử HDBank i bà, trời ơi ta nói ưu đãi như cái sớ v đó",
  source: "@themcomthempho",
  sourceType: "Threads",
  date: "2026-10-13 14:02",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@themcomthempho/post/DebOhwbmWAp",
  excerpt: "Êh, thử <mark>HDBank</mark> i bà, trời ơi ta nói ưu đãi như cái sớ v đó",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 3
  }
 },
 {
  id: 453,
  title: "cake zalopay hd saison",
  source: "@iembit67",
  sourceType: "Threads",
  date: "2026-10-13 12:56",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@iembit67/post/DebG6YXIPmq",
  excerpt: "cake zalopay <mark>hd saison</mark>",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 454,
  title: "Giữa lúc VN-Index chịu áp lực điều chỉnh diện rộng, mã cổ phiếu nào vừa ngược dòng xác lập đỉnh...",
  source: "Titanlabs - Stock AI Agent",
  sourceType: "Facebook",
  date: "2026-10-13 12:40",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/titanlabsvn/posts/pfbid02GXdkMtSEH9vCXetFx4ZX2cxvCkwyjA3GJgG4g7jNDktqUnH88Da5RkGeFuCbmwv9l",
  excerpt: "...về 1.715 điểm cùng sắc đỏ tại nhiều đại diện ngân hàng như MBB, CTG, VCB, BID, ACB và SHB, cổ phiếu <mark>HDB</mark> (<mark>HDBank</mark>) lại bứt phá mạnh mẽ và trở thành tâm điểm của dòng tiền. Điểm lại những dữ kiện đáng chú ý đằng sau đà tăng này: 🚀 Xác lập đỉnh lịch sử: <mark>HDB</mark> tăng hơn 2%, có thời điểm chạm 23.250 đồng/cổ phiếu, dẫn đầu thanh khoản toàn thị trường phiên...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 455,
  title: "Mỗi ngày tôi chọn một niềm vui, chọn tới chọn lui lại hết một ngày! Buổi chia sẻ thông tin về dự...",
  source: "Le Hoang",
  sourceType: "Facebook",
  date: "2026-10-13 12:14",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/le.hoang.456848/posts/pfbid0NqpLNexiY574BikTm3bRhbJ1UWGRJH9vRxtzhykBiS2TdYKdL21nMEoHXhrpU56Ml",
  excerpt: "Mỗi ngày tôi chọn một niềm vui, chọn tới chọn lui lại hết một ngày! Buổi chia sẻ thông tin về dự án Celesta Gold và tham quan dự án Essensia Sky tới các Anh chị đối tác VDP, Kiên Nam Land, <mark>Vikki</mark>, <mark>HDBank</mark>,… Anh Chị khách hàng có nhu cầu đầu tư dự án căn hộ mặt tiền đường Nguyễn Hữu Thọ, được phát triển bởi 3 thương hiệu uy tín là Phú Long - Keppel Land -...",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 456,
  title: "Bà là 1 người vợ có tâm có tâm tôi tin với sự dẫn dắt của bà thì HDBank (HDB) và Vietjet ( VJC)...",
  source: "Trương Kính Nam",
  sourceType: "Facebook",
  date: "2026-10-13 12:08",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/TruongKinhNamStock/posts/pfbid02QviDfnZ4omUD8qfWcgwa1dFzuJGxZNy1ATGAvbWpxnuRVdk547VKZEUQAv8PhuTol",
  excerpt: "Bà là 1 người vợ có tâm có tâm tôi tin với sự dẫn dắt của bà thì <mark>HDBank</mark> (<mark>HDB</mark>) và Vietjet ( VJC) sẽ ngày càng phát triển hơn nữa Qua đây tôi cũng muốn nhắn nhủ với những bạn theo dõi kênh Trương Kính Nam một trong những yếu tố cực kỳ quan trọng để đầu tư vào 1 cổ phiếu của 1 doanh nghiệp đó chính là chúng ta phải xem người lãnh đạo của doanh nghiệp đó có...",
  engagement: {
   reactions: 22,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 457,
  title: "ĐỘC QUYỀN SHOPEE: THẺ HDBANK TRẢ GÓP 0 LÃI - 0 PHÍ, GIẢM ĐẾN 2 TRIỆU ĐỒNG!​ Chi tiết chương...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-13 12:01",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid02n9jAeFvfPZYgpjY3zczvxwsC7oXtsDa5WL8u9UbyyaL5cEQMXJVX5VnCEfRExq1fl",
  excerpt: "💳✨ ĐỘC QUYỀN SHOPEE: THẺ <mark>HDBANK</mark> TRẢ GÓP 0 LÃI - 0 PHÍ, GIẢM ĐẾN 2 TRIỆU ĐỒNG!​ Chi tiết chương trình: https://<mark>hdbank</mark>.com.vn/s/TGShopee Team \"chốt đơn\" Shopee ơi, tin vui bùng nổ đến đây: phương thức trả góp bằng thẻ tín dụng <mark>HDBank</mark> đã chính thức có mặt tại Shopee, kèm theo ưu đãi cực đã: ​ 🔥Giảm ngay 2 triệu đồng khi chọn phương thức thanh toán bằng...",
  engagement: {
   reactions: 766,
   shares: 197,
   comments: 761
  }
 },
 {
  id: 458,
  title: "Вьетнамский банк Nam A Bank вошел в топ-10 банков Юго-Восточной Азии по финансовым показателям....",
  source: "@nashvietnam",
  sourceType: "Threads",
  date: "2026-10-13 11:35",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@nashvietnam/post/Dea9mzAiD5W",
  excerpt: "...ктивность, качество активов, ликвидность и достаточность капитала. Кроме Nam A Bank, в списке также <mark>HDBank</mark> (2 место), LPBank (4), Techcombank (6), TPBank (7) и Military Bank (MB) на 8-м месте. Активы Nam A Bank выросли с 1,35 млрд долларов в 2015 году до 15,91 млрд долларов к к... 👉 Наш Telegram-канал: @nashvietnam https://t.me/nashvietnam",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 459,
  title: "LÊN SÓNG GIỜ VÀNG – TÀI CHÍNH VỮNG VÀNG Cả nhà ơi, Gặp nhau Giờ VÀNG đã lên sóng rồi! Ghé Xóm...",
  source: "Ngân hàng Số Vikki",
  sourceType: "Facebook Fanpage",
  date: "2026-10-13 11:30",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/Vikki.NganhangSo/videos/1102729915801187/",
  excerpt: "💪 LÊN SÓNG GIỜ VÀNG – TÀI CHÍNH VỮNG VÀNG Cả nhà ơi, Gặp nhau Giờ VÀNG đã lên sóng rồi! Ghé Xóm Nhà Tấm gặp Cô Tấm <mark>Vikki</mark> và Cô Lượm, cùng nghe chuyện làm ăn, chuyện làm chủ và chuyện tiền nong rất đỗi quen thuộc của chị em mình nhé! Giỏi kinh doanh, khéo vun vén, chị em cũng có những dự định riêng cần được chăm chút mỗi ngày. Cô Tấm còn bật mí loạt ưu...",
  engagement: {
   reactions: 1327,
   shares: 910,
   comments: 1452
  }
 },
 {
  id: 460,
  title: "Chủ tịch HDBank Kim Byoungho nhận cúp Thánh Gióng 2026, ghi dấu trong Top 10 Doanh nhân Việt Nam...",
  source: "Lan Trần Thị Tuyết",
  sourceType: "Facebook",
  date: "2026-10-13 11:30",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/lan.tranthituyet.3/posts/pfbid02sWKcmt2oWbiQjkTGfwvxh4MFW9XXBp66ZmmYsRH5wQ2URrVL6LR5FP54vCRnDwBFl",
  excerpt: "Chủ tịch <mark>HDBank</mark> Kim Byoungho nhận cúp Thánh Gióng 2026, ghi dấu trong Top 10 Doanh nhân Việt Nam tiêu biểu <mark>HDBank</mark> HappyDigitalBank Tuhaola<mark>hdbank</mark>er",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 461,
  title: "Nghịch lý lạ đời: CTG – VCB – MBB: lợi nhuận lớn, chất lượng tài sản tốt. Nhưng hiện tại giá cổ...",
  source: "Ng Thanh Hương",
  sourceType: "Facebook",
  date: "2026-10-13 11:25",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/ngthanhhuongstock/posts/pfbid02hnMrY4wXa9aqiT3oCj3fNDwX8xhMpwHDEfmDQEKNrfSNX6q2f7DShLJtxENc5uxWl",
  excerpt: "...ức nào, và từ mức giá hiện tại còn có thể kiếm được bao nhiêu lợi nhuận. Dễ có thể thấy TCB, VPB và <mark>HDB</mark> tuy dự báo lợi nhuận có phần kém cạnh hơn nhưng giá cổ phiếu đang nỗ lực neo giá. <mark>HDB</mark> và VPB còn muốn vượt đỉnh lịch sử, thanh khoản dòng tiền vào liên tục. <mark>HDB</mark> và TCB đều có cùng một game cuối năm nay đó chính là game tăng vốn. Nhưng game tăng vốn...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 462,
  title: "Anh không biết em à Anh chỉ biết lãi suất vikki bank Thái Nguyên lên tới 9,x% Siêu ưu đãi tận...",
  source: "@duy.tute",
  sourceType: "Threads",
  date: "2026-10-13 11:18",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@duy.tute/post/Dea7rtEChSZ",
  excerpt: "Anh không biết em à Anh chỉ biết lãi suất <mark>vikki bank</mark> Thái Nguyên lên tới 9,x% Siêu ưu đãi tận x,6% Em có gì ủng hộ anh em ơiiiiiiiiii Zl 0366161617 <mark>vikki</mark> <mark>Vikki</mark>GO <mark>Vikki</mark>DigitalBank Toiyeu<mark>Vikki</mark>",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 463,
  title: "Top trái phiếu giao dịch nhiều nhất quý III",
  source: "Báo Xây dựng",
  sourceType: "Báo chí",
  date: "2026-10-13 11:01",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://baoxaydung.vn/top-trai-phieu-giao-dich-nhieu-nhat-quy-iii-192261013174111244.htm",
  excerpt: "Ở nhóm ngân hàng, giá trị giao dịch trái phiếu của <mark>Ngân hàng TMCP Phát triển TP.HCM</mark> (<mark>HDBank</mark>) đạt 32.492 tỷ đồng trong quý, lũy kế từ đầu năm đạt 140.789 tỷ đồng."
 },
 {
  id: 464,
  title: "HDB Cổ phiếu Ngân hàng hot nhất lúc này",
  source: "Thành Quách",
  sourceType: "Facebook Group",
  date: "2026-10-13 10:40",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/diendanchungkhoanvietnam.tt/posts/2236489247287973/",
  excerpt: "<mark>HDB</mark> Cổ phiếu Ngân hàng hot nhất lúc này",
  engagement: {
   reactions: 7,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 465,
  title: "Từ những ngày đầu thị trường vốn còn sơ khai, Anh hùng Lao động - Tiến sĩ Nguyễn Thị Phương Thảo...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-13 10:23",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid036Di234Mz2PSN9sJA4c3ACeHZKGXivMPM2DiGgVAsYMGWu3Yhogi4F6o8JT8Qc1MRl",
  excerpt: "🇻🇳️🎖️ Từ những ngày đầu thị trường vốn còn sơ khai, Anh hùng Lao động - Tiến sĩ <mark>Nguyễn Thị Phương Thảo</mark> đã tham gia các hoạt động thương mại, tài chính quốc tế, trong đó có chương trình trả nợ Nga bằng hàng hóa, quá trình phát hành trái phiếu quốc tế đầu tiên của Chính phủ và đề án thành lập những ngân hàng thương mại cổ phần đầu tiên. --- 🌟 Kỷ niệm...",
  engagement: {
   reactions: 3475,
   shares: 1335,
   comments: 2536
  }
 },
 {
  id: 466,
  title: "NỮ CƯỜNG LÀM CHỦ - TÀI CHÍNH VỮNG VÀNG Tháng Phái đẹp này, Cô Tấm Vikki cùng Cô Lượm sẽ gặp gỡ...",
  source: "Ngân hàng Số Vikki",
  sourceType: "Facebook Fanpage",
  date: "2026-10-13 10:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/Vikki.NganhangSo/posts/pfbid02bP9xPCba3eosBfUieNoMWxRYGZoaLZM6JcL3jFULWgST4iUqDrJh3QPbwsgc95xxl",
  excerpt: "💪 NỮ CƯỜNG LÀM CHỦ - TÀI CHÍNH VỮNG VÀNG Tháng Phái đẹp này, Cô Tấm <mark>Vikki</mark> cùng Cô Lượm sẽ gặp gỡ tại Xóm Nhà Tấm, mang đến những câu chuyện làm chủ, kinh doanh và bí quyết tài chính dành riêng cho phái đẹp. Đừng quên đón xem livestream để khám phá loạt ưu đãi hấp dẫn và theo dõi quay số Tuần 14 - Tiết kiệm <mark>Vikki</mark>, Trúng Bóng Vàng Ký nhé! 📺 GẶP NHAU GIỜ...",
  engagement: {
   reactions: 1542,
   shares: 1070,
   comments: 1270
  }
 },
 {
  id: 467,
  title: "TIN DOANH NGHIỆP : - OCB: Tất toán sớm 3 lô trái phiếu tổng trị giá 2.600 tỷ đồng - KBC: Kinh...",
  source: "@nhathoang.409",
  sourceType: "Threads",
  date: "2026-10-13 10:17",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@nhathoang.409/post/Dea0vAsifZG",
  excerpt: "...quyền mua trái phiếu CII \"ế\" khách mua - STB: Sacombank tất toán lô trái phiếu phát hành năm 2024 - <mark>HDBank</mark> và MB được dự báo dẫn đầu tăng trưởng lợi nhuận quý III - MSB: Chốt phương án tăng vốn và chủ trương mua công ty chứng khoán",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 468,
  title: "cần vay ngân hàng 40tr hiện tại đang dư nợ khoản 30tr tại ngân hàng HD bank lịch sử tín dụng trả...",
  source: "Virgon Astra",
  sourceType: "Facebook Group",
  date: "2026-10-13 10:14",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/204809013400481/posts/2184691912078838/",
  excerpt: "cần vay ngân hàng 40tr hiện tại đang dư nợ khoản 30tr tại ngân hàng <mark>HD bank</mark> lịch sử tín dụng trả tốt ko chậm",
  engagement: {
   reactions: 9,
   shares: 0,
   comments: 73
  }
 },
 {
  id: 469,
  title: "CÙNG HDBANK CHÀO MỪNG NGÀY DOANH NHÂN VIỆT NAM 13/10 💼🚀 Mỗi bước tiến của doanh nghiệp đều bắt...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-13 10:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid0K8zzQ1Q2Rv8GXoY7Pv5d5mJS2BW9tmSzQfCozxNTbUSqBJQMo913s11WFycGEnjsl",
  excerpt: "✨ CÙNG <mark>HDBANK</mark> CHÀO MỪNG NGÀY DOANH NHÂN VIỆT NAM 13/10 💼🚀 Mỗi bước tiến của doanh nghiệp đều bắt đầu từ bản lĩnh của người dẫn dắt – dám nghĩ lớn, dám nắm bắt cơ hội và không ngừng kiến tạo những giá trị mới. Nhân Ngày Doanh nhân Việt Nam 13/10, <mark>HDBank</mark> trân trọng gửi lời chúc đến cộng đồng Doanh nhân Việt Nam luôn vững tâm dẫn lối – vững lực bứt phá,...",
  engagement: {
   reactions: 1209,
   shares: 214,
   comments: 1038
  }
 },
 {
  id: 470,
  title: "CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13/10 🎉 VikkiBank Hưng Yên trân trọng gửi tới Quý Khách...",
  source: "@phuong.nguyenthilan.399",
  sourceType: "Threads",
  date: "2026-10-13 09:26",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@phuong.nguyenthilan.399/post/Deau6XVkrNm",
  excerpt: "🎉 CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13/10 🎉 <mark>VikkiBank</mark> Hưng Yên trân trọng gửi tới Quý Khách hàng, Quý Đối tác lời chúc sức khỏe, hạnh phúc và thành công! 🌹 Kính chúc Quý vị luôn vững vàng bản lĩnh, phát triển thịnh vượng và gặt hái nhiều thành công trên hành trình kinh doanh. 💙 <mark>VikkiBank</mark> Hưng Yên – Trân trọng đồng hành, cùng Quý vị kiến tạo thành công!",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 471,
  title: "Anh Chị mua nhà, điều gì quan trọng nhất ạ? Chọn đúng đáy thị trường hay chọn đúng nơi mình...",
  source: "Quỳnh Sala",
  sourceType: "Facebook",
  date: "2026-10-13 09:07",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/muanhathuduc/posts/pfbid02dCKn2NQY4hbHuB4vKyN9WtraFxi2AGRRgRR1nf9tdH1QzRPmtBK4QfiBSofo5t5Wl",
  excerpt: "...y vốn phù hợp Nhà đẹp để mình ở, tài chính cứ để Quỳnh cùng tính! 😄 MuaNha AnCuLacNghiep VayMuaNha <mark>HDBank</mark> QuynhSala",
  engagement: {
   reactions: 2,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 472,
  title: "AN YÊN GIỮA RỪNG XANH VÀ BIỂN CẢ TẠI GREEN BAY PHÚ QUỐC RESORT & SPA​ Rời xa nhịp sống thường...",
  source: "HDBank Priority",
  sourceType: "Facebook Fanpage",
  date: "2026-10-13 09:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankpriority/posts/pfbid035yqYz5sWHKwsMgxbTqFDHLYHDZiE5ZDJXLRubsfecnS6fKHvSa9H6hi7oAPk1kWSl",
  excerpt: "🌴 AN YÊN GIỮA RỪNG XANH VÀ BIỂN CẢ TẠI GREEN BAY PHÚ QUỐC RESORT &amp; SPA​ Rời xa nhịp sống thường ngày, trở về với màu xanh nguyên sơ của rừng và biển. <mark>HDBank</mark> Priority đưa Quý Khách hàng Đặc biệt đến với những ngày nghỉ thư thái tại Green Bay Phú Quốc Resort &amp; Spa, thiên đường nghỉ dưỡng năm sao bền vững nép mình dọc bờ biển Cửa Cạn hoang sơ, nơi phong...",
  engagement: {
   reactions: 91,
   shares: 14,
   comments: 36
  }
 },
 {
  id: 473,
  title: "ALO ALO, CUỐI NĂM HDBANK CÓ GÌ💰❤️ Cuối năm là lúc nhiều cô chú, anh chị cần thêm nguồn vốn để...",
  source: "Mỹ Linh",
  sourceType: "Facebook Group",
  date: "2026-10-13 08:54",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/300458566031012/posts/1094338736642987/",
  excerpt: "📣 ALO ALO, CUỐI NĂM <mark>HDBANK</mark> CÓ GÌ💰❤️ Cuối năm là lúc nhiều cô chú, anh chị cần thêm nguồn vốn để kinh doanh, nhập hàng, mở rộng công việc hoặc xoay vòng dòng tiền đúng không ạ? 👉 <mark>HDBank</mark> có các giải pháp vay vốn phù hợp với từng nhu cầu và khả năng tài chính của khách hàng. 💰 Cần vốn kinh doanh – Em Linh tư vấn 🏡 Cần vốn phục vụ nhu cầu cá nhân – Em...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 474,
  title: "VN-Index giảm liên tiếp 5 phiên",
  source: "VnExpress",
  sourceType: "Báo chí",
  date: "2026-10-13 08:52",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vnexpress.net/vn-index-giam-lien-tiep-5-phien-5131781.html",
  excerpt: "<mark>HDB</mark> dẫn đầu thanh khoản với 777 tỷ đồng, sau đó đến TCB, VIC và MSN."
 },
 {
  id: 475,
  title: "Sinh viên thời nay kiểu: Học online, mua giáo trình online, đặt đồ ăn online, mua sắm đồ...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-13 08:41",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeapuWzjxns",
  excerpt: "...anh toán online chắc chắn là thứ đáng để hội sinh viên biết tới 💳 \"Thẻ 0 phí – Sinh viên 0 lo\" của <mark>HD SAISON</mark> - 18 tuổi đã có thể sở hữu, thanh toán online dễ dàng cùng vô vàng tiện ích đi kèm ! 👉 Thêm một lựa chọn thanh toán tiện lợi cho thời đại sinh viên thời 4.0 đây rồi",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 476,
  title: "Thẻ 0 phí - Sinh viên 0 lo cùng HD SAISON:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-13 08:41",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeapuVGDxm2",
  excerpt: "📖 Thẻ 0 phí - Sinh viên 0 lo cùng <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/vn/the-0-phi-sinh-vien-0-lo.html 💳 Không áp lực thủ tục. Mở thẻ nhanh gọn 100% online - sử dụng ngay sau 30 phút cho mọi sinh viên: 🌐 Website : https://credit4tomorrow.<mark>hdsaison</mark>.com.vn 📲 Hoặc Tải app <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/app-download.html 🚩 Hoặc đến cửa hàng HD...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 477,
  title: "Lâu nay e không đăng bài chứ e vẫn giải ngân hàng ngày cho khách nhé mn. Lâu ngoi lên lại chứ sợ...",
  source: "@otter.6652976",
  sourceType: "Threads",
  date: "2026-10-13 08:40",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@otter.6652976/post/DeappnnE1jM",
  excerpt: "Lâu nay e không đăng bài chứ e vẫn giải ngân hàng ngày cho khách nhé mn. Lâu ngoi lên lại chứ sợ mn lại quên e,con bé cho zay trả góp 🛵🛵 và cho zay 💵💵 nhé mnmn :- :- :- Hỗ trợ hs 58🍠 cho khách e sáng nay🥰🥰 ✅✅ 0356.694.558 (Thuỳ Minh <mark>hdsaison</mark>)",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 478,
  title: "Ở Gò Vấp mình có 1ty2 gửi 6 tháng Sacombank, BIDV, HDbank được 9.5 không ạ",
  source: "DelightfulBison8277",
  sourceType: "Facebook Group",
  date: "2026-10-13 08:33",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/guitietkiemnganhang/posts/4458494227700587/",
  excerpt: "Ở Gò Vấp mình có 1ty2 gửi 6 tháng Sacombank, BIDV, <mark>HDbank</mark> được 9.5 không ạ",
  engagement: {
   reactions: 23,
   shares: 0,
   comments: 117
  }
 },
 {
  id: 479,
  title: "Cổ phiếu vốn hóa lớn giúp VN-Index “thoát hiểm”",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-13 08:27",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/co-phieu-von-hoa-lon-giup-vn-index-thoat-hiem.htm",
  excerpt: "<mark>HDB</mark> tăng 2,21%, TCB tăng 1,07%, VIC tăng 1,37%, PNJ tăng 5,79%, TPB tăng 1,74%, DXG tăng 1,01%, HHP tăng 2,55%, KBC tăng 1,38%, TLG tăng 1,46% và MZG tăng 1,69% là những cổ phiếu duy nhất khớp lệnh trên 10 tỷ đồng."
 },
 {
  id: 480,
  title: "Điểm danh các Ngân Hàng có kế hoạch phát hành cổ phiếu Riêng lẻ",
  source: "Chứng Khoán Mỗi Ngày - Red Investment",
  sourceType: "Facebook Group",
  date: "2026-10-13 08:15",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/groupchungkhoanviet/posts/1747186726563668/",
  excerpt: "Điểm danh các Ngân Hàng có kế hoạch phát hành cổ phiếu Riêng lẻ",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 481,
  title: "Theo dự báo lợi nhuận quý III/2026, có sự phân hóa mạnh mẽ giữa các ngân hàng. Nhóm HDBank, MB…...",
  source: "Nông Thôn Việt",
  sourceType: "Facebook",
  date: "2026-10-13 08:12",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nongthonvietonline/posts/pfbid031coGTjno6AaaFuhHcvDJdzULxLDLTYK7VsnWe12MwKroXMu2G7VCqCkrRvh2J4Pql",
  excerpt: "Theo dự báo lợi nhuận quý III/2026, có sự phân hóa mạnh mẽ giữa các ngân hàng. Nhóm <mark>HDBank</mark>, MB… được kỳ vọng tăng trưởng cao, trong khi Sacombank, Eximbank và LPBank chịu áp lực suy giảm lớn. Tăng trưởng tín dụng, chi phí vốn và dự phòng rủi ro là những yếu tố mang tính quyết định.",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 482,
  title: "b>HDBank chắp cánh doanh nghiệp Việt vươn tầm thế giới!</b> 🎯 Ngày 10/10 vừa qua, HDBank đã có...",
  source: "Hóng",
  sourceType: "Facebook",
  date: "2026-10-13 08:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/vpa.hong/posts/pfbid02Fh9NPuLJ5jD9NEjdbytHx3m7iGQV4ug49hQ8zKWqBjWsEVGWTSGSNXeHFud1VAttl",
  excerpt: "🚀 &lt;b&gt;<mark>HDBank</mark> chắp cánh doanh nghiệp Việt vươn tầm thế giới!&lt;/b&gt; 🎯 Ngày 10/10 vừa qua, <mark>HDBank</mark> đã có mặt tại Diễn đàn Go Global Bắc Ninh 2026 để cùng bàn về bài toán kết nối chuỗi cung ứng toàn cầu. 💡 Đại diện <mark>HDBank</mark> mang đến những chia sẻ thiết thực về nguồn vốn và giải pháp tài chính, tiếp thêm sức mạnh cho cộng đồng doanh nghiệp tự tin bước ra biển...",
  engagement: {
   reactions: 17,
   shares: 0,
   comments: 14
  }
 },
 {
  id: 483,
  title: "Mua 100 Triệu Cổ Phiếu Ngân Hàng Từ 2019: Giờ Thành Bao Nhiêu? 📊 Thí nghiệm thú vị với 5 mã...",
  source: "AI Dễ Hiểu",
  sourceType: "Facebook",
  date: "2026-10-13 08:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/aidehieu.vn/posts/pfbid02HoMKkgt6vvv34vzwGFVdipkhhUYsGFEpYnefJFXCscry8nVWhTNZkAr9kVxVMo4gl",
  excerpt: "📉 Mua 100 Triệu Cổ Phiếu Ngân Hàng Từ 2019: Giờ Thành Bao Nhiêu? 📊 Thí nghiệm thú vị với 5 mã TCB, VPB, <mark>HDB</mark>, VIB, LPB từ đầu 2019 đến nay. 🏆 LPB bất ngờ vô địch, 100 triệu hóa thành gần 1,4 tỷ (gấp 13,9 lần). ⚠️ Nhưng mấy ai gồng lỗ qua cú sập Covid 2020 hay đợt rơi 2022 để hái quả ngọt? 💡 Bài học lớn nhất: Mua đúng mới là nửa chặng đường, giữ chặt...",
  engagement: {
   reactions: 17,
   shares: 0,
   comments: 11
  }
 },
 {
  id: 484,
  title: "DÒNG TIỀN ĐANG CHỌN CỔ PHIẾU NÀO SAU PHIÊN 12/10? Cùng một thị trường nhưng dòng tiền đang phân...",
  source: "Minh Lý Invest - Đầu tư theo chỉ báo dòng tiền",
  sourceType: "Facebook",
  date: "2026-10-13 07:37",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/MLyinvest/posts/pfbid0352FUaAMKaifWG9yVYoRVheYt1aSJivvXcRgj3QCA2BobXxYuJX34iB1V5o6jR4YJl",
  excerpt: "DÒNG TIỀN ĐANG CHỌN CỔ PHIẾU NÀO SAU PHIÊN 12/10? Cùng một thị trường nhưng dòng tiền đang phân hóa rõ nét Nhóm cổ phiếu nổi bật qua bộ lọc giá và thanh khoản: MSN, <mark>HDB</mark>, NVL, MWG, MSR, TNG, ANV, BFC Tuy nhiên, thanh khoản tăng chưa đồng nghĩa với dòng tiền mua chủ động, đặc biệt khi một số mã xuất hiện tín hiệu điều chỉnh hoặc phân phối Cơ hội không nằm...",
  engagement: {
   reactions: 0,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 485,
  title: "Chúc mừng HDBank tiếp tục giữ vị trí số 1 ngành Tài chính - Ngân hàng - Chứng khoán, Khối Doanh...",
  source: "Thiện Nguyễn",
  sourceType: "Facebook",
  date: "2026-10-13 06:32",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/thien.nguyen.842851/posts/pfbid02sPLCqg68Fymw1bKPU2hvjpEPmCMYYEyoesy8xJuBVwYvQhpdTffHgqkqJXRdbvJvl",
  excerpt: "🥇 Chúc mừng <mark>HDBank</mark> tiếp tục giữ vị trí số 1 ngành Tài chính - Ngân hàng - Chứng khoán, Khối Doanh nghiệp Lớn, tại lễ vinh danh “Doanh nghiệp yêu thích 2026 - Enterprise of Choice”",
  engagement: {
   reactions: 88,
   shares: 0,
   comments: 4
  }
 },
 {
  id: 486,
  title: "I love HDbank HDBank",
  source: "YThông Nguyễn",
  sourceType: "Facebook",
  date: "2026-10-13 04:45",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/ythong.nguyen.2025/posts/pfbid09JVE4WJUU8yrDUEAPhZd4fK6vP9b2ATvDBcc6WVE43XTEWb74rSZC2nCrQWzjP7El",
  excerpt: "I love <mark>HDbank</mark> <mark>HDBank</mark>",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 487,
  title: "Anh hùng lao động Nguyễn Thị Phương Thảo: Đừng đánh mất lý tưởng ban đầu",
  source: "CafeF",
  sourceType: "Báo chí",
  date: "2026-10-13 03:32",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://cafef.vn/anh-hung-lao-dong-nguyen-thi-phuong-thao-dung-danh-mat-ly-tuong-ban-dau-188261013095228743.chn",
  excerpt: "Anh hùng lao động <mark>Nguyễn Thị Phương Thảo</mark>: Đừng đánh mất lý tưởng ban đầu Điều gì đã tạo nên một <mark>Nguyễn Thị Phương Thảo</mark> vừa là tỷ phú tự thân, vừa là Anh hùng lao động? <mark>Nguyễn Thị Phương Thảo</mark> đã đi qua hơn ba thập kỷ kinh doanh với nhiều quyết định táo bạo, mạnh mẽ nhưng cũng hết sức nhân văn."
 },
 {
  id: 488,
  title: "Ước mơ lớn, suy nghĩ lớn, nhưng phải bắt đầu bằng những giá trị thật!",
  source: "Báo Nhân Dân",
  sourceType: "Báo chí",
  date: "2026-10-13 03:05",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://nhandan.vn/uoc-mo-lon-suy-nghi-lon-nhung-phai-bat-dau-bang-nhung-gia-tri-that-post994859.html",
  excerpt: "Bằng chuyến bay khai mở này, Nhà sáng lập hãng Vietjet - Anh hùng Lao động, Giáo sư, Tiến sĩ <mark>Nguyễn Thị Phương Thảo</mark> đã làm nên điều chưa từng có: Đưa Việt Nam trở thành một trong số ít quốc gia có hãng hàng không tư nhân hoạt động toàn cầu. Tiến sĩ <mark>Nguyễn Thị Phương Thảo</mark>: Xin cảm ơn Báo Nhân Dân đã cho tôi cơ hội được chia sẻ trong một dịp đặc biệt là..."
 },
 {
  id: 489,
  title: "Lãi suất ngân hàng hôm nay 13/10/2026: Gửi 100 triệu nhận về bao nhiêu tiền lãi?",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-13 02:57",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-13-10-2026-gui-100-trieu-nhan-ve-bao-nhieu-tien-lai-2564213.html",
  excerpt: "Lãi suất ngân hàng hôm nay, 13/10/2026, gửi 100 triệu đồng, sau 6 tháng nhận về 4 triệu đồng tiền lãi với mức lãi suất huy động 8%/năm. Tuy nhiên, số tiền nhận về lên đến hàng trăm triệu đồng nếu áp dụng lãi suất kép."
 },
 {
  id: 490,
  title: "Mình nhận dk thông báo này trên app HD bank, m.n cho hỏi h mình dky mở thẻ có dk duyệt luôn ko...",
  source: "CapablePassionfruit6329",
  sourceType: "Facebook Group",
  date: "2026-10-13 00:33",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1413637770921015/",
  excerpt: "Mình nhận dk thông báo này trên app <mark>HD bank</mark>, m.n cho hỏi h mình dky mở thẻ có dk duyệt luôn ko hay phải chờ thẩm định nữa ạ",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 9
  }
 },
 {
  id: 491,
  title: "Em đang dùng thẻ tín dụng vpbank hạn mức 60 triệu và có khoản vay cty tài chính 26 triệu,muốn mở...",
  source: "Jerry_83869988",
  sourceType: "Facebook Group",
  date: "2026-10-13 00:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1418754743742651/",
  excerpt: "Em đang dùng thẻ tín dụng vpbank hạn mức 60 triệu và có khoản vay cty tài chính 26 triệu,muốn mở thẻ tín dụng <mark>HDBank</mark> có dễ duyệt không ạ,lương em gần 20 triệu 1 tháng",
  engagement: {
   reactions: 7,
   shares: 0,
   comments: 12
  }
 },
 {
  id: 492,
  title: "VPB - HDB - TCB - MBB 4 cổ phiếu Ngân hàng có nền giá tích lũy 4 năm nên có danh mục quý 4.",
  source: "Xuân TĐ - CKF88",
  sourceType: "Facebook Group",
  date: "2026-10-12 20:53",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/dautuck247/posts/2324726708344114/",
  excerpt: "VPB - <mark>HDB</mark> - TCB - MBB 4 cổ phiếu Ngân hàng có nền giá tích lũy 4 năm nên có danh mục quý 4.",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 493,
  title: "Em đang tham khảo gửi tiết kiệm ngân hàng HD bank và LP bank, các bác tư vấn giúp em với ạ Bên...",
  source: "CleverTurtle3352",
  sourceType: "Facebook Group",
  date: "2026-10-12 20:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/289386212049989/posts/2038594000462526/",
  excerpt: "Em đang tham khảo gửi tiết kiệm ngân hàng <mark>HD bank</mark> và LP bank, các bác tư vấn giúp em với ạ Bên nào gửi ổn và lãi suất tốt hơn ạ? Em gửi có 50tr thuii ạ",
  engagement: {
   reactions: 28,
   shares: 0,
   comments: 33
  }
 },
 {
  id: 494,
  title: "Hành động với CỔ PHIẾU VPB, TCB, HDB - Nên Mua hay Bán I Nhận định thị trường I Chứng khoán hôm nay",
  source: "Quang CMT - Theo Dấu Dòng Tiền",
  sourceType: "YouTube",
  date: "2026-10-12 19:47",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.youtube.com/watch?v=8j7W9BOnjl4",
  excerpt: "VBank , Techcombank , <mark>HDBank</mark> stocks , and the banking group are about to see big moves tomorrow . That is the banking sector , with stocks like VBank , Techcombank , <mark>HDBank</mark> ; so what is special about these other bank stocks ?",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 30
  }
 },
 {
  id: 495,
  title: "VIKKI BANK – SÁNG RỰC MỘT NIỀM TIN 💙 ✨ Diện mạo mới – Năng lượng mới – Sẵn sàng phục vụ! 🏦...",
  source: "@snake_cat89",
  sourceType: "Threads",
  date: "2026-10-12 19:34",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@snake_cat89/post/DeZPrRMEskb",
  excerpt: "🌙 <mark>VIKKI BANK</mark> – SÁNG RỰC MỘT NIỀM TIN 💙 ✨ Diện mạo mới – Năng lượng mới – Sẵn sàng phục vụ! 🏦 <mark>Vikki Bank</mark> luôn nỗ lực mang đến những giải pháp tài chính tiện lợi, dịch vụ tận tâm và trải nghiệm tốt nhất cho Quý khách hàng. 💙 <mark>Vikki</mark> – Đồng hành cùng bạn, vững bước tương lai!...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 496,
  title: "CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13.10.2026 HDBank Hoà Bình trân trọng gửi lời chúc đến Quý...",
  source: "Đặng Hoàng Thuyết",
  sourceType: "Facebook",
  date: "2026-10-12 19:25",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/rf.thuyet/posts/pfbid02zCLhXHGstpBJQRAGDdH5DnNBu4u5wUaLS4utq92jtBcK9R52kJVApQZuAZNLcbsl",
  excerpt: "CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13.10.2026 <mark>HDBank</mark> Hoà Bình trân trọng gửi lời chúc đến Quý Doanh nhân Việt Nam – những người luôn dám nghĩ lớn, bền bỉ kiến tạo và không ngừng mở lối cho những cơ hội mới. Kính chúc Quý Doanh nhân luôn giữ vững khát vọng, mạnh mẽ bứt phá và ghi dấu những thành công xứng tầm. <mark>HDBank</mark> tự hào đồng hành trên hành trình vươn...",
  engagement: {
   reactions: 9,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 497,
  title: "Đảng ủy phường Lào Cai: Công bố Quyết định thành lập Chi bộ Ngân hàng HDBank và các quyết định...",
  source: "TỎA SÁNG BIÊN CƯƠNG",
  sourceType: "Facebook",
  date: "2026-10-12 19:04",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/laocaithanhphotrebiencuong/posts/pfbid0331PtyJnUE2erjzY8pMogKLVeYGceSriPWZBCK69KA9uQ5nNfG7nDYW92n4di7RSAl",
  excerpt: "Đảng ủy phường Lào Cai: Công bố Quyết định thành lập Chi bộ Ngân hàng <mark>HDBank</mark> và các quyết định sắp xếp, định danh các tổ chức Đảng [Phường Lào Cai] - Chiều ngày 12/10/2026, Đảng ủy phường Lào Cai tổ chức Hội nghị công bố Quyết định thành lập chi bộ Ngân hàng <mark>HDBank</mark> chi nhánh Lào Cai và các quyết định sắp xếp, định danh các tổ chức Đảng theo Quy định số...",
  engagement: {
   reactions: 73,
   shares: 8,
   comments: 12
  }
 },
 {
  id: 498,
  title: "Điểm danh các ngân hàng có kế hoạch phát hành cổ phiếu riêng lẻ: VPBank, HDBank, MB,...",
  source: "Nguyễn Khắc Vương",
  sourceType: "Facebook Group",
  date: "2026-10-12 18:16",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/139775338353225/posts/1411404517856961/",
  excerpt: "Điểm danh các ngân hàng có kế hoạch phát hành cổ phiếu riêng lẻ: VPBank, <mark>HDBank</mark>, MB, Vietcombank, BIDV, Techcombank CHI TIẾT👇",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 3
  }
 },
 {
  id: 499,
  title: "Chúc mừng HDBank Từ Liêm tròn 15 tuổi . Chúc Anh Chị em Từ Liêm luôn Thành công , Đoàn kết và...",
  source: "Mon Kute",
  sourceType: "Facebook",
  date: "2026-10-12 17:53",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/kute.thao.965/posts/pfbid0opbefFGvHTujvtzt8bwikw24yKmYU881oK3rh8Z1NKYUxwUR7395y7Ztbs2DWZc3l",
  excerpt: "Chúc mừng <mark>HDBank</mark> Từ Liêm tròn 15 tuổi . Chúc Anh Chị em Từ Liêm luôn Thành công , Đoàn kết và Rực rỡ ❤️❤️❤️.",
  engagement: {
   reactions: 54,
   shares: 0,
   comments: 8
  }
 },
 {
  id: 500,
  title: "TOP CỔ PHIẾU SỨC MẠNH GIÁ – 12/10/2026 VN-Index giảm 14,11 điểm (-0,81%) xuống 1.720,98 điểm,...",
  source: "Chứng Khoán Mirae Asset Việt Nam",
  sourceType: "Facebook",
  date: "2026-10-12 17:17",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/chungkhoanmiraeasset.vietnam/posts/pfbid038MfKX5zBj4tSkQfXadJcLvRUsx1mMhrrGkWpApnKHbNfzmp1RaUZU4pcaBFZ8qKql",
  excerpt: "...ếu nổi bật theo tiêu chí Sức mạnh giá phiên hôm nay: 🔸 CSV – Hóa chất 🔸 GMD – Kho bãi, hậu cần 🔸 <mark>HDB</mark> – Ngân hàng 🔸 PLC – Nhựa đường 🔸 VHC – Thủy sản (Top sức mạnh ngành) 🔸 FMC – Thủy sản (Top sức mạnh ngành) sucmanhgia csv gmd <mark>hdb</mark> plc vhc fmc",
  engagement: {
   reactions: 2,
   shares: 2,
   comments: 0
  }
 },
 {
  id: 501,
  title: "Happy Birthday Anh Lộc 🎉🎉🎉🎉 HDBank CN Bình Dương chúc Anh tuổi mới nhiều niềm vui, sức khỏe...",
  source: "HDBank Bình Dương",
  sourceType: "Facebook Fanpage",
  date: "2026-10-12 17:16",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/1392970992986185/",
  excerpt: "Happy Birthday Anh Lộc 🎉🎉🎉🎉 <mark>HDBank</mark> CN Bình Dương chúc Anh tuổi mới nhiều niềm vui, sức khỏe và hạnh phúc <mark>HDBank</mark> ILove<mark>HDBank</mark> <mark>HDBank</mark>BinhDuong BD",
  engagement: {
   reactions: 40,
   shares: 2,
   comments: 19
  }
 },
 {
  id: 502,
  title: "5 LÃNH ĐẠO NGÂN HÀNG ĐƯỢC VINH DANH TẠI CÚP THÁNH GIÓNG 2026 Lãnh đạo Vietcombank, BIDV, HDBank,...",
  source: "Chuyện Nhà Băng 2.0",
  sourceType: "Facebook",
  date: "2026-10-12 17:13",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/chuyencuabank/posts/pfbid02zzKec3i51gNcJYn9khRSnDmocoBz4BLqwphzAsqmWDRWPPrLfeSTt6ApSUg9AZtpl",
  excerpt: "5 LÃNH ĐẠO NGÂN HÀNG ĐƯỢC VINH DANH TẠI CÚP THÁNH GIÓNG 2026 Lãnh đạo Vietcombank, BIDV, <mark>HDBank</mark>, Nam A Bank và OCB có tên trong danh sách 100 doanh nhân được VCCI trao danh hiệu “Doanh nhân Việt Nam tiêu biểu – Cúp Thánh Gióng” năm 2026. Năm gương mặt đại diện các ngân hàng gồm: • Ông Nguyễn Thanh Tùng – Chủ tịch HĐQT Vietcombank. • Ông Lê Ngọc Lâm – Chủ...",
  engagement: {
   reactions: 96,
   shares: 9,
   comments: 3
  }
 },
 {
  id: 503,
  title: "ĐI ĐÂU CŨNG CÓ THỂ TẬN HƯỞNG Một chuyến đi. Một bữa tối. Một món quà dành cho người mình yêu...",
  source: "Minh Thảo",
  sourceType: "Facebook",
  date: "2026-10-12 17:05",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/minh.thao.16144/posts/pfbid0dFVXbUCARLRzTtsonvsk73Et2hpXFKpPfDJFjxFWtbuaZfe5Trfe24KNg7z6FCA6l",
  excerpt: "...rở nên thuận tiện hơn. ✨ Mua sắm ✈️ Du lịch 🍽️ Ẩm thực 🎁 Ưu đãi &amp; tích điểm 🔐 Thanh toán an toàn <mark>HDBank</mark> Visa &amp; JCB – đồng hành cùng bạn trong những trải nghiệm đáng nhớ. 👉 Nhắn tin cho <mark>HDBank</mark> Chi nhánh Quảng Ngãi để được tư vấn. <mark>HDBank</mark> CreditCard Visa JCB SongChatHon <mark>HDBank</mark>QuangNgai",
  engagement: {
   reactions: 25,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 504,
  title: "Dành riêng cho sinh viên, giáo viên, phụ huynh: https://credit4tomorrow.hdsaison.com.vn Cùng HD...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-12 16:24",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeY55NNnb4B",
  excerpt: "Dành riêng cho sinh viên, giáo viên, phụ huynh: https://credit4tomorrow.<mark>hdsaison</mark>.com.vn Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 505,
  title: "Ủa Vikki Bank lãi cao vậy mà sao ế dữ. Liên hệ em đi mà🥹 0384842474 ( em Khôi Vikki )",
  source: "@davidtietkiem",
  sourceType: "Threads",
  date: "2026-10-12 16:11",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@davidtietkiem/post/DeY4ZY1FJwl",
  excerpt: "Ủa <mark>Vikki Bank</mark> lãi cao vậy mà sao ế dữ. Liên hệ em đi mà🥹 0384842474 ( em Khôi <mark>Vikki</mark> )",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 506,
  title: "HDBANK NGHỆ AN – HỌC HỎI ĐỂ ĐỒNG HÀNH TỐT HƠN CÙNG KHÁCH HÀNG Ngày 11/10/2026 tại Hà Nội, đội...",
  source: "HDBank Nghệ An",
  sourceType: "Facebook Fanpage",
  date: "2026-10-12 15:59",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbanknghean/posts/pfbid02igLvkYCFUYNrHzDzjxaZeLt8gxn1iVvfmSkS9qX1ptAXULgrvgaVfzsBQV4ZBtvjl",
  excerpt: "<mark>HDBANK</mark> NGHỆ AN – HỌC HỎI ĐỂ ĐỒNG HÀNH TỐT HƠN CÙNG KHÁCH HÀNG Ngày 11/10/2026 tại Hà Nội, đội ngũ <mark>HDBank</mark> Nghệ An tham gia Workshop dành cho cấp lãnh đạo <mark>HDBank</mark> với chủ đề “Kỹ năng bán và quản lý thúc đẩy Bancassurance”. Chương trình là dịp để nâng cao kỹ năng tư vấn, chia sẻ kinh nghiệm và phát triển năng lực quản lý đội ngũ, hướng đến việc thấu hiểu nhu...",
  engagement: {
   reactions: 29,
   shares: 2,
   comments: 0
  }
 },
 {
  id: 507,
  title: "Tối 5/10, tại Nhà hát Hồ Gươm, Bộ Công an phối hợp với Trung ương Hội Liên hiệp Phụ nữ Việt Nam...",
  source: "Tam Kiss",
  sourceType: "Facebook",
  date: "2026-10-12 15:51",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/tam.kiss.5/posts/pfbid0TBDdbCMueHK2PENsKG3zr1NhQEEGDG2BGgs1cvksg19Wc8VeneECm7PBDk6kuyK9l",
  excerpt: "...trị và hy vọng cho những gia đình đang đối diện với bệnh tật. Anh hùng Lao động, Tiến sĩ <mark>Nguyễn Thị Phương Thảo</mark> tham dự chương trình. Đồng hành cùng \"Kết nối yêu thương\", Công ty Cổ phần Hàng không Vietjet, Công ty Cổ phần Tập đoàn Sovico và <mark>Ngân hàng TMCP Phát triển TP.HCM</mark> (<mark>HDBank</mark>) đóng góp tổng cộng 30 tỷ đồng, góp thêm nguồn lực hỗ trợ điều trị,...",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 508,
  title: "CHỦ TỊCH HDBANK KIM BYOUNGHO VÀO TOP 10 DOANH NHÂN VIỆT NAM TIÊU BIỂU 2026 Tối 12/10, ông Kim...",
  source: "Có Gì News",
  sourceType: "Facebook",
  date: "2026-10-12 15:44",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/coginews/posts/pfbid0W2tbJeJ1yoimNYrbPvB2jv5CXALwsxocBKPkPhHD2bh1MTg4zCqrSnuzJqFBBqipl",
  excerpt: "🏆 CHỦ TỊCH <mark>HDBANK</mark> KIM BYOUNGHO VÀO TOP 10 DOANH NHÂN VIỆT NAM TIÊU BIỂU 2026 Tối 12/10, ông Kim Byoungho – Chủ tịch HĐQT <mark>HDBank</mark> – được vinh danh trong Top 10 Doanh nhân Việt Nam tiêu biểu 2026, đồng thời nhận Cúp Thánh Gióng do VCCI tổ chức xét chọn. Ông có gần 40 năm kinh nghiệm trong lĩnh vực tài chính – ngân hàng tại nhiều thị trường quốc tế, đảm...",
  engagement: {
   reactions: 288,
   shares: 41,
   comments: 0
  }
 },
 {
  id: 509,
  title: "Đà Nẵng Lên kệ em: 𝐈𝐩𝐚𝐝 𝐏𝐫𝐨 𝟏𝟏𝐢𝐧𝐜𝐡 𝐂𝐡𝐢𝐩 𝐌𝟏-𝟏𝟐𝟖𝐆𝐁 𝐋𝐢𝐤𝐞𝐍𝐞𝐰 - Pin:...",
  source: "@tamle.1512",
  sourceType: "Threads",
  date: "2026-10-12 15:25",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tamle.1512/post/DeYzJUkj29z",
  excerpt: "Đà Nẵng Lên kệ em: 𝐈𝐩𝐚𝐝 𝐏𝐫𝐨 𝟏𝟏𝐢𝐧𝐜𝐡 𝐂𝐡𝐢𝐩 𝐌𝟏-𝟏𝟐𝟖𝐆𝐁 𝐋𝐢𝐤𝐞𝐍𝐞𝐰 - Pin: 8x% - Màu: Silver - Nguyên Zin 100%, k MDM, bypass 💰Giá: 14.990.000đ ❗️Nhận thu_cũ đổi_mới lên đời zá tốt. 👩‍💻 • Hỗ Trợ Góp tại <mark>HDsaison</mark>, Mira - Thẻ tín dụng 📱 𝐇𝐚̀𝐧𝐠 𝐒𝐚̆̉𝐧 𝐆𝐢𝐚𝐨 𝐍𝐠𝐚𝐲 ! 💯 ———— ©️ ———— 🏠 Tín Phát Apple - 78 Lê Đình Lý 📞...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 510,
  title: "Mỗi ngày tôi chọn một niềm vui, chọn tới chọn lui lại hết một ngày! Chia sẻ thông tin về dự án...",
  source: "@hau.halengoc",
  sourceType: "Threads",
  date: "2026-10-12 14:47",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hau.halengoc/post/DeYu0Lnkq_x",
  excerpt: "Mỗi ngày tôi chọn một niềm vui, chọn tới chọn lui lại hết một ngày! Chia sẻ thông tin về dự án Celesta Gold và tham quan dự án Essensia Sky tới các Anh chị đối tác VDP, Kiên Nam Land, <mark>Vikki</mark>, <mark>HDBank</mark>,… Anh Chị Em đối tác có nhu cầu liên kết phân phối dự án căn hộ mặt tiền đường Nguyễn Hữu Thọ, được phát triển bởi 3 thương hiệu uy tín là Phú Long - Keppel...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 511,
  title: "HDBank trân trọng gửi lời chúc đến Quý Doanh Nhân Việt Nam - Những người luôn dám nghĩ lớn, bền...",
  source: "Ome Ly",
  sourceType: "Facebook",
  date: "2026-10-12 14:38",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/uyen.ly.148/posts/pfbid02kijBiEKwpxyJGfPqXsyecjtzrV3QmHht7yqzKw9CDL3rm5kWE5MEUf2j13L9B56pl",
  excerpt: "<mark>HDBank</mark> trân trọng gửi lời chúc đến Quý Doanh Nhân Việt Nam - Những người luôn dám nghĩ lớn, bền bỉ kiến tạo và không ngừng mở lối cho những cơ hội mới. Kính chúc Quý Doanh Nhân luôn giữ vững khát vọng, mạnh mẽ bứt phá và ghi dấu những thành công xứng tầm. <mark>HDBank</mark> tự hào đồng hành trên hành trình vươn xa và kiến tạo giá trị bền vững.",
  engagement: {
   reactions: 59,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 512,
  title: "VAY MUA CĂN HỘ BCONS NEWSKY – GIẢI PHÁP TÀI CHÍNH LINH HOẠT Sở hữu căn hộ dễ dàng cùng HDBank...",
  source: "Mạch Quốc Phú",
  sourceType: "Facebook Group",
  date: "2026-10-12 14:19",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/1244028053917693/posts/1415628356757661/",
  excerpt: "🏡 VAY MUA CĂN HỘ BCONS NEWSKY – GIẢI PHÁP TÀI CHÍNH LINH HOẠT Sở hữu căn hộ dễ dàng cùng <mark>HDBank</mark> Vạn Hạnh với chính sách vay hấp dẫn: ✅ Khách hàng được CĐT hỗ trợ lãi vay ✅ Vay đến 70% giá trị HĐMB (hoặc 100% khi bổ sung tài sản bảo đảm). ✅ Thời hạn vay lên đến 35 năm. ✅ Ân hạn gốc tối đa 60 tháng. ✅ Hồ sơ đơn giản – Thẩm định nhanh – Giải ngân đúng tiến...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 513,
  title: "Từ gần bốn thập kỷ kinh nghiệm trên nhiều thị trường tài chính quốc tế đến vai trò Chủ tịch Hội...",
  source: "CafeF",
  sourceType: "Facebook Fanpage",
  date: "2026-10-12 14:16",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/CafeF/posts/pfbid0NpizYdQyFaunuFBfTNxis6i2MZy7swVpy5ZrbadsGcSj3QnF9GCiTaTTwsMarY5ol",
  excerpt: "Từ gần bốn thập kỷ kinh nghiệm trên nhiều thị trường tài chính quốc tế đến vai trò Chủ tịch Hội đồng Quản trị <mark>HDBank</mark>, ông Kim Byoungho ghi dấu ấn ở khả năng kết nối các chuẩn mực quản trị toàn cầu với thực tiễn Việt Nam, trong một giai đoạn <mark>HDBank</mark> tăng tốc về quy mô, hiệu quả và hội nhập.",
  engagement: {
   reactions: 872,
   shares: 17,
   comments: 19
  }
 },
 {
  id: 514,
  title: "Trời mưa Đà Nẵng ☔️ Người ta sợ ướt tóc, còn em sợ tiền nằm im không chịu làm việc 😭💸 Thôi thì...",
  source: "@gnart_yuht_242",
  sourceType: "Threads",
  date: "2026-10-12 13:55",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@gnart_yuht_242/post/DeYo4Q5Gkhc",
  excerpt: "Trời mưa Đà Nẵng ☔️ Người ta sợ ướt tóc, còn em sợ tiền nằm im không chịu làm việc 😭💸 Thôi thì mình ở nhà, để tiền đi làm cùng <mark>Vikki Bank</mark> vậy 🤣 Anh chị nào thích gửi online nhưng vẫn muốn có sổ cầm tay cho an tâm thì đừng lo nha, em Trang hỗ trợ tận tình từ online đến tại quầy luôn ạ 💙 Mọi người thuộc team nào: 📱 online cho tiện hay 📖 phải có sổ...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 515,
  title: "Chủ tịch HDBank Kim Byoungho nhận cúp Thánh Gióng 2026, ghi dấu trong Top 10 Doanh nhân Việt Nam...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-12 13:44",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid0Q5nZeDLCLBUJ3N9CJ8s9egfwU3QZvigc2qCMf4hsWkpERJUCSaMJ6RV6Abvu41asl",
  excerpt: "Chủ tịch <mark>HDBank</mark> Kim Byoungho nhận cúp Thánh Gióng 2026, ghi dấu trong Top 10 Doanh nhân Việt Nam tiêu biểu",
  engagement: {
   reactions: 3500,
   shares: 1985,
   comments: 2830
  }
 },
 {
  id: 516,
  title: "MBB VỀ 12 THÌ TCB VỀ BAO NHIÊU MỚI TẠO ĐÁY ? ----------------- Phần đa các cổ phiếu nhóm Ngân...",
  source: "MSC Capital",
  sourceType: "Facebook Group",
  date: "2026-10-12 13:16",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/349319918820142/posts/2684986008586843/",
  excerpt: "MBB VỀ 12 THÌ TCB VỀ BAO NHIÊU MỚI TẠO ĐÁY ? ----------------- Phần đa các cổ phiếu nhóm Ngân Hàng đều đã bước vào downtrend dài hạn. Lần lượt các cổ phiếu như MBB, TCB, CTG, <mark>HDB</mark>,... đều đã tạo ra cả một vùng phân phối đỉnh và sẽ giảm rất mạnh. Với TCB, cổ phiếu có cơ bản tốt nhưng không đồng nghĩa với việc sẽ tăng mãi mãi. Chúng tôi cho rằng cổ phiếu...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 517,
  title: "Hdsaison Tnex ạ.",
  source: "@wolf.8026292",
  sourceType: "Threads",
  date: "2026-10-12 13:09",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@wolf.8026292/post/DeYjonsEy6r",
  excerpt: "<mark>Hdsaison</mark> Tnex ạ.",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 518,
  title: "Với tinh thần nhiệt huyết, đoàn kết và quyết tâm, tập thể cán bộ nhân viên Vikkibank Thái Nguyên...",
  source: "@duy.tute",
  sourceType: "Threads",
  date: "2026-10-12 12:33",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@duy.tute/post/DeYfdwODFnS",
  excerpt: "Với tinh thần nhiệt huyết, đoàn kết và quyết tâm, tập thể cán bộ nhân viên <mark>Vikkibank</mark> Thái Nguyên luôn sẵn sàng ra quân, mang hình ảnh và thương hiệu ngân hàng đến gần hơn với khách hàng. Mỗi nụ cười, mỗi bước chân đều thể hiện sự tận tâm, chuyên nghiệp và khát vọng chinh phục những mục tiêu mới. Cùng nhau lan tỏa năng lượng tích cực, nâng cao chất lượng...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 519,
  title: "3 Cổ phiếu Bank đáng mua nhất vẫn là VPB HDB TCB Link video từ ngày 23.08.2026 mình để bên dưới...",
  source: "Chứng Khoán Mỗi Ngày - Red Investment",
  sourceType: "Facebook Group",
  date: "2026-10-12 12:25",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/groupchungkhoanviet/posts/1746357509979923/",
  excerpt: "3 Cổ phiếu Bank đáng mua nhất vẫn là VPB <mark>HDB</mark> TCB Link video từ ngày 23.08.2026 mình để bên dưới phần comment nhé VNINDEX VPB TCB <mark>HDB</mark>",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 520,
  title: "English below] 🏓 Chúc mừng Ngày Doanh nhân Việt Nam 13/10! Ngày 10/10 vừa qua, CEO YUKI TRUONG...",
  source: "AVI Logistics Corporation",
  sourceType: "Facebook",
  date: "2026-10-12 12:14",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/avilogistics/posts/pfbid0XDUThvGUzZXbLwMh56PZwUFn8Lvz99C3wQ8jpo76xejsiB7W7j4g4ebw6E9MdimLl",
  excerpt: "...ion 📍 Trụ sở: Số 14 ngõ 106 Hoàng Quốc Việt, Phường Nghĩa Đô, Hà Nội 📍 VP TP.HCM: Tầng 8, Tòa nhà <mark>HDBank</mark>, số 179 Nguyễn Cư Trinh, Phường Cầu Ông Lãnh, TP. Hồ Chí Minh ☎️ 0854 511 234 🌐 avi-corp.com.vn",
  engagement: {
   reactions: 1,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 521,
  title: "VPB sau phiên test ngày 5/10 thì đã bứt nền vào pha tăng giá ngắn hạn, Trong giai đoạn hiện tại,...",
  source: "Minh Hoàn Vsa",
  sourceType: "Facebook Group",
  date: "2026-10-12 12:01",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/1644213615912994/posts/2943056209362055/",
  excerpt: "VPB sau phiên test ngày 5/10 thì đã bứt nền vào pha tăng giá ngắn hạn, Trong giai đoạn hiện tại, cùng với MSB và <mark>HDB</mark> đang là 3 cổ phiếu bank có dòng tiền vào tốt nhất của nhóm bank thời điểm hiện tại. Đây cũng là cp mình liên tục chia sẻ cho ACE trong 1 tháng trở lại đây, và cũng cho KH mua vào nhiều lần từ tháng 8 tới nay. Theo ACE Nhịp này VPB có thể...",
  engagement: {
   reactions: 10,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 522,
  title: "SÓNG BANK CUỐI NĂM – VPB, HDB ĐANG DẪN SÓNG?!! Nếu phải tìm những cái tên đáng chú ý trong cuộc...",
  source: "VH Tam",
  sourceType: "Facebook Group",
  date: "2026-10-12 11:27",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/dautuck247/posts/2324338128382972/",
  excerpt: "🏦 SÓNG BANK CUỐI NĂM – VPB, <mark>HDB</mark> ĐANG DẪN SÓNG?!! Nếu phải tìm những cái tên đáng chú ý trong cuộc đua tăng trưởng của nhóm ngân hàng, VPB và <mark>HDB</mark> đang có hai câu chuyện riêng đủ sức thu hút dòng tiền. 🔥 VPB – Động lực tăng trưởng lợi nhuận • Lợi nhuận trước thuế 6T2026 đạt gần 18.900 tỷ đồng, tăng 68% so với cùng kỳ. • Tín dụng mở rộng mạnh, hệ sinh...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 523,
  title: "CHẠM NHỊP SỐ - CHỐT QUÀ ĐỈNH MÙA 2: Phiên 7 - Tích lũy trúng vàng, săn quà tặng Nàng 10.10 –...",
  source: "Trần Quang Vinh",
  sourceType: "Facebook",
  date: "2026-10-12 11:03",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/tran.quang.vinh.109854/posts/pfbid07dcn5WDHAZhyGpDoXLzzgBszj9pDmAVQY3QUcXXhT1YB5ndo32gT5i8tHMEkcsAsl",
  excerpt: "... chỉ vàng SJC và nhiều bộ quà tặng thiết thực: Túi cói, ly, cốc giữ nhiệt. 👉 Các Đơn vị kinh doanh <mark>HDBank</mark> trên toàn quốc sẽ cùng lên sóng livestream, trực tiếp tư vấn chi tiết đến Quý khách để nhận ưu đãi. 🛍️ CHẠM VNSHOP, GIẢM NỬA GIÁ + Tung bất ngờ mã giảm đến 200.000 đồng, số lượng giới hạn. 👉 Nhiều sản phẩm chính hãng có giá độc quyền, phù hợp...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 524,
  title: "HDB đang chạy, ROE hơn 25% mà P/B vẫn chưa tới 1,4x, liệu có hấp dẫn? Tín dụng 6 tháng đầu năm...",
  source: "@quang.w.tm",
  sourceType: "Threads",
  date: "2026-10-12 10:55",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@quang.w.tm/post/DeYUU2jGbS1",
  excerpt: "<mark>HDB</mark> đang chạy, ROE hơn 25% mà P/B vẫn chưa tới 1,4x, liệu có hấp dẫn? Tín dụng 6 tháng đầu năm tăng khoảng 20%, gấp gần 3 lần mức chung của cả hệ thống. Hạn mức năm nay còn rộng tới 35%, nên dư địa chạy tiếp vẫn nhiều. Thu nhập ngoài lãi cũng đang lên rõ nhờ hệ sinh thái. HD Securities lãi trước thuế 6 tháng tăng hơn 300%, <mark>HD Saison</mark> vẫn giữ nhịp ổn. Kế...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 3
  }
 },
 {
  id: 525,
  title: "CẦN VỐN? HDBANK HỐ NAI SẴN SÀNG ĐỒNG HÀNH! 🌟 Lãi suất từ 𝟎,𝟖%/𝐭𝐡á𝐧𝐠, cố định 06 tháng. 🌟...",
  source: "Lê Sỹ",
  sourceType: "Facebook",
  date: "2026-10-12 10:38",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/lesy.vu.1806/posts/pfbid02iQcodMWhnod1AFL4RD8W3AQjB56VTMTXa4hscYjNcCrFsiXoy5kd4tUsLuHRiGgel",
  excerpt: "💰🌾 CẦN VỐN? <mark>HDBANK</mark> HỐ NAI SẴN SÀNG ĐỒNG HÀNH! 🌟 Lãi suất từ 𝟎,𝟖%/𝐭𝐡á𝐧𝐠, cố định 06 tháng. 🌟 Vay SXKD, vay nông nghiệp, vay mua nhà, vay tiêu dùng. 🌟 Miễn trả gốc đến 4 năm. 🌟 Thủ tục tinh gọn , tài sản đảm bảo đa dạng. 🏦 <mark>HDBank</mark> Hố Nai 📲:0988 331 520 (Mr. Sỹ)",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 526,
  title: "Chứng khoán ngày 12/10: VN-Index mất hơn 14 điểm, áp lực bán gia tăng tại nhóm bất động sản",
  source: "Báo Nhân Dân",
  sourceType: "Báo chí",
  date: "2026-10-12 09:58",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://nhandan.vn/chung-khoan-ngay-1210-vn-index-mat-hon-14-diem-ap-luc-ban-gia-tang-tai-nhom-bat-dong-san-post994678.html",
  excerpt: "Phiên này, các mã đóng góp tích cực cho chỉ số VN-Index tăng 4,48 điểm gồm: HPG, VPB, SHB, TCB, ACB, VNM, HVN, <mark>HDB</mark>, MBB, CTG. Nhóm cổ phiếu chứng khoán phiên này nghiêng về sắc xanh có mức tăng 0,22%, chủ yếu từ các mã TCX, VCK, SSI, VPX, HCM, VIX, ORS, ABW, DSC, VUA, VDS, AGR… Chiều ngược lại, các mã giảm gồm VCI, VND, MBS, DSE, FTS, BSI, CTS, TVS, BMS,..."
 },
 {
  id: 527,
  title: "Gập hai nguồn tiền - Chạm trọn tiện ích 😎 Điện thoại gập đôi đã xịn, thẻ “gập” hai nguồn tiền...",
  source: "Ngân hàng Số Vikki",
  sourceType: "Facebook Fanpage",
  date: "2026-10-12 09:58",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/Vikki.NganhangSo/posts/pfbid0MJozpiVVkaiJVZSKXVxrDL1xQcZrPTXG6snfnu2DdpVqZeyMg7TB9GENzPweTWKwl",
  excerpt: "✨ Gập hai nguồn tiền - Chạm trọn tiện ích 😎 Điện thoại gập đôi đã xịn, thẻ “gập” hai nguồn tiền cũng tiện hết ý. Với Thẻ Kép <mark>Vikki</mark>GO+, nguồn tiền thanh toán và tín dụng được “gập” gọn trong một chiếc thẻ, cho tiện ích “gấp đôi”, chi tiêu thêm linh hoạt. 💜 Tiền sẵn trong tài khoản <mark>Vikki</mark>ME, chạm thẻ thanh toán gọn gàng. 💳 Hạn mức hấp dẫn, chủ động chi...",
  engagement: {
   reactions: 1281,
   shares: 830,
   comments: 1004
  }
 },
 {
  id: 528,
  title: "GỬI TIẾT KIỆM HDBANK – SINH LỜI AN TOÀN, LÃI SUẤT HẤP DẪN 💰 ✨ Lãi suất ưu đãi theo từng kỳ...",
  source: "Minh Hiếu",
  sourceType: "Facebook Group",
  date: "2026-10-12 09:55",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/145857745186368/posts/1033464376425696/",
  excerpt: "💰 GỬI TIẾT KIỆM <mark>HDBANK</mark> – SINH LỜI AN TOÀN, LÃI SUẤT HẤP DẪN 💰 ✨ Lãi suất ưu đãi theo từng kỳ hạn:� 🌸 1–5 tháng: từ 4,5%/năm� 🌸 6 tháng: từ 8,8%-9,x%/năm� 🌸 12 tháng: từ 8,7%-9,x%/năm� 🌸 13 tháng: từ 8,7%-9,x%/năm ✅ An toàn – Uy tín – Thủ tục nhanh chóng.� ✅ Được tư vấn giải pháp tiết kiệm phù hợp với nhu cầu của từng khách hàng.� ✅ Hỗ trợ mở sổ và...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 529,
  title: "Vốn vững vàng - Mở rộng tương lai cùng bà con Hải Hậu! ​HDBank PGD Hải Hậu hỗ trợ cho vay vốn...",
  source: "Nguyễn Huy Hoàng",
  sourceType: "Facebook",
  date: "2026-10-12 09:48",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nguyen.huy.hoang.818519/posts/pfbid0QxMHt3mrAXdMUQR3GPvKojuZAVA1quAXPpmJFvd9BNeqgMijmLoM7nDVS3AJuHDCl",
  excerpt: "🚢 Vốn vững vàng - Mở rộng tương lai cùng bà con Hải Hậu! ​<mark>HDBank</mark> PGD Hải Hậu hỗ trợ cho vay vốn sản xuất &amp; kinh doanh với lãi suất ưu đãi chỉ từ 9.5%/năm: 🔹 Vay mua sắm/nâng cấp tàu thuyền, ngư lưới cụ 🔹 Đầu tư máy móc, thiết bị sản xuất 🔹 Bổ sung vốn lưu động kinh doanh 🔹 Thủ tục đơn giản - Giải ngân siêu nhanh ​📲 Gọi ngay Em Hoàng: 0364.769.118...",
  engagement: {
   reactions: 10,
   shares: 3,
   comments: 7
  }
 },
 {
  id: 530,
  title: "Quá giỏi luôn em ơi. Cho chị ké nha hihi Từ 50tr-500tr gửi 6th lãi suất 8,8% Ngân Hàng HDBank...",
  source: "@t.bonnn11",
  sourceType: "Threads",
  date: "2026-10-12 09:33",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@t.bonnn11/post/DeYK4osmUW3",
  excerpt: "Quá giỏi luôn em ơi. Cho chị ké nha hihi Từ 50tr-500tr gửi 6th lãi suất 8,8% Ngân Hàng <mark>HDBank</mark> 0988.984.256",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 531,
  title: "MUỐN MUA NHÀ NHƯNG CHƯA ĐỦ TÀI CHÍNH? Đừng vội bỏ lỡ căn nhà mình yêu thích chỉ vì chưa chuẩn bị...",
  source: "Quỳnh Sala",
  sourceType: "Facebook",
  date: "2026-10-12 09:29",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/muanhathuduc/posts/pfbid025hEs8yL8HHumcEBjcfttbXnAt2vsdcxefhbWVcbUNbNbvFvK4yyedJnHK6Vxaxizl",
  excerpt: "🏡 MUỐN MUA NHÀ NHƯNG CHƯA ĐỦ TÀI CHÍNH? Đừng vội bỏ lỡ căn nhà mình yêu thích chỉ vì chưa chuẩn bị đủ dòng tiền! <mark>HDBank</mark> có giải pháp vay mua bất động sản với các lựa chọn: ✅ Thời hạn vay có thể đến 50 năm. ✅ Có phương án ân hạn nợ gốc theo điều kiện sản phẩm. ✅ Lãi suất ưu đãi tham khảo từ 9,8%/năm, cố định 12 tháng. Em hỗ trợ Anh/Chị tính khả năng vay,...",
  engagement: {
   reactions: 2,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 532,
  title: "Trả góp phụ tùng - Ô tô, xe đạp và xe đạp điện– Đăng ký liền tay tại các điểm giới thiệu dịch vụ...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-12 09:21",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeYJenmj3Az",
  excerpt: "🛞Trả góp phụ tùng - Ô tô, xe đạp và xe đạp điện– Đăng ký liền tay tại các điểm giới thiệu dịch vụ mà <mark>HD SAISON</mark> liên kết tại: https://www.<mark>hdsaison</mark>.com.vn/vn/dai-ly.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲Tải app <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/app-download.html 🚩Hoặc liên hệ với nhân viên <mark>HD SAISON</mark> để được hỗ trợ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 533,
  title: "Muốn biết chiếc xe đã theo mình bao lâu, cứ ngó mấy món phụ tùng là rõ. Có món đã thay đôi ba...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-12 09:21",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeYJemij-Mo",
  excerpt: "...từng năm, mỗi món phụ tùng cũng có một “tuổi đời” riêng. Khi tới lúc cần thay mới, gói vay Phụ tùng <mark>HD SAISON</mark> giúp mình có thêm lựa chọn để lo cho những món cần thiết, để chiếc xe vẫn bon bon theo mình mỗi ngày.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 534,
  title: "HDbank có sang ngang thẻ tín dụng online không mn ơi, cảm ơn ạ",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-12 09:18",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1418593237092135/",
  excerpt: "<mark>HDbank</mark> có sang ngang thẻ tín dụng online không mn ơi, cảm ơn ạ",
  engagement: {
   reactions: 6,
   shares: 0,
   comments: 6
  }
 },
 {
  id: 535,
  title: "WATCHLIST THEO DÕI TUẦN 12–16/10/2026: Danh sách cổ phiếu đáng chú ý, ưu tiên mã có nền giá tốt,...",
  source: "Cổ Phiếu Trước Sóng",
  sourceType: "Facebook Group",
  date: "2026-10-12 09:07",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/572719147307925/posts/1587060789207084/",
  excerpt: "WATCHLIST THEO DÕI TUẦN 12–16/10/2026: Danh sách cổ phiếu đáng chú ý, ưu tiên mã có nền giá tốt, dòng tiền cải thiện và câu chuyện hỗ trợ. Theo dõi phản ứng giá, ko mua đuổi. BANK: VPB, TCB, <mark>HDB</mark>, MBB, CTG, LPB VPB, TCB, <mark>HDB</mark> có diễn biến giá tích cực phiên cuối tuần. Theo dõi khả năng giữ nền, thanh khoản và dòng tiền ngoại. BÁN LẺ – TIÊU DÙNG: MWG, MSN,...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 536,
  title: "NHẬN ĐỊNH THỊ TRƯỜNG TUẦN 12-16/10/2026: DÒNG TIỀN LỚN ĐANG NHẬP CUỘC - CƠ HỘI CHO NHÀ ĐẦU TƯ...",
  source: "Hệ thống đầu tư Atagetz",
  sourceType: "Facebook Group",
  date: "2026-10-12 08:31",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/congdongdaututhinhvuongatagetz/posts/28913652111592346/",
  excerpt: "... sự phân hóa rõ nét, các cổ phiếu đang vượt đỉnh, xu hướng vượt đỉnh sẽ tiếp tục tăng mạnh như VPB, <mark>HDB</mark>, TCB, các cổ phiếu đang ở vùng hỗ trợ mạnh sẽ phục hồi trở lại như VCB, BID, CTG, MBB, ACB… Các cổ phiếu dòng Bán lẻ, dệt may, thủy sản, cảng biển, cao su… đang vào sóng tăng, hệ thống đánh giá còn tăng tiếp, anh chị nắm giữ kiên nhẫn nhưng để mua...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 537,
  title: "Cổ phiếu trụ ép VN-Index về mốc 1720 điểm, dòng tiền đứng ngoài",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-12 08:23",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/co-phieu-tru-ep-vn-index-ve-moc-1720-diem-dong-tien-dung-ngoai.htm",
  excerpt: "Phía mua ròng duy nhất HPG +129,2 tỷ và <mark>HDB</mark> +31 tỷ là đáng kể."
 },
 {
  id: 538,
  title: "Dự kiến BCTC Quý 3/2026, tăng trưởng lợi nhuận ngành ngân hàng vẫn tích cực, động lực chính đến...",
  source: "Chiến Chứng",
  sourceType: "Facebook Group",
  date: "2026-10-12 08:16",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/congdongchungkhoanuptrend/posts/4625940167686042/",
  excerpt: "...ự án hạ tầng trọng điểm được hưởng lợi từ chính sách hỗ trợ thanh khoản mới. Về lợi nhuận đột biến, <mark>HDBank</mark> dự kiến dẫn đầu với mức tăng trưởng lợi nhuận sau thuế 45,5%, MBB theo sau với mức tăng 35,8%, BIDV và TPBank đều dự kiến tăng trên 23%. VietinBank, VPBank, Vietcombank cũng duy trì tăng trưởng hai chữ số ổn định. Ở chiều ngược lại, Sacombank là...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 539,
  title: "AI MUỐN XÂY KÊNH NHƯNG CHƯA BIẾT BẮT ĐẦU TỪ ĐÂU? LƯU NGAY BÀI NÀY NHA! ✨ Mới xây kênh đã mong...",
  source: "Nguyet Bui",
  sourceType: "Facebook",
  date: "2026-10-12 05:59",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nguyet.bui.122107412318536049/posts/pfbid02TATESZBKi8nfDJ99mtDyiGaoWDenGirKsfKihjg65wnHkfSkmXbFx1bcoZb26Et1l",
  excerpt: "...chcombank: VTCBVNVX • ACB: ASCBVNVX • Sacombank: SGTTVNVX • Agribank: VBAAVNVX • VPBank: VPBKVNVX • <mark>HDBank</mark>: HDBCVNVX • Eximbank: EBVIVNVX 📌 Mọi người nên kiểm tra lại mã SWIFT trực tiếp với ngân hàng trước khi hoàn tất để tránh sai sót khi nhận tiền. ✅ BƯỚC 5: HOÀN THÀNH THÔNG TIN THUẾ – ĐỪNG BỎ QUA! 📝 Đây là phần khá nhiều người thấy khó khi mới...",
  engagement: {
   reactions: 52,
   shares: 2,
   comments: 55
  }
 },
 {
  id: 540,
  title: "Lãi suất ngân hàng hôm nay 12/10/2026: Kỳ hạn dài có biến động mới",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-12 02:47",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-12-10-2026-ky-han-dai-co-bien-dong-moi-2563891.html",
  excerpt: "Lãi suất ngân hàng hôm nay 12/10/2026, ngân hàng cập nhật lãi suất huy động kỳ hạn 15-18 tháng với mức tăng 0,7-0,8 điểm phần trăm so với biểu lãi suất trước đó."
 },
 {
  id: 541,
  title: "HDBANK THÔNG BÁO ƯU ĐÃI VAY MUA NHÀ Ở XÃ HỘI Nhằm hỗ trợ người trẻ an cư lạc nghiệp, HDBank...",
  source: "Linh Đỗ",
  sourceType: "Facebook Group",
  date: "2026-10-11 23:17",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/goldenpointhaiphong/posts/2055409108501092/",
  excerpt: "<mark>HDBANK</mark> THÔNG BÁO ƯU ĐÃI VAY MUA NHÀ Ở XÃ HỘI Nhằm hỗ trợ người trẻ an cư lạc nghiệp, <mark>HDBank</mark> triển khai chương trình ưu đãi lãi suất vay mua nhà ở xã hội với nhiều lợi ích thiết thực: Lãi suất thấp, ổn định, phù hợp khả năng chi trả Thời hạn vay linh hoạt, giúp giảm áp lực tài chính Thủ tục đơn giản, nhanh chóng Áp dụng cho nhiều đối tượng: người thu nhập...",
  engagement: {
   reactions: 2,
   shares: 1,
   comments: 6
  }
 },
 {
  id: 542,
  title: "Đề nghị năm sau BTC có thêm giải “Tắm Sớm” để cho những VĐV như em đc an ủi phần nào 😌 Dù sao...",
  source: "Kiều Trang",
  sourceType: "Facebook",
  date: "2026-10-11 23:15",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/trang.di.14/posts/pfbid0LLTXruQgsm43iYhs65fhUkRjAvpzyn7KLUmAmRiQW4KgPp5SCPS8sSmxqoMU99XRl",
  excerpt: "...ng đã cố gắng hết sức Các đồng đội của tui rất tuyệt vời rùiiiii 🫶🏻❤️ pickleballnganhnganhang2026 <mark>HDBank</mark>",
  engagement: {
   reactions: 39,
   shares: 0,
   comments: 6
  }
 },
 {
  id: 543,
  title: "ACE CẦN DÒNG PRO GIÁ TẦM TRUNG – E CÓ SẴN NHA 🔥 📱 14 PRO GOLD 128GB 🇻🇳 ✨ Ngoại hình đẹp 99%...",
  source: "@tieu_nhu68",
  sourceType: "Threads",
  date: "2026-10-11 23:04",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tieu_nhu68/post/DeXC3dckxa2",
  excerpt: "...HOẢI MÁI 💛 Màu Gold sang trọng, dòng Pro hiệu năng ngon, giá mềm dễ lên đời. 💳 Hỗ trợ trả góp qua <mark>HDBank</mark> – Mirae – THẺ TÍN DỤNG 🎓 Ưu tiên sinh viên có thẻ, hỗ trợ duyệt không thẩm định theo điều kiện áp dụng.",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 544,
  title: "Đi đánh pickleball cho vui, ai ngờ vui quá thành nhà vô địch 🏆🤣🥇 Cảm ơn BLĐ HDBank Hà Tĩnh đã...",
  source: "Ngọc Lê",
  sourceType: "Facebook",
  date: "2026-10-11 21:31",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/ngoc.chibii/posts/pfbid02hNSfhgetG7jybvcg8cXkVv9JwdrNhueojAGgYEJTfJDqHPbmp8P71MkMJmX2GJ1Rl",
  excerpt: "Đi đánh pickleball cho vui, ai ngờ vui quá thành nhà vô địch 🏆🤣🥇 Cảm ơn BLĐ <mark>HDBank</mark> Hà Tĩnh đã tổ chức một giải đấu thật ý nghĩa, cảm ơn ban tổ chức và tất cả mọi người đã tạo nên một ngày thi đấu đầy niềm vui và đáng nhớ. Đặc biệt, cảm ơn partner a Triendd vì đã cùng nhau hết mình trên sân. 😁 Một chiếc cúp, thật nhiều niềm vui và những kỷ niệm đẹp! 🏆✨",
  engagement: {
   reactions: 101,
   shares: 0,
   comments: 54
  }
 },
 {
  id: 545,
  title: "LÃI SUẤT VAY MUA NHÀ THÁNG 10/2026 Đừng chỉ nhìn lãi suất ưu đãi! Một số mức lãi suất tham khảo:...",
  source: "Lê Thành Phát",
  sourceType: "Facebook",
  date: "2026-10-11 21:09",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/bi.phat741996/posts/pfbid02N8eK2GAcwymoiTJfz3f3ZJP4gb3qFjuq9MeRSVsAXSDucqAiMLaFhve2PjTndFC8l",
  excerpt: "...V: từ 7,29%/năm Woori Bank: từ 9,3%/năm Vietcombank: từ 9,9%/năm VIB: từ 9,5%/năm MSB: từ 10,1%/năm <mark>HDBank</mark>: từ 10,3%/năm Trước khi vay, nhớ hỏi 3 điều: 1. Lãi suất sau ưu đãi? 2. Phí phạt trả nợ trước hạn? 3. Khả năng trả góp khi lãi suất tăng? Mua được nhà là một chuyện, giữ vững dòng tiền mới là điều quan trọng! Anh chị đang tìm mua nhà TP.HCM?￼",
  engagement: {
   reactions: 3,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 546,
  title: "Đà Nẵng 🔥 Best seller nhà TínPhát. E lại cập nhật lô mới ạ 💻𝐌𝐚𝐜𝐁𝐨𝐨𝐤 𝐏𝐫𝐨 𝟏𝟒𝐢𝐧𝐜𝐡...",
  source: "@tamle.1512",
  sourceType: "Threads",
  date: "2026-10-11 20:43",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tamle.1512/post/DeWyuzID5Lu",
  excerpt: "Đà Nẵng 🔥 Best seller nhà TínPhát. E lại cập nhật lô mới ạ 💻𝐌𝐚𝐜𝐁𝐨𝐨𝐤 𝐏𝐫𝐨 𝟏𝟒𝐢𝐧𝐜𝐡 𝐌𝟒 LikeNew Fullbox ⚡️ Apple M4 • RAM 16GB • SSD 512GB ✨ Máy đẹp • Black 🔋 Pin 9x% 💻𝐌𝐚𝐜𝐁𝐨𝐨𝐤 𝐏𝐫𝐨 𝟏𝟒𝐢𝐧𝐜𝐡 𝐌𝟒 𝐏𝐫𝐨 LikeNew Fullbox ⚡️ Apple M4 Pro • RAM 24GB • SSD 512GB ✨ Máy đẹp •Black 🔋 Pin 9x% ❗️Nhận lên_đời thu_cũ đổi mớiii ⏤ • Tặng...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 547,
  title: "Bế mạc ngày hội giao lưu văn hóa- thể thao các ngân hàng trên địa bàn khu vực Móng Cái lần thứ...",
  source: "Phường Móng Cái 1",
  sourceType: "Facebook",
  date: "2026-10-11 19:36",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/truyenthongmongcai/posts/pfbid02MFCtHa3fr6CfkTigkeqRb7Fa9PVJGNNoBiGyuB8DVS7BYssMqDnDMPKzKkr7eAw1l",
  excerpt: "... Cái gồm: ACB, Agribank, Vietcombank, MB, Vietinbank, BIDV, VPbank, BVbank, LPbank, Sacombank, SHB, <mark>HDbank</mark> với hơn 250 vận động viên tranh tài ở 4 môn thi đấu: bóng đá, pickleball, kéo co và nhảy bao bố. Các đội đã cống hiến nhiều trận đấu hấp dẫn, kịch tính, thể hiện tinh thần thể thao giao lưu và gắn kết giữa các đơn vị...",
  engagement: {
   reactions: 55,
   shares: 9,
   comments: 7
  }
 },
 {
  id: 548,
  title: "PHÂN TÍCH CƠ BẢN : HDB - TRUNG TÂM HỆ SINH THÁI SOVICO | LIỆU RẰNG CÓ ĐÁNG ĐẦU TƯ ?",
  source: "HD INVESTMENT -  ECONOMIC CYCLE",
  sourceType: "YouTube",
  date: "2026-10-11 19:30",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.youtube.com/watch?v=DAWncO5g3SA",
  excerpt: "That is <mark>HDBank</mark> stock . First , we will introduce <mark>HDBank</mark> and have an overview of the story regarding the bank .",
  engagement: {
   reactions: 113,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 549,
  title: "4 CỔ PHIẾU ĐÁNG CHÚ Ý TRONG NHỊP NÀY – ACE THAM KHẢO Thị trường luôn có sự luân chuyển dòng...",
  source: "Thế Hậu",
  sourceType: "Facebook Group",
  date: "2026-10-11 19:23",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/1644213615912994/posts/2942276626106680/",
  excerpt: "4 CỔ PHIẾU ĐÁNG CHÚ Ý TRONG NHỊP NÀY – ACE THAM KHẢO Thị trường luôn có sự luân chuyển dòng tiền. Qua góc nhìn kỹ thuật, 4 mã VPB, <mark>HDB</mark>, TCB và DCM đang xuất hiện những tín hiệu đáng quan tâm. • VPB: Giá thoát nền tích lũy, MACD tích cực, kỳ vọng hướng tới vùng 26–27. • <mark>HDB</mark>: Động lượng tăng mạnh, thanh khoản đột biến, cần theo dõi khả năng duy trì đà...",
  engagement: {
   reactions: 8,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 550,
  title: "MÀU NATURAL HIẾM – ACE ĐANG SĂN THÌ CHỐT NHANH NHA 😍 📱 16 PROMAX NATURAL 256GB 🇻🇳 ✨ Máy...",
  source: "@tieu_nhu68",
  sourceType: "Threads",
  date: "2026-10-11 18:37",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tieu_nhu68/post/DeWkZwVE7Xx",
  excerpt: "...àu sang – giá quá yêu cho ACE lên đời! ♻️ THU CŨ ĐỔI MỚI – BÙ TRỪ TRỢ GIÁ TỐT 💳 Hỗ trợ trả góp qua <mark>HDBank</mark> – Mirae – thẻ tín dụng. 🎓 Ưu tiên sinh viên có thẻ, điều kiện xét duyệt tùy hồ sơ. 📍 HCM – Tân Phú 🤝 Nhận giao lưu các dòng điện thoại.",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 551,
  title: "Bạn đang cần vốn để mở rộng sản xuất, kinh doanh hay đầu tư vào lĩnh vực nông nghiệp? HDBank Đăk...",
  source: "Minh Vân",
  sourceType: "Facebook Group",
  date: "2026-10-11 18:20",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/587434992786954/posts/1639072527623190/",
  excerpt: "Bạn đang cần vốn để mở rộng sản xuất, kinh doanh hay đầu tư vào lĩnh vực nông nghiệp? <mark>HDBank</mark> Đăk Nông sẵn sàng đồng hành cùng bạn với: ✅ Lãi suất ưu đãi hấp dẫn ✅ Thủ tục nhanh gọn, giải ngân linh hoạt ✅ Tư vấn tận tình, hỗ trợ từ A-Z Liên hệ ngay: 📞 Em Minh Vân - 0917.600.604 để được tư vấn hỗ trợ 🏢 Địa chỉ: 354 Tôn Đức Thắng, P. Bắc Gia Nghĩa, tỉnh...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 552,
  title: "DANH SÁCH CỔ PHIẾU TUẦN SAU VÀO SÓNG TĂNG MẠNH: 1) Ngân hàng: VPB, HDB, TCB 2) Bán lẻ: MSN, MWG...",
  source: "Lương Trần",
  sourceType: "Facebook",
  date: "2026-10-11 18:15",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/Trangtruytimseucophieu/posts/pfbid0n2rAziH2LS9eyL7fSshgeLDBC3Dg5SzTCWfe1LbhtFY1X1MwVzHq4jBDqDw7ey96l",
  excerpt: "📌 DANH SÁCH CỔ PHIẾU TUẦN SAU VÀO SÓNG TĂNG MẠNH: 1) Ngân hàng: VPB, <mark>HDB</mark>, TCB 2) Bán lẻ: MSN, MWG 3) Xuất khẩu: VGT, TNG, VHC 4) Dầu khí: PVS, PLX 💥 Những nhóm này đang có mô hình cho thấy khả năng tăng tiếp trong tuần sau.",
  engagement: {
   reactions: 31,
   shares: 0,
   comments: 7
  }
 },
 {
  id: 553,
  title: "ĐẶC QUYỀN PHÁI ĐẸP THÁNG 10​ GỬI TIỀN AN TÂM, NHẬN QUÀ TINH TẾ ​🌸🌹 💝 Ở HDBank, tháng của \"một...",
  source: "Đào Thu Hà",
  sourceType: "Facebook",
  date: "2026-10-11 17:44",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/1072932552041362/",
  excerpt: "🌹🌸ĐẶC QUYỀN PHÁI ĐẸP THÁNG 10​ GỬI TIỀN AN TÂM, NHẬN QUÀ TINH TẾ ​🌸🌹 💝 Ở <mark>HDBank</mark>, tháng của \"một nửa thế giới\" có gì?​ Có những món quà được <mark>HDBank</mark> dành riêng cho phái đẹp - như một lời tri ân gửi đến những người phụ nữ luôn xứng đáng được yêu thương và nâng niu.​ 😍💰Lãi suất siêu ưu đãi cùng nhiều phần quà hấp dẫn ạ 🤩 📞: Cháu/Em Hà: 0336.757.323...",
  engagement: {
   reactions: 17,
   shares: 0,
   comments: 3
  }
 },
 {
  id: 554,
  title: "Hai ngân hàng vừa vượt 100.000 tỷ vốn điều lệ. Nhưng có bao nhiêu đồng tiền mới thực sự chảy vào...",
  source: "Phú Ninh",
  sourceType: "Facebook Group",
  date: "2026-10-11 17:30",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/chuyennhabanggroup/posts/1442615697808105/",
  excerpt: "...m. Thứ hai, hàng loạt ngân hàng đang đẩy mạnh vay vốn quốc tế: VPBank ký khoản hợp vốn 1,44 tỷ USD, <mark>HDBank</mark> huy động 721 triệu USD, Techcombank và VIB mỗi bên nhắm 1 tỷ USD. Lý do được nêu ra là chi phí vốn USD rẻ hơn huy động trong nước. Đặt ba hiện tượng cạnh nhau sẽ thấy câu hỏi: nếu ngành ngân hàng đang có nguồn vốn dồi dào chưa từng có, tại sao...",
  engagement: {
   reactions: 22,
   shares: 12,
   comments: 0
  }
 },
 {
  id: 555,
  title: "Đà Nẵng 💕E lại cập nhật lô mới phục vụ Khách ạ💕 🌟Bạn nào hỏi chưa mua được ghé e nha✌️...",
  source: "@tamle.1512",
  sourceType: "Threads",
  date: "2026-10-11 17:08",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tamle.1512/post/DeWaLPmD7eJ",
  excerpt: "Đà Nẵng 💕E lại cập nhật lô mới phục vụ Khách ạ💕 🌟Bạn nào hỏi chưa mua được ghé e nha✌️ 𝐈𝐩𝐚𝐝 𝐆𝐞𝐧 𝟏𝟎-𝟐𝟓𝟔𝐆𝐁- 𝐋𝐢𝐤𝐞𝐍𝐞𝐰 ⛽️Pin: 89% 🌱Giá: 9.500.000đ 𝐈𝐩𝐚𝐝 𝐆𝐞𝐧 𝟏𝟎-𝟔𝟒𝐆𝐁 𝟓𝐆- 𝐋𝐢𝐤𝐞𝐍𝐞𝐰 ⛽️Pin: 92% 🌱Giá: 8.500.000đ ❗️Nhận thu_cũ đổi_mới lên đời zá tốt. 👩‍💻 • Hỗ Trợ Góp tại <mark>HDsaison</mark>, Mira - Thẻ tín dụng 📱 𝐇𝐚̀𝐧𝐠...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 556,
  title: "Từ những dấu ấn của các thế hệ đi trước đến những ý tưởng sáng tạo hôm nay, triển lãm gửi gắm...",
  source: "Báo Thanh Niên",
  sourceType: "Facebook Fanpage",
  date: "2026-10-11 16:35",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/thanhnien/posts/pfbid0Qq2uEUCwxvWpgpVZ4HRyN5bB5RYsMeS6oG28xi5L8Mdxs9xMDSJri58GBLopqT8Fl",
  excerpt: "Từ những dấu ấn của các thế hệ đi trước đến những ý tưởng sáng tạo hôm nay, triển lãm gửi gắm thông điệp đến thế hệ trẻ hôm nay. 70NamHoiLHTNVN ToiYeuToQuocToi BaoThanhNien <mark>HDBank</mark> KNHoldings",
  engagement: {
   reactions: 19,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 557,
  title: "ILoveHDBank HDBank VayHDBank HappyDigitalBank",
  source: "Duy Phong",
  sourceType: "Facebook",
  date: "2026-10-11 16:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/duy.phong.37939/posts/pfbid036uTfNq5wx9nS4BoisUtsktUcESMXVew9jooMWcSYZuuV5vtiPL6ZFUWiTJxiTu5Tl",
  excerpt: "ILove<mark>HDBank</mark> <mark>HDBank</mark> Vay<mark>HDBank</mark> HappyDigitalBank",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 558,
  title: "Tân phú ghé mình sẵn nhiều mã. 🔥Hổ trợ trả góp qua NH HDBank-Mira-Thẻ Tín Dụng.Sinh Viên Có Thẻ...",
  source: "@tieu_nhu68",
  sourceType: "Threads",
  date: "2026-10-11 16:14",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tieu_nhu68/post/DeWUCm_k7RB",
  excerpt: "Tân phú ghé mình sẵn nhiều mã. 🔥Hổ trợ trả góp qua NH <mark>HDBank</mark>-Mira-Thẻ Tín Dụng.Sinh Viên Có Thẻ Duyệt Ko Thẩm Định",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 559,
  title: "QUỸ NGOẠI VỪA MUA MẠNH PNJ ĐÃ QUAY ĐẦU BÁN GẦN 5,5 TRIỆU CỔ PHIẾU, TRONG KHI OCH ĐÓN CỔ ĐÔNG LỚN...",
  source: "LTC Capital",
  sourceType: "Facebook",
  date: "2026-10-11 16:14",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/LTC.chungkhoanvps/posts/pfbid0uaLwwqPHDq49baCNjWBGMxvxWNdGpkfUsR5kWezxZDtPJsU7WEUQqPwgRQMs8DaYl",
  excerpt: "... thức không còn là cổ đông lớn. Đáng chú ý, nhóm quỹ này từng nâng sở hữu vượt 6% vào tháng 8/2026. <mark>HDB</mark> – Quỹ đầu tư điều chỉnh tỷ trọng: Quỹ Đầu tư cổ phiếu Ngân hàng và Tài chính HD mua 710.000/1 triệu cổ phiếu <mark>HDB</mark> đăng ký, với lý do điều chỉnh phân bổ danh mục để tuân thủ giới hạn đầu tư. Dòng tiền của các quỹ có thể cung cấp thêm manh mối về sự...",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 560,
  title: "Chuyển động quỹ đầu tư tại HDB, OCH, PNJ Leadvisors Capital mua trọn lô cổ phiếu riêng lẻ của...",
  source: "SB Capital",
  sourceType: "Facebook Group",
  date: "2026-10-11 16:04",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/tradeandchat/posts/1826005708418395/",
  excerpt: "Chuyển động quỹ đầu tư tại <mark>HDB</mark>, OCH, PNJ Leadvisors Capital mua trọn lô cổ phiếu riêng lẻ của OCH Nhóm T. Rowe Price bán lượng lớn cổ phiếu PNJ Giao dịch lớn tại [<mark>HDB</mark>](https://finance.vietstock.vn/<mark>HDB</mark>-ngan-hang-tmcp-phat-trien-thanh-pho-ho-chi-minh.htm?languageid=1)",
  engagement: {
   reactions: 5,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 561,
  title: "Vikki bank ls 9.6% Vp bank ls 9.3% Ce cho e xin ít review gởi tk việt nam với P/s : e hỏi để tối...",
  source: "@chaungocnina",
  sourceType: "Threads",
  date: "2026-10-11 16:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@chaungocnina/post/DeWSWL2o0Ol",
  excerpt: "<mark>Vikki bank</mark> ls 9.6% Vp bank ls 9.3% Ce cho e xin ít review gởi tk việt nam với P/s : e hỏi để tối nay trúng số em gởi chứ xí trúng vui quá bận nên ko có tgian tham khảo á :))))",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 562,
  title: "Từ Cà Mau, nơi cực Nam thiêng liêng của đất nước, ngọn lửa được các đại biểu thanh niên tiếp...",
  source: "Báo Thanh Niên",
  sourceType: "Facebook Fanpage",
  date: "2026-10-11 15:35",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/thanhnien/posts/pfbid02RsKK57vNzXoFTMBth5GBfw6m5VkVGLNoLLWP7svA3ytNLGps3ZnupPQWJWmPGXcBl",
  excerpt: "...ất nước và khát vọng của tuổi trẻ về với thủ đô Hà Nội. 70NamHoiLHTNVN ToiYeuToQuocToi BaoThanhNien <mark>HDBank</mark> KNHoldings",
  engagement: {
   reactions: 23,
   shares: 2,
   comments: 0
  }
 },
 {
  id: 563,
  title: "Một ngày làm việc đầy năng lượng tại Hà Nội cùng Workshop “Kỹ năng bán và quản lý thúc đẩy...",
  source: "Đăng Hậu",
  sourceType: "Facebook",
  date: "2026-10-11 14:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/anghau.381706/posts/pfbid0xcwJWK9kZEep2LY8d26aNUeyLA6h3W2owXwqSysN4Yytra3zbadptqkortXivrCWl",
  excerpt: "Một ngày làm việc đầy năng lượng tại Hà Nội cùng Workshop “Kỹ năng bán và quản lý thúc đẩy Bancassurance” dành cho cấp lãnh đạo <mark>HDBank</mark>. Không chỉ là dịp học hỏi, chia sẻ kinh nghiệm mà còn là cơ hội kết nối, lan tỏa tinh thần đồng hành và quyết tâm bứt phá ❤️💙 <mark>HDBank</mark> ChubbLife Bancassurance Workshop",
  engagement: {
   reactions: 14,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 564,
  title: "LÃI SUẤT TIẾT KIỆM THÁNG 10 – ƯU ĐÃI NHẤT NĂM 2026🌿 Anh chị đang tìm nơi gửi tiết kiệm an toàn,...",
  source: "Phạm Thanh Hằng",
  sourceType: "Facebook Group",
  date: "2026-10-11 13:28",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1417788883839237/",
  excerpt: "🌿 LÃI SUẤT TIẾT KIỆM THÁNG 10 – ƯU ĐÃI NHẤT NĂM 2026🌿 Anh chị đang tìm nơi gửi tiết kiệm an toàn, lãi cao 👉 <mark>HDBank</mark> mang đến mức lãi suất hấp dẫn, một kênh đầu tư sinh lời an toàn trong thời điểm đầy biến động như hiện nay Lãi suất lên đến 9,42%/năm 🔹 Kỳ hạn 6th: 8,8% - 9,42%/năm 🔹 Kỳ hạn 12th: 8,7% - 9,27%/năm Với <mark>HDBank</mark>, mỗi khoản tiết kiệm là một...",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 565,
  title: "PHỤ NỮ TỰ TIN – VỮNG VÀNG TÀI CHÍNH 🌷 Ngày 10/10/2026, HDBank Long Bình và Hội Liên hiệp Phụ nữ...",
  source: "Kimpha Lê",
  sourceType: "Facebook",
  date: "2026-10-11 12:54",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/perky.perky.568/posts/pfbid0jPqygmtmgr9Rt9unusZKVk7Vp1VeCmT9Jf6HThS47qNmNVYrmUVuozQCsZhwbX4Ll",
  excerpt: "🌷 PHỤ NỮ TỰ TIN – VỮNG VÀNG TÀI CHÍNH 🌷 Ngày 10/10/2026, <mark>HDBank</mark> Long Bình và Hội Liên hiệp Phụ nữ phường Long Hưng chính thức ký kết hợp tác, cùng mang đến giải pháp tài chính thiết thực, giúp chị em chủ động hơn trong cuộc sống và tự tin theo đuổi những dự định của mình. 💚 ✨ Vay tín chấp đến 300 triệu đồng ✨ Lãi suất từ 12%/năm, tính theo dư nợ giảm...",
  engagement: {
   reactions: 8,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 566,
  title: "Đà Nẵng 🧢🧢 𝐈𝐩𝐚𝐝 𝐆𝐞𝐧 𝟏𝟎-𝟔𝟒𝐆𝐁 𝟓𝐆 -Vàng💛 - emm lại về thêm 🌟Hiệu năng ổn định,...",
  source: "@tamle.1512",
  sourceType: "Threads",
  date: "2026-10-11 12:38",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tamle.1512/post/DeV7P-yDwMI",
  excerpt: "Đà Nẵng 🧢🧢 𝐈𝐩𝐚𝐝 𝐆𝐞𝐧 𝟏𝟎-𝟔𝟒𝐆𝐁 𝟓𝐆 -Vàng💛 - emm lại về thêm 🌟Hiệu năng ổn định, pin bền bỉ, đầu tư 1 lần dùng nhìu năm✌️ 𝐈𝐩𝐚𝐝 𝐆𝐞𝐧 𝟏𝟎-𝟔𝟒𝐆𝐁 𝟓𝐆- 𝐋𝐢𝐤𝐞𝐍𝐞𝐰 ⛽️Pin: 92% 🌱Giá: 8.500.000đ ❗️Nhận thu_cũ đổi_mới lên đời zá tốt. 👩‍💻 • Hỗ Trợ Góp tại <mark>HDsaison</mark>, Mira - Thẻ tín dụng 📱 𝐇𝐚̀𝐧𝐠 𝐒𝐚̆̉𝐧 𝐆𝐢𝐚𝐨 𝐍𝐠𝐚𝐲 ! 💯 ————...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 567,
  title: "LÃI SUẤT TIẾT KIỆM THÁNG 10 – ƯU ĐÃI NHẤT NĂM 2026🌿 Anh chị đang tìm nơi gửi tiết kiệm an toàn,...",
  source: "Phạm Thanh Hằng",
  sourceType: "Facebook Group",
  date: "2026-10-11 11:54",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/1294515141550990/posts/1840119956990503/",
  excerpt: "🌿 LÃI SUẤT TIẾT KIỆM THÁNG 10 – ƯU ĐÃI NHẤT NĂM 2026🌿 Anh chị đang tìm nơi gửi tiết kiệm an toàn, lãi cao 👉 <mark>HDBank</mark> mang đến mức lãi suất hấp dẫn, một kênh đầu tư sinh lời an toàn trong thời điểm đầy biến động như hiện nay Lãi suất lên đến 9,42%/năm 🔹 Kỳ hạn 6th: 8,8% - 9,42%/năm 🔹 Kỳ hạn 12th: 8,7% - 9,27%/năm Với <mark>HDBank</mark>, mỗi khoản tiết kiệm là một...",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 568,
  title: "7-9/10/26 Chia sẽ thông tin Dự Án Celesta Gold mới tọa lạc trên cung đường của những dự án tỷ tỷ...",
  source: "Van Anh Phan",
  sourceType: "Facebook",
  date: "2026-10-11 11:21",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/van.a.phan.7/posts/pfbid032iuTbwTbt5XudemJ9Ci92AQRSP8b2ELPvtPhVjek6SqZmGsTpRHptjVrKbEZJpp6l",
  excerpt: "7-9/10/26 Chia sẽ thông tin Dự Án Celesta Gold mới tọa lạc trên cung đường của những dự án tỷ tỷ đô, khu Nam Sài Gòn. Cám ơn anh chị mảng tài chính <mark>HDBank</mark>, <mark>Vikki Bank</mark> và mảng BĐS Anh Quốc Land, Kiên Nam Land cùng Vina Đại Phước đã tham gia đồng hành, lan toả thông tin đến khách hàng.",
  engagement: {
   reactions: 31,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 569,
  title: "Smoney vừa chỉnh sửa lại Tín hiệu mua bán S.Vision để tự điều chỉnh lại giá mua cho các cổ phiếu...",
  source: "Smoney",
  sourceType: "Facebook Group",
  date: "2026-10-11 10:59",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/smoneychungkhoan/posts/1080785314941107/",
  excerpt: "...phiếu này có trả cổ tức (tiền, cổ phiếu), phát hành thêm cổ phiếu thưởng,... Ví dụ như tín hiệu mua <mark>HDB</mark> như hình bên dưới, sau khi có đợt trả cổ tức bằng 25% cổ phiếu ngày 09-10-2026 thì giá mua 26.400đ vào ngày 01-07-2026 sẽ được điều chỉnh lại còn 20.310. Smoney Svision <mark>HDB</mark>",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 570,
  title: "Vì sao lãi suất tiết kiệm khó giảm trong các quý tới? Đầu tháng 9/2026, kỳ hạn 6 tháng tại NHTM...",
  source: "Ngọc Hà",
  sourceType: "Facebook",
  date: "2026-10-11 09:38",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/NgocHa6189/posts/pfbid0Z9CLKFMvibCBFaoWzJSwztZrnGdbrRicr4CRUpfsnkFDLzhP76Cdjx4Hwr4QKfXsl",
  excerpt: "...hạn khó giảm. Việc ba ngân hàng phải đi vay nước ngoài trong nửa đầu năm từ VPBank vay 1,44 tỷ USD, <mark>HDBank</mark> vay 720 triệu, ACB vay 500 triệu là hệ quả trực tiếp của cùng một vấn đề. Lý do 3: Dự trữ ngoại hối mỏng khiến lãi suất trở thành công cụ giữ tỷ giá Hai lý do trên nằm bên trong bảng cân đối của ngân hàng. Lý do thứ ba nằm ở tầng điều hành và nó...",
  engagement: {
   reactions: 10,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 571,
  title: "Ngày hội giao lưu văn hóa- thể thao các ngân hàng trên địa bàn khu vực Móng Cái lần thứ XIX năm...",
  source: "Phường Móng Cái 1",
  sourceType: "Facebook",
  date: "2026-10-11 09:29",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/truyenthongmongcai/posts/pfbid021tR7fwcjHBSdcJCEVmrC4397yc8uX1g9GF9YQXNzMz4nwozDm6foVLThCcwDJRrrl",
  excerpt: "... Cái gồm: ACB, Agribank, Vietcombank, MB, Vietinbank, BIDV, VPbank, BVbank, LPbank, Sacombank, SHB, <mark>HDbank</mark> với hơn 250 vận động viên tranh tài ở 4 môn thi đấu: bóng đá, pickleball, kéo co và nhảy bao bố. Các đội đã cống hiến nhiều trận thi đấu hấp dẫn, đầy kịch tính, thể hiện tinh thần thể thao, giao lưu và gắn kết giữa các...",
  engagement: {
   reactions: 67,
   shares: 8,
   comments: 3
  }
 },
 {
  id: 572,
  title: "Tiệm đẹp, dịch vụ tốt mới là nam châm thu hút các \"thượng đế\" chi tiêu mạnh tay trong mùa lễ;...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-11 09:18",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeVkZa1j49q",
  excerpt: "... cấp tiệm hay nhập hàng mới với sự hậu thuẫn uy tín? 😎 Tìm đâu xa khi có gói vay Hộ kinh doanh của <mark>HD SAISON</mark> - \"khắc chế\" mọi bài toán về ngân sách: 🎀Hạn mức hỗ trợ lên đến 40 triệu - Thoải mái nhập hàng, chuẩn bị quà tặng và F5 cửa tiệm. 📋 Giấy tờ thủ tục mà hộ kinh doanh nào cũng có.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 573,
  title: "Đồng hành cùng hộ kinh doanh:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-11 09:18",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeVkZY_D5M6",
  excerpt: "Đồng hành cùng hộ kinh doanh: https://www.<mark>hdsaison</mark>.com.vn/vn/ho-kinh-doanh-vung-vang-vay-40-trieu-de-dang.html",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 574,
  title: "Quyết vừa hoàn thành chuỗi 5 cuộc thi 42km trong 5 tuần liên tiếp tại 5 thành phố khác nhau. Từ...",
  source: "Đan Quyết",
  sourceType: "Facebook",
  date: "2026-10-11 09:16",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/DanQuyet.QN/posts/pfbid0i2fh9qiAcuufLTwUE1hEStJRey44dADfkqs8wjjmQJYb2bF6rTwedFez6JuLLJs1l",
  excerpt: "...nh trình tuyệt vời với những kết quả tốt đẹp. 12/9 : T&amp;T Vĩnh Long Marathon 2:42:45 - Vô địch 20/9: <mark>HDBank</mark> Green Marathon 2:44:05 - Nhì chung cuộc 27/9: VnExpress Marathon Grand Tour Nghệ An 2:40:53 - Vô địch 4/10 : Techcombank Hanoi Marathon 2:46:00 - 3 chung cuộc 11/10: VPBank Đất Sen Hồng Music Marathon 2:41:51 - 3 chung cuộc Mỗi giải đấu đều được...",
  engagement: {
   reactions: 1234,
   shares: 1,
   comments: 116
  }
 },
 {
  id: 575,
  title: "Ngân hàng tự động \"chạy đến\" nhà bạn, chuyện thật như đùa! 💡 Giờ không cần phải lặn lội ra tận...",
  source: "VSA Index",
  sourceType: "Facebook",
  date: "2026-10-11 08:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/vsa.index/posts/pfbid0ZBpMW7UWzqL2DYhd4QHDwdm4XFXt1HBz195eJPyQCzcTqTq3Q1SzCtaqEMxCzyzRl",
  excerpt: "🚀 Ngân hàng tự động \"chạy đến\" nhà bạn, chuyện thật như đùa! 💡 Giờ không cần phải lặn lội ra tận chi nhánh xếp hàng nữa đâu nha anh em. <mark>HDBank</mark> vừa chơi lớn bắt tay với VNPT với Di Động Việt, biến luôn mấy tiệm điện thoại, cửa hàng công nghệ quen thuộc thành điểm giao dịch ngân hàng luôn. 📍 Ra mua card điện thoại hay sửa máy là tiện tay nộp rút tiền,...",
  engagement: {
   reactions: 25,
   shares: 0,
   comments: 10
  }
 },
 {
  id: 576,
  title: "Cổ tức tuần tới: HDBank chốt quyền nhận 30% cổ phiếu, 3 doanh nghiệp trả tiền mặt",
  source: "Tạp chí Mekong ASEAN",
  sourceType: "Facebook",
  date: "2026-10-10 21:29",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/mekongasean.vn/posts/pfbid06atyEpaazTrmBVfMAEEuFiVxdmyfc1Ygx9ddN1FiVCqSLGaM4iQ1zeTuB7uGjQosl",
  excerpt: "Cổ tức tuần tới: <mark>HDBank</mark> chốt quyền nhận 30% cổ phiếu, 3 doanh nghiệp trả tiền mặt",
  engagement: {
   reactions: 5,
   shares: 1,
   comments: 1
  }
 },
 {
  id: 577,
  title: "Dỗi HD Bank thế nhỉ. Kể mà có cái sổ tk 1 tị thì mai cũng rút luôn!!!",
  source: "@lala_220795",
  sourceType: "Threads",
  date: "2026-10-10 21:05",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@lala_220795/post/DeUQfhEEk0-",
  excerpt: "Dỗi <mark>HD Bank</mark> thế nhỉ. Kể mà có cái sổ tk 1 tị thì mai cũng rút luôn!!!",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 578,
  title: "Tải app hd saison về",
  source: "@minhhh962",
  sourceType: "Threads",
  date: "2026-10-10 20:14",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@minhhh962/post/DeUKo-Zk2v2",
  excerpt: "Tải app <mark>hd saison</mark> về",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 579,
  title: "TIỀN ĐỂ TRONG TÀI KHOẢN THÌ NẰM IM, GỬI HDBANK THÌ SINH LỜI 😆💚 Người yêu có thể không có, chứ...",
  source: "Lê Thảo Nhung",
  sourceType: "Facebook",
  date: "2026-10-10 20:09",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/le.thao.nhung.688864/posts/pfbid02X7TmG7AeEYQB6WVSDsayvnNjJLF9NVKG45MQVKPCwFqUmFtZhGt5LbVoxHgb9Fpl",
  excerpt: "💸 TIỀN ĐỂ TRONG TÀI KHOẢN THÌ NẰM IM, GỬI <mark>HDBANK</mark> THÌ SINH LỜI 😆💚 Người yêu có thể không có, chứ tiền tiết kiệm thì nhất định phải có nha 😂 💰 Lãi suất hấp dẫn 🏦 Gửi tiết kiệm an tâm 📈 Tiền đẻ ra tiền, ví tiền thêm vui! 📩 A/c có tiền nhàn rỗi, alo 0961169789 em tư vấn ngay nhé! Đừng để tiền nằm chơi, cho tiền đi làm cùng <mark>HDBank</mark> thôi ạ 🤣💚",
  engagement: {
   reactions: 58,
   shares: 0,
   comments: 25
  }
 },
 {
  id: 580,
  title: "KẾT NỐI GIÁ TRỊ HÔM NAY – VỮNG BƯỚC TƯƠNG LAI ✨ Khi khoảng cách không còn là rào cản, việc trao...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-10 20:01",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/2231382564097995/",
  excerpt: "...ủ nhanh chóng, thuận tiện và xứng tầm. 🌏 Với dịch vụ Chuyển Thu Nhập Hợp Pháp Từ Tài Sản Cho Tặng, <mark>HDBank</mark> Priority mang đến giải pháp chuyển tiền quốc tế dành riêng cho Khách hàng Ưu tiên, giúp dòng tiền được kết nối linh hoạt và an tâm hơn. 💎 Đặc quyền nổi bật: ⚡ Không Video Call – Xác thực từ xa linh hoạt, thuận tiện khác biệt múi giờ. 🌐 Biểu mẫu...",
  engagement: {
   reactions: 779,
   shares: 183,
   comments: 731
  }
 },
 {
  id: 581,
  title: "Khi xem phim quá 180p =)) Nhân tiện lãi suất vikki bank đang đu đỉnh kính mời anh chị em cô chú...",
  source: "@duy.tute",
  sourceType: "Threads",
  date: "2026-10-10 18:56",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@duy.tute/post/DeUBvl_lBd3",
  excerpt: "Khi xem phim quá 180p =)) Nhân tiện lãi suất <mark>vikki bank</mark> đang đu đỉnh kính mời anh chị em cô chú bạn gì ra ủng hộ em Zuyyy nhé Đt/zép lào: 0366161617 (em zuy 2k4) <mark>Vikki</mark>GO <mark>Vikki</mark> Toiyeu<mark>Vikki</mark> <mark>Vikki</mark>DigitalBank",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 582,
  title: "Cho mình hỏi. Lãi suất HDBank 12 tháng đang bao nhiêu. Mình đang có 6 tỷ sắp đến hạn. Ace HDBank...",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-10 17:16",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/guitietkiemnganhang/posts/4455037204712956/",
  excerpt: "Cho mình hỏi. Lãi suất <mark>HDBank</mark> 12 tháng đang bao nhiêu. Mình đang có 6 tỷ sắp đến hạn. Ace <mark>HDBank</mark> báo lãi suất mình tham khảo nhé.",
  engagement: {
   reactions: 33,
   shares: 0,
   comments: 125
  }
 },
 {
  id: 583,
  title: "Chào mọi người trong Gr, mọi người đọc xong chửi em ngu em chịu nhưng hôm nay em lên đây xin mọi...",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-10 16:44",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/3508387292634958/posts/3958969517576731/",
  excerpt: "... ạ. Em hiện đang là sinh viên, tầm nửa năm trước do dại nên em có đứng ra vay dùm nyc những con như <mark>HD Bank</mark> 25tr ( trả được 4 tháng ), con Easy Vay của Shopee 4tr ( trả được 4 tháng ), con Tinvay 10tr ( trả được 6 tháng ). Hiện tại thì do nyc em mất khả năng trả nợ nên trễ mỗi con tầm chục ngày và người đang bị khủng bố tin nhắn, cuộc gọi là em rồi ạ....",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 3
  }
 },
 {
  id: 584,
  title: "NỮ TỶ PHÚ GIÀU NHẤT VIỆT NAM VÀ BÀI TOÁN TẦM VÓC TOÀN CẦU 📌 Không chỉ dừng lại ở khối tài sản...",
  source: "Kem tivi",
  sourceType: "Facebook Group",
  date: "2026-10-10 16:33",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/752349569193367/posts/1703966114031703/",
  excerpt: "...USD cùng vị trí nữ tỷ phú giàu nhất Việt Nam (theo cập nhật mới nhất của Forbes), tỷ phú <mark>Nguyễn Thị Phương Thảo</mark> đang theo đuổi một mục tiêu lớn hơn: Đưa doanh nghiệp Việt vươn tầm thế giới, tiếp cận nguồn vốn, công nghệ và các thị trường hàng đầu. Từ những cái tên đình đám như Boeing, SpaceX đến các trụ cột như <mark>HDBank</mark>, Vietjet hay Sovico, hãy cùng...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 585,
  title: "Đồng hành cùng hộ kinh doanh:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-10 16:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeTwFlaHcEl",
  excerpt: "Đồng hành cùng hộ kinh doanh: https://www.<mark>hdsaison</mark>.com.vn/vn/ho-kinh-doanh-vung-vang-vay-40-trieu-de-dang.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 586,
  title: "các bác cho e hỏi thẻ hdbank họ gửi sao kê về cho mình vào ngày nào vậy ak",
  source: "IntelligentMango3695",
  sourceType: "Facebook Group",
  date: "2026-10-10 16:16",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/NganHangHDBank/posts/28514995548128117/",
  excerpt: "các bác cho e hỏi thẻ <mark>hdbank</mark> họ gửi sao kê về cho mình vào ngày nào vậy ak",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 4
  }
 },
 {
  id: 587,
  title: "HDBank MinigameHDBank LoveHDBank 12t",
  source: "Bangtam le Thi",
  sourceType: "Facebook",
  date: "2026-10-10 12:46",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/bangtam.le.thi.230065/posts/pfbid02ZKF24fu2hCSFmkGZSAVho8vSQsPBys98uMTwHwsKTebUkNCiQTbVhNeiDgJTSD4zl",
  excerpt: "<mark>HDBank</mark> Minigame<mark>HDBank</mark> Love<mark>HDBank</mark> 12t",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 588,
  title: "I Love HDBank",
  source: "Kenny Dao",
  sourceType: "Facebook",
  date: "2026-10-10 12:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/kenny.dao.399/posts/pfbid0s5Xnury2N7D6sAmCSvQn8VeaZn2EmNGa2QSxHbsKXYgkmbHdiXYFEooh1jeXmNvul",
  excerpt: "I Love <mark>HDBank</mark>",
  engagement: {
   reactions: 4,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 589,
  title: "NGAY LÚC NÀY THAM GIA NGAY PHIÊN LIVESTREAM ĐỂ NHẬN NHIỀU QUÀ TẶNG HẤP DẪN Từ HDBank Ngô Gia Tự...",
  source: "Luong Thanh Hang",
  sourceType: "Facebook",
  date: "2026-10-10 12:09",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/luong.hang.334/posts/pfbid02jKhF75xGpLnkewbSHhpfQwmwp3E8bq3d9uFbAbcZa5rFw4pTYAT58nX7CgmcPXNel",
  excerpt: "✨ NGAY LÚC NÀY THAM GIA NGAY PHIÊN LIVESTREAM ĐỂ NHẬN NHIỀU QUÀ TẶNG HẤP DẪN Từ <mark>HDBank</mark> Ngô Gia Tự : 🎁 Quà dành cho các KH gửi tiết kiệm 🎁 Quà tương tác 🎁 Và những phần quà bất ngờ sẽ được bật mí ngay trong LIVE! ⏰ CÙNG THAM GIA LIVESTREAM✨CHẠM NHỊP SỐ - CHỐT QUÀ ĐỈNH MÙA 2 ✨ 🔗 Link Livestream:",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 590,
  title: "Trải qua 1 thời gian khá dài gắn bó và đồng hành cùng HDBank, bản thân tôi luôn dành trọn niềm...",
  source: "Ngọc Nhạn",
  sourceType: "Facebook",
  date: "2026-10-10 12:06",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/ngoc.nhan.679301/posts/pfbid0U2agcoW3GPVTV2D8xLcK8FVcuaVjMjm5NCGeYm2NJKGoW5MH3wAz95sR3H7AWWndl",
  excerpt: "🌹🌹🌹🌷🌷🌷💐💐Trải qua 1 thời gian khá dài gắn bó và đồng hành cùng <mark>HDBank</mark>, bản thân tôi luôn dành trọn niềm tin cho nơi này. Điều khiến tôi an tâm nhất chính là mức lãi suất luôn ưu đãi, cạnh tranh cùng các dịch vụ giao dịch vô cùng thuận tiện. Nhưng điều làm tôi thực sự trân trọng và cảm động nhất chính là sự chăm sóc khách hàng tận tâm, chu đáo từ...",
  engagement: {
   reactions: 60,
   shares: 9,
   comments: 58
  }
 },
 {
  id: 591,
  title: "HDBANK ĐỒNG HÀNH CÙNG DOANH NGHIỆP VIỆT KẾT NỐI CHUỖI CUNG ỨNG TOÀN CẦU Ngày 10/10/2026, HDBank...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-10 12:05",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid0GFagZKPXEx4oejCX6oy5bJdSii3HN4tkHUUroE9WU2FvGeQC3UkbKdx68Fd5JFfel",
  excerpt: "<mark>HDBANK</mark> ĐỒNG HÀNH CÙNG DOANH NGHIỆP VIỆT KẾT NỐI CHUỖI CUNG ỨNG TOÀN CẦU Ngày 10/10/2026, <mark>HDBank</mark> tham gia Diễn đàn Go Global Bắc Ninh 2026 với chủ đề “Nâng cao năng lực – Kết nối chuỗi – Phát triển thị trường”, cùng đại diện cơ quan quản lý, chuyên gia, các tập đoàn công nghệ, Amazon Global Selling và cộng đồng doanh nghiệp. Diễn đàn do Báo Dân trí, Sở...",
  engagement: {
   reactions: 1264,
   shares: 219,
   comments: 838
  }
 },
 {
  id: 592,
  title: "Tự hào là HDBanker ILoveHDBank HDBank HappyDigitalBank",
  source: "Tham Tran",
  sourceType: "Facebook",
  date: "2026-10-10 11:50",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/tham.tran.309597/posts/pfbid0vrpqapUUXm73CXcBreZiuP1UUb1YFj2Jmq2FjyawBRY4Rd2v7YbPKJZ8apeFuQQCl",
  excerpt: "Tự hào là <mark>HDBank</mark>er ILove<mark>HDBank</mark> <mark>HDBank</mark> HappyDigitalBank",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 593,
  title: "LÃI SUẤT NGÂN HÀNG 9/10: CAO NHẤT 7,5%/NĂM, BIG4 ĐỒNG LOẠT 6,8%! Khảo sát 35 ngân hàng cho thấy...",
  source: "Giải mã chứng khoán",
  sourceType: "Facebook",
  date: "2026-10-10 11:30",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/giaimachungkhoan/posts/pfbid0e1isdYrtQacSUghq7Rfwjz1CQ8iyVhTN2CR1bt4Qourdfme8MU7ZVkHcEivDfdSul",
  excerpt: "... 9 tháng: 6,6% ▪️ 12 tháng: 6,8% ▪️ 18 tháng: 6,8% Trong khi đó, Techcombank ở mức 6,75%, MB 6,35%, <mark>HDBank</mark> 5,3% cho kỳ hạn 12 tháng. 🔥 GỬI 1 TỶ ĐỒNG, CHÊNH LỆCH BAO NHIÊU? 💵 Sacombank 7,5%: 75 triệu đồng/năm 💵 Big4 6,8%: 68 triệu đồng/năm 💵 SCB 3,7%: 37 triệu đồng/năm 👉 Chênh lệch cao nhất và thấp nhất lên tới 38 triệu đồng/năm! Minh họa tính lãi...",
  engagement: {
   reactions: 290,
   shares: 16,
   comments: 21
  }
 },
 {
  id: 594,
  title: "Chúng mình lên sóng rồi cả nhà ơiiiii 11:00 | 10/10 cùng HDBank Đông Hà Nội lên sóng LIVESTREAM...",
  source: "Trân Nguyễn",
  sourceType: "Facebook",
  date: "2026-10-10 11:20",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/quynhtran.nguyenthi/posts/pfbid02z6SumnD838qcMvnsC5w5MFSaiz8KS87DY4QKY3eh65xvNtT5Z69pxDvoinwho39Dl",
  excerpt: "❤️ Chúng mình lên sóng rồi cả nhà ơiiiii 11:00 | 10/10 cùng <mark>HDBank</mark> Đông Hà Nội lên sóng LIVESTREAM ĐẦU TIÊN nhé! 🥁 Ưu đãi hấp dẫn – 🍄 Minigame – 🎁🛍️ Quà tặng bất ngờ – 💬 Tư vấn tận tâm từ 2 KOL xinh đẹp nhà <mark>HDBank</mark> Đông Hà Nội ☘️🎈🌿 Đừng bỏ lỡ, vào Live gặp chúng mình nhé! 🌷☘️🥰 Và đừng quyên Follow Kênh của chúng mình nha ❤️❤️...",
  engagement: {
   reactions: 60,
   shares: 0,
   comments: 7
  }
 },
 {
  id: 595,
  title: "M.n cho e hỏi HD Bank nay có làm việc buổi chìu ko ạ",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-10 11:17",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1416816383936487/",
  excerpt: "M.n cho e hỏi <mark>HD Bank</mark> nay có làm việc buổi chìu ko ạ",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 4
  }
 },
 {
  id: 596,
  title: "NGÀY ĐÔI 10/10: ƯU ĐÃI KÉP HOÀN TIỀN ĐẾN 2,1 TRIỆU ĐỒNG TỪ THẺ & APP HDBANK 🎁 Thẻ tín dụng...",
  source: "Quang Nguyen",
  sourceType: "Facebook",
  date: "2026-10-10 11:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/QN.3110/posts/pfbid022ovsFFSJBMkg1FuM14d2GsmB78qnZvsuYqMVAWy2cWJqAGbDnHxXM86eg4zNnATbl",
  excerpt: "️🎉 NGÀY ĐÔI 10/10: ƯU ĐÃI KÉP HOÀN TIỀN ĐẾN 2,1 TRIỆU ĐỒNG TỪ THẺ &amp; APP <mark>HDBANK</mark> 🎁 Thẻ tín dụng <mark>HDBank</mark> hoàn đến 1,5 triệu đồng (chi tiết xem tại https://<mark>hdbank</mark>.com.vn/s/nd2026 ): - Hoàn 10%, tối đa 500.000đ cho giao dịch online từ 1,5 triệu đồng sớm nhất. - Hoàn thêm 1 triệu đồng cho Top 5 Khách hàng chi tiêu cao nhất trong ngày, có ít nhất 1 giao dịch...",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 597,
  title: "CHẠM NHỊP SỐ - CHỐT QUÀ ĐỈNH MÙA 2: Phiên 7 - Tích lũy trúng vàng, săn quà tặng Nàng 10.10 –...",
  source: "Hảo Nguyễn",
  sourceType: "Facebook",
  date: "2026-10-10 10:59",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hao.nguyen.934759/posts/pfbid02rzwhN8NKwgFEebiiqScqqyGSCv49uFAXeP85otUL17UJc1auiknvEzyznF73feoKl",
  excerpt: "... chỉ vàng SJC và nhiều bộ quà tặng thiết thực: Túi cói, ly, cốc giữ nhiệt. 👉 Các Đơn vị kinh doanh <mark>HDBank</mark> trên toàn quốc sẽ cùng lên sóng livestream, trực tiếp tư vấn chi tiết đến Quý khách để nhận ưu đãi. 🛍️ CHẠM VNSHOP, GIẢM NỬA GIÁ + Tung bất ngờ mã giảm đến 200.000 đồng, số lượng giới hạn. 👉 Nhiều sản phẩm chính hãng có giá độc quyền, phù hợp...",
  engagement: {
   reactions: 8,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 598,
  title: "TRÂN TRỌNG – TRI ÂN - CHÀO ĐÓN🌹💐 Mỗi chặng đường đều có những dấu ấn đáng nhớ, mỗi sự thay đổi...",
  source: "Trần Hải Hà",
  sourceType: "Facebook",
  date: "2026-10-10 10:36",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/tranhaiha9x/posts/pfbid02RV9UMyi8Y2wMeyBBvWZypewYsf6ETR9A44tXwbsAJczRdWPGreviAcAiRB8Rj4KKl",
  excerpt: "...ảm ơn những cống hiến, sự đồng hành và tâm huyết của Anh Đoàn, Chị Bích trong thời gian gắn bó cùng <mark>HDBank</mark> Khoái Châu. Chúc Anh Chị thật nhiều sức khỏe, hạnh phúc và thành công trên chặng đường phía trước! 🌟 Chào đón những thành viên mới gia nhập đội ngũ quản lý. Chúc các bạn nhanh chóng hòa nhập, phát huy năng lực và cùng tập thể <mark>HDBank</mark> Khoái Châu...",
  engagement: {
   reactions: 108,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 599,
  title: "NGÀY ĐÔI 10.10: CHẠM THẺ HDBANK NGAY - HOÀN TIỀN ĐẾN 1,5 TRIỆU ĐỒNG!​ 🏦 Chi tiết ưu đãi:...",
  source: "Alexlv Nguyen",
  sourceType: "Facebook",
  date: "2026-10-10 10:26",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/alexlv.nguyen/posts/pfbid0L6om1a4rq5dTPSWKnLjwqH9dysxnDkdwEvgQvKNYYL9BViMPy8uuLw6Ymg6BsPpxl",
  excerpt: "⚡ NGÀY ĐÔI 10.10: CHẠM THẺ <mark>HDBANK</mark> NGAY - HOÀN TIỀN ĐẾN 1,5 TRIỆU ĐỒNG!​ 🏦 Chi tiết ưu đãi: https://<mark>hdbank</mark>.com.vn/s/nd2026 💥 Ngày đôi tháng 10, thẻ <mark>HDBank</mark> tung ưu đãi liên hoàn cho Bạn thả ga chi tiêu mua sắm:​ - Hoàn 10% (tối đa 500.000 đồng) cho các giao dịch trực tuyến từ 1,5 triệu đồng sớm nhất.​ - Hoàn thêm 01 triệu đồng cho 05 khách hàng có tổng...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 600,
  title: "Duyệt nhanh 25M cho anh khách hàng cũ của HDSAISON ạ. Nhắn em để được hướng dẫn làm hồ sơ online...",
  source: "@_ng1420",
  sourceType: "Threads",
  date: "2026-10-10 10:03",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@_ng1420/post/DeTEo-OkZma",
  excerpt: "🎉🎉Duyệt nhanh 25M cho anh khách hàng cũ của <mark>HDSAISON</mark> ạ. Nhắn em để được hướng dẫn làm hồ sơ online và hỗ trợ duyệt nhanh ạ ❤️ 25tr: CCCD+BLX",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 601,
  title: "Trả góp xe máy giữ ngay cà vẹt gốc – Đăng ký liền tay tại các điểm giới thiệu dịch vụ mà HD...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-10 09:17",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeS_cgUj_yJ",
  excerpt: "📍 Trả góp xe máy giữ ngay cà vẹt gốc – Đăng ký liền tay tại các điểm giới thiệu dịch vụ mà <mark>HD SAISON</mark> liên kết: https://www.<mark>hdsaison</mark>.com.vn/.../tra-gop-xe-may-dang-ky... 📍 Tra cứu Điểm dịch vụ tại: https://www.<mark>hdsaison</mark>.com.vn/vn/dai-ly.html",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 602,
  title: "Top 5 mã cổ phiếu nóng nhất trong tuần: ACV, BCM, HDB, SHS, VPB - Dòng tiền phân hóa, tâm điểm...",
  source: "Tin Tức Chứng Khoán 24h",
  sourceType: "Facebook",
  date: "2026-10-10 09:11",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/2843741559335920/",
  excerpt: "Top 5 mã cổ phiếu nóng nhất trong tuần: ACV, BCM, <mark>HDB</mark>, SHS, VPB - Dòng tiền phân hóa, tâm điểm nhóm Blue-chips Thị trường chứng khoán Việt Nam vừa trải qua những phiên giao dịch đầy biến động với áp lực điều chỉnh hiện hữu. Trong khi chỉ số VN-Index nỗ lực kiểm định các vùng hỗ trợ quan trọng, dòng tiền bắt đầu có sự phân hóa rõ nét, tập trung vào nhóm...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 603,
  title: "Danh hiệu “Ngân hàng Bán lẻ tốt nhất châu Á” lần đầu tiên được trao cho một ngân hàng Việt Nam...",
  source: "Trương Huy",
  sourceType: "Facebook",
  date: "2026-10-10 07:27",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/ImMinHy2810/posts/pfbid02HzP5RA7LhKgGfb8dFwfAK65fsDEbTPAGfpDZkods8FbXfbZsz9UBk2q3XHQXMHpcl",
  excerpt: "...âu hơn trong đời sống hằng ngày của khách hàng. Đây là dấu ấn tiêu biểu trong chiến lược bán lẻ của <mark>HDBank</mark>, bên cạnh quy mô, sức mạnh hệ sinh thái, độ phủ thị trường - những yếu tố góp phần đưa <mark>HDBank</mark> trở thành ngân hàng Việt Nam đầu tiên nhận danh hiệu “Ngân hàng Bán lẻ tốt nhất châu Á 2026” (Asia’s Best Retail Bank) do Tạp chí tài chính quốc tế...",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 604,
  title: "CHÀO THÁNG 10 - THÁNG TÔN VINH PHỤ NỮ VIỆT NAM🌷 💥 BẢN LĨNH NỮ CHỦ – BỨT PHÁ KINH DOANH CÙNG...",
  source: "HDBank Hà Nam",
  sourceType: "Facebook Fanpage",
  date: "2026-10-10 07:16",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hanam.co/posts/pfbid0TBSJMbsTVvKPuWxRTMwvTTFkn86Kj8dCWiTqRJCYgWdZCsAQ7RCQ1EMrJ21yjz2Tl",
  excerpt: "🌷CHÀO THÁNG 10 - THÁNG TÔN VINH PHỤ NỮ VIỆT NAM🌷 💥 BẢN LĨNH NỮ CHỦ – BỨT PHÁ KINH DOANH CÙNG <mark>HDBANK</mark>! 💥 Bứt phá doanh thu cùng gói ưu đãi cực khủng từ <mark>HDBANK</mark> HÀ NAM – Giải pháp tài chính toàn diện dành riêng cho các Nữ chủ doanh nghiệp! ✨ ƯU ĐÃI ĐẶC QUYỀN: 💰 Hạn mức vốn lưu động: Lên đến 5 TỶ VNĐ 📉 Lãi suất siêu ưu đãi: Chỉ từ 7.8%/năm ⏱️ Kỳ hạn...",
  engagement: {
   reactions: 11,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 605,
  title: "Shb 9,2 hdbank 9,1 Pvcombank 9,6 Ncb 9,4 vikki 9,4",
  source: "@ayami_9206",
  sourceType: "Threads",
  date: "2026-10-10 01:48",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@ayami_9206/post/DeSMEvvE_P6",
  excerpt: "Shb 9,2 <mark>hdbank</mark> 9,1 Pvcombank 9,6 Ncb 9,4 <mark>vikki</mark> 9,4",
  engagement: {
   reactions: 4,
   shares: 1,
   comments: 1
  }
 },
 {
  id: 606,
  title: "Nỗ lực chống gian lận tài chính tiêu dùng",
  source: "Báo Nhân Dân",
  sourceType: "Báo chí",
  date: "2026-10-10 00:34",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://nhandan.vn/no-luc-chong-gian-lan-tai-chinh-tieu-dung-post994193.html",
  excerpt: "Từ kiểm soát nhiều đến kiểm soát đúng Ông Nguyễn Đình Đức, Chủ nhiệm Câu lạc bộ Tài chính Tiêu dùng, Phó Tổng Giám đốc <mark>HD SAISON</mark> ví đặc thù của ngành là phải giải đồng thời bài toán “4 nhất”: Đưa nguồn vốn đến gần khách hàng nhanh nhất, thẩm định và phê duyệt nhanh nhất, giải ngân nhanh nhất, nhưng vẫn phải kiểm soát rủi ro tốt nhất."
 },
 {
  id: 607,
  title: "HDBANK 5 NĂM LIÊN TIẾP DẪN ĐẦU TOP DOANH NGHIỆP ĐƯỢC YÊU THÍCH NGÀNH TÀI CHÍNH - NGÂN HÀNG -...",
  source: "Trương Nguyễn Uyên Châu",
  sourceType: "Facebook",
  date: "2026-10-09 22:44",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/uyen.chau/posts/pfbid0dAoBZzNxLXVB7CGzKriVL5nMAcRtKrqJKCrGMeNgG2ttdyEv5C22RhZjg5guhvA9l",
  excerpt: "🏆 <mark>HDBANK</mark> 5 NĂM LIÊN TIẾP DẪN ĐẦU TOP DOANH NGHIỆP ĐƯỢC YÊU THÍCH NGÀNH TÀI CHÍNH - NGÂN HÀNG - CHỨNG KHOÁN🥇",
  engagement: {
   reactions: 165,
   shares: 0,
   comments: 13
  }
 },
 {
  id: 608,
  title: "Lớn rồi là hết mê Ngày Xửa Ngày Xưa ✅ Gặp nghệ sĩ Hoàng Trinh là cả trời tuổi thơ ùa về 💜 Trích...",
  source: "Ngân hàng Số Vikki",
  sourceType: "Facebook Fanpage",
  date: "2026-10-09 21:30",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/1124645920248557/",
  excerpt: "...gày Xửa Ngày Xưa 37 khiến ai cũng háo hức, vui tươi. Đi ngân hàng mà vui quá trời vui! Ngân hàng Số <mark>Vikki</mark> vinh dự nhận giải thưởng Ngân hàng số Tiết kiệm Tốt nhất 2026 do Viện Nghiên cứu Kinh tế Châu Á trao tặng. <mark>Vikki</mark> <mark>Vikki</mark>DigitalBank NganhangTietkiemTotnhat",
  engagement: {
   reactions: 1463,
   shares: 989,
   comments: 1134
  }
 },
 {
  id: 609,
  title: "Chúc mừng sinh nhật HDBank Sơn La ❤️ ILoveHDBank",
  source: "Chi Phạm",
  sourceType: "Facebook",
  date: "2026-10-09 21:29",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/chi.pham.587/posts/pfbid02eNoK3SdE9jCaASCgB1gNorWQJ15oYwanyC7FoASBnx6U2xEmsserkztTAD2sYMwCl",
  excerpt: "Chúc mừng sinh nhật <mark>HDBank</mark> Sơn La ❤️ ILove<mark>HDBank</mark>",
  engagement: {
   reactions: 79,
   shares: 0,
   comments: 7
  }
 },
 {
  id: 610,
  title: "LÃI SUẤT VAY MUA NHÀ THÁNG 10/2026 Đừng chỉ nhìn lãi suất ưu đãi! Một số mức lãi suất tham khảo:...",
  source: "@dzuidze68",
  sourceType: "Threads",
  date: "2026-10-09 21:17",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dzuidze68/post/DeRtBqwj6UV",
  excerpt: "...V: từ 7,29%/năm Woori Bank: từ 9,3%/năm Vietcombank: từ 9,9%/năm VIB: từ 9,5%/năm MSB: từ 10,1%/năm <mark>HDBank</mark>: từ 10,3%/năm Trước khi vay, nhớ hỏi 3 điều: 1. Lãi suất sau ưu đãi? 2. Phí phạt trả nợ trước hạn? 3. Khả năng trả góp khi lãi suất tăng? Mua được nhà là một chuyện, giữ vững dòng tiền mới là điều quan trọng! Anh chị đang tìm mua nhà TP.HCM?",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 4
  }
 },
 {
  id: 611,
  title: "HDBank",
  source: "Nhi Ho",
  sourceType: "Facebook",
  date: "2026-10-09 20:14",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nhi.ho.7568/posts/pfbid05H73aAnzhsJjTfKpH9dRrKUpwJVBKup5vNTJ6uB6uKcvPS8NKhEQGFRKexiyuhEql",
  excerpt: "<mark>HDBank</mark>",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 612,
  title: "3 Cổ phiếu Bank mạnh nhất thời điểm hiện tại đã vượt đỉnh vượt nền VPB, MSB, HDB Liệu TCB có trờ...",
  source: "Minh Hoàn Vsa",
  sourceType: "Facebook Group",
  date: "2026-10-09 19:51",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/1644213615912994/posts/2940194019648274/",
  excerpt: "3 Cổ phiếu Bank mạnh nhất thời điểm hiện tại đã vượt đỉnh vượt nền VPB, MSB, <mark>HDB</mark> Liệu TCB có trờ thành cổ phiếu thứ 4 ?",
  engagement: {
   reactions: 24,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 613,
  title: "Hội Nông dân xã Tân Biên tổ chức về nguồn kỷ niệm 96 năm Ngày thành lập Hội Nông dân Việt Nam...",
  source: "Trang thông tin xã Tân Biên, tỉnh Tây Ninh",
  sourceType: "Facebook",
  date: "2026-10-09 17:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/tanbientn/posts/pfbid04reBpmjUkTWUoNNfQNedn6tGa1gmG7aTxfUCqLSMsoi1xMyRdcYYKJm8axmRJTcml",
  excerpt: "...ự chương trình có ông Võ Văn Tịnh – Chủ tịch Hội Nông dân xã Tân Biên; ông Mai Công Hiếu – Giám đốc <mark>HDBank</mark> Phòng giao dịch Xa Mát. Tại chương trình, đoàn đã tổ chức dâng hương tại Nhà bia tưởng niệm Hội Nông dân, thể hiện lòng tri ân, tưởng nhớ các thế hệ đi trước, đồng thời góp phần giáo dục truyền thống, khơi dậy niềm tự hào về chặng đường 96 năm...",
  engagement: {
   reactions: 42,
   shares: 5,
   comments: 1
  }
 },
 {
  id: 614,
  title: "Ngày đôi 10/10, deal hời ê hề duy nhất khi gửi Tiết kiệm Vikki. Nhập VIKKINGAYDOI10, gửi tiết...",
  source: "Ngân hàng Số Vikki",
  sourceType: "Facebook Fanpage",
  date: "2026-10-09 16:05",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/2020276861985574/",
  excerpt: "🔥 Ngày đôi 10/10, deal hời ê hề duy nhất khi gửi Tiết kiệm <mark>Vikki</mark>. Nhập <mark>VIKKI</mark>NGAYDOI10, gửi tiết kiệm cộng thêm 2,2%/năm chỉ từ 20 triệu đồng, kỳ hạn 6–13 tháng. Khám phá ngay kho mã ưu đãi cùng <mark>Vikki</mark>: https://<mark>vikkibank</mark>.vn/ma-lai-suat-tiet-kiem-moi-nhat/ ⏰ Giờ VÀNG sắp điểm từ 17h59 09/10/2026 đến 17h59 10/10/2026, đừng bỏ lỡ ưu đãi hấp dẫn khi gửi Tiết...",
  engagement: {
   reactions: 1431,
   shares: 1058,
   comments: 1182
  }
 },
 {
  id: 615,
  title: "Một ca phẫu thuật căng thẳng vừa được tiến hành!🚨 Bước tới - Tiền vào - Nhận ưu đãi tại:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-09 16:02",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeRI53DDv6F",
  excerpt: "Một ca phẫu thuật căng thẳng vừa được tiến hành!🚨 Bước tới - Tiền vào - Nhận ưu đãi tại: https://www.<mark>hdsaison</mark>.com.vn/vn/buoc-toi-tien-vao-vay-den-30-trieu-don-tron-uu-dai.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 616,
  title: "LH 0917542483 Uyên HD SAISON- không mất phí CCCD: 15🍠 Bằng Lái : 25🍠 BHYT cty cấp : 30-50🍠...",
  source: "@f_uyen53",
  sourceType: "Threads",
  date: "2026-10-09 15:12",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@f_uyen53/post/DeRDXELE0f3",
  excerpt: "LH 0917542483 Uyên <mark>HD SAISON</mark>- không mất phí CCCD: 15🍠 Bằng Lái : 25🍠 BHYT cty cấp : 30-50🍠 Sinh Viên : 8🍠 GPKD : 40🍠 KH cũ: 46-58-72🍠 KHÔNG NẬU XỚ-CHÚ Ý Khách mới từ 21 tuổi - khách cũ từ 18 tuối",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 617,
  title: "Dạ anh Triết ơi, hihihi 😀 , em đang ngồi uống nước ngọt ở Lotteria nà anh … em mới đi lấy thẻ...",
  source: "Phan Thị Bích Ngọc",
  sourceType: "Facebook",
  date: "2026-10-09 15:10",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/ptbngoc/posts/pfbid0yPbz5CqaG88XzsW8tNcJP87oDETCLivnHpDmwgQHeCrhC9yyD8FVkWkZKqrPDr5Bl",
  excerpt: "... em có sử dụng dịch vụ của Ngân hàng Vietcombank, Eximbank, TPBank, VietinBank, MB Bank, Sacombank, <mark>HDBank</mark>, Techcombank, BIDV, Agribank mà giờ em chỉ còn sử dụng thẻ của ACB và VIB vì khả năng tài chính của em có giới hạn mà em thấy mỗi Ngân hàng có một phong cách riêng ạ … cả nhà hãy như Ngọc đi làm thẻ ATM để tiện cho việc thanh toán không tiền mặt,...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 618,
  title: "SWANBAY – SỞ HỮU NHÀ MƠ, TÀI CHÍNH NHẸ NHÀNG CÙNG HDBANK Bạn đang quan tâm SWANBAY nhưng còn cân...",
  source: "Quang Trung Lê",
  sourceType: "Facebook Group",
  date: "2026-10-09 14:49",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/SwanPark/posts/28631910163130992/",
  excerpt: "🏡 SWANBAY – SỞ HỮU NHÀ MƠ, TÀI CHÍNH NHẸ NHÀNG CÙNG <mark>HDBANK</mark> Bạn đang quan tâm SWANBAY nhưng còn cân đối nguồn vốn? <mark>HDBank</mark> Vạn Hạnh hỗ trợ giải pháp vay với chính sách hấp dẫn: ✨ Lãi suất từ 10%/năm – cố định 12 tháng ✨ Vay đến 35 năm – giảm áp lực trả nợ ✨ Vay tối đa 70% giá trị HĐMB ✨ Ân hạn gốc tối đa 24 tháng ✨ Từ năm thứ 4: miễn phí trả nợ trước hạn...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 619,
  title: "Đón chờ chương trình Livestream gửi tiết kiệm đầu tiên trên TikTok của HDBank Tam Phước vào lúc...",
  source: "HDBank Tam Phước",
  sourceType: "Facebook Fanpage",
  date: "2026-10-09 14:24",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/3635408019940438/",
  excerpt: "Đón chờ chương trình Livestream gửi tiết kiệm đầu tiên trên TikTok của <mark>HDBank</mark> Tam Phước vào lúc 11h ngày 10/10/2026. Quý khách hàng hãy nhanh tay chuẩn bị gửi tiết kiệm để được ưu đãi lãi suất và các giải thưởng hấp dẫn nhé.",
  engagement: {
   reactions: 19,
   shares: 0,
   comments: 13
  }
 },
 {
  id: 620,
  title: "Top 1 uy tín anh nha👍👍 HD SAISON HỖ TRỢ TƯ VẤN NHANH ​CCCD (21+ tuổi) ➔ 15 tr ​CCCD + GPLX ➔...",
  source: "@conghdss",
  sourceType: "Threads",
  date: "2026-10-09 14:16",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@conghdss/post/DeQ83XIEjKT",
  excerpt: "Top 1 uy tín anh nha👍👍 <mark>HD SAISON</mark> HỖ TRỢ TƯ VẤN NHANH ​CCCD (21+ tuổi) ➔ 15 tr ​CCCD + GPLX ➔ 25 tr ​CCCD + GPKD ➔ 40 tr ​CCCD + BHYT + GPLX ➔ 50 tr Tư vấn: 0931 121 696 (za/lo Công)",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 621,
  title: "Woori Bank: 9,3%/năm trong 12 tháng; 9,8%/năm trong 24 tháng. VIB: 9,5%/năm trong 6 tháng;...",
  source: "@dzuidze68",
  sourceType: "Threads",
  date: "2026-10-09 13:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dzuidze68/post/DeQ33q_jzQY",
  excerpt: "Woori Bank: 9,3%/năm trong 12 tháng; 9,8%/năm trong 24 tháng. VIB: 9,5%/năm trong 6 tháng; 10,5%/năm trong 12 tháng. <mark>HDBank</mark>: 10,3%/năm trong 12 tháng; 11,3%/năm trong 24 tháng. Vietcombank: 9,9%/năm trong 6 tháng; 11,3%/năm trong 12 tháng. Lưu ý: Đây là số liệu tham khảo theo bảng lãi suất trong ảnh, không phải báo giá được ngân hàng xác nhận. Điều kiện...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 622,
  title: "Ví momo 100tr 36th đóng 11th 5tr3/th còn 95tr Vpbank thẻ chưa đóng 40tr Hdbank 30tr 24th đóng...",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-09 13:08",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/519234795850849/posts/1738437127263937/",
  excerpt: "Ví momo 100tr 36th đóng 11th 5tr3/th còn 95tr Vpbank thẻ chưa đóng 40tr <mark>Hdbank</mark> 30tr 24th đóng 7th 1tr7/th còn 25tr Fasmony 15tr 12th đóng 7th 1tr8/th còn 8tr Tinvay 15tr 9th đóng 5th 2tr2/th 8tr Care 53tr 48t đóng 7t 2tr3/th còn 50tr H e hết khả năng gồng gánh họ gọi điện cho người thân dù k có lưu trong danh bạ và gửi giấy về nhà củ Cho e lời khuyên hay...",
  engagement: {
   reactions: 17,
   shares: 0,
   comments: 39
  }
 },
 {
  id: 623,
  title: "HDBank Gia Lâm 🔥 TIỀN NHÀN RỖI – ĐỪNG ĐỂ “NẰM IM” NỮA! 🔥 💥 HDBank – LÃI SUẤT TIẾT KIỆM LÊN...",
  source: "Hà Lạnh",
  sourceType: "Facebook Group",
  date: "2026-10-09 12:30",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/guitietkiemnganhang/posts/4453535968196413/",
  excerpt: "<mark>HDBank</mark> Gia Lâm 🔥 TIỀN NHÀN RỖI – ĐỪNG ĐỂ “NẰM IM” NỮA! 🔥 💥 <mark>HDBank</mark> – LÃI SUẤT TIẾT KIỆM LÊN ĐẾN 9,42%/NĂM 📲 ONLINE 🏦 Tại quầy: 111 Ngô Xuân Quảng, Gia Lâm, Hà Nội 🎁 Đặc biệt: Có chương trình quà tặng hấp dẫn 📞 Thu Hà – <mark>HDBank</mark> Gia Lâm ☎️ 0969857974",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 4
  }
 },
 {
  id: 624,
  title: "HDBANK ĐỒNG HÀNH TRÊN CON ĐƯỜNG TRI THỨC​ 🎓 Mỗi học kỳ là một cột mốc mới với những khoản chi...",
  source: "Nhy Nhi",
  sourceType: "Facebook",
  date: "2026-10-09 12:26",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nhy.nguyen.1232/posts/pfbid025garqkoUiAf7Y11z31W1g7xBXSwm7BAJVVyaKxbTDSNBbKpusJPij6Cf7UDfiX4ml",
  excerpt: "<mark>HDBANK</mark> ĐỒNG HÀNH TRÊN CON ĐƯỜNG TRI THỨC​ 🎓 Mỗi học kỳ là một cột mốc mới với những khoản chi không nhỏ: học phí, laptop hay các khóa học nâng cao kỹ năng. ​ Đừng để áp lực tài chính làm gián đoạn hành trình chinh phục tri thức của bạn.​ 📚 <mark>HDBank</mark> đồng hành với sinh viên, mang đến giải pháp vay tiêu dùng cùng chính sách hấp dẫn, giúp bạn an tâm đầu tư...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 625,
  title: "CHẠM NHỊP SỐ - CHỐT QUÀ ĐỈNH MÙA 2: Phiên 7 - Tích lũy trúng vàng, săn quà tặng Nàng 10.10 –...",
  source: "My Nguyễn",
  sourceType: "Facebook",
  date: "2026-10-09 12:24",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/my.nguyen.577225/posts/pfbid02pKs9nLeMfAmSswyZMWZLBnmUgFfXemvfTutTPdzk99iA63bYX1ZdqZzuqVWbfkqQl",
  excerpt: "... chỉ vàng SJC và nhiều bộ quà tặng thiết thực: Túi cói, ly, cốc giữ nhiệt. 👉 Các Đơn vị kinh doanh <mark>HDBank</mark> trên toàn quốc sẽ cùng lên sóng livestream, trực tiếp tư vấn chi tiết đến Quý khách để nhận ưu đãi. 🛍️ CHẠM VNSHOP, GIẢM NỬA GIÁ + Tung bất ngờ mã giảm đến 200.000 đồng, số lượng giới hạn. 👉 Nhiều sản phẩm chính hãng có giá độc quyền, phù hợp...",
  engagement: {
   reactions: 4,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 626,
  title: "Dự báo lợi nhuận ngân hàng quý 3/2026 sẽ có bất ngờ lớn: Vietcombank, VietinBank, MB,...",
  source: "@rubynotrubies",
  sourceType: "Threads",
  date: "2026-10-09 12:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@rubynotrubies/post/DeQtXnADbzi",
  excerpt: "Dự báo lợi nhuận ngân hàng quý 3/2026 sẽ có bất ngờ lớn: Vietcombank, VietinBank, MB, Techcombank, VPBank, <mark>HDBank</mark>,...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 627,
  title: "CHẠM NHỊP SỐ 10/10: CHỈ 1 CHẠM - CHỐT LÃI VÀNG! ​ Dù Quý khách đang xuống phố vui chơi hay tận...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-09 12:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid0FY5h6JbATcLVJ5CPRfTFrsdQVymF3gHugi6nGtSXRbLcAEAeKiPxP9cnHgFn9iQkl",
  excerpt: "📱 CHẠM NHỊP SỐ 10/10: CHỈ 1 CHẠM - CHỐT LÃI VÀNG! ​ Dù Quý khách đang xuống phố vui chơi hay tận hưởng tại nhà - Tiết kiệm Online tại App <mark>HDBank</mark> vẫn sẵn sàng để khoản tiền nhàn rỗi sinh lời tối ưu!​ 🔥 Duy nhất 48h từ ngày đôi 10/10 - 11/10, hưởng ứng Ngày Chuyển đổi số quốc gia, Quý khách hãy gửi tiết kiệm Online với một chạm hiện đại và nhận ưu đãi...",
  engagement: {
   reactions: 952,
   shares: 211,
   comments: 890
  }
 },
 {
  id: 628,
  title: "Huấn luyện sản phẩm Chubb Life cho đội ngũ HD Bank. Lâu lắm rồi mới bước vào ngân hàng, cảm giác...",
  source: "Dolas Tran",
  sourceType: "Facebook",
  date: "2026-10-09 11:38",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/dolas.tran/posts/pfbid02ZfSqtAXLSbTrtuvpR1DCHNvwZYjGU1hEBLBGTXQ8GHSf5ghfaUUmwHXwBt3t6mhtl",
  excerpt: "Huấn luyện sản phẩm Chubb Life cho đội ngũ <mark>HD Bank</mark>. Lâu lắm rồi mới bước vào ngân hàng, cảm giác khi xưa ùa về 🥰🥰🥰 chubblifeVN CBA bancasurance",
  engagement: {
   reactions: 31,
   shares: 1,
   comments: 12
  }
 },
 {
  id: 629,
  title: "Lãi vay mua nhà lên tới 13,2%/năm, nhiều người hoãn kế hoạch mua nhà Lãi suất vay mua nhà tăng...",
  source: "Nguyễn Thanh Tuấn",
  sourceType: "Facebook Group",
  date: "2026-10-09 11:34",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/886129045227487/posts/2573505169823191/",
  excerpt: "...11%. VIB áp dụng 11,1% cho 12 tháng và 12% cho 24 tháng. Một số ngân hàng duy trì mức dưới 10%, gồm <mark>HDBank</mark>, VietBank và Woori Bank. Báo cáo tâm lý người tiêu dùng của Batdongsan.com.vn cho thấy khi lãi suất vượt 7%/năm, người mua bắt đầu thận trọng, nhu cầu vay chững lại. Trên 9%/năm, khả năng chấp nhận rủi ro tài chính giảm rõ rệt, khiến nhiều người...",
  engagement: {
   reactions: 6,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 630,
  title: "HDB: CƠ HỘI BÁN ĐÚNG ĐỈNH DÀI HẠN! GIÁ ĐẮT CHO NHÀ ĐẦU TƯ FOMO HÔM NAY Trong khi đám đông mải...",
  source: "Duc Xoan",
  sourceType: "Facebook",
  date: "2026-10-09 11:29",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/DXchungkhoan/posts/pfbid09EtCRpPuqJiJafHdqTVaGczYNreyJUDN4EZh5o87T89AJ97xjMeCoM4GEdHNfQb5l",
  excerpt: "<mark>HDB</mark>: CƠ HỘI BÁN ĐÚNG ĐỈNH DÀI HẠN! GIÁ ĐẮT CHO NHÀ ĐẦU TƯ FOMO HÔM NAY Trong khi đám đông mải tìm vài phần trăm hiếm hoi cuối cùng, rất nhiều cổ phiếu phía sau có thể còn lao dốc mạnh. MSC tiếp tục cảnh báo: tránh FOMO vào nhịp bull trap của <mark>HDB</mark>. Trên khung tháng, MACD của <mark>HDB</mark> đã cắt xuống, đây là tín hiệu rủi ro. Chúng tôi cho rằng đây là vùng phân phối...",
  engagement: {
   reactions: 7,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 631,
  title: "Chứng khoán ngày 9/10: Khối ngoại bán ròng hơn 9.700 tỷ đồng, VN-Index mất gần 4 điểm",
  source: "Báo Nhân Dân",
  sourceType: "Báo chí",
  date: "2026-10-09 10:41",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://nhandan.vn/chung-khoan-ngay-910-khoi-ngoai-ban-rong-hon-9700-ty-dong-vn-index-mat-gan-4-diem-post994070.html",
  excerpt: "Phiên này, các mã đóng góp tích cực cho chỉ số VN-Index tăng 4,64 điểm gồm: <mark>HDB</mark>, TCB, VPB, VHM, CTG, NVL, MBB, VPL, GEE, VIX. Nhóm cổ phiếu chứng khoán phiên này nghiêng về sắc đỏ có mức giảm 0,17%, chủ yếu từ các mã TCX, VCK, SSI, HCM, CTS, TVS, BMS, VUA, EVS… Chiều ngược lại, các mã tăng gồm VPX, VIX, VND, SHS, DSE, ORS, FTS, BSI, DSC, VDS, AGR, AAS,..."
 },
 {
  id: 632,
  title: "HDBANK KHAI TRƯƠNG 38 ĐIỂM ĐẠI LÝ THANH TOÁN TẠI VNPT CẦN THƠ Ngày 8/10/2026, HDBank phối hợp...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-09 10:03",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid0EvokSqoxbgrgAAHSEUK3CPXm7LNB7pjrtj81mMMkWmUBD4Vxg9vTCiYQHCuAj8F4l",
  excerpt: "<mark>HDBANK</mark> KHAI TRƯƠNG 38 ĐIỂM ĐẠI LÝ THANH TOÁN TẠI VNPT CẦN THƠ Ngày 8/10/2026, <mark>HDBank</mark> phối hợp cùng VNPT Cần Thơ khai trương 38 điểm Đại lý thanh toán trên địa bàn thành phố, mở thêm lựa chọn giao dịch thuận tiện cho người dân và hộ kinh doanh tại trung tâm Đồng bằng sông Cửu Long. Việc mở rộng tại Cần Thơ tiếp nối quá trình hợp tác giữa <mark>HDBank</mark> và Tổng...",
  engagement: {
   reactions: 1063,
   shares: 222,
   comments: 988
  }
 },
 {
  id: 633,
  title: "GO GLOBAL BẮC NINH 2026: \"NÂNG CAO NĂNG LỰC - KẾT NỐI CHUỖI - PHÁT TRIỂN THỊ TRƯỜNG\" Ngày 10/10,...",
  source: "Dân trí",
  sourceType: "Facebook Fanpage",
  date: "2026-10-09 09:59",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/baodantridientu/posts/pfbid026SNqunp19b17G5PAL98TAn46Uwj2qLCAJDGg6ziAZAPJ7V1DiFBMsf9VFJsopGhLl",
  excerpt: "... Ninh | 🗓️ 10/10/2026 GoGlobalBacNinh2026 DienDanESGVietNam2026 DanTri DoanhNghiepViet BacNinh ESG <mark>HDBank</mark>",
  engagement: {
   reactions: 7,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 634,
  title: "Xã hình DNF HDbank cần giờ năm 2026 🫠 - Marathon đơn giản là vậy , chỉ là những bài chạy nhàm...",
  source: "Ngọc Giàu Trần",
  sourceType: "Facebook",
  date: "2026-10-09 09:43",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/giau.tranngoc.1/posts/pfbid0srXUdMvArWDAhzi5uMXuTAJJcy3MaKV34VwVqakixxMiDu7g6HdQLyhzsUxMfhrGl",
  excerpt: "- Xã hình DNF <mark>HDbank</mark> cần giờ năm 2026 🫠 - Marathon đơn giản là vậy , chỉ là những bài chạy nhàm chán hằng ngày , mỗi ngày lập đi lập lại những con đường qen thuộc . Nhưng nếu k có sự lặp đi lặp lại đó thì chúng ta sẽ DNF 😮‍💨 Giàumarathon chaybo marathon UDAQUAGEL",
  engagement: {
   reactions: 43,
   shares: 1,
   comments: 19
  }
 },
 {
  id: 635,
  title: "Bốn năm đại học, con sẽ lớn lên theo những cách ba mẹ không thể đoán trước. Mỗi năm một thay...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-09 09:03",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeQZHDDHZ51",
  excerpt: "Bốn năm đại học, con sẽ lớn lên theo những cách ba mẹ không thể đoán trước. Mỗi năm một thay đổi, mỗi chặng lại có những điều con cần khác nhau.Vì vậy, gói vay Học phí cho con của <mark>HD SAISON</mark> đồng hành cùng ba mẹ xuyên suốt 4 năm đại học, với lãi suất ưu đãi hơn qua mỗi năm, để mỗi chặng con trưởng thành đều có sự chuẩn bị phù hợp phía sau của ba mẹ 💙",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 636,
  title: "Đầu tư cho tương lai: 🌐 Website: https://credit4tomorrow.hdsaison.com.vn 📌 Tải app HD SAISON:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-09 09:03",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeQZHC8HdDH",
  excerpt: "🎓 Đầu tư cho tương lai: 🌐 Website: https://credit4tomorrow.<mark>hdsaison</mark>.com.vn 📌 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 📌 Hoặc liên hệ với nhân viên <mark>HD SAISON</mark> để được hỗ trợ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 637,
  title: "Đảo chiều thất bại vì trụ kém đồng thuận, tiền vẫn hoạt động tốt ở cổ phiếu vừa và nhỏ",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-09 08:33",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/dao-chieu-that-bai-vi-tru-kem-dong-thuan-tien-van-hoat-dong-tot-o-co-phieu-vua-va-nho.htm",
  excerpt: "Tuy vốn hóa của <mark>HDB</mark> hạn chế nhưng biên độ giá mạnh cũng khiến cổ phiếu này vươn lên vị trí số 1 trong nhóm dẫn dắt, dù chỉ hơn 0,9 điểm. Ở phía tăng cũng không ít cổ phiếu mạnh, trong 130 mã xanh có 63 mã tăng hơn 1%, số đạt thanh khoản trên trăm tỷ đồng khá nhiều: NVL tăng 6,83%, <mark>HDB</mark> tăng 3,94%, VIX tăng 3,1%, TCB tăng 1,41%, VPB tăng 1,49%, CTG tăng..."
 },
 {
  id: 638,
  title: "Minhf muốn mở thẻ HD bank để liên kết với Skyjoy của Vietjet, có bạn nào tư vấn mở thẻ giúp mình...",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-09 08:24",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1415833137368145/",
  excerpt: "Minhf muốn mở thẻ <mark>HD bank</mark> để liên kết với Skyjoy của Vietjet, có bạn nào tư vấn mở thẻ giúp mình với ạ",
  engagement: {
   reactions: 9,
   shares: 0,
   comments: 23
  }
 },
 {
  id: 639,
  title: "TÍNH NĂNG MỚI TRÊN APP HDBANK - CẢNH BÁO TÀI KHOẢN NHẬN TIỀN CÓ DẤU HIỆU LỪA ĐẢO!​ Để bảo vệ tài...",
  source: "HDBank Dầu Giây",
  sourceType: "Facebook Fanpage",
  date: "2026-10-09 08:08",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/HDBDauGiay/posts/pfbid0cV3Wnz1taBpTBBFLaUUgpf48x31g1zxPumRDC3q1UykmT5EGFfTrP5UCD9PWb68Fl",
  excerpt: "🚨 TÍNH NĂNG MỚI TRÊN APP <mark>HDBANK</mark> - CẢNH BÁO TÀI KHOẢN NHẬN TIỀN CÓ DẤU HIỆU LỪA ĐẢO!​ Để bảo vệ tài sản của Quý khách trước các thủ đoạn lừa đảo và giả mạo ngày càng tinh vi, <mark>HDBank</mark> bắt tay cùng NAPAS chính thức ra mắt tính năng 'Cảnh báo giao dịch rủi ro cao' ngay trên ứng dụng <mark>HDBank</mark>! ​ 🔍 Nhận diện rủi ro tự động: Ngay khi nhập thông tin tài khoản...",
  engagement: {
   reactions: 0,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 640,
  title: "Một mùa hè gửi tiết kiệm, một đêm Trung thu nhận 16 lượng vàng! ✨ - Khách hàng Mã Tiếp Ngân...",
  source: "VSA Index",
  sourceType: "Facebook",
  date: "2026-10-09 08:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/vsa.index/posts/pfbid0oFcj43LyvDc6H6RQv3baF1Mwi1wXfx4szpj8RgMrAAZ5tYvxwUzQwgjfkZFQqizJl",
  excerpt: "🌕 Một mùa hè gửi tiết kiệm, một đêm Trung thu nhận 16 lượng vàng! ✨ - Khách hàng Mã Tiếp Ngân (<mark>HDBank</mark> Kiên Giang) đã xuất sắc trúng giải Đặc biệt 16 lượng vàng SJC. - Tổng kết chương trình trao tay 25 khách hàng 26 lượng vàng và 3 chuyến du lịch Hàn Quốc. - Khoản tiết kiệm nhỏ nay nhân đôi niềm vui, trọn vẹn mùa trăng đoàn viên. Cùng <mark>HDBank</mark> vun đắp tài...",
  engagement: {
   reactions: 13,
   shares: 0,
   comments: 12
  }
 },
 {
  id: 641,
  title: "Vikki Bank - Ngân Hàng Số xịn nhất trong lĩnh vực Bank. Nhắn anh nhé 0384842474 ( anh Khôi )",
  source: "@davidtietkiem",
  sourceType: "Threads",
  date: "2026-10-09 07:40",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@davidtietkiem/post/DeQPmbIk4mW",
  excerpt: "<mark>Vikki Bank</mark> - Ngân Hàng Số xịn nhất trong lĩnh vực Bank. Nhắn anh nhé 0384842474 ( anh Khôi )",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 642,
  title: "Từ Vikki Digital Bank , đến VikKafe, và bây giờ là Vikki read. Tất cả là các mảng không gian và...",
  source: "@nguyen_huong201",
  sourceType: "Threads",
  date: "2026-10-09 06:34",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@nguyen_huong201/post/DeQIBBkgQlD",
  excerpt: "✌️Từ <mark>Vikki</mark> Digital Bank , đến VikKafe, và bây giờ là <mark>Vikki</mark> read. Tất cả là các mảng không gian và tiện ích tại <mark>Vikki</mark>. ❤️ ✌️Cùng nhau chờ đón <mark>Vikki</mark> Read và cùng nhau lan tỏa niềm vui đọc sách 📚☕️❤️ ✌️Tự hào <mark>Vikki Bank</mark> – tự hào lan tỏa văn hóa đọc mỗi ngày , tự hào, tự hào!❤️ ToiYeu<mark>Vikki</mark> <mark>Vikki</mark> NganhangTietkiemTotnhat <mark>Vikki</mark>DigitalBank <mark>Vikki</mark>Go",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 643,
  title: "Thanh khoản bất ngờ tăng mạnh, SHB và HDB là tâm điểm",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-09 05:08",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/thanh-khoan-bat-ngo-tang-manh-shb-va-hdb-la-tam-diem.htm",
  excerpt: "Mức tăng thanh khoản này thực ra không “chất lượng”: SHB và <mark>HDB</mark> đang có mức tập trung giao dịch tới 22,4% cả sàn HoSE và gấp 6,3 lần mức giao dịch sáng hôm qua. Dĩ nhiên lượng tiền lớn đổ vào SHB và <mark>HDB</mark> cũng tạo biến động đáng chú ý."
 },
 {
  id: 644,
  title: "Lãi suất ngân hàng hôm nay 9/10/2026: Kỳ hạn 6 tháng ưu đãi tới 8,8%/năm",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-09 02:13",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-9-10-2026-ky-han-6-thang-len-8-8-nam-2563093.html",
  excerpt: "Lãi suất ngân hàng hôm nay, 9/10/2026, ngân hàng ngoại đẩy lãi suất huy động kỳ hạn 6 tháng lên đến 8,8%/năm, cao hơn nhiều so với lãi suất tiền gửi cùng kỳ hạn tại hầu hết ngân hàng trong nước."
 },
 {
  id: 645,
  title: "Tín dụng tăng mạnh, cổ phiếu ngân hàng vẫn chìm trong sắc đỏ",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-08 23:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/tin-dung-tang-manh-co-phieu-ngan-hang-van-chim-trong-sac-do-2563000.html",
  excerpt: "ACB bị bán ròng gần 2 triệu cổ phiếu, BID hơn 630.000 cổ phiếu, CTG khoảng 570.000 cổ phiếu và <mark>HDB</mark> hơn 4,4 triệu cổ phiếu. <mark>HDBank</mark> được chấp thuận tăng vốn điều lệ tối đa hơn 22.000 tỷ đồng; Techcombank, VPBank và MB đều có kế hoạch phát hành thêm hàng tỷ cổ phiếu theo các phương án khác nhau."
 },
 {
  id: 646,
  title: "HDBank liên hệ em ạ 0942276419",
  source: "@thuha_1129",
  sourceType: "Threads",
  date: "2026-10-08 22:12",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@thuha_1129/post/DePOj0ECfVD",
  excerpt: "<mark>HDBank</mark> liên hệ em ạ 0942276419",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 647,
  title: "Những ngân hàng TMCP tư nhân có thương hiệu lớn và quy mô rộng khắp cũng không nằm ngoài xu...",
  source: "@viethvng",
  sourceType: "Threads",
  date: "2026-10-08 20:15",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@viethvng/post/DePBKY6AVpd",
  excerpt: "Những ngân hàng TMCP tư nhân có thương hiệu lớn và quy mô rộng khắp cũng không nằm ngoài xu hướng này. Khi tại những cái tên <mark>HDBank</mark>, Sacombank, VPBank hay MBBank, lãi suất thế chấp đã vượt lên mức 11-12%, còn lãi suất vay tín chấp thì đã chạm ngưỡng 20% ở 1 số ngân hàng, đây là mức lãi suất cho vay rất cao trong nhiều năm trở lại đây.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 648,
  title: "CÙNG NHÌN LẠI HÀNH TRÌNH NGÀY HỘI GIA ĐÌNH 2026 “Ngày hội Gia đình 2026” tại Hà Nội đã ghi dấu...",
  source: "HDbank Hai Bà Trưng",
  sourceType: "Facebook Fanpage",
  date: "2026-10-08 19:42",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbank.hai.ba.trung/posts/pfbid02rcEBjyPCqp2FzaHRNBZC2zh666pj6S4jk4hh9rsQRm5Ne3jWZCRtPC8R7hDWmxv3l",
  excerpt: "...nụ cười, những cái ôm và khoảnh khắc sum vầy đáng nhớ của Quý Khách hàng Đặc biệt cùng gia đình. 💙 <mark>HDBank</mark> Priority trân trọng cảm ơn Quý Khách hàng Đặc biệt và người thân đã dành trọn một ngày để kết nối, sẻ chia và lưu giữ những kỷ niệm đẹp tại ngày hội. Mỗi khoảnh khắc được lưu giữ cũng thêm một lần nhắc nhớ về giá trị của sự gắn kết và yêu thương,...",
  engagement: {
   reactions: 17,
   shares: 0,
   comments: 10
  }
 },
 {
  id: 649,
  title: "MỞ TÀI KHOẢN 3 PHÚT - HÚT TRỌN COMBO 200K! 🎁 Chỉ 3 phút mở tài khoản số trên App HDBank, bạn bỏ...",
  source: "Thái Nguyễn",
  sourceType: "Facebook",
  date: "2026-10-08 19:38",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/thai.nguyen.37625/posts/pfbid021ymVRsbgmZn1v8a8Noxt2XCMiFbSnYhuvCbKDbj8N51dFDs9KBgeb39G2jao1xLgl",
  excerpt: "MỞ TÀI KHOẢN 3 PHÚT - HÚT TRỌN COMBO 200K! 🎁 Chỉ 3 phút mở tài khoản số trên App <mark>HDBank</mark>, bạn bỏ túi ngay combo ưu đãi giảm 200K cực chất: 🍿 Giảm 50% (Tối đa 100K): Vé xem phim, thỏa sức cày bom tấn rạp; Taxi VNPAY, vi vu thảnh thơi, không lo về giá 🚕 Giảm thêm 50% (Tối đa 50K): Vé xem phim, Taxi VNPAY (mã hiển thị ngay sau khi sử dụng thành công mã...",
  engagement: {
   reactions: 4,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 650,
  title: "HD SAISON – tìm thêm những đồng đội mới cho team! P/s: Có người quen đang tìm việc hoặc đang...",
  source: "@sophia_nhu",
  sourceType: "Threads",
  date: "2026-10-08 19:31",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@sophia_nhu/post/DeO8H4GkmfK",
  excerpt: "💙 <mark>HD SAISON</mark> – tìm thêm những đồng đội mới cho team! P/s: Có người quen đang tìm việc hoặc đang muốn tìm cơ hội quản lý mới thì tag nhẹ vào đây nha. 👀",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 651,
  title: "HDBank thông báo chính sách lãi suất đến Quý Khách hàng vay vốn ✅ Tỷ lệ vay 75% giá trị tài sản...",
  source: "Lệ Nhiên",
  sourceType: "Facebook Group",
  date: "2026-10-08 19:26",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/671403327729865/posts/1636606374542884/",
  excerpt: "<mark>HDBank</mark> thông báo chính sách lãi suất đến Quý Khách hàng vay vốn ✅ Tỷ lệ vay 75% giá trị tài sản ✅ Chứng minh nguồn thu đơn giản ✅ Thủ tục nhanh gọn ✅ Có hoa hồng cho đối tác giới thiệu ☎️ Liên hệ tư vấn: 0327247751 - Lệ Nhiên (24/24)",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 652,
  title: "MUA SWANBAY PHÂN KHU 4,5,6,8 – VAY HDBANK, LÃI SUẤT CHỈ TỪ 10%/NĂM ✅ Lãi suất chỉ từ 10%/năm (cố...",
  source: "Diem Nguyen",
  sourceType: "Facebook Group",
  date: "2026-10-08 18:08",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/7277135692412030/posts/28410621158636843/",
  excerpt: "🏡 MUA SWANBAY PHÂN KHU 4,5,6,8 – VAY <mark>HDBANK</mark>, LÃI SUẤT CHỈ TỪ 10%/NĂM ✅ Lãi suất chỉ từ 10%/năm (cố định 12 tháng) ✅ Thời hạn vay lên đến 35 năm ✅ Ân hạn gốc tối đa 24 tháng ✅ Miễn phí trả nợ trước hạn từ năm thứ 4 ✅ Hồ sơ đơn giản – Thẩm định nhanh – Giải ngân nhanh 📞 Liên hệ tư vấn: Thuý Diễm 0685 680 453",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 653,
  title: "hdbank financenews virel",
  source: "@vineet.kumar.7731247",
  sourceType: "Threads",
  date: "2026-10-08 17:55",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@vineet.kumar.7731247/post/DeOxIBlEZzV",
  excerpt: "<mark>hdbank</mark> financenews virel",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 654,
  title: "BẢN LĨNH NỮ CHỦ – BỨT PHÁ KINH DOANH CÙNG HDBANK 💼✨ Dưới tầm nhìn chiến lược của các nữ doanh...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-08 17:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid0BgkHFrA3wtqkwa7kS6Ab6SP9mBw4bJTVE1o3r5VCpqkyUcJNFDHBpnvQSZ2GrvG7l",
  excerpt: "BẢN LĨNH NỮ CHỦ – BỨT PHÁ KINH DOANH CÙNG <mark>HDBANK</mark> 💼✨ Dưới tầm nhìn chiến lược của các nữ doanh nhân, mỗi quyết định tài chính đều đòi hỏi sự sắc sảo và tốc độ. Hiểu được điều đó, <mark>HDBank</mark> tự hào đồng hành cùng Phái đẹp thương trường qua gói ưu đãi đặc quyền: 🌟 TÀI TRỢ DOANH NGHIỆP DO PHỤ NỮ LÀM CHỦ 💎 Quy mô lớn: 2.000 tỷ đồng nguồn vốn hỗ trợ chuyên...",
  engagement: {
   reactions: 3002,
   shares: 727,
   comments: 5137
  }
 },
 {
  id: 655,
  title: "Ghé c sẵn nhiều mã nè. 🔥Hổ trợ trả góp qua NH HDBank-Mira-Thẻ Tín Dụng.Sinh Viên Có Thẻ Duyệt...",
  source: "@tieu_nhu68",
  sourceType: "Threads",
  date: "2026-10-08 16:42",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tieu_nhu68/post/DeOowi6E7fR",
  excerpt: "Ghé c sẵn nhiều mã nè. 🔥Hổ trợ trả góp qua NH <mark>HDBank</mark>-Mira-Thẻ Tín Dụng.Sinh Viên Có Thẻ Duyệt Ko Thẩm Định",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 656,
  title: "ĐẶC QUYỀN PHÁI ĐẸP THÁNG 10​ GỬI TIỀN AN TÂM, NHẬN QUÀ TINH TẾ ​ 💝 Ở HDBank, tháng của \"một nửa...",
  source: "Nguyễn Đức Minh",
  sourceType: "Facebook",
  date: "2026-10-08 16:18",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nguyen.uc.minh.550785/posts/pfbid0qJ7LqAsZ3JZpFeLYsk64rYU16ZBGytwhBD8gH5LmSDwvd7HvGeu2CbCoQf2LYxq2l",
  excerpt: "✨ ĐẶC QUYỀN PHÁI ĐẸP THÁNG 10​ GỬI TIỀN AN TÂM, NHẬN QUÀ TINH TẾ ​ 💝 Ở <mark>HDBank</mark>, tháng của \"một nửa thế giới\" có gì?​ Có những món quà được <mark>HDBank</mark> dành riêng cho phái đẹp - như một lời tri ân gửi đến những người phụ nữ luôn xứng đáng được yêu thương và nâng niu.​ 🌸 Trong tháng tôn vinh phái đẹp, <mark>HDBank</mark> triển khai chương trình ưu đãi dành riêng cho Khách...",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 657,
  title: "Anh trai đi săn voucher HD SAISON mà cồng kềnh cỡ này! 🚨😱 Bước tới - Tiền vào - Nhận ưu đãi...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-08 16:05",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeOkfLLDvXG",
  excerpt: "Anh trai đi săn voucher <mark>HD SAISON</mark> mà cồng kềnh cỡ này! 🚨😱 Bước tới - Tiền vào - Nhận ưu đãi tại: https://www.<mark>hdsaison</mark>.com.vn/vn/buoc-toi-tien-vao-vay-den-30-trieu-don-tron-uu-dai.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 658,
  title: "DẪN ĐẦU ĐIỂM CHẠM – ĐIỂM HẸN KẾT NỐI CÙNG VIKKI BANK Mỗi điểm chạm là một cơ hội kết nối. Mỗi...",
  source: "@nguyen_huong201",
  sourceType: "Threads",
  date: "2026-10-08 15:48",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@nguyen_huong201/post/DeOilkNktg1",
  excerpt: "DẪN ĐẦU ĐIỂM CHẠM – ĐIỂM HẸN KẾT NỐI CÙNG <mark>VIKKI BANK</mark> Mỗi điểm chạm là một cơ hội kết nối. Mỗi điểm hẹn là một hành trình đồng hành. <mark>Vikki Bank</mark> không ngừng mở rộng những điểm chạm gần gũi, thuận tiện, kết hợp công nghệ và trải nghiệm để đưa ngân hàng đến gần khách hàng hơn. <mark>Vikki Bank</mark> – Dẫn đầu điểm chạm, kết nối giá trị, đồng hành tương lai. <mark>Vikki</mark>...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 659,
  title: "Toàn bộ 40 mã cổ phiếu leader hiện tại tôi xếp hạng lại được phân loại thành 11 nhóm ngành chính...",
  source: "Ku Lì Trader",
  sourceType: "Facebook",
  date: "2026-10-08 14:47",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/kulitradingvlog/posts/pfbid0VVz3QXLu63sHNW1hEHqi5AXZjPtefMy63DzVEqdP9b4YDeayD6Uiq6xZGczv7Gmyl",
  excerpt: "Toàn bộ 40 mã cổ phiếu leader hiện tại tôi xếp hạng lại được phân loại thành 11 nhóm ngành chính : 1. Dòng Ngân hàng (Banking) - <mark>HDB</mark>, VPB, MSB, NAB. 2. Dòng Dầu khí &amp; Năng lượng (Oil &amp; Gas - Energy) Thượng nguồn &amp; Dịch vụ Kỹ thuật: PVS Hạ nguồn &amp; Phân phối: PLX Vận tải Dầu khí &amp; Hóa chất: PVT, PVP, VTO. Điện / Năng lượng: NT2 3. Dòng Bán lẻ &amp; Phân phối...",
  engagement: {
   reactions: 7,
   shares: 2,
   comments: 0
  }
 },
 {
  id: 660,
  title: "TRÂN TRỌNG CẢM ƠN CÁC NHÀ TÀI TRỢ ĐỒNG HÀNH CÙNG NTTU INNOVATION STARTUP CHALLENGE 2026 Mỗi ý...",
  source: "NIIC - Trung tâm Sáng tạo và Ươm tạo Khởi nghiệp Trường ĐH Nguyễn Tất Thành",
  sourceType: "Facebook",
  date: "2026-10-08 14:29",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/NIIC.NTTU/posts/pfbid0wGrMoQWtmoty3WGx22tAktTLT8t8hXWgi6L852V3z6FppTVbpzjcDNyReN55RZewl",
  excerpt: "...MCP Ngoại thương Việt Nam – Vietcombank Chi nhánh Bình Dương. 🌟 CÁC NHÀ TÀI TRỢ BẠC • Ngân hàng số <mark>Vikki</mark> – Chi nhánh Lê Văn Lương. • CLB Doanh nghiệp NTTU. • Hội tư vấn, đầu tư và phát triển doanh nghiệp số nhỏ và vừa TP.HCM 🌟 CÁC NHÀ TÀI TRỢ ĐỒNG • VPBank – Khối SME Tân Bình. • DROPPI – Công ty TNHH Dandelion Việt Nam. • Công ty Cổ phần Pure...",
  engagement: {
   reactions: 9,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 661,
  title: "THÁNG 10 GÕ CỬA – BẠN ĐÃ DÀNH GÌ CHO CHÍNH MÌNH? ♡ 𓂃 ࣪˖ ִֶָ🌸 Một món quà mình yêu thích? 𓂃 ࣪˖...",
  source: "Nhỏ Nga",
  sourceType: "Facebook",
  date: "2026-10-08 14:29",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nho.tran.14418/posts/pfbid02bdgRjPchMh46VMxAz5erVPutY8XPRnT7sYAYsMHXhzhzihhooNpNDaz5xPrPNeacl",
  excerpt: "...ngày thật chill và thật vui? 𓂃 ࣪˖ ִֶָ💙 Hay đơn giản là… tặng mình một khoản tiết kiệm an tâm cùng <mark>HDBank</mark>? ୨୧ Tháng của phái đẹp, hãy yêu thương bản thân theo cách mình muốn! ✨ ♡ Yêu mình một chút – an tâm thêm một chút. <mark>HDBank</mark> ChaoThang10 20Thang10 GuiTietKiem <mark>HDBank</mark>VinhLinh Quatang2010 HD026837",
  engagement: {
   reactions: 12,
   shares: 0,
   comments: 7
  }
 },
 {
  id: 662,
  title: "Gửi tiết kiệm lãi 9,4% ở ngân hàng từng 0 đồng: tiền có an toàn không? Tháng 10/2026",
  source: "chuyện tiền bạc",
  sourceType: "YouTube",
  date: "2026-10-08 14:17",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.youtube.com/watch?v=S9Ey8yy9sb8",
  excerpt: "Nhưng nếu anh chị [âm nhạc] mở app hoặc ra quầy hỏi sẽ thấy một nhóm khác NCB, MBV, GFBank, Vicky, Kích. Vicky là tên mới của ngân hàng <mark>Đông Á</mark>.",
  engagement: {
   reactions: 4,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 663,
  title: "10 năm trước: Hai đứa sinh viên chung nghành ở chung, ăn chung, ngủ chung đi học chung! 10 năm...",
  source: "Trung Kiên",
  sourceType: "Facebook",
  date: "2026-10-08 14:17",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/trung.kien.523104/posts/pfbid02fhaF9vCno8JK6GA1KVuwKBAGxzUoMQpLqcJK15yZUg8r6uoaqchik7VmrcdNnqXxl",
  excerpt: "...hình cũng dần … thay đổi hơi hơi. Ae nào nhận ra Kiên 10 năm trước + thêm lãi suất khi gửi Tiền tại <mark>HDBank</mark> Hòn Đất🤭. banbe kyniem hondat",
  engagement: {
   reactions: 154,
   shares: 0,
   comments: 25
  }
 },
 {
  id: 664,
  title: "HDBank và Đại học Quốc gia TP.HCM hợp tác toàn diện, kết nối giáo dục, tài chính và công nghệ",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-08 14:05",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid02z2WszV3EckRgfdTtb9Sx5a4kpGcNEPrpmEm1s2zBogpXxLbiCUKAZFM2Wk22oeSKl",
  excerpt: "<mark>HDBank</mark> và Đại học Quốc gia TP.HCM hợp tác toàn diện, kết nối giáo dục, tài chính và công nghệ",
  engagement: {
   reactions: 1648,
   shares: 252,
   comments: 1063
  }
 },
 {
  id: 665,
  title: "HDSAISON: - Vay 50tr : cần CCCD + BLX + BHYT do cty cấp - Vay 25tr: cần CCCD + BLX - Vay 12tr:...",
  source: "@susu_1k1k",
  sourceType: "Threads",
  date: "2026-10-08 14:04",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@susu_1k1k/post/DeOWru1kYRJ",
  excerpt: "🔥🔥<mark>HDSAISON</mark>: - Vay 50tr : cần CCCD + BLX + BHYT do cty cấp - Vay 25tr: cần CCCD + BLX - Vay 12tr: chỉ cần CCCD - Vay gói sinh viên 8tr : chỉ cần CCCD + Thẻ SV - Đặc quyền khách gắn bó : 9tr - LS : 0.69% Khách cũ đang góp xe vẫn lên đc hs nha anh chị . Liên hệ em để check ưu đãi kv ạ",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 666,
  title: "Bắt bài\" TOP 5 danh mục Quỹ cổ phiếu SSI-SCA tháng 9.2026 Trong tháng 9 năm 2026, danh mục Quỹ...",
  source: "SSI Asset Management",
  sourceType: "Facebook",
  date: "2026-10-08 13:56",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/SSIAssetManagement/posts/pfbid0CaJ3Nk2myYDuoLhYrDPh6GyF2D9YmL7USzS6rBc11WBjxxNrs7Lj1puYnb53Sr3ol",
  excerpt: "...ia nhập Top 5 cổ phiếu có tỷ trọng lớn nhất, lần lượt chiếm 6,47%, 4,85% và 4,75% NAV cuối tháng 9. <mark>HDB</mark> tăng từ 4,76% lên 6,01%/NAV, tương ứng tăng 1,25 điểm phần trăm so với cuối tháng 8. 👉 Chốt lời và cơ cấu danh mục Hoạt động chốt lời tại VIC, VHM cùng việc cơ cấu HPG đưa ba cổ phiếu này ra khỏi Top 5 danh mục. Trong khi đó, tỷ trọng VCB giảm 0,34...",
  engagement: {
   reactions: 15,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 667,
  title: "Trong ngắn hạn, tôi cố gắng tìm kiếm những cổ phiếu tốt có chất xúc tác cũng như tương quan lực...",
  source: "Ku Lì Trader",
  sourceType: "Facebook",
  date: "2026-10-08 13:42",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/kulitradingvlog/posts/pfbid0k1Swv5aQBB7fHHrUA2FtZEfJma6AS7VQTCVrvUf169tcYbfXeur4ZpsHoP3YNYwXl",
  excerpt: "Trong ngắn hạn, tôi cố gắng tìm kiếm những cổ phiếu tốt có chất xúc tác cũng như tương quan lực lượng mà bên mua đang thắng thế trong ngắn hạn và hưởng lợi từ sự tăng giá này. Một số chất xúc tác của <mark>HDB</mark>. 1. Chốt phương thức tăng vốn 30% bằng hình thức phát hành cổ phiếu thưởng. 2. Kì vọng LN quý III tiếp tục tăng tốc. 3. Đang có thông tin về việc IPO...",
  engagement: {
   reactions: 1,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 668,
  title: "Về làng Đại học Thủ Đức 1 cái là biết bao kỷ niệm thời sinh viên ùa về😍, thật hoài niệm những...",
  source: "To Trinh Bao Hung",
  sourceType: "Facebook",
  date: "2026-10-08 13:27",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/totrinhbao.hung/posts/pfbid02VhT3hM3yJ5u7VMxdFEhWhsRec56wZ2EjZw6q7YJMBJXj6XjeVPq1JuV89ka3gLFYl",
  excerpt: "Về làng Đại học Thủ Đức 1 cái là biết bao kỷ niệm thời sinh viên ùa về😍, thật hoài niệm những năm tháng tuổi trẻ ấy, đầy hoài bão và nhiệt huyết ❤. Hôm nay thay mặt <mark>HDBank</mark>, tổ chức 1 chương trình ký kết hợp tác giữa ngân hàng mình đang công tác, với Đại học quốc gia TPHCM, mở ra những cơ hội hợp tác song phương, mang lại lợi ích to lớn cho sinh viên về...",
  engagement: {
   reactions: 72,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 669,
  title: "NGÂN HÀNG VIỆT SẮP BƯỚC VÀO “LÀN SÓNG” HUY ĐỘNG VỐN GẦN 7 TỶ USD Theo Reuters, các ngân hàng...",
  source: "Hiếu Nguyễn",
  sourceType: "Facebook Group",
  date: "2026-10-08 13:26",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/2255845328556268/posts/2410520426422090/",
  excerpt: "... trị khoảng 1,2 tỷ USD. • BIDV: dự kiến bán thêm gần 11% cổ phần, tổng giá trị khoảng 1,4 tỷ USD. • <mark>HDBank</mark>: có kế hoạch bán 10,7% cổ phần đến cuối 2027. • Techcombank: cũng đang thảo luận khả năng bán cổ phần cho nhà đầu tư nước ngoài. 💰 Vì sao các ngân hàng phải tăng vốn? Tín dụng tăng nhanh trong bối cảnh nền kinh tế hướng tới tốc độ tăng trưởng...",
  engagement: {
   reactions: 6,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 670,
  title: "Đồng hành trên con đường tri thức",
  source: "Phong Đỗ",
  sourceType: "Facebook",
  date: "2026-10-08 12:46",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/phong.o.550862/posts/pfbid036dQY7395UvP8SsTK5FUJk3ZkgD6TtqU15Ex18qtbZiMk6ACJ2p3ZYBNWsW5jfrh8l",
  excerpt: "Đồng hành trên con đường tri thức",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 671,
  title: "7h20 – Có mặt tại HDBank PGD Minh Hải- Cà Mau, mở máy là mở luôn một ngày “chạy hết công suất”...",
  source: "Trường Nguyễn Nnc",
  sourceType: "Facebook",
  date: "2026-10-08 12:43",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/truongnguyennnc/posts/pfbid0NGqQmT2nAk3vsGMGLXSkrPHPs8ZJZMSJndAiGNFZVZMJBA39AfjPmcdqfxS77Sdjl",
  excerpt: "⏰ 7h20 – Có mặt tại <mark>HDBank</mark> PGD Minh Hải- Cà Mau, mở máy là mở luôn một ngày “chạy hết công suất” 😎 📞 8h – Khách gọi: tư vấn. 📄 9h – Hồ sơ về: kiểm tra, bổ sung, xử lý. 🏦 10h – Chạy tiến độ, hỗ trợ khách hàng, phối hợp anh em. 🚗 11h – Ra ngoài gặp khách, khảo sát, giải quyết công việc. 🍚 12h – Ăn trưa tranh thủ… tranh thủ luôn trả lời tin nhắn khách...",
  engagement: {
   reactions: 52,
   shares: 0,
   comments: 15
  }
 },
 {
  id: 672,
  title: "VAY TIỀN MẶT - HD SAISON ✔️ CCCD: 15tr (21T) ✔️ CCCD + GPLX: 25tr ✔️ CCCD + BHYT +...",
  source: "@tranyen8101",
  sourceType: "Threads",
  date: "2026-10-08 11:42",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tranyen8101/post/DeOGgW5k4fU",
  excerpt: "VAY TIỀN MẶT - <mark>HD SAISON</mark> ✔️ CCCD: 15tr (21T) ✔️ CCCD + GPLX: 25tr ✔️ CCCD + BHYT + HĐLĐ/CAVET/BLX: 50tr 📲 0339 012 109 (Za/lo Yến)",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 673,
  title: "Em gái à, 6 tháng thử thách qua rồi… ❤️💪🏻🌿 6 tháng cứ miệt mài chăm chỉ, tận tâm với từng...",
  source: "Kun Lee",
  sourceType: "Facebook",
  date: "2026-10-08 11:41",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/le.k.cuc/posts/pfbid02pwaRxcSfETDPJJV9PsT6moLKabMFmEMyakP1riTXqoFfBBGthTHDgXECeKWg8FC1l",
  excerpt: "...i KHUT. 🤎😘🌿 Cứ vững vàng bước tiếp nhé, vì những điều tuyệt vời hơn vẫn còn ở phía trước! 🌟🎀😘 <mark>HDBank</mark> <mark>HDBank</mark>Priority <mark>HDBank</mark>HoanKiem ILove<mark>HDBank</mark>",
  engagement: {
   reactions: 119,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 674,
  title: "100 TRIỆU ĐỒNG ĐẦU TƯ CỔ PHIẾU NGÂN HÀNG TỪ 2019 ĐẾN 2026 – BẠN SẼ CÓ BAO NHIÊU? Cùng một số...",
  source: "PHẠM HẠNH MMO",
  sourceType: "Facebook",
  date: "2026-10-08 11:36",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/phamhanhmmo4.0/posts/pfbid02nCZt2mBuNN7b8C67cZcw1ASJUMa3XJLpeYzHsY6GAkHs4fakKrPZsxNcSSAQ7wHNl",
  excerpt: "... ngờ! Theo một bảng thống kê tham khảo, 100 triệu đồng có thể tăng lên: 📈 LPBank: 1,392 tỷ đồng 📈 <mark>HDBank</mark>: 503 triệu đồng 📈 VPBank: 466 triệu đồng 📈 VIB: 456 triệu đồng 📈 Techcombank: 274 triệu đồng Các con số mang tính tham khảo, cần đối chiếu giá điều chỉnh, cổ tức và quyền mua để xác định lợi nhuận thực tế. Nhưng điều đáng quan tâm không chỉ là...",
  engagement: {
   reactions: 4,
   shares: 5,
   comments: 3
  }
 },
 {
  id: 675,
  title: "Mình cần hỗ trợ mở thẻ hdbank vietjet platinum. Mình đã có thẻ signature của tpbank và vib. Mình...",
  source: "An Quoc",
  sourceType: "Facebook Group",
  date: "2026-10-08 10:45",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1415019040782888/",
  excerpt: "Mình cần hỗ trợ mở thẻ <mark>hdbank</mark> vietjet platinum. Mình đã có thẻ signature của tpbank và vib. Mình ở sgon",
  engagement: {
   reactions: 7,
   shares: 0,
   comments: 15
  }
 },
 {
  id: 676,
  title: "HDBank gửi online lãi 8.8% liên hệ em hỗ trợ nha 0834089517",
  source: "@zundtn",
  sourceType: "Threads",
  date: "2026-10-08 10:38",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@zundtn/post/DeN_IiCGrM8",
  excerpt: "<mark>HDBank</mark> gửi online lãi 8.8% liên hệ em hỗ trợ nha 0834089517",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 677,
  title: "ANH HÙNG LAO ĐỘNG NGUYỄN THỊ PHƯƠNG THẢO LÀ NGƯỜI PHỤ NỮ GIÀU NHẤT VIỆT NAM Theo bảng xếp hạng...",
  source: "NGƯỜI THÀNH CÔNG",
  sourceType: "Facebook",
  date: "2026-10-08 10:22",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/FanNguoiThanhCong/posts/pfbid037zoWqcULFCV15PEK83wQEWde9JaNKWSXUipXpSogbTmM1YkYTgq5CWCwSFoTDKa7l",
  excerpt: "💰 ANH HÙNG LAO ĐỘNG <mark>NGUYỄN THỊ PHƯƠNG THẢO</mark> LÀ NGƯỜI PHỤ NỮ GIÀU NHẤT VIỆT NAM Theo bảng xếp hạng tỷ phú thời gian thực của Forbes, cập nhật chiều 7/10 (giờ Việt Nam), tiến sĩ <mark>Nguyễn Thị Phương Thảo</mark> đã trở lại vị trí người giàu thứ hai Việt Nam, đồng thời là người phụ nữ giàu nhất Việt Nam Bà Thảo hiện sở hữu khối tài sản 4,1 tỷ USD, chỉ đứng sau tỷ phú...",
  engagement: {
   reactions: 492,
   shares: 12,
   comments: 28
  }
 },
 {
  id: 678,
  title: "Cổ phiếu PNJ rơi xuống mức 18.900 đồng, chạm mốc thấp nhất trong gần 10 năm giữa đà giảm của thị...",
  source: "Tiêu Điểm 24H",
  sourceType: "Facebook Group",
  date: "2026-10-08 09:48",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/200267450320206/posts/2948121148868142/",
  excerpt: "... 50 tỉ đồng. Dự án đầu tiên là chương trình truyền hình \"Xin chào thứ Bảy\". Trong khi đó, VPBank và <mark>HDBank</mark> cũng đang xúc tiến các kế hoạch chào bán trái phiếu ra thị trường quốc tế. Nguồn: Tuổi Trẻ. ChungKhoan VNIndex KIDO",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 679,
  title: "Lãi suất tiết kiệm HDBank siêu tốt + chương trình quà tặng hấp dẫn🎁🎁 Quý anh/chị để lại bình...",
  source: "Minh Phương",
  sourceType: "Facebook Group",
  date: "2026-10-08 09:44",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/guitietkiemnganhang/posts/4452100228339987/",
  excerpt: "Lãi suất tiết kiệm <mark>HDBank</mark> siêu tốt + chương trình quà tặng hấp dẫn🎁🎁 Quý anh/chị để lại bình luận em tư vấn cụ thể ạ",
  engagement: {
   reactions: 8,
   shares: 0,
   comments: 25
  }
 },
 {
  id: 680,
  title: "Vikki bank khu vực Định Công, gần Định Công cho e xin lãi suất 500tr có thể gửi 6th or 12th (...",
  source: "Minh Khánh",
  sourceType: "Facebook Group",
  date: "2026-10-08 09:44",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/guitietkiemnganhang/posts/4452100148339995/",
  excerpt: "<mark>Vikki bank</mark> khu vực Định Công, gần Định Công cho e xin lãi suất 500tr có thể gửi 6th or 12th ( không trái phiếu, bảo hiểm, chứng chỉ)",
  engagement: {
   reactions: 13,
   shares: 0,
   comments: 60
  }
 },
 {
  id: 681,
  title: "15pro max-256gb ❌ 17tr.xxx ❌ 🔥 HỖ TRỢ TRẢ GÓP - TRẢ TRƯỚC 0₫ 🔥 💥- HD Saison 💥- Mirae Asset...",
  source: "@dinhlinh308qn",
  sourceType: "Threads",
  date: "2026-10-08 09:31",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dinhlinh308qn/post/DeN3dCoElOK",
  excerpt: "15pro max-256gb ❌ 17tr.xxx ❌ 🔥 HỖ TRỢ TRẢ GÓP - TRẢ TRƯỚC 0₫ 🔥 💥- <mark>HD Saison</mark> 💥- Mirae Asset 💥 - Home Credit 💥- FE Credit Lĩnh Apple 🏡 524 Hùng Vương - Nam Phước 👉📱 0796679444",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 682,
  title: "Khách hàng là thượng đế anh nha☺️ HD SAISON – HỖ TRỢ TƯ VẤN Hồ sơ tham khảo: - CCCD: 15 tr (đủ...",
  source: "@conghdss",
  sourceType: "Threads",
  date: "2026-10-08 09:23",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@conghdss/post/DeN2nh3kq3H",
  excerpt: "Khách hàng là thượng đế anh nha☺️ <mark>HD SAISON</mark> – HỖ TRỢ TƯ VẤN Hồ sơ tham khảo: - CCCD: 15 tr (đủ 21t) - CCCD + GPLX: 25 tr - CCCD + BHYT + GPLX: 50 tr LH: 0931 121 696 za/lo Công <mark>hd saison</mark>",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 683,
  title: "Quý Khách hàng/ Quý đối tác/ Anh,Chị,Em đồng nghiệp thân mến, Em Ngọc Thanh sẽ làm việc tại...",
  source: "Thanh Tran",
  sourceType: "Facebook",
  date: "2026-10-08 09:22",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/thanh.tran.42582/posts/pfbid02QKewnjHQoXRSpcR21hu4uS8FsgBSzmo85qGqWTSMJBG3tpJT1neBEFYYX1kPeh2Sl",
  excerpt: "Quý Khách hàng/ Quý đối tác/ Anh,Chị,Em đồng nghiệp thân mến, Em Ngọc Thanh sẽ làm việc tại <mark>HDBank</mark> Củ Chi trong thời gian tới, em chia sẻ niềm vui nhỏ này đến mọi người🍀🍀 Sắp tới em chạy KPI xì khói rồi, cả nhà yêu ơi đừng chặn cuộc gọi em nha😎 Em cảm ơn nhà mình💕",
  engagement: {
   reactions: 105,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 684,
  title: "Vikki bank 9-9.6, quan tâm thì nhắn anh nhé",
  source: "@dk_reuss",
  sourceType: "Threads",
  date: "2026-10-08 09:21",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dk_reuss/post/DeN2U8bkyNo",
  excerpt: "<mark>Vikki bank</mark> 9-9.6, quan tâm thì nhắn anh nhé",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 685,
  title: "Reviewthecogivui Hi các ct, cho em hỏi tí. Các bác có gặp tình trạng Thẻ TD HDBANK Gold cứ hay...",
  source: "TaupeStrawberry828",
  sourceType: "Facebook Group",
  date: "2026-10-08 09:17",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/reviewthecogivui/posts/1410260187491953/",
  excerpt: "Reviewthecogivui Hi các ct, cho em hỏi tí. Các bác có gặp tình trạng Thẻ TD <mark>HDBANK</mark> Gold cứ hay tự động mở khóa thẻ không ạ ? Mình đang khóa tạm thời, cứ 2-3 ngày là tự động mở khóa thẻ.",
  engagement: {
   reactions: 6,
   shares: 0,
   comments: 4
  }
 },
 {
  id: 686,
  title: "TIẾP VỐN THẢNH THƠI 👷‍♂️ ĐOÀN VIÊN - CÔNG NHÂN VẸN TOÀN CUỘC SỐNG 🌐 Đồng hành cùng ĐVCN:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-08 09:14",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeN1kggnTzk",
  excerpt: "TIẾP VỐN THẢNH THƠI 👷‍♂️ ĐOÀN VIÊN - CÔNG NHÂN VẸN TOÀN CUỘC SỐNG 🌐 Đồng hành cùng ĐVCN: https://dvcn.<mark>hdsaison</mark>.com.vn/ 📲 Hoặc tải app <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/app-download.html 🚩 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất Cùng <mark>HD SAISON</mark> đem ước mơ về nhà!",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 687,
  title: "Đoàn viên, công nhân sẽ nhẹ nhàng và thảnh thơi hơn rất nhiều nếu biết chủ động \"gói gọn\" bài...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-08 09:14",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeN1ki5HUTO",
  excerpt: "Đoàn viên, công nhân sẽ nhẹ nhàng và thảnh thơi hơn rất nhiều nếu biết chủ động \"gói gọn\" bài toán tài chính tại địa chỉ dành riêng: https://dvcn.<mark>hdsaison</mark>.com.vn/ 📦Gói gọn chỉ từ 1.316k/tháng 🔧 Gói gọn mọi kế hoạch lớn nhỏ 🔨 Gói gọn thủ tục 100% Online Chủ động tài chính - Vững vàng mọi kế hoạch!",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 688,
  title: "Tặng AirPods 4 khi sử dụng thẻ 📱 Ưu đãi mua sắm Samsung Galaxy Z, Iphone 18 2-5.000.000 💰 Hoàn...",
  source: "Quang Huy Rboot ",
  sourceType: "Facebook Group",
  date: "2026-10-08 09:14",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/616854376990070/posts/1369506321724868/",
  excerpt: "...bay 🛍️ Mua sắm – ăn uống hoàn tiền 8% 💻 Giao dịch online hoàn tiền 10% 0369.596.496 - Quang Huy - <mark>HDBank</mark> Linh Đàm <mark>HDBank</mark> TheTinDung<mark>HDBank</mark> UuDai<mark>HDBank</mark> HoanTien TheTinDung <mark>HDBank</mark>Priority <mark>HDBank</mark>Ultimate VietjetAir<mark>HDBank</mark>",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 3
  }
 },
 {
  id: 689,
  title: "Lãi suất tiết kiệm HDBank siêu tốt + chương trình quà tặng hấp dẫn🎁🎁 Quý anh chị để lại bình...",
  source: "Uyển My",
  sourceType: "Facebook Group",
  date: "2026-10-08 09:11",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/guitietkiemnganhang/posts/4452067041676639/",
  excerpt: "Lãi suất tiết kiệm <mark>HDBank</mark> siêu tốt + chương trình quà tặng hấp dẫn🎁🎁 Quý anh chị để lại bình luận em nt chi tiết nha 💖",
  engagement: {
   reactions: 6,
   shares: 0,
   comments: 14
  }
 },
 {
  id: 690,
  title: "HDBank cùng 'Trẩy hội trăng rằm 2026' – Gieo niềm vui, trao yêu thương đến trẻ nhỏ",
  source: "Báo Tiền Phong",
  sourceType: "Báo chí",
  date: "2026-10-08 09:06",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://tienphong.vn/hdbank-cung-tray-hoi-trang-ram-2026-gieo-niem-vui-trao-yeu-thuong-den-tre-nho-post1883399.tpo",
  excerpt: "Từ những điều tưởng như giản dị ấy, câu chuyện đồng hành cùng cộng đồng của <mark>HDBank</mark> được nối dài qua những hoạt động gần gũi với đời sống, trong đó có việc cùng các đơn vị tổ chức mang đến cho trẻ nhỏ một mùa trăng đủ đầy hơn cả niềm vui. Tại chuỗi sự kiện Trẩy hội trăng rằm 2026, <mark>HDBank</mark> đồng hành cùng chương trình trong một không gian nghệ thuật dành cho..."
 },
 {
  id: 691,
  title: "Nhà đầu tư nước ngoài chưa dứt chuỗi bán ròng",
  source: "VnExpress",
  sourceType: "Báo chí",
  date: "2026-10-08 08:33",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vnexpress.net/nha-dau-tu-nuoc-ngoai-chua-dut-chuoi-ban-rong-5129968.html",
  excerpt: "Ở chiều ngược lại, nhóm nhà đầu tư này bán ra hơn 2.250 tỷ đồng, tiêu điểm nằm ở TCB (gần 153 tỷ), <mark>HDB</mark> (gần 118 tỷ) và PNJ (gần 116 tỷ)."
 },
 {
  id: 692,
  title: "“Quét sạch” thành quả 3 phiên tăng, VN-Index giảm mạnh thử thách đáy ngắn hạn",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-08 08:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/quet-sach-thanh-qua-3-phien-tang-vn-index-giam-manh-thu-thach-day-ngan-han.htm",
  excerpt: "Các mã bị bán lớn là TCB -153,1 tỷ, <mark>HDB</mark> -124,5 tỷ, PNJ -115,4 tỷ, VHM -61 tỷ, FPT -59,7 tỷ."
 },
 {
  id: 693,
  title: "HD Bank có nhận thế chấp xe cũ 2024 đứng tên CTY không ạ. Khu vực long biên .",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-08 08:22",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1414936737457785/",
  excerpt: "<mark>HD Bank</mark> có nhận thế chấp xe cũ 2024 đứng tên CTY không ạ. Khu vực long biên .",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 694,
  title: "LÃI SUẤT TIỀN GỬI “NÓNG” TRỞ LẠI: NHIỀU NGÂN HÀNG CHÀO TRÊN 9%/NĂM, CÓ NƠI LÊN 10% Bước vào...",
  source: "Vietnam Banking News",
  sourceType: "Facebook",
  date: "2026-10-08 08:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/bankingSVG/posts/pfbid0aKftmZDieD2oTeWvQAE7fpR8W6mg6dbMqu6bEcScsxpd9rGQnyiHhDs1cRJyHWVyl",
  excerpt: "...quầy và trực tuyến. Trước đó, cuối tháng 9, mức chào online của ngân hàng này khoảng 9,35%/năm. Tại <mark>Vikki Bank</mark>, mức lãi suất thực tế được chào có thể lên 9,6%/năm với số dư từ 500 triệu đồng. Trong khi đó, biểu lãi suất niêm yết ở mức 6%/năm cho kỳ hạn 6-11 tháng, 6,1%/năm cho 12 tháng và 6,2%/năm cho 13 tháng. Ngân hàng này đang công khai 4 mã khuyến...",
  engagement: {
   reactions: 257,
   shares: 2,
   comments: 4
  }
 },
 {
  id: 695,
  title: "Anh hùng lao động Nguyễn Thị Phương Thảo là người phụ nữ giàu nhất Việt Nam Với khối tài sản 4,1...",
  source: "Võ Thuận",
  sourceType: "Facebook Group",
  date: "2026-10-08 07:31",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/886129045227487/posts/2572361116604263/",
  excerpt: "Anh hùng lao động <mark>Nguyễn Thị Phương Thảo</mark> là người phụ nữ giàu nhất Việt Nam Với khối tài sản 4,1 tỷ USD, bà Thảo chỉ xếp sau tỷ phú Phạm Nhật Vượng, người nắm giữ khối tài sản 35,7 tỷ USD, theo thống kê mới nhất của Forbes (cập nhật chiều 7/10 giờ Việt Nam). Bà Thảo hiện là Chủ tịch HĐQT Vietjet Air (VJC), Chủ tịch Sovico Group và Phó Chủ tịch thường...",
  engagement: {
   reactions: 16,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 696,
  title: "Ngân hàng HDB chia cổ tức đợt 2 bằng cổ phiếu tỉ lệ 100/25. Ngày mai 09/10 GDKHQ (giao dịch...",
  source: "Duong Nguyen",
  sourceType: "Facebook",
  date: "2026-10-08 06:57",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/1478T/posts/pfbid02WGRyJYyufSXmkamvpU5byYbG2d4oDkFbJBKKP4tideFtsDheCtAj5Tw6hxMwn8tvl",
  excerpt: "Ngân hàng <mark>HDB</mark> chia cổ tức đợt 2 bằng cổ phiếu tỉ lệ 100/25. Ngày mai 09/10 GDKHQ (giao dịch không hưởng quyền) chungkhoan,tudotaichinh",
  engagement: {
   reactions: 5,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 697,
  title: "BẢN TIN CASHFLOW FOCUS - Ngày 08/10/2026 Cường gửi anh chị trạng thái danh mục theo Hệ thống 5...",
  source: "Cashflow Focus - Đầu tư có kỷ luật",
  sourceType: "Facebook Group",
  date: "2026-10-08 06:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/cashflowfocus/posts/1144270618526674/",
  excerpt: "...t cũng là một quyết định. 🟠 4. CAM ĐẬM - Vùng mai phục, tích lũy sát kháng cự: GMD, DHC, NT2, FRT, <mark>HDB</mark>, ANV, MCH, GVR, HAG (9 mã) Các mã này đang tích lũy chặt chẽ sát vùng kháng cự, chờ dòng tiền xác nhận. Vùng mai phục hôm nay nới lên 9 mã, có thêm GMD, DHC, FRT, ANV, MCH, GVR. Anh chị theo dõi sát và chỉ hành động khi hệ thống báo mua. 🔘 5. XÁM...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 698,
  title: "Bà Nguyễn Thị Phương Thảo trở lại vị trí người giàu thứ 2 Việt Nam",
  source: "CafeF",
  sourceType: "Báo chí",
  date: "2026-10-08 04:04",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://cafef.vn/ba-nguyen-thi-phuong-thao-tro-lai-vi-tri-nguoi-giau-thu-2-viet-nam-188261008105831757.chn",
  excerpt: "Bà <mark>Nguyễn Thị Phương Thảo</mark> trở lại vị trí người giàu thứ 2 Việt Nam Với việc giá trị tài sản ròng tăng lên 4,2 tỷ USD, bà <mark>Nguyễn Thị Phương Thảo</mark>-Chủ tịch VietJet Air, đã trở lại vị trí người giàu thứ 2 Việt Nam. Ngoài ra, bà <mark>Nguyễn Thị Phương Thảo</mark>-Chủ tịch HĐQT Vietjet Air và Phó Chủ tịch thường trực <mark>HDBank</mark>, trở lại vị trí người giàu thứ 2 Việt Nam với..."
 },
 {
  id: 699,
  title: "Lãi suất ngân hàng hôm nay 8/10/2026: Có 1 triệu cũng mua được chứng chỉ tiền gửi",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-08 02:01",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-8-10-2026-1-trieu-cung-mua-duoc-chung-chi-tien-gui-2562742.html",
  excerpt: "Lãi suất ngân hàng hôm nay 8/10/2026, một ngân hàng hạ mệnh giá chứng chỉ tiền gửi nhằm mở rộng đối tượng khách hàng tham gia."
 },
 {
  id: 700,
  title: "BÁO CÁO THỊ TRƯỜNG — 07/10/2026 (Thứ Tư) VN-Index: 1.753,39 điểm (-5,69 điểm / -0,32%)...",
  source: "Đào Trường Giang",
  sourceType: "Facebook Group",
  date: "2026-10-07 23:01",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/1648278049007845/posts/2592690021233305/",
  excerpt: "... thị trường (HOSE -923, HNX -33, UPCoM +9) — tháng thứ 9 liên tiếp. - Bán mạnh: PNJ -403, TCB -112, <mark>HDB</mark> -96, FPT -67, VHM -32 tỷ. - Mua: MSN +44, BSR +37, VIB +33, MCH +30, FRT +28 tỷ. ĐÁNH GIÁ - Thị trường loanh quanh không tạo đáy dứt khoát vì phân hóa cũng như không có sự dẫn dắt (giai đoạn hiện tại VIC VHM đi ngang), Blue chip và Bank phiên tăng...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 701,
  title: "Mua 100 Triệu Cổ Phiếu Ngân Hàng Tư Nhân Năm 2019, Giờ Thành Bao Nhiêu? TCB VPB HDB VIB LPB 100...",
  source: "Mê Đầu Tư",
  sourceType: "Facebook",
  date: "2026-10-07 22:39",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/1651857529918901/",
  excerpt: "Mua 100 Triệu Cổ Phiếu Ngân Hàng Tư Nhân Năm 2019, Giờ Thành Bao Nhiêu? TCB VPB <mark>HDB</mark> VIB LPB 100 triệu mua cổ phiếu LPB phiên 02/01/2019, giữ tới nay thành 1 tỷ 392 triệu. \"Nếu năm 2019 bạn có 100 triệu. Bạn quyết định mua cổ phiếu của 5 ngân hàng tư nhân Việt Nam, giá trị hiện tại là bao nhiêu?\" Đó là câu hỏi mở đầu tập 2 của loạt Race 100 triệu. Tô cho...",
  engagement: {
   reactions: 669,
   shares: 42,
   comments: 41
  }
 },
 {
  id: 702,
  title: "Tại đợt e làm hd saison có phí á c",
  source: "@meok3_",
  sourceType: "Threads",
  date: "2026-10-07 22:38",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@meok3_/post/DeMsw80Cf31",
  excerpt: "Tại đợt e làm <mark>hd saison</mark> có phí á c",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 703,
  title: "iPhone 17 256GB XANH 💙 ✨ Máy đẹp, màu cực iu – nhìn là mê! 🔋 Pin 99% – mới sạc 88 lần 🛡️ Còn...",
  source: "@tieu_nhu68",
  sourceType: "Threads",
  date: "2026-10-07 22:11",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tieu_nhu68/post/DeMpnuwk7mw",
  excerpt: "...g bụng là chốt em liền ạ ❤️ 📍 HCM - Tân Phú 🤝 Nhận giao lưu các dòng điện thoại 💳 Hỗ trợ trả góp <mark>HDBank</mark> - Mirae &amp; thẻ tín dụng",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 704,
  title: "Mình được phê duyệt trước thẻ HDBank 60tr mà k hiểu sao đăng ký online toàn bị tạch. Các bác có...",
  source: "SolidHedgehog6064",
  sourceType: "Facebook Group",
  date: "2026-10-07 22:11",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1414582317493227/",
  excerpt: "Mình được phê duyệt trước thẻ <mark>HDBank</mark> 60tr mà k hiểu sao đăng ký online toàn bị tạch. Các bác có kinh nghiệm cho em lời khuyên với ạ. Hay là trước đó em có thẻ HD Vietjet hm 0 đồng nên k được duyệt nhỉ?",
  engagement: {
   reactions: 5,
   shares: 0,
   comments: 15
  }
 },
 {
  id: 705,
  title: "Lãi suất VikkiBank cao lên tới 9️⃣,6️⃣% 🎁 Quà lớn tri ân 📲 Lh em Tiến 0565583939 để được tư vấn ạ",
  source: "@tien_kutee",
  sourceType: "Threads",
  date: "2026-10-07 21:54",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tien_kutee/post/DeMnwH2k9Ps",
  excerpt: "💰 Lãi suất <mark>VikkiBank</mark> cao lên tới 9️⃣,6️⃣% 🎁 Quà lớn tri ân 📲 Lh em Tiến 0565583939 để được tư vấn ạ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 706,
  title: "Lời chào trân trọng từ HDBank Priority🤗 Mỗi đồng tiền của anh/chị đều xứng đáng được trân trọng...",
  source: "Phuong Bich",
  sourceType: "Facebook",
  date: "2026-10-07 21:15",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/phamthi.bichphuong.79/posts/pfbid0Cgr6LuKFgEuy6JBekNJBVJP2Z5uQHKmZrc5MrnMyRudqhXXa3G5NkaaB2nymSrT7l",
  excerpt: "🌸 Lời chào trân trọng từ <mark>HDBank</mark> Priority🤗 Mỗi đồng tiền của anh/chị đều xứng đáng được trân trọng và phát huy giá trị tối ưu💓 Chương trình gửi tiết kiệm lãi suất cao — nơi tài sản an cư, sinh lời hiệu quả. 📩 Nhắn tin để em gửi bảng lãi suất chi tiết nhé! Trân trọng! 💐🩷 Ms Phương: 0942199289",
  engagement: {
   reactions: 181,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 707,
  title: "ĐIỂM BÙNG NỔ PIVOT CỦA THỊ TRƯỜNG - CHÌA KHÓA VÀO SÓNG CỦA CỔ PHIẾU KÊNH TRÊN. Thị trường bước...",
  source: "X Cuong Pham",
  sourceType: "Facebook Group",
  date: "2026-10-07 21:13",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/luotsongthanchungkhoan/posts/3236917096502851/",
  excerpt: "...ng 2-3 tháng cuối năm. Trường hợp có điểm bùng nổ pivot: Các cổ phiếu kênh trên như BVH DGW PVT BSR <mark>HDB</mark> VPB GMD MSN MWG... sẽ bước vào sóng tăng với biên 30-50%. Nhóm thị trường chứng khoán, bất động sản sẽ nổ lên rồi nén lại để phục hồi sau đó. Trường hợp không có điểm bùng nổ pivot: Các cổ phiếu kênh trên sẽ tạo đỉnh và một đợt bán tháo sẽ xảy ra...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 708,
  title: "Chuyến đi cùng NH HD BANK 102026 💕 5T HDBank",
  source: "Huyen Thu",
  sourceType: "Facebook",
  date: "2026-10-07 21:10",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/behuyendepgaikutepmaique03/posts/pfbid0oMQSLnM37z6BRdmXZi6T3yfkcMauVunqqKCe8y2d7jqe8cnWRshWJZmgQz2H1iv1l",
  excerpt: "Chuyến đi cùng NH <mark>HD BANK</mark> 102026 💕 5T <mark>HDBank</mark>",
  engagement: {
   reactions: 6,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 709,
  title: "Một nhiệm vụ mới, sau 11 năm gắn bó với HDBank ❤️ Cảm ơn Ban lãnh đạo, cảm ơn các anh chị em...",
  source: "Trang Minh",
  sourceType: "Facebook",
  date: "2026-10-07 20:58",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/vu.m.trang/posts/pfbid02Hsih4o564ahcmNTXsdxZrscTRwfrTE3cagqvyuE4jtsCSbbupnH8y6n2jKuFERAzl",
  excerpt: "Một nhiệm vụ mới, sau 11 năm gắn bó với <mark>HDBank</mark> ❤️ Cảm ơn Ban lãnh đạo, cảm ơn các anh chị em đồng nghiệp và gia đình vì tất cả tình cảm trong ngày đặc biệt này ❤️❤️😘",
  engagement: {
   reactions: 185,
   shares: 0,
   comments: 93
  }
 },
 {
  id: 710,
  title: "Mẫu đồng phục ngân hàng HDBank đang được nhiều ACE hỏi nhất hôm nay đây ạ ✨",
  source: "Hoàng Liên",
  sourceType: "Facebook Group",
  date: "2026-10-07 20:25",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/NganHangHDBank/posts/28474960815464924/",
  excerpt: "👔 Mẫu đồng phục ngân hàng <mark>HDBank</mark> đang được nhiều ACE hỏi nhất hôm nay đây ạ ✨",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 711,
  title: "HDBANK NHẬN CÚ ĐÚP GIẢI THƯỞNG VỀ TÍN DỤNG XANH VÀ HỖ TRỢ ĐẦU TƯ NÔNG NGHIỆP BỀN VỮNG Ngày 30/9...",
  source: "Thúy Võ",
  sourceType: "Facebook",
  date: "2026-10-07 20:08",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/thuy.vo.803040/posts/pfbid0UguyywQw8A5xHQUmPBfgHDTcvgfNsTA1ygQ9o5wp1jFLs5ofcw662dMWg1v2jyxFl",
  excerpt: "<mark>HDBANK</mark> NHẬN CÚ ĐÚP GIẢI THƯỞNG VỀ TÍN DỤNG XANH VÀ HỖ TRỢ ĐẦU TƯ NÔNG NGHIỆP BỀN VỮNG Ngày 30/9 tại TP.HCM, <mark>HDBank</mark> tiếp tục ghi dấu ấn với hai giải “Ngân hàng Tiêu biểu về Tín dụng xanh” và “Ngân hàng Hỗ trợ Đầu tư cho Nông nghiệp Công nghệ cao/Nông nghiệp Sạch” tại Vietnam Outstanding Banking Awards 2026. Hai giải thưởng ghi nhận những kết quả <mark>HDBank</mark>...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 712,
  title: "HAPPY BIRTHDAY – Trương Công Đạt 🎉🎂 🌟 PGD Đô Lương hân hoan tổ chức sinh nhật cho em Trương...",
  source: "HDBank Đô Lương",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 20:04",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankdoluong/posts/pfbid02tVL3ASN4HPvrxBtbq3QDemLVDpP6GLpUZFD5DBaDzU7ZFHPrQ4XKNcDZjj6qhsNhl",
  excerpt: "... thực tập sinh tại chính nơi đây và hôm nay đã trở thành một thành viên chính thức của đại gia đình <mark>HDBank</mark> Đô Lương. ❤️ 🌱 Từ những ngày đầu còn bỡ ngỡ đến hôm nay đã tự tin trên hành trình của một CV QHKH, mỗi bước tiến của em đều là một dấu ấn đáng tự hào. 💪✨ 🎁 Tuổi mới, chúc em Đạt thật nhiều: 💚 Đạt sức khỏe – luôn mạnh khỏe, tràn đầy năng lượng...",
  engagement: {
   reactions: 72,
   shares: 1,
   comments: 22
  }
 },
 {
  id: 713,
  title: "VN-INDEX 7/10: ĐIỀU CHỈNH NHẸ, NHỊP HỒI CHƯA BỊ PHÁ VỠ VN-Index kết phiên tại 1.753,39 điểm,...",
  source: "TechProfit",
  sourceType: "Facebook Group",
  date: "2026-10-07 19:49",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/vnccs/posts/4775424826018997/",
  excerpt: "...i dài chuỗi bán ròng lên 11 phiên. PNJ bị bán ròng mạnh nhất với hơn 399 tỷ đồng, tiếp theo là TCB, <mark>HDB</mark>, FPT và VIX. 🔎 NHỊP HỒI ĐÃ BỊ PHÁ VỠ? Phiên 7/10 cho thấy lực cầu vẫn xuất hiện khi thị trường rung lắc, đồng thời dòng tiền vẫn tìm được các cổ phiếu khỏe để giải ngân. Tuy nhiên, thị trường chưa đủ mạnh để xác nhận đáy ngắn hạn. 2–3 phiên tới sẽ...",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 714,
  title: "NỖ LỰC BẤT THÀNH, ĐIỀU CHỈNH CHỈ SỐ 💥 1️⃣ Về chỉ số: Kết thúc phiên giao dịch VNINDEX đóng cửa...",
  source: "Fstock - Trợ lý đầu tư chứng khoán",
  sourceType: "Facebook",
  date: "2026-10-07 19:45",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/fstock.vn/posts/pfbid036sbysPFnAhfFxu9RaPiT9P3hjkSv1usaoPrpmy5B9veoWFBHXJmiXx2u4xFd81itl",
  excerpt: "...n bán ròng 940 tỷ đồng trong đó các cổ phiếu bị bán nhiều bao gồm PNJ (399,18 Tỷ), TCB (111,10 Tỷ), <mark>HDB</mark> (88,98 Tỷ). Khối tự doanh CTCK bán ròng 570 tỷ đồng trong đó các cổ phiếu bị bán nhiều bao gồm VPB (138,37 tỷ), HPG (72,66 tỷ), MCH (54,60 tỷ) 4️⃣ Phái sinh: Khối ngoại mua ròng 129 HĐTL tháng 10 và đang duy trì 3.926 vị thế Short Khối tự doanh mua...",
  engagement: {
   reactions: 0,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 715,
  title: "Ngân hàng TMCP Phát triển TP.HCM (HDBank, mã chứng khoán: HDB) thông báo ngày 12/10/2026 là ngày...",
  source: "Thảo Thảo",
  sourceType: "Facebook",
  date: "2026-10-07 19:12",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/vui.niem.77/posts/pfbid0LYgxjbwSrJqqRqZXbsFFuRcpZsqZz3GKj9LkMhC75HNJV7odccxffSfYWocqzSBdl",
  excerpt: "<mark>Ngân hàng TMCP Phát triển TP.HCM</mark> (<mark>HDBank</mark>, mã chứng khoán: <mark>HDB</mark>) thông báo ngày 12/10/2026 là ngày đăng ký cuối cùng để lập danh sách cổ đông nhận cổ tức năm 2025 và cổ phiếu thưởng với tổng tỷ lệ 30%. Xem chi tiết tại https://cafef.vn/<mark>hdbank</mark>-chot-chia-co-tuc-va-co-phieu-thuong-ty-le-30-188261001065911031.chn",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 716,
  title: "ĐHQG-HCM VÀ HDBANK KÝ KẾT HỢP TÁC PHÁT TRIỂN NGUỒN NHÂN LỰC, HỖ TRỢ NGƯỜI HỌC 🎓 👇",
  source: "Đại học Quốc gia TP.HCM",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 19:05",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/vnuhcm.info/posts/pfbid02eb2jv99z8UG9e1eKfjySQieZ1UUeJKfWiqprVZVmHmFohYBu3qCDEKkjg7ymBRHTl",
  excerpt: "🤝 ĐHQG-HCM VÀ <mark>HDBANK</mark> KÝ KẾT HỢP TÁC PHÁT TRIỂN NGUỒN NHÂN LỰC, HỖ TRỢ NGƯỜI HỌC 🎓 👇",
  engagement: {
   reactions: 97,
   shares: 3,
   comments: 2
  }
 },
 {
  id: 717,
  title: "VPB, TCB, HDB hưởng lợi nhờ thông tư 50 của NHNN mới ban hành? Một trong những thông tin quan...",
  source: "Chứng Khoán Efinkey",
  sourceType: "Facebook",
  date: "2026-10-07 19:03",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/Efinkey/posts/pfbid02N6gGhNwaQ1ttgEKiMxZ7HfyUMCe1NR2LeFjfywn9PMqsNLvhD6edxPEZAt66oCM6l",
  excerpt: "VPB, TCB, <mark>HDB</mark> hưởng lợi nhờ thông tư 50 của NHNN mới ban hành? Một trong những thông tin quan trọng được thị trường quan tâm với nhóm cổ phiếu Ngân hàng, đó là NHNN đã ban hành Thông tư 50/2026 thay thế Thông tư 22/2019, có hiệu lực từ ngày 1/12/2026. Một số điểm chú ý: - Trần tăng từ 85% lên 95%! Và phần mẫu số trong công thức LDR, sẽ được điều chỉnh...",
  engagement: {
   reactions: 7,
   shares: 2,
   comments: 2
  }
 },
 {
  id: 718,
  title: "BẢN TIN CHỨNG KHOÁN CUỐI NGÀY 07/10/2026 📈 Tổng quan thị trường - VN‑Index: –5.69 điểm (-0.32%)...",
  source: "Chứng khoán Phú Hưng - PHS",
  sourceType: "Facebook",
  date: "2026-10-07 19:02",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/PhuHungSecuritiesCorporation/posts/pfbid02cyYgEf6uSh1TRFuokRKJgVN1QtZSjZ8joYx6BvxCBrgkd53bvYAikWfwMqVDth9gl",
  excerpt: "... tiền - Khối ngoại bán ròng trên HOSE &gt; 910.68 tỷ VND, tập trung vào: PNJ (~399 tỷ), TCB (~111 tỷ), <mark>HDB</mark> (~89 tỷ), FPT (~67 tỷ). - Trên HNX, bán ròng &gt; 33.07 tỷ VND, chủ yếu ở PVS (~17 tỷ), CEO (~12 tỷ), NVB và IDC (~3.4 tỷ mỗi). - Nhóm ngành: IT giảm 1.19%, bất động sản –0.86%, tiện ích –0.70%; vật liệu tăng 2.01%. 🔍 Nhận định nhanh - Thị trường đang...",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 719,
  title: "HDBank chốt chia cổ tức và cổ phiếu thưởng tỷ lệ 30%",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 18:58",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid0MbxSVJM1fd73RxNripDMtxFUvxZppzcgsFC2of9Rk6j5hiktVNuhNvCYAx7tbe1bl",
  excerpt: "<mark>HDBank</mark> chốt chia cổ tức và cổ phiếu thưởng tỷ lệ 30%",
  engagement: {
   reactions: 1645,
   shares: 162,
   comments: 879
  }
 },
 {
  id: 720,
  title: "Ngày mai mình cần gửi 600 triệu tại quầy, cho mình hỏi chi nhánh HD bank nào ở Biên Hoà còn áp...",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-07 18:49",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/daugiawin/posts/4548109205400956/",
  excerpt: "Ngày mai mình cần gửi 600 triệu tại quầy, cho mình hỏi chi nhánh <mark>HD bank</mark> nào ở Biên Hoà còn áp dụng quà tặng 20/10 không? Để sdt mình chủ động liên hệ nhé!",
  engagement: {
   reactions: 20,
   shares: 0,
   comments: 67
  }
 },
 {
  id: 721,
  title: "MÁI NHẬT 2 TẦNG SÂN VƯỜN - CĂN NHÀ ĐỘC THÂN VUI VẺ CỦA EM PHƯƠNG TÂM! 🏠 Kết thúc chuyện tình 10...",
  source: "@hoangkim_phan",
  sourceType: "Threads",
  date: "2026-10-07 18:46",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hoangkim_phan/post/DeMSJjLicoo",
  excerpt: "💥 MÁI NHẬT 2 TẦNG SÂN VƯỜN - CĂN NHÀ ĐỘC THÂN VUI VẺ CỦA EM PHƯƠNG TÂM! 🏠 Kết thúc chuyện tình 10 năm hứa hẹn suông, em Phương Tâm <mark>HD Bank</mark> Sài Gòn quyết định sống đời độc thân kiêu hãnh và tự mình sở hữu căn biệt thự mơ ước! 👉 Nhà Đẹp LP thiết kế mẫu nhà 2 tầng hiện đại gồm phòng khách, bếp, 3 phòng ngủ, phòng thờ và sân vườn thoáng mát. Bác nào muốn...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 722,
  title: "KHAI TRƯƠNG ĐẠI LÝ THANH TOÁN HDBANK – ĐẾN VNPT CẦN THƠ, NHẬN QUÀ LIỀN TAY! 📣 Ngày 08/10/2026,...",
  source: "VNPT Cần Thơ",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 18:45",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/1093766690022331/",
  excerpt: "🎉🎁 KHAI TRƯƠNG ĐẠI LÝ THANH TOÁN <mark>HDBANK</mark> – ĐẾN VNPT CẦN THƠ, NHẬN QUÀ LIỀN TAY! 📣 Ngày 08/10/2026, ghé VNPT Cần Thơ check-in nhận quà liền tay bà con ơi! 🥳 Nhân dịp khai trương Đại lý thanh toán <mark>HDBank</mark> tại 38 điểm giao dịch VNPT trên địa bàn TP. Cần Thơ, khách hàng đến check-in tại điểm giao dịch sẽ được nhận quà tặng hấp dẫn trong ngày khai trương....",
  engagement: {
   reactions: 39,
   shares: 2,
   comments: 7
  }
 },
 {
  id: 723,
  title: "VN-INDEX 07/10/2026 – RUNG LẮC SAU HAI PHIÊN HỒI PHỤC, DÒNG TIỀN CHUYỂN SANG NHÓM CỔ PHIẾU RIÊNG...",
  source: "CAS - Đồn Kinh Tế",
  sourceType: "Facebook Group",
  date: "2026-10-07 18:45",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/chungkhoantheodaudongtien/posts/991558987297544/",
  excerpt: "... tỷ, MCH 30 tỷ và FRT 28 tỷ đồng. Chiều ngược lại, PNJ bị bán ròng 399 tỷ, tiếp theo là TCB 111 tỷ, <mark>HDB</mark> 89 tỷ, FPT 67 tỷ và VIX 43 tỷ đồng. Đáng chú ý, sau hai phiên liên tiếp xuất hiện những giao dịch bán rất lớn tập trung ở một vài cổ phiếu, cần tiếp tục quan sát liệu áp lực này có giảm dần trong những phiên tới hay lan rộng sang các cổ phiếu vốn...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 724,
  title: "TOP CỔ PHIẾU SỨC MẠNH GIÁ – 07/10/2026 VN-Index giảm 5,69 điểm (-0,32%) xuống 1.753,39 điểm,...",
  source: "Chứng Khoán Mirae Asset Việt Nam",
  sourceType: "Facebook",
  date: "2026-10-07 17:35",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/chungkhoanmiraeasset.vietnam/posts/pfbid02htUbQer1QA2woxHfUwowSVUffgkNpGr1Kb7DtTmtqKPufPi65WrNdK1QTcFZqwzGl",
  excerpt: "...iảm gần 25% còn khoảng 12.474 tỷ đồng. Khối ngoại bán ròng hơn 946 tỷ đồng, tập trung ở PNJ, TCB và <mark>HDB</mark>. Cảng biển và vận tải dầu khí giữ được sắc xanh, trong khi phần cứng, dịch vụ tiêu dùng và hàng hóa công nghiệp chịu áp lực. Chứng khoán Mirae Asset cập nhật danh sách cổ phiếu nổi bật theo tiêu chí Sức mạnh giá phiên hôm nay: 🔸 DGW – Bán lẻ 🔸 FRT...",
  engagement: {
   reactions: 10,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 725,
  title: "Cứ thấy NVB FOMO 96 là tưởng khỏe toàn diện, cho đến khi soi điểm Quant 22... Phiên 06/10, cổ...",
  source: "Alphasensei.io",
  sourceType: "Facebook Group",
  date: "2026-10-07 17:11",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/chungkhoanvietnamss/posts/1815423316322447/",
  excerpt: "...p như nhiều người dễ nhầm. 1️⃣ FOMO chạm 96, hai cột nhiệt gần như đỏ rực Nhìn ảnh 1, NVB đứng trên <mark>HDB</mark> và SHS trong danh sách nóng nhất phiên. Điểm FOMO đạt 96/100, trạng thái “Quá nóng”; nhiệt giao dịch lên 99, còn điểm đuổi giá là 98. Đáng chú ý, điểm FOMO tăng 23 điểm so với 5 phiên trước, còn riêng phiên này giá không đổi. FOMO cao cho biết mã...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 726,
  title: "HDBANK ĐÃ TÌM THẤY “TỶ PHÚ” CỦA HÈ VÀNG ĐẠI CÁT! Một hành trình rực rỡ đã về đích với những niềm...",
  source: "Giang Nguyễn Đông",
  sourceType: "Facebook",
  date: "2026-10-07 17:09",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/giang.dong.7568/posts/pfbid0cfkEscLhiLnWjzJY8AXLuVV9Sv6YNRqYvquqNiwhtYsZdo7NL4tgjNeZ5bQvthc4l",
  excerpt: "🪙 <mark>HDBANK</mark> ĐÃ TÌM THẤY “TỶ PHÚ” CỦA HÈ VÀNG ĐẠI CÁT! Một hành trình rực rỡ đã về đích với những niềm vui thật sự được trao đến khách hàng <mark>HDBank</mark>. Điểm nhấn của kỳ quay số đặc biệt “Tiết kiệm Tỷ phú – Hè Vàng Đại Cát” là khoảnh khắc khách hàng Mã Tiếp Ngân – <mark>HDBank</mark> Kiên Giang trở thành chủ nhân Giải Đặc biệt trị giá 16 lượng vàng SJC. Cùng với đó, 25 khách...",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 727,
  title: "Ngoài gửi tiết kiệm, trái phiếu Doanh nghiệp cũng là một kênh đầu tư mang lại mức sinh lời cực...",
  source: "Lê Thanh Thảo",
  sourceType: "Facebook",
  date: "2026-10-07 17:02",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/thao.le.10048379/posts/pfbid02185SFfCEMpL1ENPSJaXYxnckrBUuBUhko9JU14AJafqQpqd3dZGt2Q32za5B7XVwl",
  excerpt: "Ngoài gửi tiết kiệm, trái phiếu Doanh nghiệp cũng là một kênh đầu tư mang lại mức sinh lời cực kỳ hấp dẫn cho Quý Khách hàng. <mark>HDBank</mark> hiện đang sẵn các nguồn thu hộ trái phiếu DN của <mark>HDBank</mark>, Vietjet : ✅ Kỳ hạn linh hoạt từ 01-12 tháng ✅ Mức sinh lời cố định ✅ Tất toán được trước hạn ✅ Mua bán có tin nhắn gửi SMS, email ✅ Có phôi xác nhận số dư trái phiếu...",
  engagement: {
   reactions: 11,
   shares: 0,
   comments: 6
  }
 },
 {
  id: 728,
  title: "SẴN SÀNG HÔM NAY - VỮNG VÀNG TƯƠNG LAI​ 📌 Tìm hiểu chi tiết tại:...",
  source: "HDBank",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 17:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hdbankfanpage/posts/pfbid02J3smfeG8QNYjnR3dr6sB2CuPaoks3Y8FBG1nZDj1mVR4Jcb2i6qbUWSn7BqvMgail",
  excerpt: "🛡️ SẴN SÀNG HÔM NAY - VỮNG VÀNG TƯƠNG LAI​ 📌 Tìm hiểu chi tiết tại: https://<mark>hdbank</mark>.com.vn/s/hdb_bhiemvungvang 🎁 Những kế hoạch cho tương lai sẽ trọn vẹn hơn khi được chuẩn bị từ hôm nay. ​ Và với thẻ tín dụng <mark>HDBank</mark>, mỗi khoản phí bảo hiểm còn được tối ưu thêm với hoàn tiền và trả góp 0 lãi, 0 phí. ​ ✨ Hoàn tiền đến 02 triệu đồng khi thanh toán phí...",
  engagement: {
   reactions: 1010,
   shares: 206,
   comments: 848
  }
 },
 {
  id: 729,
  title: "VN-INDEX GIẢM NHẸ NHƯNG DÒNG TIỀN ĐANG “CHỌN MẶT GỬI VÀNG”: TÍCH LŨY HAY CHỈ LÀ NHỊP HỒI TRONG...",
  source: "Nguyễn Việt Trung",
  sourceType: "Facebook",
  date: "2026-10-07 16:47",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nguyenviettrungtrainer/posts/pfbid0hgaCiYqdoSzK8HQmjxety4uxoKw8jWWsjbD3x4vYgwSoq25DhuufJ2GBDSBAwouDl",
  excerpt: "...hoảng 922 tỷ đồng . Tâm điểm tiếp tục là PNJ bị bán ròng 403,4 tỷ đồng, tiếp theo là TCB -112,1 tỷ, <mark>HDB</mark> -95,5 tỷ, FPT -66,6 tỷ, VIX -43,3 tỷ, MSB -35,2 tỷ, GMD -34,7 tỷ, HAH -33,9 tỷ, TCX -33,7 tỷ và VHM -32,4 tỷ đồng. Ở chiều mua, khối ngoại giải ngân vào MSN +44,3 tỷ, BSR +36,7 tỷ, VIB +32,7 tỷ và MCH +30,4 tỷ đồng. Đáng chú ý, MSN, BSR và VIB vừa...",
  engagement: {
   reactions: 21,
   shares: 1,
   comments: 7
  }
 },
 {
  id: 730,
  title: "ĐIỂM TIN THỊ TRƯỜNG | NGÀY 07.10 DÒNG TIỀN PHÂN HÓA - VNINDEX ĐIỀU CHỈNH NHẸ 📌 Các diễn biến...",
  source: "Chứng khoán Vikki - VikkibankS",
  sourceType: "Facebook",
  date: "2026-10-07 16:24",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/VikkibankS68/posts/pfbid02FMAEn3re2kcbNRgQT2bTFXsRbhsiLnkGCaNRtRtzm52JcutMkLZDWdskCWQYPhwcl",
  excerpt: "...n ròng với tổng giá trị bán ròng là 934,29 tỷ đồng. Bán ròng: PNJ (339 tỷ đồng), TCB (111 tỷ đồng), <mark>HDB</mark> (89 tỷ đồng). Mua ròng: MSN (44 tỷ đồng), BSR (37 tỷ đồng), VIB (32 tỷ đồng). 🎯 Khuyến nghị: Nhà đầu tư nên tiếp tục duy trì tỷ trọng danh mục ở mốc an toàn, tập trung quản trị rủi ro ở các mã cổ phiếu vi phạm ngưỡng cắt lỗ ngắn hạn và tận dụng các...",
  engagement: {
   reactions: 6,
   shares: 1,
   comments: 1
  }
 },
 {
  id: 731,
  title: "VIETCOMBANK, BIDV, VPBANK... CÙNG VÀO CUỘC ĐUA HUY ĐỘNG VỐN KHỦNG Các ngân hàng Việt Nam đang...",
  source: "Banking Insider ",
  sourceType: "Facebook",
  date: "2026-10-07 16:06",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/bankinginsider/posts/pfbid02RQfmffmNUJ5RWMPmU4Gqd8G1jwTvXg8egbwqMCYTH3vCrkTArrn68n5hY9MvhSwZl",
  excerpt: "... khoảng 1,2 tỷ USD; BIDV có thể tiếp tục bán gần 11% cổ phần với giá trị khoảng 1,4 tỷ USD. VPBank, <mark>HDBank</mark> và Techcombank cũng đang xúc tiến các kế hoạch huy động vốn từ nhà đầu tư trong và ngoài nước. Đáng chú ý, một số ngân hàng đã được phép nâng room ngoại lên 49%, mở thêm dư địa thu hút dòng vốn quốc tế. =&gt; Cuộc đua tăng vốn đang nóng lên khi nhu...",
  engagement: {
   reactions: 15,
   shares: 1,
   comments: 3
  }
 },
 {
  id: 732,
  title: "SẮP DIỄN RA GO GLOBAL BẮC NINH 2026: NÂNG CAO NĂNG LỰC, KẾT NỐI CHUỖI, PHÁT TRIỂN THỊ TRƯỜNG...",
  source: "Dân trí",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 16:03",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/baodantridientu/posts/pfbid0GYHqZZW984bbnEcnt4cVWvB4JgD7d1KJH91FgLYErZYVYUDtcjKmcNanCJc9MDUXl",
  excerpt: "...ms/d/e/1FAIpQLSfLYMKbYv5dIcf2xnqMNqPW_QlYDFymxcBVVkqpehPQqJOkBA/viewform GoGlobalBacNinh2026 Dantri <mark>HDBank</mark> DoanhNghiepViet BacNinh",
  engagement: {
   reactions: 8,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 733,
  title: "HDBankActivationDay HD HD026027",
  source: "Như Ý Phan",
  sourceType: "Facebook",
  date: "2026-10-07 15:27",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nhu.y.phan.772170/posts/pfbid0kRoSr3F3N9gRv9vQms9TZumxvUZZmqA2Nh6uSSVERY4tWzcQa9c4GfLC18Nkoa5Ql",
  excerpt: "📎<mark>HDBank</mark>ActivationDay HD HD026027",
  engagement: {
   reactions: 2,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 734,
  title: "Được ngày lên Hà Nội, lại có dịp gặp anh Trần Hoài Phương ❤️🎸 nghệ sĩ guitarist classical với...",
  source: "@yann.es90",
  sourceType: "Threads",
  date: "2026-10-07 15:17",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@yann.es90/post/DeL6SF7D0-_",
  excerpt: "Được ngày lên Hà Nội, lại có dịp gặp anh Trần Hoài Phương ❤️🎸 nghệ sĩ guitarist classical với nhiều cống hiến cho âm nhạc nước nhà. Ko những thế anh còn là giám đốc khối Kh Doanh nghiệp <mark>HDBank</mark>. Đúng là idol em 🥹 Cảm ơn anh vì những tình cảm, những câu chuyện và những điều tốt đẹp anh luôn dành cho đàn em. Mong sẽ còn thật nhiều dịp được ngồi với anh,...",
  engagement: {
   reactions: 9,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 735,
  title: "Phiên giao dịch 07/10 - Có thứ để nói sau chuỗi giao dịch buồn chán 1. PNJ chính thức lủng đáy...",
  source: "Phạm Hoàng Hải",
  sourceType: "Facebook",
  date: "2026-10-07 15:14",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hoanghai.pham.3348390/posts/pfbid0346C45qkt3D9xhRBdc7dhT6WSyzsN4z7y55dNttRtFmjPKy1PCsk9CmJCeraHqZAWl",
  excerpt: "...à cực phân hoá. Bank có liên quan Sun, Vin thì tạo câu chuyện riêng. Bank tư nhân có VPB đang khoẻ, <mark>HDB</mark> chịu đợt bán mạnh của khối ngoại. Bank nhà nước thì có CTG không khác gì chim báo bão",
  engagement: {
   reactions: 34,
   shares: 4,
   comments: 0
  }
 },
 {
  id: 736,
  title: "Hôm nay kể chuyện cầm dưới 1 tỷ đi gửi tiết kiệm cho bà con nghe chơi 😆 Trước khi đi, tui ngồi...",
  source: "Toàn Lê",
  sourceType: "Facebook",
  date: "2026-10-07 15:02",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/le.toan154/posts/pfbid0Hu2m8T2YdwPwj5NVB87UDRhRoe4EDhgfLFG3LpGiQ4iNx2cVqAFE2k1wQNn5sjLkl",
  excerpt: "...h phí: cỡ 8.5%/năm Tui ngồi suy nghĩ 3 giây rồi nhẹ nhàng: “ xin phép… BYE BYE!”👋🤣 Sau đó tui qua <mark>HDBank</mark>, bên này báo 9.3%/năm, kỳ hạn 6 tháng. Tui thấy cũng ổn áp, tính chốt kèo luôn rồi. Đúng lúc đó nhỏ bạn làm ngân hàng gọi: — “Ê Tòn, qua NCB đi, bên này 9.5%/năm, kỳ hạn 6 tháng!” Tui: — “Ủa? Còn chỗ nào cao hơn nữa không để tui đi một vòng...",
  engagement: {
   reactions: 45,
   shares: 6,
   comments: 92
  }
 },
 {
  id: 737,
  title: "HDBANK TUYÊN QUANG – 20/10 TRAO YÊU THƯƠNG, TÀI LỘC ĐONG ĐẦY 🌷 Nhân ngày Phụ nữ Việt Nam 20/10,...",
  source: "Hoàng Thu Thảo",
  sourceType: "Facebook",
  date: "2026-10-07 14:54",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hoang.thu.thao.278402/posts/pfbid02BfYYaPxNJLMFBfYG9wSeeXGrPh3oswWxVYat8f6gr5v5uLnRtQqr6are93ixJCdMl",
  excerpt: "🌷 <mark>HDBANK</mark> TUYÊN QUANG – 20/10 TRAO YÊU THƯƠNG, TÀI LỘC ĐONG ĐẦY 🌷 Nhân ngày Phụ nữ Việt Nam 20/10, <mark>HDBank</mark> Tuyên Quang gửi tặng 100 chú heo đất đỏ &amp; vàng đến Quý khách hàng nữ như một lời tri ân yêu thương. 💐 🐷 Heo đỏ – Trao yêu thương ❤️ 🐷 Heo vàng – Gửi tài lộc 💛 🎁 QUÀ TẶNG ĐẶC BIỆT – SỐ LƯỢNG CÓ HẠN 💰 Gửi tiết kiệm từ 50 triệu đồng, kỳ hạn 6...",
  engagement: {
   reactions: 19,
   shares: 5,
   comments: 3
  }
 },
 {
  id: 738,
  title: "BẢN TIN VĨ MÔ – 07/10/2026 Việt Nam: GDP quý III tăng 9,95% YoY, 9 tháng tăng 9,01%, nhưng CPI...",
  source: "Lâm Tuấn Kiệt",
  sourceType: "Facebook Group",
  date: "2026-10-07 14:52",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/diendanchungviet/posts/2160817574784265/",
  excerpt: "... khí. Dòng vốn ngoại: Phiên 06/10, khối ngoại bán ròng khoảng 2.500–2.700 tỷ đồng, tập trung mạnh ở <mark>HDB</mark> và VJC; đây đã là phiên bán ròng thứ 10 liên tiếp trên HoSE. Áp lực ngoại vẫn là điểm trừ ngắn hạn đối với VN-Index và nhóm vốn hóa lớn dù câu chuyện nâng hạng vẫn tích cực về trung hạn. Đánh giá chung: Nội lực kinh tế Việt Nam đang mạnh, nhưng CPI...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 739,
  title: "Vikki bank nhắn anh Zl 0971492951",
  source: "@dk_reuss",
  sourceType: "Threads",
  date: "2026-10-07 14:51",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dk_reuss/post/DeL3TxOE8F3",
  excerpt: "<mark>Vikki bank</mark> nhắn anh Zl 0971492951",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 740,
  title: "CUỘC ĐUA PHÁT HÀNH TRÁI PHIẾU NGÂN HÀNG: GẦN 165.000 TỶ ĐỒNG CHỈ TRONG HƠN 4 THÁNG Từ đầu tháng...",
  source: "@chuyennhabang_official",
  sourceType: "Threads",
  date: "2026-10-07 14:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@chuyennhabang_official/post/DeLxf5iE_HB",
  excerpt: "...tổng cộng khoảng 164.658,8 tỷ đồng trái phiếu. Dẫn đầu là Sacombank với 21.650 tỷ đồng, theo sau là <mark>HDBank</mark> với hơn 19.300 tỷ đồng và Techcombank với 19.000 tỷ đồng. Nhóm phía sau cũng ghi nhận quy mô lớn như Agribank 14.672,9 tỷ đồng, LPBank 13.200 tỷ đồng, MB 12.350 tỷ đồng và VIB 12.300 tỷ đồng.",
  engagement: {
   reactions: 5,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 741,
  title: "CHẠM NGÕ MÙA VÀNG, VI VU SA PA CÙNG VIKKI! 💜 🌿 Mùa lúa chín đẹp nhất đã đến, cũng là lúc lên...",
  source: "Ngân hàng Số Vikki",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 14:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/Vikki.NganhangSo/posts/pfbid02ptjk1LpX6eLytzL95QS8amd93pziPnXJ23ZxFzBFpPkCQz1qoxNUWzgCJJKyqBqjl",
  excerpt: "🌾 CHẠM NGÕ MÙA VÀNG, VI VU SA PA CÙNG <mark>VIKKI</mark>! 💜 🌿 Mùa lúa chín đẹp nhất đã đến, cũng là lúc lên lịch cho một chuyến Sa Pa thật chill. Nếu đang ấp ủ hành trình khám phá Mùa Vàng, chớp ngay ưu đãi vé xe đến 100k trên App <mark>Vikki</mark> và sẵn sàng lên đường vi vu thôi nào! 💜 Mở App <mark>Vikki</mark> và đặt vé ngay:https://<mark>vikki</mark>.onelink.me/vqMz/67o1n1bo <mark>Vikki</mark>...",
  engagement: {
   reactions: 1587,
   shares: 1114,
   comments: 1298
  }
 },
 {
  id: 742,
  title: "Độc lập tự do, ăn no là hạnh phúc. Thanh toán bằng thẻ HDBank trên GrabFood để tiết kiệm đến...",
  source: "Grab",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 14:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/GrabVN/posts/pfbid0tZNToABt4dFBWRXz2TYWoXrBzGXunx6xprimJqxem7prkzSpi51wGZvu273KNEUTl",
  excerpt: "✨ Độc lập tự do, ăn no là hạnh phúc. Thanh toán bằng thẻ <mark>HDBank</mark> trên GrabFood để tiết kiệm đến 135.000đ/tháng. Ưu đãi chỉ dành cho người dùng là chủ thẻ <mark>HD Bank</mark> 😉 🤫Bật mí mật mã để tận dụng ưu đãi nè 💚 Dành cho người dùng lần đầu liên kết thẻ <mark>HD Bank</mark> vào ứng dụng Grab Nhập HDBTPTNEW để được giảm 25K cho mỗi chuyến GrabCar từ 50K Nhập HDBFOODNEW để...",
  engagement: {
   reactions: 8,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 743,
  title: "CUỘC ĐUA PHÁT HÀNH TRÁI PHIẾU NGÂN HÀNG: GẦN 165.000 TỶ ĐỒNG CHỈ TRONG HƠN 4 THÁNG Từ đầu tháng...",
  source: "Chuyện Nhà Băng 2.0",
  sourceType: "Facebook",
  date: "2026-10-07 13:59",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/chuyencuabank/posts/pfbid02dzCAEj2ypSdujZ82me1y7L1iNpA6hzpNasPGU8wPXEcBQ9CaHUnGGagksRLmw4g8l",
  excerpt: "...tổng cộng khoảng 164.658,8 tỷ đồng trái phiếu. Dẫn đầu là Sacombank với 21.650 tỷ đồng, theo sau là <mark>HDBank</mark> với hơn 19.300 tỷ đồng và Techcombank với 19.000 tỷ đồng. Nhóm phía sau cũng ghi nhận quy mô lớn như Agribank 14.672,9 tỷ đồng, LPBank 13.200 tỷ đồng, MB 12.350 tỷ đồng và VIB 12.300 tỷ đồng. Điểm đáng chú ý là mức lãi suất giữa các ngân hàng...",
  engagement: {
   reactions: 15,
   shares: 5,
   comments: 0
  }
 },
 {
  id: 744,
  title: "Bên em kì hạn 6th trở lên 9.5-9.6 + quà VIKKI BANK Lh em :0795871129(Bích) Hỗ trợ onl miễn phí",
  source: "@hcibw_w",
  sourceType: "Threads",
  date: "2026-10-07 13:55",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hcibw_w/post/DeLw8YMmQsf",
  excerpt: "Bên em kì hạn 6th trở lên 9.5-9.6 + quà <mark>VIKKI BANK</mark> Lh em :0795871129(Bích) Hỗ trợ onl miễn phí",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 745,
  title: "HDBANK CHÚC MỪNG CỜ VUA VIỆT NAM: THÀNH CÔNG VƯỢT KỲ VỌNG TẠI OLYMPIAD 2026! Hơn một thập kỷ...",
  source: "Nguyễn Quân Kha",
  sourceType: "Facebook",
  date: "2026-10-07 13:38",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/kha.nguyenquan.9/posts/pfbid02Ppw47RngeARChZzyw4hSFyKN2J9hgko5ezWVuVUqZgZZmQHisdgbjtm6vmmob6Kbl",
  excerpt: "♟️ <mark>HDBANK</mark> CHÚC MỪNG CỜ VUA VIỆT NAM: THÀNH CÔNG VƯỢT KỲ VỌNG TẠI OLYMPIAD 2026! Hơn một thập kỷ đồng hành cùng cờ vua Việt Nam, <mark>HDBank</mark> tiếp tục sát cánh cùng đội tuyển tại FIDE Chess Olympiad 2026, diễn ra từ 15–28/9 tại Samarkand, Uzbekistan. Được ví như “Olympic của làng cờ”, Giải do Liên đoàn Cờ vua Thế giới (FIDE) tổ chức 02 năm một lần, quy tụ hầu...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 746,
  title: "BẢN TIN CHỨNG KHOÁN – 07/10/2026 CỔ PHIẾU & DOANH NGHIỆP 1. HDBank, VPBank và loạt ngân hàng đẩy...",
  source: "Vantruyen Nguyen",
  sourceType: "Facebook Group",
  date: "2026-10-07 13:32",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/a.chungkhoan.ndc/posts/2338374216929440/",
  excerpt: "BẢN TIN CHỨNG KHOÁN – 07/10/2026 CỔ PHIẾU &amp; DOANH NGHIỆP 1. <mark>HDBank</mark>, VPBank và loạt ngân hàng đẩy mạnh vay vốn quốc tế <mark>HDBank</mark> vừa huy động thành công 721 triệu USD, trong khi VPBank ký khoản vay hợp vốn 1,44 tỷ USD. MB, VIB, SHB, ACB... cũng đang tích cực tìm kiếm nguồn vốn quốc tế khi nhu cầu tín dụng trong nước tăng cao. 2. HPG tiếp tục được đánh giá...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 747,
  title: "Cũng lâu rồi!",
  source: "Nhatbichtuyen Phan",
  sourceType: "Facebook",
  date: "2026-10-07 13:19",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/nhatbichtuyen/posts/pfbid02CWUG5C5QDEun1P3NCk73Brh99jLt4gty6kX9XbbH9eMbn4mfpnm1pwvuscitaKyLl",
  excerpt: "Cũng lâu rồi!",
  engagement: {
   reactions: 63,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 748,
  title: "VN-INDEX ĐIỀU CHỈNH HƠN 14 ĐIỂM VÀ CÂU CHUYỆN HẤP THỤ VỐN NGOẠI 📉 Thị trường sau phiên sáng...",
  source: "Cáo & Thỏ FC",
  sourceType: "Facebook",
  date: "2026-10-07 13:11",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/caovathofc/posts/pfbid0xwq9AcMs19pwGyoVRUEEBu6g1XgahZiVvjdSNg7pmndryDZJe9wMzDdYa2YNBYunl",
  excerpt: "... tượng bán ròng, tức giá trị bán ra vượt trội so với mua vào, tập trung mạnh ở các cổ phiếu lớn như <mark>HDB</mark> với 2.000 tỷ đồng và VJC với 770 tỷ đồng, đè nặng lên tâm lý người cầm cổ phiếu. Để cải thiện tính thanh khoản và nâng cao hiệu quả vận hành, Ủy ban Chứng khoán Nhà nước đang nghiên cứu cơ chế giao dịch xuyên trưa, tức duy trì khớp lệnh liên tục qua...",
  engagement: {
   reactions: 7,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 749,
  title: "Danh sách ủng hộ đội thi dân vũ đến thời điểm hiện tại ạ . Trân trọng cảm ơn tình cảm của bà con...",
  source: "@hang1286nguyen",
  sourceType: "Threads",
  date: "2026-10-07 12:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hang1286nguyen/post/DeLnbIMCS1E",
  excerpt: "... sự ủng hộ xin gửi về cho các chị trong BCH chi hội phụ nữ Thôn Gia Thiện . Hoặc qua stk 8886699888 <mark>hdbank</mark> Nguyễn Thị Hằng ạ .",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 750,
  title: "Bank Vietnam rancang jualan saham hampir AS$7 bilion bagi mendapatkan modal tambahan susulan...",
  source: "@ekonomirakyatmy",
  sourceType: "Threads",
  date: "2026-10-07 12:30",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@ekonomirakyatmy/post/DeLnIluHKVx",
  excerpt: "...II serta pembiayaan pertumbuhan ekonomi, dengan beberapa bank seperti VPBank, Vietcombank, BIDV dan <mark>HDBank</mark> merancang penjualan saham kepada pelabur asing.",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 751,
  title: "Bản tin hành động đầu tư trưa 07/10/2026 Thị trường Việt Nam Dữ liệu gần nhất trước giờ nghỉ...",
  source: "Diễn đàn Công nghệ dầu khí Community",
  sourceType: "Facebook",
  date: "2026-10-07 12:21",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/congnghedaukhi/posts/pfbid0HCd7VTmw8ycK1udWXNVzHNVeJwwbTESi3ZrRDwmhx2fmktvo2PmRTPe1yUvCv2PGl",
  excerpt: "...ăng 5,88 điểm nhưng số mã giảm vẫn áp đảo; khối ngoại bán ròng hơn 2.519 tỷ đồng, tập trung lớn tại <mark>HDB</mark>, VJC, PNJ, TCB và ACB. Điều này cho thấy nhịp phục hồi chưa đủ chắc để mua mạnh. Kịch bản hành động Giữ được 1.740–1.750 và độ rộng cải thiện vào chiều nay → có thể mua thăm dò từng phần. Thủng 1.740 với thanh khoản tăng → ưu tiên tiền mặt, không...",
  engagement: {
   reactions: 32,
   shares: 1,
   comments: 2
  }
 },
 {
  id: 752,
  title: "E muốn gửi 500tr ngân hàng HD BANK hoặc SACOMBANK khu vực ĐỒNG NAI kỳ hạn 6tháng hoặc 1năm ls...",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-07 12:16",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/guitietkiemnganhang/posts/4450965581786785/",
  excerpt: "E muốn gửi 500tr ngân hàng <mark>HD BANK</mark> hoặc SACOMBANK khu vực ĐỒNG NAI kỳ hạn 6tháng hoặc 1năm ls bao nhiêu ạ ?",
  engagement: {
   reactions: 28,
   shares: 0,
   comments: 122
  }
 },
 {
  id: 753,
  title: "Mới đky thẻ HDBank online được duyệt 15tr thẻ vật lý khi nào giao vậy m.n với thường bên nào sẽ...",
  source: "Khánh Nguyễn",
  sourceType: "Facebook Group",
  date: "2026-10-07 11:56",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/231126739172130/posts/1414190680865724/",
  excerpt: "Mới đky thẻ <mark>HDBank</mark> online được duyệt 15tr thẻ vật lý khi nào giao vậy m.n với thường bên nào sẽ giao vậy",
  engagement: {
   reactions: 7,
   shares: 0,
   comments: 12
  }
 },
 {
  id: 754,
  title: "DẪN ĐẦU ĐIỂM CHẠM – ĐIỂM HẸN KẾT NỐI Với tinh thần tiên phong, Ngân hàng Số Vikki đưa trải...",
  source: "Ngân hàng Số Vikki",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 11:03",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/Vikki.NganhangSo/posts/pfbid02GFMxKgyoxAJjEQN94yTLqbXodSLYz2xc85cznzvLnQi56inWVcc4f3PBt8jgxnMMl",
  excerpt: "🏆 DẪN ĐẦU ĐIỂM CHẠM – ĐIỂM HẸN KẾT NỐI Với tinh thần tiên phong, Ngân hàng Số <mark>Vikki</mark> đưa trải nghiệm ngân hàng đến gần hơn với đời sống, để mỗi điểm chạm trở thành một điểm hẹn, nơi khách hàng cùng trò chuyện, trải nghiệm, sẻ chia niềm vui và vun đắp những dự định tương lai. 💜 Cảm ơn bạn đã cùng Ngân hàng Số <mark>Vikki</mark> tạo nên những kết nối giàu cảm hứng....",
  engagement: {
   reactions: 1591,
   shares: 1100,
   comments: 1307
  }
 },
 {
  id: 755,
  title: "THỊ TRƯỜNG HỒI PHỤC PHIÊN THỨ 2 — NHƯNG DÒNG TIỀN VẪN THẬN TRỌNG VN-Index kết phiên 06/10 tại...",
  source: "Trần Tiền",
  sourceType: "Facebook Group",
  date: "2026-10-07 10:57",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/1026895473667579/posts/1096234760066983/",
  excerpt: "...n là ngưỡng cần theo dõi. Một số điểm đáng chú ý sáng 07/10: 🔹 Khối ngoại tiếp tục bán ròng, riêng <mark>HDB</mark> ghi nhận khoảng 2.000 tỷ đồng qua giao dịch thỏa thuận. 🔹 Mùa KQKD quý III đang trở thành tâm điểm, có thể khiến dòng tiền phân hóa mạnh hơn giữa các nhóm cổ phiếu. 🔹 VGT: Lợi nhuận 9 tháng đạt 1.470 tỷ đồng, vượt 6,5% kế hoạch cả năm. 🔹 NVL: Lên...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 756,
  title: "Có bác nào pv bên HDSAISON chưa, mình xin review môi trường làm việc và lương thưởng bên này...",
  source: "Anonymous participant",
  sourceType: "Facebook Group",
  date: "2026-10-07 10:54",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/782850425639223/posts/2208408236416761/",
  excerpt: "Có bác nào pv bên <mark>HDSAISON</mark> chưa, mình xin review môi trường làm việc và lương thưởng bên này với, mới đầu đọc tưởng <mark>HDBANK</mark>",
  engagement: {
   reactions: 6,
   shares: 0,
   comments: 8
  }
 },
 {
  id: 757,
  title: "Người ta có câu “vững như bàn thạch”, còn chứng sĩ cầm SHB thì nâng cấp thành: “VỮNG NHƯ SHB” 🫢...",
  source: "Việt Nguyễn",
  sourceType: "Facebook",
  date: "2026-10-07 10:50",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/piiet.na/posts/pfbid0poVm6qVVy51WBkkq3W2DGbKYpTgA1UsqPJ1xpxTJnWm5kRhmHNAZXfhpNemvG3Qil",
  excerpt: "...đau. 60% NAV nằm im, cổ phiếu cũng nằm im. Chỉ có tài khoản là mỗi ngày một khác. 🤡 Nhìn VPB, ACB, <mark>HDB</mark>, MSB chạy mà lòng không đau bằng nhìn SHB… không chạy. P/E rẻ, P/B đẹp, tài sản ngon — nghe thì rất thuyết phục. Nhưng cổ phiếu mà không chịu tăng thì định giá đẹp mấy cũng chỉ đủ để… làm wallpaper. 😂 Hôm nay SHB lại thủng đáy gần nhất. Không biết...",
  engagement: {
   reactions: 66,
   shares: 73,
   comments: 77
  }
 },
 {
  id: 758,
  title: "BẢN TIN TÀI CHÍNH: VN-INDEX ĐẢO CHIỀU RÚT CHÂN NGOẠN MỤC, SÓNG DẦU KHÍ DẪN ĐẦU & LOẠT CƠ CHẾ ĐỘT...",
  source: "Khôi Nguyễn HS - Tư Duy Đầu Tư",
  sourceType: "Facebook",
  date: "2026-10-07 10:23",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/reel/921950427417916/",
  excerpt: "... liệt. 2️⃣ Khối ngoại bán ròng 2.613 tỷ nhưng 90% là thỏa thuận: Tâm điểm xả tập trung ở thỏa thuận <mark>HDB</mark> (gần 2.000 tỷ) và VJC (770 tỷ). Tự doanh lập tức đối ứng mua ròng 275 tỷ gom sạch lượng hàng giá rẻ. 3️⃣ Sóng dầu khí bùng nổ: Bão Vịnh Mexico đe dọa dàn khoan Mỹ kéo giá dầu Brent neo vững trên 101,5 USD/thùng. PVT tím trần (+6,8%), BSR (+5,2%),...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 759,
  title: "8.7 nhắn anh Vikki bank Zl 0971492951",
  source: "@dk_reuss",
  sourceType: "Threads",
  date: "2026-10-07 10:08",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dk_reuss/post/DeLW3_8E2gQ",
  excerpt: "8.7 nhắn anh <mark>Vikki bank</mark> Zl 0971492951",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 760,
  title: "Tháng trước mình có nợ 1,5 tỷ bao gồm thế chấp, tín chấp và thẻ tín dụng, có nhìu khoản bên cttc...",
  source: "@minhhung8219",
  sourceType: "Threads",
  date: "2026-10-07 09:49",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@minhhung8219/post/DeLUuaFEyen",
  excerpt: "...ả Agribank 100tr (có chứng từ ngày 4/10). Đến h Còn nợ Agribank 147tr, lpbank 100tr, 3 thẻ tín dụng <mark>HDBank</mark> 24tr, VIB 18tr, HDss 11tr. Cttc HDss 3 gói 70tr, trả sau momo 6tr nhưng CIC chưa cập nhập lại. Làm nhà nước hs lương 3,66. Có gpdkkd quán cfe có báo cáo thuế thu nhập 30tr/t. Ở Quảng ngãi. Có banker nào gom nợ tín chấp cao đc ko ạ.",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 12
  }
 },
 {
  id: 761,
  title: "Bản tin sáng 07/10 ☀️] KHỐI NGOẠI XẢ RÒNG, DÒNG TIỀN NỘI XOAY TUA Áp lực xả hàng nghìn tỷ từ...",
  source: "Cáo & Thỏ FC",
  sourceType: "Facebook",
  date: "2026-10-07 09:47",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/caovathofc/posts/pfbid0shu6paw5MMFhKgXxrAX2xpVqxs3vW9Rty1KyhAeF4JrB59feiPDD817fRi6Gsao9l",
  excerpt: "...p lực chốt lời nhóm công nghệ gia tăng. 🌍 Khối ngoại rút ròng hơn 1.700 tỷ đồng phiên 06/10, riêng <mark>HDB</mark> và VJC chiếm gần 1.900 tỷ đồng. 💰 Tự doanh công ty chứng khoán quay lại mua ròng gần 275 tỷ đồng trong phiên 06/10. 🏦 Dòng tiền trong nước rút khỏi nhóm ngân hàng, dịch chuyển nhẹ sang chứng khoán và cao su. 🛢️ Giá dầu Brent giảm 1,72 USD xuống...",
  engagement: {
   reactions: 7,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 762,
  title: "Khách cũ HDsaison: + 18t->70t: cccd: 46-70-110 •Khách mới: + sinh viên: thẻ sv: 8 + 21t->70t:...",
  source: "@tham_hd.saison",
  sourceType: "Threads",
  date: "2026-10-07 09:42",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tham_hd.saison/post/DeLT-pskh1N",
  excerpt: "•Khách cũ <mark>HDsaison</mark>: + 18t-&gt;70t: cccd: 46-70-110 •Khách mới: + sinh viên: thẻ sv: 8 + 21t-&gt;70t: cccd: 15 : bằng lái xe: 25 : giấy phép kd: 40 : bhyt cty: 50 KO TRẢ CHẬM - NẬU XỚ DÉP: Oba844ba8Oba6 📲",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 763,
  title: "Vikki digital bank nghe lạ lẫm phết. Tiền thân là Đông Á nay chịu sự quản lý của HD bank. Giao...",
  source: "Dược Sĩ Hạnh",
  sourceType: "Facebook",
  date: "2026-10-07 09:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/hanh.chuthi.79/posts/pfbid04yQuZLXWJoq7tgNYd1MDNAZ11dvaCLSmDhXi8KXnVT1jKuFQbY4xgaZU69pGmtdfl",
  excerpt: "-<mark>Vikki</mark> digital bank nghe lạ lẫm phết. Tiền thân là <mark>Đông Á</mark> nay chịu sự quản lý của <mark>HD bank</mark>. Giao diện đẹp bắt mắt, cafe đồ uống ngon, độ uy tín thì các chị tự tham khảo nha.",
  engagement: {
   reactions: 15,
   shares: 0,
   comments: 10
  }
 },
 {
  id: 764,
  title: "HDBANK TIẾP TỤC GHI DẤU ẤN TẠI THƯƠNG HIỆU MẠNH VIỆT NAM 2026 Ngày 3/10 tại Hà Nội, HDBank nhận...",
  source: "HDBank Dầu Giây",
  sourceType: "Facebook Fanpage",
  date: "2026-10-07 09:29",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/HDBDauGiay/posts/pfbid026zvRzBiqoTmTKpEqaf7WDoN5s4yc9y7TyqzcDX3SUA7bHv2oVnJkKjWZWjkWp1TXl",
  excerpt: "<mark>HDBANK</mark> TIẾP TỤC GHI DẤU ẤN TẠI THƯƠNG HIỆU MẠNH VIỆT NAM 2026 Ngày 3/10 tại Hà Nội, <mark>HDBank</mark> nhận danh hiệu “Thương hiệu Doanh nghiệp Phát triển ấn tượng” trong Chương trình Thương hiệu Mạnh Việt Nam 2026 do Hội Khoa học Kinh tế Việt Nam và Tạp chí Kinh tế Việt Nam - VnEconomy - Vietnam Economic Times tổ chức. Danh hiệu mới tiếp nối những lần <mark>HDBank</mark> được...",
  engagement: {
   reactions: 3,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 765,
  title: "Cập nhật thị trường chứng khoán VNINDEX ngày 5/10 và 6/10 - Phiên 5/10: VN-Index hồi phục mạnh...",
  source: "Hồ Bảo",
  sourceType: "Facebook Group",
  date: "2026-10-07 09:20",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/chungkhoanf319/posts/29610362318564844/",
  excerpt: "... vì lực cầu đã xuất hiện rõ hơn. - Bên cạnh đó, phiên 6/10 khối ngoại bán mạnh: Khối ngoại bán ròng <mark>HDB</mark> khoảng 1.958 tỷ đồng trong phiên 6/10. VJC khối ngoại cũng bán mạnh. Điểm cần chú ý: <mark>HDB</mark> và VJC có giao dịch thỏa thuận rất lớn; riêng <mark>HDB</mark> khoảng 1.981,8 tỷ đồng và VJC khoảng 764 tỷ, trong đó nhà đầu tư nước ngoài bán cho nhà đầu tư trong nước....",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 766,
  title: "CHƯƠNG TRÌNH KHÔNG THỂ BỎ LỠ TRONG THÁNG 10 DÀNH CHO TÍN ĐỒ SAMSUNG! Thanh toán bằng thẻ tín...",
  source: "Quỳnh Sala",
  sourceType: "Facebook",
  date: "2026-10-07 09:17",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/muanhathuduc/posts/pfbid02rUoSGxRRsXbJjp8EfQPJ7HzJSb2K16qzGDEvdNnvHibWNawTPUTh7jFvzt4aSS6bl",
  excerpt: "🔥 CHƯƠNG TRÌNH KHÔNG THỂ BỎ LỠ TRONG THÁNG 10 DÀNH CHO TÍN ĐỒ SAMSUNG! Thanh toán bằng thẻ tín dụng quốc tế <mark>HDBank</mark> khi mua Samsung Galaxy Z Series hoặc sản phẩm Samsung bất kỳ, hóa đơn từ 30 triệu đồng trở lên, có cơ hội nhận e-voucher 2 triệu đồng. ⏰ Áp dụng từ 01/10 – 31/10/2026 hoặc đến khi hết ngân sách chương trình. <mark>HDBank</mark> Samsung SamsungGalaxy...",
  engagement: {
   reactions: 4,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 767,
  title: "VAY NGAY ĐẾN 50 TRIỆU - TIẾP SỨC CHO NGƯỜI GIEO CHỮ 🌐 Website:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-07 09:11",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeLQbchnX6l",
  excerpt: "VAY NGAY ĐẾN 50 TRIỆU - TIẾP SỨC CHO NGƯỜI GIEO CHỮ 🌐 Website: https://credit4tomorrow.<mark>hdsaison</mark>.com.vn Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 📍 Hoặc liên hệ với nhân viên <mark>HD SAISON</mark> để được hỗ trợ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 768,
  title: "Dành cho Quý thầy cô đang cân nhắc bài toán tài chính cho các kế hoạch: học thêm kỹ năng mới,...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-07 09:11",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeLQbdunb0n",
  excerpt: "📚 Dành cho Quý thầy cô đang cân nhắc bài toán tài chính cho các kế hoạch: học thêm kỹ năng mới, cập nhật công nghệ, ứng dụng AI hay nâng cấp thiết bị dạy học,... Gói vay giáo viên từ <mark>HD SAISON</mark> chính là giải pháp thích hợp, giúp thầy cô chủ động nâng cấp bản thân, nâng tầm bài giảng và đồng hành cùng học sinh thân yêu ♥️ ️",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 769,
  title: "Báo cáo phân tích nhanh xu hướng dòng tiền các nhóm ngành và danh sách các cổ phiếu dẫn dắt cập...",
  source: "Gom Tin News",
  sourceType: "Facebook Group",
  date: "2026-10-07 09:09",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/chungkhoanf319/posts/29610341995233543/",
  excerpt: "...trì sức mạnh vượt trội. Cổ phiếu phòng thủ dẫn dắt: MSB (88 điểm, +4 điểm), VPB (86 điểm, +2 điểm), <mark>HDB</mark> (81 điểm, +2 điểm) và TCB (70 điểm, +2 điểm) bảo toàn đà tăng kỹ thuật. Trạng thái nhìn chung ổn định và nổi bật hơn hoàn toàn so với phần còn lại của ngành. Các mã còn lại: Mặc dù nhịp phục hồi xuất hiện trên nhiều cổ phiếu nhưng chưa đủ động lực...",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 770,
  title: "Em Lan Anh luôn ngồi đây sẵn sàng hỗ trợ anh chị với những sản phẩm dịch vụ tốt nhất ❤️❤️ 👉Lãi...",
  source: "Lan Anh Nguyen",
  sourceType: "Facebook",
  date: "2026-10-07 09:05",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/lananh.gau.33/posts/pfbid02QTdLjXNxaHPRPQ5eTfMgvfk1udPKhhTW3NmvwBLyhLh43G3vkKXnVtKPAqo3Jdnul",
  excerpt: "Em Lan Anh luôn ngồi đây sẵn sàng hỗ trợ anh chị với những sản phẩm dịch vụ tốt nhất ❤️❤️ 👉Lãi vay siêu ưu đãi 👉Lãi tiền gửi top đầu thị trường <mark>Hdbank</mark> Vũng Áng Địa chỉ : 866 Lê Thái Tổ, phường Vũng Áng, tỉnh Hà Tĩnh",
  engagement: {
   reactions: 39,
   shares: 70,
   comments: 0
  }
 },
 {
  id: 771,
  title: "VikkiBank gửi tiết kiệm truyền thống - Không chứng chỉ tiền gửi - Từ 50tr ls 8,9% - Từ 200tr ls...",
  source: "@_lyn.ttpl_",
  sourceType: "Threads",
  date: "2026-10-07 08:58",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@_lyn.ttpl_/post/DeLO5XMEz4f",
  excerpt: "🔥<mark>VikkiBank</mark> gửi tiết kiệm truyền thống - Không chứng chỉ tiền gửi - Từ 50tr ls 8,9% - Từ 200tr ls 9,2%, lãi kép lên đến 9,4% - Từ 500tr ls 9.5%, lãi kép lên đến 9.6% 👉Nhận lãi đầu kỳ/lãi tháng/cuối kỳ. 👉In sổ trực tiếp tại quầy – không điều kiện. ☎️ A/c liên hệ e để đc hỗ trợ toàn quốc ạ 0975637922",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 772,
  title: "HDBank tiếp tục khẳng định vị thế khi được S&P Global Market Intelligence xếp thứ 2 về hiệu quả...",
  source: "Quỳnh Sala",
  sourceType: "Facebook",
  date: "2026-10-07 08:57",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/muanhathuduc/posts/pfbid06gMgNxKKQhPtgzrMyPrDKmALeGyJErqqCdtCKwrLaSvUsBxzkiag2K3DiUqN6caRl",
  excerpt: "<mark>HDBank</mark> tiếp tục khẳng định vị thế khi được S&amp;P Global Market Intelligence xếp thứ 2 về hiệu quả hoạt động trong Top 50 ngân hàng niêm yết lớn nhất Đông Nam Á, đồng thời là ngân hàng Việt Nam có thứ hạng cao nhất. Một dấu ấn đáng tự hào về hiệu quả, năng lực vận hành và sức mạnh thương hiệu. ❤️ <mark>HDBank</mark> NganHangBanLe TaiChinh NganHang SPGlobal <mark>HDBank</mark>Vietnam...",
  engagement: {
   reactions: 4,
   shares: 1,
   comments: 1
  }
 },
 {
  id: 773,
  title: "VAY THẾ CHẤP TẠI HDBANK – GIẢI PHÁP VỐN CHO NHỮNG KẾ HOẠCH LỚN ✅ Lãi suất hấp dẫn: Chỉ từ...",
  source: "Liên Ngân Hàng",
  sourceType: "Facebook",
  date: "2026-10-07 08:40",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/lotus.gigi.503/posts/pfbid0mS7uGGGh7V3ojrdpPY8fCVyyzXvB8rMwVqnhZPiX7P9krQxv7nvoZ8iJ3wRPfB5Ul",
  excerpt: "🏡 VAY THẾ CHẤP TẠI <mark>HDBANK</mark> – GIẢI PHÁP VỐN CHO NHỮNG KẾ HOẠCH LỚN ✅ Lãi suất hấp dẫn: Chỉ từ 9,5%/năm ✅ Tài sản đa dạng: Nhận thế chấp cả ĐẤT NÔNG NGHIỆP ✅ Thời gian vay: Tối đa 50 năm ✅ Ân hạn gốc: Đến 10 năm ✅ Thủ tục đơn giản: Giải ngân nhanh chóng, bảo mật thông tin 📩 Liên hệ Ms Liên: 0931 774 766 để tư vấn phương án phù hợp! <mark>hdbank</mark> <mark>hdbank</mark>nhatrang...",
  engagement: {
   reactions: 8,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 774,
  title: "Giằng co phân hóa, dòng tiền vẫn rất thận trọng",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-07 08:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/giang-co-phan-hoa-dong-tien-van-rat-than-trong.htm",
  excerpt: "Ngoài ra TCB -112,1 tỷ, <mark>HDB</mark> -95,5 tỷ, FPT -66,6 tỷ, VIX -43,3 tỷ, MSB -35,2 tỷ, GMD -34,7 tỷ, HAH -33,9 tỷ, TCX -33,7 tỷ, VHM -32,4 tỷ."
 },
 {
  id: 775,
  title: "CHỨNG KHOÁN SÁNG 07/10: VN-INDEX ĐANG HỒI PHỤC HAY CHỈ “NẢY” SAU NHỊP GIẢM? VN-Index tiếp tục...",
  source: "Nguyễn Thế Hưng",
  sourceType: "Facebook",
  date: "2026-10-07 08:30",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/than.nguyenthe.93/posts/pfbid021gWgwrMJ5tLmUHtXWeHaysy9AErmfavEkLzbinifLFAdcQz189J1zDVE1qTVP6Uml",
  excerpt: "...số này nhìn khá đáng ngại, nhưng cần nhìn kỹ: phần lớn giá trị tập trung ở một số giao dịch lớn như <mark>HDB</mark> và VJC. Điều này có nghĩa: 👉 Chưa nên hiểu đơn giản là “khối ngoại đang tháo chạy”. Nhưng rõ ràng, dòng tiền ngoại chưa quay lại, và đây vẫn là một lực cản đối với nhịp hồi. --- 3️⃣ 1.770–1.780 là bài kiểm tra thực sự VN-Index đang tiến sát vùng...",
  engagement: {
   reactions: 0,
   shares: 1,
   comments: 0
  }
 },
 {
  id: 776,
  title: "Tiết kiệm, vay vốn liên hệ mình nhé ☎️☎️0934758378 Em Huyền - HDBank Đà Nẵng",
  source: "@maay__15",
  sourceType: "Threads",
  date: "2026-10-07 08:18",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@maay__15/post/DeLKVbAD7Gc",
  excerpt: "Tiết kiệm, vay vốn liên hệ mình nhé ☎️☎️0934758378 Em Huyền - <mark>HDBank</mark> Đà Nẵng",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 777,
  title: "Bên tuii HDbank 8,8% nè. Tui hổ trợ bạn nhaa 0794.086.340",
  source: "@vthinnn_",
  sourceType: "Threads",
  date: "2026-10-07 07:34",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@vthinnn_/post/DeLFTGbiSjx",
  excerpt: "Bên tuii <mark>HDbank</mark> 8,8% nè. Tui hổ trợ bạn nhaa 0794.086.340",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 778,
  title: "Phiên giao dịch 07/10 - Tiền vào bắt đáy , tín hiệu tạm ổn ✅ VNINDEX có phiên tăng nhẹ phiên hôm...",
  source: "Chứng Khoán Mỗi Ngày - Red Investment",
  sourceType: "Facebook Group",
  date: "2026-10-07 07:26",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.facebook.com/groups/groupchungkhoanviet/posts/1741704953778512/",
  excerpt: "...,và khi nào kéo lên thì lại bán bớt . Nên như vậy thì tốt hơn ✅ Nhóm cổ phiếu cần quan tâm - Bank : <mark>HDB</mark> , VPB , TCB - Bán lẻ : DGW , MWG , FRT - Thoái vốn nhà nước : GVR , GAS , BSR - Khác : PVT , MSR , HAH , DRI Chungkhoanmoingay BantinSang BanTinDauNgay MotNgayGiaoDich ChungKhoanHomNay",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 779,
  title: "Hdbank lãi suất tốt bạn lh mình 0987364001",
  source: "@xoteen92",
  sourceType: "Threads",
  date: "2026-10-07 06:33",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@xoteen92/post/DeK-Q-Kn7F8",
  excerpt: "<mark>Hdbank</mark> lãi suất tốt bạn lh mình 0987364001",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 780,
  title: "Tiến sĩ Nguyễn Thị Phương Thảo đóng góp 30 tỷ đồng làm một việc ý nghĩa nhân dịp Phụ nữ Việt Nam 20/10",
  source: "CafeF",
  sourceType: "Báo chí",
  date: "2026-10-07 04:25",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://cafef.vn/tien-si-nguyen-thi-phuong-thao-dong-gop-30-ty-dong-lam-mot-viec-y-nghia-nhan-dip-phu-nu-viet-nam-20-10-188261007112634632.chn",
  excerpt: "Tiến sĩ <mark>Nguyễn Thị Phương Thảo</mark> đóng góp 30 tỷ đồng làm một việc ý nghĩa nhân dịp Phụ nữ Việt Nam 20/10 Sovico, Vietjet và <mark>HDBank</mark> đóng góp tổng cộng 30 tỷ đồng tại chương trình hỗ trợ phụ nữ, trẻ em mắc bệnh hiểm nghèo có hoàn cảnh khó khăn. Theo thông tin được công bố tại chương trình, Công ty Cổ phần Tập đoàn Sovico, Công ty Cổ phần Hàng không Vietjet..."
 },
 {
  id: 781,
  title: "Lãi suất ngân hàng hôm nay 7/10/2026: 'Ông lớn' trả trước cao nhất 6,39%/năm",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-07 03:38",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-7-10-2026-ong-lon-tra-truoc-cao-nhat-6-39-nam-2562422.html",
  excerpt: "Lãi suất ngân hàng hôm nay, 7/10/2026, ghi nhận tại BIDV, lãi suất huy động trả trước cao nhất ở mức 6,39%/năm, thấp hơn 0,41 điểm phần trăm so với lãi suất huy động trả lãi cuối kỳ."
 },
 {
  id: 782,
  title: "HD hỗ trợ khách hàng sang thẻ khi: Khách đã có thẻ tín dụng ngân hàng khách Không nợ nhóm Chỉ...",
  source: "@phngah_166",
  sourceType: "Threads",
  date: "2026-10-07 00:21",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@phngah_166/post/DeKTzd_D5BE",
  excerpt: "HD hỗ trợ khách hàng sang thẻ khi: Khách đã có thẻ tín dụng ngân hàng khách Không nợ nhóm Chỉ cần có dòng tiền chuyển về <mark>HDBank</mark> (1 tháng sau thì ra thẻ) Lh 0365853534 bank HD Vietjet",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 783,
  title: "Tân phú ghé chị nè. Sẵn nhiều mã. 🔥Hổ trợ trả góp qua NH HDBank-Mira-Thẻ Tín Dụng.Sinh Viên Có...",
  source: "@tieu_nhu68",
  sourceType: "Threads",
  date: "2026-10-06 21:19",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tieu_nhu68/post/DeJ-7jvk72U",
  excerpt: "Tân phú ghé chị nè. Sẵn nhiều mã. 🔥Hổ trợ trả góp qua NH <mark>HDBank</mark>-Mira-Thẻ Tín Dụng.Sinh Viên Có Thẻ Duyệt Ko Thẩm Định",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 784,
  title: "tvscredit hdbank bajajfinance",
  source: "@hasancommunication",
  sourceType: "Threads",
  date: "2026-10-06 20:41",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hasancommunication/post/DeJ6i5egSEO",
  excerpt: "tvscredit <mark>hdbank</mark> bajajfinance",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 785,
  title: "19 thì có fe,hd saison hỗ trợ nha",
  source: "@meowt_2811",
  sourceType: "Threads",
  date: "2026-10-06 16:48",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@meowt_2811/post/DeJf3hpgVZ7",
  excerpt: "19 thì có fe,<mark>hd saison</mark> hỗ trợ nha",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 786,
  title: "Bước tới - Tiền vào:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-06 16:14",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeJcCU4nesM",
  excerpt: "Bước tới - Tiền vào: https://www.<mark>hdsaison</mark>.com.vn/vn/buoc-toi-tien-vao-vay-den-30-trieu-don-tron-uu-dai.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 787,
  title: "HD SAISON❌❌sale chính thống👌👌👌 👉Chỉ cần cccd 👉Hỗ trợ khách cũ và mới 👉 Hỗ trợ free hết nha...",
  source: "@dan.hdsaison",
  sourceType: "Threads",
  date: "2026-10-06 16:01",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dan.hdsaison/post/DeJakX6E1Q4",
  excerpt: "❌❌<mark>HD SAISON</mark>❌❌sale chính thống👌👌👌 👉Chỉ cần cccd 👉Hỗ trợ khách cũ và mới 👉 Hỗ trợ free hết nha khách 👉 Vay bao nhiêu nhận bấy nhiêu ☎️039.953.535.5 Dân FREEEEEE",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 788,
  title: "HDBank gửi online 1-3 tháng 4.7% 6 tháng 8.8% từ 50triệu nhắn em hỗ trợ nha 0327441730",
  source: "@donhatquyen_",
  sourceType: "Threads",
  date: "2026-10-06 13:37",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@donhatquyen_/post/DeJKD-5GIGt",
  excerpt: "<mark>HDBank</mark> gửi online 1-3 tháng 4.7% 6 tháng 8.8% từ 50triệu nhắn em hỗ trợ nha 0327441730",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 789,
  title: "Giá trọn bộ: 14.500.000 VNĐ 🛡 Bảo hành: 3 tháng (Bao test sử dụng yên tâm). 💳 Chính sách hỗ...",
  source: "@khanh_eos",
  sourceType: "Threads",
  date: "2026-10-06 12:28",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@khanh_eos/post/DeJCJ5eFNgn",
  excerpt: "💰 Giá trọn bộ: 14.500.000 VNĐ 🛡 Bảo hành: 3 tháng (Bao test sử dụng yên tâm). 💳 Chính sách hỗ trợ: Hỗ trợ quẹt thẻ / Trả góp qua thẻ tín dụng, ví trả sau, <mark>HD SAISON</mark>. Ship COD toàn quốc (kiểm tra hàng trước khi thanh toán) / Ship hỏa tốc nội thành TP.HCM.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 790,
  title: "Bảo hành: 3 tháng (Bao test sử dụng yên tâm). 💳 Chính sách hỗ trợ: Hỗ trợ quẹt thẻ / Trả góp...",
  source: "@khanh_eos",
  sourceType: "Threads",
  date: "2026-10-06 12:26",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@khanh_eos/post/DeJB6UslID4",
  excerpt: "🛡 Bảo hành: 3 tháng (Bao test sử dụng yên tâm). 💳 Chính sách hỗ trợ: Hỗ trợ quẹt thẻ / Trả góp qua thẻ tín dụng, ví trả sau, <mark>HD SAISON</mark>. Ship COD toàn quốc (kiểm tra hàng trước khi thanh toán) / Ship hỏa tốc nội thành TP.HCM.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 791,
  title: "HDBank uy tín, rõ ràng, lúc gửi sẽ giải thích cho khách cặn kẽ nên khách hàng yên tâm và ghé lại...",
  source: "@bankergenyes",
  sourceType: "Threads",
  date: "2026-10-06 11:19",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@bankergenyes/post/DeI6N1fGf-1",
  excerpt: "<mark>HDBank</mark> uy tín, rõ ràng, lúc gửi sẽ giải thích cho khách cặn kẽ nên khách hàng yên tâm và ghé lại lần tiếp theo rất nhiều 🧡🤓",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 792,
  title: "Vikki bank 9.4-9.6 ạ Tham khảo nhắn em nhé Zl 0971492951",
  source: "@dk_reuss",
  sourceType: "Threads",
  date: "2026-10-06 11:03",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dk_reuss/post/DeI4Zjzk-dL",
  excerpt: "<mark>Vikki bank</mark> 9.4-9.6 ạ Tham khảo nhắn em nhé Zl 0971492951",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 793,
  title: "Món đồ đáng tiền không nhất thiết phải mắc tiền, mà là mua về rồi dùng tới đâu thấy “đáng” tới...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-06 09:28",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeIthn0naSa",
  excerpt: "... ưng, giá đã tính - giờ thì tính chuyện rước em nó về thôi. Với gói vay trả góp trả trước từ 0đ của <mark>HD SAISON</mark>, mình sắm món cần mà vẫn dễ xoay xở nguồn vốn.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 794,
  title: "Tiêu dùng thông thái, trả trước từ 0 đồng tại các điểm giới thiệu dịch vụ mà HD SAISON liên kết:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-06 09:28",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeIthmxnTCw",
  excerpt: "📌 Tiêu dùng thông thái, trả trước từ 0 đồng tại các điểm giới thiệu dịch vụ mà <mark>HD SAISON</mark> liên kết: https://www.<mark>hdsaison</mark>.com.vn/vn/mua-sam-thong-minh-khong-lo-tai-chinh.html 📌 Tra cứu Điểm dịch vụ tại: https://www.<mark>hdsaison</mark>.com.vn/vn/dai-ly.html",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 795,
  title: "Nhà đầu tư ngoại rút hơn 400 triệu USD sau nửa tháng nâng hạng",
  source: "VnExpress",
  sourceType: "Báo chí",
  date: "2026-10-06 09:01",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://vnexpress.net/nha-dau-tu-ngoai-rut-hon-400-trieu-usd-sau-nua-thang-nang-hang-5129108.html",
  excerpt: "<mark>HDBank</mark> dẫn đầu danh sách bị rút vốn nhiều nhất với hơn 73 triệu cổ phiếu."
 },
 {
  id: 796,
  title: "Chứng khoán ngày 6/10: VN-Index tăng điểm, khối ngoại tiếp tục bán ròng hơn 2.500 tỷ đồng",
  source: "Báo Nhân Dân",
  sourceType: "Báo chí",
  date: "2026-10-06 08:54",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://nhandan.vn/chung-khoan-ngay-610-vn-index-tang-diem-khoi-ngoai-tiep-tuc-ban-rong-hon-2500-ty-dong-post993234.html",
  excerpt: "Nhà đầu tư nước ngoài tiếp tục bán ròng trên cả 3 sàn hơn 2.519 tỷ đồng, tập trung vào các mã <mark>HDB</mark> (1.957,65 tỷ đồng), VJC (770,71 tỷ đồng), PNJ (101,61 tỷ đồng), TCB (85,51 tỷ đồng), ACB (69,7 tỷ đồng)..."
 },
 {
  id: 797,
  title: "Tháng trước mình có nợ 1,5 tỷ bao gồm thế chấp, tín chấp và thẻ tín dụng, có nhìu khoản bên cttc...",
  source: "@minhhung8219",
  sourceType: "Threads",
  date: "2026-10-06 08:23",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@minhhung8219/post/DeImHFGE6mC",
  excerpt: "...dụng 20tr. Trả Agribank 100tr (có chứng từ hwa) Còn nợ Agribank 147tr, lpbank 100tr, 3 thẻ tín dụng <mark>HDBank</mark> 24tr, VIB 18tr, HDss 11tr. Cttc HDss 3 gói 70tr, trả sau momo 6tr,. Làm nhà nước hs lương 3,66. Có gpdkkd quán cfe có báo cáo thuế thu nhập 30tr/t. Ở kv miền Trung. Có banker nào gom nợ đc ko ạ chứ trả lắt nhắt miết.",
  engagement: {
   reactions: 21,
   shares: 0,
   comments: 12
  }
 },
 {
  id: 798,
  title: "Lãi suất ngân hàng hôm nay 6/10/2026: Lộ diện nhà băng dẫn đầu kỳ hạn 6 tháng",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-06 02:23",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-6-10-2026-lo-dien-nha-bang-dan-dau-ky-han-6-thang-2562002.html",
  excerpt: "Lãi suất ngân hàng hôm nay, 6/10/2026, những ngân hàng niêm yết lãi suất huy động kỳ hạn 6 tháng cao nhất gồm ACB, Sacombank, Bac A Bank..."
 },
 {
  id: 799,
  title: "Lãi suất VikkiBank cao hấp dẫn nhất thị trường lên tới 9️⃣,6️⃣% 🎁 Quà tặng hấp dẫn 📲 Lh em...",
  source: "@tien_kutee",
  sourceType: "Threads",
  date: "2026-10-05 22:27",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tien_kutee/post/DeHh6lIE1AU",
  excerpt: "💰 Lãi suất <mark>VikkiBank</mark> cao hấp dẫn nhất thị trường lên tới 9️⃣,6️⃣% 🎁 Quà tặng hấp dẫn 📲 Lh em Tiến 0565583939 để được tư vấn ạ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 800,
  title: "Điều khiến khách hàng cảm thấy hài lòng không chỉ là dịch vụ tốt mà còn là sự tận tâm của đội...",
  source: "@nguyen_huong201",
  sourceType: "Threads",
  date: "2026-10-05 21:51",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@nguyen_huong201/post/DeHdv4tGwcx",
  excerpt: "Điều khiến khách hàng cảm thấy hài lòng không chỉ là dịch vụ tốt mà còn là sự tận tâm của đội ngũ nhân viên. ❤️ Nhân viên <mark>Vikki Bank</mark> luôn nhiệt tình, thân thiện và hỗ trợ khách hàng hết mình. Từ tư vấn, giải đáp thắc mắc đến hướng dẫn các thủ tục, mọi việc đều được thực hiện chu đáo, nhanh chóng và chuyên nghiệp. Cảm ơn <mark>Vikki Bank</mark> vì sự đồng hành và tận...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 801,
  title: "Mua vàng hay gửi tiết kiệm? 🤔 Là người làm tại Vikki Bank, mình chọn gửi tiết kiệm khi muốn...",
  source: "@davidtietkiem",
  sourceType: "Threads",
  date: "2026-10-05 21:34",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@davidtietkiem/post/DeHbzQ6lM0S",
  excerpt: "Mua vàng hay gửi tiết kiệm? 🤔 Là người làm tại <mark>Vikki Bank</mark>, mình chọn gửi tiết kiệm khi muốn tiền sinh lời ổn định, an toàn. Hiện <mark>Vikki Bank</mark> đang có lãi suất tiết kiệm từ 9.2%-9.6% 💙 Anh/chị đang phân vân? Nhắn em Khôi 0384842474, mình tư vấn cụ thể nhé!",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 802,
  title: "Tân phú qua c sẵn nhiều mã 🔥Hổ trợ trả góp qua NH HDBank-Mira-Thẻ Tín Dụng.Sinh Viên Có Thẻ...",
  source: "@tieu_nhu68",
  sourceType: "Threads",
  date: "2026-10-05 16:21",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tieu_nhu68/post/DeG4Bjek2qd",
  excerpt: "Tân phú qua c sẵn nhiều mã 🔥Hổ trợ trả góp qua NH <mark>HDBank</mark>-Mira-Thẻ Tín Dụng.Sinh Viên Có Thẻ Duyệt Ko Thẩm Định",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 803,
  title: "Mọi người cho mình hỏi chút với ạ. Chuyện là hồi đại học thì mình có được mời chào cài đặt và...",
  source: "@im_a_little_whale_",
  sourceType: "Threads",
  date: "2026-10-05 16:15",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@im_a_little_whale_/post/DeG3YQ-GNBz",
  excerpt: "... quá nên mình ok). Sau đó thì TP Bank có gửi các thông báo như thế này, có cả các khoản trả góp tại <mark>HD Saison</mark> của mình phía trên nữa. Bây giờ mình nên làm sao để có thể huỷ/cắt tài khoản này vậy ạ? Mình cảm ơn mọi người nhiều 🫶.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 6
  }
 },
 {
  id: 804,
  title: "Chưa bằng 2008, năm đó dàn bank leo rank lãi suất liên tục hdbank gánh team chạm mốc 24% 😁😁",
  source: "@sa_ngo_nghinh",
  sourceType: "Threads",
  date: "2026-10-05 14:39",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@sa_ngo_nghinh/post/DeGsYMwGtgz",
  excerpt: "Chưa bằng 2008, năm đó dàn bank leo rank lãi suất liên tục <mark>hdbank</mark> gánh team chạm mốc 24% 😁😁",
  engagement: {
   reactions: 2,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 805,
  title: "Vikki bank 9.6 nhắn mình tư vấn",
  source: "@dk_reuss",
  sourceType: "Threads",
  date: "2026-10-05 13:59",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dk_reuss/post/DeGnvV-k5im",
  excerpt: "<mark>Vikki bank</mark> 9.6 nhắn mình tư vấn",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 806,
  title: "Gửi online lãi lúc nào cũng cao hơn, tiết kiệm thời gian dễ theo dõi Vikki bank lãi suất lên tới...",
  source: "@hcibw_w",
  sourceType: "Threads",
  date: "2026-10-05 13:45",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hcibw_w/post/DeGmN0YmVK4",
  excerpt: "Gửi online lãi lúc nào cũng cao hơn, tiết kiệm thời gian dễ theo dõi <mark>Vikki bank</mark> lãi suất lên tới 9.5 Zl 079.5871129( Bích)",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 807,
  title: "CORE MỚI – TINH THẦN VIKKI VẪN FULL NĂNG LƯỢNG! 🔥 VikkiBank_ HD Bank cùng nhau diễn tập, học...",
  source: "@snake_cat89",
  sourceType: "Threads",
  date: "2026-10-05 12:37",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@snake_cat89/post/DeGeZ5OE9w8",
  excerpt: "💙💜 CORE MỚI – TINH THẦN <mark>VIKKI</mark> VẪN FULL NĂNG LƯỢNG! 🔥 <mark>VikkiBank</mark>_ <mark>HD Bank</mark> cùng nhau diễn tập, học hỏi và hỗ trợ để sẵn sàng vận hành Core mới. Công nghệ đổi mới, nhưng sự nhiệt tình, tận tâm với khách hàng luôn không đổi! 🥰💪 Chúc Core mới vận hành thật mượt, giao dịch thật nhanh! 🚀 Toiyeu<mark>vikki</mark> <mark>Vikkibank</mark> Nganhangso<mark>Vikki</mark> <mark>Vikki</mark>GO <mark>Vikki</mark> <mark>Vikki</mark>digitalbank",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 808,
  title: "Chứng khoán ngày 5/10: VN-Index tăng gần 16 điểm, VIC và VHM nâng đỡ thị trường",
  source: "Báo Nhân Dân",
  sourceType: "Báo chí",
  date: "2026-10-05 10:56",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://nhandan.vn/chung-khoan-ngay-510-vn-index-tang-gan-16-diem-vic-va-vhm-nang-do-thi-truong-post993013.html",
  excerpt: "Nhóm cổ phiếu chứng khoán phiên này nghiêng về sắc đỏ có mức giảm 0,63%, chủ yếu từ các TCX, VCK, SSI, VPX, HCM, VCI, MBS, SHS, DSE, ORS, TVS, VDS… Chiều ngược lại, các mã tăng gồm VIX, VND, BSI, AGR, DSC, BVS, TCI, APG, EVS, IVS, PSI… Nhóm cổ phiếu ngân hàng phiên này đóng cửa tăng 0,37%, chủ yếu từ các mã TCB, VPB, MBB, LPB, SSB, VIB, NVB, ABB, BVB…..."
 },
 {
  id: 809,
  title: "Khách cũ hdsaison hú em hihi",
  source: "@taichinhcanthorz",
  sourceType: "Threads",
  date: "2026-10-05 10:53",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@taichinhcanthorz/post/DeGSeaQEcSN",
  excerpt: "Khách cũ <mark>hdsaison</mark> hú em hihi",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 810,
  title: "Tiết kiệm Online Vikki Bank (Đông Á cũ) 💰 Lãi suất cao hấp dẫn nhất thị trường lên tới 9️⃣,6️⃣%...",
  source: "@tien_kutee",
  sourceType: "Threads",
  date: "2026-10-05 10:16",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tien_kutee/post/DeGONvykw05",
  excerpt: "🌿 Tiết kiệm Online <mark>Vikki Bank</mark> (<mark>Đông Á</mark> cũ) 💰 Lãi suất cao hấp dẫn nhất thị trường lên tới 9️⃣,6️⃣% 🎁 Quà tặng hấp dẫn 📲 Lh em Tiến 0565583939 để được tư vấn ạ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 811,
  title: "Nên gửi tiết kiệm ngân hàng lãi cao mà uy tín?) Nên gửi tiết kiệm Vikki bank, Vp bank, MBV bank,...",
  source: "@nobody.space_",
  sourceType: "Threads",
  date: "2026-10-05 10:00",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@nobody.space_/post/DeGMa9Yk4tO",
  excerpt: "( Nên gửi tiết kiệm ngân hàng lãi cao mà uy tín?) Nên gửi tiết kiệm <mark>Vikki bank</mark>, Vp bank, MBV bank, NCB bank... v mn ui? Thấy lãi cao cái cũng thích. Tính tất toán VCB sang gửi VP bank mà search phốt của nó là mấy người vay nó sẽ bị thả nổi lãi rất cao (18%), hay bị lấy sdt để gọi đòi nợ (ko biết giả hay thật), nhưng mà nó lại là NH có nhiều chi nhánh ở...",
  engagement: {
   reactions: 26,
   shares: 0,
   comments: 119
  }
 },
 {
  id: 812,
  title: "Vikki bank 9.6 nhắn em tư vấn nhé Zl 0971492951",
  source: "@dk_reuss",
  sourceType: "Threads",
  date: "2026-10-05 09:57",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dk_reuss/post/DeGMIagE9pc",
  excerpt: "<mark>Vikki bank</mark> 9.6 nhắn em tư vấn nhé Zl 0971492951",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 813,
  title: "Dạ. Chiều tối nay. Ngày 5-10. AE tâm an đi biên hoà mua áo quan về Hỗ trợ cho người nghèo. 0...",
  source: "@gianghi734",
  sourceType: "Threads",
  date: "2026-10-05 09:36",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@gianghi734/post/DeGJsCbHcaf",
  excerpt: "... MTQ. Ủng hộ. gieo duyên ae bình dầu. Chở áo quan 0 đồng. Mọi sự hỗ trợ xin gửi Stk. 0965509146 NH. <mark>Hdbank</mark> Tên. Nguyễn lý minh sơn ND. Ủng hộ xăng dầu áo quan 0 đồng Xin chúc quý MTQ. Ngày mới Bình an và vui vẻ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 814,
  title: "Nếu có ai hỏi: Cuộc sống sinh viên sau 1 tháng xa nhà còn màu hồng nữa không? 🤔 Tôi mạnh dạn...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-05 09:24",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeGIQMmnTU4",
  excerpt: "...... Còn chuyện chi tiêu á? Vẫn trong tầm kiểm soát và thảnh thơi, vì đã có gói trợ lực sinh viên từ <mark>HD SAISON</mark> hạn mức 8 triệu ✨ 👉 Tự tin tài chính, tự tin làm chủ tuổi 18! Nhấp ngay vào link bên dưới để nhận đặc quyền nhé!",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 815,
  title: "Xem thêm chi tiết tại: https://www.hdsaison.com.vn/vn/vay-sinh-vien Tiếp vốn trao quyền 🎓 Sinh...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-05 09:24",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeGIQKzHdeP",
  excerpt: "📖 Xem thêm chi tiết tại: https://www.<mark>hdsaison</mark>.com.vn/vn/vay-sinh-vien Tiếp vốn trao quyền 🎓 Sinh viên tự tin trải nghiệm tại: 🌐 Website : https://credit4tomorrow.<mark>hdsaison</mark>.com.vn 📲 Hoặc Tải app <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/app-download.html 🚩 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 816,
  title: "HDSAISON........ 𝚅.𝚊𝚢 𝚗.𝚑𝚊𝚗𝚑,𝚗𝚑𝚊̣̂𝚗 𝚝.𝚒𝚎̂̀𝚗 𝚗𝚐𝚊𝚢 𝙲𝚑𝚒̉ 𝚌𝚊̂̀𝚗 𝚖𝚘̂̃𝚒...",
  source: "@kiudanh_0911",
  sourceType: "Threads",
  date: "2026-10-05 09:23",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@kiudanh_0911/post/DeGIM0cEz16",
  excerpt: "........<mark>HDSAISON</mark>........ 𝚅.𝚊𝚢 𝚗.𝚑𝚊𝚗𝚑,𝚗𝚑𝚊̣̂𝚗 𝚝.𝚒𝚎̂̀𝚗 𝚗𝚐𝚊𝚢 𝙲𝚑𝚒̉ 𝚌𝚊̂̀𝚗 𝚖𝚘̂̃𝚒 𝚌𝚊̆𝚗 𝚌𝚞̛𝚘̛́c Khách cần v.ay gọi ngay em nhé.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 817,
  title: "Vingroup giúp chứng khoán cắt chuỗi giảm 5 phiên liên tục",
  source: "VnExpress",
  sourceType: "Báo chí",
  date: "2026-10-05 08:57",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://vnexpress.net/vingroup-giup-chung-khoan-cat-chuoi-giam-5-phien-lien-tuc-5128626.html",
  excerpt: "Trong khi LPB tăng trần và dư mua gần 700.000 cổ phiếu, nhiều mã vốn hóa lớn như <mark>HDB</mark>, SHB, EIB, STB, BID lại đối mặt áp lực xả hàng và đóng cửa dưới tham chiếu."
 },
 {
  id: 818,
  title: "Thị trường phân hóa cân bằng, VN-Index phục hồi vượt 1750 điểm",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-05 08:24",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/thi-truong-phan-hoa-can-bang-vn-index-phuc-hoi-vuot-1750-diem.htm",
  excerpt: "Cụ thể, ở phía giảm mạnh quá 1%, PNJ giảm 6,07%, <mark>HDB</mark> giảm 1,41%, VPI giảm 3,23%, MSB giảm 1,07% là 4 cổ phiếu duy nhất khớp lệnh trên ngưỡng trăm tỷ đồng, chiếm 63% tổng giao dịch của toàn nhóm yếu nhất."
 },
 {
  id: 819,
  title: "Lãi suất ngân hàng hôm nay 5/10/2026: Ngân hàng đầu tiên tăng lãi suất tháng 10",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-05 01:53",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-5-10-2026-ngan-hang-dau-tien-tang-lai-suat-2561678.html",
  excerpt: "Lãi suất ngân hàng hôm nay, 5/10/2026, xuất hiện ngân hàng đầu tiên tăng lãi suất huy động trong tháng 10, qua đó tiếp tục là ngân hàng niêm yết lãi suất huy động cao nhất hệ thống."
 },
 {
  id: 820,
  title: "Tỷ phú Nguyễn Thị Phương Thảo thăng hoa cùng 2 cỗ máy trăm nghìn tỷ: Dưới đất HDBank vượt LPBank vào Top 3, trên trời Vietjet có đội bay lớn nhất Việt Nam",
  source: "CafeF",
  sourceType: "Báo chí",
  date: "2026-10-04 22:06",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://cafef.vn/ty-phu-nguyen-thi-phuong-thao-thang-hoa-cung-2-co-may-tram-nghin-ty-duoi-dat-hdbank-vuot-lpbank-vao-top-3-tren-troi-vietjet-co-doi-bay-lon-nhat-viet-nam-188261004231109708.chn",
  excerpt: "Tỷ phú <mark>Nguyễn Thị Phương Thảo</mark> thăng hoa cùng 2 cỗ máy trăm nghìn tỷ: Dưới đất <mark>HDBank</mark> vượt LPBank vào Top 3, trên trời Vietjet có đội bay lớn nhất Việt Nam Đầu tháng 10/2026, hai doanh nghiệp lớn gắn với tỷ phú <mark>Nguyễn Thị Phương Thảo</mark> cùng đứng quanh những cột mốc đáng chú ý về quy mô, vốn hóa và vị thế trên thị trường. <mark>HDBank</mark> vừa vượt LPBank về vốn hóa,..."
 },
 {
  id: 821,
  title: "HỔ TRỢ TRẢ GÓP QUA NH HDBANK - MIRAE & THẺ TÍN DỤNG👨‍🎓ƯU TIÊN SINH VIÊN CÓ THẺ(KO THẨM ĐỊNH)",
  source: "@tieu_nhu68",
  sourceType: "Threads",
  date: "2026-10-04 21:36",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tieu_nhu68/post/DeE3Pw5kxHZ",
  excerpt: "🔥HỔ TRỢ TRẢ GÓP QUA NH <mark>HDBANK</mark> - MIRAE &amp; THẺ TÍN DỤNG👨‍🎓ƯU TIÊN SINH VIÊN CÓ THẺ(KO THẨM ĐỊNH)",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 822,
  title: "Cẩm nang đầy đủ thông tin về thanh toán khoản vay cho mọi khách yêu của HD SAISON 👇👇",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-04 15:52",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeD7ks1DjaC",
  excerpt: "Cẩm nang đầy đủ thông tin về thanh toán khoản vay cho mọi khách yêu của <mark>HD SAISON</mark> 👇👇",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 823,
  title: "Tham khảo 3 lựa chọn linh hoạt tại: https://www.hdsaison.com.vn/vn/huong-dan-thanh-toan.html...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-04 15:52",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeEP6ZKndpR",
  excerpt: "Tham khảo 3 lựa chọn linh hoạt tại: https://www.<mark>hdsaison</mark>.com.vn/vn/huong-dan-thanh-toan.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 824,
  title: "Các doanh nghiệp chốt trả cổ tức, tuần từ ngày 5 đến 9/10",
  source: "Báo Nhân Dân",
  sourceType: "Báo chí",
  date: "2026-10-04 14:14",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://nhandan.vn/cac-doanh-nghiep-chot-tra-co-tuc-tuan-tu-ngay-5-den-910-post992788.html",
  excerpt: "Ngân hàng thương mại cổ phần Phát triển Thành phố Hồ Chí Minh (HOSE: <mark>HDB</mark>) thưởng cổ phiếu, tỷ lệ 100:5 (người sở hữu 100 cổ phiếu được nhận 5 cổ phiếu mới), ngày giao dịch không hưởng quyền là 9/10/2026 và ngày đăng ký cuối cùng là 12/10/2026. Ngân hàng thương mại cổ phần Phát triển Thành phố Hồ Chí Minh (HOSE: <mark>HDB</mark>) trả cổ tức năm 2025 bằng cổ phiếu, tỷ..."
 },
 {
  id: 825,
  title: "Chỉ có em và anh biết thôi👌 TƯ VẤN GÓP HD SAISON • Gói 15TR ➔ CCCD (21+ tuổi) • Gói 25TR ➔ CCCD...",
  source: "@leconghd",
  sourceType: "Threads",
  date: "2026-10-04 09:27",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@leconghd/post/DeDj3FDG-A4",
  excerpt: "Chỉ có em và anh biết thôi👌 TƯ VẤN GÓP <mark>HD SAISON</mark> • Gói 15TR ➔ CCCD (21+ tuổi) • Gói 25TR ➔ CCCD + GPLX • Gói 40TR ➔ CCCD + GPKD •Gói 50TR ➔ CCCD + BHYT+GPLX Za/lo: 0931 121 696 em Công",
  engagement: {
   reactions: 3,
   shares: 0,
   comments: 4
  }
 },
 {
  id: 826,
  title: "HD SAISON đồng hành cùng Học viện Ngân hàng tại lễ khai giảng đặc biệt kỷ niệm 65 năm Hai ngày...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-04 09:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeDjSlNnS4L",
  excerpt: "🎓 <mark>HD SAISON</mark> đồng hành cùng Học viện Ngân hàng tại lễ khai giảng đặc biệt kỷ niệm 65 năm Hai ngày 27-28/09 đã mang đến nhiều khoảnh khắc đáng nhớ khi <mark>HD SAISON</mark> vinh dự được đồng hành cùng các hoạt động hấp dẫn như Tọa đàm chào Tân sinh viên, Lễ khai giảng năm học mới và Hội trại 65 năm truyền thống.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 6
  }
 },
 {
  id: 827,
  title: "Trong lần thứ 2 trở lại trường, HD SAISON tiếp tục trao tặng 500 triệu đồng thuộc Quỹ “Giảng...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-04 09:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeDjScgnV0q",
  excerpt: "Trong lần thứ 2 trở lại trường, <mark>HD SAISON</mark> tiếp tục trao tặng 500 triệu đồng thuộc Quỹ “Giảng đường khởi nguồn tương lai”, tiếp sức sinh viên và góp phần vun đắp thế hệ nhân lực trẻ cho ngành Tài chính - Ngân hàng năm học 2026 – 2027. Cùng với đó, các giải pháp tài chính thiết thực cũng được giới thiệu tại Hội trại, tiếp tục đưa <mark>HD SAISON</mark> đến gần hơn với...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 828,
  title: "Tìm hiểu các giải pháp tài chính dành cho sinh viên của HD SAISON và đăng ký tại:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-04 09:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeDjSdJHd82",
  excerpt: "👉Tìm hiểu các giải pháp tài chính dành cho sinh viên của <mark>HD SAISON</mark> và đăng ký tại: https://credit4tomorrow.<mark>hdsaison</mark>.com.vn 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🚩 Hoặc liên hệ với nhân viên <mark>HD SAISON</mark> để được hỗ trợ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 829,
  title: "Giải pháp vay học phí linh hoạt cho sinh viên thời đại số:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-04 09:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeDjSeBnc8m",
  excerpt: "Giải pháp vay học phí linh hoạt cho sinh viên thời đại số: https://www.<mark>hdsaison</mark>.com.vn/vn/vay-hoc-phi.html",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 830,
  title: "Thẻ 0 phí, sinh viên 0 lo: https://www.hdsaison.com.vn/vn/the-sinh-vien",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-04 09:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeDjSdsnUpT",
  excerpt: "Thẻ 0 phí, sinh viên 0 lo: https://www.<mark>hdsaison</mark>.com.vn/vn/the-sinh-vien",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 831,
  title: "Gói vay sinh viên - Dành riêng cho sinh viên từ 18 tuổi:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-04 09:22",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeDjSdLnV19",
  excerpt: "Gói vay sinh viên - Dành riêng cho sinh viên từ 18 tuổi: https://www.<mark>hdsaison</mark>.com.vn/vn/vay-sinh-vien",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 832,
  title: "Dạ Vikki Bank nay gửi 500tr lãi 9.5% rồi ạ. Quý anh/ chị liên hệ em nhé. Cam kết đúng sự thật ạ",
  source: "@davidtietkiem",
  sourceType: "Threads",
  date: "2026-10-04 09:11",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@davidtietkiem/post/DeDiBNJFP6p",
  excerpt: "Dạ <mark>Vikki Bank</mark> nay gửi 500tr lãi 9.5% rồi ạ. Quý anh/ chị liên hệ em nhé. Cam kết đúng sự thật ạ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 833,
  title: "HD SAISON – HỖ TRỢ TƯ VẤN TIÊU DÙNG CCCD: 15 triệu CCCD + GPLX: 25 triệu CCCD + BHYT + GPLX: 50...",
  source: "@otter.6652976",
  sourceType: "Threads",
  date: "2026-10-04 08:12",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@otter.6652976/post/DeDbSHvCUfM",
  excerpt: "🍀 <mark>HD SAISON</mark> – HỖ TRỢ TƯ VẤN TIÊU DÙNG CCCD: 15 triệu CCCD + GPLX: 25 triệu CCCD + BHYT + GPLX: 50 triệu KH CŨ: 46 - 110Triệu (Không cọc, không phí) 📲 0356.694.558 (Thuỳ Minh)",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 834,
  title: "m ở VikkiBank Hà Nội nhé",
  source: "@thuy.ace",
  sourceType: "Threads",
  date: "2026-10-03 23:05",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@thuy.ace/post/DeCctZZn2Uy",
  excerpt: "m ở <mark>VikkiBank</mark> Hà Nội nhé",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 835,
  title: "Một hoạt động ý nghĩa Một chiếc xẻng, một mầm cây, một tương lai xanh 🌱 Ngày 19/09 tại Cần Giờ...",
  source: "@tan_hoang_nguyen1610",
  sourceType: "Threads",
  date: "2026-10-03 22:31",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tan_hoang_nguyen1610/post/DeCY0q0DHoQ",
  excerpt: "Một hoạt động ý nghĩa Một chiếc xẻng, một mầm cây, một tương lai xanh 🌱 Ngày 19/09 tại Cần Giờ - Tan đã cùng <mark>HDBank</mark> và UNESCO góp thêm một mảng xanh cho Sài Gòn. Đi mới thấy trồng 1 cây vất vả thế nào, nhưng vui thì gấp 10 lần! Cảm ơn mọi người đã đồng hành cùng Góc Yêu Thương 💚 <mark>HDBank</mark>GreenMarathon26 <mark>HDBank</mark>Green26 HoatDongTrongRung CanGio fyp",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 836,
  title: "Vẫn bên nhau nhé — theo các nguồn công khai hiện tại thì không có thông tin ly hôn gì cả. Bà...",
  source: "@meta.ai",
  sourceType: "Threads",
  date: "2026-10-03 20:05",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@meta.ai/post/DeCIG4egBGn",
  excerpt: "...Tre) vẫn được nhắc là vợ chồng đồng sáng lập Sovico Holdings, cùng điều hành hệ sinh thái Vietjet / <mark>HDBank</mark> / Sovico, có 4 người con.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 837,
  title: "Bả kết hôn với ông Nguyễn Thanh Hùng sinh 1967 ở Bến Tre - hai người gặp nhau thời du học Đông...",
  source: "@meta.ai",
  sourceType: "Threads",
  date: "2026-10-03 20:03",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@meta.ai/post/DeCH2vlCNi7",
  excerpt: "...Holdings. Cả hai được xem là cặp bài trùng từ Đông Âu về, nay cùng điều hành hệ sinh thái Vietjet / <mark>HDBank</mark> / Sovico và có 4 người con, trong đó con cả là Tommy Nguyễn hay xuất hiện trước truyền thông nhất.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 838,
  title: "Một món quà kỷ niệm và một bất ngờ từ HD SAISON. ️🎉 Bước tới - Tiền vào - Nhận ưu đãi tại:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-03 17:02",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeBzBx6Dik_",
  excerpt: "✨🎁 Một món quà kỷ niệm và một bất ngờ từ <mark>HD SAISON</mark>. ️🎉 Bước tới - Tiền vào - Nhận ưu đãi tại: https://www.<mark>hdsaison</mark>.com.vn/vn/buoc-toi-tien-vao-vay-den-30-trieu-don-tron-uu-dai.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 839,
  title: "Vikki Bank từ 200tr lãi 9,2% - 9,6% liên hệ em ạ 0328544558",
  source: "@m.phuong10",
  sourceType: "Threads",
  date: "2026-10-03 16:57",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@m.phuong10/post/DeByljZG7cx",
  excerpt: "<mark>Vikki Bank</mark> từ 200tr lãi 9,2% - 9,6% liên hệ em ạ 0328544558",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 840,
  title: "VAY TIỀN MẶT - KHÔNG MẤT PHÍ HỒ SƠ💥 ✅Lãi suất chỉ từ 0️⃣.6️⃣9️⃣% ✅Vay 12-15 triệu -CCCD ✅Vay...",
  source: "@cuccuc748",
  sourceType: "Threads",
  date: "2026-10-03 16:38",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@cuccuc748/post/DeBwYcuEnOk",
  excerpt: "💥VAY TIỀN MẶT - KHÔNG MẤT PHÍ HỒ SƠ💥 ✅Lãi suất chỉ từ 0️⃣.6️⃣9️⃣% ✅Vay 12-15 triệu -CCCD ✅Vay 19-25triệu -CCCD + BLX ✅Vay 30-50triệu- CCCD + BHYT+ BLX/HĐLĐ 💥💥TRẢ GÓP CÙNG <mark>HD SAISON</mark>💥💥 ✅Hỗ trợ lên đời: Điện thoại, Máy tính bảng, Laptop, Tivi, Máy lạnh, Tủ Lạnh, Nội thất, phụ kiện Ô tô... Liên hệ : 0582396760",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 841,
  title: "TƯ VẤN VAY TIÊU DÙNG HD SAISON • Khách cũ từ 18 tuổi • Khách mới từ 21 tuổi 📌Hỗ trợ lãi cực...",
  source: "@susu_1k1k",
  sourceType: "Threads",
  date: "2026-10-03 16:14",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@susu_1k1k/post/DeBtlVZk8W6",
  excerpt: "TƯ VẤN VAY TIÊU DÙNG <mark>HD SAISON</mark> • Khách cũ từ 18 tuổi • Khách mới từ 21 tuổi 📌Hỗ trợ lãi cực thấp 💵 CCCD : 15tr 💵 CCCD + BLX: 25tr 💵 CCCD + BLX + BHXH: 50tr ✅Nhân viên chính thống nhà <mark>HD SAISON</mark> ✅ 100% không tốn phí ✅Nhận đủ 100% khoản vay về TK ❌ Không hỗ trợ nợ xấu, nợ chú ý",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 842,
  title: "Trước thềm hành trình Golive 10/10, mỗi ngày tại Vikki Bank Ninh Thuận đều là cơ hội để học hỏi,...",
  source: "@dielevan",
  sourceType: "Threads",
  date: "2026-10-03 15:59",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dielevan/post/DeBr8nQGrbm",
  excerpt: "Trước thềm hành trình Golive 10/10, mỗi ngày tại <mark>Vikki Bank</mark> Ninh Thuận đều là cơ hội để học hỏi, nâng cao kỹ năng và hoàn thiện kiến thức chuyên môn. Dù là cuối tuần, tinh thần nhiệt huyết vẫn luôn rực cháy, sẵn sàng mang đến những trải nghiệm dịch vụ tốt hơn cho khách hàng. Cùng nhau nỗ lực hôm nay để tự tin bứt phá và chinh phục những cột mốc mới trong...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 843,
  title: "Mời mọi người vào xem livestream của HDBank Tư Nghĩa ạ, link dưới comment",
  source: "@khoi.lv2005",
  sourceType: "Threads",
  date: "2026-10-03 11:02",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@khoi.lv2005/post/DeBJ45emoTY",
  excerpt: "Mời mọi người vào xem livestream của <mark>HDBank</mark> Tư Nghĩa ạ, link dưới comment",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 844,
  title: "Tiết kiệm Online Vikki Bank (Đông Á cũ) 💰 Lãi suất cao hấp dẫn nhất thị trường lên tới 9️⃣,4️⃣%...",
  source: "@tien_kutee",
  sourceType: "Threads",
  date: "2026-10-03 10:19",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tien_kutee/post/DeBFDggk14W",
  excerpt: "🌿 Tiết kiệm Online <mark>Vikki Bank</mark> (<mark>Đông Á</mark> cũ) 💰 Lãi suất cao hấp dẫn nhất thị trường lên tới 9️⃣,4️⃣% 🎁 Quà tặng hấp dẫn 📲 Lh em Tiến 0565583939 để được tư vấn ạ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 845,
  title: "Mình hỗ trợ lên vay chính thống, HD saison. Ko mất phí, inb :0934779993",
  source: "@trinh_master",
  sourceType: "Threads",
  date: "2026-10-03 09:58",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@trinh_master/post/DeBCke-E-13",
  excerpt: "Mình hỗ trợ lên vay chính thống, <mark>HD saison</mark>. Ko mất phí, inb :0934779993",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 846,
  title: "danang viral 🧢🧢 𝐈𝐩𝐚𝐝 𝐆𝐞𝐧 𝟏𝟏-𝟏𝟐𝟖𝐆𝐁 -Silver - emm lại về thêm 🌟Hiệu năng ổn định,...",
  source: "@tamle.1512",
  sourceType: "Threads",
  date: "2026-10-03 09:48",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tamle.1512/post/DeBBatnj6D-",
  excerpt: "danang viral 🧢🧢 𝐈𝐩𝐚𝐝 𝐆𝐞𝐧 𝟏𝟏-𝟏𝟐𝟖𝐆𝐁 -Silver - emm lại về thêm 🌟Hiệu năng ổn định, pin bền bỉ, đầu tư 1 lần dùng nhìu năm✌️ 𝐈𝐩𝐚𝐝 𝐆𝐞𝐧 𝟏𝟏-𝟏𝟐𝟖𝐆𝐁 𝐋𝐢𝐤𝐞𝐍𝐞𝐰 ⛽️Pin: 9x% 🌱Giá: 9.500.000đ ❗️Nhận thu_cũ đổi_mới lên đời zá tốt. 👩‍💻 • Hỗ Trợ Góp tại <mark>HDsaison</mark>, Mira - Thẻ tín dụng 📱 𝐇𝐚̀𝐧𝐠 𝐒𝐚̆̉𝐧 𝐆𝐢𝐚𝐨 𝐍𝐠𝐚𝐲 ! 💯 ————...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 847,
  title: "Vikki Bank 200tr 9.2%, 500tr 9.5% ạ. Liên hệ em nhé 0384842474 ( em Khôi )",
  source: "@davidtietkiem",
  sourceType: "Threads",
  date: "2026-10-03 09:27",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@davidtietkiem/post/DeA_EXElHem",
  excerpt: "<mark>Vikki Bank</mark> 200tr 9.2%, 500tr 9.5% ạ. Liên hệ em nhé 0384842474 ( em Khôi )",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 848,
  title: "Thẻ 0 phí - Sinh viên 0 lo cùng HD SAISON: https://www.hdsaison.com.vn/vn/the-sinh-vien 💳 Không...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-03 09:18",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeA-EYDHdWJ",
  excerpt: "📖 Thẻ 0 phí - Sinh viên 0 lo cùng <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/vn/the-sinh-vien 💳 Không áp lực thủ tục. Mở thẻ nhanh gọn 100% online - sử dụng ngay sau 30 phút cho mọi sinh viên: 🌐 Website: https://credit4tomorrow.<mark>hdsaison</mark>.com.vn 📲 Hoặc Tải app <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/app-download.html 🚩 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 849,
  title: "Ai bảo thời sinh viên chỉ có chuyện “học và hành” ? Đây còn là quãng thời gian để gặp thêm những...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-03 09:18",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/DeA-EcGnUDc",
  excerpt: "...ện đáng nhớ của tuổi trẻ. 💳 Để mỗi trải nghiệm thêm phần chủ động, Thẻ 0 phí – Sinh viên 0 lo cùng <mark>HD SAISON</mark> sẵn sàng làm “trợ thủ” đồng hành cùng bạn trong những nhu cầu chi tiêu, mua sắm cần thiết. Sinh viên mà, học hết mình, chơi hết sức, khám phá hết cỡ nha mấy cậu ơi! 🎓",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 850,
  title: "Ngày thứ 7, ngày hội gia đình cùng HDBANK",
  source: "@hoaitrang0708",
  sourceType: "Threads",
  date: "2026-10-03 08:36",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hoaitrang0708/post/DeA5Q9CgRmF",
  excerpt: "Ngày thứ 7, ngày hội gia đình cùng <mark>HDBANK</mark>",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 851,
  title: "ASUS AI V16 giá 25.xx0.000đ 🎒 Core 5 210H, RTX 3050 6GB, 16GB DDR5, màn 16\" 144Hz. Có phím...",
  source: "@xgearvietnam",
  sourceType: "Threads",
  date: "2026-10-03 07:51",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@xgearvietnam/post/DeA0Ef5EsFB",
  excerpt: "...thì hạ setting, nói trước cho ae khỏi kỳ vọng sai. BH quốc tế 2 năm. HSSV giảm thêm. Hỗ trợ trả góp <mark>HD Saison</mark>, MPOS, Fundiin. xgear.net · 028 7108 1881 XGEAR ASUS V16 laptopsinhvien",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 852,
  title: "Legion 5 màn OLED, dùng rồi khó quay lại màn thường 👀 OLED 2.5K 165Hz 100% DCI-P3, Ultra 7 356H...",
  source: "@xgearvietnam",
  sourceType: "Threads",
  date: "2026-10-03 07:48",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@xgearvietnam/post/DeAzrfnEspI",
  excerpt: "..., tặng balo Legion + túi chống sốc + pad chuột, BH 36 tháng tận nơi. HSSV giảm thêm. Hỗ trợ trả góp <mark>HD Saison</mark>, MPOS, Fundiin. Phân vân với máy cùng tầm? Nhắn Xgear so thẳng từng con 👇 xgear.net · 028 7108 1881 XGEAR LenovoLegion OLED laptopgaming",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 853,
  title: "ASUS TUF A15 chỉ từ 23.xx0.000đ 🎮 Ryzen 7, RTX 3050, màn 144Hz, vỏ TUF nồi đồng cối đá. Có 3...",
  source: "@xgearvietnam",
  sourceType: "Threads",
  date: "2026-10-03 07:45",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@xgearvietnam/post/DeAzad3kpZH",
  excerpt: "...ùng AI đẩy FPS, mic khử ồn AI. Tặng túi chống sốc, BH quốc tế 2 năm. HSSV giảm thêm. Hỗ trợ trả góp <mark>HD Saison</mark>, MPOS, Fundiin. Phân vân 8GB hay 16GB? Nhắn Xgear ae đang học gì chơi gì 👇 xgear.net · 028 7108 1881 XGEAR ASUSTUF RTX3050 laptopgaming",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 854,
  title: "Lenovo LOQ 2026 về Xgear, chỉ từ 39.xx0.000đ 🔥 Bản Ryzen 7 250 + RTX 5050 cho ae chơi eSports,...",
  source: "@xgearvietnam",
  sourceType: "Threads",
  date: "2026-10-03 07:43",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@xgearvietnam/post/DeAzM9-EiPc",
  excerpt: "...bản. Tặng balo Lenovo + túi chống sốc + pad chuột, BH 2 năm tận nơi. HSSV giảm thêm. Hỗ trợ trả góp <mark>HD Saison</mark>, MPOS, Fundiin. Chưa biết chọn bản nào thì nhắn Xgear tựa game ae hay chơi 👇 xgear.net · 028 7108 1881 XGEAR LenovoLOQ RTX5060 laptopgaming",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 855,
  title: "Thẻ HD bank VietJet , Mình đã được ngân hàng cấp thẻ tín dụng",
  source: "khôi và cuộc sống hằng ngày",
  sourceType: "YouTube",
  date: "2026-10-02 20:37",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.youtube.com/watch?v=78qqFBbEBHE",
  excerpt: "Thẻ <mark>HD bank</mark> VietJet , Mình đã được ngân hàng cấp thẻ tín dụng",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 856,
  title: "em là sinh viên năm nhất, nộp hồ sơ trên hd saison mà bị rớt. Mọi người biết còn app nào cho vay...",
  source: "@caramel.5203",
  sourceType: "Threads",
  date: "2026-10-02 19:56",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@caramel.5203/post/Dd_iS4dE6Iz",
  excerpt: "em là sinh viên năm nhất, nộp hồ sơ trên <mark>hd saison</mark> mà bị rớt. Mọi người biết còn app nào cho vay sinh viên không ạ",
  engagement: {
   reactions: 32,
   shares: 0,
   comments: 114
  }
 },
 {
  id: 857,
  title: "Svien bên hdsaison với shoppe đi ví trả sau nó cho quét qr cá nhân rút về ấy",
  source: "@nobitanhatrang",
  sourceType: "Threads",
  date: "2026-10-02 18:53",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@nobitanhatrang/post/Dd_bDX9iZIX",
  excerpt: "Svien bên <mark>hdsaison</mark> với shoppe đi ví trả sau nó cho quét qr cá nhân rút về ấy",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 858,
  title: "Xin chúc mừng Vikki Digital Bank vinh dự nhận giải thưởng ngân hàng Việt Nam tiêu biểu năm 2026....",
  source: "@khoanguyen0628",
  sourceType: "Threads",
  date: "2026-10-02 18:36",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@khoanguyen0628/post/Dd_ZHBTEgCj",
  excerpt: "Xin chúc mừng <mark>Vikki</mark> Digital Bank vinh dự nhận giải thưởng ngân hàng Việt Nam tiêu biểu năm 2026. Gửi Tiết kiệm <mark>Vikki</mark> hôm nay để tích lũy đều tay, an tâm hơn cho những dự định ngày mai. Hãy đến <mark>Vikki</mark> ngay để được tư vấn và hỗ trợ. <mark>Vikki</mark> Digital Bank chạm cảm hứng bật tương lai. toiyeu<mark>vikki</mark>, <mark>Vikkibank</mark>, Nganhangso<mark>Vikki</mark>, <mark>Vikki</mark>Go, <mark>Vikki</mark>, <mark>Vikki</mark>digitalbank,...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 859,
  title: "Tui đang có cỡ 6xx nhàn rỗi muốn gửi bank nào trên 9% lãi suất, có bank nào ko ạ. Mới tham khảo...",
  source: "@tichadanang1210",
  sourceType: "Threads",
  date: "2026-10-02 17:59",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tichadanang1210/post/Dd_UzonG2D6",
  excerpt: "Tui đang có cỡ 6xx nhàn rỗi muốn gửi bank nào trên 9% lãi suất, có bank nào ko ạ. Mới tham khảo MB có 8,8% <mark>HDBank</mark> 8,9%",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 860,
  title: "Bước tới một bước, mở ra thêm nhiều điều bất ngờ cùng HD SAISON! ️🎉 Bước tới - Tiền vào - Nhận...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-02 16:12",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/Dd_Ieb6Dtt_",
  excerpt: "✨Bước tới một bước, mở ra thêm nhiều điều bất ngờ cùng <mark>HD SAISON</mark>! ️🎉 Bước tới - Tiền vào - Nhận ưu đãi tại: https://www.<mark>hdsaison</mark>.com.vn/vn/buoc-toi-tien-vao-vay-den-30-trieu-don-tron-uu-dai.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 861,
  title: "Thông báo về việc di dời PGD Hộ Phòng về PGD Gành Hào từ ngày 05/10/2026. Việc di dời không làm...",
  source: "@huynhminh63815",
  sourceType: "Threads",
  date: "2026-10-02 15:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@huynhminh63815/post/Dd_D-6Zki99",
  excerpt: "Thông báo về việc di dời PGD Hộ Phòng về PGD Gành Hào từ ngày 05/10/2026. Việc di dời không làm thay đổi quyền lợi, thông tin và các giao dịch của khách hàng. <mark>Vikkibank</mark> diện mạo mới hân hạnh đồng hành cùng khách hàng phát triển. <mark>Vikki Bank</mark> – Chạm cảm hứng bật tương lai. <mark>Vikki</mark> <mark>Vikki</mark>digital Toiyeu<mark>vikki</mark> Diemhennganhangso <mark>Vikkibank</mark>",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 862,
  title: "T gửi HDbank 6 tháng đã đc 8.8% r",
  source: "@nganha812",
  sourceType: "Threads",
  date: "2026-10-02 13:16",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@nganha812/post/Dd-0hGOE-IB",
  excerpt: "T gửi <mark>HDbank</mark> 6 tháng đã đc 8.8% r",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 863,
  title: "VIKKI BANK KÍNH GỬI QUÝ KHÁCH HÀNG ✅Lãi suất gửi tiết kiệm online lên đến 9.5% Khoản tiền >= 500...",
  source: "@genz_dangthieukpi",
  sourceType: "Threads",
  date: "2026-10-02 12:35",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@genz_dangthieukpi/post/Dd-vy-Pka1g",
  excerpt: "💰 <mark>VIKKI BANK</mark> KÍNH GỬI QUÝ KHÁCH HÀNG ✅Lãi suất gửi tiết kiệm online lên đến 9.5% Khoản tiền &gt;= 500 triệu 6 tháng 9.5% - 9.6% Khoản tiền &gt;= 200 triệu 6 tháng: 9.2% - 9.4% Khoản tiền &gt;= 20 triệu 6 tháng 8.4% 📞 Liên hệ ngay 087.677.2973 để trình nhận lãi suất ưu đãi, lãi suất công khai ban hành sẽ thấp hơn",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 864,
  title: "uy tính nên chọn những ngân hàng mua lại ngân hàng khác ạ, nếu được thuận tiện cho bạn có thể...",
  source: "@kjmmon_",
  sourceType: "Threads",
  date: "2026-10-02 12:28",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@kjmmon_/post/Dd-u70yD1HH",
  excerpt: "uy tính nên chọn những ngân hàng mua lại ngân hàng khác ạ, nếu được thuận tiện cho bạn có thể tham khảo thử bên <mark>HDBank</mark> bên mình nhé",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 865,
  title: "HDBank gửi online 8.8% nhắn em hỗ trợ nha 0327441730",
  source: "@donhatquyen_",
  sourceType: "Threads",
  date: "2026-10-02 10:49",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@donhatquyen_/post/Dd-joaymOSs",
  excerpt: "<mark>HDBank</mark> gửi online 8.8% nhắn em hỗ trợ nha 0327441730",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 866,
  title: "Chứng khoán ngày 2/10: VN-Index giảm hơn 11 điểm, nhiều cổ phiếu trụ chịu áp lực bán",
  source: "Báo Nhân Dân",
  sourceType: "Báo chí",
  date: "2026-10-02 10:12",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://nhandan.vn/chung-khoan-ngay-210-vn-index-giam-hon-11-diem-nhieu-co-phieu-tru-chiu-ap-luc-ban-post992476.html",
  excerpt: "Phiên này, các mã đóng góp tích cực cho chỉ số VN-Index tăng 7,99 điểm gồm: VIC, <mark>HDB</mark>, BVH, MWG, VPL, MCH, NAB, ANV, DBC, VHC. Nhóm cổ phiếu chứng khoán phiên này nghiêng về sắc đỏ có mức giảm 2,23%, chủ yếu từ các TCX, VCK, SSI, VPX, VIX, HCM, VCI, VND, MBS, SHS, ORS, FTS BSI, CTS, ABW… Chiều ngược lại, các mã tăng gồm BMS, TCI, HAC, EVS, TVB… Nhóm cổ..."
 },
 {
  id: 867,
  title: "Đổi mood cho bản thân bằng một chuyến đi, đổi mood cho chiếc xe bằng vài món phụ tùng mới Xe vẫn...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-02 09:17",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/Dd-ZJJdnQg5",
  excerpt: "...g cần thiết cũng đủ để cảm giác sử dụng thêm phần mới mẻ. Có món cần thay, có ngay gói vay Phụ tùng <mark>HD SAISON</mark> - vậy là chuyện “đổi mood” cho xế cưng cũng nhẹ nhàng hơn hẳn",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 868,
  title: "Trả góp phụ tùng - Ô tô, xe đạp và xe đạp điện– Đăng ký liền tay tại các điểm giới thiệu dịch vụ...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-02 09:17",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/Dd-ZJHoHZlf",
  excerpt: "🛞 Trả góp phụ tùng - Ô tô, xe đạp và xe đạp điện– Đăng ký liền tay tại các điểm giới thiệu dịch vụ mà <mark>HD SAISON</mark> liên kết tại: https://www.<mark>hdsaison</mark>.com.vn/vn/dai-ly.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲Tải app <mark>HD SAISON</mark>: https://www.<mark>hdsaison</mark>.com.vn/app-download.html 🚩Hoặc liên hệ với nhân viên <mark>HD SAISON</mark> để được hỗ trợ",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 869,
  title: "Khối ngoại bán ròng hơn 3.300 tỷ, cổ phiếu lũ lượt lao dốc",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-02 08:39",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/khoi-ngoai-ban-rong-hon-3300-ty-co-phieu-lu-luot-lao-doc.htm",
  excerpt: "<mark>HDB</mark> cũng có cầu mạnh, thanh khoản tăng 2,4 lần so với phiên sáng. Ngoài VIC và <mark>HDB</mark>, 3 cổ phiếu còn lại tăng không đáng kể và cũng tác động nhỏ tới điểm số."
 },
 {
  id: 870,
  title: "Happy birthday bạn nhé, nào cần tư vấn huy động HDBank nhắn mình nha ☺️😘",
  source: "@py.mago",
  sourceType: "Threads",
  date: "2026-10-02 07:46",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@py.mago/post/Dd-OueCE3xU",
  excerpt: "Happy birthday bạn nhé, nào cần tư vấn huy động <mark>HDBank</mark> nhắn mình nha ☺️😘",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 871,
  title: "Khối ngoại xả lớn ở PNJ, đà giảm giá vẫn loang rộng",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-02 05:03",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/khoi-ngoai-xa-lon-o-pnj-da-giam-gia-van-loang-rong.htm",
  excerpt: "Ngoài PNJ, có TCB khớp 203,8 tỷ đồng, STB khớp 155 tỷ, VPB khớp 143,7 tỷ, <mark>HDB</mark> khớp 127,6 tỷ, giá giảm 1,07%, NVL khớp 103,6 tỷ, giá giảm 1,92%, VND khớp 73 tỷ, giá giảm 1,46%, GEX khớp 70,8 tỷ, giá giảm 2,11%..."
 },
 {
  id: 872,
  title: "Lãi suất ngân hàng hôm nay 2/10/2026: Hai 'ông lớn' cộng thêm tới 1,8 điểm %",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-02 02:09",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-2-10-2026-hai-ong-lon-cong-them-toi-1-8-diem-2560926.html",
  excerpt: "Lãi suất ngân hàng hôm nay, 2/10/2026, ghi nhận diễn biến đáng chú ý khi Techcombank và VPBank cùng triển khai chương trình cộng thêm lãi suất tiền gửi nhân dịp kỷ niệm ngày thành lập ngân hàng."
 },
 {
  id: 873,
  title: "Hai cái tên còn lại trong nhóm tỷ cổ phiếu là HDBank và VPBank 📅 HDBank chốt ngày 12/10 là hạn...",
  source: "@0x.minkwuang",
  sourceType: "Threads",
  date: "2026-10-01 23:58",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@0x.minkwuang/post/Dd9ZJX7jyHy",
  excerpt: "Hai cái tên còn lại trong nhóm tỷ cổ phiếu là <mark>HDBank</mark> và VPBank 📅 <mark>HDBank</mark> chốt ngày 12/10 là hạn cuối đăng ký để nhận cổ tức 2025 cùng cổ phiếu thưởng, tổng tỷ lệ 30%, tương ứng 1,5 tỷ cổ phiếu, chưa kể 700 triệu đơn vị phát hành riêng lẻ đã được chấp thuận, tổng cộng khoảng 2,2 tỷ. Còn VPBank dự kiến hơn 2 tỷ cổ phiếu trả cổ tức cộng hơn 624 triệu bán...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 874,
  title: "Good people. Great team. Best memories. ✨hdbank enjoy bestmemories❤️",
  source: "@kayasth_prakhar_shrivastav0089",
  sourceType: "Threads",
  date: "2026-10-01 22:38",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@kayasth_prakhar_shrivastav0089/post/Dd9QBkfgbUQ",
  excerpt: "Good people. Great team. Best memories. ✨<mark>hdbank</mark> enjoy bestmemories❤️",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 875,
  title: "HDSAISON hỗ trợ mở rộng khoản vay cho tất cả các khách hàng mới và cũ🎉 👉 𝐕𝐚𝐲 𝟓𝟎𝐭𝐫 :...",
  source: "@tieeuhaanw_5555",
  sourceType: "Threads",
  date: "2026-10-01 22:20",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@tieeuhaanw_5555/post/Dd9N4axmLwa",
  excerpt: "🎉<mark>HDSAISON</mark> hỗ trợ mở rộng khoản vay cho tất cả các khách hàng mới và cũ🎉 👉 𝐕𝐚𝐲 𝟓𝟎𝐭𝐫 : 𝐜𝐚̂̀𝐧 𝐂𝐂𝐂𝐃 + 𝐁𝐋𝐗 + 𝐁𝐇𝐘𝐓 𝐝𝐨 𝐜𝐭𝐲 𝐜𝐚̂́𝐩 👉 𝐕𝐚𝐲 𝟐𝟓𝐭𝐫: 𝐜𝐚̂̀𝐧 𝐂𝐂𝐂𝐃 + 𝐁𝐋𝐗 👉 𝐕𝐚𝐲 𝟏𝟓𝐭𝐫: 𝐜𝐡𝐢̉ 𝐜𝐚̂̀𝐧 𝐂𝐂𝐂𝐃 👉 𝐕𝐚𝐲 𝐠𝐨́𝐢 𝐬𝐢𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝟖𝐭𝐫 : 𝐜𝐡𝐢̉ 𝐜𝐚̂̀𝐧 𝐂𝐂𝐂𝐃 + 𝐓𝐡𝐞̉ 𝐒𝐕 👉 Đ𝐚̣̆𝐜...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 876,
  title: "Chắc HDbank sẽ tuyển nhiều :))",
  source: "@doanlangzzz",
  sourceType: "Threads",
  date: "2026-10-01 20:29",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@doanlangzzz/post/Dd9BN17k_B0",
  excerpt: "Chắc <mark>HDbank</mark> sẽ tuyển nhiều :))",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 877,
  title: "Chỉ vì miếng ăn mà cả nhà mất đoàn kết! 🍰 Bước tới - Tiền vào - Nhận ưu đãi tại:...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-01 17:54",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/Dd8vdlqDnb9",
  excerpt: "Chỉ vì miếng ăn mà cả nhà mất đoàn kết! 🍰 Bước tới - Tiền vào - Nhận ưu đãi tại: https://www.<mark>hdsaison</mark>.com.vn/vn/buoc-toi-tien-vao-vay-den-30-trieu-don-tron-uu-dai.html Cùng <mark>HD SAISON</mark> đem ước mơ về nhà: 📲 Tải app <mark>HD SAISON</mark>: http://www.<mark>hdsaison</mark>.com.vn/app-download.html 🙋🏻 Hoặc đến cửa hàng <mark>HD SAISON</mark> gần nhất",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 1
  }
 },
 {
  id: 878,
  title: "Vikki Bank mang tiện ích số đến gần hơn với giảng đường đại học - Cùng Vikki Bank khám phá những...",
  source: "@iam.thzy1812",
  sourceType: "Threads",
  date: "2026-10-01 16:14",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@iam.thzy1812/post/Dd8kF2tI9vW",
  excerpt: "-<mark>Vikki Bank</mark> mang tiện ích số đến gần hơn với giảng đường đại học - Cùng <mark>Vikki Bank</mark> khám phá những trải nghiệm ngân hàng số thông qua Kios “Trạm Công Dân Số” - Không chỉ là công nghệ, mà còn giúp các bạn tra cứu các tiện ích hành chính công, là hành trình giúp các bạn trẻ tiếp cận những tiện ích thiết thực, tự tin làm chủ cuộc sống số trong tương lai. ✨...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 879,
  title: "HDB chuẩn bị phát hành thêm 1,5 tỷ cổ phiếu Cổ đông HDB sẽ nhận 25% cổ tức + 5% cổ phiếu thưởng,...",
  source: "@nhaphantichvn",
  sourceType: "Threads",
  date: "2026-10-01 14:32",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@nhaphantichvn/post/Dd8YXIwms1n",
  excerpt: "<mark>HDB</mark> chuẩn bị phát hành thêm 1,5 tỷ cổ phiếu Cổ đông <mark>HDB</mark> sẽ nhận 25% cổ tức + 5% cổ phiếu thưởng, tổng cộng 30%. Sau phát hành, vốn điều lệ dự kiến lên hơn 65.000 tỷ đồng. <mark>HDB</mark> tăng vốn mạnh để làm gì? <mark>hdb</mark> <mark>hdbank</mark> chungkhoan cophieu dautu nhaphantich nhadautu xuhuongtiktok xuhuongfb xuhuong",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 880,
  title: "bên em vẫn làm trả góp qua HD saison làm trả góp 0 đồng",
  source: "@suongnguyentien",
  sourceType: "Threads",
  date: "2026-10-01 12:05",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@suongnguyentien/post/Dd8HgZHAbWh",
  excerpt: "bên em vẫn làm trả góp qua <mark>HD saison</mark> làm trả góp 0 đồng",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 881,
  title: "Vikki bank Thái Nguyên Ly cà phê thơm ngon Quà tặng ngập tràn Lãi suất ưu đãiiiii Cùng dắt tay...",
  source: "@duy.tute",
  sourceType: "Threads",
  date: "2026-10-01 11:25",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@duy.tute/post/Dd8C631E85V",
  excerpt: "<mark>Vikki bank</mark> Thái Nguyên Ly cà phê thơm ngon Quà tặng ngập tràn Lãi suất ưu đãiiiii Cùng dắt tay nhau ra <mark>vikki</mark> trải nhiệm đi thôi các đồng chí <mark>vikki</mark> <mark>Vikki</mark>DigitalBank <mark>Vikki</mark>GO Toiyeu<mark>Vikki</mark>",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 882,
  title: "Họp giao ban đầu tháng không chỉ là dịp nhìn lại kết quả đã đạt được mà còn là thời điểm tiếp...",
  source: "@dielevan",
  sourceType: "Threads",
  date: "2026-10-01 11:24",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dielevan/post/Dd8C6OoEzbn",
  excerpt: "Họp giao ban đầu tháng không chỉ là dịp nhìn lại kết quả đã đạt được mà còn là thời điểm tiếp thêm năng lượng, thống nhất mục tiêu và sẵn sàng bứt phá. Tập thể <mark>Vikki Bank</mark> CN Ninh Thuận quyết tâm tăng tốc, nâng cao chất lượng phục vụ, chinh phục KPI và tạo nên một tháng mới rực rỡ thành công! <mark>Vikki</mark> <mark>Vikki</mark>DigitalBank NganHangTietKiemTotNhat vayvonkinhdoanh...",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 883,
  title: "Đề nghị HDBank xoá ngay tài khoản thanh toán này nhé, tôi đâu có đăng ký mở tài khoản với ngân...",
  source: "@dr.cuong.plastic_surgeon",
  sourceType: "Threads",
  date: "2026-10-01 11:14",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@dr.cuong.plastic_surgeon/post/Dd8Bsw_AdBd",
  excerpt: "Đề nghị <mark>HDBank</mark> xoá ngay tài khoản thanh toán này nhé, tôi đâu có đăng ký mở tài khoản với ngân hàng của các vị.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 884,
  title: "anh em cần quẹt thẻ tín dụng lấy tiền mặt qua bên em nhé bên em có máy quẹt thẻ tất cả các ngân...",
  source: "@suongnguyentien",
  sourceType: "Threads",
  date: "2026-10-01 10:53",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@suongnguyentien/post/Dd7_VrFAUni",
  excerpt: "anh em cần quẹt thẻ tín dụng lấy tiền mặt qua bên em nhé bên em có máy quẹt thẻ tất cả các ngân hàng trừ <mark>HD saison</mark> .",
  engagement: {
   reactions: 1,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 885,
  title: "Chứng khoán ngày 1/10: VN-Index giảm sâu, cổ phiếu bất động sản và ngân hàng chịu áp lực bán",
  source: "Báo Nhân Dân",
  sourceType: "Báo chí",
  date: "2026-10-01 09:26",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://nhandan.vn/chung-khoan-ngay-110-vn-index-giam-sau-co-phieu-bat-dong-san-va-ngan-hang-chiu-ap-luc-ban-post992172.html",
  excerpt: "Phiên này, các mã đóng góp tích cực cho chỉ số VN-Index tăng 3,01 điểm gồm: TCB, MSN, <mark>HDB</mark>, PLX, VBB, HAG, HVN, SAB, LPS, NVL. Nhóm cổ phiếu chứng khoán phiên này nghiêng về sắc đỏ có mức giảm 0,84%, chủ yếu từ các TCX, VCK, VPX, VIX, HCM, VND, DSE, FTS, BSI, CTS, TVS, AGR, VDS, BMS… Chiều ngược lại, các mã tăng gồm SSI, VCI, SHS, ORS, DSC, BVS… Nhóm cổ..."
 },
 {
  id: 886,
  title: "Blog chứng khoán: Dòng tiền đủng đỉnh đợi",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-01 09:20",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/blog-chung-khoan-dong-tien-dung-dinh-doi.htm",
  excerpt: "Ví dụ hôm nay cũng hơn chục cổ phiếu tăng giá tốt và có dòng tiền khá, thậm chí giao dịch trên trăm tỷ đồng thanh khoản như TCB, MSN, <mark>HDB</mark>, PLX, NVL, HAG nhưng ngay cả mức thanh khoản này đứng cạnh tổng thanh khoản thì cũng chỉ là số ít."
 },
 {
  id: 887,
  title: "Chủ tiệm cà phê muốn săn ngay máy pha công nghệ mới để những ly espresso chuẩn vị? Hay chủ shop...",
  source: "HD SAISON (Threads)",
  sourceType: "Threads",
  date: "2026-10-01 09:05",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@hdsaisonfinancevn/post/Dd7y7M0nffM",
  excerpt: "... kịp đón đầu mùa mua sắm tới? Kinh doanh muốn bứt tốc cần mạnh dạn đầu tư nâng cấp, vì chủ hộ đã có <mark>HD SAISON</mark> đồng hành: 💼 Gói vay đến 40 triệu - chủ động nguồn vốn 📱 Thủ tục Online - nhanh gọn, tối ưu thời gian cho chủ tiệm.",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 2
  }
 },
 {
  id: 888,
  title: "Khách ơi đến với em điiii e hứa là không cười khách nữa đâu ạ ... Vikki bank Thái Nguyênnnnn...",
  source: "@duy.tute",
  sourceType: "Threads",
  date: "2026-10-01 08:51",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://www.threads.com/@duy.tute/post/Dd7xXLlkRcF",
  excerpt: "Khách ơi đến với em điiii e hứa là không cười khách nữa đâu ạ ... <mark>Vikki bank</mark> Thái Nguyênnnnn <mark>vikki</mark> <mark>Vikki</mark>DigitalBank Toiyeu<mark>Vikki</mark> <mark>Vikki</mark>GO",
  engagement: {
   reactions: 0,
   shares: 0,
   comments: 0
  }
 },
 {
  id: 889,
  title: "Áp lực bán tăng mạnh, VN-Index thủng ngưỡng 1750 điểm",
  source: "VnEconomy",
  sourceType: "Báo chí",
  date: "2026-10-01 08:22",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vneconomy.vn/ap-luc-ban-tang-manh-vn-index-thung-nguong-1750-diem.htm",
  excerpt: "MSN, <mark>HDB</mark>, PLX, NVL, HAG, VTP, DCL vẫn là các cổ phiếu xuất hiện từ sáng. Khối này mua tốt SBT với +170,7 tỷ đồng, VHM +61,3 tỷ, <mark>HDB</mark> +61 tỷ, PLX +51,2 tỷ, MSN +50,6 tỷ."
 },
 {
  id: 890,
  title: "TP.HCM: Từ trung tâm kinh tế đến bệ phóng doanh nghiệp Việt vươn ra toàn cầu",
  source: "Báo Xây dựng",
  sourceType: "Báo chí",
  date: "2026-10-01 07:00",
  sentiment: "positive",
  topicIds: [
   6
  ],
  url: "https://baoxaydung.vn/tphcm-tu-trung-tam-kinh-te-den-be-phong-doanh-nghiep-viet-vuon-ra-toan-cau-192260930151420114.htm",
  excerpt: "Từ nền tảng <mark>HDBank</mark>, Vietjet Air và bất động sản với thương hiệu Phú Long, tập đoàn mở rộng sang năng lượng, quản lý tài sản và đầu tư, qua đó kết nối doanh nghiệp Việt Nam với các dòng vốn, thị trường và đối tác quốc tế."
 },
 {
  id: 891,
  title: "Giả danh giáo xứ, lừa hàng nghìn người góp tiền xây nhà thờ rồi chiếm đoạt",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-01 05:41",
  sentiment: "negative",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/gia-danh-giao-xu-lua-hang-nghin-nguoi-gop-tien-xay-nha-tho-roi-chiem-doat-2560660.html",
  excerpt: "Để phục vụ công tác điều tra, xử lý vụ án và bảo đảm quyền, lợi ích hợp pháp của những người bị hại, cơ quan công an đề nghị các cá nhân, tổ chức từng chuyển tiền ủng hộ vào tài khoản 0110699914 (<mark>Vikki Bank</mark>), chủ tài khoản Tran Thanh Truc; tài khoản 1802281018635 (Agribank), chủ tài khoản Dang Van Dau; hoặc từng giao dịch, liên hệ qua số điện thoại..."
 },
 {
  id: 892,
  title: "Lãi suất ngân hàng hôm nay 1/10/2026: Ai được hưởng lãi suất 10%/năm?",
  source: "VietNamNet",
  sourceType: "Báo chí",
  date: "2026-10-01 02:31",
  sentiment: "neutral",
  topicIds: [
   6
  ],
  url: "https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-1-10-2026-ai-duoc-huong-lai-suat-10-nam-2560542.html",
  excerpt: "<mark>Vikki Bank</mark> cũng áp dụng chính sách lãi suất đặc biệt, cộng thêm 1,8 điểm phần trăm cho tiền gửi kỳ hạn 13 tháng với số tiền từ 999 tỷ đồng. Tại <mark>HDBank</mark>, khách hàng gửi từ 500 tỷ đồng được hưởng lãi suất 7,2%/năm cho kỳ hạn 12 tháng và 7,6%/năm cho kỳ hạn 13 tháng."
 }
];
