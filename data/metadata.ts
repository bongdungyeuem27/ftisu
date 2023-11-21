import { v4 } from "uuid";

import { blockchainImage, forecastImage } from "assets/images/projects";
import { iscvImage } from "assets/images/relationships";
import {
  anImage,
  anhducImage,
  anhhuyImage,
  anhthuImage,
  baoanImage,
  baochauImage,
  buuImage,
  defaultPersonImage,
  diuaiImage,
  hieuImage,
  hoaImage,
  huongImage,
  huulongImage,
  huyImage,
  khanhImage,
  khoaImage,
  kiennamImage,
  leaderImage,
  lucImage,
  manquanImage,
  minhImage,
  mytranImage,
  ngocanImage,
  ngohuyImage,
  nhatImage,
  nhiImage,
  nhutImage,
  quanImage,
  quanghuyImage,
  quoctrungImage,
  tangducImage,
  thangImage,
  thanhcongImage,
  thanhnoiImage,
  thaoquyenImage,
  thaysangImage,
  thienImage,
  thoaImage,
  thuImage,
  trangImage,
  trucImage,
  tuanImage,
  tuantrungImage,
  tuquyenImage,
  uyenImage,
  vananhImage,
} from "assets/images/team";
import {
  anomolyL,
  anomolyR,
  blockbase1L,
  blockbase1R,
  blockbase2L,
  blockbase2R,
  ecg1l,
  ecg1r,
  ecg2l,
  ecg2r,
  gymL,
  gymR,
  houseL,
  houseR,
  iscvL,
  iscvR,
  lstmL,
  lstmR,
  monteL,
  monteR,
  multiL,
  multiR,
  sentimentL,
  sentimentR,
  skinDeseaseL,
  skinDeseaseR,
  supplyL,
  supplyR,
} from "~/assets/images/group";
export type IRelationship = {
  id: string;
  image: string;
  title: string;
  description?: string;
  features: string[];
  to: string;
};

export const relationships: IRelationship[] = [
  {
    id: v4(),
    image: iscvImage,
    title: "ISCV",
    description:
      "ISCV is a new job platform that uses blockchain and machine learning to revolutionize the way people find and apply for jobs. ISCV can interview your personality based on your images and voice, and assess factors such as your intelligence, personality, and work motivation. ISCV is also a job social network, allowing you to connect with other job seekers and employers, share experiences, and find new job opportunities.",
    features: [
      "CV on blockchain",
      "Job social network",
      "Big Five Interview",
      "Personality analysis",
    ],
    to: "https://iscv.ftisu.vn/",
  },
];

export type IRole =
  | "Master"
  | "Head of Department of Information Systems"
  | "Engineer"
  | "Student";

export type IMember = {
  name: string;
  role: IRole;
  image: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  zalo?: string;
};

export type IGroup = {
  id: string;
  name: string;
  imageLeft?: string;
  imageRight?: string;
  color?: string;
  memberIDs: IMemberID[];
};

export type ITopic = {
  id: string;
  title: string;
  groups: IGroup[];
};

export type IMemberID = string;

