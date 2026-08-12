---
name: I_REQUESTFORQUOTATIONBIDDERTP
description: "Requestforquotationbiddertp"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - transactional-processing
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_REQUESTFORQUOTATIONBIDDERTP

**Requestforquotationbiddertp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequestForQuotation` | ✓ | |  |  |  |  |
| `PartnerCounter` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_RequestForQuotation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Request For Quotation Bidder - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'RequestForQuotation', 'PartnerCounter', 'PartnerFunction' ]

@ObjectModel: {
    usageType: {
      sizeCategory: #M,
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true
define view entity I_RequestForQuotationBidderTP 
   as projection on R_RequestForQuotationBidderTP 
{
key RequestForQuotation,
key PartnerCounter,
key PartnerFunction,
    Supplier,
    LastChangeDateTime,
/* Associations */
_RequestForQuotation : redirected to parent I_RequestForQuotationTP
  
}
```
