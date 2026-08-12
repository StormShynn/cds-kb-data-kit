---
name: C_KANBANCONTROLCYCLEOUTPUT
description: "This CDS view forms the basis for the predelivered Output Management form template Kanban Control Cycle (PP_KANBAN_CONTROLCYCLE) and its data source FDP_PP_KANBAN_CONTROLCYCLE_SRV. This CDS view provides the data to answer the following business questions: Which fields are included in the form data provider for Kanban Control Cycle Output Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PP-KAB-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_KANBANCONTROLCYCLEOUTPUT')/$value
semantic_en: "This CDS view forms the basis for the predelivered Output Management form template Kanban Control Cycle (PP_KANBAN_CONTROLCYCLE) and its data source FDP_PP_KANBAN_CONTROLCYCLE_SRV. This CDS view provides the data to answer the following business questions: Which fields are included in the form data provider for Kanban Control Cycle Output Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Kanban Control Cycle Output — CDS view tiêu dùng dựa trên I_KanbanControlCycle."
keywords:
  - "Kanban Control Cycle Output"
  - "kanban"
  - "control"
  - "cycle"
  - "output"
  - "product"
  - "name"
  - "plant"
tags:
  - PP
  - bo:companycode
  - component:PP-KAB-2CL
  - consumption-view
  - lob:manufacturing
  - PP-KAB
  - PP-KAB-2CL
---
# C_KANBANCONTROLCYCLEOUTPUT

