
export const PhotoGallery = () => {
  const photos = [
    {
      src: "/lovable-uploads/412c3de5-6971-4ba5-a9fd-7fa51afe548a.png",
      alt: "Nonno with grandson",
      title: "Generations Connected"
    },
    {
      src: "/lovable-uploads/2df1a506-4bca-48c2-afe0-74da180625fe.png",
      alt: "Nonno with hearts",
      title: "Spreading Love"
    },
    {
      src: "/lovable-uploads/f7ced960-6e2c-4d56-9ec9-c560a69b482c.png",
      alt: "Professional Nonno",
      title: "Timeless Style"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Moments in
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Time</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of cherished moments that tell the story of a life well-lived and wisdom generously shared.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
