import { FiUploadCloud, FiX } from 'react-icons/fi';

const EvidenceUpload = ({ files, onFileChange, onRemoveFile }) => {
  return (
    <div className="bg-white border border-[#e19e59]/20 p-6 sm:p-8 rounded-2xl shadow-sm">
      <label className="block text-sm sm:text-base font-bold text-brown-normal mb-1">
        4. Photographic Evidence <span className="text-gray-400 font-normal text-xs sm:text-sm">[Optional, max. 4 photos]</span>
      </label>
      
      <div className="mt-3">
        <label className="border-2 border-dashed border-gray-200 hover:border-[#e19e59]/50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer bg-gray-50/50 transition-colors group h-40">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={onFileChange}
            className="hidden"
          />
          <FiUploadCloud className="text-gray-400 group-hover:text-[#e19e59] text-3xl mb-2 transition-colors" />
          <span className="text-xs sm:text-sm font-semibold text-[#4a3728] mb-1">
            Drag & drop photos here
          </span>
          <span className="text-[10px] sm:text-xs text-gray-400">
            or click to select a file (PNG, JPG, JPEG up to 10MB per photo)
          </span>
        </label>
      </div>

      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 animate-fadeIn">
          {files.map((file, index) => {
            const previewUrl = URL.createObjectURL(file);

            return (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 group bg-gray-50">
                <img
                  src={previewUrl}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  onLoad={() => {
                    URL.revokeObjectURL(previewUrl);
                  }}
                />
                <button
                  type="button"
                  onClick={() => onRemoveFile(index)}
                  className="absolute top-1.5 right-1.5 bg-black/50 hover:bg-red-600 text-white p-1.5 rounded-full backdrop-blur-sm transition-colors shadow-sm"
                >
                  <FiX className="text-xs sm:text-sm" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EvidenceUpload;