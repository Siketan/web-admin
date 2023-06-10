// import React from "react";
import MainCard from "@/components/MainCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Notification = () => {
const names = ["Risky", "John", "Jane", "Michael", "Sarah"];
const niks = ["350809090909", "123456789", "987654321", "567890123", "789012345"];

return (
<MainCard transparent row center fullWidth>
    <MainCard width="50%" className="mt-14">
    <p className="text-center font-bold text-xl">
        Terdapat User Baru Sebagai berikut:
    </p>
    {names.map((name, index) => (
        <div className="grid grid-cols-2 border rounded-md shadow-md" key={index}>
            <div className="px-5 py-2">
                <p className="font-bold">
                Nama : <span className="font-medium">{name}</span>
                </p>
                <p className="font-bold">
                NIK : <span className="font-medium">{niks[index]}</span>
                </p>
            </div>
            <div className="flex justify-end px-5 py-2 rounded-md">
                <button className="bg-green-500 hover:bg-green-600 text-white px-2 rounded-md box-shadow">
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-white mr-2 cursor-pointer"
                />
                Verifikasi
                </button>
            </div>
        </div>
    ))}
    </MainCard>
</MainCard>
);
};

export default Notification;