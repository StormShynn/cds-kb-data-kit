---
name: I_FUNDEDPROGRAMSTDVH
description: "Funded Program"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMSTDVH')/$value
semantic_en: "Funded Program"
semantic_vi: "Funded Program — CDS view giao diện dựa trên I_FundedProgram."
keywords:
  - "funded"
  - "program"
  - "financial"
  - "management"
  - "area"
  - "mgmt"
  - "authzn"
  - "validity"
  - "date"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNDEDPROGRAMSTDVH

**Funded Program**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `FundedProgram` | ✓ | |  |  | `CHAR(24)` | Funded Program |
| `FundedPgmFinMgmtAreaForAuthzn` |  | |  |  | `CHAR(4)` | FM Area for Auth Grp for Funded Program |
| `FundedProgramAuthznGrp` |  | |  |  | `CHAR(10)` | Funded Program Authorization Group |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Funded Program Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Funded Program Validity Start Date |
| `_Text` | | ✓ | | | | |
| `_FinMgmtArea` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMSTDVH')/$value)*

```abap
//GENERATED:003:GlBfhyFV7jU}e25o35YSlG
@AbapCatalog.sqlViewName: 'IFP__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FundedProgram'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Funded Program'
define view I_FundedProgramStdVH
  as select from I_FundedProgram
{
       // changes to include default search help
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea,
      @ObjectModel.text.association: '_Text'
       // changes to include default search help
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key FundedProgram,

      _Text,
      @Consumption.hidden: true
      FundedPgmFinMgmtAreaForAuthzn,
      @Consumption.hidden: true
      FundedProgramAuthznGrp,
      @Semantics.businessDate.to: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityEndDate,
      @Semantics.businessDate.from: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityStartDate,

      @Consumption.hidden: true
      _FinMgmtArea
}
```
