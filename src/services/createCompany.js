import { axiosInstance } from '../api/axiosInstance';

export const createCompany = async (data) => {
  try {
    await axiosInstance.post('empresa/create', data);
  } catch (error) {
    console.error(error);
  }
};
