export type ProductCategory =
  | 'laptop'
  | 'all-in-one'
  | 'desktop'
  | 'server'
  | 'printer'
  | 'aksesoris';

export interface Product {
  id: string;
  sku: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  categoryLabel: string;
  brand: string;
  price: number;
  originalPrice?: number;
  isTkdn?: boolean;
  tkdnScore?: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  promoLabel?: string;
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    display?: string;
    gpu?: string;
    os?: string;
    ports?: string;
  };
  warranty: string;
  inStock: boolean;
  image: string;
  tokopediaUrl: string;
  shopeeUrl: string;
}

export interface CategoryMeta {
  id: ProductCategory;
  number: string;
  title: string;
  description: string;
  countLabel: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  id: string;
  category: 'order' | 'shipping' | 'warranty' | 'b2b';
  categoryLabel: string;
  question: string;
  answer: string;
}

export const STORE_INFO = {
  name: 'Technosify',
  domain: 'Technosify.id',
  slogan: 'Tech Stars you can trust',
  legalName: 'CV. Technosify Digital Solusindo',
  city: 'Surabaya',
  province: 'Jawa Timur',
  address:
    'Ruko Mangga Dua, Blok A6 No. 3, Jl. Jagir Wonokromo, Jagir, Kec. Wonokromo, Kota Surabaya, Jawa Timur 60244',
  phone: '0819-5350-8400',
  whatsappRaw: '6281953508400',
  email: 'sales@technosify.id',
  operatingHours:
    'Senin – Jumat: 08.30 – 17.00 WIB | Sabtu: 08.30 – 13.00 WIB (Minggu & Hari Besar Libur)',
  stats: {
    rating: '5.0',
    reviews: '1.100+ ulasan',
    sold: '5.730',
    soldLabel: 'produk terjual',
    etalase: '48',
    etalaseLabel: 'etalase aktif',
  },
  socials: {
    tokopedia: 'https://www.tokopedia.com/technosify',
    shopee: 'https://shopee.co.id/technosify_id',
    instagram: 'https://instagram.com/technosify.id',
    googleMaps: 'https://maps.google.com/?q=Technosify+Ruko+Mangga+Dua+Surabaya',
  },
  brandPartners: [
    'ASUS',
    'Lenovo',
    'Acer',
    'Dell',
    'HP',
    'MSI',
    'Samsung',
    'Epson',
    'Canon',
    'Brother',
    'Huawei',
    'Apple',
  ],
  pillars: [
    {
      title: 'BISA TERBIT FAKTUR PAJAK',
      desc: 'Melayani pengadaan PKP & PPN 11% resmi untuk korporasi dan instansi.',
    },
    {
      title: '100% ORIGINAL PRODUCT',
      desc: 'Jaminan produk baru & bersegel resmi distributor Indonesia.',
    },
    {
      title: 'CERTIFIED BY BRAND',
      desc: 'Authorized Partner ASUS, Lenovo, Acer, Dell, Brother & APC.',
    },
    {
      title: 'PENGIRIMAN CEPAT',
      desc: 'Order sebelum cut-off dikirim di hari yang sama & opsi Instant Kurir.',
    },
    {
      title: 'AFTER SALES SUPPORT',
      desc: 'Pendampingan klaim garansi resmi dan konsultasi teknis responsif.',
    },
  ],
  shippingSchedule: [
    {
      days: 'SENIN - JUMAT',
      rule: 'Pesanan yang masuk sebelum jam 14.00 akan dikirim di hari yang sama, di atas jam 14.00 dikirim besoknya.',
      cutoff: 'Cut-off 14.00 WIB',
    },
    {
      days: 'SABTU',
      rule: 'Pesanan yang masuk sebelum jam 11.00 akan dikirim di hari yang sama, di atas jam 11.00 dikirim hari Senin.',
      cutoff: 'Cut-off 11.00 WIB',
    },
  ],
  packagingRules: [
    {
      type: 'Pengiriman Same Day / Instant',
      detail:
        'Hanya menggunakan plastik pelindung TANPA BUBBLEWRAP agar kurir instan mudah membawa unit.',
      badge: 'GoSend / GrabExpress',
    },
    {
      type: 'Pengiriman Standar / Reguler / Kargo',
      detail:
        'Seluruh produk dilapisi BUBBLEWRAP GRATIS! (Kecuali produk voucher dan non-elektronik). Untuk keamanan ekstra ke luar kota, kami menyediakan etalase tambahan Packing Kayu (Rp65.000 - Rp148.766) & Bubble Wrap Ekstra (Rp5.000).',
      badge: 'Free Bubblewrap',
    },
  ],
  attentionRules: [
    {
      number: '1',
      title: 'Cek Ketersediaan Barang Terlebih Dahulu',
      description:
        'Karena perputaran stok korporasi & marketplace cukup cepat, silakan konfirmasi ketersediaan tipe melalui chat WhatsApp atau Tokopedia sebelum checkout.',
    },
    {
      number: '2',
      title: 'Wajib Video Unboxing Tanpa Jeda',
      description:
        'Tanpa video unboxing utuh dari awal paket dibuka hingga pengetesan nyala, kami tidak menerima komplain atau pengembalian barang.',
    },
    {
      number: '3',
      title: 'Solusi Cepat via Chat Resmi',
      description:
        'Jika ada masalah teknis atau ketidaksesuaian pesanan, segera hubungi admin kami melalui chat WhatsApp / Tokopedia untuk penyelesaian terbaik.',
    },
  ],
};

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'laptop',
    number: '01',
    title: 'Laptop',
    description: 'ThinkPad, IdeaPad, Yoga, dan ExpertBook untuk kerja harian.',
    countLabel: '9 produk unggulan',
  },
  {
    id: 'all-in-one',
    number: '02',
    title: 'All in One',
    description: 'Lenovo, ASUS, dan Acer. Rapi untuk meja kasir, resepsionis, dan kelas.',
    countLabel: '7 produk unggulan',
  },
  {
    id: 'desktop',
    number: '03',
    title: 'Desktop',
    description: 'IdeaCentre Tower, ExpertCenter, dan Veriton lengkap dengan monitor.',
    countLabel: '5 produk unggulan',
  },
  {
    id: 'server',
    number: '04',
    title: 'Server',
    description: 'Acer Altos tower & rack server Xeon ECC untuk kantor dan UKM.',
    countLabel: '3 produk unggulan',
  },
  {
    id: 'printer',
    number: '05',
    title: 'Printer',
    description: 'Ink tank dan laser toner Brother & Epson untuk dokumen kantor.',
    countLabel: '3 produk unggulan',
  },
  {
    id: 'aksesoris',
    number: '06',
    title: 'Aksesoris & Proyektor',
    description: 'UPS APC, Monitor Touch Dell, dan Proyektor TKDN Acer.',
    countLabel: '3 produk unggulan',
  },
];

