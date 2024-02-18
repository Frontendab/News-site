"use client";

const Accordion = ({ dataAccordion }) => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {dataAccordion.map((v, i) => (
        <div key={i} className="accordion-item">
          <h2 className="accordion-header" id={`flush-heading${i}`}>
            <button
              className="accordion-button collapsed d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-heading-${i}`}
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <span className="text-capitalize">
                {v.icon} {v.name}
              </span>{" "}
              <span
                className="text-light text-center"
                style={{
                  padding: "5px 0",
                  width: "30px",
                  background: `${v.color}`,
                }}
              >
                {v.length}
              </span>
            </button>
          </h2>
          <div
            id={`flush-heading-${i}`}
            className="accordion-collapse collapse"
            aria-labelledby={`flush-heading${i}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio a
              dolore libero, incidunt illum facilis pariatur. Cupiditate tempora
              odio, corporis id suscipit nisi placeat veritatis corrupti optio.
              Nam, saepe delectus.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
