import { useMediaQuery } from "@mantine/hooks";

export default function MainCard({
  children,
  row,
  center,
  transparent,
  noPadding,
  gap = 20,
  fullWidth,
  width,
  style,
  thinShadow,
  forceRow
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div
      style={{
        gap,
        display: "flex",
        borderRadius: 10,
        boxSizing: "border-box",
        padding: noPadding ? 0 : isMobile ? 10 : 20,
        width: fullWidth || isMobile ? "100%" : width,
        alignItems: !row && center ? "center" : "normal",
        flexDirection: row && !isMobile || forceRow ? "row" : "column",
        justifyContent: row && center ? "center" : "normal",
        backgroundColor: transparent ? "transparent" : "white",
        boxShadow: transparent
          ? "none"
          : thinShadow
          ? "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
