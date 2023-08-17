import { Text } from "@mantine/core";
import { HeroImageRight } from "../components/HeroImageRight";
import { Carousel } from "@mantine/carousel";
import { NetflixCarousel} from '../components/NetflixCarousel';

export function Home() {
  return (
    <>
      <Carousel
        withIndicators
        slideSize="100%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        <Carousel.Slide>
          <HeroImageRight
            title="Borderlands 3"
            description="AYHEM IS COMING The original shooter-looter returns, packing bazillions of guns and a mayhem-fueled adventure! Blast through new worlds and enemies as one of four new Vault Hunters. Play solo or with friends to take on insane enemies, score loads of loot and save your home from the most ruthless cult leaders in the galaxy. A MAYHEM-FUELED THRILL RIDE Stop the fanatical Calypso Twins from uniting the bandit clans and claiming the galaxy’s ultimate power. YOUR VAULT HUNTER, YOUR PLAYSTYLE Become one of 4 new Vault Hunters, each with deep skill trees, abilities and customization. LOCK, LOAD, AND LOOT With bazillions of guns and gadgets, every fight is an opportunity to score new gear. NEW BORDERLANDS Discover new worlds beyond Pandora, each with unique environments and enemies."
            imageUrl="https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
          ></HeroImageRight>
        </Carousel.Slide>
        <Carousel.Slide>
          <HeroImageRight
            title="Baldur's Gate III"
            description="Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a Mind Flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil. From the creators of Divinity: Original Sin 2 comes a next-generation RPG, set in the world of Dungeons and Dragons. Choose from a wide selection of D&D races and classes, or play as an origin character with a hand-crafted background. Adventure, loot, battle and romance as you journey through the Forgotten Realms and beyond. Play alone, and select your companions carefully, or as a party of up to four in multiplayer."
            imageUrl="https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg"
          ></HeroImageRight>
        </Carousel.Slide>
        <Carousel.Slide>
          <HeroImageRight
            title="Remnant 2"
            description="Remnant II pits survivors of humanity against new deadly creatures and god-like bosses across terrifying worlds. Play solo or co-op with two other friends to explore the depths of the unknown to stop an evil from destroying reality itself."
            imageUrl="https://media.rawg.io/media/games/347/3478db948d4f25d40da7c22c0fd1039c.jpg"
          ></HeroImageRight>
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Text>Browse By Categories</Text>
      <NetflixCarousel></NetflixCarousel>
    </>
  );
}
