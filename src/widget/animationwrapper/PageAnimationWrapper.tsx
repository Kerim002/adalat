import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageAnimationWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimationWrapper;