export const members: { [key: IMemberID]: IMember } = {
  nguyen_dinh_thuan: {
    name: "Assoc. PhD Nguyễn Đình Thuân",
    role: "Head of Department of Information Systems",
    image: leaderImage,
  },
  luong_thi_thuy_trang: {
    name: "Lương Thị Thuỳ Trang",
    role: "Student",
    image: trangImage,
  },
  tran_quang_minh: {
    name: "Trần Quang Minh",
    role: "Student",
    image: minhImage,
  },
  pham_thanh_dat: {
    name: "Phạm Thành Đạt",
    role: "Student",
    image: defaultPersonImage,
  },
  thieu_huy_hoang: {
    name: "Thiều Huy Hoàng",
    role: "Student",
    image: defaultPersonImage,
  },

  trinh_thi_thanh_truc: {
    name: "Trịnh Thị Thanh Trúc",
    role: "Engineer",
    image: trucImage,
  },
  nguyen_quoc_trung: {
    name: "Nguyễn Quốc Trung",
    role: "Student",
    image: quoctrungImage,
  },
  le_huu_thang: {
    name: "Lê Hữu Thắng",
    role: "Engineer",
    image: thangImage,
  },
  le_thi_ai_nhi: {
    name: "Lê Thị Ái Nhi",
    role: "Engineer",
    image: nhiImage,
  },
  do_thao_quyen: {
    name: "Đỗ Thảo Quyên",
    role: "Student",
    image: thaoquyenImage,
  },
  nguyen_minh_nhut: {
    name: "Nguyễn Minh Nhựt",
    role: "Engineer",
    image: nhutImage,
  },
  phan_thanh_cong: {
    name: "Phan Thành Công",
    role: "Student",
    image: thanhcongImage,
  },
  tran_vu_bao: {
    name: "Trần Vũ Bảo",
    role: "Student",
    image: defaultPersonImage,
  },
  phan_thi_thuy_hien: {
    name: "Phan Thị Thuỷ Hiền",
    role: "Student",
    image: defaultPersonImage,
  },
  nguyen_ngoc_buu_dang: {
    name: "Nguyễn Ngọc Bửu Đăng",
    role: "Student",
    image: buuImage,
  },
  nguyen_phuoc_thien: {
    name: "Nguyễn Phước Thiện",
    role: "Student",
    image: thienImage,
  },
  le_mai_duy_khanh: {
    name: "Lê Mai Duy Khánh",
    role: "Engineer",
    image: khanhImage,
  },
  luu_tran_anh_khoa: {
    name: "Lưu Trần Anh Khoa",
    role: "Student",
    image: khoaImage,
  },
  vu_minh_sang: {
    name: "Vũ Minh Sang",
    role: "Master",
    image: thaysangImage,
  },
  ho_ho_bao_an: {
    name: "Hồ Bảo An",
    role: "Student",
    image: baoanImage,
  },
  ho_tuan_trung: {
    name: "Hồ Tuấn Trung",
    role: "Student",
    image: baoanImage,
  },
  ho_bao_an: {
    name: "Hồ Bảo An",
    role: "Student",
    image: tuantrungImage,
  },
  ly_gia_hieu: {
    name: "Lý Gia Hiếu",
    role: "Student",
    image: hieuImage,
  },
  ngo_quoc_huy: {
    name: "Ngô Quốc Huy",
    role: "Student",
    image: ngohuyImage,
  },
  vuong_yen_nhi: {
    name: "Vương Yến Nhi",
    role: "Student",
    image: defaultPersonImage,
  },
  vo_hung_khang: {
    name: "Võ Hưng Khang",
    role: "Student",
    image: defaultPersonImage,
  },
  chau_ngoc_buu_dang: {
    name: "Châu Ngọc Bửu Đăng",
    role: "Student",
    image: buuImage,
  },
  do_dang_kien_nam: {
    name: "Đỗ Đặng Kiến Nam",
    role: "Student",
    image: kiennamImage,
  },
  phan_pham_quynh_hoa: {
    name: "Phan Phạm Quỳnh Hoa",
    role: "Student",
    image: hoaImage,
  },
  nguyen_thien_bao_chau: {
    name: "Nguyễn Thiện Bảo Châu",
    role: "Student",
    image: baochauImage,
  },
  le_nguyen_gia_hung: {
    name: "Lê Nguyễn Gia Hưng",
    role: "Student",
    image: defaultPersonImage,
  },
  thai_tang_duc: {
    name: "Thái Tăng Đức",
    role: "Student",
    image: tangducImage,
  },
  tran_anh_huy: {
    name: "Trần Anh Huy",
    role: "Student",
    image: anhhuyImage,
  },
  nguyen_thi_viet_huong: {
    name: "Nguyễn Thị Viết Hương",
    role: "Student",
    image: huongImage,
  },
  bui_quoc_huy: {
    name: "Bùi Quốc Huy",
    role: "Student",
    image: huyImage,
  },
  dang_vu_phuong_uyen: {
    name: "Đặng Vũ Phương Uyên",
    role: "Student",
    image: uyenImage,
  },
  nguyen_viet_thu: {
    name: "Nguyễn Việt Thư",
    role: "Student",
    image: thuImage,
  },
  truong_thi_truong_thi_kim_thoa: {
    name: "Trương Thị Kim Thoa",
    role: "Engineer",
    image: thoaImage,
  },
  dang_nguyen_phuoc_an: {
    name: "Đặng Nguyễn Phước An",
    role: "Student",
    image: anImage,
  },
  tran_man_quan: {
    name: "Trần Mẫn Quân",
    role: "Student",
    image: manquanImage,
  },
  lam_ngoc_an: {
    name: "Lâm Ngọc Ẩn",
    role: "Student",
    image: ngocanImage,
  },
  nguyen_thi_my_tran: {
    name: "Nguyễn Thị Mỹ Trân",
    role: "Student",
    image: mytranImage,
  },
  ton_nu_tu_quyen: {
    name: "Tôn Nữ Tú Quyên",
    role: "Student",
    image: tuquyenImage,
  },
  vo_hoang_nhat: {
    name: "Võ Hoàng Nhật",
    role: "Student",
    image: nhatImage,
  },
  le_van_anh_duc: {
    name: "Lê Văn Anh Đức",
    role: "Student",
    image: anhducImage,
  },
  nguyen_thi_van_anh: {
    name: "Nguyễn Thị Vân Anh",
    role: "Student",
    image: vananhImage,
  },
  pham_phu_tuan: {
    name: "Phạm Phú Tuấn",
    role: "Student",
    image: tuanImage,
  },
  nguyen_van_luc: {
    name: "Nguyễn Văn Lực",
    role: "Student",
    image: lucImage,
  },
  le_anh_thu: {
    name: "Lê Anh Thư",
    role: "Student",
    image: anhthuImage,
  },
  nguyen_thanh_noi: {
    name: "Nguyễn Thành Nội",
    role: "Engineer",
    image: thanhnoiImage,
  },
  nguyen_quang_huy: {
    name: "Nguyễn Quang Huy",
    role: "Student",
    image: quanghuyImage,
  },
  dang_thanh_dat: {
    name: "Đặng Thành Đạt",
    role: "Student",
    image: defaultPersonImage,
  },
  ho_ngoc_tuong_vy: {
    name: "Hồ Ngọc Tường Vy",
    role: "Student",
    image: defaultPersonImage,
  },
  pham_le_diu_ai: {
    name: "Phạm Lê Dịu Ái",
    role: "Student",
    image: diuaiImage,
  },
  nguyen_thai_bao: {
    name: "Nguyễn Thái Bảo",
    role: "Student",
    image: defaultPersonImage,
  },
  tran_thuy_an: {
    name: "Trần Thuý An",
    role: "Student",
    image: defaultPersonImage,
  },
  nguyen_le_tuan_anh: {
    name: "Nguyễn Lê Tuấn Anh",
    role: "Student",
    image: defaultPersonImage,
  },
  duong_quoc_anh: {
    name: "Dương Quốc Anh",
    role: "Student",
    image: defaultPersonImage,
  },
  nguyen_huu_long: {
    name: "Nguyễn Hữu Long",
    role: "Student",
    image: huulongImage,
  },
  dang_minh_quan: {
    name: "Đặng Minh Quân",
    role: "Student",
    image: quanImage,
  },
  truong_thi_kim_thoa: {
    name: "Trương Thị Kim Thoa",
    role: "Student",
    image: thoaImage,
  },
};

