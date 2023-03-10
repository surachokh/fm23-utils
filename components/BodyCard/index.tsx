import React from "react";
import { useRouter } from "next/router";
import { Card, Typography, Divider } from "antd";

const { Text } = Typography;

interface BodyCardProps {
  style?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  scrollBoxStyle?: React.CSSProperties;
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  actions?: React.ReactNode;
  hideDivider?: boolean;
  bottomComponent?: React.ReactNode;
}

export default function BodyCard(props: BodyCardProps) {
  const {
    style,
    cardStyle,
    bodyStyle,
    scrollBoxStyle,
    children,
    title,
    actions,
    hideDivider,
    bottomComponent,
  } = props;
  return (
    <div style={{ height: "100%", padding: 10, ...style }}>
      <Card
        style={{ height: "100%", ...cardStyle }}
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          padding: 16,
          overflow: "hidden",
          ...bodyStyle,
        }}
      >
        <CardHeader
          title={title}
          actions={actions}
          hideDivider={hideDivider}
          bottomComponent={bottomComponent}
        />
        <div
          className="scrollbox"
          style={{
            flex: 1,
            minHeight: 0,
            overflowX: "hidden",
            overflowY: "auto",
            ...scrollBoxStyle,
          }}
        >
          {children}
        </div>
      </Card>
    </div>
  );
}

interface CardHeaderProps {
  title?: string | React.ReactNode;
  actions?: React.ReactNode;
  hideDivider?: boolean;
  bottomComponent?: React.ReactNode;
}

const CardHeader = (props: CardHeaderProps) => {
  const { title, actions, hideDivider, bottomComponent } = props;
  const router = useRouter();
  return (
    <>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {typeof title === "string" ? (
            <Text
              style={{
                fontSize: 26,
                fontWeight: 400,
              }}
            >
              {title}
            </Text>
          ) : (
            title
          )}
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: title ? 24 : undefined,
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          {actions}
        </div>
      </div>
      {!hideDivider && (
        <Divider
          style={{
            marginTop: 16,
            marginBottom: 0,
          }}
        />
      )}
      {bottomComponent}
    </>
  );
};
export { CardHeader };
