---
name: I_EHSLOCATIONROOT
description: "This CDS view retrieves the header data of EHS locations (data that is not revision-relevant), such as the location ID and migration source. This CDS view provides the data to answer the following business questions: What's the header data or ID of a particular EHS location in the system?"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONROOT')/$value
semantic_en: "This CDS view retrieves the header data of EHS locations (data that is not revision-relevant), such as the location ID and migration source. This CDS view provides the data to answer the following business questions: What's the header data or ID of a particular EHS location in the system?"
semantic_vi: "EHS Location — CDS view giao diện (master data) dựa trên ehfndd_loc_root."
keywords:
  - "ehs"
  - "location"
  - "creation"
  - "date"
  - "time"
  - "created"
  - "user"
  - "last"
  - "change"
  - "changed"
tags:
  - EHS
  - bo:salesorder
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLOCATIONROOT

**This CDS view retrieves the header data of EHS locations (data that is not revision-relevant), such as the location ID and migration source. This CDS view provides the data to answer the following business questions: What's the header data or ID of a particular EHS location in the system?**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONROOT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  | `cast( db_key as ehfnd_location_uuid_ref preserving type)` | `RAW(16)` | Location |
| `CreationDateTime` |  | |  | `cast( crea_date_time as ehfnd_bo_crea_date_time preserving type )` | `DEC(21)` | Created On |
| `CreatedByUser` |  | |  | `cast( crea_uname as ehfnd_bo_crea_uname preserving type )` | `CHAR(12)` | Created By |
| `LastChangeDateTime` |  | |  | `cast( lchg_date_time as ehfnd_bo_lchg_date_time preserving type )` | `DEC(21)` | Last Changed On |
| `LastChangedByUser` |  | |  | `cast( lchg_uname as ehfnd_bo_lchg_uname preserving type )` | `CHAR(12)` | Last Change By |
| `EHSLocationID` |  | |  | `id` | `CHAR(20)` | Location ID |
| `LocationMigrationSource` |  | |  | `migration_src` | `CHAR(60)` | Migration Source |
| `WasteRegistrationNumber` |  | |  | `waste_reg_nmbr` | `CHAR(60)` | Waste Registration Number |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_EHSLocationRevision` | | ✓ | | | | |
| `_EHSLocNameCurrentRevision` | | ✓ | | | | |
| `_EHSLocNameFallbackLanguage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_EHSLocationRevision` | `I_EHSLocationRevision` | [0..*] |
| `_EHSLocNameCurrentRevision` | `I_EHSLocNameCurrentRevision` | [0..*] |
| `_EHSLocNameFallbackLanguage` | `I_EHSLocNameFallbackLanguage` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONROOT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONROOT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILOCATIONROOT',
    compiler.compareFilter: true
 }
@EndUserText.label: 'EHS Location'
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction: {
  enabled: true,
  delta.changeDataCapture.automatic: true
}
@VDM.viewType: #BASIC
@AccessControl: { authorizationCheck: #MANDATORY,
                  privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser' ] }
// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true }
@ObjectModel:{
    representativeKey: 'EHSLocationUUID',
    compositionRoot: true,
    // used for BOBF Master Data Object
    usageType:{ serviceQuality: #A,        
                sizeCategory:  #M,         // < 100.000
                dataClass: #MASTER },
    sapObjectNodeType.name: 'EHSLocation',
    modelingPattern: #NONE,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}

define view I_EHSLocationRoot
  as select from ehfndd_loc_root
  association [0..1] to I_User                       as _CreatedByUser              on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                       as _LastChangedByUser          on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..*] to I_EHSLocationRevision        as _EHSLocationRevision        on $projection.EHSLocationUUID = _EHSLocationRevision.EHSLocationUUID
  association [0..*] to I_EHSLocNameCurrentRevision  as _EHSLocNameCurrentRevision  on $projection.EHSLocationUUID = _EHSLocNameCurrentRevision.EHSLocationUUID
  association [0..1] to I_EHSLocNameFallbackLanguage as _EHSLocNameFallbackLanguage on $projection.EHSLocationUUID = _EHSLocNameFallbackLanguage.EHSLocationUUID
{
  key cast( db_key as ehfnd_location_uuid_ref preserving type)          as EHSLocationUUID,
      cast( crea_date_time as ehfnd_bo_crea_date_time preserving type ) as CreationDateTime,
      cast( crea_uname as ehfnd_bo_crea_uname preserving type )         as CreatedByUser,
      _CreatedByUser,
      cast( lchg_date_time as ehfnd_bo_lchg_date_time preserving type ) as LastChangeDateTime,
      cast( lchg_uname as ehfnd_bo_lchg_uname preserving type )         as LastChangedByUser,
      _LastChangedByUser,
      id                                                                as EHSLocationID,
      migration_src                                                     as LocationMigrationSource,
      waste_reg_nmbr                                                    as WasteRegistrationNumber,

      _EHSLocationRevision,
      _EHSLocNameCurrentRevision,
      _EHSLocNameFallbackLanguage
}
```
