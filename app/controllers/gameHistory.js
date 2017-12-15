/* eslint-disable */
import gameHistory from '../models/gameHistory';

/*
+ * Create New Game Record
+ */
export const createGame = (request, response) => {
    const games = new gameHistory();
    games.gameID = request.params.id;
    games.creator = request.body.creator;
    games.players = request.body.players;
    games.rounds = request.body.rounds;
    games.winner = request.body.winner;
    games.save((error, game) => {
      if (error) {
        response.status(400)
          .json(error);
      }
      response.status(201)
        .json(game);
    });
};

/*
+ * Update Game Record
+ */
export const updateGame = (request, response) => {
  const gameCreator = request.body.creator;
  const gameId = request.params.id;
  const query = {
    $and: [
      { gameID: gameId }, { creator: gameCreator }
    ]
  }
  gameHistory.findOne(query, (error, history) => {
    if (error) {
      return response.status(500)
        .json({ message: 'An error occured while updating this data' });
    }
    if (!history) {
      return response.status(404)
        .json({ message: 'data not found' });
    }

    history.winner = request.body.winner;
    history.ended = request.body.ended;
    history.rounds = request.body.rounds;
    history.save((error, history) => {
      if (error) {
        return response.status(500)
          .json({ message: 'An error occured while updating this data' });
      }
      return response.status(200)
        .json({ message: 'Game updated sucessfully', history });
    });
  });
};

/*
 * Find Game Records by id
 */
export const getGame = (request, response) => {
  gameHistory.findOne({
    gameID: request.params.id
  }, (error, savedGame) => {
    if (error) {
      response.send(error);
    }
    if (!savedGame) {
      response.status(400)
        .json({
          success: false,
          message: 'Game Record Not Found!!'
        });
    } else {
      response.status(200)
        .json(savedGame);
    }
  });
};

/*
 * Find Game Records by id
 */
export const getAllGames = (request, response) => {
  gameHistory.find({}, (error, savedGames) => {
    if (error) {
      response.status(404)
        .json(error);
    }
    if (!savedGames) {
      response.status(400)
        .json({
          success: false,
          message: 'No Game Record Available!!'
        });
    } else {
      response.status(200)
        .json(savedGames);
    }
  });
};
