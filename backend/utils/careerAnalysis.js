const analyzeCareer = (data) => {
  const interests = Array.isArray(data.interests)
    ? data.interests.map((item) => String(item).toLowerCase())
    : [];

  const skills = String(data.skills || "").toLowerCase();
  const stream = String(data.stream || "").toLowerCase();
  const goal = String(data.goal || "").toLowerCase();

  const recommendations = [];

  // =========================
  // TECHNOLOGY
  // =========================

  if (
    interests.includes("technology") ||
    skills.includes("html") ||
    skills.includes("javascript") ||
    skills.includes("python") ||
    skills.includes("react") ||
    skills.includes("programming")
  ) {
    let match = 90;

    if (stream === "science") match += 3;
    if (goal === "get a job") match += 2;

    recommendations.push({
      career: "Software Developer",
      slug: "software-developer",
      match: Math.min(match, 98),
      reason:
        "Your interest and skills in technology make software development a strong career option."
    });

    recommendations.push({
      career: "Data Analyst",
      slug: "data-analyst",
      match: 86,
      reason:
        "Your technology interest can also lead to data analysis and analytical careers."
    });
  }

  // =========================
  // MEDICAL
  // =========================

  if (
    interests.includes("medical") ||
    stream === "science"
  ) {
    recommendations.push({
      career: "Healthcare Professional",
      slug: "healthcare-professional",
      match: interests.includes("medical") ? 91 : 78,
      reason:
        "Your profile has a connection with science and healthcare-related career paths."
    });
  }

  // =========================
  // DESIGN
  // =========================

  if (interests.includes("design")) {
    recommendations.push({
      career: "UI/UX Designer",
      slug: "ui-ux-designer",
      match: 88,
      reason:
        "Your interest in design is suitable for creative digital careers such as UI/UX design."
    });
  }

  // =========================
  // FINANCE
  // =========================

  if (
    interests.includes("finance") ||
    (interests.includes("business") && stream === "commerce")
  ) {
    recommendations.push({
      career: "Financial Analyst",
      slug: "financial-analyst",
      match: interests.includes("finance") ? 89 : 82,
      reason:
        "Your profile shows an interest in finance and analytical business careers."
    });
  }

  // =========================
  // BUSINESS
  // =========================

  if (
    interests.includes("business") ||
    stream === "commerce"
  ) {
    recommendations.push({
      career: "Business & Management",
      slug: "business-management",
      match: interests.includes("business") ? 87 : 80,
      reason:
        "Your business interests and educational background can support management and entrepreneurship careers."
    });
  }

  // =========================
  // GOVERNMENT
  // =========================

  if (
    interests.includes("government") ||
    goal === "government job"
  ) {
    recommendations.push({
      career: "Government Services",
      slug: "government-services",
      match: 86,
      reason:
        "Your interest in government and public-sector opportunities makes government services a suitable path."
    });
  }

  // =========================
  // TEACHING
  // =========================

  if (interests.includes("teaching")) {
    recommendations.push({
      career: "Teacher / Educator",
      slug: "teacher-educator",
      match: 84,
      reason:
        "Your interest in teaching matches careers in education, training and academic development."
    });
  }

  // =========================
  // RESEARCH
  // =========================

  if (
    interests.includes("research") ||
    (stream === "science" && skills.includes("analysis"))
  ) {
    recommendations.push({
      career: "Researcher",
      slug: "researcher",
      match: 83,
      reason:
        "Your profile indicates an analytical and research-oriented career direction."
    });
  }

  // =========================
  // REMOVE DUPLICATES
  // =========================

  const uniqueRecommendations = recommendations.filter(
    (career, index, array) =>
      index ===
      array.findIndex(
        (item) => item.career === career.career
      )
  );

  // =========================
  // SORT BY MATCH
  // =========================

  uniqueRecommendations.sort(
    (a, b) => b.match - a.match
  );

  // =========================
  // FALLBACK
  // =========================

  if (uniqueRecommendations.length === 0) {
    return [
      {
        career: "Career Exploration",
        slug: "career-exploration",
        match: 70,
        reason:
          "Based on your current profile, we recommend exploring different career paths before making a final decision."
      }
    ];
  }

  // Top 5
  return uniqueRecommendations.slice(0, 5);
};

module.exports = analyzeCareer;