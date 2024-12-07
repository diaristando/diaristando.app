import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Genero {
  FEMININO = 'FEMININO',
  MASCULINO = 'MASCULINO',
  NAO_BINARIO = 'NAO_BINARIO',
}

export interface UserState {
  imageUrl: string;
  nome: string;
  email: string;
  telefone: string;
  ddd: string;
  dataNascimento: string;
  cep: string;
  genero: Genero | string;
  nomeSocial?: string;
  profileImageUrl?: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  imageUrl: '',
  nome: '',
  email: '',
  telefone: '',
  dataNascimento: '',
  cep: '',
  genero: '',
  nomeSocial: '',
  profileImageUrl: '',
  ddd: '',
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
    setUserFromGoogle(
      state,
      action: PayloadAction<{ email: string; nome: string; imageUrl: string }>,
    ) {
      state.email = action.payload.email;
      state.nome = action.payload.nome;
      state.imageUrl = action.payload.imageUrl;
    },
    clearUser(state) {
      return initialState;
    },
  },
});

export const { setUser, setUserFromGoogle, clearUser } = userSlice.actions;

export default userSlice.reducer;
