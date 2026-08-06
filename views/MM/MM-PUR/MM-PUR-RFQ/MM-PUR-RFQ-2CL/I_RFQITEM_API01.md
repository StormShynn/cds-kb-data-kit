---
name: I_RFQITEM_API01
description: Rfqitem Api 01
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - item-level
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_RFQITEM_API01

**Rfqitem Api 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RequestForQuotation` | `I_PurchasingDocumentItem.PurchasingDocument` |
| key `RequestForQuotationItem` | `cast (I_PurchasingDocumentItem.PurchasingDocumentItem as vdm_requestforquotationitem preserving type)` |
| `PurchasingDocumentCategory` | `I_PurchasingDocumentItem.PurchasingDocumentCategory` |
| `PurchasingDocumentItemText` | `I_PurchasingDocumentItem.PurchasingDocumentItemText` |
| `Material` | `I_PurchasingDocumentItem.Material` |
| `ManufacturerMaterial` | `I_PurchasingDocumentItem.ManufacturerMaterial` |
| `ManufacturerPartNmbr` | `I_PurchasingDocumentItem.ManufacturerPartNmbr` |
| `Manufacturer` | `I_PurchasingDocumentItem.Manufacturer` |
| `MaterialGroup` | `I_PurchasingDocumentItem.MaterialGroup` |
| `Plant` | `I_PurchasingDocumentItem.Plant` |
| `ManualDeliveryAddressID` | `I_PurchasingDocumentItem.ManualDeliveryAddressID` |
| `ReferenceDeliveryAddressID` | `I_PurchasingDocumentItem.ReferenceDeliveryAddressID` |
| `IncotermsClassification` | `I_PurchasingDocumentItem.IncotermsClassification` |
| `IncotermsTransferLocation` | `I_PurchasingDocumentItem.IncotermsTransferLocation` |
| `IncotermsLocation1` | `I_PurchasingDocumentItem.IncotermsLocation1` |
| `IncotermsLocation2` | `I_PurchasingDocumentItem.IncotermsLocation2` |
| `OrderQuantityUnit` | `I_PurchasingDocumentItem.OrderQuantityUnit` |
| `OrderItemQtyToBaseQtyNmrtr` | `I_PurchasingDocumentItem.OrderItemQtyToBaseQtyNmrtr` |
| `OrderItemQtyToBaseQtyDnmntr` | `I_PurchasingDocumentItem.OrderItemQtyToBaseQtyDnmntr` |
| `BaseUnit` | `I_PurchasingDocumentItem.BaseUnit` |
| `PurchaseRequisition` | `I_PurchasingDocumentItem.PurchaseRequisition` |
| `PurchaseRequisitionItem` | `I_PurchasingDocumentItem.PurchaseRequisitionItem` |
| `_RequestForQuotation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RequestForQuotation` | `I_Requestforquotation_Api01` | [1..1] |
| `_RequestQtnItemExtension` | `E_PurchasingDocumentItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMRFQITEMAPI01'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Item in Request for Quotation'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE

define view I_RfqItem_Api01 
  as select from I_PurchasingDocumentItem

  association [1..1] to I_Requestforquotation_Api01 as _RequestForQuotation on $projection.RequestForQuotation = _RequestForQuotation.RequestForQuotation
    

  ----Extension Association
  association [1..1] to E_PurchasingDocumentItem      as _RequestQtnItemExtension on  $projection.RequestForQuotation = _RequestQtnItemExtension.PurchasingDocument
                                                                                      and $projection.RequestForQuotationItem   = _RequestQtnItemExtension.PurchasingDocumentItem

{
  key I_PurchasingDocumentItem.PurchasingDocument                                           as RequestForQuotation,
  key cast (I_PurchasingDocumentItem.PurchasingDocumentItem as vdm_requestforquotationitem preserving type) as RequestForQuotationItem,
      I_PurchasingDocumentItem.PurchasingDocumentCategory,
      I_PurchasingDocumentItem.PurchasingDocumentItemText,
      I_PurchasingDocumentItem.Material,
      I_PurchasingDocumentItem.ManufacturerMaterial,
      I_PurchasingDocumentItem.ManufacturerPartNmbr,
      I_PurchasingDocumentItem.Manufacturer,
      I_PurchasingDocumentItem.MaterialGroup,
      I_PurchasingDocumentItem.Plant,
      I_PurchasingDocumentItem.ManualDeliveryAddressID,
      I_PurchasingDocumentItem.ReferenceDeliveryAddressID,
      I_PurchasingDocumentItem.IncotermsClassification,
      I_PurchasingDocumentItem.IncotermsTransferLocation,
      I_PurchasingDocumentItem.IncotermsLocation1,
      I_PurchasingDocumentItem.IncotermsLocation2,
      I_PurchasingDocumentItem.OrderQuantityUnit,
      I_PurchasingDocumentItem.OrderItemQtyToBaseQtyNmrtr,
      I_PurchasingDocumentItem.OrderItemQtyToBaseQtyDnmntr,
      I_PurchasingDocumentItem.BaseUnit,
      I_PurchasingDocumentItem.PurchaseRequisition,
      I_PurchasingDocumentItem.PurchaseRequisitionItem,

  /*Associations*/    
  _RequestForQuotation    
}
where
  I_PurchasingDocumentItem.PurchasingDocumentCategory = 'R'
```
