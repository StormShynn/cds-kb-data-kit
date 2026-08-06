---
name: I_WITHHOLDINGTAXCODEVH
description: Withholdingtaxcodevh
app_component: FI-AP-AP-Q-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-AP
  - interface-view
  - value-help
  - tax
  - component:FI-AP-AP-Q-2CL
  - lob:Finance
---
# I_WITHHOLDINGTAXCODEVH

**Withholdingtaxcodevh**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-Q-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Country` | `Country` |
| key `WithholdingTaxType` | `WithholdingTaxType` |
| key `WithholdingTaxCode` | `WithholdingTaxCode` |
| `OfficialWhldgTaxCode` | `OfficialWhldgTaxCode` |
| `WhldgTaxRelevantPercent` | `WhldgTaxRelevantPercent` |
| `WithholdingTaxPercent` | `WithholdingTaxPercent` |
| `WhldgTaxCalcFormulaIsUsed` | `WhldgTaxCalcFormulaIsUsed` |
| `Region` | `Region` |
| `ProvincialTaxCode` | `ProvincialTaxCode` |
| `WithholdingTaxIncomeType` | `WithholdingTaxIncomeType` |
| `WithholdingTaxPostingRule` | `WithholdingTaxPostingRule` |
| `WhldgTaxReferenceText` | `WhldgTaxReferenceText` |
| `_Country` | *Association* |
| `_TaxCodeText` | *Association* |
| `_RegionText` | *Association* |
| `_IncomeTypeText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1] |
| `_TaxCodeText` | `I_ExtendedWhldgTaxCodeText` | [1..*] |
| `_RegionText` | `I_RegionText` | [1..1] |
| `_IncomeTypeText` | `I_WithholdingTaxIncomeTypeText` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWHTCODEVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extended Withholding Tax Code'
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: #VALUE_HELP_PROVIDER
@Consumption.ranked: true
@ObjectModel.representativeKey: 'WithholdingTaxCode'
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
define view I_WithholdingTaxCodeVH
  as select from I_Extendedwhldgtaxcode
  association [1]    to I_Country                      as _Country        on  $projection.Country = _Country.Country

  association [1..*] to I_ExtendedWhldgTaxCodeText     as _TaxCodeText    on  $projection.WithholdingTaxType = _TaxCodeText.WithholdingTaxType
                                                                          and $projection.WithholdingTaxCode = _TaxCodeText.WithholdingTaxCode
                                                                          and $projection.Country            = _TaxCodeText.CountryCode
  //  association [1..1] to I_OfficialWithholdingTaxKey    as _TaxKey         on  $projection.Country              = _TaxKey.Country
  //                                                                          and $projection.OfficialWhldgTaxCode = _TaxKey.OfficialWhldgTaxCode
  association [1..1] to I_RegionText                   as _RegionText     on  $projection.Country  = _RegionText.Country
                                                                          and $projection.Region   = _RegionText.Region
                                                                          and _RegionText.Language = $session.system_language
  association [1..1] to I_WithholdingTaxIncomeTypeText as _IncomeTypeText on  $projection.Country                  = _IncomeTypeText.Country
                                                                          and $projection.WithholdingTaxIncomeType = _IncomeTypeText.WithholdingTaxIncomeType
                                                                          and _IncomeTypeText.Language             = $session.system_language
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_Country'
  key Country,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
  key WithholdingTaxType,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @ObjectModel.text.association: '_TaxCodeText'
  key WithholdingTaxCode,
      //      @Semantics.text: true
      //      @Search.defaultSearchElement: true
      //      @Search.fuzzinessThreshold: 0.7
      //      @Search.ranking: #LOW
      //      @ObjectModel.foreignKey.association: '_TaxKey'
      OfficialWhldgTaxCode,
      WhldgTaxRelevantPercent,
      WithholdingTaxPercent,
      WhldgTaxCalcFormulaIsUsed,
      @ObjectModel.text.association: '_RegionText'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      Region,
      ProvincialTaxCode,
      @ObjectModel.text.association: '_IncomeTypeText'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      WithholdingTaxIncomeType,
      WithholdingTaxPostingRule,
      WhldgTaxReferenceText,

      _Country,
      _TaxCodeText,
      //     _TaxKey,
      _RegionText,
      _IncomeTypeText
}
```
