import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['folk-body'],

    numberOfElementsToShow: 0,
    
    hideHead: Ember.computed.lte('numberOfElementsToShow', 0),
    hideNeck: Ember.computed.lte('numberOfElementsToShow', 1),
    hideCorpus: Ember.computed.lte('numberOfElementsToShow', 2),
    hideRightArm: Ember.computed.lte('numberOfElementsToShow', 3),
    hideLeftArm: Ember.computed.lte('numberOfElementsToShow', 4),
    hideRightHand: Ember.computed.lte('numberOfElementsToShow', 5),
    hideLeftHand: Ember.computed.lte('numberOfElementsToShow', 6),
    hideRightLeg: Ember.computed.lte('numberOfElementsToShow', 7),
    hideLeftLeg: Ember.computed.lte('numberOfElementsToShow', 8),
    hideRightFoot: Ember.computed.lte('numberOfElementsToShow', 9),
    hideLeftFoot: Ember.computed.lte('numberOfElementsToShow', 10),
});
