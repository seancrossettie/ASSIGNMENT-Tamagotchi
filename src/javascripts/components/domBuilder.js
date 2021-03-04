const domBuilder = () => {
  document.querySelector('#eat').innerHTML = `<h4>Eat</h4>
                                              <h6 id='fullScore' class="mt-4"></h6>
                                              <div class="d-grid gap-2 d-md-block mt-4">
                                                <button id="healthy-food" class="btn btn-primary" type="button">Healthy Food</button>
                                                <button id="unhealthy-food" class="btn btn-primary" type="button">Unhealthy Food</button>
                                              </div>`;
  document.querySelector('#play').innerHTML = `<h4>Eat</h4>
                                               <h6 id='funScore' class="mt-4"></h6>
                                               <div class="d-grid gap-2 d-md-block mt-4">
                                                  <button id="fun-activity" class="btn btn-primary" type="button">Fun Activity</button>
                                                  <button id="super-fun-activity" class="btn btn-primary" type="button">Super Fun Activity</button>
                                               </div>`;
  document.querySelector('#fight').innerHTML = `<h4>Fight</h4>
                                                <h6 id='fightScore' class="mt-4"></h6>
                                                <div class="d-grid gap-2 d-md-block mt-4">
                                                  <button id="run-away" class="btn btn-primary" type="button">Run Away</button>
                                                  <button id="commit-violence" class="btn btn-primary" type="button">Commit Violence</button>
                                                </div>`;
};

export default domBuilder;
