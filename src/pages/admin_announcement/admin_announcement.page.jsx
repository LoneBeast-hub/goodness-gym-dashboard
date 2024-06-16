import React, { useRef, useState, useEffect } from 'react';
import { CiImageOn } from 'react-icons/ci';
import Header from "../../components/header/header.component";
import CustomButton from "../../components/custom_button/custom_button.component";

const AdminAnnouncementPage = () => {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const adminDashboardRoute = '/admin_dashboard';

    const handleFileDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        handleFiles(event.dataTransfer.files);
    };

    const handleFileDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleFileChange = (event) => {
        handleFiles(event.target.files);
    };

    const handleFiles = (files) => {
        const file = files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png'];
            if (!validTypes.includes(file.type)) {
                setError('Only JPG and PNG files are allowed.');
                setSelectedImage(null);
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                setError('File size must be less than 2MB.');
                setSelectedImage(null);
                return;
            }
            setError('');
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'title') setTitle(value);
        if (name === 'body') setBody(value);
    };

    useEffect(() => {
        const isValid = title.trim() !== '' && body.trim() !== '' && selectedImage !== null && error === '';
        setIsFormValid(isValid);
    }, [title, body, selectedImage, error]);

    return (
        <div>
            {/* header */}
            <Header pageName='Announcement' routeTo={`${adminDashboardRoute}/announcement`} />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 md:mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Announcement</p>
                {/* body */}
                <div className="border border-gray-e5 p-[1.7rem] md:pl-[4.7rem] md:pr-[3.8rem] md:pb-[1.9rem] md:pt-[3.8rem]">
                    {/* form */}
                    <form className="mt-[14px] md:mt[17px]" action="#">
                        {/* Title input */}
                        <div className="flex w-full flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="title" className="text-[1.4rem] md:text-[2rem] text-black-100">Title</label>
                            <input
                                required
                                className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100"
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={handleInputChange}
                            />
                        </div>
                        {/* Body input */}
                        <div className="flex w-full flex-col mt-[2rem] md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="body" className="text-[1.4rem] md:text-[2rem] text-black-100">Body</label>
                            <textarea
                                required
                                className="border leading-normal resize-none h-[176px] border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100"
                                type="text"
                                name="body"
                                id="body"
                                value={body}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        {/* Image input */}
                        <div className="flex w-full flex-col mt-[2rem] md:gap-[1.5rem] gap-[0.5rem]">
                            <label className="text-[1.4rem] md:text-[2rem] text-black-100">Upload Image</label>
                            <label
                                onDragOver={handleFileDragOver}
                                onDrop={handleFileDrop}
                                htmlFor="image"
                                className="cursor-pointer border flex flex-col items-center justify-center leading-normal border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100"
                            >
                                {selectedImage ? (
                                    <img src={selectedImage} alt="Selected" className="max-h-[200px]" />
                                ) : (
                                    <>
                                        <CiImageOn className="text-gray-c4 text-[4rem] md:text-[9rem]" />
                                        <p className="text-black-2 text-center text-[1.4rem] md:text-[1.6rem]">
                                            Drag and drop files, or <span className="font-medium text-[1.4rem] text-primary-100 md:text-[1.6rem]">Browse Files</span> <br /> JPG, PNG - Max file size 2MB
                                        </p>
                                    </>
                                )}
                                <input
                                    className="hidden"
                                    ref={fileInputRef}
                                    required
                                    type="file"
                                    name="image"
                                    id="image"
                                    accept="image/jpeg, image/png"
                                    onChange={handleFileChange}
                                />
                            </label>
                            {error && <p className="text-red-500 text-[1.4rem] md:text-[1.6rem] mt-[0.5rem]">{error}</p>}
                        </div>
                        {/* Update button */}
                        <div className="w-full flex mt-[2rem] md:justify-end">
                            <CustomButton setType='submit' AddClassName={`w-full md:w-fit py-[1.5rem] md:py-[2.5rem] md:px-[7.2rem]`} disabled={!isFormValid} primaryColored={isFormValid? true : false} grayColored={isFormValid? false : true}>
                                <span className="text-[1.6rem] md:text-[2.4rem]">Send</span>
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAnnouncementPage;