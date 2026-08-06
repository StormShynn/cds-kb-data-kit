---
name: I_CN_CADESUBSIDIARYACCTGITEM
description: CN Cadesubsidiaryacctgitem
app_component: FI-LOC-GAI-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-GAI
  - interface-view
  - item-level
  - component:FI-LOC-GAI-CN
  - lob:Finance
---
# I_CN_CADESUBSIDIARYACCTGITEM

**CN Cadesubsidiaryacctgitem**

| Property | Value |
|---|---|
| App Component | `FI-LOC-GAI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `bukrs` |
| key `GLAccount` | `saknr` |
| key `CN_CADENatlStdRelVersion` | `cade_natl_std_rel_ver` |
| key `CN_CADESubsidiaryAcctgItem` | `cade_archive_code` |
| `DebitCreditCode` | `bldir` |
| `CN_CADEGeneralLedgerAcctType` | `accty` |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ICADESUBACCTGITM'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'CN Subsidiary Accounting Item for CADE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_CN_CADESubsidiaryAcctgItem
  as select from cade_acctsubitm
{
  key bukrs                 as  CompanyCode,
  key saknr                 as  GLAccount,
  key cade_natl_std_rel_ver as  CN_CADENatlStdRelVersion,
  key cade_archive_code     as  CN_CADESubsidiaryAcctgItem,
  bldir as DebitCreditCode,
  //accty as GLAccountType,
  accty as CN_CADEGeneralLedgerAcctType 
}
```
