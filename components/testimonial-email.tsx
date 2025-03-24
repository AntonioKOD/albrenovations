import type * as React from "react"
import { Body, Container, Head, Heading, Hr, Html, Img, Preview, Section, Text } from "@react-email/components"

export interface TestimonialEmailProps {
  name: string
  email: string
  role?: string
  project?: string
  rating: number
  testimonial: string
  isConfirmation?: boolean
}

export const TestimonialEmailTemplate: React.FC<TestimonialEmailProps> = ({
  name,
  email,
  role,
  project,
  rating,
  testimonial,
  isConfirmation = false,
}) => {
  // Function to render star ratings
  const renderStars = (rating: number) => {
    let stars = ""
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? "★" : "☆"
    }
    return stars
  }

  return (
    <Html>
      <Head />
      <Preview>
        {isConfirmation
          ? `Thank you for your testimonial, ${name}!`
          : `New testimonial from ${name} - ${renderStars(rating)}`}
      </Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <Img
              src="https://constructconcepts.com/public/logo_construction.svg"
              width="180"
              height="45"
              alt="Horizon Fix"
              style={{ margin: "0 auto" }}
            />
          </Section>

          <Hr style={hrStyle} />

          {/* Main Content */}
          <Section style={contentStyle}>
            <Heading as="h1" style={headingStyle}>
              {isConfirmation ? "Thank You for Your Testimonial!" : "New Testimonial Submission"}
            </Heading>

            {isConfirmation ? (
              <Text style={paragraphStyle}>
                Dear {name},<br />
                <br />
                Thank you for taking the time to share your experience with Horizon Fix. We greatly appreciate your
                feedback and are thrilled that you enjoyed working with us. Your testimonial will help future clients
                understand the quality and service we provide.
              </Text>
            ) : (
              <Text style={paragraphStyle}>A new testimonial has been submitted through the website.</Text>
            )}

            {/* Testimonial Box */}
            <Section style={testimonialBoxStyle}>
              <Text style={starRatingStyle}>{renderStars(rating)}</Text>
              <Text style={quoteStyle}>&quot;{testimonial}&quot;</Text>
              <Text style={attributionStyle}>
                - {name}
                {role ? `, ${role}` : ""}
                {project ? ` | Project: ${project}` : ""}
              </Text>
            </Section>

            {/* Submission Details */}
            {!isConfirmation && (
              <Section style={detailsStyle}>
                <Heading as="h2" style={subheadingStyle}>
                  Submission Details
                </Heading>
                <Text style={detailLineStyle}>
                  <strong>Name:</strong> {name}
                </Text>
                <Text style={detailLineStyle}>
                  <strong>Email:</strong> {email}
                </Text>
                {role && (
                  <Text style={detailLineStyle}>
                    <strong>Role:</strong> {role}
                  </Text>
                )}
                {project && (
                  <Text style={detailLineStyle}>
                    <strong>Project Type:</strong> {project}
                  </Text>
                )}
                <Text style={detailLineStyle}>
                  <strong>Rating:</strong> {rating}/5
                </Text>
              </Section>
            )}

            {/* Call to Action */}
          </Section>

          <Hr style={hrStyle} />

        </Container>
      </Body>
    </Html>
  )
}

// Styles
const bodyStyle = {
  backgroundColor: "#f5f5f5",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: "0",
  padding: "0",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "20px 0",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  maxWidth: "600px",
}

const headerStyle = {
  backgroundColor: "#FF7A00",
  color: "#ffffff",
  padding: "30px 20px",
  textAlign: "center" as const,
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
}

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px",
  color: "#333333",
  textAlign: "center" as const,
}

const subheadingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "25px 0 15px",
  color: "#333333",
}

const paragraphStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#555555",
  margin: "0 0 20px",
}

const hrStyle = {
  borderColor: "#e6e6e6",
  margin: "20px 0",
}

const contentStyle = {
  padding: "0 30px",
}

const testimonialBoxStyle = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  borderLeft: "4px solid #FF7A00",
  margin: "20px 0",
}

const starRatingStyle = {
  fontSize: "24px",
  color: "#FF7A00",
  margin: "0 0 10px",
}

const quoteStyle = {
  fontSize: "18px",
  fontStyle: "italic",
  lineHeight: "1.5",
  color: "#333333",
  margin: "0 0 15px",
}

const attributionStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#555555",
  textAlign: "right" as const,
  margin: "0",
}

const detailsStyle = {
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "8px",
  margin: "20px 0",
}

const detailLineStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#555555",
  margin: "5px 0",
}




export default TestimonialEmailTemplate

