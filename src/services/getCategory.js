import { axiosInstance } from '../api/axiosInstance';

export const getCategory = async (id) => {
  try {
    const res = await axiosInstance.get(`categoria/list/${id}`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
