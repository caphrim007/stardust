import React from 'react'

import { Confirm } from 'stardust'
import * as common from '../commonTests'

describe('Confirm', () => {
  common.isConformant(Confirm)

  it('default prop abortLabel should be "Cancel"', () => {
    shallow(<Confirm />)
      .should.have.prop('abortLabel', 'Cancel')
  })
  it('default prop confirmLabel should be "Yes"', () => {
    Confirm.defaultProps.confirmLabel
      .should.equal('Yes')
  })
  it('should return true on confirm', () => {
    const confirm = mount(<Confirm />)
    confirm
      .instance()
      .show()
      .then(isConfirmed => isConfirmed.should.equal(true))
    confirm
      .findWhere(c => c.text() === 'Yes')
      .simulate('click')
  })
  it('should return false on abort', () => {
    const confirm = mount(<Confirm />)
    confirm
      .instance()
      .show()
      .then(isConfirmed => isConfirmed.should.equal(false))
    confirm
      .findWhere(c => c.text() === 'Cancel')
      .simulate('click')
  })
})
