function Loader({ size, color1, color2 }) {
  return (
    <div className="my-auto flex justify-center items-center">
      <div className={`relative ${size}`}>
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            background: `conic-gradient(from 0deg, ${color1}, ${color2})`,
            WebkitMask: "radial-gradient(circle, transparent 55%, black 61%)",
            mask: "radial-gradient(circle, transparent 55%, black 65%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Loader;
