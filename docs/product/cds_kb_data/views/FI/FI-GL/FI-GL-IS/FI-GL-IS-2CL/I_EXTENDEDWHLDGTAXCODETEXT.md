---
name: I_EXTENDEDWHLDGTAXCODETEXT
description: "Extendedwhldgtaxcodetext"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
