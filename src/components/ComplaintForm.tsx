/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { saveComplain } from '../api';

interface Props {
  onSuccess: () => void;
}

const ComplaintForm: React.FC<Props> = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [titleError, setTitleError] = useState('');
  const [bodyError, setBodyError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTitleError('');
    setBodyError('');
    setError('');
    setSuccess('');

    if (!title.trim()) setTitleError('Title is required.');
    if (!body.trim()) setBodyError('Complaint body is required.');
    if (!title.trim() || !body.trim()) return;

    setSubmitting(true);

    try {
      await saveComplain(title, body);
      setTitle('');
      setBody('');
      setSuccess('Complaint submitted successfully!');
      onSuccess();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('');
      setSuccess('');
    }, 5000);
  
    return () => clearTimeout(timer);
  }, [error, success]);
  



  return (
    <section className="form-section">
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit} className="complaint-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter Your Complaint"
          value={body}
          rows={4}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Complaint'}
        </button>

        {titleError && <p className="error-text">{titleError}</p>}
        {bodyError && <p className="error-text">{bodyError}</p>}
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}
      </form>
    </section>
  );
};

export default ComplaintForm;
