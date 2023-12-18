import React, { ChangeEvent, useState } from 'react';

import iconUpload from './assets/icon-upload.svg';

import styles from './AvatarUpload.module.css';

interface AvatarUploadProps {
    onUpload: (file: File) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onUpload }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (fileList && fileList.length > 0) {
            const file = fileList[0];
            setSelectedFile(file);

            const filePreviewURL = URL.createObjectURL(file);
            setPreviewURL(filePreviewURL);

            onUpload(file);
        }
    };

    return (
        <div className={styles.avatarUploadContainer}>
            <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                {previewURL ? (
                    <img src={previewURL} alt="Avatar preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                ) : (
                    <img src={iconUpload} alt="Avatar upload" />
                )}
                <span style={{ marginLeft: '8px' }}>Upload avatar</span>
            </label>
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            {selectedFile && (
                <div>
                    <p>Selected File: {selectedFile.name}</p>
                </div>
            )}
        </div>
    );
};

export default AvatarUpload;
