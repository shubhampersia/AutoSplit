import { useEffect } from "react";

// Pass the "user" object (from your query) here
export function useReloadOnNotFound(data) {
  useEffect(() => {
    if (data && data.notFound) {
      // Only reload ONCE to prevent infinite loops
      if (!window.__justReloaded) {
        window.__justReloaded = true;
        window.location.reload();
      }
    }
  }, [data]);
}
