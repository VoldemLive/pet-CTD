import React from "react"
import classNames from "classnames"
import * as Accordion from "@radix-ui/react-accordion"
import { LuChevronDown } from "react-icons/lu"
import { Link } from "react-router-dom"
const ArtsMoment = () => {
  const AccordionItem = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Item
        className={classNames("mt-px overflow-hidden first:mt-0", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Item>
    )
  )
  const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header className="flex">
        <Accordion.Trigger
          className={classNames(
            "text-slate-100 bg-slate-400 hover:bg-slate-100 hover:text-slate-400 font-semibold transition-all duration-300 group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 leading-none outline-none",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <LuChevronDown
            className="text-slate-100 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  )

  const AccordionContent = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Content
        className={classNames(
          "text-slate-400 bg-slate-200/30 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="py-[15px] px-5">{children}</div>
      </Accordion.Content>
    )
  )

  return (
    <div className="flex flex-col py-5 relative w-full overflow-hidden">
      <div className="relative flex-col-reverse lg:flex-row gap-10 max-w-[1640px] mx-auto flex w-full px-4">
        <div className="h-full w-full md:w-8/12 lg:w-6/12 flex flex-col p-5">
          <div className="flex w-full flex-col">
            <h4 className="p-2 text-xl font-semibold text-slate-400">
              Welcome to the World of Vincent van Gogh
            </h4>
            <p className="text-slate-400 py-3">
              Dive into the turbulent, vibrant life of Vincent van Gogh, a
              visionary whose brush strokes redefined the paths of art and left
              an indelible mark on the world. Beyond his famed Starry Night and
              Sunflowers lies a tumultuous journey of creativity, emotion, and
              passion. Van Gogh's work transcends time, inviting us to explore
              the depths of human experience through the eyes of a genius.
            </p>
          </div>
          <div className="flex">
            <Accordion.Root
              className="w-full"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Dive into Van Gogh's Sanctuary: "The Bedroom"
                </AccordionTrigger>
                <AccordionContent>
                  In the heart of Arles, France, Vincent van Gogh found a
                  semblance of home and peace. "The Bedroom," painted in 1889,
                  is more than just an interior scene; it's a glimpse into van
                  Gogh's quest for tranquility amidst turmoil. With its bold
                  colors and simple, almost geometric layout, the painting
                  invites us into a space that van Gogh himself called
                  "restful."
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  A Glimpse into Van Gogh's World
                </AccordionTrigger>
                <AccordionContent>
                  Van Gogh's use of colors in "The Bedroom" is particularly
                  striking. The vibrant blues, greens, and yellows contrast with
                  the simplicity of the room's furnishings, creating a space
                  that feels both intimate and expansive. This choice of colors
                  wasn't just aesthetic; it was a reflection of van Gogh's state
                  of mind and his longing for stability and peace.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Beyond the Canvas: A Story of Struggle and Solace
                </AccordionTrigger>
                <AccordionContent>
                  Painted during one of the most tumultuous periods of his life,
                  "The Bedroom" represents van Gogh's ideal of simplicity and
                  serenity. The painting is devoid of any people, yet it speaks
                  volumes about van Gogh's desire for a life unburdened by
                  mental anguish. The slightly skewed perspective and thickly
                  applied paint add a sense of unease, hinting at the artist's
                  inner turmoil.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Legacy of "The Bedroom"</AccordionTrigger>
                <AccordionContent>
                  Today, "The Bedroom" stands as a testament to van Gogh's
                  enduring quest for peace and his unyielding passion for art.
                  It reminds us of the power of simplicity and the importance of
                  a personal sanctuary. This masterpiece not only provides a
                  window into van Gogh's soul but also continues to inspire and
                  resonate with many around the world, making it a timeless
                  piece of art history.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Discover More</AccordionTrigger>
                <AccordionContent>
                  Are you captivated by the story behind "The Bedroom"? Explore
                  the depths of Van Gogh's life, his art, and the impact he left
                  on the world of art. "Uncover the Master's Legacy" and immerse
                  yourself in the vibrant hues and emotional depth of Van Gogh's
                  work.
                </AccordionContent>
              </AccordionItem>
            </Accordion.Root>
          </div>
        </div>
        <div className="flex md:w-5/12 bg-rose-300 justify-center flex-col aspect-square">
          <img
            src="https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/800,/0/default.jpg"
            alt="The Bedroom (1889) by Vincent van Gogh"
          />
        </div>
      </div>
      <div className="flex justify-center p-3 ">
        <Link className="bg-slate-400 text-slate-100 p-3" to="artist/40610">
          Explore Van Gogh's Masterpieces
        </Link>
      </div>
    </div>
  )
}

export default ArtsMoment
