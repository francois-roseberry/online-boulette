const expect = require('chai').expect;
const TestUtils = require('./test-utils');

describe('Full game', () => {
  const PLAYER1 = 'bob';
  const PLAYER2 = 'alice';
  const PLAYER3 = 'george';

  describe('when players connect with their names', () => {
    let players;

    beforeEach((done) => {
      TestUtils.connectPlayers([PLAYER1, PLAYER2, PLAYER3], (connectedPlayers) => {
        players = connectedPlayers;
        done();
      });
    });

    it('players have their names accepted', () => {
      expect(players[0].nameResponse).to.eql(true);
      expect(players[1].nameResponse).to.eql(true);
      expect(players[2].nameResponse).to.eql(true);
    });
  });
});
