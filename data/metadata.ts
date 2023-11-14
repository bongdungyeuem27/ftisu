import { v4 } from "uuid";

import {
  anImage,
  anhducImage,
  anhhuyImage,
  baoanImage,
  buuImage,
  defaultPersonImage,
  hieuImage,
  hoaImage,
  huongImage,
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
  nhatImage,
  nhiImage,
  nhutImage,
  quanImage,
  quoctrungImage,
  thangImage,
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
} from "assets/images/team";
import { iscvImage } from "assets/images/relationships";
import { blockchainImage, forecastImage } from "assets/images/projects";
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

export type IMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  zalo?: string;
};

export type ITeam = {
  id: string;
  title: string;
  content: string;
  members: IMember[];
};

export const teams: ITeam[] = [
  {
    id: v4(),
    title: "TEAM LEADER",
    content: "Head of scientific research projects",
    members: [
      {
        id: v4(),
        name: "Assoc. PhD Nguyễn Đình Thuân",
        role: "Head of Department of Information Systems",
        image: leaderImage,
      },
    ],
  },
  {
    id: v4(),
    title: "TEAM TIME SERIES",
    content: "Research on time series and application of time series",
    members: [
      {
        id: v4(),
        name: "Vũ Minh Sang",
        role: "Master",
        image: thaysangImage,
      },
      {
        id: v4(),
        name: "Nguyễn Minh Nhựt",
        role: "Engineer",
        image: nhutImage,
      },
      {
        id: v4(),
        name: "Nguyễn Thành Nội",
        role: "Student",
        image: thanhnoiImage,
      },
      {
        id: v4(),
        name: "Nguyễn Quang Huy",
        role: "Student",
        image: huyImage,
      },
      {
        id: v4(),
        name: "Nguyễn Quốc Trung",
        role: "Student",
        image: quoctrungImage,
      },
      {
        id: v4(),
        name: "Hồ Bảo An",
        role: "Student",
        image: baoanImage,
      },
      {
        id: v4(),
        name: "Hồ Tuấn Trung",
        role: "Student",
        image: tuantrungImage,
      },
      {
        id: v4(),
        name: "Lê Hữu Thắng",
        role: "Student",
        image: thangImage,
      },
      {
        id: v4(),
        name: "Lê Thị Ái Nhi",
        role: "Student",
        image: nhiImage,
      },
      {
        id: v4(),
        name: "Đỗ Thảo Quyên",
        role: "Student",
        image: thaoquyenImage,
      },
    ],
  },
  {
    id: v4(),
    title: "TEAM BLOCKCHAIN",
    content: "Research on Blockchain and build DApps",
    members: [
      {
        id: v4(),
        name: "Đặng Minh Quân",
        role: "Student",
        image: quanImage,
      },
      {
        id: v4(),
        name: "Lưu Trần Anh Khoa",
        role: "Student",
        image: khoaImage,
      },
      {
        id: v4(),
        name: "Lê Mai Duy Khánh",
        role: "Student",
        image: khanhImage,
      },
      {
        id: v4(),
        name: "Phan Phạm Quỳnh Hoa",
        role: "Student",
        image: hoaImage,
      },
      {
        id: v4(),
        name: "Lương Thị Thuỳ Trang",
        role: "Student",
        image: trangImage,
      },
      {
        id: v4(),
        name: "Trần Quang Minh",
        role: "Student",
        image: minhImage,
      },
      {
        id: v4(),
        name: "Thái Tăng Đức",
        role: "Student",
        image: defaultPersonImage,
      },
      {
        id: v4(),
        name: "Trần Anh Huy",
        role: "Student",
        image: anhhuyImage,
      },
    ],
  },
  {
    id: v4(),
    title: "DATA ANALYSIS TEAM",
    content: "Research on Blockchain and build DApps",
    members: [
      {
        id: v4(),
        name: "Trịnh Thị Thanh Trúc",
        role: "Student",
        image: trucImage,
      },
      {
        id: v4(),
        name: "Bùi Quốc Huy",
        role: "Student",
        image: huyImage,
      },
      {
        id: v4(),
        name: "Đặng Vũ Phương Uyên",
        role: "Student",
        image: uyenImage,
      },
      {
        id: v4(),
        name: "Võ Hoàng Nhật",
        role: "Student",
        image: nhatImage,
      },
      {
        id: v4(),
        name: "Phan Phạm Quỳnh Hoa",
        role: "Student",
        image: hoaImage,
      },
      {
        id: v4(),
        name: "Lương Thị Thuỳ Trang",
        role: "Student",
        image: trangImage,
      },
      {
        id: v4(),
        name: "Nguyễn Việt Thư",
        role: "Student",
        image: thuImage,
      },
      {
        id: v4(),
        name: "Trương Thị Kim Thoa",
        role: "Student",
        image: thoaImage,
      },
      {
        id: v4(),
        name: "Đặng Nguyễn Phước An",
        role: "Student",
        image: anImage,
      },
      {
        id: v4(),
        name: "Trần Mẫn Quân",
        role: "Student",
        image: manquanImage,
      },
      {
        id: v4(),
        name: "Lâm Ngọc Ẩn",
        role: "Student",
        image: ngocanImage,
      },
      {
        id: v4(),
        name: "Đỗ Đặng Kiến Nam",
        role: "Student",
        image: kiennamImage,
      },
      {
        id: v4(),
        name: "Lê Anh Thư",
        role: "Student",
        image: thuImage,
      },
      {
        id: v4(),
        name: "Nguyễn Thị Mỹ Trân",
        role: "Student",
        image: mytranImage,
      },
      {
        id: v4(),
        name: "Tôn Nữ Tú Quyên",
        role: "Student",
        image: tuquyenImage,
      },
    ],
  },
  {
    id: v4(),
    title: "TEAM MOBILE",
    content: "Research on Blockchain and build DApps",
    members: [
      {
        id: v4(),
        name: "Lê Văn Anh Đức",
        role: "Student",
        image: anhducImage,
      },
      {
        id: v4(),
        name: "Phạm Phú Tuấn",
        role: "Student",
        image: tuanImage,
      },
      {
        id: v4(),
        name: "Nguyễn Văn Lực",
        role: "Student",
        image: lucImage,
      },
    ],
  },
  {
    id: v4(),
    title: "E-COMMERCE TEAM",
    content: "Research on Blockchain and build DApps",
    members: [
      {
        id: v4(),
        name: "Nguyễn Thị Viết Hương",
        role: "Student",
        image: huongImage,
      },
      {
        id: v4(),
        name: "Nguyễn Phước Thiện",
        role: "Student",
        image: thienImage,
      },
      {
        id: v4(),
        name: "Lý Gia Hiếu",
        role: "Student",
        image: hieuImage,
      },
      {
        id: v4(),
        name: "Châu Ngọc Bửu Đăng",
        role: "Student",
        image: buuImage,
      },
    ],
  },
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
