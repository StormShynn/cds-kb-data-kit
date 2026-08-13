---
name: I_BILLINGDOCUMENTPARTNERTP
description: "Billing DocumentUMENTPARTNERTP"
semantic_vi: "Phân tích thông tin đối tác liên quan đến hóa đơn, được sử dụng để truy cập và thao tác dữ liệu đối tác liên quan đến hóa đơn."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "partner"
  - "đối tác"
  - "billing document partner"
  - "hóa đơn đối tác"
  - "sap sd"
  - "sd-bil"
  - "sales & distribution"
semantic_en: "Exposes billing document partner information, used to access and manipulate partner data associated with billing documents."
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - transactional-processing
  - billing-document
  - billing
  - document
  - partner
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTPARTNERTP

**Billing DocumentUMENTPARTNERTP**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `BusinessPartnerAddressUUID` |  | |  |  |  |  |
| `_BillingDocument` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Document Partner - TP'

@AccessControl: {
  authorizationCheck: #MANDATORY,  
  personalData.blocking: #('TRANSACTIONAL_DATA')

}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #C,
      sizeCategory:   #XL
    },
    semanticKey:           ['BillingDocument', 'PartnerFunction'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_BillingDocumentPartnerTP
  as projection on R_BillingDocumentPartnerTP
{
  key BillingDocument,
  key PartnerFunction,
      Customer,
      Supplier,
      Personnel,
      ContactPerson,
      ReferenceBusinessPartner,
      BusinessPartnerAddressUUID,

      _BillingDocument : redirected to parent I_BillingDocumentTP
}
```
