---
name: I_PRODNROUTINGMATLASSGMTDEX
description: "Production Routing Material Assignment"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGMATLASSGMTDEX')/$value
semantic_en: "Production Routing Material Assignment"
semantic_vi: "Production Routing Material Assignment — CDS view giao diện dựa trên P_ProdnRoutingMatlAssgmtDEX."
keywords:
  - "production"
  - "routing"
  - "material"
  - "assignment"
  - "product"
  - "plant"
  - "bill"
  - "operations"
  - "type"
  - "group"
tags:
  - PP
  - bo:material
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - material
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - product
---
# I_PRODNROUTINGMATLASSGMTDEX

**Production Routing Material Assignment**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGMATLASSGMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `ProductionRouting` | ✓ | |  |  | `CHAR(2)` | Group Counter |
| `ProductionRoutingMatlAssgmt` | ✓ | |  |  | `NUMC(7)` | Counter for Additional Criteria |
| `ProductionRtgMatlAssgmtIntVers` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `Customer` |  | |  |  | `CHAR(10)` | Account number of customer |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `_ProductionRouting` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BOOMaterialAssignment` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionRouting` | `I_ProductionRoutingDEX` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGMATLASSGMTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGMATLASSGMTDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ProductionRtgMatlAssgmtIntVers'
@EndUserText.label: 'Production Routing Material Assignment'
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
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingMatlAssgmt'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view entity I_ProdnRoutingMatlAssgmtDEX
  as select from P_ProdnRoutingMatlAssgmtDEX
//  association [1..*] to I_ProductionRoutingHeaderDEX as _ProdnRtgHeader    on  $projection.BillOfOperationsType   =  _ProdnRtgHeader.BillOfOperationsType
//                                                                           and $projection.ProductionRoutingGroup =  _ProdnRtgHeader.ProductionRoutingGroup
//                                                                           and $projection.ProductionRouting      =  _ProdnRtgHeader.ProductionRouting
//                                                                           and $projection.ValidityEndDate        >= _ProdnRtgHeader.ValidityStartDate
//                                                                           and $projection.ValidityStartDate      <= _ProdnRtgHeader.ValidityEndDate


  association [1..1] to I_ProductionRoutingDEX       as _ProductionRouting on  $projection.BillOfOperationsType   = _ProductionRouting.BillOfOperationsType
                                                                           and $projection.ProductionRoutingGroup = _ProductionRouting.ProductionRoutingGroup
                                                                           and $projection.ProductionRouting      = _ProductionRouting.ProductionRouting

{
      @ObjectModel.foreignKey.association: '_Product'
  key Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key ProductionRoutingGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key ProductionRouting,
      @ObjectModel.foreignKey.association: '_BOOMaterialAssignment'
  key ProductionRoutingMatlAssgmt,
  key ProductionRtgMatlAssgmtIntVers,
      ValidityStartDate,
      ValidityEndDate,
      ChangeNumber,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      IsDeleted,
      IsImplicitlyDeleted,
      Supplier,
      Customer,
      SalesOrder,
      SalesOrderItem,
      /* Associations */
      _BillOfOperations,
      _BillOfOperationsGroup,
      _BillOfOperationsType,
      _BOOMaterialAssignment,
      _Plant,
      _Product,
//      _ProdnRtgHeader,
      _ProductionRouting
}
```
