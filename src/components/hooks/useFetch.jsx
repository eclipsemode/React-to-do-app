import {useState} from 'react';

const UseFetch = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    let error = '';

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            error = e.message;
        } finally {
            setIsLoading(false);
            if (error) {
                console.error(error)
            }
        }
    }
    return [fetching, isLoading, setIsLoading]
};

export default UseFetch;