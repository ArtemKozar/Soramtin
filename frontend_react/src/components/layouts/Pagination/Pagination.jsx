import React, {useState} from 'react';
import style from "../../List/List.module.scss";
import {Pagination} from "@mui/material";

const PaginationWrapper = ({children, data, renderWithNewProps, elementsPerPage = 5}) => {

    const [pageObject, setPage] = useState({
        page: 1,
        perPage: elementsPerPage
    })

    const {page, perPage} = pageObject

    const handlerChange = (ev, page) => {
        setPage(prevState => ({
            ...prevState, page
        }))
    }

    const filteredData = data?.slice((page - 1) * perPage, page * perPage);

    const renderChildren = renderWithNewProps
        ?
        (filteredData || []).map((item) => {
            const childrenWithProps = React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {...item});
                }
                return child;
            });
            return (

                <div key={item.id}>
                    {childrenWithProps}
                </div>

            )
        })
        :
        children
    return (
        <div>
            {renderChildren}
            <Pagination
                className={style.pagination}
                count={Math.ceil(data?.length / perPage)}
                page={page}
                onChange={handlerChange}
            />
        </div>
    );
};

export default PaginationWrapper;