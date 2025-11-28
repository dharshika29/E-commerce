import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}   // TOP side start
      animate={{ opacity: 1, y: 0 }}     // NORMAL position
      exit={{ opacity: 0, y: 40 }}        // BOTTOM exit
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}
