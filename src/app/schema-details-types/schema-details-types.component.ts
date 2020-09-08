import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schema-details-types',
  templateUrl: './schema-details-types.component.html',
  styleUrls: ['./schema-details-types.component.scss']
})
export class SchemaDetailsTypesComponent implements OnInit {
  className: any;
  parsed_response: any;
  constructor( private route: ActivatedRoute,
  private service :InterceptorService) {
    // this.className = this.route.snapshot.params.class_name;
    // console.log(this.className)
  }

  ngOnInit(): void {
    this.showClassDetail();
  }
  showClassDetail(){
    // this.service.get_api_headersLD('ResourceServer').then((data)=>{

    // });
    let data = {"@context":{"rdfs":"http://www.w3.org/2000/01/rdf-schema#","iudx":"https://voc.iudx.org.in/","rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","owl":"http://www.w3.org/2002/07/owl#"},"@graph":[{"@id":"iudx:EnvAQM","@type":["owl:Class","rdfs:Class"],"rdfs:comment":"Air Quality Monitoring (AQM) Data Model.","rdfs:label":"EnvAQM","rdfs:isDefinedBy":{"@id":"iudx:"},"rdfs:subClassOf":{"@id":"iudx:Environment"}},{"@id":"iudx:uv","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed levels of UV radiation. Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"uv","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:no","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Nitrogen Monoxide (NO). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"no","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:arsenic","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Arsenic (As). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"arsenic","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:nh3","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Ammonia (NH3). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"nh3","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:relativeHumidity","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed instantaneous relative humidity (water vapour in air).","rdfs:label":"relativeHumidity","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvWeather"},{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:Number"},{"@id":"iudx:ValueDescriptor"}],"skos:exactMatch":{"@id":"Fiware:relativeHumidity"}},{"@id":"iudx:illuminance","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed instantaneous ambient light intensity.","rdfs:label":"illuminance","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvWeather"},{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:Number"},{"@id":"iudx:ValueDescriptor"}],"skos:exactMatch":{"@id":"Fiware:illuminance"}},{"@id":"iudx:precipitation","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed precipitation/rainfall level over a given duration.","rdfs:label":"precipitation","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvWeather"},{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:Number"},{"@id":"iudx:ValueDescriptor"}],"skos:exactMatch":{"@id":"Fiware:precipitation"}},{"@id":"iudx:airTemperature","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of air temperature. Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"airTemperature","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvWeather"},{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}],"skos:exactMatch":{"@id":"Fiware:temperature"}},{"@id":"iudx:pm10","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant  Particulate Matter 10 (PM10). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"pm10","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:aqiMajorPollutant","@type":["iudx:TextProperty"],"rdfs:comment":"Major pollutant in the Air Quality Index (AQI).","rdfs:label":"aqiMajorPollutant","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:Text"},{"@id":"iudx:ValueDescriptor"}]},{"@id":"iudx:benzene","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Benzene (C6H6). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"benzene","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:solarRadiation","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed solar radiation.","rdfs:label":"solarRadiation","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvWeather"},{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:Number"},{"@id":"iudx:ValueDescriptor"}],"skos:exactMatch":{"@id":"Fiware:solarRadiation"}},{"@id":"iudx:atmosphericPressure","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed air (atmospheric or barometric) pressure.","rdfs:label":"atmosphericPressure","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvWeather"},{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:Number"},{"@id":"iudx:ValueDescriptor"}],"skos:exactMatch":{"@id":"Fiware:atmosphericPressure"}},{"@id":"iudx:nickel","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Nickel (Ni). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"nickel","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:airQualityLevel","@type":["iudx:TextProperty"],"rdfs:comment":"Air Quality Category Indication. Qualitative level defined according to the local health agencies. For example, 'GOOD', 'MODERATE', 'POOR', 'UNHEALTHY', 'SEVERE', 'HAZARDOUS' etc.","rdfs:label":"airQualityLevel","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:Text"},{"@id":"iudx:ValueDescriptor"}],"skos:exactMatch":{"@id":"Fiware:airQualityLevel"}},{"@id":"iudx:ambientNoise","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of ambient noise levels. Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"ambientNoise","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:pb","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Lead (Pb). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"pb","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:so2","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Sulphur Dioxide (SO2). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"so2","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:o3","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Ozone (O3). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"o3","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:o2","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of Oxygen (O2). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"o2","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:deviceInfo","@type":["iudx:StructuredProperty"],"rdfs:comment":"Information about the device associated with the observations.","rdfs:label":"deviceInfo","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"},{"@id":"iudx:EnvFlood"},{"@id":"iudx:TransitManagement"},{"@id":"iudx:WiFiHostspot"},{"@id":"iudx:StreetLightFeeder"}],"iudx:rangeIncludes":[{"@id":"iudx:Device"}]},{"@id":"iudx:co","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Carbon Monoxide (CO). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"co","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:deviceStatus","@type":["iudx:TextProperty"],"rdfs:comment":"Indicates the status of physical device or devices.","rdfs:label":"deviceStatus","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:Device"},{"@id":"iudx:EnvAQM"},{"@id":"iudx:EnvFlood"},{"@id":"iudx:WiFiHostspot"}],"iudx:rangeIncludes":[{"@id":"iudx:Text"},{"@id":"iudx:ValueDescriptor"}]},{"@id":"iudx:no2","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Nitrogen Dioxide (NO2). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"no2","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:precipitationForecast","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Forecasted rainfall over a certain duration in future.","rdfs:label":"precipitationForecast","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvWeather"},{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:Number"},{"@id":"iudx:ValueDescriptor"}]},{"@id":"iudx:observationDateTime","@type":["iudx:TimeProperty"],"rdfs:comment":"Last reported time of observation.","rdfs:label":"observationDateTime","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"},{"@id":"iudx:EnvFlood"},{"@id":"iudx:TransitManagement"},{"@id":"iudx:WiFiHostspot"},{"@id":"iudx:StreetLightFeeder"},{"@id":"iudx:WmgmtVehicle"}],"iudx:rangeIncludes":[{"@id":"iudx:DateTime"},{"@id":"iudx:ValueDescriptor"}]},{"@id":"iudx:bap","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Benzo[a]pyrene (BaP). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"bap","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:pm2p5","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Particulate Matter 2.5 (PM2.5). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"pm2p5","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:location","@type":["iudx:GeoProperty"],"rdfs:comment":"Location associated with a resource Item (a spatial point), a group of resource items (a spatial region) or even an observation in case of a mobile sensor.","rdfs:label":"location","iudx:domainIncludes":[{"@id":"iudx:Resource"},{"@id":"iudx:ResourceGroup"},{"@id":"iudx:Provider"},{"@id":"iudx:ResourceServer"},{"@id":"iudx:Organization"},{"@id":"iudx:EnvAQM"},{"@id":"iudx:EnvFlood"},{"@id":"iudx:StreetLightFeeder"},{"@id":"iudx:WmgmtBin"},{"@id":"iudx:WmgmtVehicle"}],"iudx:rangeIncludes":[{"@id":"iudx:Point"},{"@id":"iudx:GeoJSONGeometry"},{"@id":"iudx:Place"},{"@id":"iudx:Text"}],"rdfs:isDefinedBy":{"@id":"iudx:"},"skos:exactMatch":{"@id":"schema:location"}},{"@id":"iudx:airQualityIndex","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Overall Air Quality Index (AQI) for the observed air quality.","rdfs:label":"airQualityIndex","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:Number"},{"@id":"iudx:ValueDescriptor"}]},{"@id":"iudx:co2","@type":["iudx:QuantitativeProperty"],"rdfs:comment":"Observed value of environmental pollutant Carbon Dioxide (CO2). Value is an object containing attributes representing statistical aggregates derived from past data.","rdfs:label":"co2","rdfs:isDefinedBy":{"@id":"iudx:"},"iudx:domainIncludes":[{"@id":"iudx:EnvAQM"}],"iudx:rangeIncludes":[{"@id":"iudx:TimeSeriesAggregation"}]},{"@id":"iudx:Environment","@type":["owl:Class","rdfs:Class"],"rdfs:comment":"Data models that pertain to the environment domain","rdfs:label":"Environment","rdfs:isDefinedBy":{"@id":"iudx:"},"rdfs:subClassOf":{"@id":"iudx:DataModel"}},{"@id":"iudx:DataModel","@type":["owl:Class","rdfs:Class"],"rdfs:comment":"Class of all Data Models.","rdfs:label":"DataModel","rdfs:isDefinedBy":{"@id":"iudx:"},"rdfs:subClassOf":{"@id":"iudx:Thing"}},{"@id":"iudx:Thing","@type":["owl:Class","rdfs:Class"],"rdfs:comment":"Most generic IUDX object.","rdfs:label":"Thing","rdfs:isDefinedBy":{"@id":"iudx:"},"skos:exactMatch":{"@id":"schema:Thing"}},{"@id":"iudx:description","@type":["iudx:TextProperty"],"rdfs:comment":"Description for an IUDX thing.","rdfs:label":"description","iudx:domainIncludes":[{"@id":"iudx:Thing"}],"iudx:rangeIncludes":[{"@id":"iudx:Text"}],"rdfs:isDefinedBy":{"@id":"iudx:"}}]};
    let response = data['@graph'];

    this.parsed_response = {
      description: response[0]['rdfs:comment'],
      breadcrumbs: [response[0]['@id'].split('iudx:')[1], response[0]['rdfs:subClassOf']['@id'].split('iudx:')[1]],
      tables: {}
    }

    this.get_sub_class(response,response[0]['rdfs:subClassOf']['@id']);
    this.get_sub_tables(response);
    console.log(JSON.stringify(this.parsed_response));
  }

  get_sub_class(arr, str) {
    for(let i=0;i<arr.length;i++) {
      if(arr[i]['@id'] == str) {
        if(arr[i]['rdfs:subClassOf']) {
          this.parsed_response.breadcrumbs.push(arr[i]['rdfs:subClassOf']['@id'].split('iudx:')[1]);
          this.get_sub_class(arr,arr[i]['rdfs:subClassOf']['@id']);
        }
        break;
      }
    }
  }

  get_sub_tables(arr) {
    this.parsed_response.breadcrumbs.forEach((b)=>{
      this.parsed_response.tables[b] = {
        description: 'Properties inhertied from ' + b,
        properties: []
      };
    });
    for(let i=0;i<arr.length;i++) {
      if(arr[i]['iudx:domainIncludes']) {
        loop_inner:
        for(let j=0;j<this.parsed_response.breadcrumbs.length;j++) {
          if(this.is_includes(arr[i], this.parsed_response.breadcrumbs[j])) {
            let obj = {
              property: arr[i]['rdfs:label'],
              expected_types: arr[i]['iudx:rangeIncludes'].map(x=>{ return x['@id'].split(':')[1] }),
              description: arr[i]['rdfs:comment']
            }
            this.parsed_response.tables[this.parsed_response.breadcrumbs[j]].properties.push(obj);
            break loop_inner;
          }
        }
      }
    }
  }

  is_includes(obj, str) {
    let flag = false;
    obj['iudx:domainIncludes'].forEach(b=>{
        if(b['@id'] == ('iudx:' + str)) flag = true;
    });
    return flag;
  }

}
