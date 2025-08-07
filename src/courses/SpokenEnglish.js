import React from "react";
import ButtonComponent from "../components/ButtonComponent";

export default function SpokenEnglish() {
  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">Spoken English Coaching</h1>
        <ButtonComponent />
      </div>
      {/* What is Spoken English */}
      <section className="mb-5">
        <h2 className="text-primary">What is Spoken English?</h2>
        <p>
          Spoken English refers to the ability to communicate fluently and
          effectively in the English language. It focuses on real-life
          conversational skills, including pronunciation, grammar, vocabulary,
          and listening comprehension. Unlike written English, spoken English
          emphasizes the art of clear, confident, and impactful verbal
          communication.
        </p>
      </section>

      {/* Why is Spoken English Important */}
      <section className="mb-5">
        <h2 className="text-primary">Why is Spoken English Important?</h2>
        <ul className="list-group">
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-globe me-3 text-success"></i>
            <strong>Global Relevance:</strong> English is the most widely spoken
            language globally, used in business, education, travel, and
            diplomacy.
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-briefcase me-3 text-success"></i>
            <strong>Career Opportunities:</strong> Proficiency in English is
            often a key requirement for multinational companies and industries
            worldwide.
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-book me-3 text-success"></i>
            <strong>Education:</strong> Many top-tier universities and colleges
            require a strong command of English for admission.
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-people me-3 text-success"></i>
            <strong>Social Interactions:</strong> It bridges the communication
            gap between people from different linguistic and cultural
            backgrounds.
          </li>
        </ul>
      </section>

      {/* Benefits of Learning Spoken English */}
      <section className="mb-5">
        <h2 className="text-primary">Benefits of Learning Spoken English</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-chat-dots me-2 text-primary"></i>
            Improved communication skills for professional and personal
            settings.
          </li>
          <li className="list-group-item">
            <i className="bi bi-briefcase-fill me-2 text-primary"></i>
            Better job opportunities in fields like IT, business, healthcare,
            and education.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe2 me-2 text-primary"></i>
            Enhanced ability to connect with people from diverse cultures.
          </li>
          <li className="list-group-item">
            <i className="bi bi-people-fill me-2 text-primary"></i>
            Greater success in interviews, group discussions, and presentations.
          </li>
          <li className="list-group-item">
            <i className="bi bi-book me-2 text-primary"></i>
            Ease of communication while traveling to English-speaking countries.
          </li>
        </ul>
      </section>

      {/* Countries Where It’s Beneficial */}
      <section className="mb-5">
        <h2 className="text-primary">Countries Where It’s Beneficial</h2>
        <p>
          Spoken English skills are valuable worldwide, particularly in:
          <ul className="list-group mt-2">
            <li className="list-group-item">
              <i className="bi bi-geo-alt me-2 text-danger"></i>
              <strong>English-Speaking Countries:</strong> USA, UK, Canada,
              Australia, New Zealand, South Africa, and Ireland.
            </li>
            <li className="list-group-item">
              <i className="bi bi-building me-2 text-danger"></i>
              <strong>Business Hubs:</strong> Singapore, UAE, Hong Kong, and
              European countries where English is widely used in professional
              settings.
            </li>
          </ul>
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-5">
        <h2 className="text-primary">
          Why Choose Us for Spoken English Coaching?
        </h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-person-check me-2 text-info"></i>
            <strong>Personalized Curriculum:</strong> Tailored to your level and
            goals, whether you're a beginner or advanced learner.
          </li>
          <li className="list-group-item">
            <i className="bi bi-star me-2 text-info"></i>
            <strong>Expert Trainers:</strong> Highly qualified instructors with
            years of experience in teaching English.
          </li>
          <li className="list-group-item">
            <i className="bi bi-chat-square-text me-2 text-info"></i>
            <strong>Interactive Sessions:</strong> Real-world practice to ensure
            fluency and confidence.
          </li>
          <li className="list-group-item">
            <i className="bi bi-clock me-2 text-info"></i>
            <strong>Flexible Schedules:</strong> Convenient timings for students
            and working professionals.
          </li>
          <li className="list-group-item">
            <i className="bi bi-lightbulb me-2 text-info"></i>
            <strong>Modern Teaching Methods:</strong> Use of audio-visual aids,
            mobile apps, and group activities.
          </li>
        </ul>
      </section>
    </div>
  );
}
