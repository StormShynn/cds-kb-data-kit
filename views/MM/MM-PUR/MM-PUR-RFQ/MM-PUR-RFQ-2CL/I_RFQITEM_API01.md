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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequestForQuotation` | ✓ | |  | `PurchasingDocument` |  |  |
| `RequestForQuotationItem` | ✓ | |  | `cast (I_PurchasingDocumentItem.PurchasingDocumentItem as vdm_requestforquotationitem preserving type)` |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentItemText` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `ManufacturerPartNmbr` |  | |  |  |  |  |
| `Manufacturer` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `_RequestForQuotation` | | ✓ | | | | |

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
