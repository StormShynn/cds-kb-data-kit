---
name: I_INCIDENTINVOLVEDPERSON
description: "This CDS view retrieves information about the persons that are involved in an incident. This CDS view provides the data to answer the following business questions: How many persons are involved in an incident? Has a person been involved in more than one incident? How many of the involved persons in an incident are with a restricted access to the person information? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINVOLVEDPERSON')/$value
semantic_en: "This CDS view retrieves information about the persons that are involved in an incident. This CDS view provides the data to answer the following business questions: How many persons are involved in an incident? Has a person been involved in more than one incident? How many of the involved persons in an incident are with a restricted access to the person information? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Involved Person in an Incident — CDS view giao diện dựa trên ehhssd_inc_pinv."
keywords:
  - "Involved Person in an Incident"
  - "involved"
  - "person"
  - "incident"
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
  - bo:salesorder
---
# I_INCIDENTINVOLVEDPERSON

**This CDS view retrieves information about the persons that are involved in an incident. This CDS view provides the data to answer the following business questions: How many persons are involved in an incident? Has a person been involved in more than one incident? How many of the involved persons in an incident are with a restricted access to the person information? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINVOLVEDPERSON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvolvedPersonUUID` | ✓ | |  | `cast(db_key as ehhss_person_involved_uuid preserving type)` | `RAW(16)` | Involved Person UUID |
| `IncidentUUID` |  | |  | `cast(parent_key as ehhss_incident_uuid preserving type)` | `RAW(16)` | Incident UUID |
| `CreationDateTime` |  | |  | `cast(datetime_cr as ehfnd_datetime_cr preserving type)` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  | `user_id_cr` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  | `cast(datetime_ch as ehfnd_datetime_ch preserving type)` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  | `user_id_ch` | `CHAR(12)` | Object Changed By |
| `PersonFullName` |  | |  | `full_name` | `CHAR(80)` | Name of Involved Person |
| `EHSCombinedBusinessPartner` |  | |  | `id` | `CHAR(13)` | Involved Person |
| `EHSPersonPositionDesc` |  | |  | `position_desc` | `CHAR(40)` | Description of Involved Person's Position |
| `EHSPersonGroup` |  | |  | `per_group` | `CHAR(21)` | Person Group of Person |
| `PersonInfoHasAccRestriction` |  | |  | `confidential_ts` | `CHAR(1)` | Restricted Access to Person Information |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_PersonInfoHasAccRestriction` | | ✓ | | | | |
| `_IncidentInjuredPersonInfo` | | ✓ | | | | |
| `_Incident` | | ✓ | | | | |
| `_IncidentPersonRole` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_PersonInfoHasAccRestriction` | `I_TernaryLogicalState` | [1..1] |
| `_IncidentInjuredPersonInfo` | `I_IncidentInjuredPersonInfo` | [0..1] |
| `_Incident` | `I_Incident` | [1..1] |
| `_IncidentPersonRole` | `I_IncidentPersonRole` | [0..*] |
| `_Extension` | `E_IncidentInvolvedPerson` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINVOLVEDPERSON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINVOLVEDPERSON')/$value)*

```abap
@EndUserText.label: 'Involved Person in an Incident'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'InvolvedPersonUUID'
@AccessControl: { authorizationCheck: #CHECK,
                  privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] }

@AbapCatalog.sqlViewName: 'IINCINVP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}

// #NOT_REQUIRED because of existing end of purpose check
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSIncidentInvolvedPerson'
@Metadata.allowExtensions:true
@AbapCatalog.viewEnhancementCategory: #PROJECTION_LIST

define view I_IncidentInvolvedPerson
  as select from ehhssd_inc_pinv
  association [0..1] to I_User                      as _CreatedByUser               on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                      as _LastChangedByUser           on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_TernaryLogicalState       as _PersonInfoHasAccRestriction on $projection.PersonInfoHasAccRestriction = _PersonInfoHasAccRestriction.TernaryLogicalState
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_IncidentInjuredPersonInfo as _IncidentInjuredPersonInfo   on $projection.InvolvedPersonUUID = _IncidentInjuredPersonInfo.InvolvedPersonUUID
  association [1..1] to I_Incident                  as _Incident                    on $projection.IncidentUUID = _Incident.IncidentUUID
  association [0..*] to I_IncidentPersonRole        as _IncidentPersonRole          on $projection.InvolvedPersonUUID = _IncidentPersonRole.InvolvedPersonUUID

  // Extension include
  association [1..1] to E_IncidentInvolvedPerson    as _Extension                   on $projection.InvolvedPersonUUID = _Extension.InvolvedPersonUUID

{
  key cast(db_key as ehhss_person_involved_uuid preserving type) as InvolvedPersonUUID,
      cast(parent_key as ehhss_incident_uuid preserving type)    as IncidentUUID,

      // Admin data
      cast(datetime_cr as ehfnd_datetime_cr preserving type)     as CreationDateTime,
      user_id_cr                                                 as CreatedByUser,
      _CreatedByUser,
      cast(datetime_ch as ehfnd_datetime_ch preserving type)     as LastChangeDateTime,
      user_id_ch                                                 as LastChangedByUser,
      _LastChangedByUser,

      full_name                                                  as PersonFullName,
      id                                                         as EHSCombinedBusinessPartner,
      
      position_desc                                              as EHSPersonPositionDesc,
      per_group                                                  as EHSPersonGroup,

      @ObjectModel.foreignKey.association: '_PersonInfoHasAccRestriction'
      confidential_ts                                            as PersonInfoHasAccRestriction,
      _PersonInfoHasAccRestriction,
      _IncidentInjuredPersonInfo,
      _Incident,
      _IncidentPersonRole

}
```
