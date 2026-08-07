---
name: I_FINSGLORIGINALITEM
description: Finsgloriginalitem
app_component: AC-INT-ECS-2CL
software_component: SAPSCORE
release_state: released
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
# I_FINSGLORIGINALITEM

**Finsgloriginalitem**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinSGLErrorItemUUID` | ✓ | |  | `item_id` |
| `Ledger` |  | |  | `rldnr` |
| `LedgerGroup` |  | |  | `ldgrp` |
| `CompanyCode` |  | |  | `bukrs` |
| `AccountingDocument` |  | |  | `belnr` |
| `FiscalYear` |  | |  | `cast( gjahr as fis_gjahr_no_conv )` |
| `PostingDate` |  | |  | `budat` |
| `GLAccount` |  | |  | `hkont` |
| `PartnerCompany` |  | |  | `vbund` |
| `ProfitCenter` |  | |  | `prctr` |
| `PartnerProfitCenter` |  | |  | `pprctr` |
| `CostCenter` |  | |  | `kostl` |
| `DocumentItemText` |  | |  | `sgtxt` |
| `FinancialServicesProductGroup` |  | |  | `fs_product_group` |
| `FinancialServicesBranch` |  | |  | `branch_id` |
| `FinancialDataSource` |  | |  | `datasource_id` |
| `CustomerSupplierIndustry` |  | |  | `brsch` |
| `CustomerGroup` |  | |  | `kdgrp` |
| `Country` |  | |  | `landl` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Financial Services GL Original Item'

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
define view entity I_FinSGLOriginalItem
  as select from gle_fi_item_orig
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
