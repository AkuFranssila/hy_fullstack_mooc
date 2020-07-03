import { Route, IndexRoute } from 'react-router'

import Index from './index'
import Anecdotes from './anecdotes.js'

export default (
    <Route path="/" component={Index}>
      <IndexRoute component={Anecdotes} />
    </Route>
  )

//<Route path="/some/where" component={SomePage} />
//<Route path="/some/otherpage" component={SomeOtherPage} />