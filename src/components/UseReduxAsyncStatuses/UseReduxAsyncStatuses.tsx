import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from "../../app/types";
import { LoadingColorType, LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import styles from "./UseReduxAsyncStatuses.module.css";

interface UseReduxAsyncStatusesProps {
  status: ReduxAsyncStatusType,
  successContent: JSX.Element,
  error: ReduxAsyncErrorType,
  fetchAction?: any,
  fetchParams?: any,
  loadingColor?: LoadingColorType,
  loadingInterText?: string
};

export const UseReduxAsyncStatuses: React.FC<UseReduxAsyncStatusesProps> = ({ status, successContent, error, fetchAction, fetchParams, loadingColor, loadingInterText }) => {
  const dispatch = useAppDispatch();
  const [pageContent, setPageContent] = useState(<></>);
  useEffect(() => {
    console.log({ status, fetchAction, fetchParams });
    if (status === 'idle' && fetchAction) {
      dispatch(fetchAction(fetchParams));
    } else if (status === 'loading') {
      setPageContent(<>
        <LoadingSpinner color={loadingColor} />
        {loadingInterText ? `${loadingInterText} loading` : ''}
      </>);
    } else if (status === 'succeeded') {
      setPageContent(successContent);
    } else if (status === 'failed') {
      setPageContent(<div>{error}</div>)
    }
  }, [status, dispatch, successContent]);
  return (
    <>{pageContent}</>
  );
};
