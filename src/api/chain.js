import axiosServices from "./axiosServices";

export const getFaucet = (account) => {
  return axiosServices.get(
    `https://node.iscv.ftisu.vn/ftisu/chain/faucet?account=${account}`
  );
};
