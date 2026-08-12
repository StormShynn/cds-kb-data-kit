---
name: I_KANBANCTNDETAILEDQTY
description: "Kanbanctndetailedqty"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCTNDETAILEDQTY

**Kanbanctndetailedqty**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanContainer` | ✓ | |  |  |  |  |
| `Batch` | ✓ | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ActualQuantityInBaseUnit` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKANBANCDTQTY'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Container Detailed Quantities'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanContainer'
@ObjectModel.semanticKey:['KanbanContainer']
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view I_KanbanCtnDetailedQty
  as select from I_KanbanContainerBatchQuantity
    inner join   I_KanbanContainer    on I_KanbanContainer.KanbanContainer = I_KanbanContainerBatchQuantity.KanbanContainer
    inner join   I_KanbanControlCycle on I_KanbanControlCycle.KanbanControlCycle = I_KanbanContainer.KanbanControlCycle

{
      @ObjectModel.foreignKey.association: '_KanbanContainer'
  key I_KanbanContainerBatchQuantity.KanbanContainer,
      @ObjectModel.foreignKey.association: '_Batch'
  key I_KanbanContainerBatchQuantity.Batch,

      // Quantities and UoM
      @Semantics.unitOfMeasure: true
      I_KanbanContainerBatchQuantity.BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      I_KanbanContainerBatchQuantity.ActualQuantityInBaseUnit,

      @ObjectModel.foreignKey.association: '_Plant'
      I_KanbanContainerBatchQuantity.Plant, // For ACL
      @ObjectModel.foreignKey.association: '_Product'
      I_KanbanContainerBatchQuantity.Product,

      I_KanbanContainerBatchQuantity._Batch,
      I_KanbanContainerBatchQuantity._KanbanContainer,
      I_KanbanContainerBatchQuantity._Plant,
      I_KanbanContainerBatchQuantity._Product,
      I_KanbanContainerBatchQuantity._BaseUnit,

      // Only for DCL
      @Consumption.hidden: true
      I_KanbanContainerBatchQuantity.Supplier,
      @Consumption.hidden: true
      I_KanbanContainerBatchQuantity._Supplier,
      @Consumption.hidden: true
      I_KanbanContainerBatchQuantity._SupplierCompanyByPlant
}
```
