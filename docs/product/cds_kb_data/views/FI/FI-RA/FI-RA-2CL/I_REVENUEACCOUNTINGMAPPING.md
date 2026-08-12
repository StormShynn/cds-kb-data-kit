---
name: I_REVENUEACCOUNTINGMAPPING
description: "Revenueaccountingmapping"
app_component: FI-RA-2CL
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
  - FI-RA
  - interface-view
  - component:FI-RA-2CL
  - lob:Finance
---
# I_REVENUEACCOUNTINGMAPPING

**Revenueaccountingmapping**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
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
| `RevnAcctgSenderComponent` | ✓ | |  | `cast(srcdoc_comp as farr_cds_rai_srcco preserving type)` |  |  |
| `RASndgCompLogicalSystem` | ✓ | |  | `srcdoc_logsys` |  |  |
| `RASndgCompDocumentItemType` | ✓ | |  | `srcdoc_type` |  |  |
| `RASndgCompDocumentItem` | ✓ | |  | `srcdoc_id` |  |  |
| `PerformanceObligation` | ✓ | |  | `cast(pob_id as farr_cds_pob_id preserving type)` |  |  |
| `RevenueAccountingContract` |  | |  | `cast(contract_id as farr_cds_contract_id preserving type)` |  |  |
| `AccountingPrinciple` |  | |  | `acct_principle` |  |  |
| `RevnAcctgOperationalDocument` |  | |  | `cast(header_id as farr_operational_doc preserving type)` |  |  |
| `RAContractIsCreatedByContrMgr` |  | |  | `rar_version` |  |  |
| `PerfOblgnIsSoftDeleted` |  | |  | `soft_deleted` |  |  |
| `RevnAcctgContractArchivingDate` |  | |  | `archiving_date` |  |  |
| `RevnAcctgItemArchivingDate` |  | |  | `archiving_date_rai` |  |  |
| `RASenderComponentReferenceID` |  | |  | `reference_id` |  |  |
| `RASenderComponentReferenceType` |  | |  | `reference_type` |  |  |
| `CompanyCode` |  | | `_RAPerformanceObligation` | `CompanyCode` |  |  |
| `_RevenueAccountingContract` | | ✓ | | | | |
| `_RAPerformanceObligation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RevenueAccountingContract` | `I_RevenueAccountingContract` | [1..1] |
| `_RAPerformanceObligation` | `I_RAPerformanceObligation` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Revenue Accounting Mapping'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

// this view can have serviceQuality #A, because it really accesses only 2 underlying tables 
// (FARR_D_MAPPING and FARR_D_POB), not 7 tables, as calculated by dependency analysis
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #XXL, dataClass: #TRANSACTIONAL }

@VDM.viewType: #BASIC

define view entity I_RevenueAccountingMapping
  as select from farr_d_mapping

  association [1..1] to I_RevenueAccountingContract as _RevenueAccountingContract
    on  $projection.RevenueAccountingContract = _RevenueAccountingContract.RevenueAccountingContract
    and $projection.companycode               = _RevenueAccountingContract.CompanyCode
    and $projection.AccountingPrinciple       = _RevenueAccountingContract.AccountingPrinciple

  association [1..1] to I_RAPerformanceObligation   as _RAPerformanceObligation
    on  $projection.PerformanceObligation = _RAPerformanceObligation.PerformanceObligation
    and $projection.companycode           = _RAPerformanceObligation.CompanyCode
    and $projection.AccountingPrinciple   = _RAPerformanceObligation.AccountingPrinciple

{
  key cast(srcdoc_comp as farr_cds_rai_srcco preserving type)   as RevnAcctgSenderComponent,
  key srcdoc_logsys                                             as RASndgCompLogicalSystem,
  key srcdoc_type                                               as RASndgCompDocumentItemType,
  key srcdoc_id                                                 as RASndgCompDocumentItem,

      @ObjectModel.foreignKey.association: '_RAPerformanceObligation'
  key cast(pob_id as farr_cds_pob_id preserving type)           as PerformanceObligation,

      @ObjectModel.foreignKey.association: '_RevenueAccountingContract'
      cast(contract_id as farr_cds_contract_id preserving type) as RevenueAccountingContract,

      acct_principle                                            as AccountingPrinciple,

      cast(header_id as farr_operational_doc preserving type)   as RevnAcctgOperationalDocument,

      @Semantics.booleanIndicator: true
      rar_version                                               as RAContractIsCreatedByContrMgr,

      soft_deleted                                              as PerfOblgnIsSoftDeleted,
      archiving_date                                            as RevnAcctgContractArchivingDate,
      archiving_date_rai                                        as RevnAcctgItemArchivingDate,
      reference_id                                              as RASenderComponentReferenceID,
      reference_type                                            as RASenderComponentReferenceType,

      _RAPerformanceObligation.CompanyCode,

      _RevenueAccountingContract,
      _RAPerformanceObligation
}
```
