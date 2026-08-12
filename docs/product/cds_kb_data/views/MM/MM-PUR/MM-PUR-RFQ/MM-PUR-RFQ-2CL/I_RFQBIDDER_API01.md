---
name: I_RFQBIDDER_API01
description: "Rfqbidder Api 01"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
