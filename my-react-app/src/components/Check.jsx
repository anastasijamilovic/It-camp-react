import { useState } from "react";
// prvi ako je true- drugi i treci su false i ne mogu da se menjaju
// ako je drugi true- prvi je false i ne moze da se menja
// treci nema pravila
const Check = () => {
  const [checked, setChecked] = useState({
    first: false,
    second: false,
    third: false,
  });
  return (
    <div>
      <label htmlFor="">
        First
        <input
          type="checkbox"
          checked={checked.first}
          onChange={() => {
            if (checked.second) {
              return;
            }
            if (!checked.first) {
              setChecked({
                first: true,
                second: false,
                third: false,
              });
            }
            setChecked({ ...checked, first: !checked.first });
          }}
        />
      </label>
      <label htmlFor="">
        Second
        <input
          type="checkbox"
          checked={checked.second}
          onChange={() => setChecked({ ...checked, second: !checked.second })}
        />
      </label>
      <label htmlFor="">
        Third
        <input
          type="checkbox"
          checked={checked.third}
          onChange={() => {
            setChecked({ ...checked, third: !checked.third });
          }}
        />
      </label>
    </div>
  );
};

export default Check;
