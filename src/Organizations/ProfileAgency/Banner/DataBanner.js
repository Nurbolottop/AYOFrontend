import React, { useState } from 'react';
import "./DataBanner.scss";
import "react-phone-input-2/lib/style.css";
import plus from "../../../img/icons/plus.svg";

function DataBanner() {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [description, setDescription] = useState('');
    const maxDescriptionLength = 80;

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
            setError(null);
        } else {
            setError('Пожалуйста, выберите изображение.');
            setImage(null);
        }
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    return (
        <section className='DataBanner'>
            <h1 className='DataBanner__title'>Загрузка баннеров</h1>
            <div className='DataBanner__container-con'>
                <button className='DataBanner__container-con__block'><img src={plus} alt="Add" /></button>
                <button className='DataBanner__container-con__block'>Рассылка</button>
                <button className='DataBanner__container-con__block'>Обложка компании</button>
                <button className='DataBanner__container-con__block'><p>Фото интерьера</p></button>
            </div>
            <div className="dropzone">
                <input type="file" id="file-upload" className="file-upload" accept="image/*" onChange={handleImageUpload} />
                <label htmlFor="file-upload">
                    <div className="upload-icon"></div>
                    <p>Загрузите фото</p>
                </label>
            </div>
            <div className='dropzone__banner'>
                <input
                    className='dropzone__banner-text-input'
                    placeholder='Описание баннера'
                    value={description}
                    onChange={handleDescriptionChange}
                    maxLength={maxDescriptionLength}
                />
                <p className='dropzone__banner-text'>
                    {description.length}/{maxDescriptionLength}
                </p>
            </div>
            <div className='dropzone__banner-line'></div>
            <button className='DataBanner__btn'>Сохранить</button>
        </section>
    );
}

export default DataBanner;
