export interface IOurInfo {
    orgName: string;
    slogan: string;
    member: Array<string>;
}
/**
 * 这是一个测试demo
 * @returns IOurInfo
 */
declare function useDevDemo(): IOurInfo;
export { useDevDemo };
