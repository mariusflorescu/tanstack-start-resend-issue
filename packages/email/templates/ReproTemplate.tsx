import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import React from 'react'

export type ReproTemplateProps = {
  name: string
};

const ReproTemplate = ({ name = 'John Doe'}: ReproTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Test email
      </Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Body className="bg-neutral-100 font-sans text-base">
          <Container className="gap-3 bg-white p-45">
            <Heading className="my-0 text-center leading-8">
              Test email {name}
            </Heading>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ReproTemplate;
