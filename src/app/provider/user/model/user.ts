export interface I_User {
    name: string | null;
    token: string | null;
}

export type T_UserReducer = {
    type: string;
    payload?: object;
};
