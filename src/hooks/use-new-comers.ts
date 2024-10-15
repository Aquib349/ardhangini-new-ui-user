import { useContext } from 'react';
import { productContext } from '../context/new comers/new-comers';

export const useNewComers = () => {
    const context = useContext(productContext);
    if (!context) {
        throw new Error('context must be within a contextProvider')
    }
    return context;
}