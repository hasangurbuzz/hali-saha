import { React, useState, useEffect } from 'react'
import "./Editor.css"


function Editor(props) {

    const { displayModeToggler, admin, editHaliSahaHandler, chosenElement } = props


    const [haliSahaName, setHaliSahaName] = useState(chosenElement.name)
    const [contactNumber, setcontactNumber] = useState(chosenElement.tel)
    const [address, setAddress] = useState(chosenElement.address)

    const [images, setImages] = useState([])
    const [imageUrls, setImageUrls] = useState([chosenElement.image])

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = []
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
        setImageUrls(newImageUrls)
    }, [images]);

    const haliSahaNameHandler = (e) => {
        setHaliSahaName(
            e.target.value
        )
    }
    const addressHandler = (e) => {
        setAddress(
            e.target.value
        )
    }
    const contactNumberHandler = (e) => {
        setcontactNumber(
            e.target.value
        )
    }



    const imageHandler = (e) => {
        setImages([...e.target.files])
    }

    const haliSahaGenerator = () => {
        return {
            id: chosenElement.id,
            name: haliSahaName,
            image: imageUrls[0],
            address: address,
            tel: contactNumber,
            chosenDates: chosenElement.chosenDates,
            admin: { username: admin.username }
        }
    }

    const updateHaliSahaHandler = () => {
        let haliSaha = haliSahaGenerator()
        editHaliSahaHandler(haliSaha)
    }

    return (
        <div className='container'>
            <label >Halı Saha Adı</label>
            <input onChange={haliSahaNameHandler} value={haliSahaName} type={"text"} />

            <label>Adresi</label>
            <input onChange={addressHandler} value={address} type={"text"} />

            <label>İletişim Numarası</label>
            <input onChange={contactNumberHandler} value={contactNumber} type={"number"} />

            <label>Resim</label>
            <input type={"file"} onChange={imageHandler} accept="image/*" />
            <div className='image-thumb-wrapper'>
                <img className='image-thumb' src={imageUrls[0]} alt="" />
            </div>

            <div className='editor-button-wrapper'>
                <button className='button-confirm' onClick={updateHaliSahaHandler}>Kaydet</button>
                <button className='button-cancel' onClick={displayModeToggler}>İptal</button>
            </div>


        </div>
    )
}

export default Editor