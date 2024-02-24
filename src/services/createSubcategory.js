import { axiosInstance } from '../api/axiosInstance';

export const createSubcategory = async (data) => {
  try {
    await axiosInstance.post('subcategoria/create', data);
  } catch (error) {
    console.error(error);
  }
};
