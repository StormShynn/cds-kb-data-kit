---
name: I_INHREPAIRTRANSACTIONRELATION
description: "Relationship between Srvc Transactions"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRTRANSACTIONRELATION')/$value
semantic_en: "Relationship between Srvc Transactions"
semantic_vi: "Relationship between Srvc Transactions — CDS view tổng hợp (transactional data) dựa trên I_CustMgmtTransactionRelation."
keywords:
  - "relationship"
  - "between"
  - "srvc"
  - "transactions"
  - "cust"
  - "mgmt"
  - "transac"
  - "relation"
  - "prdcssr"
  - "transaction"
  - "type"
  - "succssr"
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
  - transaction
---
# I_INHREPAIRTRANSACTIONRELATION

**Relationship between Srvc Transactions**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRTRANSACTIONRELATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtTransacRelationUUID` | ✓ | |  |  | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `CustMgmtPrdcssrTransactionUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `CustMgmtPrdcssrTransacObjType` |  | |  |  | `CHAR(10)` | Object Type |
| `CustMgmtSuccssrTransactionUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `CustMgmtSuccssrTransactionKey` |  | |  |  | `CHAR(70)` | Object key |
| `CustMgmtSuccssrTransacObjType` |  | |  |  | `CHAR(10)` | Object Type |
| `CustMgmtTransacRelationType` |  | |  |  | `CHAR(4)` | Relationship type |
| `CustMgmtPrdcssrTransactionKey` |  | |  |  | `CHAR(70)` | Object key |
| `_PredecessorServiceTransaction` | | ✓ | | | | |
| `_SuccessorServiceTransaction` | | ✓ | | | | |
| `_InHouseRepairItem` | | ✓ | | | | |
| `_PredecessorCustomerReturn` | | ✓ | | | | |
| `_OutboundDelivery` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PredecessorServiceTransaction` | `I_ServiceDocument` | [0..1] |
| `_SuccessorServiceTransaction` | `I_ServiceDocument` | [0..1] |
| `_InHouseRepairItem` | `I_InHouseRepairItem` | [0..1] |
| `_PredecessorCustomerReturn` | `I_CustomerReturnEnhanced` | [0..1] |
| `_OutboundDelivery` | `I_OutboundDelivery` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRTRANSACTIONRELATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRTRANSACTIONRELATION')/$value)*

```abap
@EndUserText.label: 'Relationship between Srvc Transactions' //Service
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY
}
@ObjectModel: {
  usageType: {serviceQuality: #B, sizeCategory: #XL, dataClass: #TRANSACTIONAL},
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET] //Added 2602 CE
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
define view entity I_InhRepairTransactionRelation

  as select from I_CustMgmtTransactionRelation

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_ServiceDocument   as _PredecessorServiceTransaction on  $projection.CustMgmtPrdcssrTransactionUUID = _PredecessorServiceTransaction.ServiceDocumentUUID
                                                                              and $projection.CustMgmtPrdcssrTransacObjType  = _PredecessorServiceTransaction.ServiceObjectType
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_ServiceDocument   as _SuccessorServiceTransaction   on  $projection.CustMgmtSuccssrTransactionUUID = _SuccessorServiceTransaction.ServiceDocumentUUID
                                                                              and $projection.CustMgmtSuccssrTransacObjType  = _SuccessorServiceTransaction.ServiceObjectType
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_InHouseRepairItem as _InHouseRepairItem             on  $projection.CustMgmtPrdcssrTransactionUUID = _InHouseRepairItem.InHouseRepairItemUUID
                                                                              and $projection.CustMgmtPrdcssrTransacObjType  = _InHouseRepairItem.InhRepairItemObjectType
                                                                              and $projection.CustMgmtPrdcssrTransacObjType  = 'BUS2000257'

  association [0..1] to I_CustomerReturnEnhanced as _PredecessorCustomerReturn on $projection.CustMgmtPrdcssrTransactionKey = _PredecessorCustomerReturn.CustomerReturn
  association [0..1] to I_OutboundDelivery as _OutboundDelivery on $projection.CustMgmtSuccssrTransactionKey = _OutboundDelivery.OutboundDelivery
{
  key CustMgmtTransacRelationUUID,
      CustMgmtPrdcssrTransactionUUID,
      CustMgmtPrdcssrTransacObjType,
      CustMgmtSuccssrTransactionUUID,
      CustMgmtSuccssrTransactionKey,
      CustMgmtSuccssrTransacObjType,
      CustMgmtTransacRelationType,

      //Return Order Changes
      CustMgmtPrdcssrTransactionKey, 
      
      
      // Associations
      _PredecessorServiceTransaction,
      _SuccessorServiceTransaction,
      _InHouseRepairItem,
      
      _PredecessorCustomerReturn,      
      _OutboundDelivery
}
```
