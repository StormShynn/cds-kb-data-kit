---
name: I_TREASURYPORTFOLIOTEXT
description: Treasuryportfoliotext
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
  - text-view
  - text
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYPORTFOLIOTEXT

**Treasuryportfoliotext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |
| `Portfolio` | ✓ | |  | `rportb` |
| `Language` | ✓ | |  | `spras` |
| `PortfolioName` |  | |  | `cast(TreasuryPortfolioText.xportb as ftr_gen_portfolio_name preserving type)` |
| `_TreasuryPortfolio` | | ✓ | | |
| `_Language` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TreasuryPortfolio` | `I_TreasuryPortfolio` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IPORTFOLIOTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Portfolio - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Portfolio'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory:  #M
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'TreasuryPortfolioText'
 
define view I_TreasuryPortfolioText
  as select from twpob_t as TreasuryPortfolioText

  association [0..1] to I_TreasuryPortfolio as _TreasuryPortfolio on  $projection.Portfolio   = _TreasuryPortfolio.Portfolio
                                                                 and  $projection.CompanyCode = _TreasuryPortfolio.CompanyCode
  association [0..1] to I_Language          as _Language          on  $projection.Language    = _Language.Language
  association        to I_CompanyCode       as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode

{
      //--[ GENERATED:012:GlBfhyJl7kY4pGd}um{aL0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  TreasuryPortfolioText.bukrs     as CompanyCode,
       @ObjectModel.foreignKey.association: '_TreasuryPortfolio'
  key  TreasuryPortfolioText.rportb    as Portfolio,

       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
   key TreasuryPortfolioText.spras     as Language,

       @Semantics.text: true
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #LOW
       cast(TreasuryPortfolioText.xportb    as ftr_gen_portfolio_name preserving type) as PortfolioName,

       _TreasuryPortfolio,
       _Language,
       _CompanyCode
}
```
