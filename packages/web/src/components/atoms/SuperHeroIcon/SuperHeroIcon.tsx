import React from "react";

type Props = {
	fill?: string;
	width?: string;
	height?: string;
};

const SuperHeroIcon: React.FC<Props> = ({
	fill = "#fff",
	height = "1rem",
	width = "1rem",
}) => {
	return (
		<svg
			height={height}
			viewBox="-77 1 511 511.999"
			width={width}
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m357.75 377.605469-41.3125-135.335938 22.242188-28.949219c13.523437-17.078124 10.9375-42.273437-5.804688-56.238281l-43.089844-35.945312c-14.144531-11.800781-32.082031-18.300781-50.5-18.300781h-4.949218c6.886718-10.464844 10.90625-22.96875 10.90625-36.40625 0-36.628907-29.800782-66.429688-66.429688-66.429688s-66.429688 29.800781-66.429688 66.429688c0 13.433593 4.019532 25.941406 10.902344 36.40625h-4.945312c-18.421875 0-36.355469 6.5-50.5 18.296874l-43.09375 35.949219c-16.742188 13.964844-19.328125 39.164063-5.800782 56.242188l19.453126 25.289062-37.898438 138.992188h91.53125v83.5c0 28.0625 22.832031 50.894531 50.898438 50.894531 13.988281 0 26.671874-5.675781 35.882812-14.839844 9.207031 9.164063 21.894531 14.839844 35.882812 14.839844 28.0625 0 50.894532-22.832031 50.894532-50.894531v-83.5zm-40.558594-30.023438h-51.601562v-39.128906l28.382812-36.941406zm-174.785156-281.152343c0-20.074219 16.332031-36.40625 36.40625-36.40625 20.070312 0 36.402344 16.332031 36.402344 36.40625 0 20.0625-16.308594 36.386718-36.367188 36.40625h-.074218c-20.058594-.019532-36.367188-16.34375-36.367188-36.40625zm-98.425781 113.707031 43.089843-35.945313c8.757813-7.308594 19.863282-11.332031 31.269532-11.332031h60.433594.039062.039062 60.433594c11.40625 0 22.507813 4.023437 31.269532 11.332031l43.089843 35.945313c4.339844 3.617187 5.003907 10.15625 1.476563 14.574219l-49.441406 64.351562v-85.257812h-30.027344v61.34375l-113.59375.066406v-61.3125h-30.023438v85.199218l-49.359375-64.175781-.167969-.214843c-3.527343-4.417969-2.867187-10.957032 1.472657-14.574219zm-4.175781 167.445312 21.570312-79.097656 30.65625 39.863281v39.234375zm174.890624 134.394531c-11.507812 0-20.871093-9.363281-20.871093-20.871093v-148.625h-30.023438v148.625c0 11.507812-9.363281 20.871093-20.871093 20.871093-11.511719 0-20.871094-9.363281-20.871094-20.871093v-195.863281l113.507812-.070313v195.933594c0 11.507812-9.363281 20.871093-20.871094 20.871093zm0 0" />
		</svg>
	);
};

export default SuperHeroIcon;
