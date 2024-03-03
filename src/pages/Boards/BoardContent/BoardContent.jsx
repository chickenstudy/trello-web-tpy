import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
function BoardContent({ board }) {
  // yeu cau chuot di chuyen 10px thi moi kich hoat event, fix truong hop click bi goi event
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 },
  // });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 },
  });

  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  const [orderedColumns, setOrderedColumns] = useState([]);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    //kiem tra neu khong ton tai over thi return luon tranh loi
    if (!over) return;

    // neu vi tri sau khi keo tha khac vi tri ban dau
    if (active.id !== over.id) {
      // lay vi tri cu tu thang active
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
      // lay vi tri moi tu thang over
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

      // dung ham arrayMove de sap xep lai ,mang colums ban dau
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      // const newColumnOrderIds = dndOrderedColumns.map((c) => c._id);
      // console.log(newColumnOrderIds);
      // console.log(dndOrderedColumns);
      // cap nhat lai state colums ban dau sau khi da keo tha
      setOrderedColumns(dndOrderedColumns);
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  );
}

export default BoardContent;
