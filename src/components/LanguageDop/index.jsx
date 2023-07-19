function LanguageDop({name,color}) {
  return (
    <li className="flex items-center">
      <span className={`w-[6px] h-[6px] xl:w-[8px] xl:h-[8px] rounded-full mr-1 ${color}` }></span>
      <span className="text-gray-200">{name}</span>
    </li>
  );
}

export default LanguageDop;