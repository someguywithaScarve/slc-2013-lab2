import ResortListing from "./ResortListing";
import type { ResortListingProps } from "../data/data";

interface ResortListingContainerProps {
    data: ResortListingProps[];
}

export default function ResortListingContainer({ data }: ResortListingContainerProps) {
    return(
        <div className="ResortListingContainer">
            {data.map((list) => (
                <ResortListing key={list.id} {...list}/>
            ))}
        </div>
    );
}