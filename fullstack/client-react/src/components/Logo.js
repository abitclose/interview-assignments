import React from 'react';
import { ReactSVG } from 'react-svg'
import "../assets/logo.svg"

class Logo extends React.Component {

    render() {
        const { collapsed } = this.props;
        const sitename = process.env.REACT_APP_SITENAME || 'DEFAULT SITE'
        let body;


        if(collapsed){
            body = (
                <div className="image">
                    <ReactSVG src="../assets/logo.svg" afterInjection={(error, svg) => {
                        if (error) {
                            console.error(error)
                            return
                        }
                    }} />
                </div>
            )
        }
        else{
            body = (
                <h3>{sitename}</h3>
            )
        }

        return (
            <div className="logo">
                {body}
            </div>
        )
    }
}

export default Logo