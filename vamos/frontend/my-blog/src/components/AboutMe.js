import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutData: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("ruta/de/la/api/about");
      const aboutData = response.data;
      this.setState({ aboutData, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { aboutData, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>Sobre mí</h1>
        {aboutData && (
          <Card
            imageSrc={aboutData.imageSrc}
            title={aboutData.title}
            content={aboutData.content}
            createdAt={aboutData.createdAt}
          />
        )}
      </div>
    );
  }
}

export default AboutMe;
