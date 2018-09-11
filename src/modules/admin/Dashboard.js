import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { CounterCard } from './common/CounterCard';
import {
  faDatabase,
  faPen,
  faCogs,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import * as config from '../config';

const Dashboard = () => (
  <div className="container">
    <Helmet>
      <meta charSet="utf-8" />
    </Helmet>
    <FormattedMessage
      id="dashboard.title"
      defaultMessage="{title} - Dashboard"
      values={{ title: config.APP_TITLE }}
    >
      {title => (
        <Helmet>
          <title>{title}</title>
        </Helmet>
      )}
    </FormattedMessage>
    <div className="row" style={{ marginTop: '50px' }}>
      <div className="col-md-6 col-sm-6 col-xl-3">
        <CounterCard
          color="#02BC77"
          title="Ver listado de works"
          total="Ir al listado"
          icon={faDatabase}
          to={'/admincp/work/manage'}
        />
      </div>
      <div className="col-md-6 col-sm-6 col-xl-3">
        <CounterCard
          color="#28c3d7"
          title="Añadir work"
          total="Ir al formulario"
          icon={faTasks}
          to={'/admincp/work/add'}
        />
      </div>
      <div className="col-md-6 col-sm-6 col-xl-3">
        <CounterCard
          color="#d9534f"
          title="Añadir publicación"
          total="Ir al formulario"
          icon={faPen}
          to={'/admincp/blog/add_post'}
        />
      </div>
      <div className="col-md-6 col-sm-6 col-xl-3">
        <CounterCard
          color="#FFD950"
          title="Cambiar preferencias"
          total="Ir a la Configuración"
          icon={faCogs}
          to={'/admincp/preferences'}
        />
      </div>
    </div>
  </div>
);

function dashboardState(state) {
  return {
    user: state.user
  };
}

export default connect(
  dashboardState,
  {}
)(Dashboard);
