import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import useOnScreen from "./useOnScreen";


export default function BoxFade({ ...rest }) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    }
  }, [isVisible]);

  return (
    <Box
      component={motion['div']}
      initial={{ opacity: 0 }}
      animate={visible && { opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
      {...rest}
    ></Box>
  );
}
