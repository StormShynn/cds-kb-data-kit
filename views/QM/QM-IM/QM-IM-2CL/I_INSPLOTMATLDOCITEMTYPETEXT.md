---
name: I_INSPLOTMATLDOCITEMTYPETEXT
description: Insplotmatldocitemtypetext
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - text
  - item-level
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTMATLDOCITEMTYPETEXT

**Insplotmatldocitemtypetext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspLotMatlDocItemType` | `cast ( substring( domvalue_l, 1, 1 ) as qambtype )` |
| key `Language` | `ddlanguage` |
| `InspLotMatlDocItemTypeText` | `cast( ddtext as val_text )` |
| `_Language` | *Association* |
| `_InspLotMatlDocItemType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspLotMatlDocItemType` | `I_InspLotMatlDocItemType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLTMDOCITTYT'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Ref Type of Matl Doc Item in Lot - Text' 
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'InspLotMatlDocItemType'
@ObjectModel.usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #A }
@Metadata.ignorePropagatedAnnotations: true
define view I_InspLotMatlDocItemTypeText 
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_InspLotMatlDocItemType as _InspLotMatlDocItemType 
      on $projection.InspLotMatlDocItemType = _InspLotMatlDocItemType.InspLotMatlDocItemType
{
    key cast ( substring( domvalue_l, 1, 1 ) as qambtype ) as InspLotMatlDocItemType,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as val_text ) as InspLotMatlDocItemTypeText, 

    _InspLotMatlDocItemType,
    _Language 
}
where domname = 'QAMBTYPE' and as4local = 'A'
```
