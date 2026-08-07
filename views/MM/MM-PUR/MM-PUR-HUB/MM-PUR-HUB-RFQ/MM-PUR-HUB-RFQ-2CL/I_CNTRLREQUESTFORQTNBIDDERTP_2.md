---
name: I_CNTRLREQUESTFORQTNBIDDERTP_2
description: Cntrlrequestforqtnbiddertp 2
app_component: MM-PUR-HUB-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLREQUESTFORQTNBIDDERTP_2

**Cntrlrequestforqtnbiddertp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralRequestForQuotation` | ✓ | |  |  |  |  |
| `PartnerCounter` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_CentralRequestForQuotation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Cntrl Req for Quotation Bidder'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.semanticKey:  [ 'CentralRequestForQuotation' , 'PartnerCounter', 'PartnerFunction']

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel:{
               usageType.dataClass: #MIXED,
               usageType.serviceQuality: #C,
               usageType.sizeCategory: #L
             }

@Metadata.ignorePropagatedAnnotations: true


define view entity I_CntrlRequestForQtnBidderTP_2
  as projection on R_CntrlReqForQuotationBidderTP
{
  @ObjectModel.foreignKey.association: '_CentralRequestForQuotation'
  key CentralRequestForQuotation,
  key PartnerCounter,  
  key PartnerFunction,
      Supplier,
      LastChangeDateTime,

      /* Associations */
      @Semantics.valueRange.maximum: '1'
      _CentralRequestForQuotation : redirected to parent I_CntrlRequestForQuotationTP_2

}
```
