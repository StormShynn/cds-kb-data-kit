---
name: I_KZ_ELECTRONICDOCINVOICE
description: "KZ Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-KZ
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
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-KZ
  - lob:Cross-Application Components
---
# I_KZ_ELECTRONICDOCINVOICE

**KZ Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-KZ` |
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
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `KZ_EDocRegistrationNumber` |  | |  |  |  |  |
| `KZ_ElectronicDocumentInvoiceID` |  | |  |  |  |  |
| `KZ_ElectronicDocumentVATDate` |  | |  |  |  |  |
| `KZ_ElectronicDocTurnoverDate` |  | |  |  |  |  |
| `KZ_EDocCancellationReasonText` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Kazakhstan Electronic Invoice'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE ]

@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #TRANSACTIONAL
}

@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_KZ_ElectronicDocInvoice
  as select from R_KZ_ElectronicDocInvoice
{

  key ElectronicDocUUID,
      KZ_EDocRegistrationNumber,
      KZ_ElectronicDocumentInvoiceID,
      KZ_ElectronicDocumentVATDate,
      KZ_ElectronicDocTurnoverDate,
      KZ_EDocCancellationReasonText

}
```
