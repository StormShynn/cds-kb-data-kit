---
name: I_EHSLOCNAMEBYIDENTIFIERTEXT
description: "Location name by id - Text"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCNAMEBYIDENTIFIERTEXT')/$value
semantic_en: "Location name by id - Text"
semantic_vi: "Location name by id - Text — CDS view giao diện dựa trên I_EHSLocationName."
keywords:
  - "location"
  - "name"
  - "text"
  - "language"
  - "revision"
  - "date"
  - "start"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLOCNAMEBYIDENTIFIERTEXT

**Location name by id - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCNAMEBYIDENTIFIERTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language |
| `EHSLocationID` | ✓ | | `_EHSLocationRoot` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `RevisionEndDate` | ✓ | | `_EHSLocationRevision` | `RevisionEndDate` | `DATS(8)` | Revision End Date |
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `RevisionStartDate` |  | | `_EHSLocationRevision` | `RevisionStartDate` | `DATS(8)` | Revision Start Date |
| `EHSLocationUUID` |  | |  | `cast( EHSLocationUUID as ehfnd_location_uuid_ref preserving type )` | `RAW(16)` | Location |
| `EHSLocationName` |  | |  | `cast ( EHSLocationName as ehfnd_loc_name preserving type )` | `CHAR(60)` | Location |
| `_EHSLocationRoot` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_EHSLocationRevision` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_EHSLocationRevision` | `I_EHSLocationRevision` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCNAMEBYIDENTIFIERTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCNAMEBYIDENTIFIERTEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Location name by id - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:[#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel:{
    dataCategory: #TEXT,
    representativeKey: 'EHSLocationID',
    usageType:{ serviceQuality: #C,        // < 15 msec
                         sizeCategory:  #L,         // < 10.000.000
                         dataClass: #MASTER }
}

@VDM.viewType: #BASIC
define view entity I_EHSLocNameByIdentifierText
  as select from I_EHSLocationName
  association [1..1] to I_EHSLocationRoot     as _EHSLocationRoot     on $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
  association [0..*] to I_EHSLocationRevision as _EHSLocationRevision on $projection.EHSLocationRevisionUUID = _EHSLocationRevision.EHSLocationRevisionUUID

{
             @ObjectModel.foreignKey.association: '_Language'
             @Semantics.language: true
  key        Language,
  key        _EHSLocationRoot.EHSLocationID,
             @Semantics.businessDate.to
  key        _EHSLocationRevision.RevisionEndDate,
             EHSLocationRevisionUUID,
             @Semantics.businessDate.from
             _EHSLocationRevision.RevisionStartDate,
             cast( EHSLocationUUID as ehfnd_location_uuid_ref preserving type ) as EHSLocationUUID,
             @Semantics.text:true
             cast ( EHSLocationName as ehfnd_loc_name preserving type )         as EHSLocationName,


             _EHSLocationRoot,
             _Language,
             _EHSLocationRevision
}
```
