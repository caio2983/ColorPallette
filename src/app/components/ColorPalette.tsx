export default function ColorPalette({ colors }) {
  return (
    <div className="m-4 p-4 text-center">
      <h2>Color Palette</h2>
      <div style={{ display: "flex", flexWrap: "wrap", columnCount: 2 }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
              width: "50px",
              height: "50px",
              margin: "5px",
              border: "1px solid #000",
            }}
          />
        ))}
      </div>
    </div>
  );
}
