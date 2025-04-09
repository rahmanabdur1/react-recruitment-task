import React from 'react';
import { Complain } from '../types';

const ComplaintCard: React.FC<{ complain: Complain }> = ({ complain }) => (
  <div className="complaint-card">
    <h3>{complain.Title}</h3>
    <p>{complain.Body}</p>
  </div>
);

export default ComplaintCard;
