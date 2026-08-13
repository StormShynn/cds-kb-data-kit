---
name: I_BILLINGDOCUMENTITEMPARTNERTP
description: "Billing DocumentUMENTITEMPARTNERTP"
semantic_vi: "View I_BILLINGDOCUMENTITEMPARTNERTP CDS hiển thị dữ liệu đối tác của đơn hàng hóa tiền, có liên quan khi xử lý đơn hàng hóa tiền tại mức độ chi tiết. Nó cung cấp thông tin về các đối tác tham gia vào quá trình hóa tiền."
keywords:
  - "billing document"
  - "đơn hóa tiền"
  - "partner"
  - "đối tác"
  - "billing document item"
  - "đơn hàng hóa tiền chi tiết"
  - "sap sd"
  - "sales & distribution"
  - "lob:sales & distribution"
  - "bo:billingdocument"
semantic_en: "The I_BILLINGDOCUMENTITEMPARTNERTP CDS view exposes billing document item partner data, which is relevant when processing billing documents at the item level. It provides information about the partners involved in the billing process."
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
  - item-level
  - partner
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTITEMPARTNERTP

**Billing DocumentUMENTITEMPARTNERTP**

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
| `BillingDocumentItem` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerIsSpecificForSDDocItem` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `BusinessPartnerAddressUUID` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_BillingDocument` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Document Item Partner - TP'

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
    semanticKey:           ['BillingDocument', 'BillingDocumentItem', 'PartnerFunction'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_BillingDocumentItemPartnerTP 
  as projection on R_BillingDocumentItemPartnerTP
{
  key BillingDocument,
  key BillingDocumentItem,
  key PartnerFunction,
      PartnerIsSpecificForSDDocItem,
      Customer,
      Supplier,
      Personnel,
      ContactPerson,
      BusinessPartnerAddressUUID,
      ReferenceBusinessPartner,      

      _Item                   : redirected to parent I_BillingDocumentItemTP,
      _BillingDocument        : redirected to I_BillingDocumentTP  
}
```
