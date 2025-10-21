import { Router } from "wouter";
import { ThemeProvider } from "../ThemeProvider";
import Navigation from "../Navigation";

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <Router>
        <Navigation />
      </Router>
    </ThemeProvider>
  );
}
