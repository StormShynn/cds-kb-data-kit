---
name: I_FINSGLMODIFIEDITEM
description: "Finsglmodifieditem"
app_component: AC-INT-ECS-2CL
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
  - AC
  - AC-INT
  - AC-INT-ECS
  - interface-view
  - item-level
  - component:AC-INT-ECS-2CL
  - lob:Other
---
# I_FINSGLMODIFIEDITEM

**Finsglmodifieditem**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
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
| `FinSGLErrorItemUUID` | ✓ | |  | `item_id` | `RAW(16)` | ID of Error Correction Item |
| `Ledger` |  | |  | `rldnr` | `CHAR(2)` | Ledger |
| `LedgerGroup` |  | |  | `ldgrp` | `CHAR(4)` | Ledger Group |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  | `belnr` | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` |  | |  | `cast( gjahr as fis_gjahr_no_conv )` | `NUMC(4)` | Fiscal Year |
| `PostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `GLAccount` |  | |  | `hkont` | `CHAR(10)` | General Ledger Account |
| `PartnerCompany` |  | |  | `vbund` | `CHAR(6)` | Company ID of Trading Partner |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `PartnerProfitCenter` |  | |  | `pprctr` | `CHAR(10)` | Partner Profit Center |
| `CostCenter` |  | |  | `kostl` | `CHAR(10)` | Cost Center |
| `DocumentItemText` |  | |  | `sgtxt` | `CHAR(50)` | Item Text |
| `FinancialServicesProductGroup` |  | |  | `fs_product_group` | `CHAR(10)` | Product Group (Financial Services) |
| `FinancialServicesBranch` |  | |  | `branch_id` | `CHAR(10)` | Branch (Financial Services) |
| `FinancialDataSource` |  | |  | `datasource_id` | `CHAR(10)` | Data Source |
| `CustomerSupplierIndustry` |  | |  | `brsch` | `CHAR(4)` | Industry Key |
| `CustomerGroup` |  | |  | `kdgrp` | `CHAR(2)` | Customer Group |
| `Country` |  | |  | `landl` | `CHAR(3)` | Supplying Country/Region |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Financial Services GL Modified Item'

@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}

@ObjectModel: {
  representativeKey: 'FinSGLErrorItemUUID',
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  }
}

@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
define view entity I_FinSGLModifiedItem
  as select from gle_fi_item_modf
{
  key item_id                            as FinSGLErrorItemUUID,
      rldnr                              as Ledger,
      ldgrp                              as LedgerGroup,
      bukrs                              as CompanyCode,
      belnr                              as AccountingDocument,
      cast( gjahr as fis_gjahr_no_conv ) as FiscalYear,
      budat                              as PostingDate,
      hkont                              as GLAccount,
      vbund                              as PartnerCompany,
      prctr                              as ProfitCenter,
      pprctr                             as PartnerProfitCenter,
      kostl                              as CostCenter,
      sgtxt                              as DocumentItemText,
      fs_product_group                   as FinancialServicesProductGroup,
      branch_id                          as FinancialServicesBranch,
      datasource_id                      as FinancialDataSource,
      brsch                              as CustomerSupplierIndustry,
      kdgrp                              as CustomerGroup,
      landl                              as Country

}
```
