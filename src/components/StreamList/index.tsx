import React from "react";

import streamThumbnail from "../../images/stream_thumbnail.jpg";

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar
              source={{
                uri:
                  "https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4",
              }}
            />
            <StreamUsername numberOfLines={1}>@Carlosvilelal</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end Development
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science and Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Codding</TagText>
          </TagView>

          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
