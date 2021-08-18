import "./App.css";
import Header from "./Header";
import Card from "./Card";

function App() {
  const cards = [
    {
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftech-prospect.com%2Fwp-content%2Fuploads%2F2020%2F02%2FTips-for-Successful-Mobile-App-Development-and-Deployment-scaled.jpg&f=1&nofb=1",
      title: "App Dev",
      subtitle: "Creates cool mobile apps.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftech-prospect.com%2Fwp-content%2Fuploads%2F2020%2F02%2FTips-for-Successful-Mobile-App-Development-and-Deployment-scaled.jpg&f=1&nofb=1",
      title: "App Dev",
      subtitle: "Creates cool mobile apps.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftech-prospect.com%2Fwp-content%2Fuploads%2F2020%2F02%2FTips-for-Successful-Mobile-App-Development-and-Deployment-scaled.jpg&f=1&nofb=1",
      title: "App Dev",
      subtitle: "Creates cool mobile apps.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftech-prospect.com%2Fwp-content%2Fuploads%2F2020%2F02%2FTips-for-Successful-Mobile-App-Development-and-Deployment-scaled.jpg&f=1&nofb=1",
      title: "App Dev",
      subtitle: "Creates cool mobile apps.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftech-prospect.com%2Fwp-content%2Fuploads%2F2020%2F02%2FTips-for-Successful-Mobile-App-Development-and-Deployment-scaled.jpg&f=1&nofb=1",
      title: "App Dev",
      subtitle: "Creates cool mobile apps.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className="App">
      <div>
        <Header />

        {cards.map((cards, index) => (
          <Card
            key={index}
            image={cards.img}
            title={cards.title}
            subtitle={cards.subtitle}
            desc={cards.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
