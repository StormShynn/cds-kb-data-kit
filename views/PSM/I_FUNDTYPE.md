---
name: I_FUNDTYPE
description: Fundtype
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - component:PSM
  - lob:Other
---
# I_FUNDTYPE

**Fundtype**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FinancialManagementArea` | `fm_area` |
| key `FundType` | `fund_type` |
| `GranteeMgmtFundType` | `gm_fundtype` |
| `_FinMgmtArea` | *Association* |
| `_GranteeMgmtFundType` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |
| `_GranteeMgmtFundType` | `I_GranteeMgmtFundType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFUNDTYPE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Fund Type'

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: true,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     representativeKey: 'FundType',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Metadata.allowExtensions: true
@ObjectModel.sapObjectNodeType.name: 'FundType'

define root view I_FundType
  as select from fmfundtype

  association [1..1] to I_FinancialManagementArea as _FinMgmtArea         on $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea
  composition [0..*] of I_FundTypeText            as _Text
  association [0..1] to I_GranteeMgmtFundType     as _GranteeMgmtFundType on $projection.GranteeMgmtFundType = _GranteeMgmtFundType.GranteeMgmtFundType

{

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
      @Search.defaultSearchElement: true
  key fm_area     as FinancialManagementArea,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key fund_type   as FundType,
      @ObjectModel.foreignKey.association: '_GranteeMgmtFundType'
      @Search.defaultSearchElement: true
      gm_fundtype as GranteeMgmtFundType,

      _FinMgmtArea,
      _Text,
      _GranteeMgmtFundType

}
```
