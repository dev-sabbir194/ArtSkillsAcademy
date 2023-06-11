import "./Home.css";
import Banner from "../Header/Banner/Banner";
import Feature from "../Header/Feature/Feature";
import PopularCourses from "../PopularCourses/PopularCourses";
import WellcomeSection from "../WellcomeSection/WellcomeSection";
import OtherFeature from "../OtherFeature/OtherFeature";
import BlogPost from "../BlogPost/BlogPost";
import Testmonial from "../Testmonial/Testmonial";
import NewCourse from "../../../components/NewCourse/NewCourse";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Feature/>
      <PopularCourses/>
      <NewCourse/>
      <WellcomeSection/>
      <OtherFeature/>
      <Testmonial/>
      <BlogPost/>
    </div>
  );
};

export default Home;
