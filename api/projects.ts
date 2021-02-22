const PROJECTS = [
    {
      id: 1,
      client: "Story Line",
      description: "New Stories: Creating new stories for future developers",
      duration: 435,
    },
    {
      id: 2,
      client: "Qatar 2022",
      description:
        "Creating a map and budged for a trip to Qatar",
      duration: 255,
    },
    {
      id: 3,
      client: "Tiktok",
      description:
        "Creating new projects to improve portfolio for future employment at Tiktok",
      duration: 441,
    },
  ];
  
  module.exports = function (req, res) {
    res.send({ data: PROJECTS });
  };