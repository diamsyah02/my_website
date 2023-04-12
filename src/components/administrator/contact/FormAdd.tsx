import { useState } from "react"

const FormAdd = ({ insertData }: { insertData: Function }) => {
    const [forms, setForms] = useState<number[]>([])
    function onInsert(e: any) {
        e.preventDefault()
        let body = {
            nama: e.target.nama.value,
            tempat_lahir: e.target.tempat_lahir.value,
            tanggal_lahir: e.target.tanggal_lahir.value,
            alamat: e.target.alamat.value,
            lainnya: e.target.lainnya.value,
        }
        insertData(body)
    }

    function incForms() {
        let data = forms
        data.push(forms.length)
        setForms([...data])
        console.log(data)
    }
    return (
        <>
            <div className="text-2xl font-bold mb-4">Form Add Contact</div>
            <form onSubmit={onInsert}>
                <div className="flex space-x-2">
                    <input type="text" name="jenis_kontak" id="jenis_kontak" className="w-full rounded py-2 px-4 border my-2" placeholder="Jenis Kontak (ex: Whatsapp)..." required={true} />
                    <input type="text" name="alamat_kontak" id="alamat_kontak" className="w-full rounded py-2 px-4 border my-2" placeholder="Alamat Kontak (ex: 0855xxxxx)..." required={true} />
                </div>
                {forms.map((item, i) =>
                    <div className="flex space-x-2" key={i}>
                        <input type="text" name="jenis_kontak" id="jenis_kontak" className="w-full rounded py-2 px-4 border my-2" placeholder="Jenis Kontak (ex: Whatsapp)..." required={true} />
                        <input type="text" name="alamat_kontak" id="alamat_kontak" className="w-full rounded py-2 px-4 border my-2" placeholder="Alamat Kontak (ex: 0855xxxxx)..." required={true} />
                    </div>
                )}
                <div className="flex space-x-2">
                    <button type="button" className="w-full py-3 rounded bg-gray-900 hover:bg-gray-700 text-white" onClick={() => incForms()}>Add Form</button>
                    <button type="submit" className="w-full py-3 rounded bg-gray-900 hover:bg-gray-700 text-white">Save</button>
                </div>
            </form>
        </>
    )
}

export default FormAdd