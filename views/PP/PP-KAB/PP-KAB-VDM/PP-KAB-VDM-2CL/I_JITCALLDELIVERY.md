---
name: I_JITCALLDELIVERY
description: Jitcalldelivery
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - delivery
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_JITCALLDELIVERY

**Jitcalldelivery**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `JITCallNumber` | ✓ | |  | `pabnum` |
| `JITCallItemNumber` | ✓ | |  | `cast(pabpos as njit_call_item_num preserving type)` |
| `DeliveryDocument` | ✓ | |  | `vbeln` |
| `DeliveryDocumentItem` | ✓ | |  | `posnr` |
| `JITCallGoodsReceiptQuantity` |  | |  | `pabavm` |
| `BaseUnit` |  | | `_SummarizedJITCallItem` | `BaseUnit` |
| `JITCallGoodsReceiptIsPosted` |  | |  | `partgr` |
| `Plant` |  | | `_SummarizedJITCall` | `Plant` |
| `Supplier` |  | | `_DeliveryDocument` | `Supplier` |
| `_SummarizedJITCall` | | ✓ | | |
| `_SummarizedJITCallItem` | | ✓ | | |
| `_DeliveryDocument` | | ✓ | | |
| `_DeliveryDocumentItem` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_SupplierCompanyByPlant` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SummarizedJITCall` | `I_SummarizedJITCall` | [0..1] |
| `_SummarizedJITCallItem` | `I_SummarizedJITCallItem` | [0..1] |
| `_DeliveryDocument` | `I_DeliveryDocument` | [0..1] |
| `_DeliveryDocumentItem` | `I_DeliveryDocumentItem` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPJITCLDLVR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'JIT Call Link to Delivery'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_JITCallDelivery 
  as select from pabasn 
  association [0..1] to I_SummarizedJITCall      as _SummarizedJITCall      on  $projection.JITCallNumber = _SummarizedJITCall.JITCallNumber
  association [0..1] to I_SummarizedJITCallItem  as _SummarizedJITCallItem  on  $projection.JITCallNumber = _SummarizedJITCallItem.JITCallNumber
                                                                          and  $projection.JITCallItemNumber = _SummarizedJITCallItem.JITCallItemNumber
  association [0..1] to I_DeliveryDocument       as _DeliveryDocument      on  $projection.DeliveryDocument = _DeliveryDocument.DeliveryDocument
  association [0..1] to I_DeliveryDocumentItem   as _DeliveryDocumentItem  on  $projection.DeliveryDocument = _DeliveryDocumentItem.DeliveryDocument
                                                                          and  $projection.DeliveryDocumentItem = _DeliveryDocumentItem.DeliveryDocumentItem                                                                   
  association [0..1] to I_Supplier               as _Supplier               on $projection.supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _SupplierCompanyByPlant on $projection.supplier = _SupplierCompanyByPlant.Supplier
                                                                           and $projection.plant    = _SupplierCompanyByPlant.Plant
{
  key  pabnum as JITCallNumber,
  key  cast(pabpos as njit_call_item_num preserving type) as JITCallItemNumber,
  key  vbeln  as DeliveryDocument,
  key  posnr  as DeliveryDocumentItem,
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       pabavm as JITCallGoodsReceiptQuantity,
       _SummarizedJITCallItem.BaseUnit as BaseUnit,
       @Semantics.booleanIndicator: true
       partgr as JITCallGoodsReceiptIsPosted,
       
       // For DCL
      @Consumption.hidden: true
      _SummarizedJITCall.Plant,
      @Consumption.hidden: true
      _DeliveryDocument.Supplier,
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      
      // Associations
      _SummarizedJITCall,
      _SummarizedJITCallItem,
      _DeliveryDocument,
      _DeliveryDocumentItem
   
}
```
