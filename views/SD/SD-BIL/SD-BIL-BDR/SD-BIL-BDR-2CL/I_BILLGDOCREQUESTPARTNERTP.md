---
name: I_BILLGDOCREQUESTPARTNERTP
description: "Billgdocrequestpartnertp"
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
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
