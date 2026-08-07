---
name: I_EXTENDEDWHLDGTAXCODE
description: Extendedwhldgtaxcode
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - tax
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_EXTENDEDWHLDGTAXCODE

**Extendedwhldgtaxcode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `WithholdingTaxType` | ✓ | |  | `witht` |  |  |
| `WithholdingTaxCode` | ✓ | |  | `wt_withcd` |  |  |
| `OfficialWhldgTaxCode` |  | |  | `qscod` |  |  |
| `WhldgTaxRelevantPercent` |  | |  | `qproz` |  |  |
| `WithholdingTaxPercent` |  | |  | `qsatz` |  |  |
| `WhldgTaxCalcFormulaIsUsed` |  | |  | `xqfor` |  |  |
| `Region` |  | |  | `regio` |  |  |
| `ProvincialTaxCode` |  | |  | `fprcd` |  |  |
| `WithholdingTaxIncomeType` |  | |  | `qekar` |  |  |
| `WithholdingTaxPostingRule` |  | |  | `wt_posin` |  |  |
| `WhldgTaxReferenceText` |  | |  | `withcd2` |  |  |
| `_Country` | | ✓ | | | | |
| `_CodeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1] |
| `_CodeText` | `I_ExtendedWhldgTaxCodeText` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIEWHTAXCODE'
@EndUserText.label: 'Extended Withholding Tax Code'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #CUBE }
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions:true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities: #CDS_MODELING_ASSOCIATION_TARGET
@Metadata.ignorePropagatedAnnotations:true

define view I_Extendedwhldgtaxcode
  as select from t059z

  association [1]    to I_Country                  as _Country  on  $projection.Country = _Country.Country

  association [1..*] to I_ExtendedWhldgTaxCodeText as _CodeText on  $projection.WithholdingTaxType = _CodeText.WithholdingTaxType
                                                                and $projection.WithholdingTaxCode = _CodeText.WithholdingTaxCode
                                                                and $projection.Country            = _CodeText.CountryCode

{

  key land1     as Country,
  key witht     as WithholdingTaxType,
  key wt_withcd as WithholdingTaxCode,
      qscod     as OfficialWhldgTaxCode,
      qproz     as WhldgTaxRelevantPercent,
      qsatz     as WithholdingTaxPercent,
      xqfor     as WhldgTaxCalcFormulaIsUsed,
      regio     as Region,
      fprcd     as ProvincialTaxCode,
      qekar     as WithholdingTaxIncomeType,
      wt_posin  as WithholdingTaxPostingRule,
      withcd2   as WhldgTaxReferenceText,

      _Country,
      _CodeText

}
```
