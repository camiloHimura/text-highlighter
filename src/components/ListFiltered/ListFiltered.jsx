import React from 'react';
import {connect} from 'react-redux';
import "./ListFiltered.css"


const mapStateToProps = state => {
    return {
            textList: state.textList
        }            
}

function ListFiltered(props){
    console.log(props)
    const {textList, selectFilter} = props;
    console.log(textList[selectFilter])
    const finalList = textList[selectFilter] || [];

    return  <div className="listFiltered">
                {finalList.map((info, key) => {
                            return <div key={`${key}-${info}${selectFilter}`}style={{"background": selectFilter}}>
                                        {info}
                                    </div>
                        })
                }
            </div>

}

export default connect(mapStateToProps)(ListFiltered);
