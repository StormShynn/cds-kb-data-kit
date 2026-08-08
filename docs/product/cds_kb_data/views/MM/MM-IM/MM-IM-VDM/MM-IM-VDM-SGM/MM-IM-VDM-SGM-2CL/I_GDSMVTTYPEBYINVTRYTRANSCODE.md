---
name: I_GDSMVTTYPEBYINVTRYTRANSCODE
description: "Gdsmvttypebyinvtrytranscode"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_GDSMVTTYPEBYINVTRYTRANSCODE

**Gdsmvttypebyinvtrytranscode**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GoodsMovementType` | ✓ | |  | `bwart` |  |  |
| `InventoryTransactionCode` | ✓ | |  | `tcode` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GoodsMvtTypeBySpclStkIndT` | [0..1] |

## Source Code

```abap
//@AbapCatalog.entityBuffer.definitionAllowed: true 
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Goods Movement Type for Transaction'
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #NONE
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }


define view entity I_GdsMvtTypeByInvtryTransCode
  as select from t158b
  association [0..1] to I_GoodsMvtTypeBySpclStkIndT as _Text on  $projection.GoodsMovementType   = _Text.GoodsMovementType
                                                             and _Text.ConsumptionPosting        = ''
                                                             and _Text.GoodsMovementRefDocType   = ''
                                                             and _Text.GoodsReceiptType          = ''
                                                             and _Text.InventorySpecialStockType = ''
                                                             and _Text.Language                  = $session.system_language
{
  key bwart as GoodsMovementType,
  key tcode as InventoryTransactionCode,
      _Text
}
```
