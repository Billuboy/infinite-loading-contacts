import 'styles/components/home/skeletonCard.css';

export default function SkeletonCard() {
  return (
    <article className="skeleton-card">
      <div className="skeleton-card-top-element">
        <div />
        <p />
      </div>
      <div className="skeleton-card-bottom-element">
        <p />
        <p />
        <p />
      </div>
    </article>
  );
}
