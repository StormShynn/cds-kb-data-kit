---
name: I_PRODNRTGMATLPRTASSGMTDEX
description: "Prodn Routing Material PRT Assignment"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGMATLPRTASSGMTDEX')/$value
semantic_en: "Prodn Routing Material PRT Assignment"
semantic_vi: "Prodn Routing Material PRT Assignment — CDS view giao diện dựa trên P_ProdnRoutingMatlPRTAssgmtDEX."
keywords:
  - "prodn"
  - "routing"
  - "material"
  - "prt"
  - "assignment"
  - "bill"
  - "operations"
  - "type"
  - "production"
  - "group"
  - "operation"
  - "internal"
  - "vers"
  - "counter"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - material
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_PRODNRTGMATLPRTASSGMTDEX

**Prodn Routing Material PRT Assignment**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGMATLPRTASSGMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `BOOOperationPRTInternalID` | ✓ | |  |  | `NUMC(8)` | Item Counter for Production Resources/Tools |
| `BOOOperationPRTIntVersCounter` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `ProductionRouting` |  | |  |  | `CHAR(2)` | Group Counter |
| `ProductionRoutingSequence` |  | |  |  | `CHAR(6)` | Sequence |
| `ProductionRoutingOpIntID` |  | |  |  | `NUMC(8)` | Number of the Task List Node |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `ProdnRsceToolItemNumber` |  | |  |  | `NUMC(4)` | Item Number for Production Resource/Tool |
| `ProductionResourceType` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `ProductionResourceInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `ProdnRsceToolControlProfile` |  | |  |  | `CHAR(4)` | Control Profile for Management of Production Resources/Tools |
| `ProdnRsceToolStandardTextCode` |  | |  |  | `CHAR(7)` | Standard Text Key for Production Resources/Tools |
| `ProdnRsceToolText` |  | |  |  | `CHAR(40)` | First Line of Text for Production Resources/Tools |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `ProdnRsceToolStdWorkQtyUnit` |  | |  |  | `UNIT(3)` | Unit for Quantity of Production Resources/Tools |
| `ProdnRsceToolStandardWorkQty` |  | |  |  | `QUAN(9)` | Standard Value for Quantity of Production Resources/Tools |
| `ProdnRsceToolTotQtyCalcFormula` |  | |  |  | `CHAR(6)` | Formula for Calculating the Total Quantity of PRT |
| `ProdnRsceToolUsageQuantityUnit` |  | |  |  | `UNIT(3)` | Usage Value Unit of the Production Resource/Tool |
| `ProdnRsceToolUsageQuantity` |  | |  |  | `QUAN(9)` | Standard Usage Value for Production Resources/Tools |
| `ProdnRsceToolUsageQtyCalcFmla` |  | |  |  | `CHAR(6)` | Formula for Calculating the Total Usage Value of PRT |
| `StartDateOffsetReferenceCode` |  | |  |  | `CHAR(2)` | Reference Date for Start of Production Resource/Tool Usage |
| `StartDateOffsetDurationUnit` |  | |  |  | `UNIT(3)` | Offset Unit for Start of Prodn Resource/Tool Usage |
| `StartDateOffsetDuration` |  | |  |  | `QUAN(5)` | Offset to start of production resource/tool usage |
| `EndDateOffsetReferenceCode` |  | |  |  | `CHAR(2)` | Reference date for end of production resource/tool usage |
| `EndDateOffsetDurationUnit` |  | |  |  | `UNIT(3)` | Offset Unit for End of Production Resource/Tool Usage |
| `EndDateOffsetDuration` |  | |  |  | `QUAN(5)` | Offset to finish of production resource/tool usage |
| `_ProductionRouting` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionRouting` | `I_ProductionRoutingDEX` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGMATLPRTASSGMTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGMATLPRTASSGMTDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BOOOperationPRTIntVersCounter'
@EndUserText.label: 'Prodn Routing Material PRT Assignment'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@Analytics: {
dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
        mapping: [
        {  
          role: #MAIN,
          table: 'PLFH',
          viewElement: [ 'BillOfOperationsType','ProductionRoutingGroup' ,'BOOOperationPRTInternalID','BOOOperationPRTIntVersCounter'],
          tableElement: [ 'PLNTY','PLNNR','PZLFH','ZAEHL' ]        
        
        },
        {
        role:#LEFT_OUTER_TO_ONE_JOIN,
        table:'CRFH',
        viewElement: [ 'ProductionResourceType','ProductionResourceInternalID' ],
        tableElement: [ 'OBJTY','OBJID' ]
        },
        {
        role:#LEFT_OUTER_TO_ONE_JOIN,
        table:'CRVM_A',
        viewElement: [ 'ProductionResourceType','ProductionResourceInternalID' ],
        tableElement: [ 'OBJTY','OBJID' ]
        
        }
        ]
       }
     },
internalName: #LOCAL
}
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingMatlPRTAssgmt'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view entity I_ProdnRtgMatlPRTAssgmtDEX
as select from P_ProdnRoutingMatlPRTAssgmtDEX
inner join crfh on P_ProdnRoutingMatlPRTAssgmtDEX.ProductionResourceType = crfh.objty
                and P_ProdnRoutingMatlPRTAssgmtDEX.ProductionResourceInternalID = crfh.objid
                and P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolCategory = crfh.fhmar

  association [1..1] to I_ProductionRoutingDEX       as _ProductionRouting      on  $projection.BillOfOperationsType   = _ProductionRouting.BillOfOperationsType
                                                                                and $projection.ProductionRoutingGroup = _ProductionRouting.ProductionRoutingGroup
                                                                                and $projection.ProductionRouting      = _ProductionRouting.ProductionRouting

