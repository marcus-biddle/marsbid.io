export default function Workouts() {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Workouts</h1>
            <p className=' my-5'>{'Follow along if you\'re interested. I try to keep this update to date, but, ultimately, this is for myself and to keep future me accountable.'}</p>
            <div>
                {/* Could put this in a database, turn into links to go more into detail */}
                {/* Probably only allow 10 to be shown then add load more button. Tailwinc has a divide line */}
                <span>
                    <>03/31/2023 - Upper Body</>
                </span>
            </div>
        </div>
    )
}