import { defineCustomElements } from "ui/loader";

defineCustomElements();

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <my-component />
    </div>
  );
}
