import axios from 'axios';
// const axios = require('axios');

const loginController: any = {};
loginController.getUserData = async (accessToken: string) => {
  try {
    const { data } = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};

export default loginController;
