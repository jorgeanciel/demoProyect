import { createSlice } from '@reduxjs/toolkit';

const emptyState = {
  id: '',
  Nombre: '',
  Descripcion: '',
  Telefono: '',
  Ruc: '',
  Responsable: '',
  isLoggin: false,
};
const inicialStateLocalStorage = JSON.parse(localStorage.getItem('userData'));

const userSlice = createSlice({
  name: 'user',
  initialState: inicialStateLocalStorage || emptyState,
  reducer: {
    updateUserData(state, action) {
      const newUserData = action.payload;
      const stateLocalStorage = structuredClone({ ...state });

      state.id = newUserData.id;
      stateLocalStorage.id = newUserData.id;
      state.Nombre = newUserData.Nombre;
      stateLocalStorage.Nombre = newUserData.Nombre;
      state.Descripcion = newUserData.Descripcion;
      stateLocalStorage.Descripcion = newUserData.Descripcion;
      state.Telefono = newUserData.Telefono;
      stateLocalStorage.Telefono = newUserData.Telefono;
      state.Ruc = newUserData.Ruc;
      stateLocalStorage.Ruc = newUserData.Ruc;
      state.Responsable = newUserData.Responsable;
      stateLocalStorage.Responsable = newUserData.Responsable;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },
    logIn(state) {
      const stateLocalStorage = structuredClone({ ...state });
      state.islogged = true;
      stateLocalStorage.islogged = true;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },
    reset() {
      //NO SE PUEDE HACER UNA ASIGNACION DIRECTA DE STATE
      localStorage.removeItem('userData');
      return emptyState;
    },
  },
});
export const { updateUserData, logIn, reset } = userSlice.actions;

export default userSlice.reducer;
