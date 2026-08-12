---
name: I_CN_CADEEXCHANGERATE
description: "CN CADEExchange Rate"
app_component: FI-LOC-GAI-CN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-GAI
  - interface-view
  - exchange-rate
  - component:FI-LOC-GAI-CN
  - lob:Finance
---
# I_CN_CADEEXCHANGERATE

**CN CADEExchange Rate**

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
| `ExchangeRateType` | ✓ | |  | `kurst` |  |  |
| `CN_CADEExchangeRateTypeName` |  | |  | `cade_er_desc` |  |  |
| `ExchangeRateTypeName` |  | | `_Text` | `curvw` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `tcurw` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ICADEEXCHRATE'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'CN Exchange Rate for CADE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_CN_CADEExchangeRate
  as select from cade_exchrate as ExchangeRate
  association [0..1] to tcurw as _Text on ExchangeRate.kurst = _Text.kurst
                                and _Text.spras = $session.system_language
{
  key ExchangeRate.bukrs                 as CompanyCode,
  key ExchangeRate.cade_natl_std_rel_ver as CN_CADENatlStdRelVersion,
  key ExchangeRate.kurst                 as ExchangeRateType,
      ExchangeRate.cade_er_desc          as CN_CADEExchangeRateTypeName,
      _Text.curvw                         as ExchangeRateTypeName
}
```
