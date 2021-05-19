import React, {useEffect, useState} from 'react';
import {Input} from "../components/Input";
import {ListUrls} from "../components/ListUrls";
import {apiRequests} from "../api/methods";
import {successNotification} from "../notification/successNotification";
import {Modal} from "../components/Modal";
import {Pagination} from "../components/Pagination";
import {errorNotification} from "../notification/errorNotification";


export const Main = () => {
    const [listUrls, setListUrls] = useState(null)
    const [successModal, setSuccessModal] = useState(false)

    const fetchUrls = (page) => {
        apiRequests.getUrls(page).then(res => {
            setListUrls(res.data)
        }).catch(err => {
            errorNotification('Ошбика загрузки доступных ссылок')
        })
    }

    const deleteUrl = (hash) => {
        apiRequests.deleteUrls(hash).then(() => {
            successNotification('Ссылка удалена')
            fetchUrls()
        }).catch(() => {
            errorNotification('Ошбика удаления ссылки')
        })
    }

    const createUrl = (url) => {
        apiRequests.createUrl(url).then(() => {
            successNotification('Ссылка создана')
            fetchUrls()
        }).catch(() => {
            errorNotification('Ошбика cоздания короткой ссылки')
        })
    }

    useEffect(() => {
        fetchUrls()
    }, [])

    return (
        <>
            <h3>Сокращение ссылок</h3>
            <Input createUrl={createUrl}/>
            {
                listUrls
                    ? listUrls.next || listUrls.previous
                        ?   <>
                            <ListUrls
                                urls={listUrls.results}
                                deleteUrl={deleteUrl}
                            />
                            <Pagination
                                nextPage={listUrls.next}
                                prevPage={listUrls.previous}
                                fetchUrls={fetchUrls}
                            />
                        </>
                        : <ListUrls
                            urls={listUrls.results}
                            deleteUrl={deleteUrl}
                        />
                    : null
            }
            <Modal/>
        </>
    )
}