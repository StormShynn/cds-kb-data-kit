---
name: I_INSPLOTMATLDOCITEM
description: "Insplotmatldocitem"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_INSPLOTMATLDOCITEM

**Insplotmatldocitem**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  | `prueflos` |  |  |
| `InspLotMatlDocItem` | ✓ | |  | `zaehler` |  |  |
| `InspLotMatlDocItemType` |  | |  | `typ` |  |  |
| `MaterialDocument` |  | |  | `mblnr` |  |  |
| `MaterialDocumentYear` |  | |  | `mjahr` |  |  |
| `MaterialDocumentItem` |  | |  | `zeile` |  |  |
| `CreationDate` |  | |  | `cpudt` |  |  |
| `UsageDecisionStockType` |  | |  | `ud_stock_type` |  |  |
| `_InspectionLot` | | ✓ | | | | |
| `_InspLotMatlDocItemType` | | ✓ | | | | |
| `_GoodsMovementDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_InspLotMatlDocItemType` | `I_InspLotMatlDocItemType` | [1..1] |
| `_GoodsMovementDocument` | `I_GoodsMovementDocument` | [1..1] |

## Source Code

```abap
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Material Document Item in Inspection Lot'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #B
    }
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspLotMatlDocItem
  as select from qamb
  association [1..1] to I_InspectionLot          as _InspectionLot          on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [1..1] to I_InspLotMatlDocItemType as _InspLotMatlDocItemType on  $projection.InspLotMatlDocItemType = _InspLotMatlDocItemType.InspLotMatlDocItemType
  association [1..1] to I_GoodsMovementDocument  as _GoodsMovementDocument  on  $projection.MaterialDocument                      = _GoodsMovementDocument.MaterialDocument
                                                                            and $projection.MaterialDocumentItem                  = _GoodsMovementDocument.MaterialDocumentItem
                                                                            and $projection.MaterialDocumentYear                  = _GoodsMovementDocument.MaterialDocumentYear
                                                                            and _GoodsMovementDocument.MaterialDocumentRecordType = 'MDOC'
{
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key prueflos as InspectionLot,
  key zaehler  as InspLotMatlDocItem,

      @ObjectModel.foreignKey.association: '_InspLotMatlDocItemType'
      typ           as InspLotMatlDocItemType,
      mblnr         as MaterialDocument,
      mjahr         as MaterialDocumentYear,
      zeile         as MaterialDocumentItem,
      cpudt         as CreationDate,
      ud_stock_type as UsageDecisionStockType,
      
      //Associations
      _InspLotMatlDocItemType,
      _InspectionLot,
      _GoodsMovementDocument
}
```
