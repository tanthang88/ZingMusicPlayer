import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

function SliderLoading({count, height, ...props}) {
    return (
        <SkeletonTheme baseColor="#3d3d3d" highlightColor="#282828">
            <span>
                <Skeleton count={count} height={height} {...props} />
            </span>
        </SkeletonTheme>
    );
}
function SidebarLoading({count = 1, height, ...props}) {
    return (
        <SkeletonTheme
            baseColor="#3d3d3d"
            highlightColor="#282828"
            >
            <div>
                <Skeleton count={count} height={height} {...props} />
            </div>
        </SkeletonTheme>
    );
}
export {SliderLoading, SidebarLoading};
