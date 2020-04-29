import React, { Component } from "react";
import { Loader } from "../components/Loader";
import { Container, Header, Paragraph, Checkmark } from "../styles/OrderPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AbsoluteWrapper from "../components/AbsoluteWrapper";

class OrderPage extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3500);
  }

  render() {
    const { loading } = this.state;

    return (
      <AbsoluteWrapper>
        <Container>
          <Header>Thank you for buying in our store!</Header>
          {loading ? (
            <div className="loading">
              <Loader color="lightblue" size="40px" marginTop="200px" />
              <Paragraph>Your order is being processed...</Paragraph>
            </div>
          ) : (
            <div className="completed">
              <Checkmark>
                <FontAwesomeIcon icon={faCheck} />
              </Checkmark>
              <Paragraph>
                {"Processing completed. Now please wait for delivery :)"}
              </Paragraph>
              <Paragraph>Your's order number: #4815162342</Paragraph>
            </div>
          )}
        </Container>
      </AbsoluteWrapper>
    );
  }
}

export default OrderPage;
