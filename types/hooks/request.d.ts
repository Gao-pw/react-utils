/**
 * 获取请求的数据和更新数据
 *
 * @author siroi
 * @template T 请求返回的数据类型，必须包含 data 和 code 属性
 * @param request 异步请求函数，返回 Promise<T>
 * @param handle 可选的处理函数，用于处理请求返回的数据
 * @returns 返回一个包含当前状态和更新状态的元组
 */
declare function useRequestState<T extends {
    data?: any;
    code?: number;
}>(request: (...args: any[]) => Promise<T>, handle?: (data?: T['data']) => T['data']): readonly [T["data"], () => Promise<void>];
export default useRequestState;
