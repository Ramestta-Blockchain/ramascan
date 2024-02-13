import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  // Menu,
  // MenuButton,
  // MenuItem,
  // MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
} from '@chakra-ui/react';
import btc from 'images/btc.png';
import busd from 'images/busd.png';
import dai from 'images/dai.png';
import eth from 'images/eth.png';
import ok from 'images/ok.png';
import usdc from 'images/usdc.png';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';
// import warning from "images/warning.png";

import type { NextPageWithLayout } from 'nextjs/types';

// import iconEastmini from 'icons/arrows/east-mini.svg';
import iconCheck from 'icons/check.svg';
import iconMinus from 'icons/minus.svg';
import iconPlus from 'icons/plus.svg';
import LayoutFaucet from 'ui/shared/layout/LayoutFaucet';

const faqData = [
  {
    title: 'What standard are these tokens issued in?',
    content:
      'BTC, BUSD, DAI, ETH, USDC, XRP, and USDT are issued as RAMA20 tokens.',
  },
  {
    title: 'Are there any rate limit(s)?',
    content: 'Yes, you can only request 1 time per 6 hours, for all tokens.',
  },
  {
    title: 'What if I want to request a large amount of tokens?',
    content:
      'Request for large number of tokens is restricted to development purposes only. Please reach out via the RAMA Chain Support to make this request.',
  },
  {
    title: 'Do you support other tokens?',
    content:
      'No, we only support the tokens listed in on the faucet list; for tokens beyond that list, you can visit a DEX to swap or create your own token contract',
  },
  {
    title:
      'Does the tRAMA have any value, like some Ethereum testnet that can be traded with a real price?',
    content:
      'tRAMA holds no financial value and cannot be traded at a real price, given its unlimited supply, exclusively serving test and development purposes.',
  },
  {
    title: 'What if my request keeps failing?',
    content:
      'To prevent potential misidentification as a bot, kindly refrain from frequent operations and allow a few minutes before attempting the next action.',
  },
];

const options = [
  {
    label: 'RAMA',
    icon: dai,
    value: '0.5',
  },
  {
    label: 'BTC',
    icon: btc,
    value: '1',
  },
  {
    label: 'BUSD',
    icon: busd,
    value: '10',
  },
  {
    label: 'DAI',
    icon: dai,
    value: '10',
  },
  {
    label: 'ETH',
    icon: eth,
    value: '0.1',
  },
  {
    label: 'USDC',
    icon: usdc,
    value: '10',
  },
];

