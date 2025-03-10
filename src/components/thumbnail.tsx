import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";

interface ThumbnailProps {
  url: string | null | undefined;
}

export const Thumbnail = ({ url }: ThumbnailProps) => {
  if (!url) return null;

  return (
    <Dialog>
      <DialogTrigger className="w-fit h-fit my-2">
        <div className="relative overflow-hidden max-w-[360px] w-fit border rounded-lg cursor-zoom-in">
          <img
            src={url}
            alt="Message Image"
            className="rounded-md object-contain max-h-[260px]"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] w-fit max-h-[95vh] border-none bg-transparent p-0 shadow-none">
        <DialogTitle className="sr-only">Image View</DialogTitle>
        <img
          src={url}
          alt="Message Image"
          className="rounded-md object-contain max-w-[95vw] max-h-[95vh]"
        />
      </DialogContent>
    </Dialog>
  );
};
