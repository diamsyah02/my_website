import ExperieinceEntity from "@/pages/api/experience/entity"

const Experience = ({ data }: { data: [ExperieinceEntity] }) => {
    return (
        <>
            <div className="shadow-lg p-5 mt-5">
                <div className="text-2xl font-bold mb-2">Experience</div>
                <hr />
                {data.map((item, i) =>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 mb-8 md:mb-0 my-2 md:my-4" key={i}>
                        <div>
                            <div className="font-bold">{item?.nama_perusahaan}</div>
                            <small>{item?.mulai_kerja} - {item?.selesai_kerja}</small>
                        </div>
                        <div>
                            <div className="uppercase font-bold">{item?.posisi_pekerjaan}</div>
                            <p>{item?.tanggung_jawab}</p>
                            <small>{item?.alamat_tempat_kerja}</small>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Experience