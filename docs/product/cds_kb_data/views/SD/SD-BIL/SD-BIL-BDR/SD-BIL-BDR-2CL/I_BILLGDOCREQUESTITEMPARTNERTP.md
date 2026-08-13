---
name: I_BILLGDOCREQUESTITEMPARTNERTP
description: "Billgdocrequestitempartnertp"
semantic_vi: "Chỉ ra dữ liệu đối tác chi tiết cho yêu cầu hóa đơn trong thành phần bán hàng và phân phối, được sử dụng khi xử lý hóa đơn và quản lý mối quan hệ đối tác."
keywords:
  - "billing document request"
  - "đơn yêu cầu hóa đơn"
  - "partner data"
  - "dữ liệu đối tác"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "sap sd"
  - "sap sd-bil"
  - "sap sd-bil-bdr"
semantic_en: "Exposes item-level partner data for billing document requests in the Sales and Distribution component, used when processing billing documents and managing partner relationships."
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
  - item-level
  - partner
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLGDOCREQUESTITEMPARTNERTP

**Billgdocrequestitempartnertp**

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
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `BusinessPartnerAddressUUID` |  | |  |  |  |  |
| `PartnerIsSpecificForSDDocItem` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_BillingDocumentRequest` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Document Request Item Partner - TP'

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
    semanticKey:           ['BillingDocumentRequest', 'BillingDocumentRequestItem', 'PartnerFunction'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_BillgDocRequestItemPartnerTP
  as projection on R_BillgDocRequestItemPartnerTP
{
  key BillingDocumentRequest,
  key BillingDocumentRequestItem,
  key PartnerFunction,
      Customer,
      Supplier,
      Personnel,
      ContactPerson,
      ReferenceBusinessPartner,
      BusinessPartnerAddressUUID,
      PartnerIsSpecificForSDDocItem,

      _Item                   : redirected to parent I_BillingDocumentRequestItemTP,
      _BillingDocumentRequest : redirected to I_BillingDocumentRequestTP
}
```
