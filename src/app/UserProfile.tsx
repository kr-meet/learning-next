/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export const UserProfile = ({ userId }: { userId: string }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfilePhoto = async () => {
            try {
                const res = await fetch(`/api/getProfile?userId=${userId}`);
                if (res.ok) {
                    const blob = await res.blob();
                    const imageUrl = URL.createObjectURL(blob);
                    setImageSrc(imageUrl);
                } else {
                    setImageSrc(null); // Fallback if no image is found
                }
            } catch (error) {
                console.error("Failed to load profile photo:", error);
            }
        };

        fetchProfilePhoto();
    }, [userId]);

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">User Profile Photo</h1>
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt="Profile Photo"
                    className="rounded-full w-32 h-32 object-cover border border-gray-300 shadow-md"
                />
            ) : (
                <p className="text-gray-500">No profile photo available</p>
            )}
        </div>
    );
}