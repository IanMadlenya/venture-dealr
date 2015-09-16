var React = require('react');
var Reflux = require('reflux');

var actions = require('actions/actionsEnum');
var storyScenarios = require('models/storyScenarios');

var ScrollSpyContentsMixin = require('views/scrollSpy/ScrollSpyContentsMixin');

var SCROLLSPY_PROPS = {
  id: 'scenario-start-a-venture',
  name: 'Start a Venture'
}

module.exports = React.createClass({
  mixins: [
    ScrollSpyContentsMixin,
    //Reflux.listenTo(actions.scrollSpy.targetTriggered, '_onTargetTriggered')
  ],

  onScrollSpyFocus: function(target) {
    actions.chart.selectMeasure('percentages');
    actions.round.setScenario(storyScenarios.rounds.founding);
    actions.chart.selectRound(null);
  },

  getInitialState() {
    return {
      scrollSpy: SCROLLSPY_PROPS
    };
  },

  render() {
    return (
      <div id={SCROLLSPY_PROPS.id}>
        <h1 className={this.state.scrollSpy.isFocused ? 'focus' : ''}>Lets start a venture!</h1>
        <p>
          You have an idea and a co-founder.  Lets go start our venture!
        </p>
        <p>
          You and your co-founder agree to a 60-40 equity split, then go start building the prototype that will woo
          investors onboard.
        </p>
      </div>
    );
  }
});