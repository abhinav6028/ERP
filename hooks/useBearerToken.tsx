import React from 'react';
import Cookies from 'js-cookie';

export default function useBearerToken() {

    const token = Cookies.get('auth_token');

    

    console.log(token);

    return token

}
