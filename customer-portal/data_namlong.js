// ============ Nam Long Topic Data ============
// Filter logic: primary "công ty cổ phần đầu tư nam long" AND secondary contains one of:
// "nam long group", "bất động sản nam long", "chủ tịch nguyễn xuân quang",
// "dự án bất động sản", "waterpoint", "izumi city", "mizuki park", "nam long đại phước", "elyse island"

const NAMLONG_SOURCES = [
  { id: 101, name: 'Nam Long Group - NLG', url: 'https://facebook.com/namlonggroup.nlg', type: 'Facebook Fanpage', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 102, name: 'Nam Long Group - Waterpoint', url: 'https://facebook.com/waterpoint.com.vn', type: 'Facebook Fanpage', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 103, name: 'Hội Chuyển Nhượng Waterpoint Nam Long', url: 'https://facebook.com/groups/waterpoint', type: 'Facebook Group', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 104, name: 'Cộng Đồng Cư Dân Waterpoint', url: 'https://facebook.com/groups/cudanwaterpoint', type: 'Facebook Group', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 105, name: 'Chợ Cư Dân Mizuki Park', url: 'https://facebook.com/groups/mizukipark', type: 'Facebook Group', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 106, name: 'CƯ DÂN IZUMI CITY', url: 'https://facebook.com/groups/izumicity', type: 'Facebook Group', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 107, name: 'Hieu Sol (KOL)', url: 'https://facebook.com/hieusol', type: 'Facebook Fanpage', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 108, name: 'Threads MXH', url: 'https://threads.net', type: 'Threads', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 109, name: 'ZNews.vn', url: 'https://znews.vn', type: 'Báo chí', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 110, name: 'YouTube BĐS Tiềm Năng', url: 'https://youtube.com/@bdstiemnang', type: 'YouTube', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 111, name: 'Nam Long Group - Mizuki Park', url: 'https://facebook.com/namlonggroup.mizukipark', type: 'Facebook Fanpage', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 112, name: 'Nam Long Group - Izumi City', url: 'https://facebook.com/IzumiCity', type: 'Facebook Fanpage', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 113, name: 'Nam Long - Living and Investment', url: 'https://facebook.com/namlong.living', type: 'Facebook Fanpage', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
  { id: 114, name: 'BĐS Nam Long 1992', url: 'https://facebook.com/nhadat24hhochiminh', type: 'Facebook Fanpage', status: 'active', addedAt: '2026-09-15', topicIds: [5], keywordIds: [] },
];

const NAMLONG_FEED = [
  // === KOL / Viral / High-engagement ===
  { id: 201, title: 'KOL Hieu Sol review Elyse Island - Đô thị đảo sang trọng bên sông Đồng Nai', source: 'Hieu Sol (KOL)', sourceType: 'Facebook Fanpage', date: '2026-09-24 16:54', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/hieusol/posts/pfbid02fZA1ycJ8XCft6WsCdtUemvArrJLp1awyJZKj1kkiVCA6btgEMaKmQnDBVoFftrDcl',
    excerpt: 'Lần đầu dự sự kiện của Esquire Vietnam tổ chức tại <mark>Elyse Island</mark>, mới thấy dự án đô thị đảo này rất đẹp, trong lành và nhiều tiềm năng. Đô thị đảo <mark>Elyse Island</mark> do tập đoàn <mark>Nam Long</mark> phát triển cùng đối tác Nhật Bản NNR, nằm trên Đảo Đại Phước, TP. Đồng Nai.',
    engagement: { reactions: 1015, shares: 11, comments: 67 } },

  { id: 202, title: 'Solaria Rise - Sạc đầy hạnh phúc, thư thái chất sống Resort Living', source: 'Nam Long Group - Waterpoint', sourceType: 'Facebook Fanpage', date: '2026-09-24 16:00', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/waterpoint.com.vn/posts/pfbid02uGyEUT3qYjxAh4wWXG2SUMaJgGmH6nTCcGJ9sKHffh7PgmBS1GjFhKGaMFWEJsayl',
    excerpt: 'Giữa nhịp sống hiện đại, một chốn về lý tưởng không chỉ là nơi để ở, mà còn là nơi ta tìm thấy sự thư thái. Tại <mark>Solaria Rise</mark>, tinh thần Resort Living hiện diện trong từng trải nghiệm, giữa lòng đại đô thị <mark>Waterpoint</mark> đã thành hình.',
    engagement: { reactions: 504, shares: 5, comments: 1 } },

  { id: 203, title: 'Solaria Rise – Giá trị thực qua từng trải nghiệm', source: 'Nam Long Group - Waterpoint', sourceType: 'Facebook Fanpage', date: '2026-09-21 13:36', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/waterpoint.com.vn/posts/pfbid02x1eogvgNUHqGUjytTQ4iVP6m1ETgzGbx8SewWqEtmCFQ2m3zoTYgYpbvXK4EpykHl',
    excerpt: 'Giữa Đại đô thị tích hợp <mark>Waterpoint</mark>, căn hộ <mark>Solaria Rise</mark> được thiết kế để đón gió, ánh sáng và khí trời tự nhiên. Cùng lắng nghe những chia sẻ từ chuyên gia khi trực tiếp trải nghiệm.',
    engagement: { reactions: 712, shares: 1, comments: 1 } },

  // === Official Nam Long Group posts ===
  { id: 204, title: 'Nam Long Experience 2026 – 3 ngày chạm đến BĐS Giá trị Thực', source: 'Nam Long Group - NLG', sourceType: 'Facebook Fanpage', date: '2026-09-20 22:05', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/namlonggroup.nlg/posts/pfbid0RqtXs1DTZiDQmPPEbdjsGkNimPa8VSkNnntyzjf9hwmL9Js83FfGMEogEEGtenbal',
    excerpt: 'Ngày cuối của <mark>Nam Long Experience 2026</mark> khép lại với nhiều khoảnh khắc đáng nhớ. Sự xuất hiện của Quốc Thiên tại Meet & Greet "Real Connection" đã mang đến không khí sôi động.',
    engagement: { reactions: 65, shares: 10, comments: 3 } },

  { id: 205, title: 'Quốc Thiên đã có mặt tại Nam Long Experience 2026', source: 'Nam Long Group - NLG', sourceType: 'Facebook Fanpage', date: '2026-09-20 15:37', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/namlonggroup.nlg/posts/pfbid02PXn7k999w7jFpCqeH7nwriC75hKDqg2xiEqR4M3Jo6icgy3UpCbfxhYfR5Rm2j6bl',
    excerpt: 'Một chút "nhá hàng" từ sân khấu Meet & Greet cùng Quốc Thiên tại <mark>Nam Long Experience 2026</mark>. Giới hạn mỗi ngày 300 vé Meet & Greet.',
    engagement: { reactions: 157, shares: 5, comments: 0 } },

  { id: 206, title: 'Lucky Draw ngày 3 – Chủ nhân may mắn cuối cùng', source: 'Nam Long Group - NLG', sourceType: 'Facebook Fanpage', date: '2026-09-20 22:01', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/namlonggroup.nlg/posts/pfbid0vbCZ98kgz2EbPRYYSt3mahFXXdHNYjAAki6PTjrjP6zuxSvVpew7tpFQPjHm51Yhl',
    excerpt: 'Kết thúc trọn vẹn 3 ngày <mark>Nam Long Experience 2026</mark>. Lucky Draw với tổng giá trị lên đến 100 triệu đồng/phiên đã tìm thấy những chủ nhân cuối cùng.',
    engagement: { reactions: 33, shares: 2, comments: 2 } },

  { id: 207, title: 'Đếm ngược 2 giờ – Các booth đã sẵn sàng chào đón ngày cuối', source: 'Nam Long Group - NLG', sourceType: 'Facebook Fanpage', date: '2026-09-20 06:00', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/namlonggroup.nlg/posts/pfbid0fd68fN1HDFPrxDA4Ce9avEGU7D8okbkhLhjuW12iuasos72nuw2pqHyoBFJLiWZsl',
    excerpt: 'Hôm nay còn có sự kiện giới thiệu dự án thành phần thuộc <mark>Izumi City</mark> và sự kiện Meet & Greet "Real Connection" cùng Quốc Thiên tại <mark>Nam Long Experience 2026</mark>.',
    engagement: { reactions: 22, shares: 0, comments: 0 } },

  { id: 208, title: 'ECHOES OF ETHEREAL IN SAIGON – Elyse Island', source: 'Nam Long Group - NLG', sourceType: 'Facebook Fanpage', date: '2026-09-21 16:38', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/namlonggroup.nlg/posts/pfbid08oD9LFbm31bdNURtdQx4jzuiVM2z4DCQia7py15nLWsdcDbHSQtV32HY4xtpYSRbl',
    excerpt: '<mark>Echoes of Ethereal in Saigon</mark> mang đến một hành trình nghệ thuật dành riêng cho khách hàng <mark>Elyse Island</mark>. Tinh thần "Sống đặc quyền trên đảo tự nhiên" mà Elyse Island theo đuổi.',
    engagement: { reactions: 25, shares: 2, comments: 0 } },

  { id: 209, title: 'Nam Long Experience 2026 cảm ơn sự đồng hành của Quý khách', source: 'Nam Long Group - NLG', sourceType: 'Facebook Fanpage', date: '2026-09-21 10:00', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/namlonggroup.nlg/posts/pfbid02yLRjoQFw7Wbbz4mc3Nqw9XRpXQfsZHX5MfLH5CLTXsy5DMn1N8FeUuCRmKo7Eah2l',
    excerpt: 'Sau ba ngày kết nối và sẻ chia, <mark>Nam Long Experience 2026</mark> đã khép lại. <mark>Nam Long</mark> trân trọng cảm ơn Quý khách, đối tác và cộng đồng đã đồng hành.',
    engagement: { reactions: 45, shares: 7, comments: 1 } },

  { id: 210, title: 'Mizuki Park và hành trình mới cùng Trellia Vista', source: 'Nam Long Group - Mizuki Park', sourceType: 'Facebook Fanpage', date: '2026-09-20 21:39', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/namlonggroup.mizukipark/posts/pfbid0FzW6Tt5iB8yEXcUsdVAASkDr52KRJk6JNQETAB1rYz4SFPPSZFHciq1Ai2p22Wxql',
    excerpt: '3 ngày <mark>Nam Long Experience 2026</mark>: Điểm nhấn là Sự kiện Khởi động Kinh doanh <mark>Trellia Vista</mark> ngày 19/09, đánh dấu hành trình mới của tòa tháp cuối cùng tại phân khu compound Trellia Cove <mark>Mizuki Park</mark>.',
    engagement: { reactions: 18, shares: 0, comments: 0 } },

  { id: 211, title: 'Khu đô thị Waterpoint ra mắt sản phẩm mới – Rivera Nagomi', source: 'Nam Long Group - NLG', sourceType: 'Facebook Fanpage', date: '2026-09-29 11:16', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/reel/2161744184375500/',
    excerpt: 'Tại thành phố bên sông <mark>Waterpoint</mark>, một không gian sống thảnh thơi đang dần hiện hữu mang tên <mark>Rivera Nagomi</mark>. Tiếp nối những giá trị đã được vun đắp từ hệ tiện ích và cộng đồng sẵn có.',
    engagement: { reactions: 5, shares: 0, comments: 0 } },

  { id: 212, title: 'Tết Trung Thu – Tết Đoàn viên cùng Nam Long', source: 'Nam Long Group - NLG', sourceType: 'Facebook Fanpage', date: '2026-09-24 19:30', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/namlonggroup.nlg/posts/pfbid02YfLaxsrKbfepdpto8hGphypVXPX4T3XBaEjPhKWfhgX1rTT14UkmaKaQLu1gi3Mfl',
    excerpt: 'Với <mark>Nam Long</mark>, một nơi đáng sống không chỉ được tạo nên từ những ngôi nhà, tiện ích hay không gian xanh, mà còn từ những phút giây gia đình bên nhau. 33+ năm kinh nghiệm, 11 khu đô thị, 681+ hecta quỹ đất sạch.',
    engagement: { reactions: 14, shares: 6, comments: 0 } },

  // === Waterpoint posts ===
  { id: 213, title: 'Điều gì sẽ thay đổi thị trường BĐS khu Tây TP.HCM', source: 'Nam Long Group - Waterpoint', sourceType: 'Facebook Fanpage', date: '2026-09-28 09:49', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/waterpoint.com.vn/posts/pfbid0SAZgKfGvKLCrcLSnKAiHMmmYUJSxXeL3Lsot9o6LE99BBfUnsyDtTsUyC4YsPk9Pl',
    excerpt: 'Người mua nhà ngày nay không còn chỉ hỏi bất động sản đó có thể tăng giá bao nhiêu, mà họ bắt đầu quay lại với những câu hỏi: Có thể sống ở đó hay không? Thị trường đang dần quay trở lại với nhu cầu ở thực.',
    engagement: { reactions: 7, shares: 2, comments: 1 } },

  { id: 214, title: 'Nhà mình thư thái, trọn chất Resort Living tại Solaria Rise', source: 'Nam Long Group - Waterpoint', sourceType: 'Facebook Fanpage', date: '2026-09-24 16:00', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/waterpoint.com.vn/posts/pfbid02uGyEUT3qYjxAh4wWXG2SUMaJgGmH6nTCcGJ9sKHffh7PgmBS1GjFhKGaMFWEJsayl',
    excerpt: 'Tại <mark>Solaria Rise</mark>, tinh thần Resort Living hiện diện trong từng trải nghiệm. Để hành trình sở hữu tổ ấm thêm nhẹ nhàng với phương án thanh toán linh hoạt – mua nhà như thuê, thảnh thơi thanh toán.',
    engagement: { reactions: 504, shares: 5, comments: 1 } },

  { id: 215, title: 'Review BĐS: Waterpoint "chiếm sóng" tại Nam Long Experience', source: 'Đặng Hồng Phúc', sourceType: 'Facebook', date: '2026-09-20 10:36', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/groups/reviewbatdongsanaz/posts/38223367940640051/',
    excerpt: 'Ghé <mark>Nam Long Experience 2026</mark> tại SECC đúng ngày <mark>Waterpoint</mark> "chiếm sóng". 15 đại lý hội quân khởi động <mark>Rivera Nagomi</mark>, mảnh ghép thấp tầng mới chỉ 158 sản phẩm hữu hạn. <mark>Solaria Rise</mark> từ 1,5 tỷ.',
    engagement: { reactions: 31, shares: 4, comments: 8 } },

  { id: 216, title: 'Cô Thắm BĐS: Mỗi cột mốc lớn lên cùng Waterpoint', source: 'Cô Thắm BĐS', sourceType: 'Facebook', date: '2026-09-21 11:54', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/groups/2547464408709554/posts/27930891603273485/',
    excerpt: 'Hơn 2 năm nay, gần như khách hàng khi làm việc với em Thắm không ai hỏi em làm ở sàn nào. Sola Homes mong rằng sẽ góp một phần nhỏ vào hành trình lớn lên của <mark>Waterpoint</mark>.',
    engagement: { reactions: 4, shares: 0, comments: 0 } },

  { id: 217, title: 'Ghé thăm Làng văn hóa Việt - Nhật tại Waterpoint', source: 'Thùy Trang Vtht', sourceType: 'Facebook', date: '2026-09-22 17:35', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/meteor.trang/posts/pfbid02Qtr3TdvtEVqiZMxe6XexJtP9KJzigf3Y6jZHxx7x1tVjRhCfmaeib9uKbjAwRauLl',
    excerpt: 'Ghé thăm Làng văn hóa Việt – Nhật tại khu đô thị <mark>Waterpoint</mark>, tâm huyết của <mark>Nam Long</mark> trong việc kiến tạo một Thành phố đáng sống. Không gian xanh mát, bình yên cùng lối kiến trúc chuẩn Nhật tinh tế.',
    engagement: { reactions: 33, shares: 0, comments: 1 } },

  { id: 218, title: 'Khám phá đại đô thị Waterpoint Nam Long - YouTube', source: 'YouTube BĐS Tiềm Năng', sourceType: 'YouTube', date: '2026-09-18 18:00', sentiment: 'positive', topicIds: [5], url: 'https://www.youtube.com/watch?v=A0rkRqlsPRg',
    excerpt: 'Khám phá đại đô thị <mark>Waterpoint Nam Long</mark> – Sống Như Resort Giữa Lòng Khu Tây. Quy mô 355 hecta, 5 lớp sinh thái, mật độ 84 người/hecta. Đang triển khai Solaria Rise từ 1,5 tỷ.',
    engagement: { reactions: 6, shares: 0, comments: 0 } },

  { id: 219, title: 'Giá & CSBH Rivera Nagomi | Waterpoint', source: 'Tuấn Anh Residence', sourceType: 'Facebook', date: '2026-09-21 09:50', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/groups/waterpointnamlongg/posts/4505754689682755/',
    excerpt: 'BẢNG GIÁ RUMOR <mark>Rivera Nagomi</mark>: Nhà phố 5,7 tỷ | BT Song lập 8 tỷ | Shophouse 8,1 tỷ | BT Đơn lập 11 tỷ. Chiết khấu 3%, tặng 24 tháng phí quản lý, thanh toán 24–36 tháng.',
    engagement: { reactions: 4, shares: 0, comments: 0 } },

  { id: 220, title: 'Bán căn hộ EHome Southgate Waterpoint – 1PN 51m² giá 1,2 tỷ', source: 'Khang Pham', sourceType: 'Facebook', date: '2026-09-29 09:56', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/groups/577993061072288/posts/1375565047981748/',
    excerpt: 'Bán căn hộ 1 phòng ngủ thiết kế hiện đại tại đại đô thị xanh <mark>Waterpoint Nam Long</mark>. Diện tích 51m², giá bán 1 tỷ 200 triệu. Hợp đồng mua bán rõ ràng, thủ tục sang tên nhanh gọn.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  { id: 221, title: 'Shophouse Rivera Nagomi bên cạnh hệ thống trường học Waterpoint', source: 'Truyền Lê', sourceType: 'Facebook', date: '2026-09-25 19:26', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/groups/577993061072288/posts/1372214548316798/',
    excerpt: '<mark>Rivera Nagomi</mark> có 22 căn shophouse nằm ngay trên trục đường 36m, ngay cạnh hệ thống giáo dục của <mark>Waterpoint</mark> như trường quốc tế EMASI. Giá bán từ 8,1 tỷ, thanh toán linh hoạt trong 2 năm.',
    engagement: { reactions: 1, shares: 0, comments: 1 } },

  { id: 222, title: 'Mizuki Park | Giỏ hàng chuyển nhượng giá tốt tháng 09/2026', source: 'Lê Nguyên Khải', sourceType: 'Facebook', date: '2026-09-26 22:29', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/groups/mizukipark.market/posts/1678213557374453/',
    excerpt: 'Nhiều căn đẹp – đa dạng diện tích – sổ hồng sẵn. 56m² full nội thất 3,47 tỷ | 58m² Nội thất CĐT 3,6 tỷ | 78m² 4,35 tỷ | 99m² Panorama full nội thất 6 tỷ. Khu đô thị xanh <mark>Mizuki Park</mark>.',
    engagement: { reactions: 2, shares: 0, comments: 2 } },

  { id: 223, title: 'Cảm ơn Nam Long Group cho em chiếc view hàng A', source: 'duaws.matcha', sourceType: 'Threads', date: '2026-09-21 19:45', sentiment: 'positive', topicIds: [5], url: 'https://www.threads.com/@duaws.matcha/post/DdjLyurEoj3',
    excerpt: 'Cảm ơn <mark>Nam Long Group</mark> đã cho em chiếc view hàng A cùng sân khấu lung linh tại <mark>Nam Long Experience 2026</mark>.',
    engagement: { reactions: 33, shares: 1, comments: 0 } },

  // === Mizuki Park posts ===
  { id: 224, title: 'Trellia Vista – Booking sớm nhận ưu đãi, giá từ 68 triệu/m²', source: 'Nguyễn Thiện Thanh', sourceType: 'Facebook', date: '2026-09-22 01:19', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/groups/960941236433343/posts/1111150101412455/',
    excerpt: '<mark>Trellia Vista</mark> – mảnh ghép tiếp theo tại <mark>Mizuki Park</mark> đã chính thức bước vào giai đoạn booking. Căn 2PN ưu đãi 68 triệu, căn 3PN ưu đãi 86 triệu. Giá từ 68 triệu/m².',
    engagement: { reactions: 3, shares: 0, comments: 2 } },

  { id: 225, title: 'Chính thức nhận booking – Trellia Vista Mizuki Park', source: 'Nguyễn Thị Hoài Trâm', sourceType: 'Facebook', date: '2026-09-20 11:13', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/groups/1046900573248203/posts/1751585129446407/',
    excerpt: 'Booking sớm – ưu tiên chọn căn, chọn vị trí đẹp tại <mark>Trellia Vista</mark> – <mark>Mizuki Park</mark>. Booking 68 triệu/suất – có hoàn lại. Thanh toán chỉ 20% đến khi nhận nhà.',
    engagement: { reactions: 4, shares: 0, comments: 4 } },

  { id: 226, title: 'Trellia Cove Mizuki Park – Chính thức tham quan Nhà thực tế', source: 'Nguyen Dung', sourceType: 'Facebook', date: '2026-09-27 11:20', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/groups/428180004699780/posts/2335768190607609/',
    excerpt: 'Sau sự kiện cất nóc ngày 17/09/2026, <mark>Trellia Cove</mark> chính thức hoàn thiện căn hộ thực tế tại <mark>Mizuki Park</mark>. Booking sớm trước 11/10: Căn 2PN CK 68 triệu | Căn 3PN CK 86 triệu.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  { id: 227, title: 'CHỈ 450 TRIỆU – Sở hữu căn hộ 2PN tại Trellia Cove', source: 'Căn hộ Trellia COVE', sourceType: 'Facebook Fanpage', date: '2026-09-24 10:47', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02QqngjxoCEw69BuHFStN19hSHgVdrKYLHMRt6kPWrU7RcaXDd3rRCaznGpaDXNHN8l',
    excerpt: 'Bài toán an cư tại TP.HCM giờ đây nhẹ nhàng hơn với <mark>Trellia Cove</mark> – <mark>Mizuki Park</mark>. Chỉ 10% vốn ban đầu – khoảng 450 triệu. Giá từ 68 triệu/m². Thanh toán 2% mỗi 2 tháng.',
    engagement: { reactions: 1, shares: 0, comments: 7 } },

  { id: 228, title: 'Mở bán phân khu mới Trellia Cove – Mizuki Park', source: 'Bach Le Nguyen', sourceType: 'Facebook', date: '2026-09-25 08:39', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/groups/mizukiparks/posts/1758910995365727/',
    excerpt: '<mark>Mizuki Park</mark> Nam Sài Gòn – Mở bán phân khu mới <mark>Trellia Cove</mark>. Căn hộ 60m² từ 4,2 tỷ | 74–77m² từ 5,3 tỷ | 97m² từ 7,3 tỷ. Nhà phố view kênh đào từ 19,1 tỷ. CĐT <mark>Nam Long</mark> hợp tác cùng NNR & Hankyu.',
    engagement: { reactions: 3, shares: 0, comments: 0 } },

  // === Izumi City posts ===
  { id: 229, title: 'Izumi City – Chính sách mới, ưu đãi lên đến 21,5%', source: 'Vương Duyên', sourceType: 'Facebook', date: '2026-09-22 20:24', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/groups/vinhomesgrandpark2/posts/28459183463722655/',
    excerpt: '<mark>Izumi City</mark> – Tổng ưu đãi lên đến 21,5%. CK theo phương thức TT lên đến 15%. CK sự kiện 1%. <mark>Nam Long Club</mark> lên đến 2%. Chỉ thanh toán 15% đến khi nhận nhà. HTLS lên đến 25 tháng.',
    engagement: { reactions: 2, shares: 0, comments: 0 } },

  { id: 230, title: 'Tiến độ Izumi City mới nhất T09/2026', source: 'Hương Mai', sourceType: 'Facebook', date: '2026-09-22 19:05', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/groups/izumicitydongnai/posts/1648511280318656/',
    excerpt: '<mark>Izumi Canaria</mark>: Đang trong giai đoạn hoàn thiện. <mark>Izumi Gardenia</mark>: Cảnh quan ngày càng chỉn chu. NHÀ Ở XÃ HỘI <mark>EHomeS</mark>: Công tác thử tải móng cọc đang triển khai.',
    engagement: { reactions: 8, shares: 0, comments: 0 } },

  { id: 231, title: 'Nhà phố sau ưu đãi chỉ còn 7.x tỷ VAT – Izumi City', source: 'Vũ Tất Thành', sourceType: 'Facebook', date: '2026-09-26 15:09', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/groups/izumicitydongnai/posts/1652150129954771/',
    excerpt: 'Thị trường khó nên chủ đầu tư <mark>Nam Long</mark> đang tung ra những chính sách chưa hề có cho <mark>Izumi City</mark>. Nhà phố giá gốc 9,5 tỉ chỉ còn 7.x tỷ VAT, nhận nhà cuối 2028, thanh toán giãn 24 tháng.',
    engagement: { reactions: 14, shares: 0, comments: 3 } },

  { id: 232, title: 'AEON Mall Biên Hòa – Cực tăng trưởng mới cho Izumi City', source: 'Long Nhật', sourceType: 'Facebook', date: '2026-09-28 08:23', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/groups/835219072158348/posts/1225099523170299/',
    excerpt: 'Từ <mark>Izumi City</mark> chỉ khoảng 15 phút di chuyển đến AEON Mall Biên Hòa. Đây là sự cộng hưởng giữa một đại đô thị ven sông và hệ sinh thái tiện ích cấp vùng.',
    engagement: { reactions: 3, shares: 0, comments: 0 } },

  { id: 233, title: 'Izumi City | Chính sách đặc biệt – Nam Long Experience', source: 'Nam Long Group - Izumi City', sourceType: 'Facebook Fanpage', date: '2026-09-20 12:03', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/IzumiCity.0903792222/posts/pfbid0CXLVuLDkH5C1DXJk2sA9uKyVVZLduGKpYQmttpr4c913pmDcDjsWi5E9uQ5FJKNjl',
    excerpt: '<mark>Nam Long Experience 2026</mark> – Chính sách đặc biệt cho <mark>Izumi City</mark>: Voucher 100 triệu | CK sự kiện 1% | <mark>Nam Long Club</mark> lên đến 2% | Surprise thêm 2%. Chỉ 10 căn duy nhất.',
    engagement: { reactions: 2, shares: 0, comments: 0 } },

  { id: 234, title: 'Izumi City | Ưu đãi đặc quyền giới hạn – chỉ 10 căn', source: 'ductin.realestate', sourceType: 'Threads', date: '2026-09-19 17:28', sentiment: 'neutral', topicIds: [5], url: 'https://www.threads.com/@ductin.realestate/post/DddzAa4o9TK',
    excerpt: '<mark>Izumi City</mark> – Thanh toán chỉ 15% đến khi nhận nhà. Hỗ trợ lãi suất lên đến 25 tháng – tối đa 10%/năm. Số lượng giới hạn chỉ 10 căn tại <mark>Nam Long Experience 2026</mark>.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  // === Elyse Island posts ===
  { id: 235, title: 'Zone B Elyse Island – Thanh toán giãn 36 tháng', source: 'Nguyen Hong BDS Nam Long', sourceType: 'Facebook', date: '2026-09-23 09:26', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/nguyenhongnamlong/posts/pfbid031CSGq5L97TghZ2Bwp52DPXM5wFFe4ZML1aHTkfa2ayfvGM6VsnFRsVLHx37RzchHl',
    excerpt: '<mark>Elyse Island</mark> chính thức công bố Zone B với chính sách thanh toán giãn đến 36 tháng. Chỉ 10% ký HĐMB, chỉ thanh toán 30% đến năm 2030, voucher 100 triệu, hỗ trợ lãi suất 24 tháng.',
    engagement: { reactions: 1, shares: 0, comments: 0 } },

  { id: 236, title: 'Song lập Địa Trung Hải tại Elyse Island – 200m²', source: 'Nguyen Hong BDS Nam Long', sourceType: 'Facebook', date: '2026-09-24 12:25', sentiment: 'neutral', topicIds: [5], url: 'https://www.facebook.com/nguyenhongnamlong/posts/pfbid02hBqksKejRCFu8UDASSSeuYLWP3Xy7z2eGMovyoxPXe3ujzLoF3RYSb4tNkevSzeJl',
    excerpt: 'ELY-B03.19 | Song lập 200m² – thiết kế Địa Trung Hải – dòng tiền thanh toán giãn 36 tháng tại <mark>Elyse Island</mark>. Ưu đãi 100 triệu, chiết khấu sự kiện 1%, <mark>Nam Long Club</mark> 2%.',
    engagement: { reactions: 1, shares: 0, comments: 0 } },

  { id: 237, title: 'Elyse Island – Sản phẩm biệt lập, chính sách hấp dẫn', source: 'stellahoang1', sourceType: 'Threads', date: '2026-09-26 10:46', sentiment: 'positive', topicIds: [5], url: 'https://www.threads.com/@stellahoang1/post/DdvGlDAoHjk',
    excerpt: 'Các Dòng Biệt thự Garden Villa, Park Villa & Grand Villa diện tích 168m²–512m² SỞ HỮU LÂU DÀI tại <mark>Elyse Island</mark>. Sản phẩm biệt lập, chính sách hấp dẫn từ tập đoàn <mark>Nam Long</mark>.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  // === News/Press articles (4 bài) ===
  { id: 238, title: 'Triển lãm Nam Long Experience 2026 sắp khai mạc', source: 'ZNews.vn', sourceType: 'Báo chí', date: '2026-09-18 13:02', sentiment: 'neutral', topicIds: [5], url: 'https://znews.vn/trien-lam-nam-long-experience-2026-sap-khai-mac-post1683951.html',
    excerpt: 'Ngày 18/9, khách hàng, đối tác và nhà đầu tư đã có mặt tại SECC, khám phá những điểm chạm đầu tiên trước lễ khai mạc <mark>Nam Long Experience 2026</mark>. Hơn 4.000 m² triển lãm với <mark>Waterpoint</mark>, <mark>Mizuki Park</mark>, <mark>Izumi City</mark>, <mark>Elyse Island</mark>.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  { id: 239, title: 'CEO Tập đoàn Nam Long: Đô thị giá trị thực là đô thị có sức sống mỗi ngày', source: 'ZNews.vn', sourceType: 'Báo chí', date: '2026-09-18 13:02', sentiment: 'positive', topicIds: [5], url: 'https://znews.vn/ceo-tap-doan-nam-long-mot-do-thi-gia-tri-thuc-la-do-thi-co-suc-song-moi-ngay-post1683951.html',
    excerpt: 'Bà Nguyễn Thanh Hương xác lập ba trụ cột tạo nên bất động sản giá trị thực: sản phẩm thực, giá trị thực và cam kết thực. "Một đô thị giá trị thực là một đô thị có sức sống mỗi ngày."',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  { id: 240, title: 'Trải nghiệm giá trị thực tại Nam Long Experience 2026', source: 'ZNews.vn', sourceType: 'Báo chí', date: '2026-09-18 13:02', sentiment: 'positive', topicIds: [5], url: 'https://znews.vn/trai-nghiem-gia-tri-thuc-tai-nam-long-experience-2026-post1683951.html',
    excerpt: '<mark>Nam Long Experience 2026</mark> tái hiện hệ sinh thái đô thị <mark>Nam Long</mark> trong không gian hơn 4.000 m². Danh mục sản phẩm từ <mark>Waterpoint</mark>, <mark>Mizuki Park</mark>, <mark>Izumi City</mark>, <mark>Elyse Island</mark>.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  { id: 241, title: 'Nam Long Experience 2026 chính thức khai mạc tại SECC', source: 'ZNews.vn', sourceType: 'Báo chí', date: '2026-09-18 13:02', sentiment: 'positive', topicIds: [5], url: 'https://znews.vn/nam-long-experience-2026-chinh-thuc-khai-mac-tai-secc-post1683951.html',
    excerpt: 'Chương trình nghệ thuật cùng nghi thức cắt băng đã chính thức mở đầu <mark>Nam Long Experience 2026</mark>, triển lãm BĐS giá trị thực quy mô hơn 4.000 m² tại SECC.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  // === Other engagement posts ===
  { id: 242, title: 'Chuẩn bị cho phân khu mở bán tháng 10 tại Waterpoint', source: 'anh.tranthihong.39', sourceType: 'Threads', date: '2026-09-24 12:10', sentiment: 'neutral', topicIds: [5], url: 'https://www.threads.com/@anh.tranthihong.39/post/DdqGk6Hko2w',
    excerpt: 'Chuẩn bị cho Các Phân Khu được mở bán trong tháng 10 của Dự án <mark>WaterPoint</mark>. Hãy theo chân Anh em ERA đến với dự án để nghe CĐT <mark>Nam Long</mark> chia sẻ.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  { id: 243, title: 'KICK OFF Nam Long Group – NLG', source: 'davidliuphoto', sourceType: 'Threads', date: '2026-09-22 21:06', sentiment: 'neutral', topicIds: [5], url: 'https://www.threads.com/@davidliuphoto/post/Ddl6V_7CFpx',
    excerpt: 'KICK OFF <mark>Nam Long Group</mark> – NLG. Photo by Team David Liu. MC Tạ Trần Quang Quý. Agency B2Event.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  { id: 244, title: 'Hình ảnh tại Nam Long Experience 2026', source: '_k2_21', sourceType: 'Threads', date: '2026-09-20 16:41', sentiment: 'positive', topicIds: [5], url: 'https://www.threads.com/@_k2_21/post/DdgSVRWD2lC',
    excerpt: '34 năm thành lập với rất nhiều sản phẩm được hàng triệu Gia Đình Việt chọn lựa, <mark>Nam Long</mark> đang từng bước chứng minh bằng những hành động thiết thực nhất. Sản phẩm: <mark>Elyse Island</mark>, <mark>Izumi City</mark>, <mark>Mizuki Park</mark>, <mark>Waterpoint</mark>.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  { id: 245, title: 'Mizuki Park – Cảm nhận khu đô thị', source: 'mac.chanh.phat', sourceType: 'Threads', date: '2026-09-21 15:54', sentiment: 'positive', topicIds: [5], url: 'https://www.threads.com/@mac.chanh.phat/post/DdixngbESEj',
    excerpt: 'Cảm nhận <mark>Mizuki Park</mark> của tập đoàn <mark>Nam Long Group</mark> phần 1!',
    engagement: { reactions: 0, shares: 0, comments: 0 } },

  { id: 246, title: 'BĐS Nam Long 1992 – Tết Trung Thu đoàn viên', source: 'BĐS Nam Long 1992', sourceType: 'Facebook Fanpage', date: '2026-09-25 09:42', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/nhadat24hhochiminh/posts/pfbid034ugvuJGq69izvqw33taBoXyLpRdXqHEe323sET84NnF9Chyg6ehteq8p1AGTeSPXl',
    excerpt: 'Với <mark>Nam Long</mark>, một nơi đáng sống không chỉ được tạo nên từ những ngôi nhà, tiện ích hay không gian xanh. 33+ năm kinh nghiệm, 11 khu đô thị, 681+ hecta quỹ đất sạch, hơn 33.000 gia đình Việt tin chọn.',
    engagement: { reactions: 1, shares: 0, comments: 0 } },

  { id: 247, title: 'Nam Long Experience 2026 – Trân trọng cảm ơn sự đồng hành', source: 'Thùy Trang Nam Long', sourceType: 'Facebook Fanpage', date: '2026-09-21 14:55', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/ThuyTrangProperty/posts/pfbid02NojRvsvpg15CqZ8FuDoXd72q5iTipdc8JU7gkwZRi2ftKtPiZbajQYpG5bsfcrB7l',
    excerpt: '<mark>Nam Long Experience 2026</mark> đã khép lại với nhiều dấu ấn đáng nhớ. Cảm ơn các đối tác chiến lược Nhật Bản: Hankyu Hanshin Properties, Nishi-Nippon Railroad, Tokyu Corporation.',
    engagement: { reactions: 0, shares: 1, comments: 0 } },

  { id: 248, title: 'BẤT ĐỘNG SẢN GIÁ TRỊ THỰC – Nam Long', source: 'Nam Long - Living and Investment', sourceType: 'Facebook Fanpage', date: '2026-09-28 09:18', sentiment: 'positive', topicIds: [5], url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0LPBPjGV3HznoKSgbS5a6VTJWtb4PHSsPw9rcowXuGnKNwkvpkhkLzPavbTyKiPaQl',
    excerpt: 'Trải qua hành trình hơn ba thập kỷ, sứ mệnh của <mark>Nam Long</mark> là kiên định gây dựng uy tín bằng những "giá trị thực". Giá trị thực là nơi an cư đáng sống cho người có nhu cầu ở thực.',
    engagement: { reactions: 0, shares: 0, comments: 0 } },
];