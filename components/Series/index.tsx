import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { ISeries } from "interfaces/props.dto";
import SerieCard from "../SerieCard";


const Series = ({ series }: ISeries) => (
  <Flex id="series" justify="center">
    <Flex w="full" maxW="1200px" px={[4, 8]} mt={10} direction="column">
      <Heading mb={4}>Séries</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {series.map((serie) => (
          <SerieCard serie={serie} key={serie.id} />
        ))}
      </SimpleGrid>
    </Flex>
  </Flex>
);

export default Series;
