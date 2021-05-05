import React, { useEffect } from "react"
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { logout } from "actions/auth"
import { clearMessage } from "actions/message"
import { history } from "helpers/history"
import "shared/style/member.scss"
import SideList from "shared/components/SideList"
import {
  allPaths,
  coupons,
  home,
  logout as logoutName,
  orderOverview,
  profile,
} from "shared/constants/pathName"
import OrderOverview from "./OrderOverview"

const Member = () => {
  const { user: currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage())
    })
  }, [dispatch])

  if (!currentUser) {
    return <Redirect to="/login" />
  }

  const logOutOnClick = () => {
    dispatch(logout())
  }

  const sideListItems = [
    {
      title: orderOverview,
      url: allPaths[orderOverview],
    },
    {
      title: profile,
      url: allPaths[profile],
    },
    {
      title: "優惠券",
      url: allPaths[coupons],
    },
    {
      title: logoutName,
      url: allPaths[home],
      onClick: logOutOnClick,
      topStroke: true,
    },
  ]

  return (
    <BrowserRouter basename="/member" history={history}>
      <div className="member container pages">
        <SideList items={sideListItems} />

        {/* <p>您好, {currentUser.username}</p>
          <p>ID: {currentUser.id}</p>
          <p>名稱: {currentUser.username}</p>
          <p>郵件: {currentUser.email}</p>
          {currentUser.roles && <div>currentUser.roles</div>} */}

        <Switch>
          <Route exact path={"/order-overview"} component={OrderOverview} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Member
