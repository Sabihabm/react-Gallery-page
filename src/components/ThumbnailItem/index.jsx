import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItemDetails, clickImageItem} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailItemDetails

  const imageClick = () => {
    clickImageItem(id)
  }

  return (
    <li className="ThubnailItems">
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          className="imgUrl"
          alt={thumbnailAltText}
          onClick={imageClick}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
