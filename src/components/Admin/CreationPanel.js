import { React, useState, useEffect } from 'react'
import "./Editor.css"

function CreationPanel(props) {
    const { displayModeToggler, admin, addHaliSahaHandler } = props


    const [haliSahaName, setHaliSahaName] = useState('')
    const [contactNumber, setcontactNumber] = useState('')
    const [address, setAddress] = useState('')

    const [images, setImages] = useState([])
    const [imageUrls, setImageUrls] = useState([])

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
            id: Math.random().toString(),
            name: haliSahaName,
            image: imageUrls[0],
            address: address,
            tel: contactNumber,
            chosenDates: [],
            admin: { username: admin.username }
        }
    }

    const createHaliSahaHandler = () => {
        let haliSaha = haliSahaGenerator()
        addHaliSahaHandler(haliSaha)
    }




    return (
        <div className='container'>
            <label >Halı Saha Adı</label>
            <input onChange={haliSahaNameHandler} type={"text"} />

            <label>Adresi</label>
            <input onChange={addressHandler} type={"text"} />

            <label>İletişim Numarası</label>
            <input onChange={contactNumberHandler} type={"number"} />

            <label>Resim</label>
            <input type={"file"} onChange={imageHandler} accept="image/*" />
            <div className='image-thumb-wrapper'>
                <img className='image-thumb' src={imageUrls[0]} alt=""/>
            </div>

            <button onClick={createHaliSahaHandler}>Kaydet</button>
            <button onClick={displayModeToggler}>İptal</button>
        </div>
    )
}

export default CreationPanel