---
name: I_KANBANOUTPUT
description: "Kanbanoutput"
app_component: PP-KAB-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - interface-view
  - component:PP-KAB-2CL
  - lob:Manufacturing
---
# I_KANBANOUTPUT

**Kanbanoutput**

| Property | Value |
|---|---|
| App Component | `PP-KAB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Kanban` | ✓ | |  | `KanbanContainer` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `KanbanControlCycle` |  | |  |  |  |  |
| `KanbanControlCycleItem` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `KanbanQuantity` |  | |  | `KanbanContainerQuantityInBsUnt` |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ProductionSupplyArea` |  | |  |  |  |  |
| `ProductionSupplyAreaName` |  | | `_ProductionSupplyAreaText` | `ProductionSupplyAreaName` |  |  |
| `Material` |  | |  | `Product` |  |  |
| `MaterialName` |  | | `_ProductText` | `ProductName` |  |  |
| `SetKanbanStatusWaitingBarCode` |  | |  | `cast(concat(KanbanContainer.KanbanContainer, '1') as pk_barcode_waiting)` |  |  |
| `SetKanbanStatusEmptyBarCode` |  | |  | `cast(concat(KanbanContainer.KanbanContainer, '2') as pk_barcode_empty)` |  |  |
| `SetKanbanStatusProcessBarCode` |  | |  | `cast(concat(KanbanContainer.KanbanContainer, '3') as pk_barcode_in_process)` |  |  |
| `SetKanbanStatusTransitBarCode` |  | |  | `cast(concat(KanbanContainer.KanbanContainer, '4') as pk_barcode_in_transit)` |  |  |
| `SetKanbanStatusFullBarCode` |  | |  | `cast(concat(KanbanContainer.KanbanContainer, '5') as pk_barcode_full)` |  |  |
| `SetKanbanStatusInUseBarCode` |  | |  | `cast(concat(KanbanContainer.KanbanContainer, '6') as pk_barcode_in_use)` |  |  |
| `Supplier` |  | |  |  |  |  |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_KanbanContainer` | | ✓ | | | | |
| `_KnbnCtrlCycProdMstrDta` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductText` | `I_ProductText` | [0..1] |
| `_ProductionSupplyAreaText` | `I_ProductionSupplyAreaText` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_KanbanContainer` | `I_KanbanContainer` | [1..1] |
| `_KnbnCtrlCycProdMstrDta` | `I_KnbnCtrlCycProdMstrDta` | [1..1] |
| `_ControlCycleExtension` | `E_KanbanControlCycle` | [0..1] |
| `_ContainerExtension` | `E_KanbanContainer` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKANBANOUTPUT'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Kanban Card'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@ObjectModel.supportedCapabilities: [ #OUTPUT_FORM_DATA_PROVIDER ]
@ObjectModel.modelingPattern: #OUTPUT_FORM_DATA_PROVIDER
@VDM.viewType: #COMPOSITE
@OData: {entitySet: {name: 'QueryNodeSet' }}

define view I_KanbanOutput
  as select from I_KanbanContainer    as KanbanContainer
    cross join   I_Language           as Language
    inner join   I_KanbanControlCycle as KanbanControlCycle on KanbanControlCycle.KanbanControlCycle = KanbanContainer.KanbanControlCycle

  association [0..1] to I_ProductText              as _ProductText              on  _ProductText.Language = Language.Language
                                                                                and _ProductText.Product  = KanbanControlCycle.Product
  association [0..1] to I_ProductionSupplyAreaText as _ProductionSupplyAreaText on  _ProductionSupplyAreaText.Language             = Language.Language
                                                                                and _ProductionSupplyAreaText.Plant                = KanbanContainer.Plant
                                                                                and _ProductionSupplyAreaText.ProductionSupplyArea = KanbanControlCycle.ProductionSupplyArea
  association [0..1] to I_Supplier                 as _Supplier                 on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant   as _SupplierCompanyByPlant   on  $projection.Supplier = _SupplierCompanyByPlant.Supplier
                                                                                and $projection.Plant    = _SupplierCompanyByPlant.Plant
  association [0..1] to I_UnitOfMeasure            as _UnitOfMeasure            on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure

  // Extensibility
  association [1..1] to I_KanbanContainer          as _KanbanContainer          on  _KanbanContainer.KanbanContainer = KanbanContainer.KanbanContainer
  association [1..1] to I_KnbnCtrlCycProdMstrDta   as _KnbnCtrlCycProdMstrDta   on  $projection.KanbanControlCycle = _KnbnCtrlCycProdMstrDta.KanbanControlCycle
  association [0..1] to E_KanbanControlCycle       as _ControlCycleExtension    on  $projection.KanbanControlCycle = _ControlCycleExtension.KanbanControlCycle
  association [0..1] to E_KanbanContainer          as _ContainerExtension       on  $projection.Kanban = _ContainerExtension.KanbanContainer
{
  key KanbanContainer.KanbanContainer                                             as Kanban,
  key Language.Language                                                           as Language,
      KanbanContainer.KanbanControlCycle                                          as KanbanControlCycle,
      KanbanContainer.KanbanControlCycleItem                                      as KanbanControlCycleItem,

      KanbanControlCycle.Plant,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      KanbanControlCycle.KanbanContainerQuantityInBsUnt                           as KanbanQuantity,
      @Semantics.unitOfMeasure: true
      KanbanControlCycle.BaseUnit                                                 as BaseUnit,

      KanbanControlCycle.ProductionSupplyArea                                     as ProductionSupplyArea,
      _ProductionSupplyAreaText.ProductionSupplyAreaName                          as ProductionSupplyAreaName,

      KanbanControlCycle.Product                                                  as Material,
      _ProductText.ProductName                                                    as MaterialName,

      // Barcodes
      cast(concat(KanbanContainer.KanbanContainer, '1') as pk_barcode_waiting)    as SetKanbanStatusWaitingBarCode,
      cast(concat(KanbanContainer.KanbanContainer, '2') as pk_barcode_empty)      as SetKanbanStatusEmptyBarCode,
      cast(concat(KanbanContainer.KanbanContainer, '3') as pk_barcode_in_process) as SetKanbanStatusProcessBarCode,
      cast(concat(KanbanContainer.KanbanContainer, '4') as pk_barcode_in_transit) as SetKanbanStatusTransitBarCode,
      cast(concat(KanbanContainer.KanbanContainer, '5') as pk_barcode_full)       as SetKanbanStatusFullBarCode,
      cast(concat(KanbanContainer.KanbanContainer, '6') as pk_barcode_in_use)     as SetKanbanStatusInUseBarCode,

      // Only for DCL
      @Consumption.hidden: true
      KanbanContainer.Supplier,
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,

      // Associations
      _UnitOfMeasure,

      // Extensibility
      KanbanContainer._KanbanControlCycle,
      _KanbanContainer,
      _KnbnCtrlCycProdMstrDta
}
```
