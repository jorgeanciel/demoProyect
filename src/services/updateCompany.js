import { axiosInstance } from '../api/axiosInstance';

export const updateCompany = async (updateData) => {
  try {
    await axiosInstance.put(`empresa/update`, updateData);
  } catch (error) {
    console.error(error);
  }
};
