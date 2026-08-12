---
name: I_PRACOSTCENTER
description: "PRA Cost Center"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTER')/$value
semantic_en: "PRA Cost Center"
semantic_vi: "PRA Cost Center — CDS view giao diện dựa trên I_CostCenter."
keywords:
  - "pra"
  - "cost"
  - "center"
  - "company"
  - "code"
  - "validity"
  - "date"
  - "controlling"
  - "area"
  - "start"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRACOSTCENTER

**PRA Cost Center**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` | ✓ | |  |  | `CHAR(10)` | Cost Center |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCtrResponsiblePersonName` |  | |  |  | `CHAR(20)` | Person Responsible |
| `CostCtrResponsibleUser` |  | |  |  | `CHAR(12)` | User Responsible |
| `CostCenterCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Department` |  | |  |  | `CHAR(12)` | Department |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CostCenterHierarchyNode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRACostCenterText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTER')/$value)*

```abap
@EndUserText.label: 'PRA Cost Center'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IPVCOSTCENTER'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'CostCenter'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'CostCenter'
// This view provides cost center foreign key lookups where controlling area is not passed, rather company
// calling it a basic view so that it can be used in associations

define view I_PRACostCenter
  as select from I_CostCenter
  association [0..*] to I_PRACostCenterText as _Text                on  $projection.CompanyCode     = _Text.CompanyCode
                                                                    and $projection.CostCenter      = _Text.CostCenter
                                                                    and $projection.ValidityEndDate = _Text.ValidityEndDate
  association[1]    to I_ControllingArea    as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea
                                                              
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_CostCenterHierarchyNode'
  key CostCenter,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
  
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @ObjectModel.foreignKey.association: '_BusinessArea' 
      BusinessArea,
      CostCtrResponsiblePersonName,
      CostCtrResponsibleUser,
      @Semantics.currencyCode: true
      CostCenterCurrency,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      Department,
      CostingSheet,
      
      /* Associations */
      _BusinessArea,
      _CompanyCode,
      _ControllingArea,
      _CostCenterHierarchyNode,
      _Currency,
      _ProfitCenter,
      _Text
}
```
