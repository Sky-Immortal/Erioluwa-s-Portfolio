import { Component } from 'react'

class Experience extends Component {
  render() {
    const { exp } = this.props;
    console.log(exp)

    return (
        exp.map((exp) =>
            <div className='my-5'  key={exp.position + exp.company}>
                <h5 >{exp.position}, {exp.company}</h5>
                <span className='color-primary'>{exp.start} - {exp.end}</span>
                <p>{exp.description}</p>
                {/* Verificar si activity no está vacío */}
                {Array.isArray(exp.activity) && exp.activity.length > 0 && (
                    <ul className="list__icon-check " >
                        {exp.activity.map((act, index) =>
                            <li className="my-2" style={{fontSize:"0.9em"}} key={`${exp.position}-${exp.company}-${exp.start}-${index}`}>{act.description}</li>
                        )}
                    </ul>
                )}
            </div>
        )
    );
    
    
  }
}

export default Experience