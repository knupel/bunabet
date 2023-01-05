import React from "react";
import { FC,  ReactNode } from "react";
import "./layout.css";

interface LayoutProps {
	children: ReactNode;
	name:  string,
}


export const Layout: FC<LayoutProps> = ({children}) => {
	let date =  new Date().getFullYear();
	return (
		<div className="layout">
			{children}
			<footer>
				bunabet {date}
			</footer>
		</div>
	);
}

