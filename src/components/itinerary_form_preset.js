import React from 'react';
import DayForm from './day_form';
import LocationForm from './location_form';
import ActivityForm from './activity_form';

export default function ItineraryFormPreset(){

  return (
    <div className="col-lg-4">
      <div className="panel panel-default">
        <form>
          <div className="panel-heading">
            <h3><strong>Day 1</strong></h3>
          </div>
          <div className="panel-body">
            <label>Location</label><input type="text" /><br/>
              <label>Activity</label><input type="text" /><br/>
              <label>Activity</label><input type="text" /><br/>
              <label>Activity</label><input type="text" /><br/>
            <label>Location</label><input type="text" /><br/>
              <label>Activity</label><input type="text" /><br/>
              <label>Activity</label><input type="text" /><br/>
              <label>Activity</label><input type="text" /><br/>
          </div>
          <input type="submit" value="Create Itinerary" />
        </form>
      </div>
    </div>
  )

}
