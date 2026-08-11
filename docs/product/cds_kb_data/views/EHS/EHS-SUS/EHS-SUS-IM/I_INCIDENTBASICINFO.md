---
name: I_INCIDENTBASICINFO
description: "This CDS view retrieves the basic information of incident records. This CDS view provides the data to answer the following business questions: In which plant of my organization is the highest number of reported incidents? How many? In which country/region is the highest number of reported incidents in my organization? How many? How many incidents have been reported throughout the years? How many of the reported incidents have a restricted access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTBASICINFO')/$value
semantic_en: "This CDS view retrieves the basic information of incident records. This CDS view provides the data to answer the following business questions: In which plant of my organization is the highest number of reported incidents? How many? In which country/region is the highest number of reported incidents in my organization? How many? How many incidents have been reported throughout the years? How many of the reported incidents have a restricted access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Basic Information of an Incident — CDS view giao diện dựa trên ehhssd_inc_binfa."
keywords:
  - "Basic Information of an Incident"
  - "basic"
  - "information"
  - "incident"
  - "info"
  - "creation"
  - "date"
  - "time"
  - "created"
  - "user"
  - "last"
  - "change"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - plan
  - bo:salesorganization
---
# I_INCIDENTBASICINFO

**This CDS view retrieves the basic information of incident records. This CDS view provides the data to answer the following business questions: In which plant of my organization is the highest number of reported incidents? How many? In which country/region is the highest number of reported incidents in my organization? How many? How many incidents have been reported throughout the years? How many of the reported incidents have a restricted access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTBASICINFO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentBasicInfoUUID` | ✓ | |  | `db_key` | `RAW(16)` | Incident Basic Information UUID |
| `IncidentUUID` |  | |  | `cast(parent_key as ehhss_incident_uuid preserving type)` | `RAW(16)` | Incident UUID |
| `CreationDateTime` |  | |  | `cast(datetime_cr as ehfnd_datetime_cr preserving type)` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  | `user_id_cr` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  | `cast(datetime_ch as ehfnd_datetime_ch preserving type)` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  | `user_id_ch` | `CHAR(12)` | Object Changed By |
| `IncidentTitle` |  | |  | `title` | `CHAR(80)` | Incident Title |
| `OrganizationalUnit` |  | |  | `cast( org_id as ehhss_org_unit_id_nc preserving type )` | `NUMC(8)` | Organizational Unit ID |
| `Plant` |  | |  | `plant_id` | `CHAR(4)` | Plant ID |
| `EHSLocationUUID` |  | |  | `cast(loc_root_key_ref as ehfnd_location_uuid_ref preserving type)` | `RAW(16)` | Location |
| `IncidentLocationType` |  | |  | `cast( loc_type as ehhss_location_type_code_nc preserving type )` | `CHAR(21)` | Location Classification |
| `IncidentUTCDateTime` |  | |  | `cast( start_timestamp as timestamp preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentUTCEndDateTime` |  | |  | `cast( end_timestamp as timestamp preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentTimeIsUnknown` |  | |  | `time_not_det_ind` | `CHAR(1)` | Time Unknown for Incident Start |
| `IncidentTimeZone` |  | |  | `start_time_zone` | `CHAR(6)` | Time Zone of Incident Start |
| `IncidentEndTimeZone` |  | |  | `end_time_zone` | `CHAR(6)` | Time Zone for Incident End |
| `IncidentDate` |  | |  | `cast(tstmp_to_dats(start_timestamp,$session.user_timezone,$session.client,'INITIAL') as ehhss_inc_start_date preserving type )` | `DATS(8)` | Incident Start Date |
| `IncidentHasAccessRestriction` |  | |  | `confidential_ts` | `CHAR(1)` | Restricted Access to Incident Record |
| `Country` |  | |  | `country` | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  | `region` | `CHAR(3)` | Region of Incident |
| `IncidentInjuryIllnLogType` |  | |  | `cast( type as ehhss_inc_inj_type_code_nc preserving type )` | `CHAR(50)` | Injury/Illness Log Entry Type |
| `EHSStreetHouseNumberText` |  | |  | `street_house_num` | `CHAR(60)` | Street / House Number of Incident |
| `EHSPostalCodeText` |  | |  | `postal_code` | `CHAR(10)` | Postal Code of Incident |
| `EHSCityText` |  | |  | `city` | `CHAR(40)` | City of Incident |
| `IncidentDescOfEventUUID` |  | |  | `txc_desc_key` | `RAW(16)` | NodeID |
| `IncidentReportedDateTime` |  | |  | `cast( rep_timestamp as timestamp preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentReportedTimeZone` |  | |  | `rep_time_zone` | `CHAR(6)` | Time Zone for Initial Incident Report |
| `EHSLocationID` |  | |  | `coalesce(_EHSLocationRoot.EHSLocationID,'')` | `CHAR(20)` |  |
| `IncidentLatitudeValue` |  | |  | `cast( latit_meas as ehfnd_geoloc_latitude_nc preserving type )` | `DEC(15)` | Geographic Latitude |
| `IncidentLongitudeValue` |  | |  | `cast( long_meas as ehfnd_geoloc_longitude_nc preserving type )` | `DEC(15)` | Geographic Longitude |
| `IncidentIsReportedAnonymously` |  | |  | `rep_anonym_ind` | `CHAR(1)` | Report Incident Anonymously |
| `IncidentLocationDescUUID` |  | |  | `txc_loc_desc_key` | `RAW(16)` | NodeID |
| `IncidentImmdActionDescUUID` |  | |  | `txc_ima_desc_key` | `RAW(16)` | NodeID |
| `_IncidentLocationType` | | ✓ | | | | |
| `_IncidentHasAccessRestriction` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_OrgUnit` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_EHSLocationRoot` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_TimeZone` | | ✓ | | | | |
| `_EndTimeZone` | | ✓ | | | | |
| `_ReportedTimeZone` | | ✓ | | | | |
| `_IncidentTimeIsUnknown` | | ✓ | | | | |
| `_Incident` | | ✓ | | | | |
| `_CurrentEHSParentLocationID` | | ✓ | | | | |
| `_IncidentInjryIllnLogType` | | ✓ | | | | |
| `_LocTextDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentLocationType` | `I_IncidentLocationType` | [0..1] |
| `_IncidentHasAccessRestriction` | `I_TernaryLogicalState` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_OrgUnit` | `I_OrgUnit` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [0..1] |
| `_TimeZone` | `I_TimeZone` | [1..1] |
| `_EndTimeZone` | `I_TimeZone` | [1..1] |
| `_ReportedTimeZone` | `I_TimeZone` | [1..1] |
| `_IncidentTimeIsUnknown` | `I_Indicator` | [1..1] |
| `_Incident` | `I_Incident` | [1..1] |
| `_CurrentEHSParentLocationID` | `I_CurrentEHSParentLocationID` | [0..*] |
| `_IncidentInjryIllnLogType` | `I_IncidentInjryIllnLogType` | [0..1] |
| `_LocTextDesc` | `I_LocationDescFallbackLang` | [1..1] |
| `_Extension` | `E_IncidentBasicInfo` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTBASICINFO')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTBASICINFO')/$value)*

```abap
@EndUserText.label: 'Basic Information of an Incident'
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'IncidentBasicInfoUUID'
@AccessControl:{ authorizationCheck: #CHECK, privilegedAssociations:  [ '_OrgUnit', '_CreatedByUser', '_LastChangedByUser'] }
@AbapCatalog.sqlViewName: 'IINCBINFA'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSIncidentBasicInformation'

define view I_IncidentBasicInfo
  as select from ehhssd_inc_binfa
  association [0..1] to I_IncidentLocationType       as _IncidentLocationType         on  $projection.IncidentLocationType = _IncidentLocationType.IncidentLocationType
  association [1..1] to I_TernaryLogicalState        as _IncidentHasAccessRestriction on  $projection.IncidentHasAccessRestriction = _IncidentHasAccessRestriction.TernaryLogicalState
  association [0..1] to I_Country                    as _Country                      on  $projection.Country = _Country.Country
  association [0..1] to I_Region                     as _Region                       on  $projection.Region  = _Region.Region
                                                                                      and $projection.Country = _Region.Country
  association [0..1] to I_OrgUnit                    as _OrgUnit                      on  $projection.OrganizationalUnit = _OrgUnit.OrganizationalUnit
  association [0..1] to I_Plant                      as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_User                       as _CreatedByUser                on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                       as _LastChangedByUser            on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_EHSLocationRoot            as _EHSLocationRoot              on  $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
  association [0..1] to I_CalendarDate               as _CalendarDate                 on  $projection.IncidentDate = _CalendarDate.CalendarDate
  association [1..1] to I_TimeZone                   as _TimeZone                     on  $projection.IncidentTimeZone = _TimeZone.TimeZoneID
  association [1..1] to I_TimeZone                   as _EndTimeZone                  on  $projection.IncidentEndTimeZone = _EndTimeZone.TimeZoneID
  association [1..1] to I_TimeZone                   as _ReportedTimeZone             on  $projection.IncidentReportedTimeZone = _ReportedTimeZone.TimeZoneID
  association [1..1] to I_Indicator                  as _IncidentTimeIsUnknown        on  $projection.IncidentTimeIsUnknown = _IncidentTimeIsUnknown.IndicatorValue
  association [1..1] to I_Incident                   as _Incident                     on  $projection.IncidentUUID = _Incident.IncidentUUID
  // in order to determine location id and all parent ids for the authorization check
  association [0..*] to I_CurrentEHSParentLocationID as _CurrentEHSParentLocationID   on  $projection.EHSLocationUUID = _CurrentEHSParentLocationID.EHSLocationUUID
  association [0..1] to I_IncidentInjryIllnLogType   as _IncidentInjryIllnLogType     on  $projection.IncidentInjuryIllnLogType = _IncidentInjryIllnLogType.IncidentInjuryIllnLogType
  association [1..1] to I_LocationDescFallbackLang   as _LocTextDesc                  on  $projection.EHSLocationUUID = _LocTextDesc.EHSLocationUUID

  // Extension include
  association [1..1] to E_IncidentBasicInfo          as _Extension                    on  $projection.IncidentBasicInfoUUID = _Extension.IncidentBasicInfoUUID

  //Begin correction 3543212 - 20.11.2024  **************************
  //Remove correction 3531680 - 24.10.2024 with association [1..1] to I_EHSTextCollectionText
  //End correction 3543212 - 20.11.2024  ****************************

{
  key db_key                                                             as IncidentBasicInfoUUID,
      cast(parent_key as ehhss_incident_uuid preserving type)            as IncidentUUID,
      _Incident,

      // Admin data
      cast(datetime_cr as ehfnd_datetime_cr preserving type)             as CreationDateTime,
      user_id_cr                                                         as CreatedByUser,
      _CreatedByUser,
      cast(datetime_ch as ehfnd_datetime_ch preserving type)             as LastChangeDateTime,
      user_id_ch                                                         as LastChangedByUser,
      _LastChangedByUser,

      title                                                              as IncidentTitle,

      @ObjectModel.foreignKey.association: '_OrgUnit'
      cast( org_id as ehhss_org_unit_id_nc preserving type )             as OrganizationalUnit,
      _OrgUnit,

      @ObjectModel.foreignKey.association: '_Plant'
      plant_id                                                           as Plant,
      _Plant,

      @ObjectModel.foreignKey.association: '_EHSLocationRoot'
      cast(loc_root_key_ref as ehfnd_location_uuid_ref  preserving type) as EHSLocationUUID,
      _EHSLocationRoot,
      // when incident is assigned to location and user has authorizations for any of the location parents, then the user has the same autorizations for this incident
      _CurrentEHSParentLocationID,

      @ObjectModel.foreignKey.association: '_IncidentLocationType'
      cast( loc_type as ehhss_location_type_code_nc preserving type )    as IncidentLocationType,
      _IncidentLocationType,

      cast( start_timestamp as timestamp preserving type )               as IncidentUTCDateTime,

      cast( end_timestamp as timestamp preserving type )                 as IncidentUTCEndDateTime,

      @ObjectModel.foreignKey.association: '_IncidentTimeIsUnknown'
      time_not_det_ind                                                   as IncidentTimeIsUnknown,
      _IncidentTimeIsUnknown,

      @ObjectModel.foreignKey.association: '_TimeZone'
      start_time_zone                                                    as IncidentTimeZone,
      _TimeZone,

      @ObjectModel.foreignKey.association: '_EndTimeZone'
      end_time_zone                                                      as IncidentEndTimeZone,
      _EndTimeZone,

      // It is possible that the start_timestamp temporarily has no value when an incident
      // has been imported via PDF form. Thus we should not use 'FAIL' for error processing.
      @ObjectModel.foreignKey.association: '_CalendarDate'
      cast(tstmp_to_dats(start_timestamp,$session.user_timezone,$session.client,'INITIAL')
           as ehhss_inc_start_date preserving type )                     as IncidentDate,
      _CalendarDate,

      @ObjectModel.foreignKey.association: '_IncidentHasAccessRestriction'
      confidential_ts                                                    as IncidentHasAccessRestriction,
      _IncidentHasAccessRestriction,

      @ObjectModel.foreignKey.association: '_Country'
      country                                                            as Country,
      _Country,

      @ObjectModel.foreignKey.association: '_Region'
      region                                                             as Region,
      _Region,

      @ObjectModel.foreignKey.association: '_IncidentInjryIllnLogType'
      cast( type as ehhss_inc_inj_type_code_nc preserving type )         as IncidentInjuryIllnLogType,
      _IncidentInjryIllnLogType,

      street_house_num                                                   as EHSStreetHouseNumberText,

      postal_code                                                        as EHSPostalCodeText,

      city                                                               as EHSCityText,

      txc_desc_key                                                       as IncidentDescOfEventUUID,

      cast( rep_timestamp as timestamp preserving type )                 as IncidentReportedDateTime,

      @ObjectModel.foreignKey.association: '_ReportedTimeZone'
      rep_time_zone                                                      as IncidentReportedTimeZone,
      _ReportedTimeZone,

      coalesce(_EHSLocationRoot.EHSLocationID,'')                        as EHSLocationID,

      //Begin correction 3568719  - 07.02.2025  **************************
      cast( latit_meas as ehfnd_geoloc_latitude_nc preserving type )     as IncidentLatitudeValue,
      cast( long_meas as ehfnd_geoloc_longitude_nc preserving type )     as IncidentLongitudeValue,
      //End correction 3568719  - 07.02.2025  ****************************

      //Begin correction 3669483 - 17.10.2025  **************************
      @Semantics.booleanIndicator:true
      rep_anonym_ind                                                     as IncidentIsReportedAnonymously,
      txc_loc_desc_key                                                   as IncidentLocationDescUUID,
      txc_ima_desc_key                                                   as IncidentImmdActionDescUUID,
      //End correction 3669483 - 17.10.2025  ****************************

      _LocTextDesc
}
```
