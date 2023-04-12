import ProfileEntity from "@/pages/api/profile/entity"
import { useState } from "react"

const FormEdit = ({ data, updateData } : { data: ProfileEntity, updateData: Function }) => {
    const [nama, setNama] = useState(data?.nama)
    const [tempatLahir, setTempatLahir] = useState(data?.tempat_lahir)
    const [tanggalLahir, setTanggalLahir] = useState(data?.tanggal_lahir)
    const [alamat, setAlamat] = useState(data?.alamat)
    const [lainnya, setLainnya] = useState(data?.lainnya)
    function onUpdate(e: any) {
        e.preventDefault()
        let body = {
            nama: nama,
            tempat_lahir: tempatLahir,
            tanggal_lahir: tanggalLahir,
            alamat: alamat,
            lainnya: lainnya,
        }
        updateData(body)
    }
    return(
        <>
            <div className="text-2xl font-bold mb-4">Form Edit Profile</div>
            <form onSubmit={onUpdate}>
                <input type="text" name="nama" id="nama" className="w-full rounded py-2 px-4 border my-2" value={nama} onChange={(text) => setNama(text.target.value)} placeholder="Nama..." />
                <input type="text" name="tempat_lahir" id="tempat_lahir" className="w-full rounded py-2 px-4 border my-2" value={tempatLahir} onChange={(text) => setTempatLahir(text.target.value)} placeholder="Tempat Lahir..." />
                <input type="date" name="tanggal_lahir" id="tanggal_lahir" className="w-full rounded py-2 px-4 border my-2" value={tanggalLahir} onChange={(text) => setTanggalLahir(text.target.value)} placeholder="Tanggal Lahir..." />
                <textarea name="alamat" id="alamat" rows={5} className="w-full rounded py-2 px-4 border my-2" onChange={(text) => setAlamat(text.target.value)} defaultValue={alamat} placeholder="Alamat..."></textarea>
                <textarea name="alamat" id="alamat" rows={5} className="w-full rounded py-2 px-4 border my-2" onChange={(text) => setLainnya(text.target.value)} defaultValue={lainnya} placeholder="Promosi Diri..."></textarea>
                <button type="submit" className="w-full py-3 rounded bg-gray-900 hover:bg-gray-700 text-white">Update</button>
            </form>
        </>
    )
}

export default FormEdit