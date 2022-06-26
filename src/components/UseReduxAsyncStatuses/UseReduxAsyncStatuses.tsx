import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from "../../app/types";
import { LoadingColorType, LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import styles from "./UseReduxAsyncStatuses.module.css";

interface UseReduxAsyncStatusProps {
  status: ReduxAsyncStatusType,
  successContent: JSX.Element,
  error: ReduxAsyncErrorType,
  fetchAction?: any,
  fetchParams?: any,
  loadingColor?: LoadingColorType,
  loadingInterText?: string,
  loadingWidth?: string
};

export const UseReduxAsyncStatus: React.FC<UseReduxAsyncStatusProps> = ({ status, successContent, error, fetchAction, fetchParams, loadingColor, loadingInterText, loadingWidth }) => {
  const dispatch = useAppDispatch();
  const [pageContent, setPageContent] = useState(<></>);
  useEffect(() => {
    // console.log({ status, fetchAction, fetchParams });
    if (status === 'idle' && fetchAction) {
      dispatch(fetchAction(fetchParams));
    } else if (status === 'loading') {
      setPageContent(<>
        <LoadingSpinner color={loadingColor} width={loadingWidth} />
        {loadingInterText ? `${loadingInterText} loading...` : ''}
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

interface UseReduxAsyncStatusesProps {
  statuses: ReduxAsyncStatusType[],
  successContent: JSX.Element,
  errors: ReduxAsyncErrorType[],
  fetchActions?: any[],
  fetchParamss?: any[],
  loadingColor?: LoadingColorType,
  loadingInterText?: string,
  loadingWidth?: string
};

export const UseReduxAsyncStatuses: React.FC<UseReduxAsyncStatusesProps> = ({ statuses, successContent, errors, fetchActions, fetchParamss, loadingColor, loadingInterText, loadingWidth }) => {
  const dispatch = useAppDispatch();
  const [pageContent, setPageContent] = useState(<></>);
  useEffect(() => {
    // console.log({ statuses, fetchActions, fetchParamss });
    const statusesMap: {[statusID: string]: number} = {'idle': 0, 'loading': 0, 'succeeded': 0, 'failed': 0};
    statuses.forEach(status => statusesMap[status]++);
    if (statusesMap['idle'] && fetchActions && fetchParamss) {
      statuses.forEach((status, index) => {
        if (status === 'idle') dispatch(fetchActions[index](fetchParamss[index]));
      });
    } else if (statusesMap['loading']) {
      setPageContent(<>
        <LoadingSpinner color={loadingColor} width={loadingWidth} />
        {loadingInterText ? `${loadingInterText} loading...` : ''}
      </>);
    } else if (statusesMap['succeeded'] === statuses.length) {
      setPageContent(successContent);
    } else if (statusesMap['failed']) {
      setPageContent(<div>{errors}</div>)
    }
  }, [statuses, dispatch, successContent]);
  return (
    <>{pageContent}</>
  );
};
