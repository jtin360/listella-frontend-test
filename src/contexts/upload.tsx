import React, { createContext, useState } from 'react';
import { File } from '@/types';

interface UploadContextProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export const UploadContext = createContext<UploadContextProps>({
  files: [],
  setFiles: () => {},
});

export const UploadContextProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <UploadContext.Provider value={{ files, setFiles }}>
      {props.children}
    </UploadContext.Provider>
  );
};

export default UploadContextProvider;