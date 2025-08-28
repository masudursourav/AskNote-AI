"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Id } from "../../../../convex/_generated/dataModel";
import { NotePreviewDialog } from "./note-preview-dialog";

interface NoteItemProps {
  note: {
    _id: Id<"notes">;
    title: string;
    body: string;
  };
}
export function NoteItem({ note }: NoteItemProps) {
  function handleOpenNote() {
    window.history.pushState(null, "", `?noteId=${note._id}`);
  }
  return (
    <>
      <Card
        className="cursor-pointer hover:shadow-md transition-shadow"
        onClick={handleOpenNote}
      >
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="line-clamp-3 text-sm text-muted-foreground whitespace-pre-line">
            {note.body}
          </div>
        </CardContent>
      </Card>
      <NotePreviewDialog note={note} />
    </>
  );
}
