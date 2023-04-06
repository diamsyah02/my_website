import SkillEntity from "@/pages/api/skill/entity"

const Skill = ({ data }: { data: [SkillEntity] }) => {
    return (
        <>
            <div className="shadow-lg p-5">
                <div className="text-2xl font-bold mb-2">Skill</div>
                <hr />
                <div className="grid grid-cols-2 gap-4 mt-3">
                    {data.map((item, i) =>
                        <div className="flex space-x-2" key={i}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#252525' }}>
                                <path
                                    d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z">
                                </path>
                            </svg>
                            <span>{item?.nama_kemampuan}</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Skill