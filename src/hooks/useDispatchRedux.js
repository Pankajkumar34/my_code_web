import { useDispatch } from 'react-redux';

const useReduxDispatch = () => {
  const dispatch = useDispatch();

  return (action) => dispatch(action);
};

export default useReduxDispatch;
