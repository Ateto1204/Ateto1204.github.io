function SkillTag({skill}: {skill: string}) {
    return (
        <div className='mr-3 px-3 bg-slate-400 rounded-2xl border opacity-75 select-none'>
            {skill}
        </div>
    )
}

export default SkillTag;