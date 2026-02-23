// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, changeTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    changeTab(tabId)
  }

  const activeClass = isActive ? 'active-tab' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
