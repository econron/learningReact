export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => {
    return {
        type: 'INCREMENT'
    };
}
// アロー関数方式で記述、アローの実行部分を（）でくくると、中身をそのままreturnする。
export const decrement = () => ({type: 'DECREMENT'})