import { Box, Heading } from "@chakra-ui/react";
import { FaBed, FaBook, FaGamepad, FaUtensilSpoon } from "react-icons/fa";

import styles from "../styles/stats.module.css";

export default function StatsComponent({
  Hunger,
  Sleep,
  Knowledge,
  Amusement,
  x,
  y,
}) {
  const minimum = 5;
  return (
    <Box className={styles.statsDiv} position="absolute" right={x} bottom={y}>
      <Heading fontFamily={"mono"} size="md">
        Your Statistics
      </Heading>
      <Box className={styles.stats}>
        <FaUtensilSpoon height={"10%"} />
        <Box className={styles.statsOuter}>
          <Box
            className={styles.statsInner}
            width={`${(Hunger / 24) * 100}%`}
            backgroundColor={Hunger > minimum ? "yellow.200" : "red.400"}
          ></Box>
        </Box>
      </Box>
      <Box className={styles.stats}>
        <FaBed height={"10%"} />
        <Box className={styles.statsOuter}>
          <Box
            className={styles.statsInner}
            width={`${(Sleep / 24) * 100}%`}
            backgroundColor={Sleep > minimum ? "purple.300" : "red.400"}
          ></Box>
        </Box>
      </Box>
      <Box className={styles.stats}>
        <FaGamepad height={"10%"} />
        <Box className={styles.statsOuter}>
          <Box
            className={styles.statsInner}
            width={`${(Amusement / 24) * 100}%`}
            backgroundColor={Amusement > minimum ? "pink.400" : "red.400"}
          ></Box>
        </Box>
      </Box>
      <Box className={styles.stats}>
        <FaBook height={"10%"} />
        <Box className={styles.statsOuter}>
          <Box
            className={styles.statsInner}
            width={`${(Knowledge / 24) * 100}%`}
            backgroundColor={Knowledge > minimum ? "blue.800" : "red.400"}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
