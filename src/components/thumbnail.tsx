import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";

interface ThumbnailProps {
  url: string | null | undefined;
}

export const Thumbnail = ({ url }: ThumbnailProps) => {
  if (!url) return null;

  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative overflow-hidden max-w-[360px] w-fit border rounded-lg my-2 cursor-zoom-in">
          <img
            src={url}
            alt="Message Image"
            className="rounded-md object-contain w-auto max-h-[360px]"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] w-fit max-h-[90vh] border-none bg-transparent p-0 shadow-none">
        <DialogTitle className="sr-only">Image View</DialogTitle>
        <img
          src={url}
          alt="Message Image"
          className="rounded-md object-contain w-auto max-h-[90vh]"
        />
      </DialogContent>
    </Dialog>
  );
};
