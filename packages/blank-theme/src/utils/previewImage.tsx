const previewImage = (e: any, setImage: (value: Blob | MediaSource) => void): void => {
   if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0])
   }
}

export default previewImage
