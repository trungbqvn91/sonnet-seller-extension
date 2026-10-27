(function () {
  const lv1Categories = [
    {
        id: "951432",
        name: "Bộ sưu tập",
        slug: "bo-suu-tap"
    },
    {
        id: "601450",
        name: "Chăm sóc sắc đẹp & Chăm sóc cá nhân",
        slug: "cham-soc-sac-dep-cham-soc-ca-nhan"
    },
    {
        id: "604579",
        name: "Công cụ & Phần cứng",
        slug: "cong-cu-phan-cung"
    },
    {
        id: "601352",
        name: "Giày",
        slug: "giay"
    },
    {
        id: "600154",
        name: "Hàng dệt & Đồ nội thất mềm",
        slug: "hang-det-do-noi-that-mem"
    },
    {
        id: "824584",
        name: "Hành lý & Túi xách",
        slug: "hanh-ly-tui-xach"
    },
    {
        id: "601755",
        name: "Máy tính & Thiết bị Văn phòng",
        slug: "may-tinh-thiet-bi-van-phong"
    },
    {
        id: "605248",
        name: "Phụ kiện thời trang",
        slug: "phu-kien-thoi-trang"
    },
    {
        id: "953224",
        name: "Phụ kiện trang sức & Phái sinh",
        slug: "phu-kien-trang-suc-phai-sinh"
    },
    {
        id: "801928",
        name: "Sách, tạp chí & âm thanh",
        slug: "sach-tap-chi-am-thanh"
    },
    {
        id: "834312",
        name: "Sản phẩm trực tuyến",
        slug: "san-pham-truc-tuyen"
    },
    {
        id: "700645",
        name: "Sức khỏe",
        slug: "suc-khoe"
    },
    {
        id: "604968",
        name: "Sửa chữa nhà cửa",
        slug: "sua-chua-nha-cua"
    },
    {
        id: "600942",
        name: "Thiết bị gia dụng",
        slug: "thiet-bi-gia-dung"
    },
    {
        id: "603014",
        name: "Thể thao & Ngoài trời",
        slug: "the-thao-ngoai-troi"
    },
    {
        id: "601303",
        name: "Thời trang Hồi giáo",
        slug: "thoi-trang-hoi-giao"
    },
    {
        id: "802184",
        name: "Thời trang trẻ em",
        slug: "thoi-trang-tre-em"
    },
    {
        id: "824328",
        name: "Trang phục nam & Đồ lót",
        slug: "trang-phuc-nam-do-lot"
    },
    {
        id: "601152",
        name: "Trang phục nữ & Đồ lót",
        slug: "trang-phuc-nu-do-lot"
    },
    {
        id: "602284",
        name: "Trẻ sơ sinh & thai sản",
        slug: "tre-so-sinh-thai-san"
    },
    {
        id: "605196",
        name: "Ô tô & xe máy",
        slug: "o-to-xe-may"
    },
    {
        id: "601739",
        name: "Điện thoại & Đồ điện tử",
        slug: "dien-thoai-do-dien-tu"
    },
    {
        id: "2344592",
        name: "Đặt chỗ & voucher",
        slug: "dat-cho-voucher"
    },
    {
        id: "604206",
        name: "Đồ chơi & sở thích",
        slug: "do-choi-so-thich"
    },
    {
        id: "856720",
        name: "Đồ cũ",
        slug: "do-cu"
    },
    {
        id: "602118",
        name: "Đồ dùng cho thú cưng",
        slug: "do-dung-cho-thu-cung"
    },
    {
        id: "600024",
        name: "Đồ dùng nhà bếp",
        slug: "do-dung-nha-bep"
    },
    {
        id: "600001",
        name: "Đồ gia dụng",
        slug: "do-gia-dung"
    },
    {
        id: "604453",
        name: "Đồ nội thất",
        slug: "do-noi-that"
    },
    {
        id: "700437",
        name: "Đồ ăn & Đồ uống",
        slug: "do-an-do-uong"
    }
];

  const SELLER_SCRAPER_CONFIG = {
    countryCode: "VNLC3LWLG7",
    earliestDate: "2026-03-20",
    latestLagDays: 2,
    delayMs: 500,
    challengePollMs: 5000,
    challengeMaxWaitMs: 600000,
    pageSizeTopSelling: 50,
    maxTopSellingPages: 4,
    lv1Categories,
    lv1CategoryIdsAll: lv1Categories.map((category) => category.id),
    categoryTree: {
    l2: [
        {
            id: "809872",
            name: "Bộ sưu tập văn hóa đương đại",
            l1_id: "951432",
            slug: ""
        },
        {
            id: "810000",
            name: "Khung giường & đầu giường",
            l1_id: "951432",
            slug: ""
        },
        {
            id: "937736",
            name: "Bộ sưu tập thể thao",
            l1_id: "951432",
            slug: ""
        },
        {
            id: "952712",
            name: "Tiền & tiền xu sưu tầm",
            l1_id: "951432",
            slug: ""
        },
        {
            id: "953352",
            name: "Giải trí",
            l1_id: "951432",
            slug: ""
        },
        {
            id: "1050248",
            name: "Rút thăm trúng thưởng",
            l1_id: "951432",
            slug: ""
        },
        {
            id: "848648",
            name: "Trang điểm",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "848776",
            name: "Chăm sóc da",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "848904",
            name: "Chăm sóc & Tạo kiểu tóc",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "849032",
            name: "Chăm sóc Tay & Chân",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "849160",
            name: "Đồ tắm & Chăm sóc cơ thể",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "849288",
            name: "Sản phẩm chăm sóc dành cho nam giới",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "849416",
            name: "Thiết bị chăm sóc cá nhân",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "849544",
            name: "Chăm sóc mắt & tai",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "849672",
            name: "Chăm sóc mũi & răng miệng",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "849800",
            name: "Sản phẩm chăm sóc dành cho phụ nữ",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "856208",
            name: "Nước hoa",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "981128",
            name: "Chăm sóc cá nhân đặc biệt",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "1086856",
            name: "Chăm sóc móng tay",
            l1_id: "601450",
            slug: ""
        },
        {
            id: "871560",
            name: "Dụng cụ điện",
            l1_id: "604579",
            slug: ""
        },
        {
            id: "871688",
            name: "Dụng cụ cầm tay",
            l1_id: "604579",
            slug: ""
        },
        {
            id: "871816",
            name: "Dụng cụ đo lường",
            l1_id: "604579",
            slug: ""
        },
        {
            id: "871944",
            name: "Dụng cụ làm vườn",
            l1_id: "604579",
            slug: ""
        },
        {
            id: "872072",
            name: "Thiết bị hàn",
            l1_id: "604579",
            slug: ""
        },
        {
            id: "872200",
            name: "Bộ sắp xếp dụng cụ",
            l1_id: "604579",
            slug: ""
        },
        {
            id: "872328",
            name: "Phần cứng",
            l1_id: "604579",
            slug: ""
        },
        {
            id: "980488",
            name: "Máy bơm & Hệ thống đường ống",
            l1_id: "604579",
            slug: ""
        },
        {
            id: "2315280",
            name: "Tự động hóa công nghiệp",
            l1_id: "604579",
            slug: ""
        },
        {
            id: "900488",
            name: "Giày nữ",
            l1_id: "601352",
            slug: ""
        },
        {
            id: "900616",
            name: "Giày nam",
            l1_id: "601352",
            slug: ""
        },
        {
            id: "900744",
            name: "Phụ kiện giày",
            l1_id: "601352",
            slug: ""
        },
        {
            id: "808328",
            name: "Chăn ga gối đệm",
            l1_id: "600154",
            slug: ""
        },
        {
            id: "809992",
            name: "Hàng dệt gia dụng",
            l1_id: "600154",
            slug: ""
        },
        {
            id: "811016",
            name: "Vải & Đồ may",
            l1_id: "600154",
            slug: ""
        },
        {
            id: "902408",
            name: "Túi xách nữ",
            l1_id: "824584",
            slug: ""
        },
        {
            id: "902536",
            name: "Túi xách nam",
            l1_id: "824584",
            slug: ""
        },
        {
            id: "902664",
            name: "Hành lý & Túi du lịch",
            l1_id: "824584",
            slug: ""
        },
        {
            id: "902792",
            name: "Túi đa năng",
            l1_id: "824584",
            slug: ""
        },
        {
            id: "902920",
            name: "Phụ kiện túi",
            l1_id: "824584",
            slug: ""
        },
        {
            id: "824840",
            name: "Máy tính để bàn, Máy tính xách tay & Máy tính bảng",
            l1_id: "601755",
            slug: ""
        },
        {
            id: "825352",
            name: "Linh kiện máy tính để bàn & máy tính xách tay",
            l1_id: "601755",
            slug: ""
        },
        {
            id: "826760",
            name: "Thiết bị ngoại vi & Phụ kiện",
            l1_id: "601755",
            slug: ""
        },
        {
            id: "828168",
            name: "Phần mềm & Bộ nhớ",
            l1_id: "601755",
            slug: ""
        },
        {
            id: "829192",
            name: "Các thành phần mạng",
            l1_id: "601755",
            slug: ""
        },
        {
            id: "830344",
            name: "Thiết bị văn phòng",
            l1_id: "601755",
            slug: ""
        },
        {
            id: "831112",
            name: "Văn phòng phẩm & Vật tư",
            l1_id: "601755",
            slug: ""
        },
        {
            id: "810128",
            name: "Nối tóc & tóc giả",
            l1_id: "605248",
            slug: ""
        },
        {
            id: "843144",
            name: "Vải may váy",
            l1_id: "605248",
            slug: ""
        },
        {
            id: "888592",
            name: "Phụ kiện đám cưới",
            l1_id: "605248",
            slug: ""
        },
        {
            id: "905224",
            name: "Phụ kiện quần áo",
            l1_id: "605248",
            slug: ""
        },
        {
            id: "905352",
            name: "Kính mắt",
            l1_id: "605248",
            slug: ""
        },
        {
            id: "905480",
            name: "Đồng hồ & Phụ kiện",
            l1_id: "605248",
            slug: ""
        },
        {
            id: "905608",
            name: "Phục sức & phụ kiện",
            l1_id: "605248",
            slug: ""
        },
        {
            id: "905864",
            name: "Phụ kiện cài đầu",
            l1_id: "605248",
            slug: ""
        },
        {
            id: "954888",
            name: "Bạch kim & Vàng Carat",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "955016",
            name: "Vàng",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "955144",
            name: "Bạc",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "955272",
            name: "Kim cương",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "955400",
            name: "Pha lê tự nhiên",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "961800",
            name: "Pha lê không tự nhiên",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "963848",
            name: "Ngọc bích",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "964104",
            name: "Hồng ngọc, Sapphire & Ngọc lục bảo",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "964232",
            name: "Đá bán quý",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "964360",
            name: "Đá quý nhân tạo",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "964488",
            name: "Ngọc trai",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "964616",
            name: "Hổ phách",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "964744",
            name: "Mellite",
            l1_id: "953224",
            slug: ""
        },
        {
            id: "927112",
            name: "Khoa học xã hội và nhân văn",
            l1_id: "801928",
            slug: ""
        },
        {
            id: "985736",
            name: "Tạp chí & Báo",
            l1_id: "801928",
            slug: ""
        },
        {
            id: "986760",
            name: "Văn học & Nghệ thuật",
            l1_id: "801928",
            slug: ""
        },
        {
            id: "989320",
            name: "Kinh tế & Quản lý",
            l1_id: "801928",
            slug: ""
        },
        {
            id: "989704",
            name: "Sách dành cho trẻ em & trẻ sơ sinh",
            l1_id: "801928",
            slug: ""
        },
        {
            id: "990216",
            name: "Khoa học & Công nghệ",
            l1_id: "801928",
            slug: ""
        },
        {
            id: "992392",
            name: "Phong cách sống & Sở thích",
            l1_id: "801928",
            slug: ""
        },
        {
            id: "992904",
            name: "Giáo dục & Trường học",
            l1_id: "801928",
            slug: ""
        },
        {
            id: "997384",
            name: "Video & nhạc",
            l1_id: "801928",
            slug: ""
        },
        {
            id: "809232",
            name: "Voucher",
            l1_id: "834312",
            slug: ""
        },
        {
            id: "893968",
            name: "Nạp tiền",
            l1_id: "834312",
            slug: ""
        },
        {
            id: "996360",
            name: "Viễn thông",
            l1_id: "834312",
            slug: ""
        },
        {
            id: "1092744",
            name: "Entertainment",
            l1_id: "834312",
            slug: ""
        },
        {
            id: "1092872",
            name: "Software",
            l1_id: "834312",
            slug: ""
        },
        {
            id: "1093000",
            name: "Mobile connectivity",
            l1_id: "834312",
            slug: ""
        },
        {
            id: "1093128",
            name: "eGift Cards",
            l1_id: "834312",
            slug: ""
        },
        {
            id: "1125256",
            name: "Education",
            l1_id: "834312",
            slug: ""
        },
        {
            id: "700646",
            name: "Thực phẩm bổ sung",
            l1_id: "700645",
            slug: ""
        },
        {
            id: "924424",
            name: "Vật tư y tế",
            l1_id: "700645",
            slug: ""
        },
        {
            id: "924552",
            name: "Sức khỏe tình dục",
            l1_id: "700645",
            slug: ""
        },
        {
            id: "949384",
            name: "Thuốc & Điều trị không kê đơn",
            l1_id: "700645",
            slug: ""
        },
        {
            id: "950792",
            name: "Thuốc & Phương pháp điều trị thay thế",
            l1_id: "700645",
            slug: ""
        },
        {
            id: "1025416",
            name: "Funeral",
            l1_id: "700645",
            slug: ""
        },
        {
            id: "2315408",
            name: "Thuốc theo toa",
            l1_id: "700645",
            slug: ""
        },
        {
            id: "2315536",
            name: "Bình bay hơi",
            l1_id: "700645",
            slug: ""
        },
        {
            id: "808208",
            name: "Năng lượng mặt trời & gió",
            l1_id: "604968",
            slug: ""
        },
        {
            id: "872456",
            name: "Đèn & hệ thống chiếu sáng",
            l1_id: "604968",
            slug: ""
        },
        {
            id: "872584",
            name: "Đồ dùng & thiết bị điện",
            l1_id: "604968",
            slug: ""
        },
        {
            id: "872712",
            name: "Đồ đạc nhà bếp",
            l1_id: "604968",
            slug: ""
        },
        {
            id: "872840",
            name: "Hệ thống nhà thông minh",
            l1_id: "604968",
            slug: ""
        },
        {
            id: "872968",
            name: "Vật tư xây dựng",
            l1_id: "604968",
            slug: ""
        },
        {
            id: "873096",
            name: "Đồ đạc nhà tắm",
            l1_id: "604968",
            slug: ""
        },
        {
            id: "873224",
            name: "An ninh & An toàn",
            l1_id: "604968",
            slug: ""
        },
        {
            id: "873352",
            name: "Vật dụng làm vườn",
            l1_id: "604968",
            slug: ""
        },
        {
            id: "844168",
            name: "Dụng cụ nhà bếp",
            l1_id: "600942",
            slug: ""
        },
        {
            id: "844808",
            name: "Đồ gia dụng",
            l1_id: "600942",
            slug: ""
        },
        {
            id: "845064",
            name: "Đồ gia dụng lớn",
            l1_id: "600942",
            slug: ""
        },
        {
            id: "845320",
            name: "Thiết bị thương mại",
            l1_id: "600942",
            slug: ""
        },
        {
            id: "2109200",
            name: "Refurbished Household Appliances",
            l1_id: "600942",
            slug: ""
        },
        {
            id: "834568",
            name: "Đồ thể thao & ngoài trời",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "834696",
            name: "Giày thể thao",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "834824",
            name: "Phụ kiện thể thao & ngoài trời",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "834952",
            name: "Thiết bị các môn thể thao bóng",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "835080",
            name: "Thiết bị thể thao dưới nước",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "835208",
            name: "Thiết bị thể thao mùa đông",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "835336",
            name: "Thiết bị tập thể hình",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "835464",
            name: "Thiết bị cắm trại & đi bộ đường dài",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "835592",
            name: "Thiết bị giải trí ngoài trời & thư giãn",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "846224",
            name: "Đồ bơi, đồ lướt sóng & đồ lặn",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "936712",
            name: "Cửa hàng dành cho người hâm mộ",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "2108816",
            name: "Trò chơi sân cỏ",
            l1_id: "603014",
            slug: ""
        },
        {
            id: "601304",
            name: "Khăn trùm đầu che đầu và cổ (Hijab)",
            l1_id: "601303",
            slug: ""
        },
        {
            id: "601310",
            name: "Trang phục phụ nữ Hồi giáo",
            l1_id: "601303",
            slug: ""
        },
        {
            id: "601325",
            name: "Trang phục đàn ông Hồi giáo",
            l1_id: "601303",
            slug: ""
        },
        {
            id: "601331",
            name: "Đồ mặc ngoài",
            l1_id: "601303",
            slug: ""
        },
        {
            id: "601339",
            name: "Trang phục trẻ em Hồi giáo",
            l1_id: "601303",
            slug: ""
        },
        {
            id: "601343",
            name: "Phụ kiện Hồi giáo",
            l1_id: "601303",
            slug: ""
        },
        {
            id: "601348",
            name: "Trang phục & trang bị cầu nguyện",
            l1_id: "601303",
            slug: ""
        },
        {
            id: "838920",
            name: "Đồ thể thao Hồi giáo",
            l1_id: "601303",
            slug: ""
        },
        {
            id: "839176",
            name: "Thiết bị Umroh",
            l1_id: "601303",
            slug: ""
        },
        {
            id: "802312",
            name: "Quần áo bé trai",
            l1_id: "802184",
            slug: ""
        },
        {
            id: "803592",
            name: "Quần áo bé gái",
            l1_id: "802184",
            slug: ""
        },
        {
            id: "805128",
            name: "Giày dép bé trai",
            l1_id: "802184",
            slug: ""
        },
        {
            id: "806024",
            name: "Giày dép bé gái",
            l1_id: "802184",
            slug: ""
        },
        {
            id: "806792",
            name: "Phụ kiện thời trang cho trẻ em",
            l1_id: "802184",
            slug: ""
        },
        {
            id: "2337936",
            name: "Kid's South Asian Clothing",
            l1_id: "802184",
            slug: ""
        },
        {
            id: "839944",
            name: "Áo nam",
            l1_id: "824328",
            slug: ""
        },
        {
            id: "840072",
            name: "Quần nam",
            l1_id: "824328",
            slug: ""
        },
        {
            id: "840328",
            name: "Trang phục đặc biệt dành cho nam",
            l1_id: "824328",
            slug: ""
        },
        {
            id: "840456",
            name: "Đồ lót nam",
            l1_id: "824328",
            slug: ""
        },
        {
            id: "840584",
            name: "Đồ ngủ & đồ mặc nhà cho nam",
            l1_id: "824328",
            slug: ""
        },
        {
            id: "840712",
            name: "Bộ vét và quần yếm nam",
            l1_id: "824328",
            slug: ""
        },
        {
            id: "2337808",
            name: "Men's South Asian Clothing",
            l1_id: "824328",
            slug: ""
        },
        {
            id: "842248",
            name: "Áo nữ",
            l1_id: "601152",
            slug: ""
        },
        {
            id: "842376",
            name: "Quần nữ",
            l1_id: "601152",
            slug: ""
        },
        {
            id: "842504",
            name: "Váy nữ",
            l1_id: "601152",
            slug: ""
        },
        {
            id: "842632",
            name: "Trang phục đặc biệt dành cho nữ",
            l1_id: "601152",
            slug: ""
        },
        {
            id: "842760",
            name: "Bộ vét và quần yếm nữ",
            l1_id: "601152",
            slug: ""
        },
        {
            id: "842888",
            name: "Đồ lót nữ",
            l1_id: "601152",
            slug: ""
        },
        {
            id: "843016",
            name: "Đồ ngủ & đồ mặc nhà cho nữ",
            l1_id: "601152",
            slug: ""
        },
        {
            id: "1091208",
            name: "Quần áo nữ cỡ lớn",
            l1_id: "601152",
            slug: ""
        },
        {
            id: "2337680",
            name: "Women's South Asian Clothing",
            l1_id: "601152",
            slug: ""
        },
        {
            id: "877320",
            name: "Quần áo & Giày trẻ em",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "877576",
            name: "Những vật dụng cần thiết khi cho bé đi du lịch",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "877832",
            name: "Cho bú & Cho ăn",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "878216",
            name: "Nội thất cho trẻ em",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "878600",
            name: "An toàn cho bé",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "878984",
            name: "Đồ chơi trẻ em",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "879112",
            name: "Chăm sóc bé & sức khỏe",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "879496",
            name: "Sữa công thức & Thực phẩm cho trẻ",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "880008",
            name: "Vật tư cho mẹ",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "961928",
            name: "Phụ kiện thời trang cho em bé",
            l1_id: "602284",
            slug: ""
        },
        {
            id: "809488",
            name: "Bộ phận thay thế cho ô tô",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "809616",
            name: "Linh kiện mô tô",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "847504",
            name: "Xe máy",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "929928",
            name: "Thiết bị điện tử trên ô tô",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "930056",
            name: "Phụ kiện bên ngoài ô tô",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "930184",
            name: "Phụ kiện bên trong ô tô",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "940296",
            name: "Dụng cụ sửa chữa ô tô",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "940424",
            name: "Đèn xe",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "940680",
            name: "Xe Quads, Xe lưu động & Thuyền",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "940808",
            name: "Rửa & Bảo dưỡng ô tô",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "940936",
            name: "Phụ kiện xe máy",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "1087112",
            name: "Electric Vehicles",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "2315664",
            name: "Xe hơi",
            l1_id: "605196",
            slug: ""
        },
        {
            id: "909064",
            name: "Phụ kiện điện thoại",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "909192",
            name: "Camera & Nhiếp ảnh",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "909320",
            name: "Âm thanh & Video",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "909448",
            name: "Game & máy chơi game",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "909576",
            name: "Thiết bị thông minh & Thiết bị đeo",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "909704",
            name: "Thiết bị giáo dục",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "978952",
            name: "Phụ kiện đa năng",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "984584",
            name: "Phụ kiện máy tính bảng & máy tính",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "995976",
            name: "Điện thoại & Máy tính bảng",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "2108944",
            name: "Thiết bị thông minh & thiết bị đeo",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "2109072",
            name: "Refurbished Electronics",
            l1_id: "601739",
            slug: ""
        },
        {
            id: "888720",
            name: "Voucher vật lý",
            l1_id: "2344592",
            slug: ""
        },
        {
            id: "2315920",
            name: "Ô tô",
            l1_id: "2344592",
            slug: ""
        },
        {
            id: "2316048",
            name: "Property",
            l1_id: "2344592",
            slug: ""
        },
        {
            id: "2316176",
            name: "Travel & Tickets",
            l1_id: "2344592",
            slug: ""
        },
        {
            id: "859656",
            name: "Búp bê & Gấu bông",
            l1_id: "604206",
            slug: ""
        },
        {
            id: "859784",
            name: "Đồ chơi giáo dục",
            l1_id: "604206",
            slug: ""
        },
        {
            id: "859912",
            name: "Đồ chơi thể thao & ngoài trời",
            l1_id: "604206",
            slug: ""
        },
        {
            id: "860040",
            name: "Đồ chơi điện & điều khiển từ xa",
            l1_id: "604206",
            slug: ""
        },
        {
            id: "860168",
            name: "Trò chơi & Ghép hình",
            l1_id: "604206",
            slug: ""
        },
        {
            id: "860296",
            name: "Đồ chơi cổ điển & mới lạ",
            l1_id: "604206",
            slug: ""
        },
        {
            id: "860552",
            name: "Nhạc cụ & Phụ kiện",
            l1_id: "604206",
            slug: ""
        },
        {
            id: "951560",
            name: "DIY",
            l1_id: "604206",
            slug: ""
        },
        {
            id: "856976",
            name: "Collectible Trading Cards",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "857104",
            name: "Phụ kiện thời trang",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "857232",
            name: "Túi xách",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "857360",
            name: "Giày dép",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "857488",
            name: "Thời trang nam",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "857616",
            name: "Thời trang nữ",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "857744",
            name: "Điện thoại & đồ điện tử tân trang",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "864656",
            name: "Hành lý & du lịch",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "865296",
            name: "Đồng hồ",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "1100296",
            name: "Fine Jewelry",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "2315792",
            name: "Car & Motorcycles",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "2335888",
            name: "Sports Accessories",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "2339600",
            name: "Books",
            l1_id: "856720",
            slug: ""
        },
        {
            id: "812168",
            name: "Thức ăn cho chó & mèo",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "812808",
            name: "Nội thất cho chó & mèo",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "813960",
            name: "Quần áo cho chó & mèo",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "815624",
            name: "Cát vệ sinh cho chó & mèo",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "816392",
            name: "Đồ chải chuốt cho chó & mèo",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "818184",
            name: "Chăm sóc sức khỏe cho chó & mèo",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "818696",
            name: "Phụ kiện cho chó & mèo",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "819848",
            name: "Vật tư dành cho cá & loài sống dưới nước",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "821000",
            name: "Vật tư dành cho bò sát & động vật lưỡng cư",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "821896",
            name: "Vật tư dành cho chim",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "822792",
            name: "Vật tư dành cho động vật nhỏ",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "1001992",
            name: "Vật tư cho gia cầm & gia súc",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "2315152",
            name: "Thú cưng",
            l1_id: "602118",
            slug: ""
        },
        {
            id: "858504",
            name: "Đồ để uống trà & cà phê",
            l1_id: "600024",
            slug: ""
        },
        {
            id: "858632",
            name: "Dao nhà bếp",
            l1_id: "600024",
            slug: ""
        },
        {
            id: "858760",
            name: "Tiệc nướng barbecue",
            l1_id: "600024",
            slug: ""
        },
        {
            id: "858888",
            name: "Đồ dùng quầy rượu & Đồ uống rượu",
            l1_id: "600024",
            slug: ""
        },
        {
            id: "859016",
            name: "Đồ làm bánh",
            l1_id: "600024",
            slug: ""
        },
        {
            id: "859144",
            name: "Đồ nấu ăn",
            l1_id: "600024",
            slug: ""
        },
        {
            id: "859272",
            name: "Dao kéo & Bộ đồ ăn",
            l1_id: "600024",
            slug: ""
        },
        {
            id: "859400",
            name: "Bộ đồ uống",
            l1_id: "600024",
            slug: ""
        },
        {
            id: "859528",
            name: "Đồ dùng & Dụng cụ nhà bếp",
            l1_id: "600024",
            slug: ""
        },
        {
            id: "851848",
            name: "Đồ đựng trong nhà",
            l1_id: "600001",
            slug: ""
        },
        {
            id: "851976",
            name: "Đồ dùng phòng tắm",
            l1_id: "600001",
            slug: ""
        },
        {
            id: "852104",
            name: "Trang trí nội thất",
            l1_id: "600001",
            slug: ""
        },
        {
            id: "852232",
            name: "Đồ gia dụng",
            l1_id: "600001",
            slug: ""
        },
        {
            id: "852360",
            name: "Dụng cụ & phụ kiện giặt là",
            l1_id: "600001",
            slug: ""
        },
        {
            id: "852488",
            name: "Đồ dùng cho lễ hội & bữa tiệc",
            l1_id: "600001",
            slug: ""
        },
        {
            id: "852616",
            name: "Đồ gia dụng khác",
            l1_id: "600001",
            slug: ""
        },
        {
            id: "871048",
            name: "Nội thất trong nhà",
            l1_id: "604453",
            slug: ""
        },
        {
            id: "871176",
            name: "Nội thất ngoài trời",
            l1_id: "604453",
            slug: ""
        },
        {
            id: "871304",
            name: "Nội thất trẻ em",
            l1_id: "604453",
            slug: ""
        },
        {
            id: "871432",
            name: "Nội thất thương mại",
            l1_id: "604453",
            slug: ""
        },
        {
            id: "809744",
            name: "Sữa và bơ sữa",
            l1_id: "700437",
            slug: ""
        },
        {
            id: "914696",
            name: "Bia, Rượu & Rượu mạnh",
            l1_id: "700437",
            slug: ""
        },
        {
            id: "914824",
            name: "Đồ uống",
            l1_id: "700437",
            slug: ""
        },
        {
            id: "914952",
            name: "Thực phẩm ăn liền",
            l1_id: "700437",
            slug: ""
        },
        {
            id: "915080",
            name: "Kẹp & Đồ dùng nấu ăn cần thiết",
            l1_id: "700437",
            slug: ""
        },
        {
            id: "915208",
            name: "Nướng bánh",
            l1_id: "700437",
            slug: ""
        },
        {
            id: "915336",
            name: "Đồ ăn vặt",
            l1_id: "700437",
            slug: ""
        },
        {
            id: "915464",
            name: "Thực phẩm tươi & đông lạnh",
            l1_id: "700437",
            slug: ""
        },
        {
            id: "1091080",
            name: "Lễ Hiến sinh",
            l1_id: "700437",
            slug: ""
        }
    ],
    l3: [
        {
            "id": "600009",
            "name": "Đồ trang trí lễ hội",
            "l1_id": "600001",
            "l2_id": "852488",
            "slug": ""
        },
        {
            "id": "600017",
            "name": "Bóng bay",
            "l1_id": "600001",
            "l2_id": "852488",
            "slug": ""
        },
        {
            "id": "600019",
            "name": "Bình xịt, kim tuyến & băng giấy màu",
            "l1_id": "600001",
            "l2_id": "852488",
            "slug": ""
        },
        {
            "id": "600029",
            "name": "Thùng bảo quản",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "600032",
            "name": "Phích",
            "l1_id": "600024",
            "l2_id": "859400",
            "slug": ""
        },
        {
            "id": "600033",
            "name": "Miếng lót & Đế lót",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "600036",
            "name": "Cốc thủy tinh",
            "l1_id": "600024",
            "l2_id": "859400",
            "slug": ""
        },
        {
            "id": "600042",
            "name": "Cốc",
            "l1_id": "600024",
            "l2_id": "859400",
            "slug": ""
        },
        {
            "id": "600047",
            "name": "Phụ kiện bộ đồ uống",
            "l1_id": "600024",
            "l2_id": "859400",
            "slug": ""
        },
        {
            "id": "600048",
            "name": "Bình nước",
            "l1_id": "600024",
            "l2_id": "859400",
            "slug": ""
        },
        {
            "id": "600059",
            "name": "Hộp đựng cơm",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "600060",
            "name": "Đồ đựng rau củ quả",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "600063",
            "name": "Đũa",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "600064",
            "name": "Đĩa",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "600069",
            "name": "Bát",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "600070",
            "name": "Dĩa",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "600071",
            "name": "Bộ đồ ăn",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "600072",
            "name": "Dao",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "600073",
            "name": "Thìa",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "600075",
            "name": "Đồ dùng quầy rượu",
            "l1_id": "600024",
            "l2_id": "858888",
            "slug": ""
        },
        {
            "id": "600080",
            "name": "Giá để rượu",
            "l1_id": "600024",
            "l2_id": "858888",
            "slug": ""
        },
        {
            "id": "600081",
            "name": "Bộ đồ dùng ở quầy rượu",
            "l1_id": "600024",
            "l2_id": "858888",
            "slug": ""
        },
        {
            "id": "600095",
            "name": "Chén & Đĩa",
            "l1_id": "600024",
            "l2_id": "859400",
            "slug": ""
        },
        {
            "id": "600096",
            "name": "Bình cà phê",
            "l1_id": "600024",
            "l2_id": "858504",
            "slug": ""
        },
        {
            "id": "600100",
            "name": "Bộ phin pha cà phê",
            "l1_id": "600024",
            "l2_id": "858504",
            "slug": ""
        },
        {
            "id": "600102",
            "name": "Bình sữa",
            "l1_id": "600024",
            "l2_id": "858504",
            "slug": ""
        },
        {
            "id": "600103",
            "name": "Dụng cụ pha cà phê",
            "l1_id": "600024",
            "l2_id": "858504",
            "slug": ""
        },
        {
            "id": "600119",
            "name": "Khay & Khuôn nướng",
            "l1_id": "600024",
            "l2_id": "859016",
            "slug": ""
        },
        {
            "id": "600121",
            "name": "Dụng cụ đo lường",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "600123",
            "name": "Cái đánh lửa",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "600127",
            "name": "Đồng hồ hẹn giờ trong bếp",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "600132",
            "name": "Dụng cụ chế biến thịt & thịt gia cầm",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "600135",
            "name": "Sàng và Chao",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "600139",
            "name": "Khác",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "600145",
            "name": "Dao nhà bếp",
            "l1_id": "600024",
            "l2_id": "858632",
            "slug": ""
        },
        {
            "id": "600146",
            "name": "Nồi",
            "l1_id": "600024",
            "l2_id": "859144",
            "slug": ""
        },
        {
            "id": "600148",
            "name": "Dụng cụ nấu ăn",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "600151",
            "name": "Thớt",
            "l1_id": "600024",
            "l2_id": "858632",
            "slug": ""
        },
        {
            "id": "600152",
            "name": "Dụng cụ làm bánh",
            "l1_id": "600024",
            "l2_id": "859016",
            "slug": ""
        },
        {
            "id": "600157",
            "name": "Chăn",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "600165",
            "name": "Khăn trải giường & Vỏ gối",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "600203",
            "name": "Bọc ghế",
            "l1_id": "600154",
            "l2_id": "809992",
            "slug": ""
        },
        {
            "id": "600204",
            "name": "Khăn trải bàn & Thảm trang trí",
            "l1_id": "600154",
            "l2_id": "809992",
            "slug": ""
        },
        {
            "id": "600221",
            "name": "Thảm",
            "l1_id": "600154",
            "l2_id": "809992",
            "slug": ""
        },
        {
            "id": "600251",
            "name": "Bộ dụng cụ may thủ công",
            "l1_id": "600154",
            "l2_id": "811016",
            "slug": ""
        },
        {
            "id": "600252",
            "name": "Bộ dụng cụ may vá",
            "l1_id": "600154",
            "l2_id": "811016",
            "slug": ""
        },
        {
            "id": "600299",
            "name": "Tượng & Tượng nhỏ",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "600321",
            "name": "Đồng hồ",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "600338",
            "name": "Hình dán trang trí",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "600341",
            "name": "Khung ảnh",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "600347",
            "name": "Móc & Giá",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "600378",
            "name": "Chổi phủi bụi & đầu chổi",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600396",
            "name": "Găng tay vệ sinh",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600401",
            "name": "Túi rác",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600403",
            "name": "Thùng rác",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600405",
            "name": "Bàn chải vệ sinh & cây thông bồn cầu",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "600406",
            "name": "Đệm ngồi bồn cầu",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "600409",
            "name": "Khăn lau",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600416",
            "name": "Máy lấy xà phòng",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "600417",
            "name": "Chổi",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600418",
            "name": "Chổi cao su",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600423",
            "name": "Cây lau nhà",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600427",
            "name": "Tạp dề",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600430",
            "name": "Cốc để nhà tắm",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "600436",
            "name": "Hộp để bàn chải đánh răng",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "600439",
            "name": "Rèm & Thanh treo rèm tắm",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "600447",
            "name": "Khay đựng xà phòng",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "600451",
            "name": "Bồn tắm & Bồn ngâm chân",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "600458",
            "name": "Tấm chống ẩm, nấm mốc & nhậy",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600466",
            "name": "Thuốc diệt cỏ & Kiểm soát sâu bệnh",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600475",
            "name": "Chất tẩy rửa formaldehyde",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600477",
            "name": "Nước hoa để phòng",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600569",
            "name": "Quần áo đi mưa",
            "l1_id": "600001",
            "l2_id": "852616",
            "slug": ""
        },
        {
            "id": "600570",
            "name": "Ô dù",
            "l1_id": "600001",
            "l2_id": "852616",
            "slug": ""
        },
        {
            "id": "600573",
            "name": "Áo mưa",
            "l1_id": "600001",
            "l2_id": "852616",
            "slug": ""
        },
        {
            "id": "600574",
            "name": "Ủng cao su chống nước",
            "l1_id": "600001",
            "l2_id": "852616",
            "slug": ""
        },
        {
            "id": "600621",
            "name": "Hộp & Thùng",
            "l1_id": "600001",
            "l2_id": "851848",
            "slug": ""
        },
        {
            "id": "600686",
            "name": "Giỏ",
            "l1_id": "600001",
            "l2_id": "851848",
            "slug": ""
        },
        {
            "id": "600747",
            "name": "Túi giặt",
            "l1_id": "600001",
            "l2_id": "852360",
            "slug": ""
        },
        {
            "id": "600748",
            "name": "Móc treo & Kẹp",
            "l1_id": "600001",
            "l2_id": "851848",
            "slug": ""
        },
        {
            "id": "600750",
            "name": "Dây phơi",
            "l1_id": "600001",
            "l2_id": "852360",
            "slug": ""
        },
        {
            "id": "600756",
            "name": "Bàn ủi",
            "l1_id": "600001",
            "l2_id": "852360",
            "slug": ""
        },
        {
            "id": "600758",
            "name": "Giá phơi đồ",
            "l1_id": "600001",
            "l2_id": "852360",
            "slug": ""
        },
        {
            "id": "600812",
            "name": "Đồ vệ sinh nhà cửa",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600839",
            "name": "Giấy vệ sinh & giấy lau",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "600852",
            "name": "Ti vi",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "601090",
            "name": "Máy lọc không khí",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601092",
            "name": "Máy tạo độ ẩm",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601095",
            "name": "Máy sưởi",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601100",
            "name": "Bàn là",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601102",
            "name": "Máy hút bụi & Robot quét nhà",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601104",
            "name": "Quạt",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601106",
            "name": "Các bộ phận của thiết bị gia dụng",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601107",
            "name": "Máy là hơi",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601108",
            "name": "Máy hút ẩm",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601116",
            "name": "Máy lau cửa sổ chạy bằng điện",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "601194",
            "name": "Áo gilê và Áo gilet",
            "l1_id": "824328",
            "l2_id": "839944",
            "slug": ""
        },
        {
            "id": "601195",
            "name": "Áo sơ mi",
            "l1_id": "824328",
            "l2_id": "839944",
            "slug": ""
        },
        {
            "id": "601196",
            "name": "Quần short",
            "l1_id": "824328",
            "l2_id": "840072",
            "slug": ""
        },
        {
            "id": "601197",
            "name": "Áo khoác & Áo choàng",
            "l1_id": "824328",
            "l2_id": "839944",
            "slug": ""
        },
        {
            "id": "601202",
            "name": "Quần jean",
            "l1_id": "824328",
            "l2_id": "840072",
            "slug": ""
        },
        {
            "id": "601210",
            "name": "Bộ",
            "l1_id": "824328",
            "l2_id": "840712",
            "slug": ""
        },
        {
            "id": "601213",
            "name": "Áo hoodie & Áo len",
            "l1_id": "824328",
            "l2_id": "839944",
            "slug": ""
        },
        {
            "id": "601216",
            "name": "Bộ vét",
            "l1_id": "824328",
            "l2_id": "840712",
            "slug": ""
        },
        {
            "id": "601218",
            "name": "Quần dài",
            "l1_id": "824328",
            "l2_id": "840072",
            "slug": ""
        },
        {
            "id": "601223",
            "name": "Hàng dệt kim",
            "l1_id": "824328",
            "l2_id": "839944",
            "slug": ""
        },
        {
            "id": "601226",
            "name": "Áo thun",
            "l1_id": "824328",
            "l2_id": "839944",
            "slug": ""
        },
        {
            "id": "601247",
            "name": "Quần lót",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "601259",
            "name": "Đồ lót định hình",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "601262",
            "name": "Áo lót",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "601264",
            "name": "Chân váy",
            "l1_id": "601152",
            "l2_id": "842376",
            "slug": ""
        },
        {
            "id": "601265",
            "name": "Áo cánh & Áo sơ mi",
            "l1_id": "601152",
            "l2_id": "842248",
            "slug": ""
        },
        {
            "id": "601266",
            "name": "Quần short",
            "l1_id": "601152",
            "l2_id": "842376",
            "slug": ""
        },
        {
            "id": "601267",
            "name": "Áo khoác & Áo choàng",
            "l1_id": "601152",
            "l2_id": "842248",
            "slug": ""
        },
        {
            "id": "601270",
            "name": "Váy cưới",
            "l1_id": "601152",
            "l2_id": "842504",
            "slug": ""
        },
        {
            "id": "601271",
            "name": "Váy dự tiệc",
            "l1_id": "601152",
            "l2_id": "842504",
            "slug": ""
        },
        {
            "id": "601274",
            "name": "Quần legging",
            "l1_id": "601152",
            "l2_id": "842376",
            "slug": ""
        },
        {
            "id": "601276",
            "name": "Quần jean",
            "l1_id": "601152",
            "l2_id": "842376",
            "slug": ""
        },
        {
            "id": "601277",
            "name": "Quần dài",
            "l1_id": "601152",
            "l2_id": "842376",
            "slug": ""
        },
        {
            "id": "601280",
            "name": "Quần yếm",
            "l1_id": "601152",
            "l2_id": "842760",
            "slug": ""
        },
        {
            "id": "601281",
            "name": "Váy thường mặc",
            "l1_id": "601152",
            "l2_id": "842504",
            "slug": ""
        },
        {
            "id": "601282",
            "name": "Áo gilê",
            "l1_id": "601152",
            "l2_id": "842248",
            "slug": ""
        },
        {
            "id": "601284",
            "name": "Hàng dệt kim",
            "l1_id": "601152",
            "l2_id": "842248",
            "slug": ""
        },
        {
            "id": "601291",
            "name": "Bộ",
            "l1_id": "601152",
            "l2_id": "842760",
            "slug": ""
        },
        {
            "id": "601295",
            "name": "Áo hoodie & Áo len",
            "l1_id": "601152",
            "l2_id": "842248",
            "slug": ""
        },
        {
            "id": "601296",
            "name": "Bộ vét",
            "l1_id": "601152",
            "l2_id": "842760",
            "slug": ""
        },
        {
            "id": "601302",
            "name": "Áo thun",
            "l1_id": "601152",
            "l2_id": "842248",
            "slug": ""
        },
        {
            "id": "601305",
            "name": "Khăn trùm tóc",
            "l1_id": "601303",
            "l2_id": "601304",
            "slug": ""
        },
        {
            "id": "601306",
            "name": "Khăn trùm đầu đội ngay",
            "l1_id": "601303",
            "l2_id": "601304",
            "slug": ""
        },
        {
            "id": "601307",
            "name": "Khăn trùm đầu vuông",
            "l1_id": "601303",
            "l2_id": "601304",
            "slug": ""
        },
        {
            "id": "601308",
            "name": "Khăn quàng cổ Pashmina",
            "l1_id": "601303",
            "l2_id": "601304",
            "slug": ""
        },
        {
            "id": "601309",
            "name": "Khăn trùm dài che đầu, cổ và vai (Khimar)",
            "l1_id": "601303",
            "l2_id": "601304",
            "slug": ""
        },
        {
            "id": "601313",
            "name": "Áo Tunic",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "601314",
            "name": "Áo sơ mi và áo blouse",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "601316",
            "name": "Chân váy",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "601317",
            "name": "Quần Palazzo",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "601319",
            "name": "Quần legging",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "601322",
            "name": "Áo Kaftan",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "601323",
            "name": "Abaya",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "601324",
            "name": "Áo liền quần",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "601326",
            "name": "Koko & Áo",
            "l1_id": "601303",
            "l2_id": "601325",
            "slug": ""
        },
        {
            "id": "601327",
            "name": "Áo choàng",
            "l1_id": "601303",
            "l2_id": "601325",
            "slug": ""
        },
        {
            "id": "601329",
            "name": "Quần dài",
            "l1_id": "601303",
            "l2_id": "601325",
            "slug": ""
        },
        {
            "id": "601330",
            "name": "Sarong",
            "l1_id": "601303",
            "l2_id": "601348",
            "slug": ""
        },
        {
            "id": "601332",
            "name": "Áo gilê",
            "l1_id": "601303",
            "l2_id": "601331",
            "slug": ""
        },
        {
            "id": "601333",
            "name": "Áo cardigan",
            "l1_id": "601303",
            "l2_id": "601331",
            "slug": ""
        },
        {
            "id": "601334",
            "name": "Áo khoác",
            "l1_id": "601303",
            "l2_id": "601331",
            "slug": ""
        },
        {
            "id": "601335",
            "name": "Áo choàng",
            "l1_id": "601303",
            "l2_id": "601331",
            "slug": ""
        },
        {
            "id": "601340",
            "name": "Khăn trùm đầu cho trẻ em",
            "l1_id": "601303",
            "l2_id": "601339",
            "slug": ""
        },
        {
            "id": "601341",
            "name": "Trang phục bé gái Hồi giáo",
            "l1_id": "601303",
            "l2_id": "601339",
            "slug": ""
        },
        {
            "id": "601342",
            "name": "Trang phục bé trai Hồi giáo",
            "l1_id": "601303",
            "l2_id": "601339",
            "slug": ""
        },
        {
            "id": "601344",
            "name": "Ghim cài khăn trùm đầu",
            "l1_id": "601303",
            "l2_id": "601343",
            "slug": ""
        },
        {
            "id": "601345",
            "name": "Găng tay ống",
            "l1_id": "601303",
            "l2_id": "601343",
            "slug": ""
        },
        {
            "id": "601346",
            "name": "Tất",
            "l1_id": "601303",
            "l2_id": "601343",
            "slug": ""
        },
        {
            "id": "601347",
            "name": "Đồ bơi Hồi giáo",
            "l1_id": "601303",
            "l2_id": "838920",
            "slug": ""
        },
        {
            "id": "601349",
            "name": "Peci",
            "l1_id": "601303",
            "l2_id": "601348",
            "slug": ""
        },
        {
            "id": "601350",
            "name": "Bộ đồ cầu nguyện",
            "l1_id": "601303",
            "l2_id": "601348",
            "slug": ""
        },
        {
            "id": "601351",
            "name": "Thảm cầu nguyện",
            "l1_id": "601303",
            "l2_id": "601348",
            "slug": ""
        },
        {
            "id": "601357",
            "name": "Giày thể thao đơn giản",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "601364",
            "name": "Dép xăng đan & Dép tông",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "601366",
            "name": "Lót giày & Lót gót chân",
            "l1_id": "601352",
            "l2_id": "900744",
            "slug": ""
        },
        {
            "id": "601369",
            "name": "Giày oxford",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "601374",
            "name": "Dép lê",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "601376",
            "name": "Bốt",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "601387",
            "name": "Giày oxford",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "601396",
            "name": "Cao gót",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "601405",
            "name": "Dép lê",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "601409",
            "name": "Bốt",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "601417",
            "name": "Túi đựng máy tính xách tay",
            "l1_id": "824584",
            "l2_id": "902792",
            "slug": ""
        },
        {
            "id": "601419",
            "name": "Túi du lịch",
            "l1_id": "824584",
            "l2_id": "902664",
            "slug": ""
        },
        {
            "id": "601429",
            "name": "Túi đeo chéo & Túi đeo vai",
            "l1_id": "824584",
            "l2_id": "902536",
            "slug": ""
        },
        {
            "id": "601430",
            "name": "Ví",
            "l1_id": "824584",
            "l2_id": "902536",
            "slug": ""
        },
        {
            "id": "601431",
            "name": "Túi ví cầm tay",
            "l1_id": "824584",
            "l2_id": "902536",
            "slug": ""
        },
        {
            "id": "601439",
            "name": "Túi đeo chéo & Túi đeo vai",
            "l1_id": "824584",
            "l2_id": "902408",
            "slug": ""
        },
        {
            "id": "601440",
            "name": "Túi đựng đồ trang điểm",
            "l1_id": "824584",
            "l2_id": "902792",
            "slug": ""
        },
        {
            "id": "601441",
            "name": "Ví",
            "l1_id": "824584",
            "l2_id": "902408",
            "slug": ""
        },
        {
            "id": "601444",
            "name": "Túi ví cầm tay & Túi ví đeo cổ tay",
            "l1_id": "824584",
            "l2_id": "902408",
            "slug": ""
        },
        {
            "id": "601445",
            "name": "Túi xách",
            "l1_id": "824584",
            "l2_id": "902408",
            "slug": ""
        },
        {
            "id": "601446",
            "name": "Ba lô",
            "l1_id": "824584",
            "l2_id": "902792",
            "slug": ""
        },
        {
            "id": "601449",
            "name": "Phụ kiện hành lý",
            "l1_id": "824584",
            "l2_id": "902664",
            "slug": ""
        },
        {
            "id": "601454",
            "name": "Mặt nạ tay & chân",
            "l1_id": "601450",
            "l2_id": "849032",
            "slug": ""
        },
        {
            "id": "601456",
            "name": "Sản phẩm kiểm soát mùi hôi chân",
            "l1_id": "601450",
            "l2_id": "849032",
            "slug": ""
        },
        {
            "id": "601461",
            "name": "Dung dịch ngâm rửa kính áp tròng & Thuốc nhỏ mắt",
            "l1_id": "601450",
            "l2_id": "849544",
            "slug": ""
        },
        {
            "id": "601462",
            "name": "Kính áp tròng",
            "l1_id": "601450",
            "l2_id": "849544",
            "slug": ""
        },
        {
            "id": "601463",
            "name": "Bộ dụng cụ cho kính áp tròng",
            "l1_id": "601450",
            "l2_id": "849544",
            "slug": ""
        },
        {
            "id": "601469",
            "name": "Dầu gội & Dầu xả",
            "l1_id": "601450",
            "l2_id": "848904",
            "slug": ""
        },
        {
            "id": "601475",
            "name": "Kem bôi âm đạo",
            "l1_id": "601450",
            "l2_id": "849800",
            "slug": ""
        },
        {
            "id": "601476",
            "name": "Dung dịch vệ sinh phụ nữ",
            "l1_id": "601450",
            "l2_id": "849800",
            "slug": ""
        },
        {
            "id": "601477",
            "name": "Khăn vệ sinh",
            "l1_id": "601450",
            "l2_id": "849800",
            "slug": ""
        },
        {
            "id": "601480",
            "name": "Sữa dường, kem & tẩy tế bào chết cho tay",
            "l1_id": "601450",
            "l2_id": "849032",
            "slug": ""
        },
        {
            "id": "601490",
            "name": "Bộ dụng cụ chăm sóc cơ thể",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "601492",
            "name": "Kem & Sữa dưỡng thể",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "601493",
            "name": "Sữa tắm & Xà phòng",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "601494",
            "name": "Phấn rôm",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "601495",
            "name": "Kem, wax và nước cạo râu",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "601498",
            "name": "Khử mùi",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "601506",
            "name": "Tẩy tế bào chết & Lột da cơ thể",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "601508",
            "name": "Nước rửa tay",
            "l1_id": "601450",
            "l2_id": "849032",
            "slug": ""
        },
        {
            "id": "601511",
            "name": "Chăm sóc ngực",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "601513",
            "name": "Keo bọt & Gel",
            "l1_id": "601450",
            "l2_id": "848904",
            "slug": ""
        },
        {
            "id": "601516",
            "name": "Thuốc nhuộm tóc",
            "l1_id": "601450",
            "l2_id": "848904",
            "slug": ""
        },
        {
            "id": "601520",
            "name": "Đồ tắm & Chăm sóc cơ thể",
            "l1_id": "601450",
            "l2_id": "849288",
            "slug": ""
        },
        {
            "id": "601529",
            "name": "Bộ trang điểm",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601534",
            "name": "Son môi & Son bóng",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601537",
            "name": "Dụng cụ trang điểm",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601550",
            "name": "Kem BB và Kem CC",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601552",
            "name": "Xịt cố định lớp trang điểm",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601554",
            "name": "Kem che khuyết điểm & Phấn nền",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601555",
            "name": "Phấn tạo khối & Phấn bắt sáng",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601556",
            "name": "Lớp nền trang điểm và Kem lót",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601558",
            "name": "Phấn",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601560",
            "name": "Phấn má",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601565",
            "name": "Đồ trang điểm",
            "l1_id": "601450",
            "l2_id": "849288",
            "slug": ""
        },
        {
            "id": "601582",
            "name": "Trang điểm cơ thể",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601585",
            "name": "Mascara",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601586",
            "name": "Chì & Gel kẻ lông mày",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601587",
            "name": "Kẻ mắt & Kẻ viền môi",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601588",
            "name": "Phấn mắt",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601591",
            "name": "Vẽ móng & Sơn móng tay",
            "l1_id": "601450",
            "l2_id": "1086856",
            "slug": ""
        },
        {
            "id": "601595",
            "name": "Sản phẩm đặc trị môi",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601602",
            "name": "Kem chống nắng cho da mặt",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601608",
            "name": "Toner",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601609",
            "name": "Sữa rửa mặt",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601610",
            "name": "Kem massage mặt",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601611",
            "name": "Bộ dụng cụ chăm sóc da",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601613",
            "name": "Tẩy tế bào chết & Lột da mặt",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601615",
            "name": "Kem dưỡng ẩm & Xịt thơm",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601616",
            "name": "Mặt nạ",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601618",
            "name": "Tẩy trang",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "601619",
            "name": "Serum & Tinh chất",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601627",
            "name": "Chăm sóc da",
            "l1_id": "601450",
            "l2_id": "849288",
            "slug": ""
        },
        {
            "id": "601644",
            "name": "Bọt cạo râu & Nước hoa sau khi cạo râu",
            "l1_id": "601450",
            "l2_id": "849288",
            "slug": ""
        },
        {
            "id": "601646",
            "name": "Sản phẩm đặc trị mắt",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601653",
            "name": "Sản phẩm đặc trị mũi",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601660",
            "name": "Thiết bị massage",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "601664",
            "name": "Thiết bị Làm đẹp cơ thể",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "601669",
            "name": "Dao cạo lông mày điện",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "601672",
            "name": "Thiết bị làm đẹp da mặt",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "601677",
            "name": "Phụ kiện",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "601681",
            "name": "Chăm sóc tóc",
            "l1_id": "601450",
            "l2_id": "849288",
            "slug": ""
        },
        {
            "id": "601686",
            "name": "Kem định hình cơ thể",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "601690",
            "name": "Làm trắng răng",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "601692",
            "name": "Bộ dụng cụ chăm sóc răng miệng",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "601693",
            "name": "Xịt miệng",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "601694",
            "name": "Nước súc miệng",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "601696",
            "name": "Kem đánh răng",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "601697",
            "name": "Bàn chải đánh răng",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "601698",
            "name": "Chỉ & tăm nha khoa",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "601733",
            "name": "Dụng cụ chăm sóc da",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "601737",
            "name": "Mặt nạ ngủ",
            "l1_id": "601450",
            "l2_id": "849544",
            "slug": ""
        },
        {
            "id": "601756",
            "name": "Máy tính xách tay",
            "l1_id": "601755",
            "l2_id": "824840",
            "slug": ""
        },
        {
            "id": "601760",
            "name": "Bàn phím & Chuột",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "601783",
            "name": "Màn hình",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "601836",
            "name": "Máy tính để bàn",
            "l1_id": "601755",
            "l2_id": "824840",
            "slug": ""
        },
        {
            "id": "601893",
            "name": "Phụ kiện camera",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "601925",
            "name": "Ốp, miếng bảo vệ màn hình & miếng dán",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "601927",
            "name": "Pin điện thoại",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "601936",
            "name": "Dây đeo & Móc treo điện thoại",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "601937",
            "name": "Cáp, Bộ sạc & Bộ điều hợp",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "601990",
            "name": "Tai nghe trong & Tai nghe",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "602029",
            "name": "Loa",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "602080",
            "name": "Phụ kiện đeo",
            "l1_id": "601739",
            "l2_id": "909576",
            "slug": ""
        },
        {
            "id": "602083",
            "name": "Đồng hồ thông minh",
            "l1_id": "601739",
            "l2_id": "909576",
            "slug": ""
        },
        {
            "id": "602097",
            "name": "Điện thoại di động",
            "l1_id": "601739",
            "l2_id": "995976",
            "slug": ""
        },
        {
            "id": "602165",
            "name": "Thuốc cho cá cảnh",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "602296",
            "name": "Chăm sóc da cho trẻ",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "602301",
            "name": "Phục sức cho bé",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "602317",
            "name": "Chăm sóc tóc & Tắm gội toàn thân",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "602532",
            "name": "Khóa & Dây đai an toàn",
            "l1_id": "602284",
            "l2_id": "878600",
            "slug": ""
        },
        {
            "id": "602533",
            "name": "Bảo vệ chống điện giật",
            "l1_id": "602284",
            "l2_id": "878600",
            "slug": ""
        },
        {
            "id": "602534",
            "name": "Bảo vệ cạnh & góc",
            "l1_id": "602284",
            "l2_id": "878600",
            "slug": ""
        },
        {
            "id": "602536",
            "name": "Tấm chắn & rào giường",
            "l1_id": "602284",
            "l2_id": "878600",
            "slug": ""
        },
        {
            "id": "602538",
            "name": "Thiết bị giám sát",
            "l1_id": "602284",
            "l2_id": "878600",
            "slug": ""
        },
        {
            "id": "602608",
            "name": "Máy cắt tóc cho trẻ",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "602622",
            "name": "Máy sấy tóc cho trẻ",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "602672",
            "name": "Nước rửa tay",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "602673",
            "name": "Bột giặt",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "602676",
            "name": "Chăm sóc mũi & răng miệng",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "602678",
            "name": "Máy tiệt trùng quần áo trẻ em",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "602707",
            "name": "Máy xay chế biến thực phẩm",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "602734",
            "name": "Đệm & Bộ chăn ga gối đệm",
            "l1_id": "602284",
            "l2_id": "878216",
            "slug": ""
        },
        {
            "id": "602760",
            "name": "Xích đu nhún cho bé",
            "l1_id": "602284",
            "l2_id": "878216",
            "slug": ""
        },
        {
            "id": "602761",
            "name": "Cũi & Giường",
            "l1_id": "602284",
            "l2_id": "878216",
            "slug": ""
        },
        {
            "id": "602787",
            "name": "Giày",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "603002",
            "name": "Đồ để viết & sửa",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "603041",
            "name": "Bóng đá",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603042",
            "name": "Áo thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "603065",
            "name": "Cầu lông",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603084",
            "name": "Yoga & Pilates",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "603131",
            "name": "Lướt ván",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "603171",
            "name": "Giày khiêu vũ",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603221",
            "name": "Tennis",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603247",
            "name": "Điền kinh trong sân vận động",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "603288",
            "name": "Quyền anh & Võ thuật",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "603295",
            "name": "Judo",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "603301",
            "name": "Đấu vật",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "603317",
            "name": "Taekwondo",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "603331",
            "name": "Bida & Snooker",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603353",
            "name": "Vòng lắc eo",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "603355",
            "name": "Tập bụng",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "603358",
            "name": "Bóng tập gym",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "603366",
            "name": "Máy đếm bước chân",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "603375",
            "name": "Dây nhảy",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "603396",
            "name": "Bóng bàn",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603437",
            "name": "Bóng chuyền",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603477",
            "name": "Cưỡi ngựa",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "603493",
            "name": "Trượt ván",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "603524",
            "name": "Bóng rổ",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603573",
            "name": "Golf",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603579",
            "name": "Giày chơi gôn",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603625",
            "name": "Khúc côn cầu trên băng",
            "l1_id": "603014",
            "l2_id": "835208",
            "slug": ""
        },
        {
            "id": "603641",
            "name": "Bóng quần",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603646",
            "name": "Bowling",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603652",
            "name": "Bóng chày",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "603654",
            "name": "Mũ thể thao & ngoài trời",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "603682",
            "name": "Túi thể thao",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "603704",
            "name": "Quần jogger",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "603705",
            "name": "Bộ quần áo thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "603706",
            "name": "Đồ mặc ngoài theo phong cách thể thao & áo hoodie",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "603729",
            "name": "Áo lót thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "603744",
            "name": "Giày bóng chày",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603748",
            "name": "Giày bóng rổ",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603750",
            "name": "Giày bóng chuyền",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603751",
            "name": "Giày chạy bộ",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603755",
            "name": "Giày chơi tennis",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603758",
            "name": "Giày cầu lông",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603760",
            "name": "Giày bóng đá",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603818",
            "name": "Câu cá",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "603835",
            "name": "Dao & Bộ dụng cụ sinh tồn",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "603856",
            "name": "Giày đi bộ đường dài",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "603872",
            "name": "Đồ bảo hộ",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "603917",
            "name": "Đồ dùng bếp cắm trại",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "603952",
            "name": "Võng",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "603970",
            "name": "Đèn cắm trại",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "604054",
            "name": "Túi ngủ & Bộ chăn ga gối đệm",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "604059",
            "name": "La bàn",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "604065",
            "name": "Ống nhòm & Kính thiên văn",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "604390",
            "name": "Phụ kiện búp bê",
            "l1_id": "604206",
            "l2_id": "859656",
            "slug": ""
        },
        {
            "id": "604468",
            "name": "Sofa",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "604497",
            "name": "Kệ & Giá đỡ",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "605201",
            "name": "Đồ trang trí",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "605213",
            "name": "Hộc đựng đồ",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "605215",
            "name": "Khung đỡ & Giá đỡ",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "605219",
            "name": "Thảm chống trượt",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "605242",
            "name": "Tấm che nắng",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "605251",
            "name": "Đồng hồ nam",
            "l1_id": "605248",
            "l2_id": "905480",
            "slug": ""
        },
        {
            "id": "605254",
            "name": "Đồng hồ nữ",
            "l1_id": "605248",
            "l2_id": "905480",
            "slug": ""
        },
        {
            "id": "605257",
            "name": "Đồng hồ cặp đôi",
            "l1_id": "605248",
            "l2_id": "905480",
            "slug": ""
        },
        {
            "id": "605268",
            "name": "Hoa tai",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "605271",
            "name": "Băng đô",
            "l1_id": "605248",
            "l2_id": "905864",
            "slug": ""
        },
        {
            "id": "605272",
            "name": "Lắc chân",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "605273",
            "name": "Nhẫn",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "605274",
            "name": "Vòng tay & Lắc tay",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "605280",
            "name": "Dây chuyền",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "605281",
            "name": "Kẹp & Trâm cài cổ áo",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "605289",
            "name": "Bộ phụ kiện thời trang",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "605302",
            "name": "Gọng & Kính",
            "l1_id": "605248",
            "l2_id": "905352",
            "slug": ""
        },
        {
            "id": "605304",
            "name": "Kính râm",
            "l1_id": "605248",
            "l2_id": "905352",
            "slug": ""
        },
        {
            "id": "700553",
            "name": "Bánh quy, Bánh cookies & Bánh xốp",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "700554",
            "name": "Khoai tây giòn & thức ăn nhanh có nhân",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "700612",
            "name": "Cà phê",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "700644",
            "name": "Mì gói",
            "l1_id": "700437",
            "l2_id": "914952",
            "slug": ""
        },
        {
            "id": "700648",
            "name": "Thực phẩm chăm sóc sắc đẹp",
            "l1_id": "700645",
            "l2_id": "700646",
            "slug": ""
        },
        {
            "id": "700649",
            "name": "Thực phẩm bổ sung thể hình",
            "l1_id": "700645",
            "l2_id": "700646",
            "slug": ""
        },
        {
            "id": "700650",
            "name": "Thực phẩm bổ sung sức khỏe",
            "l1_id": "700645",
            "l2_id": "700646",
            "slug": ""
        },
        {
            "id": "700652",
            "name": "Mền",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "700653",
            "name": "Gối nằm & gối tựa",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "700654",
            "name": "Hoa, cây & trái cây trang trí",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "700655",
            "name": "Bình hoa & đồ lót bình",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "700661",
            "name": "Gối đệm, nệm & áo gối",
            "l1_id": "600154",
            "l2_id": "809992",
            "slug": ""
        },
        {
            "id": "700662",
            "name": "Vá nhiệt",
            "l1_id": "601450",
            "l2_id": "981128",
            "slug": ""
        },
        {
            "id": "700665",
            "name": "Chắn bụi",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "700684",
            "name": "Thảm ô tô",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "700694",
            "name": "Bộ đồ liền thân & Áo liền quần",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "700699",
            "name": "Gấu bông",
            "l1_id": "604206",
            "l2_id": "859656",
            "slug": ""
        },
        {
            "id": "700700",
            "name": "Đồ chơi xe & Mô hình",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "700704",
            "name": "Bình sữa & phụ kiện cho bé",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "700705",
            "name": "Xe đẩy",
            "l1_id": "602284",
            "l2_id": "877576",
            "slug": ""
        },
        {
            "id": "700706",
            "name": "Ghế trẻ em",
            "l1_id": "602284",
            "l2_id": "878216",
            "slug": ""
        },
        {
            "id": "700707",
            "name": "Đồ dùng trẻ em",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "700710",
            "name": "Đồ lót cho mẹ",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "700718",
            "name": "Quần áo & Phụ kiện thai sản",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "700740",
            "name": "Giải trí trong nhà",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "700768",
            "name": "Sô-cô-la & đồ ăn nhẹ có sô-cô-la",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "700779",
            "name": "Trượt tuyết",
            "l1_id": "603014",
            "l2_id": "835208",
            "slug": ""
        },
        {
            "id": "700781",
            "name": "Lặn",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "700782",
            "name": "Lều & Phụ kiện",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "700785",
            "name": "Dụng cụ xoa bóp thủ công",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "700789",
            "name": "Dụng cụ tạo kiểu không nhiệt",
            "l1_id": "601450",
            "l2_id": "848904",
            "slug": ""
        },
        {
            "id": "700790",
            "name": "Dụng cụ làm móng tay & chân",
            "l1_id": "601450",
            "l2_id": "1086856",
            "slug": ""
        },
        {
            "id": "700791",
            "name": "Dao cạo",
            "l1_id": "601450",
            "l2_id": "849288",
            "slug": ""
        },
        {
            "id": "700795",
            "name": "Phụ kiện đồng hồ",
            "l1_id": "605248",
            "l2_id": "905480",
            "slug": ""
        },
        {
            "id": "801040",
            "name": "Chổi điện cọ rửa",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "801168",
            "name": "Máy tán đinh cầm tay",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "801296",
            "name": "Dụng cụ điện chuyên môn",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "801424",
            "name": "Dụng cụ làm vườn chuyên môn",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "801552",
            "name": "Máy dò kim loại",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "801680",
            "name": "Cưa xích",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "801808",
            "name": "Dụng cụ cạo tuyết",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "801936",
            "name": "Phụ kiện dụng cụ làm vườn",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "802064",
            "name": "Dụng cụ đa năng & phụ kiện",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "802192",
            "name": "Dụng cụ cắt",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "802320",
            "name": "Dụng cụ xây dựng và ốp lát",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "802440",
            "name": "Trang phục & Phụ kiện",
            "l1_id": "802184",
            "l2_id": "802312",
            "slug": ""
        },
        {
            "id": "802448",
            "name": "Dụng cụ cầm tay chuyên môn",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "802568",
            "name": "Đồ lót",
            "l1_id": "802184",
            "l2_id": "802312",
            "slug": ""
        },
        {
            "id": "802576",
            "name": "Máy sưởi hiên & bếp sưởi",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "802696",
            "name": "Đồ ngủ",
            "l1_id": "802184",
            "l2_id": "802312",
            "slug": ""
        },
        {
            "id": "802704",
            "name": "Hồ bơi, bể tắm nước nóng & vật tư",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "802832",
            "name": "Dụng cụ dán giấy dán tường",
            "l1_id": "604968",
            "l2_id": "872968",
            "slug": ""
        },
        {
            "id": "802952",
            "name": "Áo",
            "l1_id": "802184",
            "l2_id": "802312",
            "slug": ""
        },
        {
            "id": "802960",
            "name": "Vườn giường",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "803080",
            "name": "Áo choàng & Áo khoác",
            "l1_id": "802184",
            "l2_id": "802312",
            "slug": ""
        },
        {
            "id": "803088",
            "name": "Nhà kính & khay ươm hạt giống",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "803208",
            "name": "Quần",
            "l1_id": "802184",
            "l2_id": "802312",
            "slug": ""
        },
        {
            "id": "803216",
            "name": "Áo liền quần rộng",
            "l1_id": "601152",
            "l2_id": "843016",
            "slug": ""
        },
        {
            "id": "803336",
            "name": "Bộ vét & Bộ",
            "l1_id": "802184",
            "l2_id": "802312",
            "slug": ""
        },
        {
            "id": "803344",
            "name": "Áo liền quần rộng",
            "l1_id": "824328",
            "l2_id": "840584",
            "slug": ""
        },
        {
            "id": "803464",
            "name": "Tất",
            "l1_id": "802184",
            "l2_id": "802312",
            "slug": ""
        },
        {
            "id": "803472",
            "name": "Đồng phục đi học",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "803600",
            "name": "Đồng phục đi học",
            "l1_id": "802184",
            "l2_id": "802312",
            "slug": ""
        },
        {
            "id": "803720",
            "name": "Trang phục & Phụ kiện",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "803728",
            "name": "Kính thông minh",
            "l1_id": "601739",
            "l2_id": "909576",
            "slug": ""
        },
        {
            "id": "803848",
            "name": "Đồ lót",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "803856",
            "name": "Máy hút chân không USB",
            "l1_id": "601739",
            "l2_id": "978952",
            "slug": ""
        },
        {
            "id": "803976",
            "name": "Đồ ngủ",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "803984",
            "name": "Niqab",
            "l1_id": "601303",
            "l2_id": "601304",
            "slug": ""
        },
        {
            "id": "804104",
            "name": "Đồ bơi trẻ em",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "804232",
            "name": "Áo",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "804240",
            "name": "Lót bảo vệ mũi giày & bốt",
            "l1_id": "601352",
            "l2_id": "900744",
            "slug": ""
        },
        {
            "id": "804360",
            "name": "Áo choàng & Áo khoác",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "804368",
            "name": "Phụ kiện trang trí giày",
            "l1_id": "601352",
            "l2_id": "900744",
            "slug": ""
        },
        {
            "id": "804488",
            "name": "Quần",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "804496",
            "name": "Giày lao động & bảo hộ",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "804616",
            "name": "Bộ vét & Bộ",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "804624",
            "name": "Giày lao động & bảo hộ",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "804744",
            "name": "Váy",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "804752",
            "name": "Giày Mary Jane",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "804872",
            "name": "Chân váy",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "804880",
            "name": "Vòng chụp cổ & hỗ trợ cho thú cứng",
            "l1_id": "602118",
            "l2_id": "818184",
            "slug": ""
        },
        {
            "id": "805000",
            "name": "Tất",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "805008",
            "name": "Chăm sóc chim",
            "l1_id": "602118",
            "l2_id": "821896",
            "slug": ""
        },
        {
            "id": "805136",
            "name": "Hệ thống huấn luyện vệ sinh cho thú cưng",
            "l1_id": "602118",
            "l2_id": "815624",
            "slug": ""
        },
        {
            "id": "805256",
            "name": "Bốt",
            "l1_id": "802184",
            "l2_id": "805128",
            "slug": ""
        },
        {
            "id": "805264",
            "name": "Đồ dùng chăm sóc sức khỏe cho gia cầm",
            "l1_id": "602118",
            "l2_id": "1001992",
            "slug": ""
        },
        {
            "id": "805384",
            "name": "Dép xăng đan & Dép tông",
            "l1_id": "802184",
            "l2_id": "805128",
            "slug": ""
        },
        {
            "id": "805392",
            "name": "Đồ dùng chăm sóc sức khỏe cho loài bò sát",
            "l1_id": "602118",
            "l2_id": "821000",
            "slug": ""
        },
        {
            "id": "805512",
            "name": "Giày thể thao",
            "l1_id": "802184",
            "l2_id": "805128",
            "slug": ""
        },
        {
            "id": "805640",
            "name": "Dép lê",
            "l1_id": "802184",
            "l2_id": "805128",
            "slug": ""
        },
        {
            "id": "805648",
            "name": "Bình xịt & kem mãn kinh",
            "l1_id": "601450",
            "l2_id": "849800",
            "slug": ""
        },
        {
            "id": "805768",
            "name": "Giày đi dự tiệc",
            "l1_id": "802184",
            "l2_id": "805128",
            "slug": ""
        },
        {
            "id": "805776",
            "name": "Ngủ & ngáy",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "805896",
            "name": "Giày đế bằng",
            "l1_id": "802184",
            "l2_id": "805128",
            "slug": ""
        },
        {
            "id": "805904",
            "name": "Thiết bị & phụ kiện hỗ trợ hô hấp",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "806152",
            "name": "Bốt",
            "l1_id": "802184",
            "l2_id": "806024",
            "slug": ""
        },
        {
            "id": "806160",
            "name": "Sản phẩm chống rụng tóc",
            "l1_id": "601450",
            "l2_id": "848904",
            "slug": ""
        },
        {
            "id": "806280",
            "name": "Dép xăng đan & Dép tông",
            "l1_id": "802184",
            "l2_id": "806024",
            "slug": ""
        },
        {
            "id": "806408",
            "name": "Giày thể thao",
            "l1_id": "802184",
            "l2_id": "806024",
            "slug": ""
        },
        {
            "id": "806416",
            "name": "Bìa mô hình",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "806536",
            "name": "Dép lê",
            "l1_id": "802184",
            "l2_id": "806024",
            "slug": ""
        },
        {
            "id": "806544",
            "name": "Hộp nhạc",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "806664",
            "name": "Giày đế bằng",
            "l1_id": "802184",
            "l2_id": "806024",
            "slug": ""
        },
        {
            "id": "806672",
            "name": "Thiết bị làm rượu vang",
            "l1_id": "600024",
            "l2_id": "858888",
            "slug": ""
        },
        {
            "id": "806800",
            "name": "Vách ngăn phòng",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "806920",
            "name": "Túi xách & Hành lý",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "806928",
            "name": "Bàn trang điểm",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "807048",
            "name": "Mũ trẻ em",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "807056",
            "name": "Cây treo đồ",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "807176",
            "name": "Kính mắt",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "807184",
            "name": "Phụ kiện giường",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "807304",
            "name": "Phụ kiện cài đầu",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "807312",
            "name": "Pizza & focaccia",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "807432",
            "name": "Găng tay",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "807440",
            "name": "Sandwich & món cuốn",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "807560",
            "name": "Thắt lưng",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "807568",
            "name": "Súp & hầm",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "807688",
            "name": "Khăn quàng cổ & Khăn choàng trẻ em",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "807696",
            "name": "Pasta & nước xốt",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "807816",
            "name": "Đồng hồ",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "807824",
            "name": "Deli",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "807944",
            "name": "Phục sức & phụ kiện trẻ em",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "807952",
            "name": "Món ăn chế biến sẵn",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "808072",
            "name": "Chụp tai",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "808336",
            "name": "Bộ biến tần điện",
            "l1_id": "604968",
            "l2_id": "808208",
            "slug": ""
        },
        {
            "id": "808464",
            "name": "Pin mặt trời",
            "l1_id": "604968",
            "l2_id": "808208",
            "slug": ""
        },
        {
            "id": "808584",
            "name": "Bộ chăn ga gối đệm",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "808592",
            "name": "Bộ điều khiển & phụ kiện sạc",
            "l1_id": "604968",
            "l2_id": "808208",
            "slug": ""
        },
        {
            "id": "808720",
            "name": "Hệ thống năng lượng mặt trời",
            "l1_id": "604968",
            "l2_id": "808208",
            "slug": ""
        },
        {
            "id": "808840",
            "name": "Chăn lông vịt ",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "808848",
            "name": "Tua bin gió",
            "l1_id": "604968",
            "l2_id": "808208",
            "slug": ""
        },
        {
            "id": "809096",
            "name": "Khăn trải giường",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "809352",
            "name": "Váy giường",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "809480",
            "name": "Nệm & tấm lót nệm, tấm phủ nệm & tấm bảo vệ nệm",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "809608",
            "name": "Vỏ chăn",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "809736",
            "name": "Màn chống muỗi",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "809864",
            "name": "Bộ chăn ga gối đệm cho trẻ em",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "810256",
            "name": "Thiết bị tập thể hình dưới nước",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "810376",
            "name": "Bọc ghế sofa",
            "l1_id": "600154",
            "l2_id": "809992",
            "slug": ""
        },
        {
            "id": "810384",
            "name": "Thiết bị tập luyện sự nhanh nhạy",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "810504",
            "name": "Rèm cửa",
            "l1_id": "600154",
            "l2_id": "809992",
            "slug": ""
        },
        {
            "id": "810512",
            "name": "Ống tay thể thao & hỗ trợ",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "810640",
            "name": "Trang bị cho huấn luyện viên & trọng tài",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "810768",
            "name": "Danh hiệu, huy chương & giải thưởng",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "810888",
            "name": "Khăn tắm",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "810896",
            "name": "Phấn viết tay",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "811024",
            "name": "Đồ lặn",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "811144",
            "name": "Dệt & Vải",
            "l1_id": "600154",
            "l2_id": "811016",
            "slug": ""
        },
        {
            "id": "811152",
            "name": "Áo mưa thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "811280",
            "name": "Đồ lót giữ ấm thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "811408",
            "name": "Giày lội nước",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "811528",
            "name": "Phụ kiện may vá & Kim chỉ",
            "l1_id": "600154",
            "l2_id": "811016",
            "slug": ""
        },
        {
            "id": "811536",
            "name": "Tóc giả lót ren phần T bằng tóc thật",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "811656",
            "name": "Máy may",
            "l1_id": "600154",
            "l2_id": "811016",
            "slug": ""
        },
        {
            "id": "811664",
            "name": "Tóc giả lót ren toàn bộ đầu bằng tóc thật",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "811784",
            "name": "Chỉ",
            "l1_id": "600154",
            "l2_id": "811016",
            "slug": ""
        },
        {
            "id": "811792",
            "name": "Tóc giả lót ren 360 bằng tóc thật",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "811912",
            "name": "Kim",
            "l1_id": "600154",
            "l2_id": "811016",
            "slug": ""
        },
        {
            "id": "811920",
            "name": "Tóc mái giả lót ren bằng tóc thật",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "812048",
            "name": "Đuôi tóc giả lót ren bằng tóc thật",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "812176",
            "name": "Tóc giả lót ren tùy chỉnh bằng tóc thật",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "812296",
            "name": "Thức ăn cho chó",
            "l1_id": "602118",
            "l2_id": "812168",
            "slug": ""
        },
        {
            "id": "812304",
            "name": "Tóc giả lót ren toàn bộ đầu bằng tóc thật làm bằng máy",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "812424",
            "name": "Món ăn cho chó",
            "l1_id": "602118",
            "l2_id": "812168",
            "slug": ""
        },
        {
            "id": "812432",
            "name": "Tóc nối bằng tóc thật & kẹp",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "812552",
            "name": "Thức ăn cho mèo",
            "l1_id": "602118",
            "l2_id": "812168",
            "slug": ""
        },
        {
            "id": "812560",
            "name": "Tóc giả lót ren bện tổng hợp",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "812680",
            "name": "Món ăn cho mèo",
            "l1_id": "602118",
            "l2_id": "812168",
            "slug": ""
        },
        {
            "id": "812688",
            "name": "Tóc giả toàn bộ đầu làm bằng máy",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "812816",
            "name": "Tóc mái giả lót ren tổng hợp",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "812936",
            "name": "Giường, Sofa & Thảm",
            "l1_id": "602118",
            "l2_id": "812808",
            "slug": ""
        },
        {
            "id": "812944",
            "name": "Tóc nối tổng hợp & kẹp",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "813064",
            "name": "Chuồng",
            "l1_id": "602118",
            "l2_id": "812808",
            "slug": ""
        },
        {
            "id": "813072",
            "name": "Tasbih",
            "l1_id": "601303",
            "l2_id": "601348",
            "slug": ""
        },
        {
            "id": "813192",
            "name": "Lồng & Giỏ",
            "l1_id": "602118",
            "l2_id": "812808",
            "slug": ""
        },
        {
            "id": "813200",
            "name": "Thân, khung & cản trước",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "813320",
            "name": "Cột & Bảng cào móng",
            "l1_id": "602118",
            "l2_id": "812808",
            "slug": ""
        },
        {
            "id": "813328",
            "name": "Cần gạt nước & rửa kính",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "813448",
            "name": "Võng cho mèo",
            "l1_id": "602118",
            "l2_id": "812808",
            "slug": ""
        },
        {
            "id": "813456",
            "name": "Khói & khí thải",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "813576",
            "name": "Cửa cho mèo & chó",
            "l1_id": "602118",
            "l2_id": "812808",
            "slug": ""
        },
        {
            "id": "813584",
            "name": "Bánh xe, vành bánh xe & phụ kiện",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "813704",
            "name": "Cầu thang & Cầu nâng",
            "l1_id": "602118",
            "l2_id": "812808",
            "slug": ""
        },
        {
            "id": "813712",
            "name": "Lốp & phụ kiện",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "813832",
            "name": "Rào chắn",
            "l1_id": "602118",
            "l2_id": "812808",
            "slug": ""
        },
        {
            "id": "813840",
            "name": "Chống va đập, thanh giằng và nhíp xe",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "813968",
            "name": "Bộ tản nhiệt, làm mát động cơ & điều hòa",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "814088",
            "name": "Áo choàng",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "814096",
            "name": "Hệ thống truyền động, hộp số & khớp ly hợp",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "814216",
            "name": "Áo sơ mi",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "814224",
            "name": "Vòng bi & vòng đệm",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "814344",
            "name": "Áo len & Áo hoodie",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "814352",
            "name": "Bộ phận động cơ",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "814472",
            "name": "Áo phao",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "814480",
            "name": "Hệ thống phanh",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "814600",
            "name": "Váy",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "814608",
            "name": "Đai, ống mềm & puli",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "814728",
            "name": "Áo mưa",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "814736",
            "name": "Hệ thống nhiên liệu",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "814856",
            "name": "Bốt & Đồ bảo vệ móng",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "814864",
            "name": "Đánh lửa",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "814984",
            "name": "Phụ kiện cổ",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "814992",
            "name": "Pin & phụ kiện",
            "l1_id": "605196",
            "l2_id": "809488",
            "slug": ""
        },
        {
            "id": "815112",
            "name": "Kính mắt",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "815120",
            "name": "Ghế & áo ghế",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "815240",
            "name": "Phụ kiện cài đầu",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "815248",
            "name": "Khóa & an ninh",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "815368",
            "name": "Mũ",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "815376",
            "name": "Hộp & thùng",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "815496",
            "name": "Trang phục",
            "l1_id": "602118",
            "l2_id": "813960",
            "slug": ""
        },
        {
            "id": "815504",
            "name": "Thảm",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "815632",
            "name": "Mũ bảo hiểm",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "815752",
            "name": "Khay & Hộp đựng cát vệ sinh",
            "l1_id": "602118",
            "l2_id": "815624",
            "slug": ""
        },
        {
            "id": "815760",
            "name": "Bu-gi",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "815880",
            "name": "Tã, Miếng lót & Khay",
            "l1_id": "602118",
            "l2_id": "815624",
            "slug": ""
        },
        {
            "id": "815888",
            "name": "Khói & khí thải",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "816008",
            "name": "Túi đựng phân & Xẻng xúc",
            "l1_id": "602118",
            "l2_id": "815624",
            "slug": ""
        },
        {
            "id": "816016",
            "name": "Đèn",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "816136",
            "name": "Xịt khử mùi & tẩy vết bẩn",
            "l1_id": "602118",
            "l2_id": "815624",
            "slug": ""
        },
        {
            "id": "816144",
            "name": "Hệ thống truyền động, hộp số & khớp ly hợp",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "816264",
            "name": "Máy dò nước tiểu",
            "l1_id": "602118",
            "l2_id": "815624",
            "slug": ""
        },
        {
            "id": "816272",
            "name": "Chống va đập, thanh giằng và nhíp xe",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "816400",
            "name": "Lốp & phụ kiện",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "816520",
            "name": "Dầu gội & Dầu xả",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "816528",
            "name": "Hệ thống phanh",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "816648",
            "name": "Phụ kiện tắm",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "816656",
            "name": "Pin & phụ kiện",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "816776",
            "name": "Lược & Bàn chải",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "816784",
            "name": "Bánh xe, vành bánh xe & phụ kiện",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "816904",
            "name": "Máy sấy lông",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "816912",
            "name": "Cáp & ống",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "817032",
            "name": "Khăn lau",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "817040",
            "name": "Kèn & phụ kiện",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "817160",
            "name": "Kéo cắt tỉa lông",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "817168",
            "name": "Gương & phụ kiện",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "817288",
            "name": "Tông đơ cắt tỉa lông",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "817296",
            "name": "Tấm chắn nước bắn",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "817416",
            "name": "Gel & Bột tạo kiểu",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "817424",
            "name": "Kính râm",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "817544",
            "name": "Chăm sóc móng",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "817552",
            "name": "Quần bloomer, tã lót & đồ lót",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "817672",
            "name": "Chăm sóc tai",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "817680",
            "name": "Áo hoodie & hoạt động",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "817800",
            "name": "Chăm sóc răng miệng",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "817808",
            "name": "Áo len",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "817928",
            "name": "Chăm sóc mắt",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "817936",
            "name": "Gương",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "818056",
            "name": "Sản phẩm tẩy lông",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "818064",
            "name": "Bóng",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "818192",
            "name": "Ghế ô tô & đồ chơi xe đẩy",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "818312",
            "name": "Sản phẩm đặc trị bọ chét & bọ ve",
            "l1_id": "602118",
            "l2_id": "818184",
            "slug": ""
        },
        {
            "id": "818440",
            "name": "Thuốc",
            "l1_id": "602118",
            "l2_id": "818184",
            "slug": ""
        },
        {
            "id": "818448",
            "name": "Máy leo núi trong nhà & thiết bị sân chơi trẻ em",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "818568",
            "name": "Vitamin & Thực phẩm bổ sung",
            "l1_id": "602118",
            "l2_id": "818184",
            "slug": ""
        },
        {
            "id": "818576",
            "name": "Đồ chơi điện & điều khiển từ xa cho bé",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "818704",
            "name": "Đồ hàng cho bé",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "818824",
            "name": "Vòng cổ, Đai ngực & Dây dắt",
            "l1_id": "602118",
            "l2_id": "818696",
            "slug": ""
        },
        {
            "id": "818832",
            "name": "Khay đựng thuốc",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "818952",
            "name": "Đào tạo & Hỗ trợ Hành vi",
            "l1_id": "602118",
            "l2_id": "818696",
            "slug": ""
        },
        {
            "id": "819080",
            "name": "Đồ chơi cho chó",
            "l1_id": "602118",
            "l2_id": "818696",
            "slug": ""
        },
        {
            "id": "819088",
            "name": "Cân",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "819208",
            "name": "Đồ chơi cho mèo",
            "l1_id": "602118",
            "l2_id": "818696",
            "slug": ""
        },
        {
            "id": "819336",
            "name": "Đồ cho ăn",
            "l1_id": "602118",
            "l2_id": "818696",
            "slug": ""
        },
        {
            "id": "819344",
            "name": "Đồ uống",
            "l1_id": "602284",
            "l2_id": "879496",
            "slug": ""
        },
        {
            "id": "819464",
            "name": "Túi & dụng cụ vận chuyển",
            "l1_id": "602118",
            "l2_id": "818696",
            "slug": ""
        },
        {
            "id": "819472",
            "name": "Thiết bị đo chiều cao & chu vi",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "819592",
            "name": "Vật kỷ niệm",
            "l1_id": "602118",
            "l2_id": "818696",
            "slug": ""
        },
        {
            "id": "819600",
            "name": "Thiết bị theo dõi trước khi sinh",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "819720",
            "name": "Camera & Màn hình",
            "l1_id": "602118",
            "l2_id": "818696",
            "slug": ""
        },
        {
            "id": "819728",
            "name": "Que rửa bình sữa cho bé",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "819976",
            "name": "Đồ trang trí",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "819984",
            "name": "Thực phẩm dinh dưỡng & đồ uống protein",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "820104",
            "name": "Đèn",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "820112",
            "name": "Sản phẩm thay thế cà phê",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "820232",
            "name": "Bể cá & Bể chứa",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "820240",
            "name": "Bánh mì vụn & nhân nhồi",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "820360",
            "name": "Kiểm soát nhiệt độ",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "820368",
            "name": "Bánh ăn vặt và bánh bột nhào",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "820488",
            "name": "Xử lý nước",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "820496",
            "name": "Sữa UHT",
            "l1_id": "700437",
            "l2_id": "809744",
            "slug": ""
        },
        {
            "id": "820616",
            "name": "Bơm & Bộ lọc",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "820624",
            "name": "Sữa bột",
            "l1_id": "700437",
            "l2_id": "809744",
            "slug": ""
        },
        {
            "id": "820744",
            "name": "Công cụ làm sạch",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "820752",
            "name": "Sữa đặc",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "820872",
            "name": "Dụng cụ cho ăn",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "820880",
            "name": "Trò chơi trên sàn nhà",
            "l1_id": "604206",
            "l2_id": "860168",
            "slug": ""
        },
        {
            "id": "821128",
            "name": "Đồ trang trí",
            "l1_id": "602118",
            "l2_id": "821000",
            "slug": ""
        },
        {
            "id": "821136",
            "name": "Trò chơi xếp chồng",
            "l1_id": "604206",
            "l2_id": "860168",
            "slug": ""
        },
        {
            "id": "821256",
            "name": "Nhà kiếng & vật tư vận chuyển",
            "l1_id": "602118",
            "l2_id": "821000",
            "slug": ""
        },
        {
            "id": "821264",
            "name": "Thảm nhảy",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "821384",
            "name": "Công cụ làm sạch",
            "l1_id": "602118",
            "l2_id": "821000",
            "slug": ""
        },
        {
            "id": "821392",
            "name": "Máy hát karaoke",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "821512",
            "name": "Điều khiển nhiệt độ",
            "l1_id": "602118",
            "l2_id": "821000",
            "slug": ""
        },
        {
            "id": "821520",
            "name": "Bộ đàm",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "821640",
            "name": "Đèn",
            "l1_id": "602118",
            "l2_id": "821000",
            "slug": ""
        },
        {
            "id": "821648",
            "name": "Thú cưng điện tử",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "821768",
            "name": "Dụng cụ cho ăn",
            "l1_id": "602118",
            "l2_id": "821000",
            "slug": ""
        },
        {
            "id": "821776",
            "name": "Thám tử & điệp viên",
            "l1_id": "604206",
            "l2_id": "859784",
            "slug": ""
        },
        {
            "id": "821904",
            "name": "Thẻ flash",
            "l1_id": "604206",
            "l2_id": "859784",
            "slug": ""
        },
        {
            "id": "822024",
            "name": "Lồng & Phụ kiện",
            "l1_id": "602118",
            "l2_id": "821896",
            "slug": ""
        },
        {
            "id": "822032",
            "name": "Búp bê & rạp múa rối bước",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "822152",
            "name": "Dụng cụ chải lông",
            "l1_id": "602118",
            "l2_id": "821896",
            "slug": ""
        },
        {
            "id": "822160",
            "name": "Đồ chơi khám phá thiên nhiên",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "822280",
            "name": "Đồ chơi",
            "l1_id": "602118",
            "l2_id": "821896",
            "slug": ""
        },
        {
            "id": "822288",
            "name": "Trò chơi bắn bi",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "822408",
            "name": "Xích đu & Cành để đậu",
            "l1_id": "602118",
            "l2_id": "821896",
            "slug": ""
        },
        {
            "id": "822416",
            "name": "Bong bóng",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "822536",
            "name": "Dụng cụ hỗ trợ đào tạo",
            "l1_id": "602118",
            "l2_id": "821896",
            "slug": ""
        },
        {
            "id": "822664",
            "name": "Dụng cụ cho ăn",
            "l1_id": "602118",
            "l2_id": "821896",
            "slug": ""
        },
        {
            "id": "822672",
            "name": "Đồ chơi rèn luyện ngón tay",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "822800",
            "name": "Đồ gốm màu đỏ",
            "l1_id": "951432",
            "l2_id": "809872",
            "slug": ""
        },
        {
            "id": "822920",
            "name": "Chuồng & Môi trường sống",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "822928",
            "name": "Kiến diêu",
            "l1_id": "951432",
            "l2_id": "809872",
            "slug": ""
        },
        {
            "id": "823048",
            "name": "Đồ chơi",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "823056",
            "name": "Đồ gốm",
            "l1_id": "951432",
            "l2_id": "809872",
            "slug": ""
        },
        {
            "id": "823176",
            "name": "Vòng cổ, Đai ngực & Dây dắt",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "823184",
            "name": "Thư pháp Trung Quốc",
            "l1_id": "951432",
            "l2_id": "809872",
            "slug": ""
        },
        {
            "id": "823304",
            "name": "Đồ cho ăn",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "823432",
            "name": "Bánh xe chạy",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "823560",
            "name": "Dụng cụ chải lông",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "823688",
            "name": "Lồng vận chuyển",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "823696",
            "name": "Khắc dấu",
            "l1_id": "951432",
            "l2_id": "809872",
            "slug": ""
        },
        {
            "id": "823816",
            "name": "Vật tư về sức khỏe",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "823824",
            "name": "Lư hương & nhang",
            "l1_id": "951432",
            "l2_id": "809872",
            "slug": ""
        },
        {
            "id": "823944",
            "name": "Xịt khử mùi & tẩy vết bẩn",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "823952",
            "name": "Thẻ bài phi thể thao",
            "l1_id": "951432",
            "l2_id": "810000",
            "slug": ""
        },
        {
            "id": "824080",
            "name": "Phụ kiện thẻ bài",
            "l1_id": "951432",
            "l2_id": "810000",
            "slug": ""
        },
        {
            "id": "824208",
            "name": "Cây cạo lưỡi",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "824336",
            "name": "Bộ dụng cụ sơn móng tay",
            "l1_id": "601450",
            "l2_id": "1086856",
            "slug": ""
        },
        {
            "id": "824464",
            "name": "Máy tẩy lông",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "824592",
            "name": "Hình xăm tạm thời",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "824720",
            "name": "Mí mắt giả & keo",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "824848",
            "name": "Chất diệt khuẩn",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "825224",
            "name": "Máy tính bảng",
            "l1_id": "601739",
            "l2_id": "995976",
            "slug": ""
        },
        {
            "id": "825480",
            "name": "Quạt & Tản nhiệt",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "825608",
            "name": "Bộ xử lý",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "825736",
            "name": "Bo mạch chủ",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "825864",
            "name": "Card đồ họa",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "825992",
            "name": "Bộ cấp nguồn",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "826120",
            "name": "RAM",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "826248",
            "name": "UPS & Ổn áp",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "826376",
            "name": "Vỏ máy tính",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "826504",
            "name": "Ổ quang",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "826632",
            "name": "Card âm thanh",
            "l1_id": "601755",
            "l2_id": "825352",
            "slug": ""
        },
        {
            "id": "827016",
            "name": "Hub USB & Đầu đọc thẻ",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "827144",
            "name": "Webcam",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "827272",
            "name": "Vỏ & Ốp máy tính xách tay",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "827400",
            "name": "Tấm làm mát",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "827528",
            "name": "Giá đỡ & Khay để máy tính xách tay",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "827656",
            "name": "Bàn phím & Vỏ bàn di chuột",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "827784",
            "name": "Pin máy tính xách tay",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "827912",
            "name": "Bộ sạc & Bộ điều hợp máy tính xách tay",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "828040",
            "name": "Tấm lót chuột",
            "l1_id": "601755",
            "l2_id": "826760",
            "slug": ""
        },
        {
            "id": "828296",
            "name": "Ổ cứng",
            "l1_id": "601755",
            "l2_id": "828168",
            "slug": ""
        },
        {
            "id": "828424",
            "name": "SSD",
            "l1_id": "601755",
            "l2_id": "828168",
            "slug": ""
        },
        {
            "id": "828552",
            "name": "Bộ nhớ đính kèm mạng (NAS)",
            "l1_id": "601755",
            "l2_id": "828168",
            "slug": ""
        },
        {
            "id": "828680",
            "name": "Ổ flash & Cáp OTG",
            "l1_id": "601755",
            "l2_id": "828168",
            "slug": ""
        },
        {
            "id": "828808",
            "name": "Hộp đựng đĩa cứng & Trạm lưu trữ",
            "l1_id": "601755",
            "l2_id": "828168",
            "slug": ""
        },
        {
            "id": "828936",
            "name": "Đĩa nhỏ gọn",
            "l1_id": "601755",
            "l2_id": "828168",
            "slug": ""
        },
        {
            "id": "829320",
            "name": "Modem & Bộ định tuyến không dây",
            "l1_id": "601755",
            "l2_id": "829192",
            "slug": ""
        },
        {
            "id": "829448",
            "name": "Bộ lặp",
            "l1_id": "601755",
            "l2_id": "829192",
            "slug": ""
        },
        {
            "id": "829576",
            "name": "Bộ điều hợp không dây & Card mạng",
            "l1_id": "601755",
            "l2_id": "829192",
            "slug": ""
        },
        {
            "id": "829704",
            "name": "Bộ điều hợp Powerline",
            "l1_id": "601755",
            "l2_id": "829192",
            "slug": ""
        },
        {
            "id": "829832",
            "name": "Công tắc mạng & PoE",
            "l1_id": "601755",
            "l2_id": "829192",
            "slug": ""
        },
        {
            "id": "829960",
            "name": "Cáp & Đầu nối mạng",
            "l1_id": "601755",
            "l2_id": "829192",
            "slug": ""
        },
        {
            "id": "830088",
            "name": "Công tắc KVM",
            "l1_id": "601755",
            "l2_id": "829192",
            "slug": ""
        },
        {
            "id": "830216",
            "name": "Máy chủ in",
            "l1_id": "601755",
            "l2_id": "829192",
            "slug": ""
        },
        {
            "id": "830472",
            "name": "Máy đánh chữ",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "830600",
            "name": "Thiết bị chấm công & Kiểm soát truy cập",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "830728",
            "name": "Máy hủy giấy",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "830856",
            "name": "Máy đếm tiền",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "830984",
            "name": "Máy in & Máy scan",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "831240",
            "name": "Vật tư dùng trong văn phòng",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "831368",
            "name": "Dụng cụ cắt dùng trong văn phòng",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "831624",
            "name": "Đồ dùng học tập & giáo dục",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "831752",
            "name": "Họa cụ",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "831880",
            "name": "Sổ tay & Giấy",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "832008",
            "name": "Phong bì & Đồ bưu điện",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "832136",
            "name": "Quà tặng & Giấy gói",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "832264",
            "name": "Vật tư dùng cho công việc kế toán",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "832392",
            "name": "Phụ kiện & Giá để đồ bàn học",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "835720",
            "name": "Áo thun thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "835848",
            "name": "Áo khoác thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "835976",
            "name": "Quần short thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "836104",
            "name": "Quần legging thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "836232",
            "name": "Trang phục thể thao trẻ em",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "836360",
            "name": "Giày tập luyện & Giày tập gym",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "836488",
            "name": "Giày trượt băng & trượt patin",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "836616",
            "name": "Giày thể thao trẻ em",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "836744",
            "name": "Kính mắt thể thao",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "836872",
            "name": "Tất thể thao",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "837000",
            "name": "Đồng hồ bấm giờ và đồng hồ hẹn giờ",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "837128",
            "name": "Bóng bầu dục Rugby",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "837256",
            "name": "Bơi lội",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "837384",
            "name": "Chèo thuyền",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "837512",
            "name": "Trượt ván trên tuyết",
            "l1_id": "603014",
            "l2_id": "835208",
            "slug": ""
        },
        {
            "id": "837640",
            "name": "Tập tạ",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "837768",
            "name": "Máy tập thể hình",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "837896",
            "name": "Xà đơn",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "838024",
            "name": "Gậy đi bộ đường dài",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "838152",
            "name": "Thảm & Giỏ dã ngoại",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "838280",
            "name": "Nội thất cắm trại",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "838408",
            "name": "Đạp xe",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "838792",
            "name": "Mukena",
            "l1_id": "601303",
            "l2_id": "601348",
            "slug": ""
        },
        {
            "id": "839048",
            "name": "Bộ quần áo thể thao Hồi giáo",
            "l1_id": "601303",
            "l2_id": "838920",
            "slug": ""
        },
        {
            "id": "839304",
            "name": "Bộ áo sơ mi trắng",
            "l1_id": "601303",
            "l2_id": "839176",
            "slug": ""
        },
        {
            "id": "839432",
            "name": "Gói Umroh",
            "l1_id": "601303",
            "l2_id": "839176",
            "slug": ""
        },
        {
            "id": "839560",
            "name": "Y phục Ihram",
            "l1_id": "601303",
            "l2_id": "839176",
            "slug": ""
        },
        {
            "id": "839688",
            "name": "Áo khoác cầu nguyện",
            "l1_id": "601303",
            "l2_id": "601348",
            "slug": ""
        },
        {
            "id": "840840",
            "name": "Quần yếm",
            "l1_id": "824328",
            "l2_id": "840712",
            "slug": ""
        },
        {
            "id": "840968",
            "name": "Trang phục & Phụ kiện",
            "l1_id": "824328",
            "l2_id": "840328",
            "slug": ""
        },
        {
            "id": "841096",
            "name": "Quần áo bảo hộ lao động & Đồng phục",
            "l1_id": "824328",
            "l2_id": "840328",
            "slug": ""
        },
        {
            "id": "841104",
            "name": "Đồ trang trí đầu ăng-ten",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "841224",
            "name": "Trang phục truyền thống",
            "l1_id": "824328",
            "l2_id": "840328",
            "slug": ""
        },
        {
            "id": "841232",
            "name": "Tấm chắn bùn & chắn nước bắn",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "841352",
            "name": "Đồ lót",
            "l1_id": "824328",
            "l2_id": "840456",
            "slug": ""
        },
        {
            "id": "841360",
            "name": "Kèn & phụ kiện",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "841480",
            "name": "Áo gi lê",
            "l1_id": "824328",
            "l2_id": "840456",
            "slug": ""
        },
        {
            "id": "841488",
            "name": "Viền crôm & phụ kiện",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "841608",
            "name": "Đồ giữ ấm mặc bên trong",
            "l1_id": "824328",
            "l2_id": "840456",
            "slug": ""
        },
        {
            "id": "841616",
            "name": "Kệ",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "841736",
            "name": "Tất",
            "l1_id": "824328",
            "l2_id": "840456",
            "slug": ""
        },
        {
            "id": "841864",
            "name": "Bộ ngủ",
            "l1_id": "824328",
            "l2_id": "840584",
            "slug": ""
        },
        {
            "id": "841872",
            "name": "Pin khô",
            "l1_id": "601739",
            "l2_id": "978952",
            "slug": ""
        },
        {
            "id": "841992",
            "name": "Áo choàng tắm & Áo choàng",
            "l1_id": "824328",
            "l2_id": "840584",
            "slug": ""
        },
        {
            "id": "842120",
            "name": "Áo ngủ",
            "l1_id": "824328",
            "l2_id": "840584",
            "slug": ""
        },
        {
            "id": "842256",
            "name": "Nước hoa ô tô",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "842384",
            "name": "Dụng cụ thoát hiểm",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "842512",
            "name": "Camera hành trình",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "842768",
            "name": "Camera kỹ thuật số",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "842896",
            "name": "Hộp đựng bình sữa & giá phơi",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "843024",
            "name": "Sữa công thức sơ sinh",
            "l1_id": "602284",
            "l2_id": "879496",
            "slug": ""
        },
        {
            "id": "843152",
            "name": "Thẻ ảnh",
            "l1_id": "951432",
            "l2_id": "953352",
            "slug": ""
        },
        {
            "id": "843280",
            "name": "Xịt khử mùi & nước hoa",
            "l1_id": "602118",
            "l2_id": "816392",
            "slug": ""
        },
        {
            "id": "843400",
            "name": "Áo vest, Tank Top & Áo quây",
            "l1_id": "601152",
            "l2_id": "842248",
            "slug": ""
        },
        {
            "id": "843408",
            "name": "Thảm thể thao",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "843528",
            "name": "Bodysuit",
            "l1_id": "601152",
            "l2_id": "842248",
            "slug": ""
        },
        {
            "id": "843536",
            "name": "Soda & nước có ga",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "843656",
            "name": "Trang phục & Phụ kiện",
            "l1_id": "601152",
            "l2_id": "842632",
            "slug": ""
        },
        {
            "id": "843784",
            "name": "Quần áo bảo hộ lao động & Đồng phục",
            "l1_id": "601152",
            "l2_id": "842632",
            "slug": ""
        },
        {
            "id": "843912",
            "name": "Trang phục truyền thống",
            "l1_id": "601152",
            "l2_id": "842632",
            "slug": ""
        },
        {
            "id": "844040",
            "name": "Bộ đồ cho cặp đôi",
            "l1_id": "601152",
            "l2_id": "842760",
            "slug": ""
        },
        {
            "id": "844296",
            "name": "Bộ đồ cho gia đình",
            "l1_id": "601152",
            "l2_id": "842760",
            "slug": ""
        },
        {
            "id": "844552",
            "name": "Quần bó",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "844680",
            "name": "Đồ giữ ấm mặc bên trong",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "844936",
            "name": "Phụ kiện áo lót",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "845192",
            "name": "Đồ nội y",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "845448",
            "name": "Tất",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "845576",
            "name": "Áo lót không gọng",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "845704",
            "name": "Bộ đồ lót",
            "l1_id": "601152",
            "l2_id": "842888",
            "slug": ""
        },
        {
            "id": "845832",
            "name": "Bộ ngủ",
            "l1_id": "601152",
            "l2_id": "843016",
            "slug": ""
        },
        {
            "id": "845960",
            "name": "Áo choàng tắm & Áo choàng",
            "l1_id": "601152",
            "l2_id": "843016",
            "slug": ""
        },
        {
            "id": "846088",
            "name": "Váy ngủ",
            "l1_id": "601152",
            "l2_id": "843016",
            "slug": ""
        },
        {
            "id": "846096",
            "name": "Tóc nối & phụ kiện tóc giả",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "846216",
            "name": "Batik",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "846344",
            "name": "Ren",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "846352",
            "name": "Quần bơi ngắn và quần bơi",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "846472",
            "name": "Cotton",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "846480",
            "name": "Quần lót",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "846600",
            "name": "Len",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "846608",
            "name": "Đồ bơi dài tay",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "846728",
            "name": "Nhung, Lụa & Satin",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "846736",
            "name": "Đồ bơi thi đấu",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "846856",
            "name": "Da",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "846864",
            "name": "Bikini",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "846984",
            "name": "Polyester",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "846992",
            "name": "Tankini",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "847112",
            "name": "Denim",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "847120",
            "name": "Đầm bơi",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "847240",
            "name": "Canvas",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "847248",
            "name": "Đồ bơi một mảnh",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "847368",
            "name": "Kain Pasang",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "847376",
            "name": "Áo choàng đi biển",
            "l1_id": "603014",
            "l2_id": "846224",
            "slug": ""
        },
        {
            "id": "847496",
            "name": "Songket",
            "l1_id": "605248",
            "l2_id": "843144",
            "slug": ""
        },
        {
            "id": "847624",
            "name": "Lò nướng bánh",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "847632",
            "name": "Xe máy hộp số sàn",
            "l1_id": "605196",
            "l2_id": "847504",
            "slug": ""
        },
        {
            "id": "847752",
            "name": "Nồi cơm & Nồi áp suất",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "847760",
            "name": "Xe máy hộp số sàn tự động",
            "l1_id": "605196",
            "l2_id": "847504",
            "slug": ""
        },
        {
            "id": "847880",
            "name": "Máy hấp điện",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "847888",
            "name": "Xe máy điện",
            "l1_id": "605196",
            "l2_id": "847504",
            "slug": ""
        },
        {
            "id": "848008",
            "name": "Máy hút chân không",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "848016",
            "name": "Ghế mát-xa",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "848136",
            "name": "Lò vi sóng",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "848264",
            "name": "Lò nướng để bàn",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "848392",
            "name": "Ấm điện",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "848520",
            "name": "Máy ép trái cây & Máy xay sinh tố",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "849928",
            "name": "Máy điều hoà",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "850056",
            "name": "Bình nước nóng",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "850184",
            "name": "Máy giặt & Máy sấy",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "850312",
            "name": "Tủ lạnh & Tủ đông",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "850440",
            "name": "Máy hút mùi",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "850568",
            "name": "Lò nướng, Bếp gas & Bếp từ",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "850696",
            "name": "Máy rửa bát",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "850704",
            "name": "Đệm ngồi",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "850824",
            "name": "Bộ phận & phụ kiện của thiết bị lớn",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "850832",
            "name": "Bọc vô lăng ô tô",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "850952",
            "name": "Thiết bị giặt là",
            "l1_id": "600942",
            "l2_id": "845320",
            "slug": ""
        },
        {
            "id": "850960",
            "name": "Khóa vô lăng & thiết bị an toàn",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "851080",
            "name": "Thiết bị vệ sinh",
            "l1_id": "600942",
            "l2_id": "845320",
            "slug": ""
        },
        {
            "id": "851088",
            "name": "Bàn đạp & cần số",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "851208",
            "name": "Bếp lò thương mại",
            "l1_id": "600942",
            "l2_id": "845320",
            "slug": ""
        },
        {
            "id": "851216",
            "name": "Đồ trang trí",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "851336",
            "name": "Quạt & Thiết bị hút",
            "l1_id": "600942",
            "l2_id": "845320",
            "slug": ""
        },
        {
            "id": "851344",
            "name": "Bộ phát FM & Bluetooth",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "851464",
            "name": "Thiết bị làm lạnh",
            "l1_id": "600942",
            "l2_id": "845320",
            "slug": ""
        },
        {
            "id": "851472",
            "name": "Bộ sạc USB",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "851592",
            "name": "Thiết bị chế biến thực phẩm",
            "l1_id": "600942",
            "l2_id": "845320",
            "slug": ""
        },
        {
            "id": "851600",
            "name": "Dầu",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "851720",
            "name": "Bộ phận của thiết bị thương mại",
            "l1_id": "600942",
            "l2_id": "845320",
            "slug": ""
        },
        {
            "id": "851728",
            "name": "Tấm chắn & tấm che cửa sổ bên",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "851984",
            "name": "Bàn chải & lược chải tóc",
            "l1_id": "601450",
            "l2_id": "848904",
            "slug": ""
        },
        {
            "id": "852112",
            "name": "Phụ kiện & trang trí móng tay",
            "l1_id": "601450",
            "l2_id": "1086856",
            "slug": ""
        },
        {
            "id": "852368",
            "name": "Thiết bị truyền phát đa phương tiện",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "852496",
            "name": "Máy điều hòa không khí di động",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "852624",
            "name": "Tủ lạnh đồ uống",
            "l1_id": "600942",
            "l2_id": "845064",
            "slug": ""
        },
        {
            "id": "852744",
            "name": "Túi",
            "l1_id": "600001",
            "l2_id": "851848",
            "slug": ""
        },
        {
            "id": "852752",
            "name": "Gương trang điểm",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "852872",
            "name": "Hộp để & Giá",
            "l1_id": "600001",
            "l2_id": "851848",
            "slug": ""
        },
        {
            "id": "852880",
            "name": "Cọ trang điểm",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "853000",
            "name": "Chai & Lọ",
            "l1_id": "600001",
            "l2_id": "851848",
            "slug": ""
        },
        {
            "id": "853008",
            "name": "Mút & bông mút tán trang điểm",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "853128",
            "name": "Móc & Giá xoay",
            "l1_id": "600001",
            "l2_id": "851848",
            "slug": ""
        },
        {
            "id": "853136",
            "name": "Tăm bông",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "853256",
            "name": "Đồ trong phòng tắm",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "853264",
            "name": "Bông thoa phấn",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "853384",
            "name": "Bộ phòng tắm",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "853392",
            "name": "Kẹp bấm mi",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "853512",
            "name": "Phụ kiện nhà tắm",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "853640",
            "name": "Thảm phòng tắm",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "853648",
            "name": "Yến sào",
            "l1_id": "700437",
            "l2_id": "914952",
            "slug": ""
        },
        {
            "id": "853768",
            "name": "Mũ tắm",
            "l1_id": "600001",
            "l2_id": "851976",
            "slug": ""
        },
        {
            "id": "853776",
            "name": "Cây cảnh",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "853896",
            "name": "Thảm trang trí",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "853904",
            "name": "Sơn tường",
            "l1_id": "604968",
            "l2_id": "872968",
            "slug": ""
        },
        {
            "id": "854024",
            "name": "Đồ treo trang trí",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "854032",
            "name": "Máy tỉa lông mũi & lông tai",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "854152",
            "name": "Nến",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "854280",
            "name": "Khay giữ nến",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "854288",
            "name": "Áo khoác và áo mưa",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "854408",
            "name": "Gương",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "854416",
            "name": "Tấm chắn bùn & chắn nước bắn",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "854536",
            "name": "Nam châm tủ lạnh",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "854544",
            "name": "Tay nắm & tay cầm",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "854664",
            "name": "Đồ trang trí phong thủy",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "854672",
            "name": "Máy tính để bàn đa năng",
            "l1_id": "601755",
            "l2_id": "824840",
            "slug": ""
        },
        {
            "id": "854792",
            "name": "Đồ trang trí theo tôn giáo",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "854800",
            "name": "Áo len cổ lọ & quần áo trong",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "854920",
            "name": "Xô",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "854928",
            "name": "Quần ống rộng giả váy",
            "l1_id": "601152",
            "l2_id": "842376",
            "slug": ""
        },
        {
            "id": "855048",
            "name": "Bọt biển & miếng cọ rửa",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "855056",
            "name": "Sữa công thức cho phụ nữ mang thai và cho con bú",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "855176",
            "name": "Bóng & Đĩa giặt",
            "l1_id": "600001",
            "l2_id": "852360",
            "slug": ""
        },
        {
            "id": "855304",
            "name": "Ván giặt",
            "l1_id": "600001",
            "l2_id": "852360",
            "slug": ""
        },
        {
            "id": "855432",
            "name": "Phông nền & Biểu ngữ",
            "l1_id": "600001",
            "l2_id": "852488",
            "slug": ""
        },
        {
            "id": "855560",
            "name": "Thẻ",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "855568",
            "name": "Dinh dưỡng & thực phẩm chức năng",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "855688",
            "name": "Bộ đồ ăn dùng một lần",
            "l1_id": "600001",
            "l2_id": "852488",
            "slug": ""
        },
        {
            "id": "855696",
            "name": "Nước hoa nam",
            "l1_id": "601450",
            "l2_id": "856208",
            "slug": ""
        },
        {
            "id": "855816",
            "name": "Nón tiệc, mặt nạ & phụ kiện",
            "l1_id": "600001",
            "l2_id": "852488",
            "slug": ""
        },
        {
            "id": "855824",
            "name": "Nước hoa unisex",
            "l1_id": "601450",
            "l2_id": "856208",
            "slug": ""
        },
        {
            "id": "855944",
            "name": "Túi & Quà tặng dự tiệc",
            "l1_id": "600001",
            "l2_id": "852488",
            "slug": ""
        },
        {
            "id": "855952",
            "name": "Nước hoa nữ",
            "l1_id": "601450",
            "l2_id": "856208",
            "slug": ""
        },
        {
            "id": "856072",
            "name": "Đồ trang trí bánh",
            "l1_id": "600001",
            "l2_id": "852488",
            "slug": ""
        },
        {
            "id": "856080",
            "name": "Bộ nước hoa",
            "l1_id": "601450",
            "l2_id": "856208",
            "slug": ""
        },
        {
            "id": "856200",
            "name": "Túi chườm nóng",
            "l1_id": "600001",
            "l2_id": "852616",
            "slug": ""
        },
        {
            "id": "856328",
            "name": "Túi chườm nước đá",
            "l1_id": "601450",
            "l2_id": "981128",
            "slug": ""
        },
        {
            "id": "856456",
            "name": "Phụ kiện bật lửa",
            "l1_id": "600001",
            "l2_id": "852616",
            "slug": ""
        },
        {
            "id": "859536",
            "name": "Phụ kiện túi",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "859664",
            "name": "Túi đeo chéo",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "859792",
            "name": "Túi đeo vai",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "859920",
            "name": "Túi chuyên dụng & công nghệ",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "860048",
            "name": "Hàng hóa bằng da nhỏ",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "860424",
            "name": "Túi lọc cà phê",
            "l1_id": "600024",
            "l2_id": "858504",
            "slug": ""
        },
        {
            "id": "860680",
            "name": "Máy xay cà phê bằng tay",
            "l1_id": "600024",
            "l2_id": "858504",
            "slug": ""
        },
        {
            "id": "860808",
            "name": "Ấm trà",
            "l1_id": "600024",
            "l2_id": "858504",
            "slug": ""
        },
        {
            "id": "860936",
            "name": "Bộ thưởng trà",
            "l1_id": "600024",
            "l2_id": "858504",
            "slug": ""
        },
        {
            "id": "861064",
            "name": "Dụng cụ pha trà",
            "l1_id": "600024",
            "l2_id": "858504",
            "slug": ""
        },
        {
            "id": "861192",
            "name": "Dụng cụ mài dao",
            "l1_id": "600024",
            "l2_id": "858632",
            "slug": ""
        },
        {
            "id": "861320",
            "name": "Hộp để dao",
            "l1_id": "600024",
            "l2_id": "858632",
            "slug": ""
        },
        {
            "id": "861448",
            "name": "Búp bê",
            "l1_id": "604206",
            "l2_id": "859656",
            "slug": ""
        },
        {
            "id": "861576",
            "name": "Kéo nhà bếp",
            "l1_id": "600024",
            "l2_id": "858632",
            "slug": ""
        },
        {
            "id": "861704",
            "name": "Nhà búp bê & Bộ đồ chơi",
            "l1_id": "604206",
            "l2_id": "859656",
            "slug": ""
        },
        {
            "id": "861832",
            "name": "Bộ hộp đựng dao",
            "l1_id": "600024",
            "l2_id": "858632",
            "slug": ""
        },
        {
            "id": "862216",
            "name": "Vỉ nướng",
            "l1_id": "600024",
            "l2_id": "858760",
            "slug": ""
        },
        {
            "id": "862344",
            "name": "Đồ dùng nướng thịt",
            "l1_id": "600024",
            "l2_id": "858760",
            "slug": ""
        },
        {
            "id": "862472",
            "name": "Vẽ & Làm thủ công",
            "l1_id": "604206",
            "l2_id": "859784",
            "slug": ""
        },
        {
            "id": "862600",
            "name": "Bộ dụng cụ làm bánh",
            "l1_id": "600024",
            "l2_id": "859016",
            "slug": ""
        },
        {
            "id": "862728",
            "name": "Đồ chơi toán học",
            "l1_id": "604206",
            "l2_id": "859784",
            "slug": ""
        },
        {
            "id": "862856",
            "name": "Găng tay bắc bếp",
            "l1_id": "600024",
            "l2_id": "859016",
            "slug": ""
        },
        {
            "id": "862864",
            "name": "Điện thoại di động",
            "l1_id": "856720",
            "l2_id": "857744",
            "slug": ""
        },
        {
            "id": "862984",
            "name": "Đồ chơi khoa học & công nghệ",
            "l1_id": "604206",
            "l2_id": "859784",
            "slug": ""
        },
        {
            "id": "862992",
            "name": "Máy tính bảng",
            "l1_id": "856720",
            "l2_id": "857744",
            "slug": ""
        },
        {
            "id": "863112",
            "name": "Khay nướng bánh",
            "l1_id": "600024",
            "l2_id": "859016",
            "slug": ""
        },
        {
            "id": "863240",
            "name": "Đồ chơi xếp hình",
            "l1_id": "604206",
            "l2_id": "859784",
            "slug": ""
        },
        {
            "id": "863248",
            "name": "Cân nhà bếp",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "863368",
            "name": "Dụng cụ trang trí",
            "l1_id": "600024",
            "l2_id": "859016",
            "slug": ""
        },
        {
            "id": "863624",
            "name": "Bộ dụng cụ nấu ăn",
            "l1_id": "600024",
            "l2_id": "859144",
            "slug": ""
        },
        {
            "id": "863752",
            "name": "Đồ chơi âm nhạc",
            "l1_id": "604206",
            "l2_id": "859784",
            "slug": ""
        },
        {
            "id": "863880",
            "name": "Xoong & Chảo",
            "l1_id": "600024",
            "l2_id": "859144",
            "slug": ""
        },
        {
            "id": "863888",
            "name": "Túi đeo chéo",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "864008",
            "name": "Nồi hấp",
            "l1_id": "600024",
            "l2_id": "859144",
            "slug": ""
        },
        {
            "id": "864016",
            "name": "Túi mini",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "864136",
            "name": "Máy tính bảng đồ chơi & Máy tính đồ chơi",
            "l1_id": "604206",
            "l2_id": "859784",
            "slug": ""
        },
        {
            "id": "864144",
            "name": "Túi tote",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "864264",
            "name": "Nồi áp suất",
            "l1_id": "600024",
            "l2_id": "859144",
            "slug": ""
        },
        {
            "id": "864272",
            "name": "Ví cầm tay & ví đeo cổ tay",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "864392",
            "name": "Đồ nấu ăn dùng một lần",
            "l1_id": "600024",
            "l2_id": "859144",
            "slug": ""
        },
        {
            "id": "864400",
            "name": "Ba lô",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "864520",
            "name": "Đồ chơi ngồi lái",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "864528",
            "name": "Túi đeo hông",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "864648",
            "name": "Khăn ăn",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "864776",
            "name": "Thiết bị sân chơi",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "864904",
            "name": "Ấm & Bình",
            "l1_id": "600024",
            "l2_id": "859400",
            "slug": ""
        },
        {
            "id": "865032",
            "name": "Chai rượu để trong túi bên hông",
            "l1_id": "600024",
            "l2_id": "859400",
            "slug": ""
        },
        {
            "id": "865160",
            "name": "Đồ chơi nhà, lều & đường hầm",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "865288",
            "name": "Đồ đựng gia vị",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "865416",
            "name": "Đồ chơi bể bơi, nước & cát",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "865544",
            "name": "Nhiệt kế nhà bếp",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "865672",
            "name": "Đồ chơi phun & Súng đồ chơi",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "865800",
            "name": "Dụng cụ làm pasta & pizza",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "865928",
            "name": "Dụng cụ làm kem",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "866056",
            "name": "Đồ chơi thể thao",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "866184",
            "name": "Dụng cụ chế biến các món trứng",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "866312",
            "name": "Đồ chơi bay",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "866440",
            "name": "Dụng cụ chế biến hải sản",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "866568",
            "name": "Dụng cụ chế biến đồ uống",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "866696",
            "name": "Diều & Vòng quay gió",
            "l1_id": "604206",
            "l2_id": "859912",
            "slug": ""
        },
        {
            "id": "866824",
            "name": "Dụng cụ mở",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "866952",
            "name": "Máy lấy dầu",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "867080",
            "name": "Máy bay & Trực thăng",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "867208",
            "name": "Dụng cụ nạo & Dụng cụ cắt",
            "l1_id": "600024",
            "l2_id": "859528",
            "slug": ""
        },
        {
            "id": "867336",
            "name": "Xe máy",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "867464",
            "name": "Thuyền & Tàu ngầm",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "867592",
            "name": "Ô tô, Xe buýt & Xe lửa",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "867720",
            "name": "Động vật",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "867848",
            "name": "Xe tăng",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "867976",
            "name": "Rô bốt",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "868104",
            "name": "Phụ kiện đồ chơi điện",
            "l1_id": "604206",
            "l2_id": "860040",
            "slug": ""
        },
        {
            "id": "868232",
            "name": "Hình khối ma thuật",
            "l1_id": "604206",
            "l2_id": "860168",
            "slug": ""
        },
        {
            "id": "868360",
            "name": "Ghép hình",
            "l1_id": "604206",
            "l2_id": "860168",
            "slug": ""
        },
        {
            "id": "868488",
            "name": "Xúc xắc",
            "l1_id": "604206",
            "l2_id": "860168",
            "slug": ""
        },
        {
            "id": "868616",
            "name": "Trò chơi trong nhà",
            "l1_id": "604206",
            "l2_id": "860168",
            "slug": ""
        },
        {
            "id": "868744",
            "name": "Trò chơi thẻ bài",
            "l1_id": "604206",
            "l2_id": "860168",
            "slug": ""
        },
        {
            "id": "868872",
            "name": "Thiết bị nhào lộn ma thuật",
            "l1_id": "604206",
            "l2_id": "860168",
            "slug": ""
        },
        {
            "id": "869000",
            "name": "Chơi đồ hàng",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "869128",
            "name": "Đồ chơi mới lạ",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "869256",
            "name": "Đồ chơi hành động & đồ chơi nhân vật",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "869512",
            "name": "Đồ chơi xây dựng",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "869640",
            "name": "Đồ chơi giảm căng thẳng",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "869768",
            "name": "Yo-yo",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "869896",
            "name": "Đồ chơi vỏ nhộng",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "870024",
            "name": "Con quay",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "870152",
            "name": "Bàn phím & Piano",
            "l1_id": "604206",
            "l2_id": "860552",
            "slug": ""
        },
        {
            "id": "870280",
            "name": "Nhạc cụ gõ",
            "l1_id": "604206",
            "l2_id": "860552",
            "slug": ""
        },
        {
            "id": "870408",
            "name": "Nhạc cụ thổi",
            "l1_id": "604206",
            "l2_id": "860552",
            "slug": ""
        },
        {
            "id": "870664",
            "name": "Đàn guitar & bộ dây",
            "l1_id": "604206",
            "l2_id": "860552",
            "slug": ""
        },
        {
            "id": "870792",
            "name": "Phụ kiện âm nhạc",
            "l1_id": "604206",
            "l2_id": "860552",
            "slug": ""
        },
        {
            "id": "870920",
            "name": "Đàn synthesizer điện tử",
            "l1_id": "604206",
            "l2_id": "860552",
            "slug": ""
        },
        {
            "id": "871440",
            "name": "Túi xách tay",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "871568",
            "name": "Túi bucket",
            "l1_id": "856720",
            "l2_id": "857232",
            "slug": ""
        },
        {
            "id": "873480",
            "name": "Sản phẩm đặc trị mụn",
            "l1_id": "601450",
            "l2_id": "848776",
            "slug": ""
        },
        {
            "id": "873608",
            "name": "Mặt nạ cơ thể",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "873736",
            "name": "Dầu xoa bóp & dầu dưỡng thể",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "873864",
            "name": "Kem chống nắng",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "873992",
            "name": "Dao cạo râu điện",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "874120",
            "name": "Bàn chải đánh răng điện",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "874248",
            "name": "Máy tăm nước",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "874376",
            "name": "Máy sấy tóc",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "874504",
            "name": "Máy uốn & ép tóc",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "874632",
            "name": "Máy xén & Tông đơ cắt tóc",
            "l1_id": "601450",
            "l2_id": "849416",
            "slug": ""
        },
        {
            "id": "874760",
            "name": "Kính đọc sách",
            "l1_id": "601450",
            "l2_id": "849544",
            "slug": ""
        },
        {
            "id": "874888",
            "name": "Thuốc nhỏ tai",
            "l1_id": "601450",
            "l2_id": "849544",
            "slug": ""
        },
        {
            "id": "875016",
            "name": "Sản phẩm lấy ráy tai",
            "l1_id": "601450",
            "l2_id": "849544",
            "slug": ""
        },
        {
            "id": "875144",
            "name": "Nút tai",
            "l1_id": "601450",
            "l2_id": "849544",
            "slug": ""
        },
        {
            "id": "875272",
            "name": "Chăm sóc răng miệng",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "875400",
            "name": "Vệ sinh mũi",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "875528",
            "name": "Băng vệ sinh",
            "l1_id": "601450",
            "l2_id": "849800",
            "slug": ""
        },
        {
            "id": "875656",
            "name": "Que thử kế hoạch hóa gia đình",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "875784",
            "name": "Cốc nguyệt san",
            "l1_id": "601450",
            "l2_id": "849800",
            "slug": ""
        },
        {
            "id": "875912",
            "name": "Bàn & Bàn làm việc",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "876040",
            "name": "Ghế tựa",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "876168",
            "name": "Ghế đẩu & ghế dài",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "876296",
            "name": "Giường",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "876424",
            "name": "Đệm",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "876680",
            "name": "Tủ",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "876936",
            "name": "Tủ quần áo",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "877064",
            "name": "Bộ nội thất trong nhà",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "877192",
            "name": "Giá đỡ TV & Bàn đầu giường",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "877448",
            "name": "Sofa ngoài trời",
            "l1_id": "604453",
            "l2_id": "871176",
            "slug": ""
        },
        {
            "id": "877704",
            "name": "Ghế tựa ngoài trời",
            "l1_id": "604453",
            "l2_id": "871176",
            "slug": ""
        },
        {
            "id": "877960",
            "name": "Ô ở sân trong",
            "l1_id": "604453",
            "l2_id": "871176",
            "slug": ""
        },
        {
            "id": "878088",
            "name": "Xích đu ở sân trong",
            "l1_id": "604453",
            "l2_id": "871176",
            "slug": ""
        },
        {
            "id": "878344",
            "name": "Bộ nội thất ngoài trời",
            "l1_id": "604453",
            "l2_id": "871176",
            "slug": ""
        },
        {
            "id": "878472",
            "name": "Bàn ngoài trời",
            "l1_id": "604453",
            "l2_id": "871176",
            "slug": ""
        },
        {
            "id": "878728",
            "name": "Ghế đẩu & Ghế dài",
            "l1_id": "604453",
            "l2_id": "871176",
            "slug": ""
        },
        {
            "id": "878856",
            "name": "Kệ ngoài trời",
            "l1_id": "604453",
            "l2_id": "871176",
            "slug": ""
        },
        {
            "id": "879240",
            "name": "Giường",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "879368",
            "name": "Sofa",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "879624",
            "name": "Ghế tựa",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "879752",
            "name": "Ghế đẩu & Ghế dài",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "879880",
            "name": "Tủ",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "880016",
            "name": "Máy làm soda",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "880136",
            "name": "Bộ nội thất",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "880264",
            "name": "Bàn & Bàn làm việc",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "880392",
            "name": "Tủ quần áo",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "880400",
            "name": "Công cụ làm đá",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "880520",
            "name": "Bàn đầu giường",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "880528",
            "name": "Máy tính xách tay",
            "l1_id": "856720",
            "l2_id": "857744",
            "slug": ""
        },
        {
            "id": "880648",
            "name": "Đệm",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "880656",
            "name": "Máy làm mát",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "880784",
            "name": "Thẻ Micro SD",
            "l1_id": "601755",
            "l2_id": "828168",
            "slug": ""
        },
        {
            "id": "880904",
            "name": "Nội thất salon",
            "l1_id": "604453",
            "l2_id": "871432",
            "slug": ""
        },
        {
            "id": "880912",
            "name": "Bàn ghế chơi game",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "881032",
            "name": "Nội thất khách sạn",
            "l1_id": "604453",
            "l2_id": "871432",
            "slug": ""
        },
        {
            "id": "881160",
            "name": "Nội thất trường học",
            "l1_id": "604453",
            "l2_id": "871432",
            "slug": ""
        },
        {
            "id": "881288",
            "name": "Nội thất nhà hàng",
            "l1_id": "604453",
            "l2_id": "871432",
            "slug": ""
        },
        {
            "id": "881416",
            "name": "Nội thất văn phòng",
            "l1_id": "604453",
            "l2_id": "871432",
            "slug": ""
        },
        {
            "id": "881544",
            "name": "Máy khoan điện",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "881672",
            "name": "Tua vít điện",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "881800",
            "name": "Cưa điện",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "881928",
            "name": "Máy thổi",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "882056",
            "name": "Máy mài góc",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "882184",
            "name": "Máy đánh bóng",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "882312",
            "name": "Cờ lê điện",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "882440",
            "name": "Súng bắn đinh",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "882568",
            "name": "Súng phun",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "882696",
            "name": "Súng nhiệt",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "882824",
            "name": "Súng bắn keo",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "882952",
            "name": "Phụ kiện dụng cụ điện",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "883080",
            "name": "Bộ dụng cụ điện",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "883208",
            "name": "Nhíp công nghiệp",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "883336",
            "name": "Búa",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "883464",
            "name": "Dao",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "883592",
            "name": "Kìm",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "883720",
            "name": "Cưa",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "883848",
            "name": "Kéo",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "883976",
            "name": "Tua vít",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "883984",
            "name": "Hoa tươi",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "884104",
            "name": "Cờ lê",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "884232",
            "name": "Đục",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "884360",
            "name": "Rìu",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "884488",
            "name": "Bộ dụng cụ",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "884616",
            "name": "Dụng cụ quang học",
            "l1_id": "604579",
            "l2_id": "871816",
            "slug": ""
        },
        {
            "id": "884744",
            "name": "Dụng cụ đo áp suất",
            "l1_id": "604579",
            "l2_id": "871816",
            "slug": ""
        },
        {
            "id": "884872",
            "name": "Dụng cụ đo nhiệt độ",
            "l1_id": "604579",
            "l2_id": "871816",
            "slug": ""
        },
        {
            "id": "885000",
            "name": "Dụng cụ đo cầm tay",
            "l1_id": "604579",
            "l2_id": "871816",
            "slug": ""
        },
        {
            "id": "885128",
            "name": "Dụng cụ đo lường vật lý",
            "l1_id": "604579",
            "l2_id": "871816",
            "slug": ""
        },
        {
            "id": "885256",
            "name": "Dụng cụ đo bằng điện",
            "l1_id": "604579",
            "l2_id": "871816",
            "slug": ""
        },
        {
            "id": "885384",
            "name": "Máy xén cỏ",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "885512",
            "name": "Máy thổi lá & Máy hút bụi",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "885640",
            "name": "Dao & Xẻng",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "885768",
            "name": "Dụng cụ cắt tỉa",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "885896",
            "name": "Cuốc & Cào",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "886024",
            "name": "Chĩa & Xẻng",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "886152",
            "name": "Găng tay làm vườn & trang bị bảo hộ",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "886280",
            "name": "Dụng cụ dọn vườn",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "886408",
            "name": "Mỏ hàn điện",
            "l1_id": "604579",
            "l2_id": "872072",
            "slug": ""
        },
        {
            "id": "886536",
            "name": "Trạm hàn",
            "l1_id": "604579",
            "l2_id": "872072",
            "slug": ""
        },
        {
            "id": "886664",
            "name": "Máy hàn",
            "l1_id": "604579",
            "l2_id": "872072",
            "slug": ""
        },
        {
            "id": "886792",
            "name": "Phụ kiện hàn",
            "l1_id": "604579",
            "l2_id": "872072",
            "slug": ""
        },
        {
            "id": "886920",
            "name": "Túi đựng dụng cụ",
            "l1_id": "604579",
            "l2_id": "872200",
            "slug": ""
        },
        {
            "id": "887048",
            "name": "Bọc & Hộp dụng cụ",
            "l1_id": "604579",
            "l2_id": "872200",
            "slug": ""
        },
        {
            "id": "887176",
            "name": "Giá đỡ & Thanh treo dụng cụ",
            "l1_id": "604579",
            "l2_id": "872200",
            "slug": ""
        },
        {
            "id": "887304",
            "name": "Phần cứng nội thất",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "887432",
            "name": "Phần cứng cửa sổ",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "887560",
            "name": "Phần cứng cửa",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "887688",
            "name": "Phần cứng cơ khí",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "887816",
            "name": "Chốt & Móc",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "887944",
            "name": "Dây thừng, Dây xích & Móc ròng rọc",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "888072",
            "name": "Ổ khóa & chốt khóa",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "888200",
            "name": "Chất kết dính, Băng dính & Chất hàn",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "888328",
            "name": "Kẹp",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "888456",
            "name": "Đồ bơi",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "888584",
            "name": "Tất & Quần tất",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "888712",
            "name": "Quần",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "888848",
            "name": "Thẻ quà tặng vật lý",
            "l1_id": "2344592",
            "l2_id": "888720",
            "slug": ""
        },
        {
            "id": "888968",
            "name": "Bộ quà tặng",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "888976",
            "name": "Voucher dữ liệu vật lý",
            "l1_id": "2344592",
            "l2_id": "888720",
            "slug": ""
        },
        {
            "id": "889096",
            "name": "Váy",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "889224",
            "name": "Áo",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "889232",
            "name": "Phụ kiện truyền thống dành cho nam giới",
            "l1_id": "605248",
            "l2_id": "888592",
            "slug": ""
        },
        {
            "id": "889352",
            "name": "Áo khoác & Áo choàng",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "889360",
            "name": "Thắt lưng của chú rể",
            "l1_id": "605248",
            "l2_id": "888592",
            "slug": ""
        },
        {
            "id": "889480",
            "name": "Đồ ngủ",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "889488",
            "name": "Giày cưới",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "889608",
            "name": "Địu",
            "l1_id": "602284",
            "l2_id": "877576",
            "slug": ""
        },
        {
            "id": "889616",
            "name": "Đồ dùng cho đám cưới",
            "l1_id": "600001",
            "l2_id": "852488",
            "slug": ""
        },
        {
            "id": "889736",
            "name": "Phụ kiện xe đẩy",
            "l1_id": "602284",
            "l2_id": "877576",
            "slug": ""
        },
        {
            "id": "889744",
            "name": "Voucher tín dụng vật lý",
            "l1_id": "2344592",
            "l2_id": "888720",
            "slug": ""
        },
        {
            "id": "889864",
            "name": "Ghế ngồi xe hơi cho trẻ em",
            "l1_id": "602284",
            "l2_id": "877576",
            "slug": ""
        },
        {
            "id": "889872",
            "name": "Voucher du lịch vật lý",
            "l1_id": "2344592",
            "l2_id": "888720",
            "slug": ""
        },
        {
            "id": "889992",
            "name": "Phụ kiện ghế ngồi xe hơi",
            "l1_id": "602284",
            "l2_id": "877576",
            "slug": ""
        },
        {
            "id": "890000",
            "name": "Voucher quà tặng vật lý",
            "l1_id": "2344592",
            "l2_id": "888720",
            "slug": ""
        },
        {
            "id": "890120",
            "name": "Túi tã",
            "l1_id": "602284",
            "l2_id": "877576",
            "slug": ""
        },
        {
            "id": "890128",
            "name": "Voucher chụp ảnh vật lý",
            "l1_id": "2344592",
            "l2_id": "888720",
            "slug": ""
        },
        {
            "id": "890248",
            "name": "Dây đai dành cho trẻ em",
            "l1_id": "602284",
            "l2_id": "877576",
            "slug": ""
        },
        {
            "id": "890256",
            "name": "Voucher khách sạn vật lý",
            "l1_id": "2344592",
            "l2_id": "888720",
            "slug": ""
        },
        {
            "id": "890376",
            "name": "Máy giữ ấm & máy làm nguội & khử trùng bình sữa",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "890384",
            "name": "Voucher của đại lý du lịch vật lý",
            "l1_id": "2344592",
            "l2_id": "888720",
            "slug": ""
        },
        {
            "id": "890504",
            "name": "Miếng lót thấm sữa",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "890632",
            "name": "Khăn che bé bú",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "890760",
            "name": "Yếm dãi & khăn ợ hơi",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "890768",
            "name": "Mahr",
            "l1_id": "605248",
            "l2_id": "888592",
            "slug": ""
        },
        {
            "id": "890888",
            "name": "Đầu vú cao su",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "891016",
            "name": "Xe tập đi cho bé",
            "l1_id": "602284",
            "l2_id": "878216",
            "slug": ""
        },
        {
            "id": "891144",
            "name": "Màn chống muỗi",
            "l1_id": "602284",
            "l2_id": "878600",
            "slug": ""
        },
        {
            "id": "891272",
            "name": "Cổng & Ô cửa",
            "l1_id": "602284",
            "l2_id": "878600",
            "slug": ""
        },
        {
            "id": "891400",
            "name": "Thảm nằm chơi an toàn",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "891528",
            "name": "Rào chắn",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "891656",
            "name": "Đồ chơi khi tắm",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "891784",
            "name": "Đồ chơi âm thanh cho em bé",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "891912",
            "name": "Ty ngậm giảm đau khi mọc răng",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "892040",
            "name": "Đồ chơi trí tuệ & giáo dục sớm",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "892168",
            "name": "Chậu tắm & Ghế tắm cho trẻ",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "892296",
            "name": "Khăn tắm & Mũ tắm",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "892424",
            "name": "Đồ dùng tắm cho trẻ",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "892552",
            "name": "Nước hoa",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "892680",
            "name": "Dụng cụ cắt tỉa tóc cho trẻ",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "892808",
            "name": "Khăn lau & khay",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "892936",
            "name": "Quần áo cho bé bú",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "892944",
            "name": "Máy tính để bàn",
            "l1_id": "856720",
            "l2_id": "857744",
            "slug": ""
        },
        {
            "id": "893064",
            "name": "Gối cho mẹ",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "893072",
            "name": "Máy tính để bàn đa năng",
            "l1_id": "856720",
            "l2_id": "857744",
            "slug": ""
        },
        {
            "id": "893192",
            "name": "Đai hỗ trợ",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "893200",
            "name": "Máy chủ",
            "l1_id": "856720",
            "l2_id": "857744",
            "slug": ""
        },
        {
            "id": "893320",
            "name": "Chăm sóc da cho mẹ",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "893448",
            "name": "Ghế tiểu tiện & dạy trẻ đi vệ sinh",
            "l1_id": "602284",
            "l2_id": "878216",
            "slug": ""
        },
        {
            "id": "893576",
            "name": "Phụ kiện đèn",
            "l1_id": "604968",
            "l2_id": "872456",
            "slug": ""
        },
        {
            "id": "893704",
            "name": "Bóng đèn, đèn tuýp & dải đèn",
            "l1_id": "604968",
            "l2_id": "872456",
            "slug": ""
        },
        {
            "id": "893832",
            "name": "Đèn trong nhà",
            "l1_id": "604968",
            "l2_id": "872456",
            "slug": ""
        },
        {
            "id": "893960",
            "name": "Đèn di động",
            "l1_id": "604968",
            "l2_id": "872456",
            "slug": ""
        },
        {
            "id": "894088",
            "name": "Đèn ngoài trời",
            "l1_id": "604968",
            "l2_id": "872456",
            "slug": ""
        },
        {
            "id": "894216",
            "name": "Đèn trang trí",
            "l1_id": "604968",
            "l2_id": "872456",
            "slug": ""
        },
        {
            "id": "894344",
            "name": "Đèn chuyên nghiệp",
            "l1_id": "604968",
            "l2_id": "872456",
            "slug": ""
        },
        {
            "id": "894472",
            "name": "Đèn thương mại",
            "l1_id": "604968",
            "l2_id": "872456",
            "slug": ""
        },
        {
            "id": "894600",
            "name": "Đầu nối & Thiết bị đầu cuối",
            "l1_id": "604968",
            "l2_id": "872584",
            "slug": ""
        },
        {
            "id": "894728",
            "name": "Công tắc & Phụ kiện",
            "l1_id": "604968",
            "l2_id": "872584",
            "slug": ""
        },
        {
            "id": "894856",
            "name": "Rơ le & Cầu dao",
            "l1_id": "604968",
            "l2_id": "872584",
            "slug": ""
        },
        {
            "id": "894984",
            "name": "Bộ nguồn",
            "l1_id": "604968",
            "l2_id": "872584",
            "slug": ""
        },
        {
            "id": "895112",
            "name": "Động cơ, máy phát điện & phụ kiện",
            "l1_id": "604968",
            "l2_id": "872584",
            "slug": ""
        },
        {
            "id": "895240",
            "name": "Ổ cắm & Phụ kiện điện",
            "l1_id": "604968",
            "l2_id": "872584",
            "slug": ""
        },
        {
            "id": "895368",
            "name": "Dây & Cáp",
            "l1_id": "604968",
            "l2_id": "872584",
            "slug": ""
        },
        {
            "id": "895496",
            "name": "Bộ biến áp",
            "l1_id": "604968",
            "l2_id": "872584",
            "slug": ""
        },
        {
            "id": "895624",
            "name": "Vòi nước nhà bếp",
            "l1_id": "604968",
            "l2_id": "872712",
            "slug": ""
        },
        {
            "id": "895752",
            "name": "Bồn rửa nhà bếp",
            "l1_id": "604968",
            "l2_id": "872712",
            "slug": ""
        },
        {
            "id": "895880",
            "name": "Tủ bếp",
            "l1_id": "604968",
            "l2_id": "872712",
            "slug": ""
        },
        {
            "id": "896008",
            "name": "Thiết bị lọc nước",
            "l1_id": "604968",
            "l2_id": "872712",
            "slug": ""
        },
        {
            "id": "896136",
            "name": "Phụ kiện đồ đạc nhà bếp",
            "l1_id": "604968",
            "l2_id": "872712",
            "slug": ""
        },
        {
            "id": "896264",
            "name": "Bộ đồ đạc nhà bếp",
            "l1_id": "604968",
            "l2_id": "872712",
            "slug": ""
        },
        {
            "id": "896392",
            "name": "Điều khiển nhà thông minh",
            "l1_id": "604968",
            "l2_id": "872840",
            "slug": ""
        },
        {
            "id": "896520",
            "name": "Hệ thống điều khiển nhiệt độ",
            "l1_id": "604968",
            "l2_id": "872840",
            "slug": ""
        },
        {
            "id": "896648",
            "name": "Hệ thống điều khiển rèm cửa tự động",
            "l1_id": "604968",
            "l2_id": "872840",
            "slug": ""
        },
        {
            "id": "896776",
            "name": "Cảm biến chuyển động thông minh",
            "l1_id": "604968",
            "l2_id": "872840",
            "slug": ""
        },
        {
            "id": "896904",
            "name": "Sưởi ấm, Làm mát & Thông gió",
            "l1_id": "604968",
            "l2_id": "872968",
            "slug": ""
        },
        {
            "id": "897032",
            "name": "Cửa ra vào, Cổng & Cửa sổ",
            "l1_id": "604968",
            "l2_id": "872968",
            "slug": ""
        },
        {
            "id": "897160",
            "name": "Giấy dán & đồ trang trí tường",
            "l1_id": "604968",
            "l2_id": "872968",
            "slug": ""
        },
        {
            "id": "897288",
            "name": "Vật tư & dụng cụ sơn",
            "l1_id": "604968",
            "l2_id": "872968",
            "slug": ""
        },
        {
            "id": "897416",
            "name": "Mái & Sàn",
            "l1_id": "604968",
            "l2_id": "872968",
            "slug": ""
        },
        {
            "id": "897544",
            "name": "Thang",
            "l1_id": "604968",
            "l2_id": "872968",
            "slug": ""
        },
        {
            "id": "897672",
            "name": "Xe đẩy",
            "l1_id": "604968",
            "l2_id": "872968",
            "slug": ""
        },
        {
            "id": "897800",
            "name": "Thiết bị tắm",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "897928",
            "name": "Móc & Thanh",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "898056",
            "name": "Bồn rửa nhà tắm",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "898184",
            "name": "Vòi nước nhà tắm",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "898312",
            "name": "Vòi xịt & các bộ phận vòi xịt",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "898440",
            "name": "Toilet & các bộ phận toilet",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "898568",
            "name": "Gương nhà tắm",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "898696",
            "name": "Phụ kiện đồ đạc nhà tắm",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "898824",
            "name": "Bộ đồ đạc nhà tắm",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "898952",
            "name": "Báo động an ninh",
            "l1_id": "604968",
            "l2_id": "873224",
            "slug": ""
        },
        {
            "id": "899080",
            "name": "Chuông cửa & Hệ thống liên lạc nội bộ",
            "l1_id": "604968",
            "l2_id": "873224",
            "slug": ""
        },
        {
            "id": "899208",
            "name": "Thiết bị an toàn lao động",
            "l1_id": "604968",
            "l2_id": "873224",
            "slug": ""
        },
        {
            "id": "899336",
            "name": "Két sắt",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "899464",
            "name": "Bộ dụng cụ khẩn cấp",
            "l1_id": "604968",
            "l2_id": "873224",
            "slug": ""
        },
        {
            "id": "899592",
            "name": "Vật dụng nuôi ong",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "899720",
            "name": "Giàn & công cụ chăm sóc cây trồng",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "899848",
            "name": "Kiểm soát sâu bệnh",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "899976",
            "name": "Trang trí sân vườn",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "900104",
            "name": "Tưới nước & Tưới tiêu",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "900232",
            "name": "Bình & Chậu trong vườn",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "900360",
            "name": "Nhà vườn",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "900872",
            "name": "Giày thể thao đơn giản",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "901000",
            "name": "Đế bằng",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "901128",
            "name": "Dép xăng đan & Dép tông",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "901256",
            "name": "Giày lười",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "901384",
            "name": "Giày hở gót & Guốc",
            "l1_id": "601352",
            "l2_id": "900488",
            "slug": ""
        },
        {
            "id": "901640",
            "name": "Giày đi dự tiệc",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "901768",
            "name": "Giày lười & giày đế bằng",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "901896",
            "name": "Giày hở gót & Guốc",
            "l1_id": "601352",
            "l2_id": "900616",
            "slug": ""
        },
        {
            "id": "902024",
            "name": "Đón gót & Phom giày",
            "l1_id": "601352",
            "l2_id": "900744",
            "slug": ""
        },
        {
            "id": "902152",
            "name": "Dây giày",
            "l1_id": "601352",
            "l2_id": "900744",
            "slug": ""
        },
        {
            "id": "902280",
            "name": "Vệ sinh & Bảo quản",
            "l1_id": "601352",
            "l2_id": "900744",
            "slug": ""
        },
        {
            "id": "903048",
            "name": "Túi bao tử & Túi thắt lưng",
            "l1_id": "824584",
            "l2_id": "902408",
            "slug": ""
        },
        {
            "id": "903176",
            "name": "Túi tote",
            "l1_id": "824584",
            "l2_id": "902408",
            "slug": ""
        },
        {
            "id": "903304",
            "name": "Túi tote",
            "l1_id": "824584",
            "l2_id": "902536",
            "slug": ""
        },
        {
            "id": "903432",
            "name": "Cặp tài liệu",
            "l1_id": "824584",
            "l2_id": "902536",
            "slug": ""
        },
        {
            "id": "903560",
            "name": "Túi bao tử & Túi thắt lưng",
            "l1_id": "824584",
            "l2_id": "902536",
            "slug": ""
        },
        {
            "id": "903688",
            "name": "Hành lý",
            "l1_id": "824584",
            "l2_id": "902664",
            "slug": ""
        },
        {
            "id": "903816",
            "name": "Ví đựng thẻ",
            "l1_id": "824584",
            "l2_id": "902664",
            "slug": ""
        },
        {
            "id": "903944",
            "name": "Bìa & Ví đựng hộ chiếu",
            "l1_id": "824584",
            "l2_id": "902664",
            "slug": ""
        },
        {
            "id": "904072",
            "name": "Túi & Hộp đựng dụng cụ",
            "l1_id": "604206",
            "l2_id": "860552",
            "slug": ""
        },
        {
            "id": "904200",
            "name": "Túi đựng hộp cơm",
            "l1_id": "824584",
            "l2_id": "902792",
            "slug": ""
        },
        {
            "id": "904328",
            "name": "Túi làm mát",
            "l1_id": "824584",
            "l2_id": "902792",
            "slug": ""
        },
        {
            "id": "904456",
            "name": "Các túi mua sắm",
            "l1_id": "824584",
            "l2_id": "902792",
            "slug": ""
        },
        {
            "id": "904584",
            "name": "Quai xách & Dây đeo dạng xích",
            "l1_id": "824584",
            "l2_id": "902920",
            "slug": ""
        },
        {
            "id": "904712",
            "name": "Móc treo túi",
            "l1_id": "824584",
            "l2_id": "902920",
            "slug": ""
        },
        {
            "id": "904840",
            "name": "Móc treo & Khăn cột túi",
            "l1_id": "824584",
            "l2_id": "902920",
            "slug": ""
        },
        {
            "id": "904968",
            "name": "Túi nhiều ngăn",
            "l1_id": "824584",
            "l2_id": "902920",
            "slug": ""
        },
        {
            "id": "905096",
            "name": "Vệ sinh & Bảo quản",
            "l1_id": "824584",
            "l2_id": "902920",
            "slug": ""
        },
        {
            "id": "905992",
            "name": "Khăn quàng cổ & Khăn choàng",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "906120",
            "name": "Găng tay",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "906248",
            "name": "Mũ",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "906376",
            "name": "Thắt lưng",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "906504",
            "name": "Cà vạt & nơ đeo cổ",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "906632",
            "name": "Khăn tay",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "906760",
            "name": "Khẩu trang & phụ kiện",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "906888",
            "name": "Khuy măng sét",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "907016",
            "name": "Hộp kính & Phụ kiện",
            "l1_id": "605248",
            "l2_id": "905352",
            "slug": ""
        },
        {
            "id": "907144",
            "name": "Đồng hồ unisex",
            "l1_id": "605248",
            "l2_id": "905480",
            "slug": ""
        },
        {
            "id": "907400",
            "name": "Hạt charm & Mặt dây chuyền",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "907528",
            "name": "Trang sức cơ thể",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "907656",
            "name": "Móc khóa",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "907784",
            "name": "Bộ trang sức",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "908424",
            "name": "Bờm & Dây buộc tóc",
            "l1_id": "605248",
            "l2_id": "905864",
            "slug": ""
        },
        {
            "id": "908552",
            "name": "Kẹp tóc & Ghim cài tóc",
            "l1_id": "605248",
            "l2_id": "905864",
            "slug": ""
        },
        {
            "id": "908680",
            "name": "Tóc giả lót ren gốc lụa bằng tóc thật",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "908808",
            "name": "Tóc giả phục sức tổng hợp",
            "l1_id": "605248",
            "l2_id": "810128",
            "slug": ""
        },
        {
            "id": "908936",
            "name": "Phụ kiện cài đầu & Vương miện",
            "l1_id": "605248",
            "l2_id": "905864",
            "slug": ""
        },
        {
            "id": "909832",
            "name": "Bộ phận của điện thoại di động",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "909960",
            "name": "Phụ kiện chụp ảnh chân dung",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "910088",
            "name": "Ống kính & Đèn flash di động",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "910216",
            "name": "Thẻ sim & Phụ kiện",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "910344",
            "name": "Giá đỡ & Chân đỡ điện thoại",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "910472",
            "name": "Thiết bị casting",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "910600",
            "name": "Bộ đàm",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "910728",
            "name": "Pin ѕạc dự phòng",
            "l1_id": "601739",
            "l2_id": "909064",
            "slug": ""
        },
        {
            "id": "910856",
            "name": "Camera ngắm & chụp",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "910984",
            "name": "Camera không gương lật",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "911112",
            "name": "Camera hành động",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "911240",
            "name": "Máy quay video",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "911368",
            "name": "Camera chụp ảnh lấy liền",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "911496",
            "name": "Máy phim",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "911624",
            "name": "Máy ảnh DSLR",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "911752",
            "name": "Hệ thống & Camera an ninh",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "911880",
            "name": "Ống kính máy ảnh",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "912008",
            "name": "Drone & Phụ kiện",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "912136",
            "name": "Bảo quản camera",
            "l1_id": "601739",
            "l2_id": "909192",
            "slug": ""
        },
        {
            "id": "912264",
            "name": "Micrô",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "912392",
            "name": "Máy chiếu",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "912520",
            "name": "Hệ thống rạp chiếu phim tại nhà",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "912648",
            "name": "Máy nghe nhạc MP3 & MP4",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "912776",
            "name": "Đầu đĩa CD & DVD",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "912904",
            "name": "Máy ghi âm",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "913032",
            "name": "Radio & Máy cassette",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "913160",
            "name": "Amply & Bàn trộn",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "913288",
            "name": "Máy thu AV",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "913416",
            "name": "Phụ kiện âm thanh & video",
            "l1_id": "601739",
            "l2_id": "909320",
            "slug": ""
        },
        {
            "id": "913544",
            "name": "Bảng điều khiển trò chơi video tại nhà",
            "l1_id": "601739",
            "l2_id": "909448",
            "slug": ""
        },
        {
            "id": "913672",
            "name": "Bảng điều khiển trò chơi cầm tay",
            "l1_id": "601739",
            "l2_id": "909448",
            "slug": ""
        },
        {
            "id": "913928",
            "name": "Phụ kiện bảng điều khiển",
            "l1_id": "601739",
            "l2_id": "909448",
            "slug": ""
        },
        {
            "id": "914056",
            "name": "Vòng đeo tay thể thao thông minh",
            "l1_id": "601739",
            "l2_id": "909576",
            "slug": ""
        },
        {
            "id": "914184",
            "name": "Thiết bị định vị GPS",
            "l1_id": "601739",
            "l2_id": "909576",
            "slug": ""
        },
        {
            "id": "914312",
            "name": "Thiết bị VR",
            "l1_id": "601739",
            "l2_id": "909576",
            "slug": ""
        },
        {
            "id": "914440",
            "name": "Thiết bị đọc sách điện tử",
            "l1_id": "601739",
            "l2_id": "909704",
            "slug": ""
        },
        {
            "id": "914568",
            "name": "Từ điển điện tử",
            "l1_id": "601739",
            "l2_id": "909704",
            "slug": ""
        },
        {
            "id": "916488",
            "name": "Trà",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "916616",
            "name": "Đồ uống sô-cô-la & Sữa mạch nha",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "916744",
            "name": "Nước ép & Sinh tố",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "916872",
            "name": "Đồ uống có ga",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "917000",
            "name": "Nước & Nước có vị",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "917128",
            "name": "Sữa thực vật",
            "l1_id": "700437",
            "l2_id": "809744",
            "slug": ""
        },
        {
            "id": "917256",
            "name": "Đồ uống thể thao & Nước tăng lực",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "917384",
            "name": "Đồ uống không cồn",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "917512",
            "name": "Hỗn hợp đồ uống dạng bột",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "917640",
            "name": "Topping đồ uống",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "917768",
            "name": "Sirô & nước cô đặc",
            "l1_id": "700437",
            "l2_id": "914824",
            "slug": ""
        },
        {
            "id": "917896",
            "name": "Cơm",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "918024",
            "name": "Pasta, mì & bún",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "918152",
            "name": "Đậu & Ngũ cốc",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "918280",
            "name": "Thực phẩm đóng hộp, lọ & đóng gói",
            "l1_id": "700437",
            "l2_id": "914952",
            "slug": ""
        },
        {
            "id": "918408",
            "name": "Rau muối chua, dưa chua & Chutney",
            "l1_id": "700437",
            "l2_id": "914952",
            "slug": ""
        },
        {
            "id": "918536",
            "name": "Cơm & Cháo ăn liền",
            "l1_id": "700437",
            "l2_id": "914952",
            "slug": ""
        },
        {
            "id": "918664",
            "name": "Lẩu ăn liền",
            "l1_id": "700437",
            "l2_id": "914952",
            "slug": ""
        },
        {
            "id": "918792",
            "name": "Ngũ cốc ăn sáng, Ngũ cốc & Yến mạch",
            "l1_id": "700437",
            "l2_id": "914952",
            "slug": ""
        },
        {
            "id": "918920",
            "name": "Dầu",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "919048",
            "name": "Đường & Chất tạo ngọt",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "919176",
            "name": "Thảo mộc, Gia vị & Hạt nêm",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "919304",
            "name": "Muối",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "919432",
            "name": "Xốt nấu ăn",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "919560",
            "name": "Giấm",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "919688",
            "name": "Rượu nấu ăn",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "919816",
            "name": "Nước hầm xương, Nước thịt & Súp ăn liền",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "919944",
            "name": "Tương & hỗn hợp gia vị nấu ăn",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "920072",
            "name": "Chất điều vị",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "920200",
            "name": "Bột mì",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "920328",
            "name": "Si-rô mật ong & phong",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "920456",
            "name": "Mứt, nước xốt & chất phết lên bánh",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "920584",
            "name": "Cao & Hương vị thực phẩm",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "920712",
            "name": "Bột nở & Baking soda",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "920840",
            "name": "Hỗn hợp nướng bánh",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "920968",
            "name": "Bột làm bánh",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "921096",
            "name": "Màu thực phẩm",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "921224",
            "name": "Dụng cụ rắc đường, láng đường & trang trí bánh kem",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "921352",
            "name": "Bột kem",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "921480",
            "name": "Bơ & Bơ thực vật",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "921608",
            "name": "Phô mai & Bột phô mai",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "921736",
            "name": "Kẹo",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "921864",
            "name": "Hạt",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "921992",
            "name": "Bắp rang bơ",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "922120",
            "name": "Rong biển",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "922248",
            "name": "Quả hạch & đậu",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "922376",
            "name": "Bánh pudding sữa trứng & thạch",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "922504",
            "name": "Đồ ăn nhẹ khô",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "922632",
            "name": "Thịt",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "922760",
            "name": "Hải sản",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "922888",
            "name": "Thực phẩm thay thế thịt",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "923016",
            "name": "Bánh mỳ",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "923144",
            "name": "Bánh ngọt và bánh nướng",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "923272",
            "name": "Bánh ngọt",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "923400",
            "name": "Kem",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "923528",
            "name": "Trứng",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "923656",
            "name": "Đậu hũ",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "923784",
            "name": "Rau",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "923912",
            "name": "Hoa quả",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "924040",
            "name": "Nấm",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "924168",
            "name": "Thực phẩm đông lạnh",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "924296",
            "name": "Thịt & Hải sản đã chế biến",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "924680",
            "name": "Khẩu trang y tế",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "924808",
            "name": "Cân trong nhà tắm",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "924936",
            "name": "Vậtt dụng sơ cứu",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "925064",
            "name": "Kiểm tra & Theo dõi Sức khỏe",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "925192",
            "name": "Xe lăn",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "925320",
            "name": "Niềng răng & Hỗ trợ",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "925448",
            "name": "Trợ thính",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "925576",
            "name": "Bao cao su",
            "l1_id": "700645",
            "l2_id": "924552",
            "slug": ""
        },
        {
            "id": "925704",
            "name": "Chất bôi trơn",
            "l1_id": "700645",
            "l2_id": "924552",
            "slug": ""
        },
        {
            "id": "925960",
            "name": "Chất tăng cường hiệu suất",
            "l1_id": "700645",
            "l2_id": "924552",
            "slug": ""
        },
        {
            "id": "926216",
            "name": "Nhiệt kế",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "926344",
            "name": "Nhiếp ảnh & Video",
            "l1_id": "801928",
            "l2_id": "986760",
            "slug": ""
        },
        {
            "id": "926472",
            "name": "Tiểu sử & Hồi ký",
            "l1_id": "801928",
            "l2_id": "986760",
            "slug": ""
        },
        {
            "id": "926600",
            "name": "Kinh doanh & Quản lý",
            "l1_id": "801928",
            "l2_id": "989320",
            "slug": ""
        },
        {
            "id": "926728",
            "name": "Văn học & nghệ thuật thiếu nhi",
            "l1_id": "801928",
            "l2_id": "989704",
            "slug": ""
        },
        {
            "id": "926856",
            "name": "Văn học",
            "l1_id": "801928",
            "l2_id": "986760",
            "slug": ""
        },
        {
            "id": "926984",
            "name": "Sách giáo khoa",
            "l1_id": "801928",
            "l2_id": "992904",
            "slug": ""
        },
        {
            "id": "927496",
            "name": "Tâm lý học & Mối quan hệ",
            "l1_id": "801928",
            "l2_id": "927112",
            "slug": ""
        },
        {
            "id": "927624",
            "name": "Tôn giáo & Triết học",
            "l1_id": "801928",
            "l2_id": "927112",
            "slug": ""
        },
        {
            "id": "927752",
            "name": "Chính trị, Luật & Khoa học xã hội",
            "l1_id": "801928",
            "l2_id": "927112",
            "slug": ""
        },
        {
            "id": "927880",
            "name": "Khoa học tự nhiên",
            "l1_id": "801928",
            "l2_id": "990216",
            "slug": ""
        },
        {
            "id": "928008",
            "name": "Lịch sử & Văn hóa",
            "l1_id": "801928",
            "l2_id": "927112",
            "slug": ""
        },
        {
            "id": "928136",
            "name": "Sự nghiệp & Tự lực",
            "l1_id": "801928",
            "l2_id": "927112",
            "slug": ""
        },
        {
            "id": "928264",
            "name": "Nuôi dạy con cái & Gia đình",
            "l1_id": "801928",
            "l2_id": "927112",
            "slug": ""
        },
        {
            "id": "928392",
            "name": "Công thức & Nấu nướng",
            "l1_id": "801928",
            "l2_id": "992392",
            "slug": ""
        },
        {
            "id": "928520",
            "name": "Thủ công mỹ nghệ & Tự làm",
            "l1_id": "801928",
            "l2_id": "992392",
            "slug": ""
        },
        {
            "id": "928648",
            "name": "Sức khỏe, Thể hình & Ăn kiêng",
            "l1_id": "801928",
            "l2_id": "992392",
            "slug": ""
        },
        {
            "id": "928904",
            "name": "Y khoa",
            "l1_id": "801928",
            "l2_id": "990216",
            "slug": ""
        },
        {
            "id": "929032",
            "name": "Du lịch & Bản đồ",
            "l1_id": "801928",
            "l2_id": "992392",
            "slug": ""
        },
        {
            "id": "929160",
            "name": "Ngôn ngữ & Từ điển",
            "l1_id": "801928",
            "l2_id": "992904",
            "slug": ""
        },
        {
            "id": "929288",
            "name": "Truyện tranh & Manga",
            "l1_id": "801928",
            "l2_id": "992392",
            "slug": ""
        },
        {
            "id": "929416",
            "name": "Tử vi",
            "l1_id": "801928",
            "l2_id": "992392",
            "slug": ""
        },
        {
            "id": "929544",
            "name": "Máy tính & Mạng",
            "l1_id": "801928",
            "l2_id": "990216",
            "slug": ""
        },
        {
            "id": "929672",
            "name": "Tã lót",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "930312",
            "name": "Hệ thống thông minh",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "930440",
            "name": "Video giám sát",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "930568",
            "name": "Hệ thống báo động & An ninh",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "930696",
            "name": "Phụ kiện điện tử",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "930952",
            "name": "Trình phát video trên ô tô",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "931080",
            "name": "GPS & Phụ kiện",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "931208",
            "name": "Thiết bị điện trên ô tô",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "931336",
            "name": "Âm thanh trên ô tô",
            "l1_id": "605196",
            "l2_id": "929928",
            "slug": ""
        },
        {
            "id": "931464",
            "name": "Bộ dụng cụ gấp gương bên",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "931592",
            "name": "Mái che & tấm che cho ô tô",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "931720",
            "name": "Dán xe",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "931848",
            "name": "Kính chống chói",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "931976",
            "name": "Phim cửa sổ & Che nắng",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "932104",
            "name": "Biển số",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "932232",
            "name": "Cái kẹp biên lai thuế đường trên xe",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "932360",
            "name": "Dải phản quang",
            "l1_id": "605196",
            "l2_id": "930056",
            "slug": ""
        },
        {
            "id": "932488",
            "name": "Gối cổ",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "932616",
            "name": "Dán bên trong ô tô",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "932744",
            "name": "Giá đỡ & Phụ kiện phía sau",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "932872",
            "name": "Cấu kiện bên trong",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "933000",
            "name": "Hộp đựng chìa khóa ô tô",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "933128",
            "name": "Chốt & Kẹp",
            "l1_id": "605196",
            "l2_id": "930184",
            "slug": ""
        },
        {
            "id": "933512",
            "name": "Kệ & Giá đỡ",
            "l1_id": "604453",
            "l2_id": "871304",
            "slug": ""
        },
        {
            "id": "933640",
            "name": "Máy hút sữa & phụ kiện",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "933768",
            "name": "Sữa công thức tăng trưởng",
            "l1_id": "602284",
            "l2_id": "879496",
            "slug": ""
        },
        {
            "id": "933896",
            "name": "Cháo, Bột & Ngũ cốc",
            "l1_id": "602284",
            "l2_id": "879496",
            "slug": ""
        },
        {
            "id": "934024",
            "name": "Đồ ăn vặt",
            "l1_id": "602284",
            "l2_id": "879496",
            "slug": ""
        },
        {
            "id": "934152",
            "name": "Cây lau nhà chạy bằng điện",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "934280",
            "name": "Máy sấy quần áo & giày",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "934408",
            "name": "Máy diệt muỗi điện tử",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "934536",
            "name": "Máy pha cà phê & Phụ kiện",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "934664",
            "name": "Máy làm bánh mì",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "934792",
            "name": "Máy trộn",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "934920",
            "name": "Bộ lọc nước",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "935048",
            "name": "Máy làm mát & Máy lấy nước",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "935176",
            "name": "Máy xay chế biến thực phẩm",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "935304",
            "name": "Nồi chiên không dầu",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "935432",
            "name": "Các bộ phận của dụng cụ nhà bếp",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "935688",
            "name": "Bộ đồ",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "935816",
            "name": "Váy",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "935944",
            "name": "Áo choàng",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "936072",
            "name": "Gamis",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "936328",
            "name": "Bóng bầu dục Mỹ",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "936584",
            "name": "Bóng gậy",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "936840",
            "name": "Giải bóng đá Ngoại hạng Anh",
            "l1_id": "603014",
            "l2_id": "936712",
            "slug": ""
        },
        {
            "id": "936968",
            "name": "Bóng rổ",
            "l1_id": "603014",
            "l2_id": "936712",
            "slug": ""
        },
        {
            "id": "937096",
            "name": "Bóng gậy",
            "l1_id": "603014",
            "l2_id": "936712",
            "slug": ""
        },
        {
            "id": "937224",
            "name": "Golf",
            "l1_id": "603014",
            "l2_id": "936712",
            "slug": ""
        },
        {
            "id": "937352",
            "name": "Chơi game",
            "l1_id": "603014",
            "l2_id": "936712",
            "slug": ""
        },
        {
            "id": "937480",
            "name": "Bóng bầu dục Rugby",
            "l1_id": "603014",
            "l2_id": "936712",
            "slug": ""
        },
        {
            "id": "937608",
            "name": "Tennis",
            "l1_id": "603014",
            "l2_id": "936712",
            "slug": ""
        },
        {
            "id": "937864",
            "name": "Thẻ bài thể thao",
            "l1_id": "951432",
            "l2_id": "810000",
            "slug": ""
        },
        {
            "id": "937992",
            "name": "Áo thể thao",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "938120",
            "name": "Ảnh chụp",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "938248",
            "name": "Bóng",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "938376",
            "name": "Cúp",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "938504",
            "name": "Tượng nhỏ",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "938632",
            "name": "Găng tay",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "938760",
            "name": "Mũ",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "938888",
            "name": "Giày",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "939144",
            "name": "Câu lạc bộ golf",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "939272",
            "name": "Cờ & Biểu ngữ",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "939400",
            "name": "Ảnh in & Áp phích",
            "l1_id": "951432",
            "l2_id": "937736",
            "slug": ""
        },
        {
            "id": "939784",
            "name": "Dây kéo đàn hồi",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "939912",
            "name": "Trượt patin",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "940040",
            "name": "Xe trượt scooter & Xe ngồi lái",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "940168",
            "name": "Bình nước thể thao",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "941064",
            "name": "Trình đọc & Trình quét mã",
            "l1_id": "605196",
            "l2_id": "940296",
            "slug": ""
        },
        {
            "id": "941192",
            "name": "Công cụ chẩn đoán",
            "l1_id": "605196",
            "l2_id": "940296",
            "slug": ""
        },
        {
            "id": "941320",
            "name": "Công cụ kim loại tấm",
            "l1_id": "605196",
            "l2_id": "940296",
            "slug": ""
        },
        {
            "id": "941448",
            "name": "Dụng cụ sửa chữa ắc quy ô tô",
            "l1_id": "605196",
            "l2_id": "940296",
            "slug": ""
        },
        {
            "id": "941576",
            "name": "Công cụ kiểm tra ô tô",
            "l1_id": "605196",
            "l2_id": "940296",
            "slug": ""
        },
        {
            "id": "941704",
            "name": "Công cụ sửa chữa động cơ & Hộp số",
            "l1_id": "605196",
            "l2_id": "940296",
            "slug": ""
        },
        {
            "id": "941832",
            "name": "Công cụ sửa chữa & Lắp lốp",
            "l1_id": "605196",
            "l2_id": "940296",
            "slug": ""
        },
        {
            "id": "941960",
            "name": "Dụng cụ tháo lắp",
            "l1_id": "605196",
            "l2_id": "940296",
            "slug": ""
        },
        {
            "id": "942088",
            "name": "Dụng cụ sửa chữa thân xe",
            "l1_id": "605196",
            "l2_id": "940296",
            "slug": ""
        },
        {
            "id": "942216",
            "name": "Đèn trang trí",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "942344",
            "name": "Đèn Light Bar & Đèn làm việc",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "942472",
            "name": "Đèn pha ô tô (LED)",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "942600",
            "name": "Dây điện",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "942728",
            "name": "Vỏ bọc",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "942856",
            "name": "Khung gầm",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "942984",
            "name": "Đèn báo",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "943240",
            "name": "Đèn pha ô tô (Xenon)",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "943368",
            "name": "Đèn pha ô tô (Halogen)",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "943624",
            "name": "Phụ tùng & Phụ kiện thuyền",
            "l1_id": "605196",
            "l2_id": "940680",
            "slug": ""
        },
        {
            "id": "944264",
            "name": "Vận chuyển & Bảo quản",
            "l1_id": "605196",
            "l2_id": "940680",
            "slug": ""
        },
        {
            "id": "944648",
            "name": "Máy đánh bóng & Phụ kiện",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "944776",
            "name": "Sơn & Dụng cụ sửa chữa cửa sổ",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "944904",
            "name": "Bảo dưỡng nội thất",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "945032",
            "name": "Phụ kiện rửa xe",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "945160",
            "name": "Súng phun nước & Bình phun bọt tuyết",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "945288",
            "name": "Dung dịch vệ sinh & bảo dưỡng",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "945416",
            "name": "Sửa chữa cửa sổ",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "945544",
            "name": "Bảo dưỡng sơn",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "945672",
            "name": "Bảo dưỡng động cơ",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "945800",
            "name": "Máy rửa xe",
            "l1_id": "605196",
            "l2_id": "940808",
            "slug": ""
        },
        {
            "id": "945928",
            "name": "Bộ lọc cho xe máy",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "946056",
            "name": "Khung & Phụ kiện",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "946184",
            "name": "Phụ kiện xe máy",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "946312",
            "name": "Đồ bảo hộ",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "946440",
            "name": "Đèn sương mù",
            "l1_id": "605196",
            "l2_id": "940424",
            "slug": ""
        },
        {
            "id": "946824",
            "name": "Bộ dụng cụ ăn uống",
            "l1_id": "700437",
            "l2_id": "915464",
            "slug": ""
        },
        {
            "id": "946952",
            "name": "Kẹo cao su nhai & Kẹo cao su thổi",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "947080",
            "name": "Thanh bánh",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "947208",
            "name": "Mặt nạ bảo hộ PPE",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "947592",
            "name": "Vitamin & Thực phẩm bổ sung cho trẻ",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "947720",
            "name": "Vitamin & Thực phẩm bổ sung cho mẹ",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "950664",
            "name": "Thuốc hỗ trợ",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "951048",
            "name": "Châm cứu",
            "l1_id": "700645",
            "l2_id": "950792",
            "slug": ""
        },
        {
            "id": "951176",
            "name": "Tinh dầu trị liệu bằng hương thơm",
            "l1_id": "700645",
            "l2_id": "950792",
            "slug": ""
        },
        {
            "id": "951688",
            "name": "Làm album thủ công & In dập",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "951816",
            "name": "Đan & móc",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "951944",
            "name": "Làm cườm & trang sức",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "952072",
            "name": "Gia công kim",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "952200",
            "name": "Đồ vẽ tự làm",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "952328",
            "name": "Đồ tự chế đặc biệt",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "952456",
            "name": "Thủ công da",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "952584",
            "name": "Làm nến & xà phòng",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "953608",
            "name": "Tượng nhỏ & tượng",
            "l1_id": "951432",
            "l2_id": "953352",
            "slug": ""
        },
        {
            "id": "953736",
            "name": "Tem bưu chính",
            "l1_id": "951432",
            "l2_id": "953352",
            "slug": ""
        },
        {
            "id": "953864",
            "name": "Ô tô mô hình & Đồ chơi Diecast",
            "l1_id": "951432",
            "l2_id": "953352",
            "slug": ""
        },
        {
            "id": "953992",
            "name": "Đĩa",
            "l1_id": "951432",
            "l2_id": "953352",
            "slug": ""
        },
        {
            "id": "954120",
            "name": "Ảnh in & Áp phích",
            "l1_id": "951432",
            "l2_id": "953352",
            "slug": ""
        },
        {
            "id": "954248",
            "name": "Làm huy hiệu",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "954376",
            "name": "Gốm & Gốm sứ",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "954504",
            "name": "Đồ gỗ tự làm",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "954632",
            "name": "Thủ công mỹ nghệ vải nỉ",
            "l1_id": "604206",
            "l2_id": "951560",
            "slug": ""
        },
        {
            "id": "954760",
            "name": "Cà vạt & Nơ cà vạt",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "955528",
            "name": "Dây chuyền & Mặt dây chuyền bằng bạch kim & vàng Carat",
            "l1_id": "953224",
            "l2_id": "954888",
            "slug": ""
        },
        {
            "id": "955656",
            "name": "Nhẫn bạch kim & vàng Carat",
            "l1_id": "953224",
            "l2_id": "954888",
            "slug": ""
        },
        {
            "id": "955784",
            "name": "Vòng tay & Lắc chân bằng bạch kim & vàng Carat",
            "l1_id": "953224",
            "l2_id": "954888",
            "slug": ""
        },
        {
            "id": "955912",
            "name": "Khuyên tai bạch kim & vàng Carat",
            "l1_id": "953224",
            "l2_id": "954888",
            "slug": ""
        },
        {
            "id": "956040",
            "name": "Bộ trang sức bạch kim & vàng Carat",
            "l1_id": "953224",
            "l2_id": "954888",
            "slug": ""
        },
        {
            "id": "956168",
            "name": "Phụ kiện quần áo bạch kim & vàng Carat",
            "l1_id": "953224",
            "l2_id": "954888",
            "slug": ""
        },
        {
            "id": "956296",
            "name": "Dây chuyền & Mặt dây chuyền kim cương",
            "l1_id": "953224",
            "l2_id": "955272",
            "slug": ""
        },
        {
            "id": "956424",
            "name": "Dây chuyền & Mặt dây chuyền vàng",
            "l1_id": "953224",
            "l2_id": "955016",
            "slug": ""
        },
        {
            "id": "956552",
            "name": "Nhẫn vàng",
            "l1_id": "953224",
            "l2_id": "955016",
            "slug": ""
        },
        {
            "id": "956680",
            "name": "Vòng tay & Lắc chân vàng",
            "l1_id": "953224",
            "l2_id": "955016",
            "slug": ""
        },
        {
            "id": "956808",
            "name": "Khuyên tai vàng",
            "l1_id": "953224",
            "l2_id": "955016",
            "slug": ""
        },
        {
            "id": "956936",
            "name": "Bộ trang sức bằng vàng",
            "l1_id": "953224",
            "l2_id": "955016",
            "slug": ""
        },
        {
            "id": "957064",
            "name": "Phụ kiện quần áo bằng vàng",
            "l1_id": "953224",
            "l2_id": "955016",
            "slug": ""
        },
        {
            "id": "957192",
            "name": "Dây chuyền & Mặt dây chuyền bạc",
            "l1_id": "953224",
            "l2_id": "955144",
            "slug": ""
        },
        {
            "id": "957320",
            "name": "Nhẫn bạc",
            "l1_id": "953224",
            "l2_id": "955144",
            "slug": ""
        },
        {
            "id": "957448",
            "name": "Vòng tay & Lắc chân bạc",
            "l1_id": "953224",
            "l2_id": "955144",
            "slug": ""
        },
        {
            "id": "957576",
            "name": "Khuyên tai bạc",
            "l1_id": "953224",
            "l2_id": "955144",
            "slug": ""
        },
        {
            "id": "957704",
            "name": "Bộ trang sức bằng bạc",
            "l1_id": "953224",
            "l2_id": "955144",
            "slug": ""
        },
        {
            "id": "957832",
            "name": "Phụ kiện quần áo bằng bạc",
            "l1_id": "953224",
            "l2_id": "955144",
            "slug": ""
        },
        {
            "id": "957960",
            "name": "Đồ trang trí bằng bạc",
            "l1_id": "953224",
            "l2_id": "955144",
            "slug": ""
        },
        {
            "id": "958088",
            "name": "Bạc bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "955144",
            "slug": ""
        },
        {
            "id": "958216",
            "name": "Dây chuyền & Mặt dây chuyền đá quý nhân tạo",
            "l1_id": "953224",
            "l2_id": "964360",
            "slug": ""
        },
        {
            "id": "958344",
            "name": "Nhẫn kim cương",
            "l1_id": "953224",
            "l2_id": "955272",
            "slug": ""
        },
        {
            "id": "958472",
            "name": "Vòng tay & Lắc chân kim cương",
            "l1_id": "953224",
            "l2_id": "955272",
            "slug": ""
        },
        {
            "id": "958600",
            "name": "Khuyên tai kim cương",
            "l1_id": "953224",
            "l2_id": "955272",
            "slug": ""
        },
        {
            "id": "958728",
            "name": "Bộ trang sức kim cương",
            "l1_id": "953224",
            "l2_id": "955272",
            "slug": ""
        },
        {
            "id": "958856",
            "name": "Phụ kiện quần áo kim cương",
            "l1_id": "953224",
            "l2_id": "955272",
            "slug": ""
        },
        {
            "id": "958984",
            "name": "Dây chuyền & Mặt dây chuyền ngọc bích",
            "l1_id": "953224",
            "l2_id": "963848",
            "slug": ""
        },
        {
            "id": "959112",
            "name": "Nhẫn ngọc bích",
            "l1_id": "953224",
            "l2_id": "963848",
            "slug": ""
        },
        {
            "id": "959240",
            "name": "Dây chuyền & Mặt dây chuyền pha lê tự nhiên",
            "l1_id": "953224",
            "l2_id": "955400",
            "slug": ""
        },
        {
            "id": "959368",
            "name": "Nhẫn pha lê tự nhiên",
            "l1_id": "953224",
            "l2_id": "955400",
            "slug": ""
        },
        {
            "id": "959496",
            "name": "Vòng tay & Lắc chân pha lê tự nhiên",
            "l1_id": "953224",
            "l2_id": "955400",
            "slug": ""
        },
        {
            "id": "959624",
            "name": "Khuyên tai pha lê tự nhiên",
            "l1_id": "953224",
            "l2_id": "955400",
            "slug": ""
        },
        {
            "id": "959752",
            "name": "Bộ trang sức pha lê tự nhiên",
            "l1_id": "953224",
            "l2_id": "955400",
            "slug": ""
        },
        {
            "id": "959880",
            "name": "Phụ kiện quần áo pha lê tự nhiên",
            "l1_id": "953224",
            "l2_id": "955400",
            "slug": ""
        },
        {
            "id": "960008",
            "name": "Đồ trang trí bằng pha lê tự nhiên",
            "l1_id": "953224",
            "l2_id": "955400",
            "slug": ""
        },
        {
            "id": "960136",
            "name": "Pha lê tự nhiên bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "955400",
            "slug": ""
        },
        {
            "id": "960264",
            "name": "Quần bó",
            "l1_id": "802184",
            "l2_id": "803592",
            "slug": ""
        },
        {
            "id": "960392",
            "name": "Chụp tai",
            "l1_id": "605248",
            "l2_id": "905224",
            "slug": ""
        },
        {
            "id": "960520",
            "name": "Mặt nạ",
            "l1_id": "802184",
            "l2_id": "806792",
            "slug": ""
        },
        {
            "id": "960648",
            "name": "Áo gi lê",
            "l1_id": "824328",
            "l2_id": "839944",
            "slug": ""
        },
        {
            "id": "960776",
            "name": "Áo Polo",
            "l1_id": "824328",
            "l2_id": "839944",
            "slug": ""
        },
        {
            "id": "960904",
            "name": "Đồ chơi thể thao & ngoài trời cho em bé",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "961032",
            "name": "Áo Polo",
            "l1_id": "601152",
            "l2_id": "842248",
            "slug": ""
        },
        {
            "id": "961160",
            "name": "Búp bê & Gấu bông",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "961288",
            "name": "Đồ chơi con lật đật Roly-Poly",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "961416",
            "name": "Ngựa & Động vật bập bênh",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "961544",
            "name": "Bộ quà tặng",
            "l1_id": "602284",
            "l2_id": "878984",
            "slug": ""
        },
        {
            "id": "961672",
            "name": "Váy phù dâu",
            "l1_id": "601152",
            "l2_id": "842504",
            "slug": ""
        },
        {
            "id": "962056",
            "name": "Găng tay em bé",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "962184",
            "name": "Khăn quàng cổ cho bé",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "962312",
            "name": "Mũ & Mũ lưỡi trai em bé",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "962440",
            "name": "Bịt tai cho bé",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "962568",
            "name": "Khẩu trang cho bé",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "962696",
            "name": "Phụ kiện tóc cho bé",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "962952",
            "name": "Công thức & Tổ chức & Bảo quản sữa",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "963080",
            "name": "Đồ chơi Slime & Squishy",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "963208",
            "name": "Mạt chược",
            "l1_id": "604206",
            "l2_id": "860296",
            "slug": ""
        },
        {
            "id": "963336",
            "name": "Thực phẩm khô",
            "l1_id": "700437",
            "l2_id": "915080",
            "slug": ""
        },
        {
            "id": "963464",
            "name": "Bộ quà tặng",
            "l1_id": "700437",
            "l2_id": "915336",
            "slug": ""
        },
        {
            "id": "963592",
            "name": "Đồ khiêu vũ & Trang phục khiêu vũ",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "963720",
            "name": "Chân váy thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "963976",
            "name": "Váy liền thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "964872",
            "name": "Dây chuyền & Mặt dây chuyền pha lê không tự nhiên",
            "l1_id": "953224",
            "l2_id": "961800",
            "slug": ""
        },
        {
            "id": "965000",
            "name": "Nhẫn pha lê không tự nhiên",
            "l1_id": "953224",
            "l2_id": "961800",
            "slug": ""
        },
        {
            "id": "965128",
            "name": "Vòng tay & Lắc chân pha lê không phải tự nhiên",
            "l1_id": "953224",
            "l2_id": "961800",
            "slug": ""
        },
        {
            "id": "965256",
            "name": "Khuyên tai pha lê không tự nhiên",
            "l1_id": "953224",
            "l2_id": "961800",
            "slug": ""
        },
        {
            "id": "965384",
            "name": "Găng tay thể thao",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "965512",
            "name": "Băng đô thể thao",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "965640",
            "name": "Vòng tay thể thao",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "965768",
            "name": "Băng thể thao",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "965896",
            "name": "Túi đựng giày",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "966024",
            "name": "Áo phao cứu hộ",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "966152",
            "name": "Mũ bơi",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "966280",
            "name": "Trượt băng",
            "l1_id": "603014",
            "l2_id": "835208",
            "slug": ""
        },
        {
            "id": "966408",
            "name": "Bi đá trên băng",
            "l1_id": "603014",
            "l2_id": "835208",
            "slug": ""
        },
        {
            "id": "966536",
            "name": "Trượt ván",
            "l1_id": "603014",
            "l2_id": "835208",
            "slug": ""
        },
        {
            "id": "966664",
            "name": "Trượt tuyết bằng giầy",
            "l1_id": "603014",
            "l2_id": "835208",
            "slug": ""
        },
        {
            "id": "966792",
            "name": "Chèo ca nô",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "966920",
            "name": "Chèo kayak",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "967048",
            "name": "Lướt ván diều",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "967176",
            "name": "Đua thuyền & Đội thuyền",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "967304",
            "name": "Đi thuyền",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "967432",
            "name": "Chèo ván đứng",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "967560",
            "name": "Trượt nước & Lướt ván ca nô",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "967688",
            "name": "Bóng nước",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "967816",
            "name": "Lướt ván buồm",
            "l1_id": "603014",
            "l2_id": "835080",
            "slug": ""
        },
        {
            "id": "967944",
            "name": "Bóng ném Mỹ",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "968072",
            "name": "Bóng ném",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "968200",
            "name": "Bóng đá trong nhà",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "968328",
            "name": "Khúc côn cầu",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "968456",
            "name": "Bóng lưới",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "968584",
            "name": "Mã cầu",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "968712",
            "name": "Bóng mềm",
            "l1_id": "603014",
            "l2_id": "834952",
            "slug": ""
        },
        {
            "id": "968840",
            "name": "Ba lê & Khiêu vũ",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "968968",
            "name": "Võ Karate",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "969096",
            "name": "Leo núi",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "969224",
            "name": "Trò chơi giả lập quân sự nhập vai",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "969352",
            "name": "Nhảy cổ vũ",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "969480",
            "name": "Thể dục dụng cụ",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "969608",
            "name": "Thể dục nhịp điệu",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "969736",
            "name": "Thể thao đĩa bay",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "969992",
            "name": "Chạy",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "970120",
            "name": "Nhảy dù",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "970248",
            "name": "Ba môn phối hợp",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "970376",
            "name": "Đua",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "970504",
            "name": "Thể thao điện tử",
            "l1_id": "603014",
            "l2_id": "835592",
            "slug": ""
        },
        {
            "id": "970632",
            "name": "Đồ trang trí bằng vàng",
            "l1_id": "953224",
            "l2_id": "955016",
            "slug": ""
        },
        {
            "id": "970760",
            "name": "Vàng bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "955016",
            "slug": ""
        },
        {
            "id": "970888",
            "name": "Bộ trang sức pha lê không tự nhiên",
            "l1_id": "953224",
            "l2_id": "961800",
            "slug": ""
        },
        {
            "id": "971016",
            "name": "Phụ kiện quần áo pha lê không tự nhiên",
            "l1_id": "953224",
            "l2_id": "961800",
            "slug": ""
        },
        {
            "id": "971144",
            "name": "Đồ trang trí bằng pha lê không tự nhiên",
            "l1_id": "953224",
            "l2_id": "961800",
            "slug": ""
        },
        {
            "id": "971272",
            "name": "Pha lê không tự nhiên bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "961800",
            "slug": ""
        },
        {
            "id": "971400",
            "name": "Vòng tay & Lắc chân ngọc bích",
            "l1_id": "953224",
            "l2_id": "963848",
            "slug": ""
        },
        {
            "id": "971528",
            "name": "Khuyên tai ngọc bích",
            "l1_id": "953224",
            "l2_id": "963848",
            "slug": ""
        },
        {
            "id": "971656",
            "name": "Bộ trang sức ngọc bích",
            "l1_id": "953224",
            "l2_id": "963848",
            "slug": ""
        },
        {
            "id": "971784",
            "name": "Phụ kiện quần áo ngọc bích",
            "l1_id": "953224",
            "l2_id": "963848",
            "slug": ""
        },
        {
            "id": "971912",
            "name": "Đồ trang trí bằng ngọc bích",
            "l1_id": "953224",
            "l2_id": "963848",
            "slug": ""
        },
        {
            "id": "972040",
            "name": "Ngọc bích bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "963848",
            "slug": ""
        },
        {
            "id": "972168",
            "name": "Dây chuyền & Mặt dây chuyền Hồng ngọc, Sapphire & Ngọc lục bảo",
            "l1_id": "953224",
            "l2_id": "964104",
            "slug": ""
        },
        {
            "id": "972296",
            "name": "Nhẫn Hồng ngọc, Sapphire & Ngọc lục bảo",
            "l1_id": "953224",
            "l2_id": "964104",
            "slug": ""
        },
        {
            "id": "972424",
            "name": "Vòng tay & Lắc chân Hồng ngọc, Sapphire & Ngọc lục bảo",
            "l1_id": "953224",
            "l2_id": "964104",
            "slug": ""
        },
        {
            "id": "972552",
            "name": "Khuyên tai Hồng ngọc, Sapphire & Ngọc lục bảo",
            "l1_id": "953224",
            "l2_id": "964104",
            "slug": ""
        },
        {
            "id": "972680",
            "name": "Bộ trang sức Hồng ngọc, Sapphire & Ngọc lục bảo",
            "l1_id": "953224",
            "l2_id": "964104",
            "slug": ""
        },
        {
            "id": "972808",
            "name": "Phụ kiện quần áo bằng Hồng ngọc, Sapphire & Ngọc lục bảo",
            "l1_id": "953224",
            "l2_id": "964104",
            "slug": ""
        },
        {
            "id": "972936",
            "name": "Hồng ngọc, Sapphire & Ngọc lục bảo bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "964104",
            "slug": ""
        },
        {
            "id": "973064",
            "name": "Dây chuyền & Mặt dây chuyền bằng đá bán quý",
            "l1_id": "953224",
            "l2_id": "964232",
            "slug": ""
        },
        {
            "id": "973192",
            "name": "Nhẫn đá bán quý",
            "l1_id": "953224",
            "l2_id": "964232",
            "slug": ""
        },
        {
            "id": "973320",
            "name": "Vòng tay & Lắc chân bằng đá bán quý",
            "l1_id": "953224",
            "l2_id": "964232",
            "slug": ""
        },
        {
            "id": "973448",
            "name": "Khuyên tai bằng đá bán quý",
            "l1_id": "953224",
            "l2_id": "964232",
            "slug": ""
        },
        {
            "id": "973576",
            "name": "Bộ trang sức bằng đá bán quý",
            "l1_id": "953224",
            "l2_id": "964232",
            "slug": ""
        },
        {
            "id": "973704",
            "name": "Phụ kiện quần áo bằng đá bán quý",
            "l1_id": "953224",
            "l2_id": "964232",
            "slug": ""
        },
        {
            "id": "973832",
            "name": "Đá bán quý bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "964232",
            "slug": ""
        },
        {
            "id": "973960",
            "name": "Nhẫn đá quý nhân tạo",
            "l1_id": "953224",
            "l2_id": "964360",
            "slug": ""
        },
        {
            "id": "974088",
            "name": "Vòng tay & Lắc chân đá quý nhân tạo",
            "l1_id": "953224",
            "l2_id": "964360",
            "slug": ""
        },
        {
            "id": "974216",
            "name": "Khuyên tai đá quý nhân tạo",
            "l1_id": "953224",
            "l2_id": "964360",
            "slug": ""
        },
        {
            "id": "974344",
            "name": "Bộ trang sức bằng đá quý nhân tạo",
            "l1_id": "953224",
            "l2_id": "964360",
            "slug": ""
        },
        {
            "id": "974472",
            "name": "Phụ kiện quần áo bằng đá quý nhân tạo",
            "l1_id": "953224",
            "l2_id": "964360",
            "slug": ""
        },
        {
            "id": "974600",
            "name": "Dây chuyền & Mặt dây chuyền ngọc trai",
            "l1_id": "953224",
            "l2_id": "964488",
            "slug": ""
        },
        {
            "id": "974728",
            "name": "Nhẫn ngọc trai",
            "l1_id": "953224",
            "l2_id": "964488",
            "slug": ""
        },
        {
            "id": "974856",
            "name": "Vòng tay & Lắc chân ngọc trai",
            "l1_id": "953224",
            "l2_id": "964488",
            "slug": ""
        },
        {
            "id": "974984",
            "name": "Khuyên tai ngọc trai",
            "l1_id": "953224",
            "l2_id": "964488",
            "slug": ""
        },
        {
            "id": "975112",
            "name": "Bộ trang sức ngọc trai",
            "l1_id": "953224",
            "l2_id": "964488",
            "slug": ""
        },
        {
            "id": "975240",
            "name": "Phụ kiện quần áo ngọc trai",
            "l1_id": "953224",
            "l2_id": "964488",
            "slug": ""
        },
        {
            "id": "975368",
            "name": "Đồ trang trí bằng ngọc trai",
            "l1_id": "953224",
            "l2_id": "964488",
            "slug": ""
        },
        {
            "id": "975496",
            "name": "Ngọc trai bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "964488",
            "slug": ""
        },
        {
            "id": "975624",
            "name": "Dây chuyền & Mặt dây chuyền hổ phách",
            "l1_id": "953224",
            "l2_id": "964616",
            "slug": ""
        },
        {
            "id": "975752",
            "name": "Nhẫn hổ phách",
            "l1_id": "953224",
            "l2_id": "964616",
            "slug": ""
        },
        {
            "id": "975880",
            "name": "Vòng tay & Lắc chân hổ phách",
            "l1_id": "953224",
            "l2_id": "964616",
            "slug": ""
        },
        {
            "id": "976008",
            "name": "Khuyên tai hổ phách",
            "l1_id": "953224",
            "l2_id": "964616",
            "slug": ""
        },
        {
            "id": "976136",
            "name": "Bộ trang sức hổ phách",
            "l1_id": "953224",
            "l2_id": "964616",
            "slug": ""
        },
        {
            "id": "976264",
            "name": "Phụ kiện quần áo bằng hổ phách",
            "l1_id": "953224",
            "l2_id": "964616",
            "slug": ""
        },
        {
            "id": "976392",
            "name": "Đồ trang trí bằng hổ phách",
            "l1_id": "953224",
            "l2_id": "964616",
            "slug": ""
        },
        {
            "id": "976520",
            "name": "Hổ phách bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "964616",
            "slug": ""
        },
        {
            "id": "976648",
            "name": "Dây chuyền & Mặt dây chuyền Mellite",
            "l1_id": "953224",
            "l2_id": "964744",
            "slug": ""
        },
        {
            "id": "976776",
            "name": "Nhẫn Mellite",
            "l1_id": "953224",
            "l2_id": "964744",
            "slug": ""
        },
        {
            "id": "976904",
            "name": "Vòng tay & Lắc chân Mellite",
            "l1_id": "953224",
            "l2_id": "964744",
            "slug": ""
        },
        {
            "id": "977032",
            "name": "Khuyên tai Mellite",
            "l1_id": "953224",
            "l2_id": "964744",
            "slug": ""
        },
        {
            "id": "977160",
            "name": "Bộ trang sức Mellite",
            "l1_id": "953224",
            "l2_id": "964744",
            "slug": ""
        },
        {
            "id": "977288",
            "name": "Phụ kiện quần áo bằng Mellite",
            "l1_id": "953224",
            "l2_id": "964744",
            "slug": ""
        },
        {
            "id": "977416",
            "name": "Đồ trang trí bằng Mellite",
            "l1_id": "953224",
            "l2_id": "964744",
            "slug": ""
        },
        {
            "id": "977544",
            "name": "Mellite bán thành phẩm",
            "l1_id": "953224",
            "l2_id": "964744",
            "slug": ""
        },
        {
            "id": "977672",
            "name": "Điều trị móng",
            "l1_id": "601450",
            "l2_id": "1086856",
            "slug": ""
        },
        {
            "id": "977800",
            "name": "Bếp từ",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "977928",
            "name": "Bếp nướng điện",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "978056",
            "name": "Dầu thuộc da & tự thuộc da",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "978184",
            "name": "Phụ kiện chỉnh nha",
            "l1_id": "601450",
            "l2_id": "849672",
            "slug": ""
        },
        {
            "id": "978312",
            "name": "Bình nóng lạnh",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "978568",
            "name": "Máy chủ",
            "l1_id": "601755",
            "l2_id": "824840",
            "slug": ""
        },
        {
            "id": "978824",
            "name": "Bộ phận & phụ kiện thiết bị giáo dục",
            "l1_id": "601739",
            "l2_id": "909704",
            "slug": ""
        },
        {
            "id": "979080",
            "name": "Máy trả lời",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "979208",
            "name": "Wi-Fi bỏ túi",
            "l1_id": "601739",
            "l2_id": "978952",
            "slug": ""
        },
        {
            "id": "979336",
            "name": "Bồn tắm",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "979464",
            "name": "Thanh vịn & Ghế an toàn trong phòng tắm",
            "l1_id": "604968",
            "l2_id": "873096",
            "slug": ""
        },
        {
            "id": "979720",
            "name": "Thẻ bài & phụ kiện",
            "l1_id": "604453",
            "l2_id": "871048",
            "slug": ""
        },
        {
            "id": "979848",
            "name": "Máy cắt cỏ",
            "l1_id": "604579",
            "l2_id": "871944",
            "slug": ""
        },
        {
            "id": "979976",
            "name": "Hạt giống cây trồng & hoa",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "980232",
            "name": "Đất trồng và Phân bón",
            "l1_id": "604968",
            "l2_id": "873352",
            "slug": ""
        },
        {
            "id": "980360",
            "name": "Máy rửa áp lực",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "980616",
            "name": "Máy nén khí",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "980744",
            "name": "Phụ kiện dụng cụ cầm tay",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "980872",
            "name": "Cân công nghiệp",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "981000",
            "name": "Dụng cụ sửa chữa đồng hồ",
            "l1_id": "604579",
            "l2_id": "871688",
            "slug": ""
        },
        {
            "id": "981256",
            "name": "Tã người lớn",
            "l1_id": "601450",
            "l2_id": "981128",
            "slug": ""
        },
        {
            "id": "981384",
            "name": "Thuốc đuổi côn trùng",
            "l1_id": "601450",
            "l2_id": "981128",
            "slug": ""
        },
        {
            "id": "981512",
            "name": "Điều trị tóc / điều trị da đầu",
            "l1_id": "601450",
            "l2_id": "848904",
            "slug": ""
        },
        {
            "id": "981640",
            "name": "Quần áo cho thú cưng nhỏ",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "981768",
            "name": "Thức ăn cho thú cưng nhỏ",
            "l1_id": "602118",
            "l2_id": "822792",
            "slug": ""
        },
        {
            "id": "981896",
            "name": "Thức ăn cho vật nuôi trong bể cá",
            "l1_id": "602118",
            "l2_id": "819848",
            "slug": ""
        },
        {
            "id": "982024",
            "name": "Thức ăn cho chim",
            "l1_id": "602118",
            "l2_id": "821896",
            "slug": ""
        },
        {
            "id": "982152",
            "name": "Thức ăn cho bò sát",
            "l1_id": "602118",
            "l2_id": "821000",
            "slug": ""
        },
        {
            "id": "982280",
            "name": "Tấm & Biển hiệu",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "982408",
            "name": "Album ảnh",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "982536",
            "name": "Máy bơm, bộ phận & phụ kiện",
            "l1_id": "604579",
            "l2_id": "980488",
            "slug": ""
        },
        {
            "id": "982664",
            "name": "Ống & phụ kiện",
            "l1_id": "604579",
            "l2_id": "980488",
            "slug": ""
        },
        {
            "id": "982792",
            "name": "Van & bộ phận",
            "l1_id": "604579",
            "l2_id": "980488",
            "slug": ""
        },
        {
            "id": "983048",
            "name": "Sản phẩm mài & hoàn thiện",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "983176",
            "name": "Thiết bị tiết kiệm điện",
            "l1_id": "604968",
            "l2_id": "872584",
            "slug": ""
        },
        {
            "id": "983304",
            "name": "Thiết bị nhà bếp chuyên dụng",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "983432",
            "name": "Chăn điện",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "983560",
            "name": "Máy tẩy xơ vải",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "983816",
            "name": "Đèn USB & di động",
            "l1_id": "601739",
            "l2_id": "978952",
            "slug": ""
        },
        {
            "id": "983944",
            "name": "Máy xử lý chất thải thực phẩm",
            "l1_id": "600942",
            "l2_id": "844168",
            "slug": ""
        },
        {
            "id": "984072",
            "name": "Máy sấy tay",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "984200",
            "name": "Lợn đất",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "984456",
            "name": "Máy tiệt trùng gia đình",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "984712",
            "name": "Quạt tay",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "984840",
            "name": "Bảng viết điện tử",
            "l1_id": "601739",
            "l2_id": "909704",
            "slug": ""
        },
        {
            "id": "984968",
            "name": "Sổ tay điện tử",
            "l1_id": "601739",
            "l2_id": "909704",
            "slug": ""
        },
        {
            "id": "985096",
            "name": "Bút & Thiết bị đọc",
            "l1_id": "601739",
            "l2_id": "909704",
            "slug": ""
        },
        {
            "id": "985224",
            "name": "Thiết bị học tập điện tử",
            "l1_id": "601739",
            "l2_id": "909704",
            "slug": ""
        },
        {
            "id": "985352",
            "name": "Bút thông minh & kỹ thuật số",
            "l1_id": "601739",
            "l2_id": "909704",
            "slug": ""
        },
        {
            "id": "985480",
            "name": "Dụng cụ in 3D",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "985608",
            "name": "Máy fax",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "985864",
            "name": "Kinh doanh",
            "l1_id": "801928",
            "l2_id": "985736",
            "slug": ""
        },
        {
            "id": "986120",
            "name": "Lối sống",
            "l1_id": "801928",
            "l2_id": "985736",
            "slug": ""
        },
        {
            "id": "986248",
            "name": "Máy quét mã vạch",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "986376",
            "name": "Thời trang",
            "l1_id": "801928",
            "l2_id": "985736",
            "slug": ""
        },
        {
            "id": "986504",
            "name": "Thiết bị bán lẻ thông minh",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "986632",
            "name": "Thiếu niên",
            "l1_id": "801928",
            "l2_id": "985736",
            "slug": ""
        },
        {
            "id": "986888",
            "name": "Máy in nhãn",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "987016",
            "name": "Viễn tưởng",
            "l1_id": "801928",
            "l2_id": "986760",
            "slug": ""
        },
        {
            "id": "987144",
            "name": "Biểu diễn nghệ thuật",
            "l1_id": "801928",
            "l2_id": "986760",
            "slug": ""
        },
        {
            "id": "987272",
            "name": "Thiết bị in ấn quảng cáo",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "987400",
            "name": "Âm nhạc",
            "l1_id": "801928",
            "l2_id": "986760",
            "slug": ""
        },
        {
            "id": "987528",
            "name": "Hộp mực in dạng lỏng & bột",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "987656",
            "name": "Bộ phận thiết bị văn phòng",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "987784",
            "name": "Máy cán màng",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "987912",
            "name": "Lịch & Phụ kiện",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "988040",
            "name": "Sản phẩm giữ tài liệu văn phòng",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "988168",
            "name": "Phù hiệu & Đồ đi kèm",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "988296",
            "name": "Nhãn, Bìa phân trang & Tem",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "988552",
            "name": "Dụng cụ đo dùng trong văn phòng",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "988680",
            "name": "Dụng cụ thuyết trình dùng trong văn phòng",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "988936",
            "name": "Băng dán, keo dán & chốt buộc",
            "l1_id": "601755",
            "l2_id": "831112",
            "slug": ""
        },
        {
            "id": "989064",
            "name": "Phim điện ảnh & Truyền hình",
            "l1_id": "801928",
            "l2_id": "986760",
            "slug": ""
        },
        {
            "id": "989192",
            "name": "Vẽ tranh & Thiết kế",
            "l1_id": "801928",
            "l2_id": "986760",
            "slug": ""
        },
        {
            "id": "989448",
            "name": "Kinh tế",
            "l1_id": "801928",
            "l2_id": "989320",
            "slug": ""
        },
        {
            "id": "989576",
            "name": "Tài chính & Đầu tư",
            "l1_id": "801928",
            "l2_id": "989320",
            "slug": ""
        },
        {
            "id": "989832",
            "name": "Sách giáo dục sớm & sách mềm",
            "l1_id": "801928",
            "l2_id": "989704",
            "slug": ""
        },
        {
            "id": "989960",
            "name": "Sách hoạt động",
            "l1_id": "801928",
            "l2_id": "989704",
            "slug": ""
        },
        {
            "id": "990088",
            "name": "Sách tranh",
            "l1_id": "801928",
            "l2_id": "989704",
            "slug": ""
        },
        {
            "id": "990728",
            "name": "Quạt USB & di động",
            "l1_id": "601739",
            "l2_id": "978952",
            "slug": ""
        },
        {
            "id": "990856",
            "name": "Kiến trúc",
            "l1_id": "801928",
            "l2_id": "990216",
            "slug": ""
        },
        {
            "id": "990984",
            "name": "Máy đánh bóng giày điện",
            "l1_id": "600942",
            "l2_id": "844808",
            "slug": ""
        },
        {
            "id": "991112",
            "name": "Nông lâm ngư nghiệp",
            "l1_id": "801928",
            "l2_id": "990216",
            "slug": ""
        },
        {
            "id": "991240",
            "name": "Công nghệ công nghiệp",
            "l1_id": "801928",
            "l2_id": "990216",
            "slug": ""
        },
        {
            "id": "991496",
            "name": "Vỏ & Ốp máy tính bảng",
            "l1_id": "601739",
            "l2_id": "984584",
            "slug": ""
        },
        {
            "id": "991624",
            "name": "Bộ sạc & Bộ điều hợp máy tính bảng",
            "l1_id": "601739",
            "l2_id": "984584",
            "slug": ""
        },
        {
            "id": "991752",
            "name": "Bộ phận máy tính bảng",
            "l1_id": "601739",
            "l2_id": "984584",
            "slug": ""
        },
        {
            "id": "991880",
            "name": "Cường lực máy tính bảng",
            "l1_id": "601739",
            "l2_id": "984584",
            "slug": ""
        },
        {
            "id": "992008",
            "name": "Bàn phím máy tính bảng",
            "l1_id": "601739",
            "l2_id": "984584",
            "slug": ""
        },
        {
            "id": "992136",
            "name": "Giá đỡ & đế máy tính bảng",
            "l1_id": "601739",
            "l2_id": "984584",
            "slug": ""
        },
        {
            "id": "992264",
            "name": "Bút cảm ứng",
            "l1_id": "601739",
            "l2_id": "984584",
            "slug": ""
        },
        {
            "id": "992520",
            "name": "Thời trang & Làm đẹp",
            "l1_id": "801928",
            "l2_id": "992392",
            "slug": ""
        },
        {
            "id": "992648",
            "name": "Giáo dục thai sản & tiền sản",
            "l1_id": "801928",
            "l2_id": "992392",
            "slug": ""
        },
        {
            "id": "992776",
            "name": "Thể thao & Thể hình",
            "l1_id": "801928",
            "l2_id": "992392",
            "slug": ""
        },
        {
            "id": "993032",
            "name": "Sách tư vấn",
            "l1_id": "801928",
            "l2_id": "992904",
            "slug": ""
        },
        {
            "id": "993160",
            "name": "Thiết bị Âm thanh & Video hội nghị",
            "l1_id": "601755",
            "l2_id": "830344",
            "slug": ""
        },
        {
            "id": "993288",
            "name": "Túi đựng máy tính bảng",
            "l1_id": "601739",
            "l2_id": "984584",
            "slug": ""
        },
        {
            "id": "993416",
            "name": "Cuộn giấy & khăn lau nhà bếp",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "993544",
            "name": "Khăn giấy & khăn ăn & khăn lau",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "993800",
            "name": "Đế đỡ bộ đồ ăn",
            "l1_id": "600024",
            "l2_id": "859272",
            "slug": ""
        },
        {
            "id": "993928",
            "name": "Nam châm",
            "l1_id": "604579",
            "l2_id": "872328",
            "slug": ""
        },
        {
            "id": "994056",
            "name": "Máy phay gỗ",
            "l1_id": "604579",
            "l2_id": "871560",
            "slug": ""
        },
        {
            "id": "994184",
            "name": "Bọc giày dùng một lần",
            "l1_id": "600001",
            "l2_id": "852232",
            "slug": ""
        },
        {
            "id": "994312",
            "name": "Giàn nhún",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "994440",
            "name": "Bộ tập tăng cường sức mạnh cho tay",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "994568",
            "name": "Bộ dây tập kháng lực",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "994696",
            "name": "Phụ kiện máy tập thể dục",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "994952",
            "name": "Thảm & miếng đệm làm mát",
            "l1_id": "600154",
            "l2_id": "808328",
            "slug": ""
        },
        {
            "id": "995080",
            "name": "Bộ điều chỉnh & Bảo vệ trang sức",
            "l1_id": "605248",
            "l2_id": "905608",
            "slug": ""
        },
        {
            "id": "995208",
            "name": "Túi đựng đồ vệ sinh",
            "l1_id": "824584",
            "l2_id": "902792",
            "slug": ""
        },
        {
            "id": "996616",
            "name": "Bộ đồ cho cặp đôi",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "996744",
            "name": "Bộ đồ cho gia đình",
            "l1_id": "601303",
            "l2_id": "601310",
            "slug": ""
        },
        {
            "id": "996872",
            "name": "Áo mưa",
            "l1_id": "601303",
            "l2_id": "601331",
            "slug": ""
        },
        {
            "id": "997000",
            "name": "Đồ chơi học ngôn ngữ",
            "l1_id": "604206",
            "l2_id": "859784",
            "slug": ""
        },
        {
            "id": "997128",
            "name": "Khoa học xã hội và nhân văn cho thiếu nhi",
            "l1_id": "801928",
            "l2_id": "989704",
            "slug": ""
        },
        {
            "id": "997256",
            "name": "Khoa học và công nghệ cho thiếu nhi",
            "l1_id": "801928",
            "l2_id": "989704",
            "slug": ""
        },
        {
            "id": "997512",
            "name": "Băng cassette",
            "l1_id": "801928",
            "l2_id": "997384",
            "slug": ""
        },
        {
            "id": "997640",
            "name": "CD",
            "l1_id": "801928",
            "l2_id": "997384",
            "slug": ""
        },
        {
            "id": "997768",
            "name": "Vinyl",
            "l1_id": "801928",
            "l2_id": "997384",
            "slug": ""
        },
        {
            "id": "997896",
            "name": "Dụng cụ tạo hình tay & dấu chân",
            "l1_id": "602284",
            "l2_id": "879112",
            "slug": ""
        },
        {
            "id": "998024",
            "name": "Gối cho con bú",
            "l1_id": "602284",
            "l2_id": "877832",
            "slug": ""
        },
        {
            "id": "998152",
            "name": "Trang phục",
            "l1_id": "602284",
            "l2_id": "877320",
            "slug": ""
        },
        {
            "id": "998280",
            "name": "Bàn thay tã",
            "l1_id": "602284",
            "l2_id": "878216",
            "slug": ""
        },
        {
            "id": "998408",
            "name": "Bàn trẻ em",
            "l1_id": "602284",
            "l2_id": "878216",
            "slug": ""
        },
        {
            "id": "998536",
            "name": "Bộ quà tặng",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "998664",
            "name": "Dây an toàn cho thai phụ & phụ kiện",
            "l1_id": "602284",
            "l2_id": "880008",
            "slug": ""
        },
        {
            "id": "998792",
            "name": "Dây an toàn & phụ kiện",
            "l1_id": "602284",
            "l2_id": "877576",
            "slug": ""
        },
        {
            "id": "998920",
            "name": "Túi xách trẻ em",
            "l1_id": "602284",
            "l2_id": "961928",
            "slug": ""
        },
        {
            "id": "999048",
            "name": "Kem",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "999176",
            "name": "Kẹo xốp",
            "l1_id": "700437",
            "l2_id": "915208",
            "slug": ""
        },
        {
            "id": "999304",
            "name": "Sữa",
            "l1_id": "700437",
            "l2_id": "809744",
            "slug": ""
        },
        {
            "id": "999432",
            "name": "Sữa chua & sản phẩm làm từ sữa lên men",
            "l1_id": "700437",
            "l2_id": "809744",
            "slug": ""
        },
        {
            "id": "999816",
            "name": "Thiết bị tập luyện cân bằng",
            "l1_id": "603014",
            "l2_id": "835336",
            "slug": ""
        },
        {
            "id": "1000072",
            "name": "Áp phích & tài liệu in",
            "l1_id": "600001",
            "l2_id": "852104",
            "slug": ""
        },
        {
            "id": "1000200",
            "name": "Máy lọc nước, máy lọc và bảo quản",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "1000328",
            "name": "vệ sinh cắm trại",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "1000456",
            "name": "Khăn che mặt & khẩu trang",
            "l1_id": "603014",
            "l2_id": "834824",
            "slug": ""
        },
        {
            "id": "1000584",
            "name": "Giày sandal thể theo",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "1000712",
            "name": "Giày đạp xe",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "1000840",
            "name": "Giày futsal",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "1000968",
            "name": "Giày trượt ván",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "1001096",
            "name": "Giày đi bộ",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "1001224",
            "name": "Áo bơi dài tay",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "1001352",
            "name": "Quần áo lót thể thao",
            "l1_id": "603014",
            "l2_id": "834568",
            "slug": ""
        },
        {
            "id": "1001480",
            "name": "Phụ kiện giày thể thao",
            "l1_id": "603014",
            "l2_id": "834696",
            "slug": ""
        },
        {
            "id": "1001864",
            "name": "Phụ kiện dụng cụ nấu nướng",
            "l1_id": "600024",
            "l2_id": "859144",
            "slug": ""
        },
        {
            "id": "1002120",
            "name": "Dụng cụ chải lông",
            "l1_id": "602118",
            "l2_id": "1001992",
            "slug": ""
        },
        {
            "id": "1002248",
            "name": "Đồ chơi",
            "l1_id": "602118",
            "l2_id": "1001992",
            "slug": ""
        },
        {
            "id": "1002376",
            "name": "Dụng cụ cho ăn",
            "l1_id": "602118",
            "l2_id": "1001992",
            "slug": ""
        },
        {
            "id": "1002504",
            "name": "Khuyên tai gia súc",
            "l1_id": "602118",
            "l2_id": "1001992",
            "slug": ""
        },
        {
            "id": "1002632",
            "name": "Lồng & phụ kiện",
            "l1_id": "602118",
            "l2_id": "1001992",
            "slug": ""
        },
        {
            "id": "1002760",
            "name": "Thức ăn",
            "l1_id": "602118",
            "l2_id": "1001992",
            "slug": ""
        },
        {
            "id": "1002888",
            "name": "Trang phục và mũ trùm đầu đi xe máy",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "1003016",
            "name": "Dầu xe máy",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "1003272",
            "name": "Chất chống đông và chất bôi trơn cho xe máy",
            "l1_id": "605196",
            "l2_id": "809616",
            "slug": ""
        },
        {
            "id": "1003400",
            "name": "Nhãn dán & phim cho xe máy",
            "l1_id": "605196",
            "l2_id": "940936",
            "slug": ""
        },
        {
            "id": "1003528",
            "name": "Giá đỡ & dây",
            "l1_id": "602118",
            "l2_id": "1001992",
            "slug": ""
        },
        {
            "id": "1003784",
            "name": "Chăm sóc cổ",
            "l1_id": "601450",
            "l2_id": "849160",
            "slug": ""
        },
        {
            "id": "1003912",
            "name": "Gậy chống",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "1004040",
            "name": "Máy kích thích điện",
            "l1_id": "700645",
            "l2_id": "924424",
            "slug": ""
        },
        {
            "id": "1004168",
            "name": "Bột tạo kiểu tóc",
            "l1_id": "601450",
            "l2_id": "848904",
            "slug": ""
        },
        {
            "id": "1004296",
            "name": "Sản phẩm khử mùi vùng kín",
            "l1_id": "601450",
            "l2_id": "849800",
            "slug": ""
        },
        {
            "id": "1004424",
            "name": "Xóa hình xăm",
            "l1_id": "601450",
            "l2_id": "848648",
            "slug": ""
        },
        {
            "id": "1004552",
            "name": "Chai khử trùng cầm tay",
            "l1_id": "601450",
            "l2_id": "849032",
            "slug": ""
        },
        {
            "id": "1004680",
            "name": "Nước tẩy sơn móng tay",
            "l1_id": "601450",
            "l2_id": "1086856",
            "slug": ""
        },
        {
            "id": "1004808",
            "name": "Bộ dụng cụ cạo",
            "l1_id": "601450",
            "l2_id": "849288",
            "slug": ""
        },
        {
            "id": "1004936",
            "name": "Phụ kiện cạo thủ công",
            "l1_id": "601450",
            "l2_id": "849288",
            "slug": ""
        },
        {
            "id": "1005064",
            "name": "Tấm lót giường thấm nước tiểu",
            "l1_id": "601450",
            "l2_id": "981128",
            "slug": ""
        },
        {
            "id": "1023112",
            "name": "Quạt cắm trại",
            "l1_id": "603014",
            "l2_id": "835464",
            "slug": ""
        },
        {
            "id": "2166800",
            "name": "Blind box",
            "l1_id": "951432",
            "l2_id": "953352",
            "slug": ""
        },
        {
            "id": "2344848",
            "name": "DVD",
            "l1_id": "801928",
            "l2_id": "997384",
            "slug": ""
        },
        {
            "id": "2344976",
            "name": "VHS",
            "l1_id": "801928",
            "l2_id": "997384",
            "slug": ""
        }
    ]
},
    rankTypes: {
    1: "doanh_thu_cao",
    2: "ty_le_chuyen_doi_cao",
    3: "ty_le_tuong_tac_cao",
    4: "ty_le_hoan_thanh_cao"
},
    topSellingTabs: {
    video: {
        label: "Video",
        slug: "video",
        endpoint: "/api/v1/pop/product_growth/top_selling/product/video"
    },
    live: {
        label: "LIVE",
        slug: "live",
        endpoint: "/api/v1/pop/product_growth/top_selling/product/live"
    },
    prod_card: {
        label: "Thẻ SP",
        slug: "prodcard",
        endpoint: "/api/v1/pop/product_growth/top_selling/product/prod_card"
    },
    content: {
        label: "Creator",
        slug: "content",
        endpoint: "/api/v1/pop/product_growth/top_selling/product/content"
    },
    new: {
        label: "Hàng mới",
        slug: "new",
        endpoint: "/api/v1/pop/product_growth/top_selling/product/new"
    }
},
    presets: {
    market: {
        slug: "market",
        label: "Market"
    },
    l1Scan: {
        slug: "l1-scan",
        label: "L1 Scan"
    },
    l2Scan: {
        slug: "l2-scan",
        label: "L2 Scan"
    },
    deepScan: {
        slug: "deep-scan",
        label: "Deep Scan"
    }
},
  };

  window.SELLER_SCRAPER_CONFIG = SELLER_SCRAPER_CONFIG;
})();
