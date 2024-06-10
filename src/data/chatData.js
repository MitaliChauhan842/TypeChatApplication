const CHAT_DATA = [
  {
    id: "1",
    name: "Mitali",
    participantIds: ["1"],
    messages: [
      {
        id: "301",
        userId: "1",
        content: "This is My Self Chat",
        replies: [
          {
            id: "1717980153392",
            userId: "1",
            content: "nested 1 ",
            timestamp: "2024-06-10T00:42:33.392Z",
            replies: [
              {
                id: "1717980161317",
                userId: "1",
                content: "nested2",
                timestamp: "2024-06-10T00:42:41.317Z",
              },
            ],
          },
          {
            id: "1717980172477",
            userId: "1",
            content: "- vector",
            timestamp: "2024-06-10T00:42:52.477Z",
          },
        ],
        timestamp: "2024-06-08T22:00:00Z",
      },
    ],
  },
  {
    id: "2",
    name: "Samhita",
    participantIds: ["1", "2"],
    messages: [
      {
        id: "302",
        userId: "1",
        content: "Hi Samhita, are you coming for Badminton 🏸 Today?",
        timestamp: "2024-06-08T15:00:00Z",
      },
      {
        id: "303",
        userId: "2",
        content: "Yes, Mitali. I'll be there 🙌.",
        timestamp: "2024-06-08T17:05:00Z",
      },
      {
        id: "304",
        userId: "2",
        content: "Is , Arushi Coming 🤔?",
        timestamp: "2024-06-08T17:15:00Z",
      },
    ],
  },
  {
    id: "3",
    name: "Arushi",
    participantIds: ["1", "3"],
    messages: [
      {
        id: "305",
        userId: "3",
        content: "Hi Mitali, Is the Nesting in App Working?",
        timestamp: "2024-06-08T15:00:00Z",
      },
      {
        id: "306",
        userId: "1",
        content: "Yes,Arushi! Give it a try",
        timestamp: "2024-06-08T15:05:00Z",
      },
      {
        id: "307",
        userId: "3",
        content: "Woorking 👍",
        timestamp: "2024-06-08T15:05:00Z",
      },
    ],
  },
  {
    id: "4",
    name: "Palak",
    participantIds: ["1", "4"],
    messages: [
      {
        id: "308",
        userId: "4",
        content: "Hi what's up?",
        timestamp: "2024-06-08T13:00:00Z",
      },
    ],
  },
  {
    id: "5",
    name: "Muskan",
    participantIds: ["1", "5"],
    messages: [
      {
        id: "309",
        userId: "5",
        content: "Hi",
        timestamp: "2024-03-08T11:00:00Z",
      },
    ],
  },
  {
    id: "6",
    name: "Muskan",
    participantIds: ["1", "6"],
    messages: [
      {
        id: "310",
        userId: "6",
        content: "Hello",
        timestamp: "2023-06-08T12:00:00Z",
      },
    ],
  },
];

export default CHAT_DATA;
