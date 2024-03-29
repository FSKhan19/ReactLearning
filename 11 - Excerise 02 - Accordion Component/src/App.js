import "./App.css";
import faqs from "./faqs";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          title={faq.title}
          num={index}
          key={faq.title}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, children, currOpen, onOpen }) {
  let isOpen = num === currOpen;

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={() => onOpen(num)}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
