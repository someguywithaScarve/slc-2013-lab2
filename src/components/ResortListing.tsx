import type { ResortListingProps } from "../data/data";
export default function ResortListing({
    pic,
    country,
    location,
    rating,
    price,
}: ResortListingProps) {
    return (
        <div className="ResortListing">
            <img src={pic} alt="" width="100px"/>
            <h2>{country}</h2>
            <p><i>{location}</i></p>
            <p className={rating > 4.0 ? "ratingPos" : "ratingNeg"}>{rating}★</p>
            <p>${price}/night</p>
        </div>
    );
}