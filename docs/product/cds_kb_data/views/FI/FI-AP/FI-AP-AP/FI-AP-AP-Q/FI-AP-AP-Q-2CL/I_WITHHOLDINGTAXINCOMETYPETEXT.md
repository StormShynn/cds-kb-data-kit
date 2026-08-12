---
name: I_WITHHOLDINGTAXINCOMETYPETEXT
description: "Withholdingtaxincometypetext"
app_component: FI-AP-AP-Q-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-AP
  - interface-view
  - text-view
  - tax
  - text
  - component:FI-AP-AP-Q-2CL
  - lob:Finance
---
# I_WITHHOLDINGTAXINCOMETYPETEXT

**Withholdingtaxincometypetext**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-Q-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `Country` | ✓ | |  | `land1` |  |  |
| `WithholdingTaxIncomeType` | ✓ | |  | `qekar` |  |  |
| `WithholdingTaxIncomeTypeName` |  | |  | `eatxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_IncomeType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_IncomeType` | `I_WithholdingTaxIncomeType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWINCOMETT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Withholding Tax Income Type - Txt'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
define view I_WithholdingTaxIncomeTypeText
  as select from t059g

  association [0..1] to I_Language                 as _Language   on  $projection.Language = _Language.Language
  association [0..1] to I_Country                  as _Country    on  $projection.Country = _Country.Country
  association [0..1] to I_WithholdingTaxIncomeType as _IncomeType on  $projection.WithholdingTaxIncomeType = _IncomeType.WithholdingTaxIncomeType
                                                                  and $projection.Country                  = _IncomeType.Country
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key t059g.spras as Language,
      @ObjectModel.foreignKey.association: '_Country'
  key t059g.land1 as Country,
      @ObjectModel.foreignKey.association: '_IncomeType'
  key t059g.qekar as WithholdingTaxIncomeType,

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      t059g.eatxt as WithholdingTaxIncomeTypeName,

      _Language,
      _Country,
      _IncomeType
}
```
