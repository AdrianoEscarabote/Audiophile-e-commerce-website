import { render } from "@testing-library/react"
import GridImages from "./GridImages"
import getImages from "../../testUtils/Gallery"

describe("Grid Images Component", () => {

  it("should render correctly", () => {
    const gallery = getImages()

    render(
      <GridImages gallery={gallery} />
    )
  })

})