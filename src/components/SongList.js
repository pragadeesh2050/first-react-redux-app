import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "./../actions/index";

class SongList extends Component {
  render() {
    return (
      <div>
        SongList
        <ul className="list-group">
          {this.props.songs.map((x, i) => (
            <li
              key={i}
              className="list-group-item"
              onClick={() => this.props.selectSong(x)}
            >
              {x.title} --- {x.duration}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong })(SongList);
