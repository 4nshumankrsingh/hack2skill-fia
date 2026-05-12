import { useRef, useCallback } from 'react';

export function useDragScroll() {
  const ref = useRef<HTMLOListElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';

    const startX = e.pageX - el.offsetLeft;
    const scrollStart = el.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollStart - walk;
    };

    const handleMouseUp = () => {
      el.style.cursor = 'grab';
      el.style.removeProperty('user-select');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  return { ref, onMouseDown: handleMouseDown };
}