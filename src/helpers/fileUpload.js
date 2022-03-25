export const fileUpload = async (file) => {
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/edwin3002/upload'
    const formData = new FormData()
    formData.append('upload_preset', 'figuras')
    formData.append('file', file)

    const resp = await fetch(cloudinaryUrl, {
        method: 'POST',
        body: formData
    })

    const cloudResp = await resp.json()

    console.log(cloudResp);

    return cloudResp.secure_url
}