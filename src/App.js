import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./containers/navbar"; 
import Footer from "./containers/Footer";
import HomePage from "./containers/HomePage"; 
import Blog from "./containers/Blog"; 
import BlogDetail from "./containers/BlogDetail"; 
import ContactUs from "./containers/ContactUs";
import AboutUs from "./containers/AboutUs";
import Gallery from "./containers/Gallery";
import Projects from "./containers/Projects";
import ProjectDetail from "./containers/ProjectDetail";

//ScrollToTop
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
      <Router>  
        <Navbar />
        <Switch>
            <Route exact
                   path="/home-page"
                   component={HomePage}
            />
            <Route exact
                   path="/blog"
                   component={Blog}
            />
            <Route exact
                   path="/blog/single-post/:blogId"
                   component={BlogDetail}
            />
            <Route exact
                   path="/contact-us"
                   component={ContactUs}
            />
            <Route exact
                   path="/about-us"
                   component={AboutUs}
            />
            <Route exact
                   path="/gallery"
                   component={Gallery}
            />
            <Route exact
                   path="/projects"
                   component={Projects}
            />
            <Route exact
                   path="/projects/single-project/:projectId"
                   component={ProjectDetail}
            />
            <Redirect from="/"
                      to="/home-page"/>
            <Redirect from="*"
                      to="/home-page"/>
        </Switch> 
        <Footer />
        <ScrollToTop />
      </Router>
  );
}

export default App;
