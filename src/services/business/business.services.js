import { axiosInstance } from '../../api/axiosInstance';

export const businessServices = () => {
  const createCompany = async (data) => {
    try {
      await axiosInstance.post('empresa/create', data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCompany = async () => {
    try {
      const res = await axiosInstance.get('empresa/list');
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateCompany = async (updateData) => {
    try {
      await axiosInstance.put(`empresa/update`, updateData);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    createCompany,
    getAllCompany,
    updateCompany,
  };
};

export default businessServices;
