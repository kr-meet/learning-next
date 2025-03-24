export const uploadUserDetails = async (userId: string, profile: File | undefined) => {
    console.log("Uploading user details...");

    const formData = new FormData();
    formData.append('id', userId);
    if(profile) formData.append('profilePhoto', profile);

    try {
        const response = await fetch('/api/upload-user', {
            method: 'POST',
            body: formData,
        });
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const uploadUsers = async () => {
    console.log("Uploading many users...");

    try {
        const response = await fetch('/api/upload-users', {
            method: 'POST',
        });
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const searchUsers = async (query: string) => {
    console.log("Searching users...");

    try {
        const response = await fetch('/api/search-users', {
            method: 'POST',
            body: JSON.stringify({ query: query }),
        });
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}