import AnimatedGridItem from "@/components/animations/animation-scroll";
import { BulletsListCard } from "@/components/cards/bullets-list-card";
import { HeroCard } from "@/components/cards/hero-card";
import { ListCard } from "@/components/cards/list-card";
import { TextCard } from "@/components/cards/text-grid";
import { Box } from "@mui/material";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <TextCard />
      <HeroCard />
      {[
        {
          _id: 1,
          heading: "Seamless Integrationa MaVailabel",
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sapiente illo consequuntur dolore dolores eligendi provident dolorem cupiditate laboriosam voluptatum!`,
          itemsLists: [
            {
              text: "Lorem ipsum, dolor sit amet",
            },
            {
              text: "dolorem cupiditate laboriosam voluptatum!",
            },
            {
              text: "consequuntur dolore dolores eligendi provident",
            },
          ],
        },
        {
          _id: 2,
          heading: "Seamless Integrationa MaVailabel",
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sapiente illo consequuntur dolore dolores eligendi provident dolorem cupiditate laboriosam voluptatum!`,
          itemsLists: [
            {
              text: "Lorem ipsum, dolor sit amet",
            },
            {
              text: "dolorem cupiditate laboriosam voluptatum!",
            },
            {
              text: "consequuntur dolore dolores eligendi provident",
            },
          ],
        },
        {
          _id: 3,
          heading: "Seamless Integrationa MaVailabel",
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sapiente illo consequuntur dolore dolores eligendi provident dolorem cupiditate laboriosam voluptatum!`,
          itemsLists: [
            {
              text: "Lorem ipsum, dolor sit amet",
            },
            {
              text: "dolorem cupiditate laboriosam voluptatum!",
            },
            {
              text: "consequuntur dolore dolores eligendi provident",
            },
          ],
        },
      ]?.map((list: any, index: number) => (
        <Box sx={{ my: 2 }} key={list?._id}>
          <AnimatedGridItem>
            <ListCard isEven={index % 2 === 0} />
          </AnimatedGridItem>
        </Box>
      ))}
      {[
        {
          _id: 1,
          itemsList: [
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
          ],
        },
        {
          _id: 2,
          itemsList: [
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
          ],
        },
        {
          _id: 3,
          itemsList: [
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
            {
              heading: "Customizable & Social Sol",
              description:
                "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
            },
          ],
        },
      ]?.map((list: any, index: number) => (
        <Box sx={{ my: 2 }} key={list?._id}>
          <AnimatedGridItem>
            <BulletsListCard isEven={index % 2 === 0} />
          </AnimatedGridItem>
        </Box>
      ))}
    </>
  );
}
