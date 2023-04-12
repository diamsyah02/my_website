import ContactEntity from "@/pages/api/contact/entity"
import { useState } from "react"

const FormEdit = ({ data, updateData, cancelEdit } : { data: ContactEntity, updateData: Function, cancelEdit: Function }) => {
    const [typeContact, setTypeContact] = useState<string>(data?.jenis_kontak)
    const [addressContact, setAddressContact] = useState<string>(data?.alamat_kontak)
    function onUpdate(e: any) {
        e.preventDefault()
        let body = {
            jenis_contact: typeContact,
            alamat_contact: addressContact,
        }
        updateData(body)
    }
    return (
        <>
            <form className="mb-10" onSubmit={onUpdate}>
                <div className="w-full flex space-x-2">
                    <input type="text" name="jenis_kontak" id="jenis_kontak" className="w-full rounded py-2 px-4 border my-2" value={typeContact} placeholder="Jenis Kontak (ex: Whatsapp)..." onChange={(text) => setTypeContact(text.target.value)} required={true} />
                    <input type="text" name="alamat_kontak" id="alamat_kontak" className="w-full rounded py-2 px-4 border my-2" value={addressContact} placeholder="Alamat Kontak (ex: 0855xxxxx)..." onChange={(text) => setAddressContact(text.target.value)} required={true} />
                </div>
                <div className="w-full flex space-x-2 px-20">
                    <button type="button" className="w-full py-2 rounded bg-gray-700 hover:bg-gray-300 text-white" onClick={() => cancelEdit()}>Cancel</button>
                    <button type="submit" className="w-full py-2 rounded bg-gray-700 hover:bg-gray-300 text-white">Update</button>
                </div>
            </form>
        </>
    )
}

export default FormEdit