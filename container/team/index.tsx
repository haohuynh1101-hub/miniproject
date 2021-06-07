import { CardPerson } from "core/Layout/component";
import { CirlecChart } from "./CircleChart";
import { TeamData } from "./TeamData";
const fakeCardPerson = [
  {
    rank: 1,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
  {
    rank: 2,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
  {
    rank: 3,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
  {
    rank: 4,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
  {
    rank: 5,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
  {
    rank: 6,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
  {
    rank: 7,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
  {
    rank: 8,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
  {
    rank: 9,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
  {
    rank: 10,
    image: "https://via.placeholder.com/350",
    name: "Justin Timberlake",
    sales: "123 321",
    target: "321 123",
    percent: "100%",
  },
];
export const TeamContainer = () => {
  return (
    <>
      <div className="my-5">
        <span className="text-2xl font-bold">Phong Kinh Doanh</span>
      </div>
      <div className="flex grid grid-cols-4 gap-2   rounded ">
        <div className="col-span-1  md:col-span-6 lg:col-span-1 flex lg:block md:flex py-2 justify-between ">
          <TeamData title="Sales" numberData={123321} />
          <TeamData title="Target" numberData={123321} />
          <CirlecChart />
        </div>
        <div className=" col-span-3 md:col-span-6 lg:col-span-3 box h-full ml-1 flex flex-col flex-wrap lg:flex-wrap ">
          {fakeCardPerson.map((cardPerson, index) => {
            return (
              <CardPerson
                key={index}
                rank={cardPerson.rank}
                image={cardPerson.image}
                name={cardPerson.name}
                sales={cardPerson.sales}
                target={cardPerson.target}
                percent={cardPerson.percent}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
