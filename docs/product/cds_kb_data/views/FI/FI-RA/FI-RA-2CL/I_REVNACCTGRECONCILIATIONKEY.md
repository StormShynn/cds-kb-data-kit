---
name: I_REVNACCTGRECONCILIATIONKEY
description: "Revnacctgreconciliationkey"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - component:FI-RA-2CL
  - lob:Finance
---
# I_REVNACCTGRECONCILIATIONKEY

**Revnacctgreconciliationkey**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `company_code` |  |  |
| `AccountingPrinciple` | ✓ | |  | `acct_principle` |  |  |
| `RevenueAccountingContract` | ✓ | |  | `cast(contract_id as farr_cds_contract_id preserving type)` |  |  |
| `RevnAcctgReconciliationKey` | ✓ | |  | `recon_key` |  |  |
| `FiscalYearPeriod` |  | |  | `substring(recon_key, 1, 7)` |  |  |
| `FiscalYear` |  | |  | `gjahr` |  |  |
| `FiscalPeriod` |  | |  | `poper` |  |  |
| `RevnAcctgRecnclnKeyStatus` |  | |  | `status` |  |  |
| `RAProspectiveSplitDate` |  | |  | `pro_split_date` |  |  |
| `RARecnclnKeyRunID` |  | |  | `runid` |  |  |
| `RAParallelizationSubareaValue` | ✓ | |  | `keypp` |  |  |
| `RARecnclnKeyCreatedByUser` |  | |  | `created_by` |  |  |
| `RARecnclnKeyCreationDateTime` |  | |  | `created_on` |  |  |
| `RARecnclnKeyChangedByUser` |  | |  | `last_changed_by` |  |  |
| `RARecnclnKeyLastChangeDateTime` |  | |  | `last_changed_on` |  |  |
| `RAContrLiabilityAssetIsCalcd` |  | |  | `liab_asset_flag` |  |  |
| `ContrLiabilityAssetValueDate` |  | |  | `value_date` |  |  |
| `OriginalReferenceDocumentType` |  | |  | `awtyp` |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  | `awsys` |  |  |
| `ReferenceDocumentContext` |  | |  | `aworg` |  |  |
| `ReferenceDocument` |  | |  | `awref` |  |  |
| `_RevenueAccountingContract` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_RAReconciliationKeyStatus` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RevenueAccountingContract` | `I_RevenueAccountingContract` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [1..1] |
| `_RAReconciliationKeyStatus` | `I_RAReconciliationKeyStatus` | [1..1] |
| `_ChangedByUser` | `I_User` | [1..1] |
| `_CreatedByUser` | `I_User` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IRARCNCLTNKEY'

@EndUserText.label: 'Revenue Accounting Reconciliation Key'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'RevnAcctgReconciliationKey'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #XXL, dataClass: #TRANSACTIONAL }

@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_RevnAcctgReconciliationKey
  as select from farr_d_recon_key

  association [1..1] to I_RevenueAccountingContract as _RevenueAccountingContract on $projection.RevenueAccountingContract = _RevenueAccountingContract.RevenueAccountingContract
  association [1..1] to I_CompanyCode               as _CompanyCode               on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_AccountingPrinciple       as _AccountingPrinciple       on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple
  association [1..1] to I_RAReconciliationKeyStatus as _RAReconciliationKeyStatus on $projection.RevnAcctgRecnclnKeyStatus = _RAReconciliationKeyStatus.RevnAcctgRecnclnKeyStatus
  association [1..1] to I_User                      as _ChangedByUser             on $projection.RARecnclnKeyChangedByUser = _ChangedByUser.UserID
  association [1..1] to I_User                      as _CreatedByUser             on $projection.RARecnclnKeyCreatedByUser = _CreatedByUser.UserID

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key company_code                                              as CompanyCode,

      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
  key acct_principle                                            as AccountingPrinciple,

      @ObjectModel.foreignKey.association: '_RevenueAccountingContract'
  key cast(contract_id as farr_cds_contract_id preserving type) as RevenueAccountingContract,

  key recon_key                                                 as RevnAcctgReconciliationKey,

      substring(recon_key, 1, 7)                                as FiscalYearPeriod,
      gjahr                                                     as FiscalYear,
      poper                                                     as FiscalPeriod,

      @ObjectModel.foreignKey.association: '_RAReconciliationKeyStatus'
      status                                                    as RevnAcctgRecnclnKeyStatus,

      pro_split_date                                            as RAProspectiveSplitDate,
      runid                                                     as RARecnclnKeyRunID,
      keypp                                                     as RAParallelizationSubareaValue,

      @ObjectModel.foreignKey.association: '_CreatedByUser'
      @Semantics.user.createdBy: true
      created_by                                                as RARecnclnKeyCreatedByUser,

      @Semantics.systemDateTime.createdAt: true
      created_on                                                as RARecnclnKeyCreationDateTime,

      @ObjectModel.foreignKey.association: '_ChangedByUser'
      @Semantics.user.lastChangedBy: true
      last_changed_by                                           as RARecnclnKeyChangedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      last_changed_on                                           as RARecnclnKeyLastChangeDateTime,

      liab_asset_flag                                           as RAContrLiabilityAssetIsCalcd,

      value_date                                                as ContrLiabilityAssetValueDate,

      awtyp                                                     as OriginalReferenceDocumentType,
      awsys                                                     as ReferenceDocumentLogicalSystem,
      aworg                                                     as ReferenceDocumentContext,
      awref                                                     as ReferenceDocument,

      _RevenueAccountingContract,
      _CompanyCode,
      _AccountingPrinciple,
      _RAReconciliationKeyStatus,
      _ChangedByUser,
      _CreatedByUser

}
```
