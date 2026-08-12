---
name: I_INSPLOTMATLDOCITEMTYPE
description: "Insplotmatldocitemtype"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - item-level
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTMATLDOCITEMTYPE

**Insplotmatldocitemtype**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspLotMatlDocItemType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as qambtype )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspLotMatlDocItemTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLTMDOCITTY'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Reference Type of Matl Doc Item in Lot' //same as DDL description
@Analytics.dataCategory:#DIMENSION 
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'InspLotMatlDocItemType'
@ObjectModel.usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspLotMatlDocItemType 
   as select from dd07l
   association [0..*] to I_InspLotMatlDocItemTypeText as _Text 
      on $projection.InspLotMatlDocItemType = _Text.InspLotMatlDocItemType 
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as qambtype ) as InspLotMatlDocItemType,
    _Text
}
where domname  = 'QAMBTYPE' 
  and as4local = 'A'
```