**This CDS view forms the basis for the predelivered Output Management form template Kanban Control Cycle (PP_KANBAN_CONTROLCYCLE) and its data source FDP_PP_KANBAN_CONTROLCYCLE_SRV. This CDS view provides the data to answer the following business questions: Which fields are included in the form data provider for Kanban Control Cycle Output Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PP-KAB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_KANBANCONTROLCYCLEOUTPUT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanControlCycle` | ✓ | |  |  | `CHAR(7)` | Kanban Control Cycle |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductName` |  | | `_ProductText` | `ProductName` | `CHAR(40)` | Product Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `ProductionSupplyArea` |  | |  |  | `CHAR(10)` | Production Supply Area |
| `ProductionSupplyAreaName` |  | | `_ProductionSupplyAreaText` | `ProductionSupplyAreaName` | `CHAR(40)` | Production Supply Area Name |
| `StoringPositionName` |  | |  |  | `CHAR(25)` | Storing Position |
| `Warehouse` |  | |  |  | `CHAR(3)` | Warehouse |
| `StorageType` |  | |  |  | `CHAR(3)` | Storage Type |
| `StorageBin` |  | |  |  | `CHAR(10)` | Storage Bin |
| `DestinationStorageBin` |  | |  |  | `CHAR(18)` | Destination Storage Bin |
| `KanbanCtrlCycleLifeCycleStatus` |  | |  |  | `CHAR(1)` | Lifecycle Status of Kanban Control Cycle |
| `KnbnCtrlCycLifeCycStsName` |  | | `_KnbnCtrlCycLifeCycStsTxt` | `KnbnCtrlCycLifeCycStsText` | `CHAR(60)` | Kanban Control Cycle Life Cycle Status Text |
| `NumberOfKanbanContainers` |  | |  |  | `NUMC(3)` | Number of Kanban Containers |
| `MaxNrOfEmptyKanbanContainers` |  | |  |  | `NUMC(3)` | Maximum Number of Empty Kanban Containers |
| `KanbanContainerQuantityInBsUnt` |  | |  |  | `QUAN(13)` | Kanban Container Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `NumberOfLoadCarriers` |  | |  |  | `NUMC(3)` | Number of Load Carriers |
| `KanbanContainerPackggProduct` |  | |  |  | `CHAR(40)` | Packaging Product for Kanban Container |
| `PackageInstructionInternalID` |  | |  | `PackingInstruction` | `CHAR(22)` | Packing Instruction |
| `InHouseProductionReplnmtStrgy` |  | |  |  | `CHAR(4)` | Replenishment Strategy for In-House Production |
| `ExtProcurementReplnmtStrgy` |  | |  |  | `CHAR(4)` | Replenishment Strategy for External Procurement |
| `StockTransferReplnmtStrategy` |  | |  |  | `CHAR(4)` | Replenishment Strategy for Stock Transfer |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` |  | | `_PurchasingOrganization` | `PurchasingOrganizationName` | `CHAR(20)` | Purchasing Organization Name |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `SupplierName` |  | | `_Supplier` | `OrganizationBPName1` | `CHAR(35)` | Name |
| `BPSupplierName` |  | |  | `cast(_Supplier.BusinessPartnerName1 as vdm_controlcyclesuppliername preserving type )` | `CHAR(40)` | Supplier Name |
| `SupplySourcePlant` |  | |  |  | `CHAR(4)` | Plant of Supply Source |
| `SupplySourcePlantName` |  | | `_SupplySourcePlant` | `PlantName` | `CHAR(30)` | Plant Name |
| `PurchaseOutlineAgreement` |  | |  |  | `CHAR(10)` | Agreement Number |
| `PurchaseOutlineAgreementItem` |  | |  |  | `NUMC(5)` | Agreement Item |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StorageLocationName` |  | | `_StorageLocation` | `StorageLocationName` | `CHAR(16)` | Storage Location Name |
| `SourceStorageBin` |  | |  |  | `CHAR(18)` | Source Storage Bin |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `SupplySourceResponsiblePerson` |  | |  |  | `CHAR(3)` | Person Responsible for Supply Source |
| `SupSrceRespPersnName` |  | | `_ResponsiblePerson` | `MRPControllerName` | `CHAR(18)` | MRP Controller Name |
| `ProductionVersion` |  | |  |  | `CHAR(4)` | Production Version |
| `ProductionVersionText` |  | | `_ProductionVersion` | `ProductionVersionText` | `CHAR(40)` | Short Text for Production Version |
| `_KanbanControlCycle` | | ✓ | | | | |
| `_KnbnCtrlCycProdMstrDta` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplySourcePlant` | `I_Plant` | [0..1] |
| `_ProductText` | `I_ProductText` | [0..1] |
| `_ProductionSupplyAreaText` | `I_ProductionSupplyAreaText` | [0..1] |
| `_KnbnCtrlCycLifeCycStsTxt` | `I_KnbnCtrlCycLifeCycStsTxt` | [0..1] |
| `_KanbanControlCycle` | `I_KanbanControlCycle` | [1..1] |
| `_KnbnCtrlCycProdMstrDta` | `I_KnbnCtrlCycProdMstrDta` | [1..1] |
| `_KanbanControlCycleExtension` | `E_KanbanControlCycle` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_KANBANCONTROLCYCLEOUTPUT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_KANBANCONTROLCYCLEOUTPUT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CKANBANCC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Kanban Control Cycle Output'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'KanbanControlCycle'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [ #OUTPUT_FORM_DATA_PROVIDER ]
@ObjectModel.modelingPattern: #OUTPUT_FORM_DATA_PROVIDER
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #CONSUMPTION

define view C_KanbanControlCycleOutput
  as select from I_KanbanControlCycle
  association [0..1] to I_Plant                    as _SupplySourcePlant           on  $projection.SupplySourcePlant = _SupplySourcePlant.Plant
  association [0..1] to I_ProductText              as _ProductText                 on  $projection.Product   = _ProductText.Product
                                                                                   and _ProductText.Language = $session.system_language
  association [0..1] to I_ProductionSupplyAreaText as _ProductionSupplyAreaText    on  $projection.ProductionSupplyArea   = _ProductionSupplyAreaText.ProductionSupplyArea
                                                                                   and $projection.Plant                  = _ProductionSupplyAreaText.Plant
                                                                                   and _ProductionSupplyAreaText.Language = $session.system_language
  association [0..1] to I_KnbnCtrlCycLifeCycStsTxt as _KnbnCtrlCycLifeCycStsTxt    on  $projection.KanbanCtrlCycleLifeCycleStatus = _KnbnCtrlCycLifeCycStsTxt.KanbanCtrlCycleLifeCycleStatus
                                                                                   and _KnbnCtrlCycLifeCycStsTxt.Language         = $session.system_language
  // Extensibility
  association [1..1] to I_KanbanControlCycle       as _KanbanControlCycle          on  $projection.KanbanControlCycle = _KanbanControlCycle.KanbanControlCycle
  association [1..1] to I_KnbnCtrlCycProdMstrDta   as _KnbnCtrlCycProdMstrDta      on  $projection.KanbanControlCycle = _KnbnCtrlCycProdMstrDta.KanbanControlCycle
  association [0..1] to E_KanbanControlCycle       as _KanbanControlCycleExtension on  $projection.KanbanControlCycle = _KanbanControlCycleExtension.KanbanControlCycle
{
  key KanbanControlCycle,
      Product,
      _ProductText.ProductName,
      Plant,
      _Plant.PlantName,
      ProductionSupplyArea,
      _ProductionSupplyAreaText.ProductionSupplyAreaName,
      StoringPositionName,
      Warehouse,
      StorageType,
      StorageBin,
      DestinationStorageBin, 
      KanbanCtrlCycleLifeCycleStatus,
      _KnbnCtrlCycLifeCycStsTxt.KnbnCtrlCycLifeCycStsText as KnbnCtrlCycLifeCycStsName,
      
      NumberOfKanbanContainers,
      MaxNrOfEmptyKanbanContainers,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      KanbanContainerQuantityInBsUnt,
      BaseUnit,
      NumberOfLoadCarriers, 
      KanbanContainerPackggProduct,
      @Consumption.hidden: true
      PackingInstruction as PackageInstructionInternalID,
      
      InHouseProductionReplnmtStrgy,
      ExtProcurementReplnmtStrgy,
      StockTransferReplnmtStrategy,
      PurchasingOrganization,
      _PurchasingOrganization.PurchasingOrganizationName,
      Supplier,
      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:'BPSupplierName'
      _Supplier.OrganizationBPName1                                                         as SupplierName, // This field is deprecated since it truncates the name of the supplier
      cast(_Supplier.BusinessPartnerName1 as vdm_controlcyclesuppliername preserving type ) as BPSupplierName, // This field replaces the deprecated supplier name
      
      SupplySourcePlant,
      _SupplySourcePlant.PlantName as SupplySourcePlantName,
      PurchaseOutlineAgreement,
      PurchaseOutlineAgreementItem,
      StorageLocation,
      _StorageLocation.StorageLocationName,
      SourceStorageBin,
      WarehouseProcessType, 
      SupplySourceResponsiblePerson,
      _ResponsiblePerson.MRPControllerName as SupSrceRespPersnName, 
      ProductionVersion,
      _ProductionVersion.ProductionVersionText,
      
      // Only for DCL
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      
      // Extensibility
      _KanbanControlCycle,
      _KnbnCtrlCycProdMstrDta
}
```
