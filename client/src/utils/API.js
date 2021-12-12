export const createUser = (userData) => {
    return fetch('api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const createEval = (evalData) => {
    return fetch('api/users/eval', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(evalData),
    });
};

export const signIn = (userData) => {
    return fetch('api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const allUsers = () => {
    return fetch('api/users/allusers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
