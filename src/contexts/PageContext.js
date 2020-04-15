import React, { createContext, Component } from 'react'

const PageContext = createContext()

class PageProvider extends Component {
  state = {
    page: 0,
  }

  setPage = (page) => {
    this.setState((prevState) => ({ page }))
  }

  render() {
    const { children } = this.props
    const { page } = this.state
    const { setPage } = this

    return (
      <PageContext.Provider value={{ page, setPage }}>
        {children}
      </PageContext.Provider>
    )
  }
}

export { PageContext, PageProvider }