const Page: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [selectedItem, setSelectedItem] = React.useState(null);
  // const handleItemClick = (item: any) => {
  //   setSelectedItem(item);
  // };
  type OptionType = {
    label: string;
    icon: StaticImageData;
    value: string;
  };
  const [ selectedOption, setSelectedOption ] = React.useState<OptionType>(
    options[0],
  );

  const handleOptionChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selected = options.find(
        (option) => option.value === event.target.value,
      ) as OptionType;
      setSelectedOption(selected);
    },
    [],
  );
  return (
    //  <h1>RAMA FAUCET</h1>
    <Box mx="100px">
      <Heading
        as="h1"
        size={{ base: 'md', lg: 'xl' }}
        lineHeight={{ base: '32px', lg: '50px' }}
        fontWeight={ 600 }
        fontFamily="myFont"
        // color={ config.UI.homepage.plate.textColor }
      >
        <Center>
          <span style={{ color: '#000000' }}>RAMA</span>

          <span style={{ color: '#8050DF', marginLeft: '15px' }}>FAUCET</span>
        </Center>
      </Heading>
      <p>
        <Center>
          Obtain Pingaksha Testnet tokens every 6 hours for seamless and
          confident development.
        </Center>
      </p>
      <Box
        marginTop="30px"
        bg="#EBF8FF"
        borderRadius="12px"
        padding={{ lg: '50px' }}
        // minW={{ base: 'unset', lg: '900px' }}
        data-label="hero plate"
      >
        <Flex mb={{ base: 6, lg: 8 }} justifyContent="space-between">
          <FormControl flex="3" mr={ 4 }>
            <FormLabel htmlFor="inputField1">Wallet Address</FormLabel>
            <Input
              id="inputField1"
              placeholder="Enter your RAMA Pingaksha Testnet address"
              bg="white"
              height={ 50 }
              width={ 563 }
            />
          </FormControl>

          <FormControl flex="1">
            <FormLabel htmlFor="inputField2">Select Token</FormLabel>
            { /* <Input id="inputField2" placeholder="0.03 RAMA" bg="white" /> */ }
            <Select
              bg="white"
              h="50px"
              w={ 221 }
              _hover={{
                background: 'white',
              }}
              borderColor="transparent"
              onChange={ handleOptionChange }
            >
              { options.map((option, index) => (
                <option
                  key={ index }
                  value={ option.value }
                  style={{
                    backgroundColor:
                      selectedOption.value === option.value ?
                        '#FF0000' :
                        'transparent',
                    border: '2px',
                    paddingRight: '70px',
                    '&:hover': {
                      backgroundColor: '#FF0000', // Red color on hover
                    },
                  }}
                >
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    gap={ 2 }
                  >
                    <Flex alignItems="center" gap={ 2 }>
                      <Image
                        height={ 20 }
                        width={ 30 }
                        src={ option.icon }
                        alt={ option.value }
                      />
                      { selectedOption.value === option.value && (
                        <Icon as={ iconCheck } color="green"/>
                      ) }
                    </Flex>
                  </Flex>
                  <Text>
                    { option.value } { option.label }
                  </Text>
                </option>
              )) }
            </Select>
            { /* <Menu>
              <MenuButton
                as={ Button }
                colorScheme="white"
                _hover={{
                  background: 'white',
                  border: '1px',
                  borderColor: 'gray.200',
                }}
                rightIcon={ <Icon color="black" as={ iconEastmini }/> }
                bg="white"
                h="50px"
                w={ 221 }
                border="1px"
                borderColor="transparent"
              >
                { selectedItem || (
                  <Flex mt="5px" gap={ 2 }>
                    <Image
                      height={ 40 }
                      width={ 25 }
                      alt="logo"
                      src="https://raw.githubusercontent.com/Ramestta-Blockchain/ramascan/main/public/static/ramestta_32x32_mm_icon.svg"
                    />
                    <Text mt="2px">0.5 RAMA</Text>
                  </Flex>
                ) }
              </MenuButton>
              <MenuList>
              {
                dropMenuData.map((item,index)=>(
                  <MenuItem key={index} icon={<Icon as={iconPlus} />}>
                    {item.value}{" "}{item.symbol}
                  </MenuItem>
                ))
              }
                <MenuItem
                  onClick={ () =>
                    handleItemClick(
                      <Flex mt="5px" gap={ 2 }>
                        <Image
                          height={ 40 }
                          width={ 25 }
                          alt="logo"
                          src="https://raw.githubusercontent.com/Ramestta-Blockchain/ramascan/main/public/static/ramestta_32x32_mm_icon.svg"
                        />
                        <Text mt="2px">0.5 RAMA</Text>
                      </Flex>,
                    )
                  }
                >
                  <Box
                    _hover={{
                      background: 'EBF8FF',
                      border: '2px',
                      borderColor: 'gray.200',
                      borderRadius: '6px',
                      pr: '70px',
                    }}
                    display="inline-block"
                  >
                    <Flex mt="4px" ml="5px" gap={ 2 }>
                      <Image
                        height={ 40 }
                        width={ 25 }
                        alt="logo"
                        src="https://raw.githubusercontent.com/Ramestta-Blockchain/ramascan/main/public/static/ramestta_32x32_mm_icon.svg"
                      />
                      <Text mt="2px">0.5 RAMA</Text>

                      { selectedItem && <Icon as={ iconCheck } color="green"/> }
                  </Flex>
                  </Box>
                </MenuItem>
                <MenuItem
                  onClick={ () =>
                    handleItemClick(
                      <Flex mt="5px" gap={ 2 }>
                        <Image height={ 20 } width={ 30 } alt="logo" src={ btc }/>
                        <Text mt="2px">0.1 BTC</Text>
                      </Flex>,
                    )
                  }
                >
                  <Box
                    _hover={{
                      background: 'EBF8FF',
                      border: '2px',
                      borderColor: 'gray.200',
                      borderRadius: '6px',
                      pr: '70px',
                    }}
                    display="inline-block"
                  >
                    <Flex mt="5px" gap={ 2 }>
                      <Image height={ 20 } width={ 30 } alt="logo" src={ btc }/>
                      <Text mt="2px">0.1 BTC</Text>
                    </Flex>
                  </Box>
                </MenuItem>
                <MenuItem
                  onClick={ () =>
                    handleItemClick(
                      <Flex mt="5px" gap={ 2 }>
                        <Image height={ 20 } width={ 30 } alt="logo" src={ busd }/>
                        <Text mt="2px">10 BUSD</Text>
                      </Flex>,
                    )
                  }
                >
                  <Box
                    _hover={{
                      background: 'EBF8FF',
                      border: '2px',
                      borderColor: 'gray.200',
                      borderRadius: '6px',
                      pr: '70px',
                    }}
                    display="inline-block"
                  >
                    <Flex mt="5px" gap={ 2 }>
                      <Image height={ 20 } width={ 30 } alt="logo" src={ busd }/>
                      <Text mt="2px">10 BUSD</Text>
                    </Flex>
                  </Box>
                </MenuItem>
                <MenuItem
                  onClick={ () =>
                    handleItemClick(
                      <Flex mt="5px" gap={ 2 }>
                        <Image height={ 20 } width={ 30 } alt="logo" src={ dai }/>
                        <Text mt="2px">10 DAI</Text>
                      </Flex>,
                    )
                  }
                >
                  <Box
                    _hover={{
                      background: 'EBF8FF',
                      border: '2px',
                      borderColor: 'gray.200',
                      borderRadius: '6px',
                      pr: '70px',
                    }}
                    display="inline-block"
                  >
                    <Flex mt="5px" gap={ 2 }>
                      <Image height={ 20 } width={ 30 } alt="logo" src={ dai }/>
                      <Text mt="2px">10 DAI</Text>
                    </Flex>
                  </Box>
                </MenuItem>
                <MenuItem
                  onClick={ () =>
                    handleItemClick(
                      <Flex mt="5px" gap={ 2 }>
                        <Image height={ 20 } width={ 30 } alt="logo" src={ eth }/>
                        <Text mt="2px">0.1 ETH</Text>
                      </Flex>,
                    )
                  }
                >
                  <Box
                    _hover={{
                      background: 'EBF8FF',
                      border: '2px',
                      borderColor: 'gray.200',
                      borderRadius: '6px',
                      pr: '70px',
                    }}
                    display="inline-block"
                  >
                    <Flex mt="5px" gap={ 2 }>
                      <Image height={ 20 } width={ 30 } alt="logo" src={ eth }/>
                      <Text mt="2px">0.1 ETH</Text>
                    </Flex>
                  </Box>
                </MenuItem>
                <MenuItem
                  onClick={ () =>
                    handleItemClick(
                      <Flex mt="5px" gap={ 2 }>
                        <Image height={ 20 } width={ 30 } alt="logo" src={ usdc }/>
                        <Text mt="2px">10 USDC</Text>
                      </Flex>,
                    )
                  }
                >
                  <Box
                    _hover={{
                      background: 'EBF8FF',
                      border: '2px',
                      borderColor: 'gray.200',
                      borderRadius: '6px',
                      pr: '70px',
                    }}
                    display="inline-block"
                  >
                    <Flex mt="5px" gap={ 2 }>
                      <Image height={ 20 } width={ 30 } alt="logo" src={ usdc }/>
                      <Text mt="2px">10 USDC</Text>
                    </Flex>
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu> */ }
          </FormControl>
        </Flex>
        <>
          <Button
            onClick={ onOpen }
            color="blackAlpha.300"
            bg="#E1E1E1"
            w="100%"
            _hover={{
              background: '#8050DF',
              color: '#fff',
            }}
          >
            Send 0.5 RAMA
          </Button>
          <Modal isOpen={ isOpen } onClose={ onClose }>
            <ModalOverlay/>
            <ModalContent maxW="500px">
              <Center>
                <Image height={ 140 } width={ 140 } alt="logo" src={ ok }/>
              </Center>
              <ModalCloseButton/>
              <ModalHeader mb={ 1 }>
                <Center>You got 0.5 RAMA</Center>
              </ModalHeader>
              <ModalBody>
                <Center textAlign="center" fontWeight={ 1000 }>
                  You can request for another RAMA Pingaksha
                  <br/>
                  in 6 hours
                </Center>
              </ModalBody>

              <ModalFooter>
                <Center>
                  <Button
                    colorScheme="blue"
                    mr={ 3 }
                    onClick={ onClose }
                    w="440px"
                    fontSize="20px"
                    bg="black"
                    maxH="400px"
                  >
                    ok
                  </Button>
                </Center>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </Box>
      <TableContainer
        marginTop="30px"
        bg="#EBF8FF"
        borderRadius="12px"
        padding={{ lg: '50px' }}
        maxW="container.lg"
      >
        <Table variant="unstyled" flex={ 2 } justifyContent="space-evenly">
          <Thead bg="white">
            <Tr>
              <Flex alignItems="center" justify="space-between">
                <Th textColor="black" fontFamily="segoe UI" fontSize="lg">
                  Your Transactions
                </Th>
                <Th
                  mr="55px"
                  textColor="black"
                  fontFamily="segoe UI"
                  fontSize="lg"
                >
                  Time
                </Th>
              </Flex>
            </Tr>
          </Thead>
          <Tbody>
            <Tr flex={ 2 } justifyContent="space-between">
              <Td m="7" minWidth="200px" maxWidth="300px">
                <Flex alignItems="center" justify="space-between">
                  <Image
                    height={ 40 }
                    width={ 25 }
                    alt="logo"
                    src="https://raw.githubusercontent.com/Ramestta-Blockchain/ramascan/main/public/static/ramestta_32x32_mm_icon.svg"
                  />
                  <Text m={ 1 } flex="1" overflowWrap="anywhere">
                    0xe24e75f97cd9b95055f1ec5560b88828e2542442090a89ea67337bbcd4acf3c6
                  </Text>
                  <Text>5 hours ago</Text>
                </Flex>
              </Td>
              { /* <Td minWidth="100px" maxWidth="200px">
                <Text>5 hours ago</Text>
              </Td> */ }
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      { /* Accordion */ }
      <Box pt={ 12 }>
        <Accordion allowToggle>
          { faqData.map((item, index) => (
            <AccordionItem key={ index }>
              { ({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={ !isExpanded ? '#fff' : '#EBF8FF' }
                      bgColor={ !isExpanded ? '#fff' : '#EBF8FF' }
                    >
                      <Box flex="1" textAlign="left">
                        { item.title }
                      </Box>
                      { isExpanded ? (
                        <Icon as={ iconPlus }/>
                      ) : (
                        <Icon as={ iconMinus }/>
                      ) }
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={ 4 }
                    bgColor={ !isExpanded ? '#fff' : '#EBF8FF' }
                  >
                    { item.content }
                  </AccordionPanel>
                </>
              ) }
            </AccordionItem>
          )) }
        </Accordion>
      </Box>
    </Box>
  );
};
Page.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutFaucet>{ page }</LayoutFaucet>;
};
export default Page;

export { base as getServerSideProps } from 'nextjs/getServerSideProps';
