export type latestProps = {
	name: string;
	img: string;
	para: string;
	text: string;
	white: boolean;
}[];

export interface titleProp {
	h1: string;
	span: string;
}

export type differenceProp = {
	img: JSX.Element;
	text: JSX.Element;
	green?: boolean;
	purple?: boolean;
	blue?: boolean;
	orange?: boolean;
	name: string;
}[];

export type leadProp = {
	title: string;
	text: string;
	img: string;
}[];


export interface defferenceDataProp {
	difference: differenceProp;
}

export interface titleProp {
	h1: string;
	span: string;
}

export interface titleType {
	title: titleProp;
}

export type headingProp = {
	span: string;
	text: string;
};


