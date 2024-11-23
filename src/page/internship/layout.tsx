import { Grid2 } from "@mui/material";
import { Container } from "@mui/system";
import { ProjectParts, ProjectPartsType } from "../../components/project";

type LayoutProps = {
  internshipText: ProjectPartsType[];
};

export const Layout = ({ internshipText }: LayoutProps) => {
  return (
    <Container>
      <Grid2 spacing={4} container p={3}>
        {internshipText.map(
          (
            { title, date, abstract, contentLink, img, github, skill },
            index
          ) => (
            <Grid2 size={6} key={index}>
              <ProjectParts
                title={title}
                date={date}
                abstract={abstract}
                contentLink={contentLink}
                img={img}
                github={github}
                skill={skill}
              />
            </Grid2>
          )
        )}
      </Grid2>
    </Container>
  );
};
