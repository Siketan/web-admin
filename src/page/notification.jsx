import MainCard from "@/components/MainCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
    return (
            <MainCard transparent row center  fullWidth>
                <MainCard width="50%">
                    <p className="text-center font-bold text-xl">Terdapat User Baru Sebagai berikut:</p>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="font-bold">Nama : <span className="font-medium">Risky</span></p>
                            <p className="font-bold">NIK  : <span className="font-medium">350809090909</span></p>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-2 rounded-md box-shadow">
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-white mr-2 cursor-pointer"
                                    />
                                Verifikasi
                            </button>
                        </div>
                    </div>
                </MainCard>
            </MainCard>
    );
};

export default Notification;