---
name: I_PH_TAXBALANCEGROUPBYINDUSTRY
description: "PH Taxbalancegroupbyindustry"
app_component: FI-LOC-FI-PH
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
  - FI-LOC-FI
  - interface-view
  - tax
  - component:FI-LOC-FI-PH
  - lob:Finance
---
# I_PH_TAXBALANCEGROUPBYINDUSTRY

**PH Taxbalancegroupbyindustry**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-PH` |
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
| `Country` | ✓ | |  | `country` |  |  |
| `TaxItemGroupingVersion` | ✓ | |  | `version` |  |  |
| `CompanyCode` | ✓ | |  | `companycode` |  |  |
| `BusinessPlace` | ✓ | |  | `businessplace` |  |  |
| `TaxCode` | ✓ | |  | `taxcode` |  |  |
| `AlphanumericTaxCode` |  | |  | `atc_code` |  |  |
| `_AlphanumericTxCodeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AlphanumericTxCodeText` | `I_PH_AlphanumericTaxCodeText` | [0..*] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl:{authorizationCheck: #CHECK, personalData.blocking: #BLOCKED_DATA_EXCLUDED}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API 
@AbapCatalog:{sqlViewName: 'IPHINDUSTRYGRP', compiler.compareFilter: true, preserveKey: true}
@ObjectModel:{usageType.sizeCategory: #L, usageType.serviceQuality: #B, 
              usageType.dataClass: #CUSTOMIZING, supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]}
@EndUserText.label: 'Philippines Industries Covered by VAT'
define view I_PH_TaxBalanceGroupByIndustry
  as select from idty_code_ph
  association [0..*] to I_PH_AlphanumericTaxCodeText as _AlphanumericTxCodeText on  $projection.Country  = _AlphanumericTxCodeText.Country
                                                                                and $projection.AlphanumericTaxCode = _AlphanumericTxCodeText.AlphanumericTaxCode
{
  key country       as Country,
  key version       as TaxItemGroupingVersion,
  key companycode   as CompanyCode,
  key businessplace as BusinessPlace,
  key taxcode       as TaxCode,
      @ObjectModel.text.association: '_AlphanumericTxCodeText'
      atc_code      as AlphanumericTaxCode,
      _AlphanumericTxCodeText
}
```
