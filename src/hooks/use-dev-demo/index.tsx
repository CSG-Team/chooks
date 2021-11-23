
export interface IOurInfo {
  orgName: string;
  slogan: string;
  member: Array<string>;
}

const csg: IOurInfo = {
  orgName: "csg",
  slogan: "Higher, Faster, Stronger",
  member: ["cjj", "077", "ze", "yxnne"],
};

/**
 * 这是一个测试demo
 * @returns IOurInfo
 */
function useDevDemo(): IOurInfo {
  return csg;
}

export { useDevDemo };
