---
name: I_TREASURYPORTFOLIO
description: "Treasuryportfolio"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYPORTFOLIO

**Treasuryportfolio**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `Portfolio` | ✓ | |  | `rportb` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_TreasuryPortfolioText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_TreasuryPortfolioText` | `I_TreasuryPortfolioText` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true // only if required by ATC check
@AbapCatalog.sqlViewName: 'IPORTFOLIO'
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled : true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Portfolio'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'Portfolio'
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'TreasuryPortfolio'

define view I_TreasuryPortfolio
  as select from twpob
  association        to I_CompanyCode           as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_TreasuryPortfolioText as _TreasuryPortfolioText on  $projection.Portfolio   = _TreasuryPortfolioText.Portfolio
                                                                          and $projection.CompanyCode = _TreasuryPortfolioText.CompanyCode
{
      //twpob
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @UI.lineItem:[{ position : 2 }]
  key bukrs  as CompanyCode,
      @ObjectModel.text.association: '_TreasuryPortfolioText'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @UI.lineItem:[{ position : 1 }]
  key rportb as Portfolio,

      //      vvglied,
      _CompanyCode,
      _TreasuryPortfolioText

}
```
