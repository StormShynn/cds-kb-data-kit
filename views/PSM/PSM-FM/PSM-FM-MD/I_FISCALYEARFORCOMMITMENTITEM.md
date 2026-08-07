---
name: I_FISCALYEARFORCOMMITMENTITEM
description: Fiscalyearforcommitmentitem
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-MD
  - interface-view
  - item-level
  - component:PSM-FM-MD
  - lob:Other
---
# I_FISCALYEARFORCOMMITMENTITEM

**Fiscalyearforcommitmentitem**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  |  |  |
| `CommitmentItemFiscalYear` | ✓ | |  |  |  |  |
| `_FinMgmtArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFY4CMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fiscal years of Commitment Item'
@ObjectModel:  {
  representativeKey: 'CommitmentItemFiscalYear',
  usageType:     {
      sizeCategory: #S,
      dataClass:  #CUSTOMIZING,
      serviceQuality: #B
    },
  supportedCapabilities: [#ANALYTICAL_DIMENSION,#ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@Analytics.internalName:#LOCAL 
@VDM.viewType: #COMPOSITE
@Analytics.dataExtraction.enabled:true
@Metadata.allowExtensions:true
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@Metadata.ignorePropagatedAnnotations:true
define view I_FiscalYearForCommitmentItem
  as select from I_FiscalYearForCmtmtItemBsc as FM

  association [1..1] to I_FinancialManagementArea as _FinMgmtArea on $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea

{
      @ObjectModel.foreignKey.association :'_FinMgmtArea'
  key FinancialManagementArea,
  key CommitmentItemFiscalYear,
      _FinMgmtArea

}
group by
  FinancialManagementArea,
  CommitmentItemFiscalYear
```
