---
name: I_COMMITMENTITEMSTDVH
description: "Commitment Item"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMSTDVH')/$value
semantic_en: "Commitment Item"
semantic_vi: "Commitment Item — CDS view giao diện dựa trên I_CommitmentItem."
keywords:
  - "commitment"
  - "item"
  - "financial"
  - "management"
  - "area"
  - "mgmt"
  - "fiscal"
  - "year"
  - "cmtmt"
  - "authzn"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_COMMITMENTITEMSTDVH

**Commitment Item**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `FinMgmtAreaFiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year for Financial Management Area |
| `CommitmentItem` | ✓ | |  |  | `CHAR(24)` | Commitment Item |
| `CmtmtItemFinMgmtAreaForAuthzn` |  | |  |  | `CHAR(4)` | FM Area for Auth Grp for Commitment Item |
| `CommitmentItemAuthznGrp` |  | |  |  | `CHAR(10)` | Authorization Group for Commitment Item |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Commitment Item Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Commitment Item Validity Start Date |
| `_FinMgmtArea` | | ✓ | | | | |
| `_FiscalYearForFinMgmtArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMSTDVH')/$value)*

```abap
//GENERATED:003:GlBfhyFV7jU}e25o35YSlG
@AbapCatalog.sqlViewName: 'ICI__VH2'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'CommitmentItem'

@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Commitment Item'
define view I_CommitmentItemStdVH
  as select from I_CommitmentItem
{
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_FiscalYearForFinMgmtArea'
  key FinMgmtAreaFiscalYear,
//      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key CommitmentItem,

      
      @Consumption.hidden: true
      CmtmtItemFinMgmtAreaForAuthzn,
      @Consumption.hidden: true
      CommitmentItemAuthznGrp,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      _Text[1:Language = $session.system_language].CommitmentItemName,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }    
      _Text[1:Language = $session.system_language].CommitmentItemDescription,      
      @Semantics.businessDate.to: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityEndDate,
      @Semantics.businessDate.from: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityStartDate,

      @Consumption.hidden: true
      _FinMgmtArea,
      @Consumption.hidden: true
      _FiscalYearForFinMgmtArea,
      
      _Text
}
```
