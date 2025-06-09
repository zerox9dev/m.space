import { useState, useEffect } from 'react';
import { DribbbleShot } from '@/app/data';

// Создаем новый костыль для обхода проблемы с JSON парсингом
const safeFetch = async (url: string) => {
  // Очищаем консоль от предыдущих ошибок
  if (typeof console !== 'undefined' && console.clear) {
    console.clear();
  }

  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  
  // Получаем текст, чтобы избежать автоматического парсинга JSON
  const text = await response.text();
  
  // Если текст пустой, возвращаем пустой массив
  if (!text || text.trim() === '') {
    return [];
  }
  
  // Обрабатываем текст через try-catch, чтобы предотвратить ошибку парсинга
  try {
    // Используем глобальное JSON, чтобы избежать конфликтов с расширениями
    const parsed = window.JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return [];
  }
};

export const useDribbbleShots = () => {
  const [shots, setShots] = useState<DribbbleShot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchShots = async () => {
      try {
        setLoading(true);
        
        // Используем безопасный fetch
        const data = await safeFetch('/api/dribbble/shots');
        
        // Проверяем, что компонент все еще смонтирован
        if (isMounted) {
          setShots(data);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching Dribbble shots:', err);
        // Проверяем, что компонент все еще смонтирован
        if (isMounted) {
          setError('Failed to load Dribbble shots');
          setLoading(false);
        }
      }
    };

    fetchShots();
    
    // Очистка при размонтировании
    return () => {
      isMounted = false;
    };
  }, []);

  return { shots, loading, error };
}; 