import ContactEntity from "@/pages/api/contact/entity"

const Contact = ({ data }: { data: [ContactEntity] }) => {
    return (
        <>
            <div className="py-3">
                <div>CONTACT</div>
                <hr />
                {data.map((item, i) =>
                    <div className="flex space-x-4 mt-4 items-center" key={i}>
                        <div className="w-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ fill: 'white' }}
                            >
                                <path
                                    d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"
                                ></path>
                            </svg>
                        </div>
                        <div className="w-full">
                            <div className="mb-0">{item?.jenis_kontak}</div>
                            <div>{item?.alamat_kontak}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Contact