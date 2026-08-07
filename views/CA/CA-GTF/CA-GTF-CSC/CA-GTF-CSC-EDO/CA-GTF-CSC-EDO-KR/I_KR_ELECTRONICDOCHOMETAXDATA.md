---
name: I_KR_ELECTRONICDOCHOMETAXDATA
description: KR Electronicdochometaxdata
app_component: CA-GTF-CSC-EDO-KR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - tax
  - component:CA-GTF-CSC-EDO-KR
  - lob:Cross-Application Components
---
# I_KR_ELECTRONICDOCHOMETAXDATA

**KR Electronicdochometaxdata**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |
| `BusinessPlace` | ✓ | |  | `bupla` |
| `KR_EDocHomeTaxDtaApprovalNo` | ✓ | |  | `apprvl_no` |
| `KR_EDocHomeTaxDtaTaxBaseValue` |  | |  | `tax_base_amt` |
| `KR_EDocHomeTaxDtaTaxValue` |  | |  | `tax_amount` |
| `KR_EDocHomeTaxDtaValue` |  | |  | `amount` |
| `Currency` |  | |  | `waers` |
| `KR_EDocHomeTaxDtaInvcDate` |  | |  | `invoice_date` |
| `Customer` |  | |  | `customer` |
| `Supplier` |  | |  | `supplier` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument KR Data from Home Tax'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_KR_ElectronicDocHomeTaxData
  as select from edokrhometax
{
  key bukrs        as CompanyCode,
  key bupla        as BusinessPlace,
  key apprvl_no    as KR_EDocHomeTaxDtaApprovalNo,
      tax_base_amt as KR_EDocHomeTaxDtaTaxBaseValue,
      tax_amount   as KR_EDocHomeTaxDtaTaxValue,
      amount       as KR_EDocHomeTaxDtaValue,
      waers        as Currency,
      invoice_date as KR_EDocHomeTaxDtaInvcDate,
      customer     as Customer,
      supplier     as Supplier
}
```
