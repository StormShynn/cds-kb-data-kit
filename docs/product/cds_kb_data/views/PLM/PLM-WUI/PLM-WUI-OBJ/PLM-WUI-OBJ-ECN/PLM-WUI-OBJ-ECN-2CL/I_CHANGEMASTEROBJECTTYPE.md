---
name: I_CHANGEMASTEROBJECTTYPE
description: "These CDS views provide the prerequisites for answering the following business questions: Which are the possible object type assignments to a change master? What's the name of these object types in various languages?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPE')/$value
semantic_en: "These CDS views provide the prerequisites for answering the following business questions: Which are the possible object type assignments to a change master? What's the name of these object types in various languages?"
semantic_vi: "Change Number Object Type — CDS view giao diện dựa trên tcc01."
keywords:
  - "change"
  - "number"
  - "object"
  - "type"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTEROBJECTTYPE

**These CDS views provide the prerequisites for answering the following business questions: Which are the possible object type assignments to a change master? What's the name of these object types in various languages?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberObjectType` | ✓ | |  | `aetyp` | `NUMC(2)` | Object Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ChangeMasterObjectTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNOBJTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'ChangeNumberObjectType'
@ObjectModel.semanticKey: [ 'ChangeNumberObjectType' ]

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Object Type'
define view I_ChangeMasterObjectType
  as select from tcc01
  association [0..*] to I_ChangeMasterObjectTypeText as _Text on $projection.ChangeNumberObjectType = _Text.ChangeNumberObjectType
{
      @ObjectModel.text.association: '_Text'
  key tcc01.aetyp as ChangeNumberObjectType,

      _Text
}
```
