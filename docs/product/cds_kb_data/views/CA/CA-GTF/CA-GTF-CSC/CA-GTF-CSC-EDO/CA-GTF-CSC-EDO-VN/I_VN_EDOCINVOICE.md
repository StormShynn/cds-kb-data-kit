---
name: I_VN_EDOCINVOICE
description: "VN Edocinvoice"
app_component: CA-GTF-CSC-EDO-VN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-VN
  - lob:Cross-Application Components
---
# I_VN_EDOCINVOICE

**VN Edocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-VN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VN_EDocInvoiceUUID` | ✓ | |  |  |  |  |
| `VN_EDocTemplateID` |  | |  |  |  |  |
| `VN_EDocSeriesID` |  | |  |  |  |  |
| `VN_EDocInvoiceNumber` |  | |  |  |  |  |
| `VN_EDocBusinessPlace` |  | |  |  |  |  |
| `VN_EDocBuyerIdnNmbr` |  | |  |  |  |  |
| `VN_EDocReferenceTemplateID` |  | |  |  |  |  |
| `VN_EDocReferenceSeriesID` |  | |  |  |  |  |
| `VN_EDocReferenceInvoiceNumber` |  | |  |  |  |  |
| `VN_EDocScenario` |  | |  |  |  |  |
| `VN_EDocCQTCode` |  | |  |  |  |  |
| `VN_EDocAgreementInformation` |  | |  |  |  |  |
| `ElectronicDocCompanyCode` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument Vietnam Invoice'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]

define view entity I_VN_EDocInvoice
  as select from R_VN_EDocInvoice
{
  key VN_EDocInvoiceUUID,
      VN_EDocTemplateID,
      VN_EDocSeriesID,
      VN_EDocInvoiceNumber,
      VN_EDocBusinessPlace,
      VN_EDocBuyerIdnNmbr,
      VN_EDocReferenceTemplateID,
      VN_EDocReferenceSeriesID,
      VN_EDocReferenceInvoiceNumber,
      VN_EDocScenario,
      VN_EDocCQTCode,
      VN_EDocAgreementInformation,
      ElectronicDocCompanyCode
}
```
