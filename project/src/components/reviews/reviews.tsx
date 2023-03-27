import { Reviews } from '../../types/offer';
import ReviewComponent from '../review/review';

type ReviewsComponentProps = {
  reviews: Reviews;
}

function ReviewsComponent(props: ReviewsComponentProps) {
  const { reviews } = props;

  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (
        <ReviewComponent review={review} key={review.id} />
      ))}
    </ul>
  );
}

export default ReviewsComponent;
