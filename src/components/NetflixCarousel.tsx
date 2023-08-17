import { useCallback, useEffect, useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import { Progress, rem } from "@mantine/core";

export function NetflixCarousel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Carousel.Slide>
          <div className="testSlide">Action</div>
        </Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        <Carousel.Slide>4</Carousel.Slide>
        <Carousel.Slide>5</Carousel.Slide>
        <Carousel.Slide>6</Carousel.Slide>
        <Carousel.Slide>7</Carousel.Slide>
        <Carousel.Slide>8</Carousel.Slide>
        <Carousel.Slide>9</Carousel.Slide>
        <Carousel.Slide>10</Carousel.Slide>
      </Carousel>
      <Progress
        value={scrollProgress}
        styles={{
          bar: { transitionDuration: "0ms" },
          root: { maxWidth: rem(320) },
        }}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  );
}
