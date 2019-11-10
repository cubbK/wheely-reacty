interface Element {
  nodeName: string;
  atributes: { [type: string]: any };
  args: any[];
}

function createElement({ nodeName, atributes, args }: Element) {
  console.log({ nodeName, atributes, args });

  const element = document.createElement(nodeName);
  for (const [atributeKey, atributeValue] of Object.entries(atributes)) {
    element.setAttribute(atributeKey, atributeValue);
  }
}

export function render() {}

export default (
  nodeName: Element["nodeName"],
  atributes: Element["atributes"],
  ...args: Element["args"]
) => {
  return createElement({ nodeName, atributes, args });
};
