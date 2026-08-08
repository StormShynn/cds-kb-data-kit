---
name: I_KZ_ELECTRONICDOCINVOICE
description: "KZ Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-KZ
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
