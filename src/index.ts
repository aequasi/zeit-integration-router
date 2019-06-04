import { htm } from '@zeit/integration-utils';
import app from './libs/router';
import { Home, Parameter, Include, Form, JumpToHome } from './views';

app.add('/', Home);
app.add('/parameter/:id', Parameter);
app.add('/include', Include);
app.add('/form', Form);
app.add('/jump-to-home', JumpToHome);

const uiHook = app.routerUiHook(async (handler) => {
  const {
    payload: {
      action,
    },
    router: { Routes, navigate }
  } = handler;

  if (action === 'home') {
    navigate('/');
  }
  if (action === 'parameter') {
    navigate('/parameter/4f96e758-8640-11e9-bc42-526af7764f64');
  }
  if (action === 'include') {
    navigate('/include');
  }
  if (action === 'form') {
    navigate('/form');
  }
  if (action === 'jump-to-home') {
    navigate('/jump-to-home');
  }
  if (action === 'fail') {
    navigate('/fail');
  }

  return htm`<Page>
    <Box display="grid" gridTemplateColumns="200px 1fr" gridGap="15px">
      <Box backgroundColor="white" borderRadius="5px" border="1px solid #ddd" padding="15px" display="grid" gridTemplateRows="repeat(6, 35px)">
        <Button action="home" small highlight>home</Button>
        <Button action="parameter" small highlight>parameter</Button>
        <Button action="include" small highlight>include</Button>
        <Button action="form" small highlight>form</Button>
        <Button action="jump-to-home" small highlight>jump-to-home</Button>
        <Button action="fail" small warning>fail</Button>
      </Box>
      <Box backgroundColor="white" borderRadius="5px" border="1px solid #ddd" padding="15px">
        ${await Routes()}
      </Box>
      <Box backgroundColor="white" gridColumn="1 / span 2" borderRadius="5px" border="1px solid #ddd" padding="15px">
        Your are here: <B>${app.currentRoute}</B>
      </Box>
    </Box>
  </Page>`;
});

export default uiHook;
