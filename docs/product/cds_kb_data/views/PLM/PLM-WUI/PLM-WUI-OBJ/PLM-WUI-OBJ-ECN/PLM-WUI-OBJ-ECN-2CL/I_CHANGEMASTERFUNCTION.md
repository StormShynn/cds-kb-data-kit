---
name: I_CHANGEMASTERFUNCTION
description: "This CDS view provides the prerequisites for answering the following business question: Which are the possible functions that can be assigned to change numbers?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTION')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: Which are the possible functions that can be assigned to change numbers?"
semantic_vi: "Change Number Function — CDS view giao diện dựa trên dd07l."
keywords:
  - "change"
  - "number"
  - "function"
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
# I_CHANGEMASTERFUNCTION

**This CDS view provides the prerequisites for answering the following business question: Which are the possible functions that can be assigned to change numbers?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberFunction` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as cc_aefun )` | `CHAR(1)` | Change number function |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ChangeMasterFunctionText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNFUNCTION'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'ChangeNumberFunction'
@ObjectModel.semanticKey: [ 'ChangeNumberFunction' ]

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Function'
define view I_ChangeMasterFunction
  as select from dd07l
  association [0..*] to I_ChangeMasterFunctionText as _Text on $projection.ChangeNumberFunction = _Text.ChangeNumberFunction
{
      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as cc_aefun ) as ChangeNumberFunction,
      _Text
}
where
      domname  = 'CC_AEFUN'
  and as4local = 'A'
```
