---
name: I_PT_ELECTRONICDOCINVOICE
description: "PT Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-PT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-PT
  - lob:Cross-Application Components
---
# I_PT_ELECTRONICDOCINVOICE

**PT Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  | `edoc_guid` |  |  |
| `PortugueseInvoiceNumber` |  | |  | `invoice_no` |  |  |
| `PT_ElectronicDocIsSigned` |  | |  | `sign_exists` |  |  |
| `PT_ElectronicDocRequestID` |  | |  | `request_id` |  |  |
| `PT_ElectronicDocStatusDate` |  | |  | `status_issue_date` |  |  |
| `PT_ElectronicDocStatusTime` |  | |  | `status_issue_time` |  |  |
| `PT_ElectronicDocInvoiceID` |  | |  | `uuid` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Portugal eInvoice'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
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
  viewType: #BASIC
}

define view entity I_PT_ElectronicDocInvoice 
  as select from edoptinv
{
      key edoc_guid     as ElectronicDocUUID,
      invoice_no        as PortugueseInvoiceNumber,
      sign_exists       as PT_ElectronicDocIsSigned,
      request_id        as PT_ElectronicDocRequestID,
      status_issue_date as PT_ElectronicDocStatusDate,
      status_issue_time as PT_ElectronicDocStatusTime,
      uuid              as PT_ElectronicDocInvoiceID
}
```
