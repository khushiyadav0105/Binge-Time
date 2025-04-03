import { useSelector } from "react-redux";

const useLanguage = () => {
  return useSelector((store) => store.config.lang); 
};

export default useLanguage;
