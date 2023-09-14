import { styled } from "styled-components";

import { useAppSelector } from "../../hooks/useStore";
import { selectAppStore } from "../../store/app/slice";

const LoadingWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #9e9e9e77;
  top: 0;
  left: 0;
`

const LoadingInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Loading = () => {
  const appStore = useAppSelector(selectAppStore);

  if (appStore.isLoading) {
    return (
      <LoadingWrapper>
        <LoadingInner>
          Ładowanie....
        </LoadingInner>
      </LoadingWrapper>
    )
  }

  return <></>
}

export default Loading