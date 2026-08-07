---
name: I_FUNDTYPETEXT
description: "Fundtypetext"
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - text-view
  - text
  - component:PSM
  - lob:Other
---
# I_FUNDTYPETEXT

**Fundtypetext**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `FinancialManagementArea` | ✓ | |  | `fm_area` |  |  |
| `FundType` | ✓ | |  | `fund_type` |  |  |
| `FundTypeDescription` |  | |  | `cast( fund_typet as fmis_fundtypet preserving type )` |  |  |
| `_FinMgmtArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_FundType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFUNDTYPETEXT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Fund Type - Text'

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'FundType',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_FundTypeText
  as select from fmfundtypet
  association        to parent I_FundType         as _FundType    on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                                  and $projection.FundType                = _FundType.FundType
  association [1..1] to I_FinancialManagementArea as _FinMgmtArea on  $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea
  association [0..1] to I_Language                as _Language    on  $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                as Language,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key fm_area                                              as FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_FundType'
      @ObjectModel.text.element: ['FundTypeDescription']
  key fund_type                                            as FundType,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast( fund_typet as fmis_fundtypet preserving type ) as FundTypeDescription,

      _FinMgmtArea,
      _FundType,
      _Language

}
```
