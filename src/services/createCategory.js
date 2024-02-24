import { axiosInstance } from '../api/axiosInstance';

export const createCategory = async (data) => {
  try {
    await axiosInstance.post('categoria/create', data);
  } catch (error) {
    console.error(error);
  }
};
