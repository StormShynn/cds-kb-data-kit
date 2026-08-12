---
name: C_BOOMATLASSGMTCHGSTDEX
description: "Change State of Material Assgmt to BOO"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BOOMATLASSGMTCHGSTDEX')/$value
semantic_en: "Change State of Material Assgmt to BOO"
semantic_vi: "Change State of Material Assgmt to BOO — CDS view tiêu dùng dựa trên I_BOOMaterialAssgmtChangeState."
keywords:
  - "change"
  - "state"
  - "material"
  - "assgmt"
  - "boo"
  - "plant"
  - "bill"
  - "operations"
  - "type"
  - "group"
  - "variant"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - consumption-view
  - lob:manufacturing
  - material
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# C_BOOMATLASSGMTCHGSTDEX

**Change State of Material Assgmt to BOO**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BOOMATLASSGMTCHGSTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `BillOfOperationsVariant` | ✓ | |  |  | `CHAR(2)` | Group Counter |
| `BOOToMaterialInternalID` | ✓ | |  |  | `NUMC(7)` | Counter for Additional Criteria |
| `BOOMatlInternalVersionCounter` | ✓ | |  |  | `NUMC(8)` | Internal counter |
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
| `WBSElementInternalID` |  | |  | `WBSElementInternalID_2` | `NUMC(8)` | WBS Element |
| `BOOSearchText` |  | |  |  | `CHAR(20)` | Search Field for Customer-Specific Task List Selection |
| `MultipleSpecificationObject` |  | |  |  | `CHAR(30)` | Object for Multiple Specifications |
| `MultipleSpecificationObjType` |  | |  |  | `CHAR(2)` | Type of Object for Multiple Specifications |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BOOMaterialAssignment` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BOOMATLASSGMTCHGSTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BOOMATLASSGMTCHGSTDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics: {dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
       automatic : true
       }
     },
internalName: #LOCAL
}
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'BOOMatlInternalVersionCounter'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Change State of Material Assgmt to BOO'
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name:'ProductionRoutingMatlAssgmt'

define view entity C_BOOMatlAssgmtChgStDEX

  as select from I_BOOMaterialAssgmtChangeState
{
      @ObjectModel.foreignKey.association: '_Product'
  key Material,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BOOMaterialAssignment'
  key BOOToMaterialInternalID,
  key BOOMatlInternalVersionCounter,
      ValidityStartDate,
      ValidityEndDate,
      ChangeNumber,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      IsDeleted,
      IsImplicitlyDeleted,
      Supplier,
      Customer,
      SalesOrder,
      SalesOrderItem,
      WBSElementInternalID_2 as WBSElementInternalID,
      BOOSearchText,
      MultipleSpecificationObject,
      MultipleSpecificationObjType,
      BillOfOperationsVersion,
      /* Associations */
      _BillOfOperations,
      _BillOfOperationsGroup,
      _BillOfOperationsType,
      _BOOMaterialAssignment,
      _Plant,
      _Product

}
```
