import BackToTop from "../BackToTop";

export default function BackToTopExample() {
  return (
    <div>
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>Scroll down to see the Back to Top button appear...</p>
      </div>
      <BackToTop />
    </div>
  );
}
