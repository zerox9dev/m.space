import { useState, useEffect } from 'react';
import { DribbbleShot } from '@/app/data';

export const useDribbbleShots = () => {
  const [shots, setShots] = useState<DribbbleShot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShots = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/dribbble/shots');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Dribbble shots');
        }
        
        const data = await response.json();
        setShots(data);
      } catch (err) {
        console.error('Error fetching Dribbble shots:', err);
        setError('Failed to load Dribbble shots');
      } finally {
        setLoading(false);
      }
    };

    fetchShots();
  }, []);

  return { shots, loading, error };
}; 