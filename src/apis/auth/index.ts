import axios from "@/config/axiosConfig";

export const signupRequest = async (data: { username: string; email: string; password: string }) => {
  try {
    const response = await axios.post('/users/signup', data);
    return response.data;
  } catch (error: any) {
    console.error('Signup request failed:', error);
    throw error?.response?.data;
  }
};

export const signinRequest = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post('/users/signin', data);
    return response.data;
  } catch (error: any) {
    console.error('Signin request failed:', error);
    throw error?.response?.data;
  }
};