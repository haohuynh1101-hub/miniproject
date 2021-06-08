import { CardPerson } from "core/Layout/component";
import { CirlecChart } from "./CircleChart";
import { TeamData } from "./TeamData";
const fakeCardPerson = [
  {
    rank: 1,
    image: "https://via.placeholder.com/350",
    name: "Nguyễn Văn A",
    sales: 150,
    target: 300,
  },
  {
    rank: 2,
    image: "https://via.placeholder.com/350",
    name: "Nguyễn Văn B",
    sales: 123321,
    target: 321123,
  },
  {
    rank: 3,
    image: "https://via.placeholder.com/350",
    name: "Nguyễn Văn C",
    sales: 1200,
    target: 3000,
  },
  {
    rank: 4,
    image: "https://via.placeholder.com/350",
    name: "Nguyễn Văn D",
    sales: 60,
    target: 150,
  },
  {
    rank: 5,
    image: "https://via.placeholder.com/350",
    name: "Nguyễn Văn E",
    sales: 123,
    target: 321,
  },
  {
    rank: 6,
    image: "https://via.placeholder.com/350",
    name: "Trần Văn A",
    sales: 60,
    target: 321,
  },
  {
    rank: 7,
    image: "https://via.placeholder.com/350",
    name: "Trần Văn B",
    sales: 123,
    target: 300,
  },
  {
    rank: 8,
    image: "https://via.placeholder.com/350",
    name: "Trần Văn C",
    sales: 123321,
    target: 321123,
  },
  {
    rank: 9,
    image: "https://via.placeholder.com/350",
    name: "Trần Văn D",
    sales: 1233,
    target: 3000,
  },
  {
    rank: 10,
    image: "https://via.placeholder.com/350",
    name: "Trần Văn E",
    sales: 1234,
    target: 4000,
  },
];
export const TeamContainer = () => {
  return (
    <>
      <div className="my-5">
        <span className="text-2xl font-bold">Phong Kinh Doanh</span>
      </div>
      <div className="flex grid grid-cols-4 gap-2   rounded ">
        <div className="col-span-1 xl:col-span-1  md:col-span-6 lg:col-span-6 flex xl:block lg:flex  md:flex py-2 justify-between ">
          <TeamData title="Target" numberData={2000} />
          <TeamData title="Sales" numberData={1200} />
          <CirlecChart />
        </div>
        <div className=" col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6  box h-full ml-1 flex flex-col flex-wrap lg:flex-wrap ">
          {fakeCardPerson.map((cardPerson, index) => {
            return (
              <CardPerson
                key={index}
                rank={cardPerson.rank}
                image={cardPerson.image}
                name={cardPerson.name}
                sales={cardPerson.sales}
                target={cardPerson.target}
                percent={Math.round(
                  (cardPerson.sales / cardPerson.target) * 100
                )}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