//  association [1..*] to I_ProductionRoutingHeaderDEX as _ProdnRtgHeader         on  $projection.BillOfOperationsType   =  _ProdnRtgHeader.BillOfOperationsType
//                                                                                and $projection.ProductionRoutingGroup =  _ProdnRtgHeader.ProductionRoutingGroup
//                                                                                and $projection.ProductionRouting      =  _ProdnRtgHeader.ProductionRouting
//                                                                                and $projection.ValidityEndDate        >= _ProdnRtgHeader.ValidityStartDate
//                                                                                and $projection.ValidityStartDate      <= _ProdnRtgHeader.ValidityEndDate
//
//  association [0..*] to I_ProdnRoutingOpSubordOpDEX  as _ProdnRoutingOpSubordOp on  $projection.BillOfOperationsType     =  _ProdnRoutingOpSubordOp.BillOfOperationsType
//                                                                                and $projection.ProductionRoutingGroup   =  _ProdnRoutingOpSubordOp.ProductionRoutingGroup
//                                                                                and $projection.ProductionRoutingOpIntID =  _ProdnRoutingOpSubordOp.ProductionRoutingOpIntID
//                                                                                and $projection.ValidityEndDate          >= _ProdnRoutingOpSubordOp.ValidityStartDate
//                                                                                and $projection.ValidityStartDate        <= _ProdnRoutingOpSubordOp.ValidityEndDate

{
@ObjectModel.foreignKey.association: '_BillOfOperationsType'
key P_ProdnRoutingMatlPRTAssgmtDEX.BillOfOperationsType,
@ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
key P_ProdnRoutingMatlPRTAssgmtDEX.ProductionRoutingGroup,
@ObjectModel.foreignKey.association: '_BOOOperationPRTInternalID'
key P_ProdnRoutingMatlPRTAssgmtDEX.BOOOperationPRTInternalID,
key P_ProdnRoutingMatlPRTAssgmtDEX.BOOOperationPRTIntVersCounter,
P_ProdnRoutingMatlPRTAssgmtDEX.ProductionRouting,
P_ProdnRoutingMatlPRTAssgmtDEX.ProductionRoutingSequence,
P_ProdnRoutingMatlPRTAssgmtDEX.ProductionRoutingOpIntID,
P_ProdnRoutingMatlPRTAssgmtDEX.BillOfOperationsVersion,
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolItemNumber,
P_ProdnRoutingMatlPRTAssgmtDEX.ProductionResourceType,
P_ProdnRoutingMatlPRTAssgmtDEX.ProductionResourceInternalID,
P_ProdnRoutingMatlPRTAssgmtDEX.Plant,
P_ProdnRoutingMatlPRTAssgmtDEX.Product,//is this needed?
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolControlProfile,
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolStandardTextCode,
@Semantics.text: true
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolText,
 @Semantics.systemDate.createdAt: true
P_ProdnRoutingMatlPRTAssgmtDEX.CreationDate,
@Semantics.user.createdBy: true
P_ProdnRoutingMatlPRTAssgmtDEX.CreatedByUser,
@Semantics.systemDate.lastChangedAt: true
P_ProdnRoutingMatlPRTAssgmtDEX.LastChangeDate,
@Semantics.user.lastChangedBy: true
P_ProdnRoutingMatlPRTAssgmtDEX.LastChangedByUser,
P_ProdnRoutingMatlPRTAssgmtDEX.ChangeNumber,
P_ProdnRoutingMatlPRTAssgmtDEX.ValidityStartDate,
P_ProdnRoutingMatlPRTAssgmtDEX.ValidityEndDate,
P_ProdnRoutingMatlPRTAssgmtDEX.IsDeleted,
P_ProdnRoutingMatlPRTAssgmtDEX.IsImplicitlyDeleted,
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolStdWorkQtyUnit,
@Semantics.quantity.unitOfMeasure: 'ProdnRsceToolStdWorkQtyUnit'
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolStandardWorkQty,
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolTotQtyCalcFormula,
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolUsageQuantityUnit,
@Semantics.quantity.unitOfMeasure: 'ProdnRsceToolStdWorkQtyUnit'
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolUsageQuantity,
P_ProdnRoutingMatlPRTAssgmtDEX.ProdnRsceToolUsageQtyCalcFmla,
P_ProdnRoutingMatlPRTAssgmtDEX.StartDateOffsetReferenceCode,
P_ProdnRoutingMatlPRTAssgmtDEX.StartDateOffsetDurationUnit,
@Semantics.quantity.unitOfMeasure: 'StartDateOffsetDurationUnit'
P_ProdnRoutingMatlPRTAssgmtDEX.StartDateOffsetDuration,
P_ProdnRoutingMatlPRTAssgmtDEX.EndDateOffsetReferenceCode,
P_ProdnRoutingMatlPRTAssgmtDEX.EndDateOffsetDurationUnit,
@Semantics.quantity.unitOfMeasure: 'EndDateOffsetDurationUnit'
P_ProdnRoutingMatlPRTAssgmtDEX.EndDateOffsetDuration,
/* Associations */
P_ProdnRoutingMatlPRTAssgmtDEX._BillOfOperationsGroup,
P_ProdnRoutingMatlPRTAssgmtDEX._BillOfOperationsType,
P_ProdnRoutingMatlPRTAssgmtDEX._BOOOperationPRTInternalID,
_ProductionRouting
//_ProdnRtgHeader,
//_ProdnRoutingOpSubordOp
}
```
