export const uploadUserDetails = async () => {
    console.log("Uploading user details...");

    try {
        const response = await fetch('/api/upload-users', {
            method: 'POST'
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}