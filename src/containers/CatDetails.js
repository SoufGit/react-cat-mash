import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import DetailsSection from '../components/DetailsSection';

const HeroDetails = ({
  hero,
  hero: { name, series, comics, events, stories },
}) => {
  if (!hero) return <span>Loading...</span>;

  return (
    <Container>
      <Row>
        <h1>{name}</h1>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col>
              {series && (
                <DetailsSection startOpen type="series" items={series.items} />
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {comics && <DetailsSection type="comics" items={comics.items} />}
            </Col>
          </Row>
          <Row>
            <Col>
              {events && <DetailsSection type="events" items={events.items} />}
            </Col>
          </Row>
          <Row>
            <Col>
              {stories && (
                <DetailsSection type="stories" items={stories.items} />
              )}
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

HeroDetails.propTypes = {
  hero: PropTypes.object,
};

const mapStateToProps = state => ({
  hero: state.currentHero,
});

export default connect(mapStateToProps)(HeroDetails);
