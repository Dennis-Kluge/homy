import {useContext} from 'react';
import HomeContext from '../context/HomeContext';

const useHomeContext = () => useContext(HomeContext);

export default useHomeContext;
