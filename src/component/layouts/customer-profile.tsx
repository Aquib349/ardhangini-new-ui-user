import { Pencil, Trash2, Upload } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Profile = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md text-sm">
      {/* Profile Picture and Upload Button */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <img
            src="assets/user.png"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="text-red-500 hover:text-red-600 border px-1.5 h-8"
          >
            <Trash2 size={20} />
          </Button>
          <Button
            className="flex items-center space-x-2 h-8 px-2"
            variant="outline"
          >
            <Upload size={16} />
            <span>Upload</span>
          </Button>
        </div>
      </div>

      {/* Name Section */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <p className="text-gray-500">Name</p>
          <p className="font-semibold">Alex Jackson</p>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="border-0">
                <Pencil size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-black/90 text-white">
              <p>Edit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Contacts Section */}
      <div className="flex justify-between items-center py-4 border-b">
        <div>
          <p className="text-gray-700 font-medium pb-1">Contacts</p>
          <p>
            <strong>Phone:</strong>  +91-1234567890
          </p>
          <p>
            <strong>Email:</strong>  finalui@yandex.com
          </p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="border-0">
                <Pencil size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-black/90 text-white">
              <p>Edit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* address */}
      <div className="flex justify-between items-center py-4 border-b">
        <div>
          <p className="text-gray-700 font-medium pb-1">Saved Address</p>
          <p>
            Malaysia Road, Bla bla <br />
            Saawan oval, 605 <br />
            Malaysia, 12101
          </p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="border-0">
                <Pencil size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-black/90 text-white">
              <p>Edit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Language & Currency Section */}
      <div className="flex justify-between items-center py-4">
        <div>
          <p className="text-gray-700 font-medium pb-1">Language & currency</p>
          <p>English, Rupees</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
