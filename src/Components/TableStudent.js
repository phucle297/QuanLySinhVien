import React from "react";
import { useSelector } from "react-redux";

export default function TableStudent() {
  const { arrStudent } = useSelector((state) => state.StudentReducer);

  const renderTable = () => {
    return arrStudent.map((stu, i) => {
      return (
        <tr key={i} className="">
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.maSV}
          </td>
          <td
            className={
              "p-2 border border-gray-300  " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.hoTen}
          </td>
          <td
            className={
              "p-2 border border-gray-300  " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.ngaySinh}
          </td>
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.cmnd}
          </td>
          <td
            className={
              "p-2 border border-gray-300" +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.email}
          </td>
          <td
            className={
              " py-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.soDT}
          </td>
          <td
            className={
              " py-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.matKhau}
          </td>
          <td
            className={
              "p-2 border border-gray-300" +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.khoaHoc}
          </td>
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.tenKhoa}
          </td>
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.tenLop}
          </td>
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.tenGV}
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="font-bold text-3xl">Danh s??ch sinh vi??n</h3>
      <table className="w-full text-center shadow-lg mt-5 rounded overflow-hidden">
        <thead className="w-full">
          <tr className="bg-gray-600 text-white">
            <th className="border-2 border-gray-500 p-2 font-bold ">M?? s???</th>
            <th className="border-2 border-gray-500 p-2 font-bold ">H??? t??n</th>
            <th className="border-2 border-gray-500 p-2 font-bold ">
              Ng??y sinh
            </th>
            <th className="border-2 border-gray-500 p-2 font-bold ">Cmnd</th>
            <th className="border-2 border-gray-500 p-2 font-bold">Email</th>
            <th className="border-2 border-gray-500 p-2 font-bold">
              S??? ??i???n tho???i
            </th>
            <th className="border-2 border-gray-500 p-2 font-bold">
              M???t kh???u
            </th>
            <th className="border-2 border-gray-500 p-2 font-bold">Kh??a h???c</th>
            <th className="border-2 border-gray-500 p-2 font-bold">Khoa</th>
            <th className="border-2 border-gray-500 p-2 font-bold">L???p</th>
            <th className="border-2 border-gray-500 p-2 font-bold">
              Gi??o vi??n ph??? tr??ch
            </th>
          </tr>
        </thead>
        <tbody className="">{renderTable()}</tbody>
      </table>
    </div>
  );
}
