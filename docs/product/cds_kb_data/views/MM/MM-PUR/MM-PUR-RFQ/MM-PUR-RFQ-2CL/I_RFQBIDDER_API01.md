---
name: I_RFQBIDDER_API01
description: "Rfqbidder Api 01"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_RFQBIDDER_API01

**Rfqbidder Api 01**

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
| `PartnerFunction` | ✓ | |  | `cast( I_RFQBidder.PartnerFunction as parvw )` |  |  |
| `Supplier` |  | |  |  |  |  |
| `_RequestForQuotation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RequestForQuotation` | `I_Requestforquotation_Api01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMRFQBDDRAPI01'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Bidder in Request for Quotation'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]     
@ObjectModel.modelingPattern: #NONE

//@VDM.lifecycle.status: #DEPRECATED
//@VDM.lifecycle.successor: 'I_RFQBidder_2'                                                                                                  
                                     
define view I_RfqBidder_Api01 as select from I_RFQBidder

  association [1..1] to I_Requestforquotation_Api01 as _RequestForQuotation on $projection.RequestForQuotation = _RequestForQuotation.RequestForQuotation

{
  key I_RFQBidder.RequestForQuotation,
  key I_RFQBidder.PartnerCounter,
 // @API.element.releaseState: #DEPRECATED
 // @API.element.successor: 'PartnerFunction_2'
  key cast( I_RFQBidder.PartnerFunction as parvw ) as PartnerFunction, 
 // key I_RFQBidder.PartnerFunction as PartnerFunction_2,
      I_RFQBidder.Supplier,
      /*Associations*/
      _RequestForQuotation
}
```
