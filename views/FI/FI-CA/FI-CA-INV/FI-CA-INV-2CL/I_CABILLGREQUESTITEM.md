---
name: I_CABILLGREQUESTITEM
description: Cabillgrequestitem
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGREQUESTITEM

**Cabillgrequestitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgReqDocument` | `billreqno` |
| key `CABillgReqItem` | `billreqitem` |
| `CABllbleItmListId` | `bitlist_id` |
| `CABillgReqItmAmount` | `bixreq_amount` |
| `CABillgReqItmAmountCurrency` | `bixreq_curr` |
| `CABillgFirstDate` | `bill_first` |
| `CATaxIsIncluded` | `tax_included` |
| `CABllbleItmClass` | `bitcat` |
| `CABllbleItmSourceTransType` | `cast( srctatype as srctatype_gfn_kk preserving type )` |
| `CABllbleItmSourceTransId` | `cast( srctaid as srctaid_gfn_kk preserving type )` |
| `CABllbleItmPackageUUID` | `bitpackuuid` |
| `CABllbleItmPackNo` | `bitpackcno` |
| `CABllbleItmCreationDate` | `bitcrdate` |
| `_CABillgRequest` | *Association* |
| `_CABllbleItmClass` | *Association* |
| `_CABllbleItmSrceTransType` | *Association* |
| `_CABillgReqItmAmountCurrency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgRequest` | `I_CABillgRequest` | [1..1] |
| `_CABllbleItmClass` | `I_CABllbleItmClass` | [0..1] |
| `_CABllbleItmSrceTransType` | `I_CABllbleItmSrceTransType` | [0..1] |
| `_CABillgReqItmAmountCurrency` | `I_Currency` | [0..1] |
| `_Extension` | `E_CABillgRequestItem` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkbix_req_i',
          role: #MAIN,
          viewElement: ['CABillgReqDocument', 'CABillgReqItem'],
          tableElement: ['billreqno', 'billreqitem']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgReqItem',
  sapObjectNodeType.name: 'ContrAcctgBillingRequestItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Billing Request Item'
define view entity I_CABillgRequestItem
  as select from dfkkbix_req_i
  association [1..1] to I_CABillgRequest           as _CABillgRequest              on  $projection.CABillgReqDocument = _CABillgRequest.CABillgReqDocument
  association [0..1] to I_CABllbleItmClass         as _CABllbleItmClass            on  $projection.CABllbleItmClass = _CABllbleItmClass.CABllbleItmClass
  association [0..1] to I_CABllbleItmSrceTransType as _CABllbleItmSrceTransType    on  $projection.CABllbleItmSourceTransType = _CABllbleItmSrceTransType.CABllbleItmSourceTransType
  association [0..1] to I_Currency                 as _CABillgReqItmAmountCurrency on  $projection.CABillgReqItmAmountCurrency = _CABillgReqItmAmountCurrency.Currency

  association [0..1] to E_CABillgRequestItem       as _Extension                   on  $projection.CABillgReqDocument = _Extension.CABillgReqDocument
                                                                                   and $projection.CABillgReqItem     = _Extension.CABillgReqItem

{
       @ObjectModel.foreignKey.association: '_CABillgRequest'
  key  billreqno                                              as CABillgReqDocument,
  key  billreqitem                                            as CABillgReqItem,
       bitlist_id                                             as CABllbleItmListId,

       @Semantics.amount.currencyCode: 'CABillgReqItmAmountCurrency'
       bixreq_amount                                          as CABillgReqItmAmount,
       @ObjectModel.foreignKey.association: '_CABillgReqItmAmountCurrency'
       bixreq_curr                                            as CABillgReqItmAmountCurrency,
       bill_first                                             as CABillgFirstDate,
       tax_included                                           as CATaxIsIncluded,
       @ObjectModel.foreignKey.association: '_CABllbleItmClass'
       bitcat                                                 as CABllbleItmClass,
       @ObjectModel.foreignKey.association: '_CABllbleItmSrceTransType'
       cast( srctatype  as srctatype_gfn_kk preserving type ) as CABllbleItmSourceTransType,
       cast( srctaid    as srctaid_gfn_kk preserving type )   as CABllbleItmSourceTransId,
       bitpackuuid                                            as CABllbleItmPackageUUID,
       bitpackcno                                             as CABllbleItmPackNo,
       bitcrdate                                              as CABllbleItmCreationDate,

       _CABillgRequest,
       _CABllbleItmClass,
       _CABllbleItmSrceTransType,
       _CABillgReqItmAmountCurrency

}
```
