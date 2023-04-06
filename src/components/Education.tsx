import EducationEntity from "@/pages/api/education/entity"

const Education = ({ data }: { data: [EducationEntity] }) => {
    return (
        <>
            <div className="py-3">
                <div>EDUCATION</div>
                <hr />
                {data.map((item, i) =>
                    <div
                        className="flex space-x-4 mt-4 items-center"
                        key={i}
                    >
                        <div className="w-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ fill: 'white' }}
                            >
                                <path
                                    d="M21 10h-2V4h1V2H4v2h1v6H3a1 1 0 0 0-1 1v9h20v-9a1 1 0 0 0-1-1zm-7 8v-4h-4v4H7V4h10v14h-3z"
                                ></path>
                                <path d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"></path>
                            </svg>
                        </div>
                        <div className="w-full">
                            <div className="mb-0">{item?.nama_sekolah} ({item?.mulai_sekolah} - {item?.selesai_sekolah})</div>
                            <div>{item?.alamat_sekolah}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Education