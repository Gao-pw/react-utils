/**
 * @description 复制粘贴版的功能
 * @author siroi
 *
 * @returns {readonly [Function, string]}
 */
declare function useCopy(): readonly [(text: string) => Promise<void>, string | null | undefined];
export default useCopy;
