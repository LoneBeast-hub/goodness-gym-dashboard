import React, { useContext, useState } from 'react';
import { MyContext } from "../../App";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoMdEye } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoBanOutline } from "react-icons/io5";
import ReactPaginate from 'react-paginate';
// styles
import './admin_manage_members_table.styles.css';

const AdminManageMembersTable = ({ AddClassName }) => {
    const { contextState, setContextState } = useContext(MyContext);
    const [currentPage, setCurrentPage] = useState(0);
    const membersPerPage = 9;

    // Calculate the offset for the current page
    const offset = currentPage * membersPerPage;

    // Get the current page of members
    const currentMembers = contextState.membersData.slice(offset, offset + membersPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    return (
        <div className="w-[90%] mx-auto">
            {/* desktop table */}
            <div className={`border-[0.5px] ${AddClassName} xl:block w-full mx-auto hidden border-b-0 overflow-x-scroll border-gray-e5 rounded-[0.5rem]`}>
                <table className="w-full table-fixed min-w-[600px]">
                    <thead>
                        <tr className="bg-gray-fa border-b-[0.5px] border-gray-e5">
                            <td className="text-[1.6rem] text-black-100 py-[2.8rem] pl-[5rem]">ID</td>
                            <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Name</td>
                            <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Username</td>
                            <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Phone</td>
                            <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Email</td>
                            <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Status</td>
                            <td className="text-[1.6rem] text-black-100 py-[2.8rem]">D.O.R</td>
                            <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Plan</td>
                            <td className="text-[1.6rem] text-black-100 py-[2.8rem] pr-[5rem] text-right">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {currentMembers.map(({ id, name, username, phone, email, status, date_of_registration, plan }, index) => (
                            <tr className="border-b-[0.5px] border-gray-e5" key={index}>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem] pl-[5rem] truncate">{id}</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{name}</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{username}</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{phone}</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{email}</td>
                                <td className="text-black-100 py-[2.8rem] truncate">
                                    {status ? (
                                        <span className="flex items-center gap-[0.5rem]">
                                            <span className="min-w-[8px] min-h-[8px] rounded-full bg-[#009688]"></span>
                                            <span className="text-[1.6rem] truncate">Active</span>
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-[0.5rem]">
                                            <span className="min-w-[8px] min-h-[8px] rounded-full bg-red-100"></span>
                                            <span className="text-[1.6rem] truncate">Expired</span>
                                        </span>
                                    )}
                                </td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{date_of_registration}</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{plan}</td>
                                <td className="text-gray-c4 py-[2.8rem] pr-[5rem]">
                                    <div className="flex items-center gap-[0.5px] justify-end">
                                        <IoMdEye onClick={() => {
                                            setContextState((prevValues) => ({
                                                ...prevValues,
                                                showMemberDetailsModal: {
                                                    id, name, username, phone, email, status, date_of_registration, plan
                                                }
                                            }))
                                        }} className="text-[1.9rem] cursor-pointer" />
                                        <IoBanOutline onClick={() => {
                                            setContextState((prevValues) => ({
                                                ...prevValues,
                                                showDisableMemberModal: true
                                            }))
                                        }} className="text-[1.9rem] cursor-pointer" />
                                        <HiOutlineTrash onClick={() => {
                                            setContextState((prevValues) => ({
                                                ...prevValues,
                                                showDeleteMemberModal: true
                                            }))
                                        }} className="text-[1.9rem] text-red-100 cursor-pointer" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <ReactPaginate
                previousLabel={<IoIosArrowBack />}
                nextLabel={<IoIosArrowForward />}
                breakLabel={'...'}
                pageCount={Math.ceil(contextState.membersData.length / membersPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                previousClassName={'pagination__prev'}
                nextClassName={'pagination__next'}
                disabledClassName={'pagination__disabled'}
            />
        </div>
    );
}

export default AdminManageMembersTable;