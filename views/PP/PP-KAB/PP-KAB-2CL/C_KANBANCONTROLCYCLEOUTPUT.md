---
name: C_KANBANCONTROLCYCLEOUTPUT
description: Kanban Control Cycle Output
app_component: PP-KAB-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_KANBANCONTROLCYCLEOUTPUT')/$value
semantic_en: Kanban Control Cycle Output
keywords:
  - Kanban Control Cycle Output
tags:
  - PP
  - component:PP-KAB-2CL
  - consumption-view
  - lob:manufacturing
  - PP-KAB
  - PP-KAB-2CL
  - metadata-only
---
# C_KANBANCONTROLCYCLEOUTPUT

**Kanban Control Cycle Output**

| Property | Value |
|---|---|
| App Component | `PP-KAB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_KANBANCONTROLCYCLEOUTPUT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanControlCycle` |  | |  |  | `CHAR(7)` | Kanban Control Cycle |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductName` |  | |  |  | `CHAR(40)` | Product Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `ProductionSupplyArea` |  | |  |  | `CHAR(10)` | Production Supply Area |
| `ProductionSupplyAreaName` |  | |  |  | `CHAR(40)` | Production Supply Area Name |
| `StoringPositionName` |  | |  |  | `CHAR(25)` | Storing Position |
| `Warehouse` |  | |  |  | `CHAR(3)` | Warehouse |
| `StorageType` |  | |  |  | `CHAR(3)` | Storage Type |
| `StorageBin` |  | |  |  | `CHAR(10)` | Storage Bin |
| `DestinationStorageBin` |  | |  |  | `CHAR(18)` | Destination Storage Bin |
| `KanbanCtrlCycleLifeCycleStatus` |  | |  |  | `CHAR(1)` | Lifecycle Status of Kanban Control Cycle |
| `KnbnCtrlCycLifeCycStsName` |  | |  |  | `CHAR(60)` | Kanban Control Cycle Life Cycle Status Text |
| `NumberOfKanbanContainers` |  | |  |  | `NUMC(3)` | Number of Kanban Containers |
| `MaxNrOfEmptyKanbanContainers` |  | |  |  | `NUMC(3)` | Maximum Number of Empty Kanban Containers |
| `KanbanContainerQuantityInBsUnt` |  | |  |  | `QUAN(13)` | Kanban Container Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `NumberOfLoadCarriers` |  | |  |  | `NUMC(3)` | Number of Load Carriers |
| `KanbanContainerPackggProduct` |  | |  |  | `CHAR(40)` | Packaging Product for Kanban Container |
| `PackageInstructionInternalID` |  | |  |  | `CHAR(22)` | Packing Instruction |
| `InHouseProductionReplnmtStrgy` |  | |  |  | `CHAR(4)` | Replenishment Strategy for In-House Production |
| `ExtProcurementReplnmtStrgy` |  | |  |  | `CHAR(4)` | Replenishment Strategy for External Procurement |
| `StockTransferReplnmtStrategy` |  | |  |  | `CHAR(4)` | Replenishment Strategy for Stock Transfer |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` |  | |  |  | `CHAR(20)` | Purchasing Organization Name |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `SupplierName` |  | |  |  | `CHAR(35)` | Name |
| `BPSupplierName` |  | |  |  | `CHAR(40)` | Supplier Name |
| `SupplySourcePlant` |  | |  |  | `CHAR(4)` | Plant of Supply Source |
| `SupplySourcePlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `PurchaseOutlineAgreement` |  | |  |  | `CHAR(10)` | Agreement Number |
| `PurchaseOutlineAgreementItem` |  | |  |  | `NUMC(5)` | Agreement Item |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StorageLocationName` |  | |  |  | `CHAR(16)` | Storage Location Name |
| `SourceStorageBin` |  | |  |  | `CHAR(18)` | Source Storage Bin |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `SupplySourceResponsiblePerson` |  | |  |  | `CHAR(3)` | Person Responsible for Supply Source |
| `SupSrceRespPersnName` |  | |  |  | `CHAR(18)` | MRP Controller Name |
| `ProductionVersion` |  | |  |  | `CHAR(4)` | Production Version |
| `ProductionVersionText` |  | |  |  | `CHAR(40)` | Short Text for Production Version |
