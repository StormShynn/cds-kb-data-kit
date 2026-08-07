---
name: I_KR_EDOCSELFBILLINVCMAPPING
description: KR Edocselfbillinvcmapping
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
  - component:CA-GTF-CSC-EDO-KR
  - lob:Cross-Application Components
---
# I_KR_EDOCSELFBILLINVCMAPPING

**KR Edocselfbillinvcmapping**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  | `edoc_guid` |
| `ElectronicDocSourceType` | ✓ | |  | `source_type` |
| `ElectronicDocSourceKey` | ✓ | |  | `source_key` |
| `KR_EDocSelfBillMapIsDelete` |  | |  | `delete_indicator` |
| `AccountingDocument` |  | |  | `belnr` |
| `CompanyCode` |  | |  | `bukrs` |
| `FiscalYear` |  | |  | `cast(gjahr as fis_gjahr_no_conv preserving type)` |
| `BillingDocument` |  | |  | `vbeln` |
| `KR_EDocSelfBillMapInvcgDocNo` |  | |  | `invdocno` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'EDoc KR Self Billing eInvoice Mapping'
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
define view entity I_KR_EDocSelfBillInvcMapping
  as select from edokrinvsfmap
{
  key edoc_guid                                        as ElectronicDocUUID,
  key source_type                                      as ElectronicDocSourceType,
  key source_key                                       as ElectronicDocSourceKey,
      delete_indicator                                 as KR_EDocSelfBillMapIsDelete,
      belnr                                            as AccountingDocument,
      bukrs                                            as CompanyCode,
      cast(gjahr as fis_gjahr_no_conv preserving type) as FiscalYear,
      vbeln                                            as BillingDocument,
      invdocno                                         as KR_EDocSelfBillMapInvcgDocNo
}
```
