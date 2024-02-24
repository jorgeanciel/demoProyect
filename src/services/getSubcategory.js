import { axiosInstance } from '../api/axiosInstance';

export const getSubcategory = async (id) => {
  try {
    const res = await axiosInstance.get(`subCategoria/list/${id}`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
