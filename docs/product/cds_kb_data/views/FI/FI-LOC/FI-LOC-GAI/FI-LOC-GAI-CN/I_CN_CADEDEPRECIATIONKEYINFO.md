---
name: I_CN_CADEDEPRECIATIONKEYINFO
description: "CN Cadedepreciationkeyinfo"
app_component: FI-LOC-GAI-CN
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
  - FI-LOC
  - FI-LOC-GAI
  - interface-view
  - component:FI-LOC-GAI-CN
  - lob:Finance
---
# I_CN_CADEDEPRECIATIONKEYINFO

**CN Cadedepreciationkeyinfo**

| Property | Value |
|---|---|
| App Component | `FI-LOC-GAI-CN` |
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
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `CN_CADENatlStdRelVersion` | ✓ | |  | `cade_natl_std_rel_ver` |  |  |
| `ChartOfDepreciation` | ✓ | |  | `afapl` |  |  |
| `DepreciationKey` | ✓ | |  | `afasl` |  |  |
| `CN_CADEDepreciationFormulaText` |  | |  | `cade_depr_fmla` |  |  |
| `DepreciationKeyName` |  | | `_DeprKeyText` | `DepreciationKeyName` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeprKeyText` | `I_DepreciationKeyText` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ICADEDEPRFMLA'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@EndUserText.label: 'CN Depreciation Key Information for CADE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_CN_CADEDepreciationKeyInfo
  as select from cade_deprfmla
  association [0..1] to I_DepreciationKeyText as _DeprKeyText on _DeprKeyText.ChartOfDepreciation = cade_deprfmla.afapl
                                                            and _DeprKeyText.DepreciationKey = cade_deprfmla.afasl
                                                            and _DeprKeyText.Language = $session.system_language
{
  key bukrs                 as CompanyCode,
  key cade_natl_std_rel_ver as CN_CADENatlStdRelVersion,
  key afapl                 as ChartOfDepreciation,
  key afasl                 as DepreciationKey,
      cade_depr_fmla        as CN_CADEDepreciationFormulaText,
      _DeprKeyText.DepreciationKeyName

}
```
