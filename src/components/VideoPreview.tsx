const youtubeShorts = [
  {
    title: "Mission Force 22 short preview 1",
    src: "https://www.youtube.com/embed/KhltriFYR4M",
  },
  {
    title: "Mission Force 22 short preview 2",
    src: "https://www.youtube.com/embed/8DXDO8MJVrs",
  },
];

export function VideoPreview() {
  return (
    <div className="overflow-hidden rounded-[1.6rem] bg-deep shadow-soft">
      <div className="bg-[linear-gradient(135deg,#173343,#23576a)] p-3">
        <video
          className="aspect-video w-full rounded-[1.1rem] bg-black object-cover shadow-[0_18px_45px_rgba(0,0,0,0.24)]"
          controls
          playsInline
          preload="none"
          poster="images/reference/jesus-calms-the-storm-cover.webp"
        >
          <source src="videos/jesus-calms-the-storm-preview.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
      <div className="bg-white p-4 sm:p-5">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-coral">
          Watch the kit in motion
        </p>
        <p className="mt-2 text-xl font-black leading-tight text-deep">
          A quick video preview helps the resource feel alive before the walkthrough continues.
        </p>
      </div>
      <div className="grid gap-3 bg-white px-4 pb-4 sm:grid-cols-2 sm:px-5 sm:pb-5">
        {youtubeShorts.map((short) => (
          <article key={short.src} className="overflow-hidden rounded-[1.15rem] bg-deep shadow-soft">
            <iframe
              className="aspect-[9/16] w-full"
              src={short.src}
              title={short.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </div>
  );
}
