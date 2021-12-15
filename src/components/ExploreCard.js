import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import HeaderTop from "components/light.js";
import Footer from "components/Footer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Our Startups",
  tabs = {
    Fintech: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwYXBwc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
        title: "Flinch",
        content1: "Top Fintch Startup 2021",
        content2: "Revenue: $5000",
        price: "$250,000",
        rating: "5.0",
        reviews: "87",
        url: "/explore/item"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1587569235549-d768151536b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxzdGFydHVwJTIwY29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Steward",
        content1: "Series A Funding",
        content2: "Revenue: $0",
        price: "$1M",
        rating: "4.8",
        reviews: "32",
        url: "/explore/item"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
        title: "Nelli",
        content1: "Seed Round",
        content2: "Revenue: $10000",
        price: "$3.2M",
        rating: "4.9",
        reviews: "89",
        url: "/explore/item"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1515775356328-191f2e02390e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVuc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
        title: "Eyespace",
        content1: "Series A Funding",
        content2: "Revenue: $1M",
        price: "$9.2M",
        rating: "4.6",
        reviews: "12",
        url: "/explore/item"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
        title: "Mc Bucks",
        content1: "Top Food Space 2021",
        content2: "Revenue: $50,000",
        price: "$5M",
        rating: "4.2",
        reviews: "19",
        url: "/explore/item"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1560853667-8a40d2a9fe9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjExfHxzdGFydHVwJTIwY29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        title: "Pangra",
        content1: "Series B Funding",
        content2: "Revenue: $0",
        price: "$10,000",
        rating: "5.0",
        reviews: "61",
        url: "/explore/item"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1586041828034-df2aa6f645b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMwfHxzdGFydHVwJTIwY29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Dominion",
        content1: "Top AI Companies of decade",
        content2: "Revenue: $3M",
        price: "$25M",
        rating: "4.2",
        reviews: "95",
        url: "/explore/item"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1632965053530-2475c7b91f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHN0YXJ0dXAlMjBjb21wYW55JTIwbG9nb3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
        title: "Roda",
        content1: "Best work space",
        content2: "Revenue: $5,000",
        price: "$500,000",
        rating: "3.9",
        reviews: "26",
        url: "/explore/item"
      }
    ],
    AI: getRandomCards(),
    Food: getRandomCards(),
    EdTech: getRandomCards()
  }
}) => {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <AnimationRevealPage>
      <HeaderTop/>
      <Container>
        <ContentWithPaddingXl>
          <HeaderRow>
            <Header>{heading}</Header>
            <TabsControl>
              {Object.keys(tabs).map((tabName, index) => (
                <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                  {tabName}
                </TabControl>
              ))}
            </TabsControl>
          </HeaderRow>

          {tabsKeys.map((tabKey, index) => (
            <TabContent
              key={index}
              variants={{
                current: {
                  opacity: 1,
                  scale:1,
                  display: "flex",
                },
                hidden: {
                  opacity: 0,
                  scale:0.8,
                  display: "none",
                }
              }}
              transition={{ duration: 0.4 }}
              initial={activeTab === tabKey ? "current" : "hidden"}
              animate={activeTab === tabKey ? "current" : "hidden"}
            >
              {tabs[tabKey].map((card, index) => (
                <CardContainer key={index}>
                  <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                    <CardImageContainer imageSrc={card.imageSrc}>
                      <CardRatingContainer>
                        <CardRating>
                          <StarIcon />
                          {card.rating}
                        </CardRating>
                        <CardReview>({card.reviews})</CardReview>
                      </CardRatingContainer>
                      <CardHoverOverlay
                        variants={{
                          hover: {
                            opacity: 1,
                            height: "auto"
                          },
                          rest: {
                            opacity: 0,
                            height: 0
                          }
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardButton>Explore More</CardButton>
                      </CardHoverOverlay>
                    </CardImageContainer>
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardPrice>{card.price}</CardPrice>
                      <CardContent>{card.content1}</CardContent>
                      <CardContent>{card.content2}</CardContent>
                    </CardText>
                  </Card>
                </CardContainer>
              ))}
            </TabContent>
          ))}
        </ContentWithPaddingXl>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwYXBwc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
      title: "Flinch",
      content1: "Top Fintch Startup 2021",
      content2: "Revenue: $5000",
      price: "$250,000",
      rating: "5.0",
      reviews: "87",
      url: "/explore/item"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1587569235549-d768151536b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxzdGFydHVwJTIwY29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Steward",
      content1: "Series A Funding",
      content2: "Revenue: $0",
      price: "$1M",
      rating: "4.8",
      reviews: "32",
      url: "/explore/item"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content1: "Seed Round",
      content2: "Revenue: $10000",
      price: "$3.2M",
      rating: "4.9",
      reviews: "89",
      url: "/explore/item"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1515775356328-191f2e02390e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVuc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
      title: "Eyespace",
      content1: "Series A Funding",
      content2: "Revenue: $1M",
      price: "$9.2M",
      rating: "4.6",
      reviews: "12",
      url: "/explore/item"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
      title: "Mc Bucks",
      content1: "Top Food Space 2021",
      content2: "Revenue: $50,000",
      price: "$5M",
      rating: "4.2",
      reviews: "19",
      url: "/explore/item"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1560853667-8a40d2a9fe9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjExfHxzdGFydHVwJTIwY29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Pangra",
      content1: "Series B Funding",
      content2: "Revenue: $0",
      price: "$10,000",
      rating: "5.0",
      reviews: "61",
      url: "/explore/item"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1586041828034-df2aa6f645b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMwfHxzdGFydHVwJTIwY29tcGFueSUyMGxvZ298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Dominion",
      content1: "Top AI Companies of decade",
      content2: "Revenue: $3M",
      price: "$25M",
      rating: "4.2",
      reviews: "95",
      url: "/explore/item"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1632965053530-2475c7b91f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHN0YXJ0dXAlMjBjb21wYW55JTIwbG9nb3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80",
      title: "Roda",
      content1: "Best work space",
      content2: "Revenue: $5,000",
      price: "$500,000",
      rating: "3.9",
      reviews: "26",
      url: "/explore/item"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
