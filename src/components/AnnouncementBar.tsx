import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container announcement-inner">
        <div className="announcement-text">
          <span className="announcement-badge">Complimentary</span>
          <span>
            Get a <strong>Free Professional Resume Review</strong> before deciding on a rewrite.
          </span>
          <Link className="announcement-link" href="/#free-review">
            Request Review &rarr;
          </Link>
        </div>
        <div className="announcement-contact">
          <span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}
            >
              <path d="M12 21s7-5.6 7-11.2A7 7 0 0 0 5 9.8C5 15.4 12 21 12 21Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            100% U.S.-Based Writers
          </span>
          <a href="mailto:ceo.careerfixers@gmail.com">ceo.careerfixers@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
