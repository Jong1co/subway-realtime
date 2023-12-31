import React from "react";
import * as Style from "./styles";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import StationLine from "../StationLine/StationLine";
import { Bookmark, StorageBookmarkRepository } from "../../api/bookmark";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { hashKey } from "../../utils/hashKey";
import {
  LineName,
  lineInfo as lineColorInfo,
} from "../_common/LineBadge/LineBadge";
import { Text, View } from "react-native";
import { SvgIcon } from "../_common/SvgIcon/SvgIcon";

export type DrawLineInfo = {
  currentStation: string; //
  lastStation: string;
  isExpress: boolean;
  isSuperExpress: boolean;
};

type Props = {
  currentStation: string;
  destination: string;
  line: LineName;
  lineInfo: {
    list: string[];
    nextStation: string;
    direction: string;
  }[];
  runningSubwayList: DrawLineInfo[];
  remainTime: string;
};

const StationLineCard = ({
  destination,
  lineInfo,
  currentStation,
  runningSubwayList,
  line,
  remainTime,
}: Props) => {
  const queryClient = useQueryClient();

  const nextStation = lineInfo[0].nextStation;
  const bookmarkRepository = new StorageBookmarkRepository(AsyncStorage);

  const { data: bookmarks } = useQuery<Bookmark[]>({
    queryKey: ["bookmarks"],
    queryFn: bookmarkRepository.getBookmarks,
    initialData: [],
  });

  const { mutate: addBookmark } = useMutation({
    mutationKey: ["bookmarks"],
    mutationFn: bookmarkRepository.addBookmark,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });

  const { mutate: removeBookmark } = useMutation({
    mutationKey: ["bookmarks"],
    mutationFn: bookmarkRepository.removeBookmark,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });

  const bookmarkData: Bookmark = {
    nextStation,
    station: currentStation,
    line,
  };

  const isAlreadyBookmarked = Boolean(
    (bookmarks || []).find((item) => hashKey(item) === hashKey(bookmarkData))
  );

  const onPressBookmarkButton = () => {
    if (isAlreadyBookmarked) {
      removeBookmark(bookmarkData);
    } else {
      addBookmark(bookmarkData);
    }
  };

  return (
    <Style.Card key={destination}>
      <Style.TitleSection color={lineColorInfo[line].color}>
        <Style.TitleBox>
          <Style.Direction>({destination})</Style.Direction>
          <Style.NextStation>{nextStation} 방면</Style.NextStation>
        </Style.TitleBox>
        <BookmarkButton
          isActive={isAlreadyBookmarked}
          onPress={onPressBookmarkButton}
        />
      </Style.TitleSection>
      <Style.Content>
        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <SvgIcon name="Subway" width={16} height={16} fill={"white"} />
          <Style.RemainTime>{remainTime}</Style.RemainTime>
        </View>
        {lineInfo.map(({ list, nextStation, direction }, i) => {
          const isUphill = direction === "상행" || direction === "외선";

          return (
            <StationLine
              line={line}
              color={lineColorInfo[line].color}
              key={nextStation + i}
              list={isUphill ? [...list].reverse() : list}
              isUphill={isUphill}
              comparisonStation={isUphill ? list[0] : list[0]}
              currentStation={currentStation}
              runningSubwayList={runningSubwayList}
            />
          );
        })}
      </Style.Content>
    </Style.Card>
  );
};

export default StationLineCard;
