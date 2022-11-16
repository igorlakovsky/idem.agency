import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import { Button } from "antd";
import { useState } from "react";

export function Location() {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <div className="map">
      <div className="map__wrapper">
        <div className="map__title">география</div>
        <div className="map__buttons">
          <Button
            type="link"
            className={
              activeButton === "ur"
                ? "map__button map__button_active"
                : "map__button"
            }
            onClick={() => {
              setActiveButton("ur");
            }}
          >
            юрлица
          </Button>
          <Button
            type="link"
            className={
              activeButton === "ph"
                ? "map__button map__button_active"
                : "map__button"
            }
            onClick={() => {
              setActiveButton("ph");
            }}
          >
            физлица
          </Button>
          <Button
            type="link"
            className={
              activeButton === "all"
                ? "map__button map__button_active"
                : "map__button"
            }
            onClick={() => {
              setActiveButton("all");
            }}
          >
            показать всё
          </Button>
        </div>
        <YMaps>
          <Map
            width="100%"
            height="600px"
            state={{
              center: [55.755423, 37.620583],
              zoom: 12,
              behaviors: [],
            }}
            options={{
              suppressMapOpenBlock: true,
              copyrightLogoVisible: false,
              copyrightProvidersVisible: false,
              copyrightUaVisible: false,
            }}
          >
            {activeButton === "ur" || activeButton === "all" ? (
              <>
                <Placemark defaultGeometry={[55.751574, 37.573856]} />
                <Placemark defaultGeometry={[55.710514, 37.557325]} />
                <Placemark defaultGeometry={[55.763974, 37.656199]} />
                <Placemark defaultGeometry={[55.729823, 37.629009]} />
              </>
            ) : null}
            {activeButton === "ph" || activeButton === "all" ? (
              <>
                <Placemark defaultGeometry={[55.736555, 37.593964]} />
                <Placemark defaultGeometry={[55.769915, 37.608877]} />
                <Placemark defaultGeometry={[55.77748, 37.586508]} />
                <Placemark defaultGeometry={[55.76375, 37.552954]} />
                <Placemark defaultGeometry={[55.732348, 37.680458]} />
                <Placemark defaultGeometry={[55.770204, 37.687357]} />
              </>
            ) : null}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
