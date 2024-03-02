// import { Dispatch, createContext, useReducer } from 'react';
// import ThemeContext, { I_Theme } from './ThemeContext';

// type ReducerType = {
//     type: string;
//     payload: string;
// };

// const initState: I_Theme = {
//     color: 'white',
//     size: 'normal',
// };

// const themeReducer = (state: I_Theme, action: ReducerType) => {
//     console.log('reducer', state, action);
//     return state;
// };

// const ThemeContext = createContext<{ state: I_Theme; dispatch: Dispatch<ReducerType> }>({
//     state: initState,
//     dispatch: () => null,
// });

// const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//     const [state, dispatch] = useReducer(themeReducer, initState);
//     return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
// };

// // export const TodoProvider: React.FC = ({ children }) => {
// //     const [state, dispatch] = useReducer(reducer, initialState);
// //     return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
// // };

// //     const setTheme = (newTheme: Partial<I_Theme>) => {
// //         // 여기서 테마를 변경하고 싶다면 dispatch를 사용하여 변경 로직을 구현합니다.
// //     };
// //     const setColor = (color: string) => {
// //         console.log('set color', color);
// //         // dispatch('asd');
// //     };
// //     const setSize = () => {
// //         console.log('set size');
// //     };

// //     console.log(theme);
// // };

// // export default ThemeProvider;
