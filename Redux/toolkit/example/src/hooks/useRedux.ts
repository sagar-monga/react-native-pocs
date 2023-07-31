import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {MainState} from '../store/reducers';

const useRedux: TypedUseSelectorHook<MainState> = useSelector;

export default useRedux;
