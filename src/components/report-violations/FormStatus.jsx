const FormStatus = ({ formData, filesCount }) => {
  const checkConditions = [
    formData.type,
    formData.locationType,
    formData.description.length >= 10,
    filesCount > 0,
    (formData.isAnonymous || (formData.fullName && formData.email && formData.whatsapp))
  ];

  const completedCount = checkConditions.filter(Boolean).length;

  return (
    <div className="bg-white border border-brown-normal p-6 rounded-2xl shadow-sm">
      <span className="text-xs sm:text-sm font-bold text-brown-normal block mb-4">Kelengkapan Form</span>
      <ul className="flex flex-col gap-3 text-xs text-gray-500 font-medium">
        <li className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${checkConditions[0] ? 'bg-green-500' : 'bg-gray-300'}`} />
          Type of Violation
        </li>
        <li className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${checkConditions[1] ? 'bg-green-500' : 'bg-gray-300'}`} />
          Location of the Incident
        </li>
        <li className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${checkConditions[2] ? 'bg-green-500' : 'bg-gray-300'}`} />
          Description of Event
        </li>
        <li className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${checkConditions[3] ? 'bg-green-500' : 'bg-gray-300'}`} />
          Photo Evidence
        </li>
        <li className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${checkConditions[4] ? 'bg-green-500' : 'bg-gray-300'}`} />
          Reporter's Identity
        </li>
      </ul>
      <div className="w-full bg-gray-100 h-1 rounded-full mt-5 overflow-hidden">
        <div 
          className="bg-green-500 h-full transition-all duration-300"
          style={{ width: `${completedCount * 20}%` }}
        />
      </div>
    </div>
  );
};

export default FormStatus;