---
name: I_TAXBALANCESGRP
description: "Taxbalancesgrp"
app_component: FI-LOC-VAT-GEN
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
  - FI-LOC-VAT
  - interface-view
  - tax
  - component:FI-LOC-VAT-GEN
  - lob:Finance
---
# I_TAXBALANCESGRP

**Taxbalancesgrp**

| Property | Value |
|---|---|
| App Component | `FI-LOC-VAT-GEN` |
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
| `Country` | ✓ | |  | `cast(t007l.land1 as land1_gp)` |  |  |
| `TaxItemGroupingVersion` | ✓ | |  | `version` |  |  |
| `TaxCode` | ✓ | |  | `cast(t007l.mwskz as fis_mwskz)` |  |  |
| `TransactionTypeDetermination` | ✓ | |  | `cast(t007l.ktosl as fac_ktosl)` |  |  |
| `DebitCreditCode` | ✓ | |  | `cast(t007l.shkzg_umsv as fis_shkzg)` |  |  |
| `TaxBalancesGrp` | ✓ | |  | `cast(t007l.stegruno as fis_taxbalgrp)` |  |  |
| `TaxGroupOperation` |  | |  | `cast(t007l.opera as txgrpgopera)` |  |  |
| `HasNegativeSign` |  | |  | `case opera when '-' then cast ( 'X' as oper_type preserving type ) else cast ('' as oper_type preserving type ) end` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITAXBALANCESGRP'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Grouping Numbers of Tax Balances'
@ObjectModel.supportedCapabilities: 
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_TaxBalancesGrp
  as select from t007l
{
  key cast(t007l.land1 as land1_gp)           as  Country,
  key t007l.version                           as  TaxItemGroupingVersion,
  key cast(t007l.mwskz as fis_mwskz)          as  TaxCode,
  key cast(t007l.ktosl as fac_ktosl)          as  TransactionTypeDetermination,
  key cast(t007l.shkzg_umsv as fis_shkzg)     as  DebitCreditCode,
  key cast(t007l.stegruno as  fis_taxbalgrp)  as  TaxBalancesGrp,
      cast(t007l.opera as txgrpgopera)        as  TaxGroupOperation,
      @Semantics.booleanIndicator: true
      case opera
      when '-'
      then cast ( 'X' as oper_type preserving type ) 
      else cast ('' as oper_type preserving type ) 
      end                                        as  HasNegativeSign

}
```
