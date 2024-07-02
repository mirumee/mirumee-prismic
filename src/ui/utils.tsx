import { JSXMapSerializer } from "@prismicio/react";

export const component: JSXMapSerializer = {
  heading1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
  heading2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
  heading3: ({ children }) => <h3 className="text-xl font-bold">{children}</h3>,
  heading4: ({ children }) => <h4 className="text-lg font-bold">{children}</h4>,
  heading5: ({ children }) => <h5 className="text-base font-bold">{children}</h5>,
  heading6: ({ children }) => <h6 className="text-sm font-bold">{children}</h6>,
  paragraph: ({ children }) => <p className="text-base">{children}</p>,
  preformatted: ({ children }) => <pre className="text-base">{children}</pre>,
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  listItem: ({ children }) => <li>{children}</li>,
  oListItem: ({ children }) => <li>{children}</li>,
  list: ({ children }) => <ul>{children}</ul>,
  oList: ({ children }) => <ol>{children}</ol>,
  embed: ({ children }) => <div className="w-full h-96" dangerouslySetInnerHTML={{ __html: children[0] }} />,
  label: ({ children }) => <span className="text-sm">{children}</span>,
}