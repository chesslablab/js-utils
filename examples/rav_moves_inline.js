import { Chessboard } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/Chessboard.js";
import { Markers } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/extensions/markers/Markers.js";
import { FORMAT_INLINE, BoardActionsDropdown, HistoryButtons, OpeningTable, RavMovesFactory } from '../src/index.js';

// -----------------------------------------------------------------------------
// Initialization
// -----------------------------------------------------------------------------

const props = {
  "filtered": "{Adapted notes, originally by J. R. Capablanca.} 1.d4 d5 2.Nf3 e6 3.c4 Nf6 4.Bg5 Be7 5.e3 Nbd7 6.Nc3 O-O 7.Rc1 b6 8.cxd5 exd5 9.Bb5 {is a new move which has no merit outside of its novelty. I played it for the first time against Teichmann in Berlin in 1913.} (9.Bd3 {is the normal move but Qa4 may be the best, after all.}) 9...Bb7 10.Qa4 a6 (10...c5 {is the proper continuation.}) 11.Bxd7 Nxd7 12.Bxe7 Qxe7 13.Qb3 {with the idea of preventing c5, but still better would have been to castle.} Qd6 (13...c5 {could be played as well. Black would come out all right from the many complications arising from this move.}) 14.O-O Rfd8 15.Rfd1 Rab8 16.Ne1 {in order to draw the knight away from the line of the bishop, which would soon be open, as it actually occurred in the game.} Nf6 17.Rc2 c5 18.dxc5 bxc5 19.Ne2 Ne4 (19...Ng4 {begins a failed attack.}) (19...d4 {begins a failed attack.}) 20.Qa3 Rbc8 21.Ng3 Nxg3 22.hxg3 Qb6 23.Rcd2 (23.Rdc1 {would not have been better because of d4, etc.} d4) 23...h6 24.Nf3 d4 25.exd4 Bxf3 26.Qxf3 Rxd4 27.Rc2 Rxd1+ 28.Qxd1 Rd8 29.Qe2 Qd6 30.Kh2 Qd5 31.b3 Qf5 32.g4 Qg5 33.g3 Rd6 {is unquestionably the best move; with any other move Black would, perhaps, have found it impossible to draw.} 34.Kg2 g6 35.Qc4 Re6 36.Qxc5 Qxg4 37.f3 Qg5 38.Qxg5 hxg5 39.Kf2 Rd6 40.Ke3 Re6+ 41.Kd4 Rd6+ (42.Kc5 {is too risky. The way to win was not at all clear and I even thought that with that move Black might win.}) 42.Ke3 Re6+ 43.Kf2 Rd6 44.g4 Rd1 (45.Ke3 {is the right move to make. It is perhaps the only chance White has to win, or at least come near it.} Ra1 46.Kd4 {gains an important move.} Kg7 47.b4 Rf1 {accomplishes nothing with the white king on d4.}) 45.Ke2 {was played instead.} Ra1 46.Kd3 Kg7 47.b4 Rf1 {was the best move with the white king on d3.} 48.Ke3 {and the remainder of the game needs no comments.} Rb1 49.Rc6 Rxb4 50.Rxa6 Rb2",
   "breakdown": [
     "{Adapted notes, originally by J. R. Capablanca.} 1.d4 d5 2.Nf3 e6 3.c4 Nf6 4.Bg5 Be7 5.e3 Nbd7 6.Nc3 O-O 7.Rc1 b6 8.cxd5 exd5 9.Bb5 {is a new move which has no merit outside of its novelty. I played it for the first time against Teichmann in Berlin in 1913.}",
     "9.Bd3 {is the normal move but Qa4 may be the best, after all.}",
     "9...Bb7 10.Qa4 a6",
     "10...c5 {is the proper continuation.}",
     "11.Bxd7 Nxd7 12.Bxe7 Qxe7 13.Qb3 {with the idea of preventing c5, but still better would have been to castle.} Qd6",
     "13...c5 {could be played as well. Black would come out all right from the many complications arising from this move.}",
     "14.O-O Rfd8 15.Rfd1 Rab8 16.Ne1 {in order to draw the knight away from the line of the bishop, which would soon be open, as it actually occurred in the game.} Nf6 17.Rc2 c5 18.dxc5 bxc5 19.Ne2 Ne4",
     "19...Ng4 {begins a failed attack.}",
     "19...d4 {begins a failed attack.}",
     "20.Qa3 Rbc8 21.Ng3 Nxg3 22.hxg3 Qb6 23.Rcd2",
     "23.Rdc1 {would not have been better because of d4, etc.} d4",
     "23...h6 24.Nf3 d4 25.exd4 Bxf3 26.Qxf3 Rxd4 27.Rc2 Rxd1+ 28.Qxd1 Rd8 29.Qe2 Qd6 30.Kh2 Qd5 31.b3 Qf5 32.g4 Qg5 33.g3 Rd6 {is unquestionably the best move; with any other move Black would, perhaps, have found it impossible to draw.} 34.Kg2 g6 35.Qc4 Re6 36.Qxc5 Qxg4 37.f3 Qg5 38.Qxg5 hxg5 39.Kf2 Rd6 40.Ke3 Re6+ 41.Kd4 Rd6+",
     "42.Kc5 {is too risky. The way to win was not at all clear and I even thought that with that move Black might win.}",
     "42.Ke3 Re6+ 43.Kf2 Rd6 44.g4 Rd1",
     "45.Ke3 {is the right move to make. It is perhaps the only chance White has to win, or at least come near it.} Ra1 46.Kd4 {gains an important move.} Kg7 47.b4 Rf1 {accomplishes nothing with the white king on d4.}",
     "45.Ke2 {was played instead.} Ra1 46.Kd3 Kg7 47.b4 Rf1 {was the best move with the white king on d3.} 48.Ke3 {and the remainder of the game needs no comments.} Rb1 49.Rc6 Rxb4 50.Rxa6 Rb2"
   ],
   "fen": [
     "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
     "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3",
     "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6",
     "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq -",
     "rnbqkbnr/ppp2ppp/4p3/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -",
     "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq c3",
     "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -",
     "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R b KQkq -",
     "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R w KQkq -",
     "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/4PN2/PP3PPP/RN1QKB1R b KQkq -",
     "r1bqk2r/pppnbppp/4pn2/3p2B1/2PP4/4PN2/PP3PPP/RN1QKB1R w KQkq -",
     "r1bqk2r/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQkq -",
     "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ -",
     "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R b K -",
     "r1bq1rk1/p1pnbppp/1p2pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R w K -",
     "r1bq1rk1/p1pnbppp/1p2pn2/3P2B1/3P4/2N1PN2/PP3PPP/2RQKB1R b K -",
     "r1bq1rk1/p1pnbppp/1p3n2/3p2B1/3P4/2N1PN2/PP3PPP/2RQKB1R w K -",
     "r1bq1rk1/p1pnbppp/1p3n2/1B1p2B1/3P4/2N1PN2/PP3PPP/2RQK2R b K -",
     "r1bq1rk1/p1pnbppp/1p3n2/3p2B1/3P4/2NBPN2/PP3PPP/2RQK2R b KQ -",
     "r2q1rk1/pbpnbppp/1p3n2/1B1p2B1/3P4/2N1PN2/PP3PPP/2RQK2R w K -",
     "r2q1rk1/pbpnbppp/1p3n2/1B1p2B1/Q2P4/2N1PN2/PP3PPP/2R1K2R b K -",
     "r2q1rk1/1bpnbppp/pp3n2/1B1p2B1/Q2P4/2N1PN2/PP3PPP/2R1K2R w K -",
     "r2q1rk1/pb1nbppp/1p3n2/1Bpp2B1/Q2P4/2N1PN2/PP3PPP/2R1K2R w K c6",
     "r2q1rk1/1bpBbppp/pp3n2/3p2B1/Q2P4/2N1PN2/PP3PPP/2R1K2R b K -",
     "r2q1rk1/1bpnbppp/pp6/3p2B1/Q2P4/2N1PN2/PP3PPP/2R1K2R w K -",
     "r2q1rk1/1bpnBppp/pp6/3p4/Q2P4/2N1PN2/PP3PPP/2R1K2R b K -",
     "r4rk1/1bpnqppp/pp6/3p4/Q2P4/2N1PN2/PP3PPP/2R1K2R w K -",
     "r4rk1/1bpnqppp/pp6/3p4/3P4/1QN1PN2/PP3PPP/2R1K2R b K -",
     "r4rk1/1bpn1ppp/pp1q4/3p4/3P4/1QN1PN2/PP3PPP/2R1K2R w K -",
     "r4rk1/1b1nqppp/pp6/2pp4/3P4/1QN1PN2/PP3PPP/2R1K2R w K c6",
     "r4rk1/1bpn1ppp/pp1q4/3p4/3P4/1QN1PN2/PP3PPP/2R2RK1 b - -",
     "r2r2k1/1bpn1ppp/pp1q4/3p4/3P4/1QN1PN2/PP3PPP/2R2RK1 w - -",
     "r2r2k1/1bpn1ppp/pp1q4/3p4/3P4/1QN1PN2/PP3PPP/2RR2K1 b - -",
     "1r1r2k1/1bpn1ppp/pp1q4/3p4/3P4/1QN1PN2/PP3PPP/2RR2K1 w - -",
     "1r1r2k1/1bpn1ppp/pp1q4/3p4/3P4/1QN1P3/PP3PPP/2RRN1K1 b - -",
     "1r1r2k1/1bp2ppp/pp1q1n2/3p4/3P4/1QN1P3/PP3PPP/2RRN1K1 w - -",
     "1r1r2k1/1bp2ppp/pp1q1n2/3p4/3P4/1QN1P3/PPR2PPP/3RN1K1 b - -",
     "1r1r2k1/1b3ppp/pp1q1n2/2pp4/3P4/1QN1P3/PPR2PPP/3RN1K1 w - c6",
     "1r1r2k1/1b3ppp/pp1q1n2/2Pp4/8/1QN1P3/PPR2PPP/3RN1K1 b - -",
     "1r1r2k1/1b3ppp/p2q1n2/2pp4/8/1QN1P3/PPR2PPP/3RN1K1 w - -",
     "1r1r2k1/1b3ppp/p2q1n2/2pp4/8/1Q2P3/PPR1NPPP/3RN1K1 b - -",
     "1r1r2k1/1b3ppp/p2q4/2pp4/4n3/1Q2P3/PPR1NPPP/3RN1K1 w - -",
     "1r1r2k1/1b3ppp/p2q4/2pp4/6n1/1Q2P3/PPR1NPPP/3RN1K1 w - -",
     "1r1r2k1/1b3ppp/p2q1n2/2p5/3p4/1Q2P3/PPR1NPPP/3RN1K1 w - -",
     "1r1r2k1/1b3ppp/p2q4/2pp4/4n3/Q3P3/PPR1NPPP/3RN1K1 b - -",
     "2rr2k1/1b3ppp/p2q4/2pp4/4n3/Q3P3/PPR1NPPP/3RN1K1 w - -",
     "2rr2k1/1b3ppp/p2q4/2pp4/4n3/Q3P1N1/PPR2PPP/3RN1K1 b - -",
     "2rr2k1/1b3ppp/p2q4/2pp4/8/Q3P1n1/PPR2PPP/3RN1K1 w - -",
     "2rr2k1/1b3ppp/p2q4/2pp4/8/Q3P1P1/PPR2PP1/3RN1K1 b - -",
     "2rr2k1/1b3ppp/pq6/2pp4/8/Q3P1P1/PPR2PP1/3RN1K1 w - -",
     "2rr2k1/1b3ppp/pq6/2pp4/8/Q3P1P1/PP1R1PP1/3RN1K1 b - -",
     "2rr2k1/1b3ppp/pq6/2pp4/8/Q3P1P1/PPR2PP1/2R1N1K1 b - -",
     "2rr2k1/1b3ppp/pq6/2p5/3p4/Q3P1P1/PPR2PP1/2R1N1K1 w - -",
     "2rr2k1/1b3pp1/pq5p/2pp4/8/Q3P1P1/PP1R1PP1/3RN1K1 w - -",
     "2rr2k1/1b3pp1/pq5p/2pp4/8/Q3PNP1/PP1R1PP1/3R2K1 b - -",
     "2rr2k1/1b3pp1/pq5p/2p5/3p4/Q3PNP1/PP1R1PP1/3R2K1 w - -",
     "2rr2k1/1b3pp1/pq5p/2p5/3P4/Q4NP1/PP1R1PP1/3R2K1 b - -",
     "2rr2k1/5pp1/pq5p/2p5/3P4/Q4bP1/PP1R1PP1/3R2K1 w - -",
     "2rr2k1/5pp1/pq5p/2p5/3P4/5QP1/PP1R1PP1/3R2K1 b - -",
     "2r3k1/5pp1/pq5p/2p5/3r4/5QP1/PP1R1PP1/3R2K1 w - -",
     "2r3k1/5pp1/pq5p/2p5/3r4/5QP1/PPR2PP1/3R2K1 b - -",
     "2r3k1/5pp1/pq5p/2p5/8/5QP1/PPR2PP1/3r2K1 w - -",
     "2r3k1/5pp1/pq5p/2p5/8/6P1/PPR2PP1/3Q2K1 b - -",
     "3r2k1/5pp1/pq5p/2p5/8/6P1/PPR2PP1/3Q2K1 w - -",
     "3r2k1/5pp1/pq5p/2p5/8/6P1/PPR1QPP1/6K1 b - -",
     "3r2k1/5pp1/p2q3p/2p5/8/6P1/PPR1QPP1/6K1 w - -",
     "3r2k1/5pp1/p2q3p/2p5/8/6P1/PPR1QPPK/8 b - -",
     "3r2k1/5pp1/p6p/2pq4/8/6P1/PPR1QPPK/8 w - -",
     "3r2k1/5pp1/p6p/2pq4/8/1P4P1/P1R1QPPK/8 b - -",
     "3r2k1/5pp1/p6p/2p2q2/8/1P4P1/P1R1QPPK/8 w - -",
     "3r2k1/5pp1/p6p/2p2q2/6P1/1P6/P1R1QPPK/8 b - -",
     "3r2k1/5pp1/p6p/2p3q1/6P1/1P6/P1R1QPPK/8 w - -",
     "3r2k1/5pp1/p6p/2p3q1/6P1/1P4P1/P1R1QP1K/8 b - -",
     "6k1/5pp1/p2r3p/2p3q1/6P1/1P4P1/P1R1QP1K/8 w - -",
     "6k1/5pp1/p2r3p/2p3q1/6P1/1P4P1/P1R1QPK1/8 b - -",
     "6k1/5p2/p2r2pp/2p3q1/6P1/1P4P1/P1R1QPK1/8 w - -",
     "6k1/5p2/p2r2pp/2p3q1/2Q3P1/1P4P1/P1R2PK1/8 b - -",
     "6k1/5p2/p3r1pp/2p3q1/2Q3P1/1P4P1/P1R2PK1/8 w - -",
     "6k1/5p2/p3r1pp/2Q3q1/6P1/1P4P1/P1R2PK1/8 b - -",
     "6k1/5p2/p3r1pp/2Q5/6q1/1P4P1/P1R2PK1/8 w - -",
     "6k1/5p2/p3r1pp/2Q5/6q1/1P3PP1/P1R3K1/8 b - -",
     "6k1/5p2/p3r1pp/2Q3q1/8/1P3PP1/P1R3K1/8 w - -",
     "6k1/5p2/p3r1pp/6Q1/8/1P3PP1/P1R3K1/8 b - -",
     "6k1/5p2/p3r1p1/6p1/8/1P3PP1/P1R3K1/8 w - -",
     "6k1/5p2/p3r1p1/6p1/8/1P3PP1/P1R2K2/8 b - -",
     "6k1/5p2/p2r2p1/6p1/8/1P3PP1/P1R2K2/8 w - -",
     "6k1/5p2/p2r2p1/6p1/8/1P2KPP1/P1R5/8 b - -",
     "6k1/5p2/p3r1p1/6p1/8/1P2KPP1/P1R5/8 w - -",
     "6k1/5p2/p3r1p1/6p1/3K4/1P3PP1/P1R5/8 b - -",
     "6k1/5p2/p2r2p1/6p1/3K4/1P3PP1/P1R5/8 w - -",
     "6k1/5p2/p2r2p1/2K3p1/8/1P3PP1/P1R5/8 b - -",
     "6k1/5p2/p2r2p1/6p1/8/1P2KPP1/P1R5/8 b - -",
     "6k1/5p2/p3r1p1/6p1/8/1P2KPP1/P1R5/8 w - -",
     "6k1/5p2/p3r1p1/6p1/8/1P3PP1/P1R2K2/8 b - -",
     "6k1/5p2/p2r2p1/6p1/8/1P3PP1/P1R2K2/8 w - -",
     "6k1/5p2/p2r2p1/6p1/6P1/1P3P2/P1R2K2/8 b - -",
     "6k1/5p2/p5p1/6p1/6P1/1P3P2/P1R2K2/3r4 w - -",
     "6k1/5p2/p5p1/6p1/6P1/1P2KP2/P1R5/3r4 b - -",
     "6k1/5p2/p5p1/6p1/6P1/1P2KP2/P1R5/r7 w - -",
     "6k1/5p2/p5p1/6p1/3K2P1/1P3P2/P1R5/r7 b - -",
     "8/5pk1/p5p1/6p1/3K2P1/1P3P2/P1R5/r7 w - -",
     "8/5pk1/p5p1/6p1/1P1K2P1/5P2/P1R5/r7 b - -",
     "8/5pk1/p5p1/6p1/1P1K2P1/5P2/P1R5/5r2 w - -",
     "6k1/5p2/p5p1/6p1/6P1/1P3P2/P1R1K3/3r4 b - -",
     "6k1/5p2/p5p1/6p1/6P1/1P3P2/P1R1K3/r7 w - -",
     "6k1/5p2/p5p1/6p1/6P1/1P1K1P2/P1R5/r7 b - -",
     "8/5pk1/p5p1/6p1/6P1/1P1K1P2/P1R5/r7 w - -",
     "8/5pk1/p5p1/6p1/1P4P1/3K1P2/P1R5/r7 b - -",
     "8/5pk1/p5p1/6p1/1P4P1/3K1P2/P1R5/5r2 w - -",
     "8/5pk1/p5p1/6p1/1P4P1/4KP2/P1R5/5r2 b - -",
     "8/5pk1/p5p1/6p1/1P4P1/4KP2/P1R5/1r6 w - -",
     "8/5pk1/p1R3p1/6p1/1P4P1/4KP2/P7/1r6 b - -",
     "8/5pk1/p1R3p1/6p1/1r4P1/4KP2/P7/8 w - -",
     "8/5pk1/R5p1/6p1/1r4P1/4KP2/P7/8 b - -",
     "8/5pk1/R5p1/6p1/6P1/4KP2/Pr6/8 w - -"
   ]
};

const chessboard = new Chessboard(
  document.getElementById('chessboard'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: props.fen[props.fen.length - 1],
    style: {pieces: {file: "pieces/staunty.svg"}},
    extensions: [{class: Markers}]
  }
);

const ravMovesBrowser = RavMovesFactory.create(
  FORMAT_INLINE,
  document.querySelector('#movesBrowser'),
  {
    ...props,
    chessboard: chessboard
  }
);

const historyButtons = new HistoryButtons(
  document.querySelector('#historyButtons'),
  {
    movesBrowser: ravMovesBrowser
  }
);

const boardActionsDropdown = new BoardActionsDropdown(
  document.querySelector('#boardActionsDropdown ul'),
  {
    movesBrowser: ravMovesBrowser
  }
);

ravMovesBrowser.mount();
