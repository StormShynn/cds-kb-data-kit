---
name: I_CN_CADEDEPRECIATIONKEYINFO
description: "CN Cadedepreciationkeyinfo"
app_component: FI-LOC-GAI-CN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
