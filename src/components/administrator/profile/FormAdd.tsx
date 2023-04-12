const FormAdd = ({ insertData } : { insertData: Function }) => {
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
    return(
        <>
            <div className="text-2xl font-bold mb-4">Form Add Profile</div>
            <form onSubmit={onInsert}>
                <input type="text" name="nama" id="nama" className="w-full rounded py-2 px-4 border my-2" placeholder="Nama..." required={true} />
                <input type="text" name="tempat_lahir" id="tempat_lahir" className="w-full rounded py-2 px-4 border my-2" placeholder="Tempat Lahir..." required={true} />
                <input type="date" name="tanggal_lahir" id="tanggal_lahir" className="w-full rounded py-2 px-4 border my-2" placeholder="Tanggal Lahir..." required={true} />
                <textarea name="alamat" id="alamat" rows={5} className="w-full rounded py-2 px-4 border my-2" placeholder="Alamat..." required={true}></textarea>
                <textarea name="lainnya" id="lainnya" rows={5} className="w-full rounded py-2 px-4 border my-2" placeholder="Promosi Diri..." required={true}></textarea>
                <button type="submit" className="w-full py-3 rounded bg-gray-900 hover:bg-gray-700 text-white">Save</button>
            </form>
        </>
    )
}

export default FormAdd