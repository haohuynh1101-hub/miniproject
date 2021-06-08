import { CardPerson } from 'core/Layout/component';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import PersonStore from 'mobx/PersonStore';
import { useContext } from 'react';
import { CirlecChart } from './CircleChart';
import { TeamData } from './TeamData';
export const TeamContainer = observer(() => {
  const personStore = useContext(PersonStore);
  const { listPerson } = toJS(personStore);
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
          {listPerson.map((cardPerson, index) => {
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
});
