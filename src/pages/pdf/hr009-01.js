import React, {Component} from 'react';

class PdfLicenciaxPaternidad extends Component {
  render() {
      return(
    <div style={{position: 'absolute', height:'700px', width:'100%'}}>
        <div className="container-fluid">
            <object
                data={require('../../docs/HR009-01.pdf')}
                type="application/pdf"
                width="100%"
                height="700px"
                >
            </object>
        </div>
    </div>
  );
}
}

export default PdfLicenciaxPaternidad;
