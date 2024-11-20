import { Container, Grid2 } from "@mui/material";
import { ProjectParts, ProjectPartsType } from "../../components/project";

type LayoutProps = {
  projectText: ProjectPartsType[];
};

export const Layout = ({ projectText }: LayoutProps) => {
  return (
    <Container>
      <Grid2 spacing={4} container p={3}>
        {projectText.map(
          ({ title, date, abstract, contentLink, img, github }, index) => (
            <Grid2 size={6} key={index}>
              <ProjectParts
                title={title}
                date={date}
                abstract={abstract}
                contentLink={contentLink}
                img={img}
                github={github}
              />
            </Grid2>
          )
        )}
      </Grid2>
    </Container>
  );
};
