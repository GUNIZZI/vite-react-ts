// // AuthProvider.tsx
// import React, { createContext, useContext, useState } from 'react';

// interface AuthContextType {
//     isAuthenticated: boolean;
//     login: (token: string) => void;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const login = (token: string) => {
//         // 여기서는 간단하게 토큰이 있는지만 체크합니다.
//         if (token) {
//             setIsAuthenticated(true);
//         }
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//     };

//     return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
// };

ts;
