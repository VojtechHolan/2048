/**
 * Decide which color will be used for box based on box value
 * @param value - number value
 */
export const getBoxColor = (value: number | null): string => {
  switch (value) {
    case null:
      return '#cdc1b4'
    case 0:
      return '#cdc1b4'
    case 2:
      return '#755C48'
    case 4:
      return '#B8B799'
    case 8:
      return '#A5A5A5'
    case 16:
      return '#BEBD7F'
    case 32:
      return '#3D642D'
    case 64:
      return '#F4A900'
    case 128:
      return '#AEA04B'
    case 256:
      return '#F4A900'
    case 512:
      return '#0E294B'
    case 1024:
      return '#89AC76'
    case 2048:
      return '#C51D34'
    default:
      throw Error(`Unknown number ${value}`)
  }
}
