---
name: I_BILLINGDOCUMENTITEMTEXTTP
description: "Billing DocumentUMENTITEMTEXTTP"
semantic_vi: "View Billing Document Item Text hiển thị dữ liệu văn bản chi tiết cho các mục trong hóa đơn, cho phép các nhà phát triển truy cập và thao tác dữ liệu văn bản liên quan đến từng mục trong hóa đơn. View này hữu ích cho các ứng dụng yêu cầu dữ liệu văn bản chi tiết cho các mục hóa đơn."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "text data"
  - "dữ liệu văn bản"
  - "item-level"
  - "chi tiết mục"
  - "sap sd"
  - "sd-bil"
  - "billing document item"
  - "mục hóa đơn"
semantic_en: "The Billing Document Item Text view exposes item-level text data for billing documents, allowing developers to access and manipulate text information associated with individual items within a billing document. This view is useful for applications that require detailed text data for billing document items."
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
  - text
  - item-level
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTITEMTEXTTP

**Billing DocumentUMENTITEMTEXTTP**

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
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_BillingDocument` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Document Item - Text TP'

@AccessControl: {
  authorizationCheck: #MANDATORY,  
  personalData.blocking: #('TRANSACTIONAL_DATA')

}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #C,
      sizeCategory:   #L
    },
    semanticKey: ['BillingDocument', 'BillingDocumentItem', 'Language', 'LongTextID'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_BillingDocumentItemTextTP 
  as projection on R_BillingDocumentItemTextTP
{
  key BillingDocument,
  key BillingDocumentItem,
  @Semantics.language:true
  key Language,
  key LongTextID,

  @Semantics.text:true
  LongText,

  _Item               : redirected to parent I_BillingDocumentItemTP,
  _BillingDocument    : redirected to I_BillingDocumentTP
}
```
