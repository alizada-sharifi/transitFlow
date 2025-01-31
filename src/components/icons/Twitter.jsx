import React from "react";
import { cn } from "../../helpers/common";

function Twitter({ className }) {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5756 2.1537C18.8566 2.46592 18.0958 2.67161 17.3172 2.76428C18.1354 2.28554 18.7507 1.52498 19.0477 0.625233C18.2742 1.07722 17.4293 1.39436 16.5493 1.56306C16.1787 1.17497 15.733 0.866237 15.2393 0.65562C14.7456 0.445004 14.2143 0.336906 13.6775 0.337897C11.5041 0.337897 9.74533 2.06989 9.74533 4.20495C9.74379 4.50193 9.77785 4.79802 9.84677 5.08691C8.28834 5.0139 6.76231 4.61663 5.36632 3.92051C3.97033 3.22439 2.73512 2.24475 1.73972 1.04426C1.39051 1.63255 1.20583 2.30377 1.20497 2.98777C1.20497 4.32866 1.90506 5.51392 2.96217 6.20832C2.33586 6.19346 1.72238 6.02781 1.17382 5.72543V5.77332C1.17382 7.64898 2.53166 9.20937 4.32879 9.56455C3.99084 9.65458 3.64259 9.70019 3.29284 9.70024C3.04467 9.70067 2.79706 9.67661 2.55362 9.6284C3.05322 11.1648 4.5073 12.2823 6.22975 12.3142C4.83014 13.3921 3.11178 13.9746 1.34475 13.9704C1.0311 13.9699 0.717739 13.9512 0.40625 13.9145C2.20385 15.0615 4.29342 15.6682 6.42624 15.6624C13.6691 15.6624 17.6259 9.76808 17.6259 4.65591C17.6259 4.4883 17.6216 4.32068 17.6136 4.15706C18.3816 3.61115 19.046 2.93274 19.5756 2.1537Z"
        className={cn("fill-white", className)}
      />
    </svg>
  );
}

export default Twitter;
