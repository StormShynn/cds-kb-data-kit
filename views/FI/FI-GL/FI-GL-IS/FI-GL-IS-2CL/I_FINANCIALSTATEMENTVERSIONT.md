---
name: I_FINANCIALSTATEMENTVERSIONT
description: "Financialstatementversiont"
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
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_FINANCIALSTATEMENTVERSIONT

**Financialstatementversiont**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementVariant` | ✓ | |  | `versn` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `FinancialStatementVariantName` |  | |  | `vstxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFSVERSNTEXT'
@EndUserText.label: 'Financial Statement Version - Text'
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'FinancialStatementVariant'
@ObjectModel.usageType: {
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL
}
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]
define view I_FinancialStatementVersionT
  as select from t011t
  association [1] to I_Language as _Language on $projection.Language = _Language.Language

{

  key versn as FinancialStatementVariant,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,

      @Semantics.text: true
      vstxt as FinancialStatementVariantName,

      _Language
}
```
