"use client";
import { useState } from "react";

export default function UserInfo() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        alert("Data Saved!!");
    }

    return (
        <div className="flex flex-col items-center justify-around h-full p-4 bg-gray-100 space-y-2">
            <h1 className="text-2xl font-semibold text-gray-700 text-center">
                Personal Information
            </h1>
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            className="my-1 block w-2/3 border-gray-300 rounded-md shadow-sm border focus:border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                            Age
                        </label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={userData.age}
                            onChange={handleChange}
                            className="my-1 block w-2/3 border-gray-300 rounded-md shadow-sm border focus:border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            className="my-1 block w-2/3 border-gray-300 rounded-md shadow-sm border focus:border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={userData.phone}
                            onChange={handleChange}
                            className="my-1 block w-2/3 border-gray-300 rounded-md shadow-sm border focus:border-none"
                        />
                    </div>
                    <label htmlFor="gender">Gender</label>
                    <div onChange={handleChange} className="space-x-3">
                        <label>
                            <input type="radio" name="gender" value="male" checked={userData.gender === 'male'} />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="female" checked={userData.gender === 'female'} />
                            Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="other" checked={userData.gender === 'other'} />
                            Other
                        </label>
                    </div>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleSubmit}>
                        Save Changes
                    </button>

                </form>
            </div>
        </div>
    );
}
