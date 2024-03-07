export interface I_User {
    name: string | null;
    token: string | null;
}

export const initUser: I_User = {
    name: null,
    token: null,
};

export type T_UserReducer = {
    type: string;
    payload?: object;
};
