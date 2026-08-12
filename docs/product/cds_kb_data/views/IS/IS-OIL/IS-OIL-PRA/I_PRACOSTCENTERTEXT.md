---
name: I_PRACOSTCENTERTEXT
description: "PRA Cost Center - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTERTEXT')/$value
semantic_en: "PRA Cost Center - Text"
semantic_vi: "PRA Cost Center - Text — CDS view giao diện dựa trên I_CostCenterText."
keywords:
  - "pra"
  - "cost"
  - "center"
  - "text"
  - "company"
  - "code"
  - "validity"
  - "date"
  - "language"
  - "controlling"
  - "area"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRACOSTCENTERTEXT

**PRA Cost Center - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTERTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` | ✓ | |  |  | `CHAR(10)` | Cost Center |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `CostCenterDescription` |  | |  |  | `CHAR(40)` | Description of Cost Center |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTERTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTERTEXT')/$value)*

```abap
@EndUserText.label: 'PRA Cost Center - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IPVCOSTCENTERT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CostCenter'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

// PRA Cost Center references do not use controlling area, rather it is derived from company
// therefore we create this view to expose the text based on a key component of company code

define view I_PRACostCenterText
  as select from I_CostCenterText
    inner join   I_CompanyCode on I_CompanyCode.ControllingArea = I_CostCenterText.ControllingArea

  association [0..1] to I_CompanyCode     as _CompanyCode     on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea as _ControllingArea on $projection.ControllingArea = _ControllingArea.ControllingArea
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_CompanyCode.CompanyCode        as CompanyCode,
  key CostCenter,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
      @Semantics.language: true
  key I_CostCenterText.Language        as Language,      
      
      @ObjectModel.foreignKey.association: '_ControllingArea'
      I_CostCenterText.ControllingArea as ControllingArea,

      @Semantics.text: true
      CostCenterName,

      @Semantics.text: true
      CostCenterDescription,
      
      @Semantics.businessDate.from: true
      ValidityStartDate,

      _CompanyCode,
      _ControllingArea
};
```
