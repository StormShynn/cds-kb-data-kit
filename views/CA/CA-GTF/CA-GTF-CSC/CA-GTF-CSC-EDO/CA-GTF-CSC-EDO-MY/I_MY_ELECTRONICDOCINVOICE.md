---
name: I_MY_ELECTRONICDOCINVOICE
description: MY Electronicdocinvoice
app_component: CA-GTF-CSC-EDO-MY
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
  - component:CA-GTF-CSC-EDO-MY
  - lob:Cross-Application Components
---
# I_MY_ELECTRONICDOCINVOICE

**MY Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-MY` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ElectronicDocUUID` | `edoc_guid` |
| `MY_EDocInvcOriginalRefNo` | `edoc_my_orgref_no` |
| `MY_EDocInvcConsolidate` | `edoc_my_consolidate_invoice` |
| `MY_EDocInlandRevnBrdMYNmbr` | `edoc_my_irbm_no` |
| `MY_EDocInvcCancelReason` | `edoc_my_canc_reason` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Malaysia eInvoice'
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
@AccessControl.personalData.blocking: #NOT_REQUIRED
define view entity I_MY_ElectronicDocInvoice
  as select from edomyinv
{
  key edoc_guid                   as ElectronicDocUUID,
      edoc_my_orgref_no           as MY_EDocInvcOriginalRefNo,
      edoc_my_consolidate_invoice as MY_EDocInvcConsolidate,
      edoc_my_irbm_no             as MY_EDocInlandRevnBrdMYNmbr,
      edoc_my_canc_reason         as MY_EDocInvcCancelReason

}
```
