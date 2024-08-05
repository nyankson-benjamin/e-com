import Header from "./typography/Header"
export default function NoItemFound() {
  return (
    <div className="flex justify-center my-10 flex-col items-center  mx-10 rounded-lg p-3">
        <div className="bg-white p-10 rounded-lg">
        <img src="src/assets/not_found.jpg" alt="" className="w-[300px]"/>
        <Header text="NO item match your search"/>
        </div>
    </div>
  )
}
