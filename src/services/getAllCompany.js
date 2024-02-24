import { axiosInstance } from '../api/axiosInstance';

export const getAllCompany = async () => {
  try {
    const res = await axiosInstance.get('empresa/list');
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
