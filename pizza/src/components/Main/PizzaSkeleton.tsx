import React from "react"
import ContentLoader from 'react-content-loader'

export const PizzaSkeleton: React.FC = (props) => (
    <ContentLoader 
        speed={2}
        width={270}
        height={477}
        viewBox="0 0 270 450"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="125" cy="126" r="109" /> 
        <rect x="0" y="305" rx="5" ry="5" width="260" height="83" /> 
        <rect x="0" y="419" rx="5" ry="5" width="100" height="25" /> 
        <rect x="113" y="412" rx="20" ry="20" width="150" height="37" /> 
        <rect x="0" y="253" rx="12" ry="12" width="260" height="27" />
    </ContentLoader>
)