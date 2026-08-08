---
name: I_FIXEDASSETFORLEDGER
description: "Fixed AssetFORLEDGER"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - fixed-asset
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_FIXEDASSETFORLEDGER

**Fixed AssetFORLEDGER**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `comp_code` |  |  |
| `MasterFixedAsset` | ✓ | |  | `asset_no` |  |  |
| `FixedAsset` | ✓ | |  | `asset_subno` |  |  |
| `Ledger` | ✓ | |  | `ledger` |  |  |
| `AssetCapitalizationDate` |  | |  | `capitalization_date` |  |  |
| `AssetDeactivationDate` |  | |  | `deactivation_date` |  |  |
| `AcquisitionValueDate` |  | |  | `acquisition_date` |  |  |
| `FirstAcquisitionFiscalYear` |  | |  | `acquisition_year` |  |  |
| `FirstAcquisitionFiscalPeriod` |  | |  | `acquisition_period` |  |  |
| `LastRevaluationDate` |  | |  | `last_reval_date` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_AssetValuationForLedger` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [1..1] |
| `_FixedAsset` | `I_FixedAsset` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_AssetValuationForLedger` | `I_AssetValuationForLedger` | [0..*] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETFORLDGR', preserveKey: true}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Fixed Asset for Ledger'
@VDM.viewType: #BASIC
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MASTER,
                modelingPattern: #NONE,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_FixedAssetForLedger
  as select from faat_md_ld

  association [1..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_MasterFixedAsset        as _MasterFixedAsset        on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                              and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [1..1] to I_FixedAsset              as _FixedAsset              on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                              and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                              and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [1..1] to I_Ledger                  as _Ledger                  on  $projection.Ledger = _Ledger.Ledger
  association [0..*] to I_AssetValuationForLedger as _AssetValuationForLedger on  $projection.CompanyCode      = _AssetValuationForLedger.CompanyCode
                                                                              and $projection.MasterFixedAsset = _AssetValuationForLedger.MasterFixedAsset
                                                                              and $projection.FixedAsset       = _AssetValuationForLedger.FixedAsset
                                                                              and $projection.Ledger           = _AssetValuationForLedger.Ledger
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key comp_code           as CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
  key asset_no            as MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
  key asset_subno         as FixedAsset,
      @ObjectModel.foreignKey.association: '_Ledger'
  key ledger              as Ledger,

      capitalization_date as AssetCapitalizationDate,
      deactivation_date   as AssetDeactivationDate,
      acquisition_date    as AcquisitionValueDate,
      acquisition_year    as FirstAcquisitionFiscalYear,
      acquisition_period  as FirstAcquisitionFiscalPeriod,
      last_reval_date     as LastRevaluationDate,

      /* Associations */
      _CompanyCode,
      _MasterFixedAsset,
      _FixedAsset,
      _Ledger,
      _AssetValuationForLedger
}
```
