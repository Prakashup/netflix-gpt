
const VideoTitle = ({title, description, rating}) => {
  return (
    <div className="trailer-title absolute top-1/3 px-10 text-cyan-50">
        <h2 className="text-6xl text-white font-extrabold">{title}</h2>
        <p className="w-1/2 py-3 font-extralight text-lg text-ellipsis overflow-hidden ...">{description}</p>
        <p className=" text-2xl">Rating: {rating}</p>
        <div className="flex mt-5">
            <button className=" bg-slate-300 rounded-sm font-bold text-black px-12 py-2 text-xl mr-4">▶️ Play</button>
            <button className="bg-slate-100  bg-opacity-35 rounded-sm font-bold text-black px-8 py-2 text-xl">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
