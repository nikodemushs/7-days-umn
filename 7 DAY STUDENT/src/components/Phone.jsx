import { Box, Center, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import styles from "../styles/phone.module.css";

import useNews from "../hooks/useNews";
export default function PhoneComponent() {
  const [newsArray, setNews] = useState([]);
  const { data, error, isLoading } = useNews();

  useEffect(() => {
    if (data && !isLoading && !error) {
      setNews(data.articles);
    }
  }, [data, error, isLoading]);

  return (
    <Box className={styles.maindiv} position={"absolute"}>
      <Box className={styles.notch}></Box>
      <Box className={styles.notifications} borderRadius={20}>
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          newsArray.map((news, i) => {
            return (
              <Box
                as="a"
                href={news.url}
                target="_blank"
                key={i}
                className={styles.individualnotification}
                p="2"
              >
                <Text fontFamily={"mono"} color={"white"} size={"xs"}>
                  {news.title.length > 30
                    ? String(news.title).slice(0, 30) + "..."
                    : news.title}
                </Text>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
}
