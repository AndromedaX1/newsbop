import { useNavigate } from 'react-router-dom';
import './PageLayout.css';

const PageLayout = ({ children, hideBottomNav = false }) => {
    const navigate = useNavigate();
  
    return (
      <div className="phone-container">
        <div className="top-bar">
          <img 
            src="/quizbop_logo_c.png" 
            alt="Quiz BOP Logo" 
            className="logo"
            onClick={() => navigate('/')}
          />
          <div className="right-icons">
            <i className="fas fa-question-circle icon"></i>
            <i className="fas fa-user icon"></i>
          </div>
        </div>
        
        {children}
  
        {!hideBottomNav && (
          <nav className="bottom-nav">
            <i className="fas fa-money-bill" onClick={() => navigate('/')}></i>
            <i className="fas fa-globe"></i>
            <i className="fas fa-bus"></i>
            <i className="fas fa-guitar"></i>
            <i className="fas fa-plus"></i>
          </nav>
        )}
      </div>
    );
  };

export default PageLayout;
