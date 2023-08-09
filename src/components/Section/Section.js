import {SectionTitleStat} from './Section.styled'

export const Section = ({ title, titleStat, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <SectionTitleStat>{titleStat}</SectionTitleStat>
      {children}
    </div>
  );
};
