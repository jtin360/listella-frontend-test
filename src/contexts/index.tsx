import { useContext } from 'react';
import { UploadContext } from './upload';

export const useUploadContextProvider = () => useContext(UploadContext);