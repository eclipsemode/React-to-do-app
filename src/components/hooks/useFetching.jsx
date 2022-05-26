import React, {useState} from 'react';

const UseFetching = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (callback) => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, setIsLoading, error]
};

export default UseFetching;