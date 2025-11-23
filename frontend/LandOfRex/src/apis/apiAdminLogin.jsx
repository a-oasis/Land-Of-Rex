import axios from 'axios';
import { baseUrl } from "../config/url.js";

const apiAdminLogin = async (username, password) => {
    try {
        const response = await axios.post(`${baseUrl}/api/v1/auth/login`, {
            username,
            password
        });

        return response.data;  // 성공 시 응답 데이터 반환
    } catch (error) {
        console.error('로그인 실패:', error);
        return null;  // 실패 시 null 반환
    }
};

export default apiAdminLogin;
