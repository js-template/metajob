/**
 *  Convert an image URL to a File object
 * @param {string} imageUrl url of the image
 * @param {string} fileName name of the file
 * @example
 * const file = await urlToFile("https://example.com/image.jpg", "image.jpg")
 */
export const urlToFile = async (imageUrl: string, fileName: string) => {
   // Fetch the image from the provided URL
   const response = await fetch(imageUrl)

   // Convert the response into a Blob
   const blob = await response.blob()

   // Create a File from the Blob with a custom name and file type (e.g., image/jpeg)
   const file = new File([blob], fileName, { type: blob.type })

   // Use DataTransfer to create a FileList
   const dataTransfer = new DataTransfer()
   dataTransfer.items.add(file)

   return dataTransfer.files // This is the FileList
}
