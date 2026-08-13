---
name: I_BILLGDOCREQUESTITEMTEXTTP
description: "Billgdocrequestitemtexttp"
semantic_vi: "View I_BILLGDOCREQUESTITEMTEXTTP hiển thị dữ liệu văn bản chi tiết cho yêu cầu hóa đơn trong thành phần Sales và Distribution."
keywords:
  - "billing document request"
  - "yêu cầu hóa đơn"
  - "text data"
  - "sales and distribution"
  - "sales"
  - "distribution"
  - "sap"
  - "sd-bil-bdr"
  - "item-level"
  - "transactional-processing"
semantic_en: "The Billgdocrequestitemtexttp view exposes billing document request item text data, which is used to retrieve detailed text information for billing document requests in the Sales and Distribution component."
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - transactional-processing
  - text
  - item-level
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLGDOCREQUESTITEMTEXTTP

**Billgdocrequestitemtexttp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentRequest` | ✓ | |  |  |  |  |
| `BillingDocumentRequestItem` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_BillingDocumentRequest` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Document Request Item - Text TP'

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
    semanticKey: ['BillingDocumentRequest', 'BillingDocumentRequestItem', 'Language', 'LongTextID'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    dataCategory: #TEXT
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_BillgDocRequestItemTextTP 
  as projection on R_BillgDocRequestItemTextTP
{
  key BillingDocumentRequest,
  key BillingDocumentRequestItem,
  @Semantics.language:true
  key Language,
  key LongTextID,
    @Semantics.text:true
  LongText,

  _Item                      : redirected to parent I_BillingDocumentRequestItemTP,
  _BillingDocumentRequest    : redirected to  I_BillingDocumentRequestTP
}
```
