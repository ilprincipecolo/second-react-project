import React from "react";
import { useSelector } from "react-redux";
import { LoadingScreen } from "../loadingScreen";
import { notification, List, Avatar } from "antd";
import { AlertError } from "../Errors/alertErrors";

export const DataPageHooks = () => {
  var { dataLoading, data, dataErrors } = useSelector(state => ({
    dataLoading: state.dataLoading,
    data: state.data,
    dataErrors: state.dataErrors
  }));

  return (
    <div>
      {dataLoading ? (
        <LoadingScreen />
      ) : dataErrors == null ? (
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    shape='square'
                    size={64}
                    src='https://i.pinimg.com/140x140_RS/13/4a/48/134a486ac7bbe83182cd5f44fe3a6522.jpg'
                  />
                }
                title={item.first_name + " " + item.last_name}
                description={
                  "He's playing in " +
                  item.team.full_name +
                  ", the team from " +
                  item.team.city
                }
              />
            </List.Item>
          )}
        />
      ) : (
        <AlertError message={"fecthing data from API"} />
      )}
    </div>
  );
};
