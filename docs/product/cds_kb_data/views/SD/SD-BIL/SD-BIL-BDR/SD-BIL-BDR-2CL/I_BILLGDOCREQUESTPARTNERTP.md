---
name: I_BILLGDOCREQUESTPARTNERTP
description: "Billgdocrequestpartnertp"
semantic_vi: "CDS view I_BILLGDOCREQUESTPARTNERTP hiển thị dữ liệu đối tác yêu cầu hóa đơn kinh doanh, được sử dụng trong quy trình kinh doanh bán hàng và phân phối."
keywords:
  - "billing document request"
  - "đơn yêu cầu hóa đơn kinh doanh"
  - "partner data"
  - "dữ liệu đối tác"
  - "sales and distribution"
  - "kinh doanh bán hàng và phân phối"
  - "sap"
  - "sd-bil-bdr"
  - "lob:sales & distribution"
semantic_en: "The I_BILLGDOCREQUESTPARTNERTP CDS view exposes billing document request partner data, which is used in sales and distribution business processes."
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
  - partner
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLGDOCREQUESTPARTNERTP

**Billgdocrequestpartnertp**

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
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `BusinessPartnerAddressUUID` |  | |  |  |  |  |
| `_BillingDocumentRequest` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Document Request Partner - TP'

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
    semanticKey:           ['BillingDocumentRequest', 'PartnerFunction'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_BillgDocRequestPartnerTP
  as projection on R_BillgDocRequestPartnerTP
{
  key BillingDocumentRequest,
  key PartnerFunction,
      Customer,
      Supplier,
      Personnel,
      ContactPerson,
      ReferenceBusinessPartner,
      BusinessPartnerAddressUUID,

      _BillingDocumentRequest : redirected to parent I_BillingDocumentRequestTP

}
```
