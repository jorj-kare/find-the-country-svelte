<div class="wrapper">
  <div class="titles">
    <h1>Congratulations <span>!!!</span></h1>
    <h3>You have found all the countries!</h3>
  </div>
</div>

<style>
  .wrapper {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(10, 9, 9);
  }
  .titles {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: fit-content;
    padding: 8rem;
    border: 15px dotted rgba(var(--color-primary), 0.9);
    border-radius: 25px;
    background: linear-gradient(
      90deg,
      #00dbde,
      #fc00ff,
      #ff8787,
      #8758ff,
      #5da7db,
      #00dbde,
      #fc00ff
    );
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: textAnimation 6s linear infinite;
    -moz-animation: textAnimation 6s linear infinite;
    -webkit-animation: textAnimation 6s linear infinite;
  }
  span {
    font-size: 10rem;
    text-shadow: none;
  }
  h1 {
    font-size: 8rem;
    font-weight: 900;
    margin-bottom: 2rem;
    text-shadow: -2px -3px 1px rgba(var(--color-primary), 7);
  }

  h3 {
    text-align: center;
    color: rgba(var(--color-primary), 7);
  }

  @keyframes textAnimation {
    0% {
      background-position: 0px, 50%;
    }
    50% {
      background-position: 100%, 50%;
    }
    /* 100% {
      background-position: 0%, 50%;
    } */
  }
</style>
