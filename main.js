$(function () {

  const displayEmoji = () => {
    const textEmoji = store.getState().emoji;
    $('#emoji-display').text(textEmoji);
    const backgroundColor = store.getState().color;
    $('#emoji-display').css("background-color", backgroundColor);
  }

  $('#mf-btn').on('click', function () {
    store.dispatch({ type: "MIDDLE_FINGER" });
  });
  $('#b-btn').on('click', function () {
    store.dispatch({ type: "BEAR" });
  })
  $('#c-btn').on('click', function () {
    store.dispatch({ type: "CRY" });
  })
  $('#e-btn').on('click', function () {
    store.dispatch({ type: "EXCITED" });
  })

  store.subscribe(displayEmoji);
  displayEmoji();
})