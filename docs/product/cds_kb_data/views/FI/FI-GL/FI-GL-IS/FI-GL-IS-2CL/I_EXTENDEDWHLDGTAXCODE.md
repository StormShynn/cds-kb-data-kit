---
name: I_EXTENDEDWHLDGTAXCODE
description: "Extendedwhldgtaxcode"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
