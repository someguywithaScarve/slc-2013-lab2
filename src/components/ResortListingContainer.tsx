import ResortListing from "./ResortListing";
import type { ResortListingDets } from "../data/data";

interface ResortListing {
    listings: ResortListing[];
}

export default function ResortListingContainer({ listings }: ResortListingDets) {
    return(
        <div className="ResortListingContainer">
            {listings.map((list) => (
                <ResortListing key={listings.id} {...listings}/>
            ))}
        </div>
    )
}