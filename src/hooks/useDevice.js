import { useMediaQuery } from 'react-responsive';

export const useDevice = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 376px)' });
  const isDesctopDevice = useMediaQuery({ query: '(min-width:1312px' });
  return { isMobileDevice, isDesctopDevice };
};
