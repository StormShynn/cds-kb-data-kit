---
name: I_EHSLOCATIONREVISIONNAMET
description: "EHS Location Revision - Text"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONNAMET')/$value
semantic_en: "EHS Location Revision - Text"
semantic_vi: "EHS Location Revision - Text — CDS view giao diện dựa trên I_EHSLocationName."
keywords:
  - "ehs"
  - "location"
  - "revision"
  - "text"
  - "date"
  - "language"
  - "name"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLOCATIONREVISIONNAMET

**EHS Location Revision - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONNAMET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  | `cast( EHSLocationUUID as ehfnd_location_uuid_ref preserving type )` | `RAW(16)` | Location |
| `RevisionEndDate` | ✓ | | `_EHSLocationRevision` | `RevisionEndDate` | `DATS(8)` | Revision End Date |
| `Language` | ✓ | |  |  | `LANG(1)` | Language |
| `EHSLocationRevisionNameUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision Name UUID |
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `RevisionStartDate` |  | | `_EHSLocationRevision` | `RevisionStartDate` | `DATS(8)` | Revision Start Date |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Change By |
| `EHSLocationName` |  | |  | `cast ( EHSLocationName as ehfnd_loc_name preserving type )` | `CHAR(60)` | Location |
| `EHSLocationAuthorizationGroup` |  | |  | `cast(_EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc )` | `CHAR(21)` | Location Authorization Group |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_EHSLocationRevision` | | ✓ | | | | |
| `_EHSLocationRoot` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_EHSLocationRevision` | `I_EHSLocationRevision` | [1..1] |
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONNAMET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONNAMET')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILOCNAMET',
    compiler.compareFilter: true
 }
@EndUserText.label: 'EHS Location Revision - Text'
@Analytics.dataExtraction.enabled:true
@VDM.viewType: #BASIC
@ObjectModel:{
    dataCategory: #TEXT,
    representativeKey: 'EHSLocationUUID',
    // used for BOBF Master Data Object
    usageType:{ serviceQuality: #A,       
                sizeCategory:  #L,         // < 10.000.000
                dataClass: #MASTER }
}
@AccessControl.authorizationCheck: #MANDATORY
// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE  ]
@ObjectModel.modelingPattern: #NONE

define view I_EHSLocationRevisionNameT
  as select from I_EHSLocationName
  association [0..1] to I_User                as _CreatedByUser       on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                as _LastChangedByUser   on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [1..1] to I_EHSLocationRevision as _EHSLocationRevision on  $projection.EHSLocationRevisionUUID = _EHSLocationRevision.EHSLocationRevisionUUID
                                                                      and $projection.EHSLocationUUID         = _EHSLocationRevision.EHSLocationUUID
  association [1..1] to I_EHSLocationRoot     as _EHSLocationRoot     on  $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
  association [0..1] to I_Language            as _Language            on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_EHSLocationRoot'
  key cast( EHSLocationUUID as ehfnd_location_uuid_ref preserving type ) as EHSLocationUUID,
      @Semantics.businessDate.to
  key _EHSLocationRevision.RevisionEndDate,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      EHSLocationRevisionNameUUID,

      EHSLocationRevisionUUID,
      @Semantics.businessDate.from
      _EHSLocationRevision.RevisionStartDate,
      CreationDateTime,
      CreatedByUser,
      _CreatedByUser,
      LastChangeDateTime,
      LastChangedByUser,
      _LastChangedByUser,
      @Semantics.text:true
      cast ( EHSLocationName as ehfnd_loc_name preserving type )          as EHSLocationName,
      
      //Fields for authorization
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationType,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationStatus,
      cast(_EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc ) as EHSLocationAuthorizationGroup,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].Plant,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].CostCenter,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].CompanyCode,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].BusinessArea,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _EHSLocationRevision,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _EHSLocationRoot,
      _Language
}
```
