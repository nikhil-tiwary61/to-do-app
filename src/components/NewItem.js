import "./NewItem.css";

export default function NewItem({ title, description }) {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
