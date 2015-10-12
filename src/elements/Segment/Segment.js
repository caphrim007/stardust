import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Segment extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    heading: PropTypes.any,
  };

  render() {
    let heading = <h4 className='sd-segment-heading ui header'>{this.props.heading}</h4>;
    let classes = classNames(
      'sd-segment',
      'ui',
      this.props.className,
      'segment'
    );

    return (
      <div {...this.props} className={classes}>
        {this.props.heading && heading}
        {this.props.children}
      </div>
    );
  }
}