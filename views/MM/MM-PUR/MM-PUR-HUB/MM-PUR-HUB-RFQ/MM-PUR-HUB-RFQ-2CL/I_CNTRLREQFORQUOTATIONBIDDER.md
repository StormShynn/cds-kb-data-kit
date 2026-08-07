---
name: I_CNTRLREQFORQUOTATIONBIDDER
description: Cntrlreqforquotationbidder
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
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLREQFORQUOTATIONBIDDER

**Cntrlreqforquotationbidder**

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
| `_CentralRequestForQuotation` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralRequestForQuotation` | `I_CentralRequestForQuotation` | [1..1] |
| `_PartnerFunction` | `I_PartnerFunction` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@EndUserText.label: 'Central Request For Quotation Bidder'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.sqlViewName: 'ICNTRLRFQBID'

@ObjectModel:{ representativeKey: 'PartnerCounter',
               semanticKey: 'Supplier',
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #B,
               usageType.sizeCategory: #M
             }

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CntrlReqForQuotationBidder
  as select from R_CntrlReqForQuotationBidder

  //    inner join   I_CentralRequestForQuotation on R_CntrlReqForQuotationBidder.CentralRequestForQuotation = I_CentralRequestForQuotation.CentralRequestForQuotation
  //
  association [1..1] to I_CentralRequestForQuotation as _CentralRequestForQuotation on $projection.CentralRequestForQuotation = _CentralRequestForQuotation.CentralRequestForQuotation
  association [0..1] to I_PartnerFunction            as _PartnerFunction            on $projection.PartnerFunction = _PartnerFunction.PartnerFunction

{
      @ObjectModel: { foreignKey.association: '_CentralRequestForQuotation' }
  key CentralRequestForQuotation,

  key PartnerCounter,

      @ObjectModel: { foreignKey.association: '_PartnerFunction' }
  key PartnerFunction,

      Supplier,

      /*Association*/
      _CentralRequestForQuotation,
      _PartnerFunction,
      _Supplier
}
```
