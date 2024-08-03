import { useSelector } from "react-redux";

const useReduxSelector = (selector) => {
  if (typeof selector !== 'function') {
    throw new Error('Selector must be a function');
  }
  
  const data = useSelector(selector);
  return data;
};

export { useReduxSelector };
