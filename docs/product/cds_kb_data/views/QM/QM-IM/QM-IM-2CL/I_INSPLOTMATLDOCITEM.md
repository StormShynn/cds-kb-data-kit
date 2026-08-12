---
name: I_INSPLOTMATLDOCITEM
description: "Insplotmatldocitem"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_INSPLOTMATLDOCITEM

**Insplotmatldocitem**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
