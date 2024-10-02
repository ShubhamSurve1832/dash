
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const CameraCapture = ({ showCamera, setPatientData, setShowPatientData }) => {
    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [imgPath, setImgPath] = useState(null);

    useEffect(() => {
        if (capturedImage) {
            uploadStorageImage();
        }
    }, [capturedImage]);

    const captureImage = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
    };
    const uploadStorageImage = async () => {
        const randomNumber = Math.floor(Math.random() * 10000);
        try {
            console.log("successfully uploaded")
        } catch (error) {
            console.log("error")
        }
    };

    const refreshImage = () => {
        setCapturedImage(null);
    };
    const handleClickCancel = () => {
        showCamera(false);
    }
    return (
        <>
            <div className='grid grid-cols-2 gap-3'>
                <div className='text-center'>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width="100%" className='rounded-xl min-h-[235px] border border-gray-400'
                    />
                    {capturedImage ?
                        <div className='mt-4'> <i onClick={refreshImage} class="ri-refresh-line text-[#009ee0] mt-4 text-3xl cursor-pointer"></i></div> : <button className='btn btn-primary mt-4' onClick={captureImage}>Click Photo</button>}
                </div>

                <div className='text-center'>
                    <div className='rounded-xl border border-gray-400 min-h-[235px] my-auto flex items-center'>
                        {capturedImage && <img src={capturedImage} alt="Captured" className='h-full' />}
                    </div>
                    <button type='button' className='btn btn-primary mt-4'>Confirm Photo</button>
                </div>
            </div>
            <button type='button' onClick={handleClickCancel} className='btn btn-primary mt-4 w-full '>Cancel</button>
        </>
    );
};

export default CameraCapture;
