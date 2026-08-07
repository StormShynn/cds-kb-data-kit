---
name: I_EXTENDEDWHLDGTAXCODETEXT
description: Extendedwhldgtaxcodetext
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
  - text-view
  - tax
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_EXTENDEDWHLDGTAXCODETEXT

**Extendedwhldgtaxcodetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WithholdingTaxCode` | ✓ | |  | `wt_withcd` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CountryCode` | ✓ | |  | `land1` |  |  |
| `WithholdingTaxType` | ✓ | |  | `witht` |  |  |
| `WhldgTaxCodeName` |  | |  | `text40` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIEWHTAXCODET'
@EndUserText.label: 'Extended Withholding Tax Code - Text'
@VDM.viewType: #BASIC
@Analytics.dataCategory: #CUBE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.supportedCapabilities: #CDS_MODELING_ASSOCIATION_TARGET
@Metadata.ignorePropagatedAnnotations:true

define view I_ExtendedWhldgTaxCodeText
  as select from t059zt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{

  key t059zt.wt_withcd as WithholdingTaxCode,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key t059zt.spras     as Language,

  key t059zt.land1     as CountryCode,
  key t059zt.witht     as WithholdingTaxType,

      @Semantics.text
      t059zt.text40    as WhldgTaxCodeName,

      _Language

}
```
