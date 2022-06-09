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
            <form onSubmit={createHaliSahaHandler} className="form-wrapper" >
                <label >Halı Saha Adı</label>
                <input className='form-input' onChange={haliSahaNameHandler} type={"text"} required  />

                <label>Adresi</label>
                <input className='form-input'  onChange={addressHandler} type={"text"}  required/>

                <label>İletişim Numarası</label>
                <input className='form-input' onChange={contactNumberHandler} type={"number"} required />

                <label>Resim</label>
                <input className='form-input' type={"file"} onChange={imageHandler} accept="image/*" required/>
                <div className='image-thumb-wrapper'>
                    <img className='image-thumb' src={imageUrls[0]} alt="" />
                </div>
                <input type={'submit'} className='button-confirm' value={"Kaydet"}/>
                <button className='button-cancel' onClick={displayModeToggler}>İptal</button>
            </form>


        </div>
    )
}

export default CreationPanel