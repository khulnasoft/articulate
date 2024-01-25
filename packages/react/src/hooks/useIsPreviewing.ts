import { Builder } from '@builder.io/sdk';
import { useEffect, useState } from 'react';

export function useIsPreviewing() {
  const [isPreviewing, setIsPreviewing] = useState(false);

  useEffect(() => {
    if (Builder.isEditing || Builder.isPreviewing) {
      setIsPreviewing(true);
    }
  }, []);

  return isPreviewing;
}
