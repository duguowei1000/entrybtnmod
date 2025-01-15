import Chobitsu from 'chobitsu/Chobitsu'
import * as Network from 'chobitsu/domains/Network.js'
import * as Overlay from 'chobitsu/domains/Overlay.js'
import * as DOM from 'chobitsu/domains/DOM.js'
import * as Storage from 'chobitsu/domains/Storage.js'

const chobitsu = new Chobitsu()
chobitsu.register('Network', Network)
chobitsu.register('Overlay', Overlay)
chobitsu.register('DOM', {
  ...DOM,
  getNodeId: DOM.getDOMNodeId,
  getNode: DOM.getDOMNode,
})
chobitsu.register('Storage', Storage)

export default chobitsu