export const topics: ITopic[] = [
  {
    id: v4(),
    title: "TEAM LEADER",
    groups: [
      {
        id: v4(),
        name: "Head of scientific research projects",
        memberIDs: ["nguyen_dinh_thuan"],
      },
    ],
  },
  {
    id: "medicine_and_health_care",
    title: "MEDICINE AND HEALTH CARE",
    groups: [
      {
        id: "ecg_1",
        name: "Electrocardiogram - ECG",
        imageRight: ecg1r,
        imageLeft: ecg1l,
        color: "#87bcb4",
        memberIDs: [
          "trinh_thi_thanh_truc",
          "nguyen_quoc_trung",
          "do_thao_quyen",
        ],
      },
      {
        id: v4(),
        name: "Electrocardiogram - ECG",
        imageRight: ecg2r,
        imageLeft: ecg2l,
        color: "#E05C6D",
        memberIDs: [
          "luong_thi_thuy_trang",
          "tran_quang_minh",
          "pham_thanh_dat",
          "thieu_huy_hoang",
        ],
      },
      {
        id: "skin_disease",
        name: "Skin Disease",
        imageRight: skinDeseaseR,
        imageLeft: skinDeseaseL,
        color: "#E78A7C",
        memberIDs: [
          "nguyen_minh_nhut",
          "luong_thi_thuy_trang",
          "tran_quang_minh",
        ],
      },
      {
        id: "gym",
        name: "Gym",
        imageRight: gymR,
        imageLeft: gymL,
        color: "#1B87DF",
        memberIDs: [
          "le_mai_duy_khanh",
          "chau_ngoc_buu_dang",
          "nguyen_phuoc_thien",
        ],
      },
    ],
  },
  {
    id: "team_blockchain",
    title: "TEAM BLOCKCHAIN",
    groups: [
      {
        id: "iscv",
        name: "ISCV",
        imageLeft: iscvL,
        imageRight: iscvR,
        color: "#E27D2A",
        memberIDs: [
          "dang_minh_quan",
          "le_mai_duy_khanh",
          "do_dang_kien_nam",
          "le_anh_thu",
        ],
      },
      {
        id: "supply_chain",
        name: "Supply Chain",
        color: "#99BFD6",
        imageLeft: supplyL,
        imageRight: supplyR,
        memberIDs: [
          "nguyen_minh_nhut",
          "phan_pham_quynh_hoa",
          "luu_tran_anh_khoa",
        ],
      },
      {
        id: "blockbase_1",
        name: "Blockbase",
        imageLeft: blockbase1L,
        imageRight: blockbase1R,
        color: "#8E8E8E",
        memberIDs: ["le_mai_duy_khanh", "nguyen_thai_bao", "tran_thuy_an"],
      },
      {
        id: "blockbase_1",
        name: "Blockbase",
        imageLeft: blockbase2L,
        imageRight: blockbase2R,
        color: "#545454",
        memberIDs: ["le_mai_duy_khanh", "duong_quoc_anh", "nguyen_le_tuan_anh"],
      },
    ],
  },
  {
    id: v4(),
    title: "Forecast",
    groups: [
      {
        id: v4(),
        name: "LSTM",
        imageLeft: lstmL,
        imageRight: lstmR,
        color: "#6ABB9C",
        memberIDs: ["nguyen_minh_nhut", "le_thi_ai_nhi", "le_huu_thang"],
      },
      {
        id: v4(),
        name: "Multivariate",
        imageLeft: multiL,
        imageRight: multiR,
        color: "#3E5C82",
        memberIDs: ["nguyen_minh_nhut", "nguyen_thanh_noi", "nguyen_quang_huy"],
      },
      {
        id: v4(),
        name: "Anomoly",
        imageLeft: anomolyL,
        imageRight: anomolyR,
        color: "#D740DC",
        memberIDs: ["nguyen_minh_nhut", "ho_bao_an", "ho_tuan_trung"],
      },
      {
        id: v4(),
        name: "Monte Carlo",
        imageLeft: monteL,
        imageRight: monteR,
        color: "#BB4B41",
        memberIDs: ["nguyen_minh_nhut", "dang_thanh_dat"],
      },
      {
        id: v4(),
        name: "Setiment",
        imageLeft: sentimentL,
        imageRight: sentimentR,
        color: "#3471D3",
        memberIDs: ["nguyen_thi_viet_huong", "lam_ngoc_an"],
      },
      {
        id: v4(),
        name: "House Price",
        imageLeft: houseL,
        imageRight: houseR,
        color: "#CEA101",
        memberIDs: [
          "nguyen_minh_nhut",
          "nguyen_viet_thu",
          "truong_thi_kim_thoa",
        ],
      },
      {
        id: v4(),
        name: "Risk",
        memberIDs: [
          "nguyen_minh_nhut",
          "ho_ngoc_tuong_vy",
          "nguyen_thi_van_anh",
        ],
      },
    ],
  },
  // {
  //   id: v4(),
  //   title: "Natural Language Processing",
  //   groups: [
  //     {
  //       id: v4(),
  //       name: "Smart UML",
  //       memberIDs: [
  //         "dang_vu_phuong_uyen",
  //         "nguyen_thi_my_tran",
  //         "ton_nu_tu_quyen",
  //       ],
  //     },
  //     {
  //       id: v4(),
  //       name: "Gallery Art",
  //       memberIDs: ["nguyen_minh_nhut", "vo_hoang_nhat", "bui_quoc_huy"],
  //     },
  //     {
  //       id: v4(),
  //       name: "Virtual class",
  //       memberIDs: [
  //         "nguyen_minh_nhut",
  //         "phan_pham_quynh_hoa",
  //         "thai_tang_duc",
  //         "tran_anh_huy",
  //       ],
  //     },
  //     {
  //       id: v4(),
  //       name: "Music Analysis",
  //       memberIDs: ["nguyen_minh_nhut", "ly_gia_hieu", "ngo_quoc_huy"],
  //     },
  //     {
  //       id: v4(),
  //       name: "HR Support",
  //       memberIDs: ["nguyen_minh_nhut", "vuong_yen_nhi", "vo_hung_khang"],
  //     },
  //   ],
  // },
  // {
  //   id: v4(),
  //   title: "Graphs, Geography",
  //   groups: [
  //     {
  //       id: v4(),
  //       name: "Tour Trip",
  //       memberIDs: [
  //         "dang_minh_quan",
  //         "le_van_anh_duc",
  //         "pham_le_diu_ai",
  //         "nguyen_huu_long",
  //       ],
  //     },
  //     {
  //       id: v4(),
  //       name: "Edupath",
  //       memberIDs: [
  //         "nguyen_minh_nhut",
  //         "tran_man_quan",
  //         "dang_nguyen_phuoc_an",
  //       ],
  //     },
  //     {
  //       id: v4(),
  //       name: "AQI",
  //       memberIDs: ["nguyen_minh_nhut", "le_van_anh_duc", "nguyen_van_luc"],
  //     },
  //     {
  //       id: v4(),
  //       name: "Research",
  //       memberIDs: [
  //         "nguyen_minh_nhut",
  //         "le_van_anh_duc",
  //         "le_nguyen_gia_hung",
  //         "nguyen_thien_bao_chau",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: v4(),
  //   title: "Multimedia",
  //   groups: [
  //     {
  //       id: v4(),
  //       name: "Media Research",
  //       memberIDs: ["nguyen_minh_nhut", "phan_thanh_cong", "tran_vu_bao"],
  //     },
  //     {
  //       id: v4(),
  //       name: "Media Research",
  //       memberIDs: ["nguyen_minh_nhut", "phan_thi_thuy_hien"],
  //     },
  //     {
  //       id: v4(),
  //       name: "Media Research",
  //       memberIDs: ["nguyen_minh_nhut", "pham_phu_tuan"],
  //     },
  //   ],
  // },
];

export const documents: IRelationship[] = [
  {
    id: v4(),
    image: blockchainImage,
    title: "Blockchain",
    features: [
      "Blockchain solutions",
      "Smart Contract",
      "Custom Chain",
      "DApps",
    ],
    to: "https://github.com/iscv-lab",
  },
  {
    id: v4(),
    image: forecastImage,
    title: "Data Analysis",
    features: [
      "Machine Learning & AI",
      "Forecast Technology",
      "Descriptive Statistics",
      "Statistical Inference",
    ],
    to: "https://github.com/VHNhat/Cryptocurrency-Prediction",
  },
];
