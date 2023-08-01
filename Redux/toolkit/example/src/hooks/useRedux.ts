import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {MainState} from '../store/reducers';

// Custom Hook for accessing redux in react components
const useRedux: TypedUseSelectorHook<MainState> = useSelector;

export default useRedux;
