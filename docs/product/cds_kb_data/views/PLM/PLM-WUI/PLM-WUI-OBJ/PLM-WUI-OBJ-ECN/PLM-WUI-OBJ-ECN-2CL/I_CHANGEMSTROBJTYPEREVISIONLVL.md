---
name: I_CHANGEMSTROBJTYPEREVISIONLVL
description: "This CDS view provides the prerequisites for answering the following business questions: Which are the possible revision levels that can be assigned to materials? Which are the possible revision levels that can be assigned to documents? In which sequence can these revision levels be assigned to a material or document?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJTYPEREVISIONLVL')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which are the possible revision levels that can be assigned to materials? Which are the possible revision levels that can be assigned to documents? In which sequence can these revision levels be assigned to a material or document?"
semantic_vi: "Change Number Object Type Revision Level — CDS view giao diện dựa trên tcc09."
keywords:
  - "change"
  - "number"
  - "object"
  - "type"
  - "revision"
  - "level"
  - "ordinal"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - document
  - interface-view
  - material
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMSTROBJTYPEREVISIONLVL

**This CDS view provides the prerequisites for answering the following business questions: Which are the possible revision levels that can be assigned to materials? Which are the possible revision levels that can be assigned to documents? In which sequence can these revision levels be assigned to a material or document?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJTYPEREVISIONLVL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberObjectType` | ✓ | |  | `aetyp` | `NUMC(2)` | Object Type |
| `RevisionLevel` | ✓ | |  | `cast(revlv as cc_revlv_nex preserving type)` | `CHAR(2)` | Revision Level without Conversion Exit |
| `RevisionLevelOrdinalNumber` |  | |  | `ccsrf` | `NUMC(3)` | Revision Level Order |
| `_ChangeMasterObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeMasterObjectType` | `I_ChangeMasterObjectType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJTYPEREVISIONLVL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJTYPEREVISIONLVL')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'RevisionLevel'
@Analytics.technicalName: 'IECNREVLVL'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@Search.searchable: true

@EndUserText.label: 'Change Number Object Type Revision Level'
define view entity I_ChangeMstrObjTypeRevisionLvl
  as select from tcc09
  association [1..1] to I_ChangeMasterObjectType as _ChangeMasterObjectType on $projection.ChangeNumberObjectType = _ChangeMasterObjectType.ChangeNumberObjectType
{
        @ObjectModel.foreignKey.association: '_ChangeMasterObjectType'

        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
  key   aetyp                                       as ChangeNumberObjectType,

        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
  key   cast(revlv as cc_revlv_nex preserving type) as RevisionLevel,
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        ccsrf                                       as RevisionLevelOrdinalNumber,


        _ChangeMasterObjectType
}
```
