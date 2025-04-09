import React from 'react';
import { Complain } from '../types';
import ComplaintCard from './ComplaintCard';

interface Props {
  complains: Complain[];
  loading: boolean;
  error: string;
}

const ComplaintList: React.FC<Props> = ({ complains, loading, error }) => (
  <section className="list-section">
    <h2>Complaint List</h2>
    {loading ? (
      <p className="loading">Loading complaints...</p>
    ) : error ? (
      <p className="error-text">{error}</p>
    ) : complains.length === 0 ? (
      <p>No complaints available.</p>
    ) : (
      <div className="complaint-list">
        {complains.map((c) => (
          <ComplaintCard key={c.Id} complain={c} />
        ))}
      </div>
    )}
  </section>
);

export default ComplaintList;
