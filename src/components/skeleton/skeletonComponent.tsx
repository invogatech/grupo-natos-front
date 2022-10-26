import { SkeletonWrapper } from "./skeletonStyle";

type Props = {
  width: string;
  height: string;
  type: string;
}

export default function SkeletonComponent ( { width, height, type }: Props ) {
  return (
    <SkeletonWrapper width={width} height={height} type={type}/>
  )
}