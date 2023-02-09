import React, { useCallback, useState } from 'react';
import { useUploadContextProvider } from '@/contexts';
import styles from '@/styles/DropAndDrop.module.css'
import UploadGray from '@/assets/upload-gray.svg';
import Upload from '@/assets/upload.svg';
import Image from 'next/image'

const DragAndDrop: React.FC = () => {
  const { files, setFiles } = useUploadContextProvider();
  const [UploadIcon, setUploadIcon] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const acceptedFiles = Array.from(e.dataTransfer.files).filter(
        (file: File) =>
          ['image/jpeg', 'image/png', 'image/webp'].includes(file.type) && file.size <= 5000000
      );
      if (acceptedFiles.length === 0) {
        setError('No files accepted. Please only upload jpg, png, or webp files with a size limit of 5 MB.');
        setFiles([]);
        return;
      }
      if (acceptedFiles.length > 5) {
        setError('You have too many high quality images.');
        setFiles([]);
        return;
      }
      setFiles(acceptedFiles);
      setError(null);
    },
    [setFiles]
  );

  const handleFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, [fileInputRef]);

const handleFileChange = useCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = fileInputRef.current?.files;
    if (!files) return;

    const acceptedFiles = Array.from(files).filter(
      (file: File) =>
        ['image/jpeg', 'image/png', 'image/webp'].includes(file.type) && file.size <= 5000000
    );
    if (acceptedFiles.length === 0) {
      setError('No files accepted. Please only upload jpg, png, or webp files with a size limit of 5 MB.');
      setFiles([]);
      return;
    }
    if (acceptedFiles.length > 5) {
      setError('You have too many high quality images.');
      setFiles([]);
      return;
    }
    setFiles(acceptedFiles);
    setError(null);
  },
  [fileInputRef, setFiles]
);

  return (
    <div className={`${styles['dnd-container']} flex flex-col items-center`}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {files.length}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <h1 className={`${styles['upload-text']}`}>Upload Your Photos</h1>
        <hr className={`${styles['spacer-purple']}`}></hr>
        <p className={`${styles['description-text']}`}>Select up to 5 high quality images to upload into our database. If your image is selected, a member of our team will contact you for atribution.</p>
      </div>
      <div className='mb-4'>
        <button className={`${styles['dnd-button']} ${UploadIcon ? `${styles.blue}` : `${styles.gray}`}`} onClick={handleFileInput}>
          <div className={`${styles['dnd-wrapper']} flex flex-row items-center mx-auto`} onMouseOver={() => setUploadIcon(false)} onMouseOut={() => setUploadIcon(true)}>
              <Image src={UploadIcon ? Upload : UploadGray} height={34} width={46} alt='Upload-Icon'/>
              <p className={`${styles['dnd-text']} ${UploadIcon ? `${styles.blue}` : `${styles.gray}`}`}>Drag & Drop Your Images</p>
          </div>
        </button>
      </div>
      <form action='/uploadfiles' method='post'>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          multiple
          accept="image/jpeg, image/png, image/webp"
        />
      </form>
    </div>
  );
};

export default DragAndDrop;