/** @format */

import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `S.M.'S Snap - ${title}`;
  }, [title]);
};

export default useTitle;
