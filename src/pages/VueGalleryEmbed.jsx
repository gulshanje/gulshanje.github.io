const isLocal = import.meta.env.DEV;

const VueGalleryEmbed = () => {
  const iframeUrl = isLocal
    ? "http://localhost:5173/" // local dev server
    : "https://gulshanje.github.io/vue-gallery/"; // GitHub Pages deployed URL

  return (
    <iframe
      src={iframeUrl}
      title="Vue Gallery"
      width="100%"
      height="800"
      style={{ border: "none" }}
    />
  );
};

export default VueGalleryEmbed;
