import { v4 } from "uuid";
import iscvImage from "@/assets/images/relationships/iscv.png";
import blocktraceImage from "@/assets/images/relationships/blocktrace.png";
import edupathImage from "@/assets/images/relationships/edupath.png";
import { leaderImage, thaysangImage } from "assets/images/team";
export type IRelationship = {
  id: string;
  image: string;
  title: string;
  description: string;
  features: string[];
  to: string;
};

export const relationships: IRelationship[] = [
  {
    id: v4(),
    image: iscvImage,
    title: "ISCV",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    features: ["f1", "f2", "f3", "f4"],
    to: "https://iscv.ftisu.vn/",
  },
  {
    id: v4(),
    image: blocktraceImage,
    title: "Blocktrace",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    features: ["f1", "f2", "f3", "f4"],
    to: "https://blocktrace.ftisu.vn/",
  },
  {
    id: v4(),
    image: edupathImage,
    title: "Edupath",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    features: ["f1", "f2", "f3", "f4"],
    to: "https://edupath.ftisu.vn/",
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
    ],
  },
];
