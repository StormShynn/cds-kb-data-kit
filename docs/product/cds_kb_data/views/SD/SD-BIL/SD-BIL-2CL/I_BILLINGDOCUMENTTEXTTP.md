---
name: I_BILLINGDOCUMENTTEXTTP
description: "Billing DocumentUMENTTEXTTP"
semantic_vi: "View Billing Document Text hiển thị dữ liệu văn bản hóa đơn, được sử dụng để hiển thị thông tin chi tiết về hóa đơn bán hàng trong một ngôn ngữ cụ thể."
keywords:
  - "billing document"
  - "hóa đơn bán hàng"
  - "text"
  - "language"
  - "billing document text"
  - "sđd"
  - "sd-bil"
  - "sales & distribution"
  - "lob: sales & distribution"
  - "bo: billing document"
semantic_en: "The Billing Document Text view exposes billing document text data, which is used to display detailed information about a billing document in a specific language."
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
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTTEXTTP

**Billing DocumentUMENTTEXTTP**

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
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `_BillingDocument` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Document - Text TP'

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
    semanticKey: ['BillingDocument', 'Language', 'LongTextID'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_BillingDocumentTextTP 
  as projection on R_BillingDocumentTextTP
{
  key BillingDocument,
  @Semantics.language:true  
  key Language,
  key LongTextID,
  
  @Semantics.text:true
  LongText,  
  
  _BillingDocument : redirected to parent I_BillingDocumentTP
}
```
