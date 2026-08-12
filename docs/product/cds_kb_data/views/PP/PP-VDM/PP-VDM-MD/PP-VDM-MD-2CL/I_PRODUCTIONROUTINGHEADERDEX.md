---
name: I_PRODUCTIONROUTINGHEADERDEX
description: "Production Routing Header"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTIONROUTINGHEADERDEX')/$value
semantic_en: "Production Routing Header"
semantic_vi: "Production Routing Header — CDS view giao diện dựa trên P_ProductionRoutingHeaderDEX."
keywords:
  - "production"
  - "routing"
  - "header"
  - "bill"
  - "operations"
  - "type"
  - "group"
  - "internal"
  - "vers"
  - "version"
tags:
  - PP
  - bo:material
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - product
---
# I_PRODUCTIONROUTINGHEADERDEX

**Production Routing Header**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTIONROUTINGHEADERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `ProductionRouting` | ✓ | |  |  | `CHAR(2)` | Group Counter |
| `ProductionRoutingInternalVers` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Work center group with planning function |
| `BillOfOperationsDesc` |  | |  |  | `CHAR(40)` | Routing Description |
| `LongTextLanguageCode` |  | |  |  | `LANG(1)` | Language Key |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `BillOfOperationsUsage` |  | |  |  | `CHAR(3)` | Task List Usage |
| `BillOfOperationsStatus` |  | |  |  | `CHAR(3)` | Status |
| `BillOfOperationsProfile` |  | |  |  | `CHAR(7)` | Profile |
| `ResponsiblePlannerGroup` |  | |  |  | `CHAR(3)` | Responsible Planner Group or Department |
| `MinimumLotSizeQuantity` |  | |  |  | `QUAN(13)` | Minimum Lot Size |
| `MaximumLotSizeQuantity` |  | |  |  | `QUAN(13)` | Maximum Lot Size |
| `BillOfOperationsUnit` |  | |  |  | `UNIT(3)` | Task List Unit of Measure |
| `ReplacedBillOfOperations` |  | |  |  | `CHAR(20)` | Old Number |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Indicator: Delete completely in reorganization run |
| `LineHierarchyInternalID` |  | |  |  | `NUMC(8)` | Object ID |
| `InspSubsetFieldCombination` |  | |  |  | `CHAR(3)` | Identification for the Inspection Point Field Combination |
| `SmplDrawingProcedure` |  | |  |  | `CHAR(8)` | Sample-Drawing Procedure |
| `SmplDrawingProcedureVersion` |  | |  |  | `CHAR(6)` | Version No. of the Sample-Drawing Procedure |
| `InspectionLotDynamicLevel` |  | |  |  | `CHAR(1)` | Level at Which Dynamic Modification Parameters Are Defined |
| `InspLotDynamicRule` |  | |  |  | `CHAR(3)` | Dynamic Modification Rule |
| `InspLotDynamicCriteria` |  | |  |  | `CHAR(10)` | String for Dynamic Modification Criteria (Database Relevant) |
| `MaintenanceStrategy` |  | |  |  | `CHAR(6)` | Maintenance Strategy |
| `InspExternalNumberingOfValues` |  | |  |  | `CHAR(1)` | External Numbering of Units to Be Inspected |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `OperationSystemCondition` |  | |  |  | `CHAR(1)` | System Condition |
| `ReferenceElement` |  | |  |  | `CHAR(40)` | Reference Element PM/PS |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `BillOfOperationIsConfigurable` |  | |  |  | `CHAR(1)` | Configurable Material |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `LastReorganizationDate` |  | |  |  | `DATS(8)` | Archive date |
| `LastUsageDate` |  | |  |  | `DATS(8)` | Date of the Last Call |
| `NumberOfUsages` |  | |  |  | `DEC(4)` | Number of Calls |
| `EffectivityType` |  | |  |  | `CHAR(10)` | Effectivity Type |
| `TaskListIsHierarchical` |  | |  |  | `CHAR(1)` | Sign: Task List Contains Hierarchical Operations |
| `OperationReferenceQuantity` |  | |  |  | `QUAN(13)` | Base Quantity |
| `OperationUnit` |  | |  |  | `UNIT(3)` | Unit of measure for activity |
| `OpQtyToBaseQtyNmrtr` |  | |  |  | `DEC(5)` | Numerator for Converting Routing and Operation UoM |
| `OpQtyToBaseQtyDnmntr` |  | |  |  | `DEC(5)` | Denominator for Converting Routing and Operation UoM |
| `_ProductionRouting` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionRouting` | `I_ProductionRoutingDEX` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTIONROUTINGHEADERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTIONROUTINGHEADERDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ProductionRoutingInternalVers'
@EndUserText.label: 'Production Routing Header'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@Analytics: {
dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
       automatic: true
       }
     },
internalName: #LOCAL
}
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingHeader'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view entity I_ProductionRoutingHeaderDEX
  as select from P_ProductionRoutingHeaderDEX

  association [1..1] to I_ProductionRoutingDEX      as _ProductionRouting  on  $projection.BillOfOperationsType   = _ProductionRouting.BillOfOperationsType
                                                                           and $projection.ProductionRoutingGroup = _ProductionRouting.ProductionRoutingGroup
                                                                           and $projection.ProductionRouting      = _ProductionRouting.ProductionRouting

//  association [0..*] to I_ProdnRoutingMatlAssgmtDEX as _MaterialAssignment on  $projection.BillOfOperationsType   =  _MaterialAssignment.BillOfOperationsType
//                                                                           and $projection.ProductionRoutingGroup =  _MaterialAssignment.ProductionRoutingGroup
//                                                                           and $projection.ProductionRouting      =  _MaterialAssignment.ProductionRouting
//                                                                           and $projection.ValidityEndDate        >= _MaterialAssignment.ValidityStartDate
//                                                                           and $projection.ValidityStartDate      <= _MaterialAssignment.ValidityEndDate

//  association [1..*] to I_ProdnRoutingSequenceDEX   as _Sequence           on  $projection.BillOfOperationsType   =  _Sequence.BillOfOperationsType
//                                                                           and $projection.ProductionRoutingGroup =  _Sequence.ProductionRoutingGroup
//                                                                           and $projection.ProductionRouting      =  _Sequence.ProductionRouting
//                                                                           and $projection.ValidityEndDate        >= _Sequence.ValidityStartDate
//                                                                           and $projection.ValidityStartDate      <= _Sequence.ValidityEndDate
{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key ProductionRoutingGroup,
      @ObjectModel.foreignKey.association: '_ProductionRouting'
  key ProductionRouting,
  key ProductionRoutingInternalVers,
      BillOfOperationsVersion,
      IsDeleted,
      IsImplicitlyDeleted,
      WorkCenterTypeCode,
      WorkCenterInternalID,
      @Semantics.text: true
      BillOfOperationsDesc,
      LongTextLanguageCode,
      Plant,
      BillOfOperationsUsage,
      BillOfOperationsStatus,
      BillOfOperationsProfile,
      ResponsiblePlannerGroup,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MaximumLotSizeQuantity,
      BillOfOperationsUnit,
      ReplacedBillOfOperations,
      IsMarkedForDeletion,
      LineHierarchyInternalID,
      InspSubsetFieldCombination,
      SmplDrawingProcedure,
      SmplDrawingProcedureVersion,
      InspectionLotDynamicLevel,
      InspLotDynamicRule,
      InspLotDynamicCriteria,
      MaintenanceStrategy,
      InspExternalNumberingOfValues,
      MaintenancePlanningPlant,
      Assembly,
      OperationSystemCondition,
      ReferenceElement,
      ControllingArea,
      WBSElementInternalID,
      BillOfOperationIsConfigurable,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      ChangedDateTime,
      ChangeNumber,
      ValidityStartDate,
      ValidityEndDate,
      LastReorganizationDate,
      LastUsageDate,
      NumberOfUsages,
      EffectivityType,
      TaskListIsHierarchical,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OperationReferenceQuantity,
      OperationUnit,
      OpQtyToBaseQtyNmrtr,
      OpQtyToBaseQtyDnmntr,
      /* Associations */
      _ProductionRouting,
      _BillOfOperationsGroup,
      _BillOfOperationsType
//      _Sequence,
//      _MaterialAssignment
}
```
