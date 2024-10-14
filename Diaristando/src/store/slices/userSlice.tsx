import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Genero {
  FEMININO = 'FEMININO',
  MASCULINO = 'MASCULINO',
  NAO_BINARIO = 'NAO_BINARIO',
}

export interface UserState {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  cep: string;
  genero: Genero | string;
  nomeSocial?: string;
  profileImageUrl?: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  nome: '',
  email: '',
  telefone: '',
  dataNascimento: '',
  cep: '',
  genero: '',
  nomeSocial: '',
  profileImageUrl: '',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return {
        ...action.payload,
        isAuthenticated: true,
      };
    },
    clearUser(state) {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
