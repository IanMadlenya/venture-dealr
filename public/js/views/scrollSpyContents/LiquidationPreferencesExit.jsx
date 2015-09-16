var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');

var storyScenarios = require('models/storyScenarios');

var ScrollSpyContentsMixin = require('views/scrollSpy/ScrollSpyContentsMixin');

var SCROLLSPY_PROPS = {
  id: 'scenario-liquidation-preferences-exit',
  name: 'Liquidation Preferences and Exits'
}

module.exports = React.createClass({
  mixins: [ScrollSpyContentsMixin],

  getInitialState() {
    return {
      scrollSpy: SCROLLSPY_PROPS
    };
  },

  componentDidMount: function() {
    this._origExitValuation = storyScenarios.rounds.exit.valuation;
  },

  onScrollSpyFocus: function(target) {
    actions.chart.selectMeasure('values');
    actions.exit.changeValuation(storyScenarios.rounds.exit, 33000000);
    actions.round.setScenario(storyScenarios.rounds.exit);
  },

  render() {
    return (
      <div id={SCROLLSPY_PROPS.id}>
        <h2 className={this.state.scrollSpy.isFocused ? 'focus' : ''}>Liquidation Preferences and the Empty-Handed Exit</h2>
        <p>
          Liquidation preferences reduce risk for later investors at the expense of earlier investors and
          common-stock holders.  Bringing new investors on-board often works with
          a <strong>"Last-In-First-Out"</strong> model -- if the exit does not produce enough money to reward everyone,
          the last investors in get their investment returned before anyone else gets anything.
        </p>
        <p>
          If you're near the back, your claim may even be <strong>underwater</strong> -- it may be worth less than you
          initially put in.
        </p>
        <p>
          If you're in the back of the line (such as founder and employee <strong>common stock</strong> versus the
          investors' <strong>preferred stock</strong>), you may even walk away with nothing if there's not
          enough to satisfy the claims in front of you.
        </p>
      </div>
    );
  }
});