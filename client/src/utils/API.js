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