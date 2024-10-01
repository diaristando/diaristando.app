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
}

const initialState: UserState = {
  nome: '',
  email: '',
  telefone: '',
  dataNascimento: '',
  cep: '',
  genero: '',
  nomeSocial: '',
};

interface UpdateFieldPayload {
  fieldName: keyof UserState;
  value: any;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return action.payload;
    },
    clearUser(state) {
      return initialState;
    },
    updateField: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { fieldName, value } = action.payload;
      if (state.hasOwnProperty(fieldName)) {
        state[fieldName] = value;
      } else {
        console.warn(`Campo ${fieldName} não existe no estado do usuário`);
      }
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
