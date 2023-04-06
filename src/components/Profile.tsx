import ProfileEntity from "@/pages/api/profile/entity"

const Profile = ({ data }: { data: ProfileEntity }) => {
    return (
        <>
            <div className="py-3">
                <div className="text-center">
                    <img
                        src="https://servicewebsite.diamsyahh.com/assets/imgs/me.jpg"
                        alt="Foto Profile"
                        className="rounded-full h-36 w-36 object-cover"
                    />
                    <div className="text-2xl mt-2 mb-0">I'am a Technology Enthusiast</div>
                    <div className="text-2xl mt-2 mb-0">And I Like JavaScript</div>
                </div>
                <div className="mt-6">INFO</div>
                <hr />
                <div className="flex space-x-4 mt-4 items-center">
                    <div className="w-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ fill: 'white' }}
                        >
                            <path
                                d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"
                            ></path>
                            <path
                                d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"
                            ></path>
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="mb-0">Fullname</div>
                        <div>{data?.nama}</div>
                    </div>
                </div>
                <div className="flex space-x-4 mt-4 items-center">
                    <div className="w-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ fill: 'white' }}
                        >
                            <path
                                d="M16.997 15c-1.601 0-2.446-.676-3.125-1.219-.567-.453-.977-.781-1.878-.781-.898 0-1.287.311-1.874.78-.679.544-1.524 1.22-3.125 1.22s-2.444-.676-3.123-1.22C3.285 13.311 2.897 13 2 13v5c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-5c-.899 0-1.288.311-1.876.781-.68.543-1.525 1.219-3.127 1.219zM19 5h-6V2h-2v3H5C3.346 5 2 6.346 2 8v3c1.6 0 2.443.676 3.122 1.22.587.469.975.78 1.873.78.899 0 1.287-.311 1.875-.781.679-.543 1.524-1.219 3.124-1.219 1.602 0 2.447.676 3.127 1.219.588.47.977.781 1.876.781.9 0 1.311-.328 1.878-.781C19.554 11.676 20.399 11 22 11V8c0-1.654-1.346-3-3-3z"
                            ></path>
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="mb-0">Place & Birth Date</div>
                        <div>
                            {data?.tempat_lahir}, {data?.tanggal_lahir}
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 mt-4 items-center">
                    <div className="w-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ fill: 'white' }}
                        >
                            <path
                                d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"
                            ></path>
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="mb-0">Address</div>
                        <div>{data?.alamat}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile