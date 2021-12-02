import React from "react";
import { useForceUpdate } from "../../../hooks/use-force-update";
import dayjs from "dayjs";
import { Button, Typography } from "antd";

const { Text } = Typography;

const getCurrentTime = () => dayjs().format("YYYY-MM-DD HH:mm:ss");

export default () => {
  const forceUpdate = useForceUpdate();

  return (
    <>
      <Text strong type="warning">{getCurrentTime()}</Text>
      <br />
      <br />
      <Button onClick={forceUpdate}>强制刷新以得到当前时间</Button>
    </>
  );
};