export const PRODUCTS: Product[] = [
  // === 4 FEATURED HERO PRODUCTS MATCHING IMAGE.PNG ===
  {
    id: 'lenovo-thinkpad-e14-gen8-bfid',
    sku: '104146583399',
    name: 'Lenovo ThinkPad E14 Gen 8 BFID Ryzen AI 5 430 512GB 16GB DDR5 Win 11 Pro',
    shortName: 'Lenovo ThinkPad E14 Gen 8',
    category: 'laptop',
    categoryLabel: 'LAPTOP',
    brand: 'Lenovo',
    price: 31280055,
    isFeatured: true,
    isPopular: true,
    promoLabel: 'Bonus Tas Resmi',
    specs: {
      processor: 'AMD Ryzen™ AI 5 430 Processor with Ryzen AI NPU',
      ram: '16GB DDR5 Dual-Channel SO-DIMM (Upgradable)',
      storage: '512GB SSD M.2 PCIe® 4.0x4 NVMe® Opal 2.0',
      display: '14.0" WUXGA (1920x1200) IPS 300nits Anti-glare 16:10',
      gpu: 'AMD Radeon™ 840M Integrated Graphics',
      os: 'Windows 11 Pro 64-bit Original',
    },
    warranty: 'Garansi Resmi Lenovo Indonesia 3 Tahun Onsite Premier Support',
    inStock: true,
    image: '/products/tokped_104146583399.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/lenovo-thinkpad-e14-gen-8-bfid-laptop-ryzen-ai-5-430-512gb-16gb-ddr5-radeon-840m-14-wuxga-windows-11-pro-3-year-warranty-bag-1738284660',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'lenovo-ideacentre-aio-24irh9-y0id',
    sku: '103993547688',
    name: 'Lenovo IdeaCentre AIO 24IRH9 Y0ID Core 7 240H 1TB SSD 16GB DDR5 23.8" FHD',
    shortName: 'Lenovo IdeaCentre AIO 24IRH9',
    category: 'all-in-one',
    categoryLabel: 'ALL IN ONE',
    brand: 'Lenovo',
    price: 24295856,
    isFeatured: true,
    isPopular: true,
    promoLabel: 'Include Office 2024',
    specs: {
      processor: 'Intel® Core™ 7 240H (10 Cores, 16 Threads up to 5.2GHz)',
      ram: '16GB DDR5-5200MHz SO-DIMM',
      storage: '1TB SSD M.2 2280 PCIe® 4.0x4 NVMe®',
      display: '23.8" FHD (1920x1080) IPS 99% sRGB Three-side Borderless',
      gpu: 'Intel® Integrated Graphics',
      os: 'Windows 11 Home + Microsoft Office Home 2024 + Keyboard Mouse',
    },
    warranty: 'Garansi Resmi Lenovo Indonesia 3 Tahun Onsite',
    inStock: true,
    image: '/products/tokped_103993547688.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/lenovo-ideacentre-aio-24irh9-y0id-all-in-one-intel-core-7-240h-1tb-ssd-16gb-ddr5',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'lenovo-ideacentre-tower-14irr9-6tid',
    sku: '103993547713',
    name: 'Lenovo IdeaCentre Tower 14IRR9 6TID Desktop PC Core i5-14400 512GB 8GB DDR5 + 21.5" Monitor',
    shortName: 'Lenovo IdeaCentre Tower 14IRR9',
    category: 'desktop',
    categoryLabel: 'DESKTOP',
    brand: 'Lenovo',
    price: 16199155,
    isFeatured: true,
    isPopular: true,
    promoLabel: 'Lengkap Monitor 21.5"',
    specs: {
      processor: 'Intel® Core™ i5-14400 (10 Cores, 16 Threads up to 4.7GHz)',
      ram: '8GB UDIMM DDR5-4800MHz (2 Slots up to 32GB)',
      storage: '512GB SSD M.2 PCIe® 4.0x4 NVMe®',
      display: 'Termasuk Monitor Lenovo 21.5" FHD + Keyboard & Mouse USB',
      gpu: 'Intel® UHD Graphics 730',
      os: 'Windows 11 Home Original',
    },
    warranty: 'Garansi Resmi Lenovo Indonesia 1 Tahun Onsite',
    inStock: true,
    image: '/products/tokped_103993547713.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/lenovo-ideacentre-tower-14irr9-6tid-desktop-pc-i5-14400-512gb-8gb-ddr5',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'asus-aio-expertcenter-p400-p440vak',
    sku: '104150138698',
    name: 'ASUS ExpertCenter AIO P400 P440VAK-B5152WS Core 5 210H 512GB SSD 16GB DDR5 23.8" FHD',
    shortName: 'ASUS ExpertCenter AIO P440VAK',
    category: 'all-in-one',
    categoryLabel: 'ALL IN ONE',
    brand: 'ASUS',
    price: 17893740,
    isFeatured: true,
    promoLabel: 'Windows 11 + OHS 2024',
    specs: {
      processor: 'Intel® Core™ 5 210H Processor (up to 4.8GHz)',
      ram: '16GB DDR5 SO-DIMM Memory',
      storage: '512GB M.2 NVMe™ PCIe® 4.0 SSD',
      display: '23.8" FHD (1920x1080) IPS Wide View Anti-Glare 100% sRGB',
      gpu: 'Intel® Integrated Graphics',
      os: 'Windows 11 Home + Office Home 2024 + Keyboard & Mouse',
    },
    warranty: 'Garansi Resmi ASUS Indonesia 2 Tahun Onsite',
    inStock: true,
    image: '/products/tokped_104150138698.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/asus-expertcenter-p400-p440vak-b5152ws-aio-core-5-210h-512gb-ssd-16gb-ddr5',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },

  // === MORE LAPTOPS (TKDN & COMMERCIAL) ===
  {
    id: 'asus-expertbook-bg1409cva-tkdn',
    sku: '104402649462',
    name: 'ASUS ExpertBook BG1409CVA-S65151WR TKDN Core 5 120U 512GB 16GB DDR5 14" FHD Win 11',
    shortName: 'ASUS ExpertBook BG1409CVA (TKDN)',
    category: 'laptop',
    categoryLabel: 'LAPTOP TKDN',
    brand: 'ASUS',
    price: 21597455,
    isTkdn: true,
    tkdnScore: 'TKDN + BMP > 40%',
    isPopular: true,
    promoLabel: 'TKDN Ready + Bonus Tas',
    specs: {
      processor: 'Intel® Core™ 5 Processor 120U (10 Cores, up to 5.0 GHz)',
      ram: '16GB DDR5 SO-DIMM',
      storage: '512GB M.2 NVMe™ PCIe® 4.0 SSD',
      display: '14.0" FHD (1920 x 1080) 16:9 Anti-glare IPS-level',
      gpu: 'Intel® Graphics',
      os: 'Windows 11 Home + Office 365 + Backpack & Type-C Cable',
    },
    warranty: 'Garansi Resmi ASUS Commercial 3 Tahun (1 Tahun ADP)',
    inStock: true,
    image: '/products/tokped_104402649462.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/asus-expertbook-bg1409cva-s65151wr-laptop-core-5-120u-512gb-16gb-ddr5-intel-graphics-14-fhd-windows-11-home-office-365-trial-3-year-warranty-1-year-adp-bag-backpack-type-c-to-c-cable-1738363174846170535',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'asus-expertbook-p5-p5406cca',
    sku: '103925322805',
    name: 'ASUS ExpertBook P5 P5406CCA SF7150WS Core Ultra 7 258V 512GB 16GB LPDDR5X Copilot+ PC',
    shortName: 'ASUS ExpertBook P5 Ultra 7',
    category: 'laptop',
    categoryLabel: 'LAPTOP',
    brand: 'ASUS',
    price: 21174162,
    isPopular: true,
    promoLabel: 'AI Copilot+ PC',
    specs: {
      processor: 'Intel® Core™ Ultra 7 258V (Lunar Lake NPU 47 TOPS)',
      ram: '16GB LPDDR5X 8533MHz Onboard',
      storage: '512GB M.2 PCIe 4.0 NVMe SSD',
      display: '14.0" WQXGA (2560 x 1600) 144Hz Anti-glare 400 nits',
      gpu: 'Intel® Arc™ 140V GPU',
      os: 'Windows 11 Home + Office Home & Student',
    },
    warranty: 'Garansi Resmi ASUS Indonesia 3 Tahun Global',
    inStock: true,
    image: '/products/tokped_103925322805.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/asus-expertbook-p5-p5406cca-sf7150ws-laptop-intel-core-ultra-7-258v',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'asus-expertbook-p3-p3406ccap',
    sku: '103925323150',
    name: 'ASUS ExpertBook P3 P3406CCAP LY7152WS Core Ultra 7 255H 512GB 16GB DDR5 14" WUXGA',
    shortName: 'ASUS ExpertBook P3 Ultra 7',
    category: 'laptop',
    categoryLabel: 'LAPTOP',
    brand: 'ASUS',
    price: 19163581,
    specs: {
      processor: 'Intel® Core™ Ultra 7 255H Processor with AI NPU',
      ram: '16GB DDR5 5600MHz SO-DIMM',
      storage: '512GB M.2 NVMe PCIe 4.0 SSD',
      display: '14.0" WUXGA (1920x1200) 16:10 Anti-Glare 300nits',
      gpu: 'Intel® Arc™ Graphics',
      os: 'Windows 11 Home + OHS 2024',
    },
    warranty: 'Garansi Resmi ASUS Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_103925323150.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/asus-expertbook-p3-p3406ccap-ly7152ws-laptop-intel-core-ultra-7-255h',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'lenovo-yoga-7i-2in1-aura-8gid',
    sku: '103581492081',
    name: 'Lenovo Yoga 7i 2-in-1 Aura Edition 14IPH11 8GID Core Ultra 7 355 512GB 16GB OLED Touch',
    shortName: 'Lenovo Yoga 7i 2-in-1 Aura Edition',
    category: 'laptop',
    categoryLabel: 'LAPTOP 2-IN-1',
    brand: 'Lenovo',
    price: 26994269,
    isPopular: true,
    promoLabel: 'Aura Edition + Pen',
    specs: {
      processor: 'Intel® Core™ Ultra 7 355 Processor with AI Boost',
      ram: '16GB LPDDR5X-7467MHz Dual Channel',
      storage: '512GB SSD M.2 PCIe 4.0 NVMe',
      display: '14" 2.8K OLED Touchscreen 120Hz 100% DCI-P3 360° Flip',
      gpu: 'Intel® Integrated Arc Graphics',
      os: 'Windows 11 Home + Office + Lenovo Digital Pen',
    },
    warranty: 'Garansi Resmi Lenovo Indonesia 3 Tahun Premium Care + ADP',
    inStock: true,
    image: '/products/tokped_103581492081.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/lenovo-yoga-7i-2-in-1-aura-edition-14iph11-8gid-laptop-intel-core-ultra-7',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'asus-expertbook-b1-tkdn-bg1408cva',
    sku: '16160117613',
    name: 'ASUS ExpertBook B1 TKDN BG1408CVA-EB5850X Core i5-1335U 512GB 8GB Win 11',
    shortName: 'ASUS ExpertBook B1 (TKDN)',
    category: 'laptop',
    categoryLabel: 'LAPTOP TKDN',
    brand: 'ASUS',
    price: 15536155,
    isTkdn: true,
    tkdnScore: 'Sertifikat TKDN Resmi',
    promoLabel: 'TKDN Instansi',
    specs: {
      processor: 'Intel® Core™ i5-1335U (10 Cores, up to 4.6 GHz)',
      ram: '8GB DDR4 (Expandable up to 40GB)',
      storage: '512GB M.2 NVMe™ PCIe® 4.0 SSD',
      display: '14.0" FHD (1920 x 1080) Anti-glare MIL-STD 810H',
      gpu: 'Intel® UHD Graphics',
      os: 'Windows 11 Home / Pro Commercial',
    },
    warranty: 'Garansi Resmi ASUS Indonesia 3 Tahun + Sertifikat TKDN',
    inStock: true,
    image: '/products/tokped_16160117613.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/asus-expertbook-b1-tkdn-bg1408cva-eb5850x-i5-1335u-512gb-8gb',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'acer-travelmate-p414-tkdn',
    sku: '14072935671',
    name: 'TKDN Acer TravelMate P414 TMP414-002 Laptop dengan Sertifikat Core i7 512GB SSD 16GB',
    shortName: 'Acer TravelMate P414 (TKDN)',
    category: 'laptop',
    categoryLabel: 'LAPTOP TKDN',
    brand: 'Acer',
    price: 23640903,
    isTkdn: true,
    tkdnScore: 'TKDN + BMP > 40%',
    promoLabel: 'Dengan Sertifikat TKDN',
    specs: {
      processor: 'Intel® Core™ i7 Commercial Processor',
      ram: '16GB DDR4 Memory',
      storage: '512GB PCIe NVMe SSD',
      display: '14.0" Full HD IPS ComfyView Anti-Glare',
      gpu: 'Intel® Iris® Xe Graphics',
      os: 'Windows 11 Original + Tas Acer',
    },
    warranty: 'Garansi Resmi Acer Indonesia 3 Tahun Parts & Labor',
    inStock: true,
    image: '/products/tokped_14072935671.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/tkdn-acer-travelmate-p414-tmp414-002-notebook-laptop-dengan-sertifikat-core-i7',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'acer-travelmate-p214-i7',
    sku: '9376393830',
    name: 'Acer TravelMate P214 (025) Laptop Notebook Core i7 512GB SSD 8GB RAM Windows 11',
    shortName: 'Acer TravelMate P214 Core i7',
    category: 'laptop',
    categoryLabel: 'LAPTOP',
    brand: 'Acer',
    price: 15575655,
    isTkdn: true,
    tkdnScore: 'TKDN Certified',
    specs: {
      processor: 'Intel® Core™ i7-1165G7 (up to 4.7GHz)',
      ram: '8GB DDR4 Dual-Channel',
      storage: '512GB M.2 NVMe SSD',
      display: '14.0" HD/FHD Anti-Glare Business Display',
      gpu: 'Intel® Iris® Xe Graphics',
      os: 'Windows 11 Home Single Language',
    },
    warranty: 'Garansi Resmi Acer Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_9376393830.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/acer-travelmate-p214-025-laptop-notebook-core-i7-512-gb-8-windows',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'dell-inspiron-3511-i5',
    sku: '16027528173',
    name: 'Laptop Notebook Dell Inspiron 3511 Core i5 1TB + SSD 8GB RAM Windows 11 + OHS',
    shortName: 'Dell Inspiron 3511 Core i5',
    category: 'laptop',
    categoryLabel: 'LAPTOP',
    brand: 'Dell',
    price: 9544595,
    specs: {
      processor: 'Intel® Core™ i5-1135G7 Processor',
      ram: '8GB DDR4 3200MHz',
      storage: '1TB Storage + M.2 NVMe Slot',
      display: '15.6" FHD (1920 x 1080) Anti-glare LED Backlight Narrow Border',
      gpu: 'Intel® UHD / Iris Xe Graphics',
      os: 'Windows 11 Home + Office Home & Student Original',
    },
    warranty: 'Garansi Resmi Dell Indonesia 1 Tahun ProSupport',
    inStock: true,
    image: '/products/tokped_16027528173.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/laptop-notebook-dell-inspiron-3511-i5-1-tb-8-win-ohs',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },

  // === ALL IN ONE PC (COMMERCIAL & TKDN) ===
  {
    id: 'acer-veriton-z4-aio-vz4-057',
    sku: '104207565679',
    name: 'Acer Veriton Z4 AIO VZ4-057 All in One Core i3-14100 512GB SSD 8GB DDR5 23.8" FHD',
    shortName: 'Acer Veriton Z4 VZ4-057 AIO',
    category: 'all-in-one',
    categoryLabel: 'ALL IN ONE TKDN',
    brand: 'Acer',
    price: 20761465,
    isTkdn: true,
    tkdnScore: 'TKDN Ready Instansi',
    promoLabel: 'TKDN Gen-14',
    specs: {
      processor: 'Intel® Core™ i3-14100 (14th Gen, up to 4.7GHz)',
      ram: '8GB DDR5 SO-DIMM',
      storage: '512GB PCIe Gen4 NVMe SSD',
      display: '23.8" Full HD (1920x1080) IPS Built-in Webcam',
      gpu: 'Intel® UHD Graphics 730',
      os: 'Windows 11 + Keyboard & Mouse Acer',
    },
    warranty: 'Garansi Resmi Acer Indonesia 3 Tahun Onsite',
    inStock: true,
    image: '/products/tokped_104207565679.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/acer-veriton-z4-aio-vz4-057-all-in-one-i3-14100-512gb-ssd-8gb-ddr5',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'tkdn-acer-veriton-z4-012-i5',
    sku: '15857712283',
    name: 'TKDN Acer Veriton Z4 012 All in One AIO Core i5-13400 512GB SSD 8GB RAM 23.8" FHD',
    shortName: 'Acer Veriton Z4 012 Core i5 (TKDN)',
    category: 'all-in-one',
    categoryLabel: 'ALL IN ONE TKDN',
    brand: 'Acer',
    price: 16852155,
    isTkdn: true,
    tkdnScore: 'Sertifikat TKDN Resmi',
    isPopular: true,
    promoLabel: 'Best Seller TKDN AIO',
    specs: {
      processor: 'Intel® Core™ i5-13400 (10 Cores, 16 Threads)',
      ram: '8GB DDR4 / DDR5 Memory',
      storage: '512GB M.2 NVMe SSD',
      display: '23.8" FHD IPS Flicker-less Adjustable Stand',
      gpu: 'Intel® UHD Graphics 730',
      os: 'Windows 11 Home / Pro + Keyboard Mouse',
    },
    warranty: 'Garansi Resmi Acer Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_15857712283.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/tkdn-acer-veriton-z4-012-all-in-one-aio-core-i5-13400-512-gb-8-gb-ram',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'tkdn-lenovo-neo-50a-50id-aio',
    sku: '102573303727',
    name: 'TKDN Lenovo ThinkCentre Neo 50a 50ID AIO Core i5-13420H 512GB 8GB DDR5 23.8" FHD',
    shortName: 'Lenovo Neo 50a 50ID AIO (TKDN)',
    category: 'all-in-one',
    categoryLabel: 'ALL IN ONE TKDN',
    brand: 'Lenovo',
    price: 16978484,
    isTkdn: true,
    tkdnScore: 'TKDN Certified Lenovo',
    promoLabel: 'TKDN Korporasi',
    specs: {
      processor: 'Intel® Core™ i5-13420H (8 Cores, 12 Threads up to 4.6GHz)',
      ram: '8GB DDR5-5200MHz SO-DIMM',
      storage: '512GB SSD M.2 PCIe 4.0 NVMe',
      display: '23.8" FHD (1920x1080) IPS Anti-glare',
      gpu: 'Intel® UHD Graphics',
      os: 'Windows 11 Original + Keyboard & Mouse',
    },
    warranty: 'Garansi Resmi Lenovo Indonesia 3 Tahun Onsite',
    inStock: true,
    image: '/products/tokped_102573303727.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/tkdn-lenovo-neo-50a-50id-aio-i5-13420h-512gb-8gb-ddr5-intel-uhd-graphics-23-8',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'lenovo-thinkcentre-neo-50a-gen6-07id',
    sku: '104147086273',
    name: 'Lenovo ThinkCentre Neo 50a Gen 6 07ID AIO Core Ultra 5 226V 512GB 16GB LPDDR5X',
    shortName: 'Lenovo ThinkCentre Neo 50a Gen 6',
    category: 'all-in-one',
    categoryLabel: 'ALL IN ONE',
    brand: 'Lenovo',
    price: 23819755,
    specs: {
      processor: 'Intel® Core™ Ultra 5 226V with Intel AI Boost NPU',
      ram: '16GB LPDDR5X-8533MHz',
      storage: '512GB SSD M.2 PCIe 4.0 NVMe',
      display: '23.8" FHD IPS 99% sRGB Harman Audio',
      gpu: 'Intel® Arc™ 130V GPU',
      os: 'Windows 11 Pro / Home + Keyboard Mouse',
    },
    warranty: 'Garansi Resmi Lenovo Indonesia 3 Tahun Onsite',
    inStock: true,
    image: '/products/tokped_104147086273.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/lenovo-thinkcentre-neo-50a-gen-6-07id-aio-ultra-5-226v-512gb-16gb',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'tkdn-msi-pro-ap242id-aio-i7',
    sku: '13590648328',
    name: 'TKDN AIO MSI Pro AP242ID APID-03 All in One Core i7-12700 512GB SSD 8GB DDR5 23.8"',
    shortName: 'MSI Pro AP242ID Core i7 (TKDN)',
    category: 'all-in-one',
    categoryLabel: 'ALL IN ONE TKDN',
    brand: 'MSI',
    price: 21336655,
    isTkdn: true,
    tkdnScore: 'TKDN Resmi MSI',
    promoLabel: 'TKDN Ready',
    specs: {
      processor: 'Intel® Core™ i7-12700 (12 Cores, 20 Threads)',
      ram: '8GB DDR5 Memory',
      storage: '512GB M.2 PCIe NVMe SSD',
      display: '23.8" FHD IPS Eye-Care Anti-Flicker',
      gpu: 'Intel® UHD Graphics 770',
      os: 'Windows 11 + Webcam + Keyboard Mouse',
    },
    warranty: 'Garansi Resmi MSI Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_13590648328.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/tkdn-aio-msi-pro-ap242id-apid-03-all-in-one-core-i7-12700-512-gb-8-gb-ddr5',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'dell-optiplex-3280-aio-i3',
    sku: '7140380771',
    name: 'Dell OptiPlex 3280 AIO All In One Core i3 512GB SSD 8GB RAM 21.5" FHD',
    shortName: 'Dell OptiPlex 3280 AIO',
    category: 'all-in-one',
    categoryLabel: 'ALL IN ONE',
    brand: 'Dell',
    price: 9837655,
    specs: {
      processor: 'Intel® Core™ i3-10100T Processor',
      ram: '8GB DDR4 Memory',
      storage: '512GB M.2 PCIe NVMe SSD',
      display: '21.5" FHD (1920x1080) IPS Anti-Glare',
      gpu: 'Intel® UHD Graphics',
      os: 'Windows 10/11 + Dell Wired Keyboard & Mouse',
    },
    warranty: 'Garansi Resmi Dell ProSupport',
    inStock: true,
    image: '/products/tokped_7140380771.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/dell-optiplex-3280-aio-all-in-one-i3-512-gb-8-gb',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },

  // === DESKTOP TOWER PC ===
  {
    id: 'lenovo-ideacentre-tower-17ias10-32id',
    sku: '104161339862',
    name: 'Lenovo IdeaCentre Tower 17IAS10 32ID Desktop PC Core Ultra 5 225 512GB SSD 8GB DDR5',
    shortName: 'Lenovo IdeaCentre Tower 17IAS10',
    category: 'desktop',
    categoryLabel: 'DESKTOP',
    brand: 'Lenovo',
    price: 16412355,
    specs: {
      processor: 'Intel® Core™ Ultra 5 225 Desktop Processor with NPU',
      ram: '8GB DDR5-5600MHz UDIMM',
      storage: '512GB SSD M.2 PCIe 4.0 NVMe',
      display: 'Termasuk Monitor Lenovo 21.5" FHD + Keyboard Mouse',
      gpu: 'Intel® Integrated Graphics',
      os: 'Windows 11 Home + Office Home 2024',
    },
    warranty: 'Garansi Resmi Lenovo Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_104161339862.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/lenovo-ideacentre-tower-17ias10-32id-desktop-pc-intel-core-ultra-5-225',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'asus-expertcenter-pg500mv-585wr',
    sku: '103927467205',
    name: 'ASUS ExpertCenter Desktop PC PG500MV 585WR Core 5 210H 512GB SSD 8GB DDR5 + Monitor',
    shortName: 'ASUS ExpertCenter PG500MV Core 5',
    category: 'desktop',
    categoryLabel: 'DESKTOP',
    brand: 'ASUS',
    price: 19269401,
    specs: {
      processor: 'Intel® Core™ 5 210H Processor',
      ram: '8GB DDR5 UDIMM',
      storage: '512GB M.2 NVMe PCIe 4.0 SSD',
      display: 'Termasuk Monitor ASUS 21.5" FHD + Keyboard & Mouse',
      gpu: 'Intel® UHD Graphics',
      os: 'Windows 11 Home Original',
    },
    warranty: 'Garansi Resmi ASUS Commercial 3 Tahun Onsite',
    inStock: true,
    image: '/products/tokped_103927467205.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/asus-expertcenter-desktop-pc-pg500mv-585wr-core-5-210h-512gb-8gb-ddr5',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'asus-expertcenter-tkdn-pg500mv-385wr',
    sku: '104150138443',
    name: 'ASUS ExpertCenter TKDN PG500MV-385WR Desktop PC Core 3 100U 512GB 8GB DDR5 + 21.5" Screen',
    shortName: 'ASUS ExpertCenter PG500MV (TKDN)',
    category: 'desktop',
    categoryLabel: 'DESKTOP TKDN',
    brand: 'ASUS',
    price: 16624155,
    isTkdn: true,
    tkdnScore: 'TKDN Certified ASUS',
    promoLabel: 'TKDN Desktop Set',
    specs: {
      processor: 'Intel® Core™ 3 100U Processor (up to 4.7GHz)',
      ram: '8GB DDR5 Memory',
      storage: '512GB M.2 NVMe PCIe 4.0 SSD',
      display: 'Termasuk Monitor ASUS 21.5" FHD + Keyboard Mouse',
      gpu: 'Intel® Graphics',
      os: 'Windows 11 Home Original',
    },
    warranty: 'Garansi Resmi ASUS Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_104150138443.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/asus-expertcenter-tkdn-pg500mv-385wr-desktop-pc-core-3-100u-512gb-8gb-ddr5',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'tkdn-acer-veriton-m-tower-i7',
    sku: '14894140897',
    name: 'TKDN Acer Veriton M Desktop PC Tower Core i7-12700 256GB SSD + 1TB HDD 16GB RAM + Monitor',
    shortName: 'Acer Veriton M Tower Core i7 (TKDN)',
    category: 'desktop',
    categoryLabel: 'DESKTOP TKDN',
    brand: 'Acer',
    price: 26888608,
    isTkdn: true,
    tkdnScore: 'TKDN + BMP > 40%',
    isPopular: true,
    promoLabel: 'TKDN Power Workstation',
    specs: {
      processor: 'Intel® Core™ i7-12700 (12 Cores, 20 Threads up to 4.9GHz)',
      ram: '16GB DDR4 Memory',
      storage: '256GB NVMe SSD + 1TB SATA HDD 7200RPM',
      display: 'Termasuk Monitor Acer 21.5" FHD + Keyboard Mouse',
      gpu: 'Dedicated / Integrated Graphics',
      os: 'Windows 11 Home SL Original',
    },
    warranty: 'Garansi Resmi Acer Indonesia 3 Tahun Onsite',
    inStock: true,
    image: '/products/tokped_14894140897.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/tkdn-acer-veriton-m-desktop-pc-tower-core-i7-12700-256-gb-ssd-1-tb-hdd',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },

  // === ENTERPRISE SERVERS ===
  {
    id: 'acer-altos-t1-f6-xeon-e2334',
    sku: '104208778804',
    name: 'Acer Altos T1-F6 Tower Server T1-F6/05 Intel Xeon E-2334 1TB SSD 16GB ECC DDR4 + 23.8" Monitor',
    shortName: 'Acer Altos T1-F6 Server Xeon E-2334',
    category: 'server',
    categoryLabel: 'SERVER TKDN',
    brand: 'Acer',
    price: 31438755,
    isTkdn: true,
    tkdnScore: 'TKDN Server Resmi',
    isPopular: true,
    promoLabel: 'Server Tower TKDN',
    specs: {
      processor: 'Intel® Xeon® E-2334 (4 Cores, 8 Threads 3.4GHz up to 4.8GHz)',
      ram: '16GB ECC DDR4 Memory (Error-Correcting Code)',
      storage: '1TB Enterprise SSD Storage',
      display: 'Termasuk Monitor Acer 23.8" FHD + DVDRW + Keyboard Mouse',
      ports: 'Dual Gigabit Ethernet LAN + Remote Management',
      os: '500W 80 PLUS Power Supply',
    },
    warranty: 'Garansi Resmi Acer Altos Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_104208778804.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/acer-altos-t1-f6-tower-server-t1-f6-05-intel-xeon-e2334-1tb-ssd-16gb-ecc-ddr4',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'acer-altos-t310-f4-xeon',
    sku: '104210259401',
    name: 'Acer Altos T310 F4 Server Tower Intel Xeon E3-1225 v6 2TB HDD 16GB ECC DDR4 + Monitor',
    shortName: 'Acer Altos T310 F4 Tower Server',
    category: 'server',
    categoryLabel: 'SERVER',
    brand: 'Acer',
    price: 29851455,
    isTkdn: true,
    tkdnScore: 'TKDN Server Ready',
    specs: {
      processor: 'Intel® Xeon® E3-1225 v6 Server Processor',
      ram: '16GB ECC DDR4 UDIMM',
      storage: '2TB Enterprise HDD 7200RPM',
      display: 'Termasuk Monitor Acer + Keyboard Mouse',
      ports: 'Dual Gigabit LAN Ports',
      os: 'Tower Server Chassis 24/7 Operation',
    },
    warranty: 'Garansi Resmi Acer Altos Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_104210259401.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/acer-altos-t310-f4-server-tower-intel-xeon-e3-1225-v6-2tb-16gb-ecc-ddr4',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'acer-altos-r3-4310-rack-server',
    sku: '104210173162',
    name: 'Acer Altos R3 4310 Server Rack Xeon Silver 4310 16GB ECC DDR4 480GB SSD + 2TB HDD',
    shortName: 'Acer Altos R3 4310 Rack Server',
    category: 'server',
    categoryLabel: 'SERVER RACK',
    brand: 'Acer',
    price: 123502206,
    isTkdn: true,
    tkdnScore: 'TKDN Enterprise Rack',
    promoLabel: 'Datacenter Rack Server',
    specs: {
      processor: 'Intel® Xeon® Silver 4310 (12 Cores, 24 Threads)',
      ram: '16GB ECC DDR4 RDIMM (Expandable up to 1TB+)',
      storage: '480GB Enterprise SSD + 2TB Enterprise HDD Hot-Swap',
      display: 'Rackmount Server + Monitor Bundling',
      ports: 'Dual GbE + Dedicated IPMI Management Port',
      os: 'Redundant Hot-Plug Power Supply',
    },
    warranty: 'Garansi Resmi Acer Enterprise 3 Tahun Onsite',
    inStock: true,
    image: '/products/tokped_104210173162.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/acer-altos-r3-4310-server-rack-xeon-silver-4310-16gb-ecc-ddr4-480gb-ssd-2tb-hdd',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },

  // === PRINTERS ===
  {
    id: 'brother-dcp-t830dw-printer',
    sku: '104220136684',
    name: 'Brother DCP-T830DW Printer Ink Tank Print Scan Copy WiFi LAN Duplex ADF',
    shortName: 'Brother DCP-T830DW Ink Tank',
    category: 'printer',
    categoryLabel: 'PRINTER',
    brand: 'Brother',
    price: 5259755,
    isPopular: true,
    promoLabel: 'ADF + Auto Duplex',
    specs: {
      display: 'Print, Scan, Copy dengan ADF (Automatic Document Feeder)',
      ports: 'Hi-Speed USB 2.0, WiFi, Ethernet LAN, Wi-Fi Direct',
      os: 'Kecepatan Cetak 17/16.5 ipm + Auto 2-sided Duplex Print',
      storage: 'Termasuk 1 Set Tinta Original Brother BTD60BK & BT5000 CMY',
    },
    warranty: 'Garansi Resmi Brother Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_104220136684.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/brother-dcp-t830dw-printer-ink-tank-link-inkjet-print-scan-copy-17-16-5-ipm-hi-speed-usb-2-0-wifi-ethernet-wi-fi-direct-3-year-official-warranty-1738284660460193191',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'brother-mfc-l3760cdw-laser',
    sku: '103891374992',
    name: 'Brother MFC-L3760CDW Color Laser All-in-One Printer Print Scan Copy Fax WiFi Duplex',
    shortName: 'Brother MFC-L3760CDW Color Laser',
    category: 'printer',
    categoryLabel: 'PRINTER LASER',
    brand: 'Brother',
    price: 8795755,
    specs: {
      display: 'Color Laser Multifungsi: Print, Scan, Copy, Fax + 50-Sheet ADF',
      ports: 'WiFi Dual Band, Gigabit Ethernet LAN, USB 2.0',
      os: 'Kecepatan Cetak hingga 26 ppm (Warna & Monokrom) + Auto Duplex',
      storage: 'Layar Sentuh Warna 8.8cm TFT LCD',
    },
    warranty: 'Garansi Resmi Brother Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_103891374992.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/brother-mfc-l3760cdw-color-laser-all-in-one-printer-mfcl3760cdw',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'epson-l6290-ink-tank',
    sku: '14711758386',
    name: 'Epson EcoTank L6290 All-in-One Ink Tank Printer Print Scan Copy Fax WiFi ADF Duplex',
    shortName: 'Epson EcoTank L6290 All-in-One',
    category: 'printer',
    categoryLabel: 'PRINTER',
    brand: 'Epson',
    price: 10081577,
    specs: {
      display: 'Print, Scan, Copy, Fax dengan ADF + PrecisionCore Printhead',
      ports: 'Wi-Fi, Wi-Fi Direct, Ethernet, Epson Connect',
      os: 'Auto Duplex Printing + LCD Touch Panel 2.4"',
      storage: 'Include Tinta Original Epson 001 Series',
    },
    warranty: 'Garansi Resmi Epson Indonesia 2 Tahun / 50.000 Lembar',
    inStock: true,
    image: '/products/tokped_14711758386.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/epson-l6290-printer-ink-tank-include-tinta-original-epson-all-in-one-original',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },

  // === AKSESORIS, MONITOR & PROYEKTOR ===
  {
    id: 'tkdn-projector-acer-x1-dlp',
    sku: '12562038989',
    name: 'TKDN Projector Acer X1 DLP XGA 4000 Lumens Garansi 3 Tahun Proyektor Instansi',
    shortName: 'Proyektor Acer X1 4000 Lumens (TKDN)',
    category: 'aksesoris',
    categoryLabel: 'PROYEKTOR TKDN',
    brand: 'Acer',
    price: 7310915,
    isTkdn: true,
    tkdnScore: 'TKDN Proyektor Resmi',
    promoLabel: 'TKDN 4000 ANSI Lumens',
    specs: {
      display: 'DLP XGA (1024 x 768) Brightness 4.000 ANSI Lumens',
      ports: 'HDMI, VGA, Composite Video, Audio Out',
      os: 'Acer BlueLightShield & LumiSense Technology',
    },
    warranty: 'Garansi Resmi Acer Indonesia 3 Tahun',
    inStock: true,
    image: '/products/tokped_12562038989.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/tkdn-projector-acer-x1-dlp-xga-4000-lumens-garansi-3-tahun-proyektor',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'dell-p2424ht-touch-monitor',
    sku: '11679759232',
    name: 'Dell P2424HT Professional Monitor Touch Screen 24" IPS FHD 1080P USB-C Hub',
    shortName: 'Dell P2424HT 24" Touch Monitor',
    category: 'aksesoris',
    categoryLabel: 'MONITOR TOUCH',
    brand: 'Dell',
    price: 5741766,
    specs: {
      display: '23.8" Full HD (1920x1080) IPS 10-Point Multi-Touch Articulating Stand',
      ports: 'USB-C (90W Power Delivery), HDMI, DisplayPort, RJ45 Ethernet',
      os: 'ComfortView Plus Low Blue Light Screen',
    },
    warranty: 'Garansi Resmi Dell Indonesia 3 Tahun Advance Exchange',
    inStock: true,
    image: '/products/tokped_11679759232.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/dell-p2424ht-professional-monitor-touch-screen-24-ips-fhd-1080p',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
  {
    id: 'apc-bvg700i-gr-ups-700va',
    sku: '102473861140',
    name: 'APC BVG700I-GR Easy UPS Tower 700VA 360W AVR 2 Schuko Outlet Garansi Resmi',
    shortName: 'APC Easy UPS 700VA / 360W',
    category: 'aksesoris',
    categoryLabel: 'UPS & POWER',
    brand: 'APC',
    price: 1184000,
    isPopular: true,
    promoLabel: 'Wajib untuk PC Kantor',
    specs: {
      display: 'Kapasitas 700VA / 360W dengan Automatic Voltage Regulation (AVR)',
      ports: '2x Schuko Battery Backup & Surge Protection Outlets',
      os: 'LED Status Indicator & Audible Alarms',
    },
    warranty: 'Garansi Resmi APC Schneider Electric 2 Tahun',
    inStock: true,
    image: '/products/tokped_102473861140.jpg',
    tokopediaUrl:
      'https://www.tokopedia.com/technosify/apc-bvg700i-gr-easy-ups-tower-700va-360w-avr-2-schuko-outlet-garansi-resmi',
    shopeeUrl: 'https://shopee.co.id/technosify_id',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'panduan-pengadaan-tkdn-instansi',
    title: 'Panduan Lengkap Pengadaan Laptop & PC All-in-One Bersertifikat TKDN untuk Instansi & Korporasi',
    slug: 'panduan-pengadaan-tkdn-instansi-korporasi',
    summary:
      'Cara praktis memilih perangkat kerja ASUS ExpertBook, Acer Veriton, dan Lenovo ThinkCentre bersertifikat TKDN resmi tanpa repot mengejar dokumen satu per satu.',
    category: 'Pengadaan & TKDN',
    readTime: '4 menit baca',
    date: '10 November 2024',
    author: 'Tim B2B Technosify Surabaya',
    image: '/products/tokped_104402649462.jpg',
    keyTakeaways: [
      'Seluruh produk di Etalase TKDN Technosify sudah dilengkapi dokumen sertifikat TKDN Kemenperin yang sah.',
      'Technosify melayani penerbitan Surat Penawaran Resmi, Invoice, Surat Jalan, dan Faktur Pajak PPN 11%.',
      'Tersedia pilihan lengkap mulai dari Laptop (ASUS ExpertBook & Acer TravelMate), PC AIO (Acer Veriton Z4 & Lenovo Neo 50a), hingga Server Acer Altos.',
    ],
    content: [
      'Dalam proses pengadaan perangkat teknologi informasi (IT) untuk instansi pemerintah, BUMN, universitas, maupun sekolah, kepatuhan terhadap regulasi Tingkat Komponen Dalam Negeri (TKDN) adalah syarat mutlak. Seringkali tim pengadaan menghabiskan banyak waktu hanya untuk memverifikasi nilai TKDN + BMP dan meminta salinan sertifikat dari berbagai vendor.',
      'Di Technosify Surabaya, kami menyederhanakan alur tersebut melalui Etalase Khusus TKDN. Produk-produk andalan seperti ASUS ExpertBook BG1409CVA, Acer Veriton Z4 All-in-One, hingga Server Acer Altos T1-F6 telah dikurasi lengkap beserta lampiran sertifikat resminya.',
      'Anda cukup memilih perangkat di katalog website ini, memasukkannya ke dalam Daftar Penawaran, lalu mengirimkannya ke WhatsApp B2B kami di 0819-5350-8400. Tim kami di Ruko Mangga Dua Surabaya siap menerbitkan Quotation resmi dan Faktur Pajak sesuai kebutuhan instansi Anda.',
    ],
  },
  {
    id: 'review-lenovo-thinkpad-e14-vs-asus-expertbook',
    title: 'Komparasi Laptop Kerja Harian: Lenovo ThinkPad E14 Gen 8 vs ASUS ExpertBook P5 Copilot+ PC',
    slug: 'komparasi-lenovo-thinkpad-e14-vs-asus-expertbook-p5',
    summary:
      'Membandingkan ketangguhan keyboard legendaris ThinkPad E14 Gen 8 Ryzen AI dengan efisiensi baterai ekstrem ASUS ExpertBook P5 Intel Core Ultra.',
    category: 'Review Perangkat',
    readTime: '5 menit baca',
    date: '2 November 2024',
    author: 'Spesialis Produk Technosify',
    image: '/products/tokped_104146583399.jpg',
    keyTakeaways: [
      'Lenovo ThinkPad E14 Gen 8 unggul pada kenyamanan mengetik, port lengkap, dan slot RAM DDR5 SO-DIMM yang mudah di-upgrade oleh tim IT.',
      'ASUS ExpertBook P5 menawarkan bobot super ringan, layar WQXGA 144Hz tajam, dan akselerasi NPU AI hingga 47 TOPS.',
      'Kedua seri dilindungi garansi resmi 3 tahun dan ready stock di Tokopedia Technosify.',
    ],
    content: [
      'Memilih laptop operasional untuk staf manajemen, finance, maupun engineer membutuhkan pertimbangan matang antara durabilitas jangka panjang dan performa. Dua kandidat terkuat di kelas bisnis saat ini adalah Lenovo ThinkPad E14 Gen 8 dan ASUS ExpertBook P5.',
      'Lenovo ThinkPad E14 Gen 8 BFID hadir membawa prosesor AMD Ryzen AI 5 430 dengan grafis Radeon 840M dan sistem operasi Windows 11 Pro bawaan. Keunggulan utamanya terletak pada sasis berstandar militer dan kemudahan upgrade memori di masa mendatang.',
      'Sementara itu, bagi eksekutif yang sering bekerja mobile di luar kantor, ASUS ExpertBook P5 P5406CCA menawarkan efisiensi daya luar biasa berkat arsitektur Intel Core Ultra 7 258V Lunar Lake.',
    ],
  },
  {
    id: 'keunggulan-server-acer-altos-xeon-ecc',
    title: 'Mengapa Database Kantor & Accurate Butuh Server Acer Altos Xeon dibanding PC Rakitan Biasa?',
    slug: 'mengapa-database-kantor-butuh-server-acer-altos',
    summary:
      'Pentingnya memori ECC (Error-Correcting Code) dan prosesor Intel Xeon pada Acer Altos T1-F6 untuk mencegah kerusakan database akuntansi perusahaan.',
    category: 'Infrastruktur IT',
    readTime: '4 menit baca',
    date: '24 Oktober 2024',
    author: 'Divisi Server Technosify',
    image: '/products/tokped_104208778804.jpg',
    keyTakeaways: [
      'RAM ECC pada Acer Altos mendeteksi dan mengoreksi bit error secara otomatis sehingga database ERP/Accurate tidak mudah corrupt.',
      'Dirancang menyala 24 jam nonstop dengan sistem pendinginan dan catu daya berstandar server.',
      'Tersedia varian Tower (Altos T1-F6 & T310-F4) untuk ruang kantor dan varian Rack (Altos R3 4310) untuk ruang server khusus.',
    ],
    content: [
      'Masih banyak perusahaan berkembang yang menjadikan PC desktop biasa sebagai server database akuntansi atau file sharing. Padahal, PC biasa tidak memiliki fitur koreksi memori (ECC) dan tidak dirancang untuk beban kerja 24/7.',
      'Dengan beralih ke Acer Altos T1-F6 Tower Server yang ditenagai Intel Xeon E-2334 dan RAM ECC DDR4, stabilitas jaringan lokal dan keamanan data transaksi perusahaan Anda meningkat drastis.',
    ],
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'order',
    categoryLabel: 'Produk & Keaslian',
    question: 'Apakah semua produk di Technosify 100% Original dan Bergaransi Resmi?',
    answer:
      'YA, 100% produk yang kami jual dijamin Baru, Original, Bersegel, dan Bergaransi Resmi Distributor Authorized Indonesia (ASUS, Lenovo, Acer, Dell, MSI, Brother, Epson, APC). Anda dapat mengklaim garansi di seluruh Service Center resmi di Indonesia.',
  },
  {
    id: 'faq-2',
    category: 'b2b',
    categoryLabel: 'Faktur Pajak & TKDN',
    question: 'Apakah Technosify bisa menerbitkan Faktur Pajak PPN dan menyertakan Sertifikat TKDN?',
    answer:
      'BISA! Kami melayani pengadaan perusahaan (B2B) dan instansi. Kami dapat menerbitkan Faktur Pajak resmi (PPN), Surat Penawaran (Quotation), dan Invoice perusahaan. Untuk produk di Etalase TKDN, sertifikat TKDN sudah tersedia lengkap.',
  },
  {
    id: 'faq-3',
    category: 'shipping',
    categoryLabel: 'Jadwal Pengiriman',
    question: 'Jam berapa batas waktu (cut-off) pesanan dikirim di hari yang sama?',
    answer:
      'Untuk hari Senin – Jumat: pesanan yang masuk sebelum pukul 14.00 WIB akan dikirim di hari yang sama (di atas jam 14.00 dikirim besoknya). Untuk hari Sabtu: pesanan sebelum pukul 11.00 WIB dikirim di hari yang sama (di atas jam 11.00 dikirim hari Senin).',
  },
  {
    id: 'faq-4',
    category: 'shipping',
    categoryLabel: 'Aturan Packaging & Asuransi',
    question: 'Bagaimana standar keamanan packing untuk pengiriman Instant maupun Reguler/Luar Kota?',
    answer:
      'Untuk pengiriman Same Day / Instant (GoSend/Grab), unit dikemas menggunakan plastik pelindung tanpa bubblewrap agar mudah dibawa kurir. Untuk pengiriman Standar/Reguler/Kargo, seluruh produk elektronik dilapisi BUBBLEWRAP GRATIS! Kami juga menyediakan etalase tambahan Packing Kayu untuk pengiriman luar kota/pulau.',
  },
  {
    id: 'faq-5',
    category: 'warranty',
    categoryLabel: 'Klaim & Video Unboxing',
    question: 'Apa syarat utama jika terdapat kendala atau ketidaksesuaian saat barang diterima?',
    answer:
      'Sesuai kebijakan toko kami (ATTENTION!), pembeli WAJIB membuat Video Unboxing utuh tanpa jeda saat membuka paket. Tanpa video unboxing, kami tidak dapat memproses pengembalian barang. Jika ada kendala, segera hubungi kami melalui chat WhatsApp (0819-5350-8400) atau chat Tokopedia untuk solusi cepat.',
  },
  {
    id: 'faq-6',
    category: 'order',
    categoryLabel: 'Lokasi Toko Surabaya',
    question: 'Di mana lokasi offline / gudang pengiriman Technosify?',
    answer:
      'Kami berlokasi di Ruko Mangga Dua, Blok A6 No. 3, Jl. Jagir Wonokromo, Kec. Wonokromo, Kota Surabaya, Jawa Timur 60244. Silakan konfirmasi stok terlebih dahulu melalui WhatsApp sebelum berkunjung.',
  },
];

export const THREE_STEPS = [
  {
    step: '01',
    title: 'Pilih Perangkat & Susun Daftar Penawaran',
    description:
      'Telusuri katalog laptop, AIO, PC desktop, server, atau printer. Klik "Tambah ke penawaran" untuk menyusun daftar kebutuhan Anda atau cek stok lebih dulu.',
  },
  {
    step: '02',
    title: 'Kirim via WhatsApp atau Checkout Tokopedia',
    description:
      'Minta surat penawaran resmi & Faktur Pajak lewat WhatsApp (0819-5350-8400), atau langsung transaksi aman melalui toko resmi kami di Tokopedia & Shopee.',
  },
  {
    step: '03',
    title: 'Packing Aman & Barang Tiba Tepat Waktu',
    description:
      'Order sebelum jam 14.00 (Senin-Jumat) dikirim di hari yang sama dengan Gratis Bubblewrap (reguler) atau kurir Instant Surabaya. Wajib video unboxing saat tiba!',
  },
];
