---
name: I_CENTRALREQFORQUOTATIONITEM
description: "Centralreqforquotationitem"
app_component: MM-PUR-HUB-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - item-level
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CENTRALREQFORQUOTATIONITEM

**Centralreqforquotationitem**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralRequestForQuotation` | ✓ | |  |  |  |  |
| `CentralRequestForQuotationItem` | ✓ | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentItemText` |  | |  |  |  |  |
| `ProductType` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `ManufacturerPartNmbr` |  | |  |  |  |  |
| `Manufacturer` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `ItemDeliveryAddressID` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `PurchasingCentralMaterial` |  | |  |  |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `_CentralRequestForQuotation` | | ✓ | | | | |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_CntrlSupplierQuotationItem` | | ✓ | | | | |
| `_CntrlReqForQtanScheduleLine` | | ✓ | | | | |
| `_CentralRFQItemDistribution` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_Manufacturer` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_PurgDocumentItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralRequestForQuotation` | `I_CentralRequestForQuotation` | [1..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [0..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CntrlSupplierQuotationItem` | `I_CntrlSupplierQuotationItem` | [0..*] |
| `_CntrlReqForQtanScheduleLine` | `I_CntrlReqForQtanScheduleLine` | [0..1] |
| `_CentralRFQItemDistribution` | `I_CentralRFQItemDistribution` | [0..*] |
| `_CntrlReqForQuotationItemExtn` | `E_PurchasingDocumentItem` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@EndUserText.label: 'Central Request For Quotation Item'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.sqlViewName: 'ICNTRLRFQITEM'

@ObjectModel:{ representativeKey: 'CentralRequestForQuotationItem',
               semanticKey: 'CentralRequestForQuotationItem',
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #M
             }

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CentralReqForQuotationItem 
  as select from R_CentralReqForQuotationItem

    association [1..1] to I_CentralRequestForQuotation  as _CentralRequestForQuotation  on  $projection.CentralRequestForQuotation = _CentralRequestForQuotation.CentralRequestForQuotation
  
    association [0..1] to I_PurchasingDocumentCategory  as _PurchasingDocumentCategory  on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory
  
    association [0..1] to I_IncotermsClassification     as _IncotermsClassification     on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  
    association [0..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant
  
    association [0..1] to I_UnitOfMeasure               as _OrderQuantityUnit           on  $projection.OrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure
  
    association [0..*] to I_CntrlSupplierQuotationItem  as _CntrlSupplierQuotationItem  on  $projection.CentralRequestForQuotation     = _CntrlSupplierQuotationItem.CentralRequestForQuotation
                                                                                        and $projection.CentralRequestForQuotationItem = _CntrlSupplierQuotationItem.CentralRequestForQuotationItem
    association [0..1] to I_CntrlReqForQtanScheduleLine as _CntrlReqForQtanScheduleLine on  $projection.CentralRequestForQuotation     = _CntrlReqForQtanScheduleLine.CentralRequestForQuotation
                                                                                        and $projection.CentralRequestForQuotationItem = _CntrlReqForQtanScheduleLine.CentralRequestForQuotationItem
                                                                                        and _CntrlReqForQtanScheduleLine.ScheduleLine  = '0001'
  
    association [0..*] to I_CentralRFQItemDistribution  as _CentralRFQItemDistribution  on  $projection.CentralRequestForQuotation     = _CentralRFQItemDistribution.CentralRequestForQuotation
                                                                                        and $projection.CentralRequestForQuotationItem = _CentralRFQItemDistribution.CentralRequestForQuotationItem

----Extension Association
  association [1..1] to E_PurchasingDocumentItem       as _CntrlReqForQuotationItemExtn on  $projection.CentralRequestForQuotation     = _CntrlReqForQuotationItemExtn.PurchasingDocument
                                                                                        and $projection.CentralRequestForQuotationItem = _CntrlReqForQuotationItemExtn.PurchasingDocumentItem
                                                                                        
{
      @ObjectModel: { foreignKey.association: '_CentralRequestForQuotation' }
  key CentralRequestForQuotation,
  key CentralRequestForQuotationItem,

      @ObjectModel: { foreignKey.association: '_PurchasingDocumentCategory' }
      PurchasingDocumentCategory,
      PurchasingDocumentItemText,

      @ObjectModel.foreignKey.association: '_ProductType'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProductTypeCode'
      ProductType,
      ProductTypeCode as ProductTypeCode,
      ManufacturerMaterial,
      ManufacturerPartNmbr,
      Manufacturer,
      MaterialGroup,

      @ObjectModel: { foreignKey.association: '_Plant' }
      Plant,

      ManualDeliveryAddressID,
      ReferenceDeliveryAddressID,
      AddressID,
      ItemDeliveryAddressID,
      @ObjectModel: { foreignKey.association: '_IncotermsClassification' }
      IncotermsClassification,

      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,

      @Semantics.unitOfMeasure: true
      @ObjectModel: { foreignKey.association: '_OrderQuantityUnit' }
      OrderQuantityUnit,
      OrderItemQtyToBaseQtyNmrtr,
      OrderItemQtyToBaseQtyDnmntr,
      OrderPriceUnitToOrderUnitNmrtr,
      OrdPriceUnitToOrderUnitDnmntr,

      @Semantics.unitOfMeasure: true
      BaseUnit,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      RequirementTracking,
      PurchasingCentralMaterial,
      PurchasingDocumentItemCategory,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _CentralRFQItemDistribution,

      @Semantics.currencyCode: true
      DocumentCurrency,

      /*Associations*/
      _CentralRequestForQuotation,
      _IncotermsClassification,
      _PurchasingDocumentCategory,
//      _ManufacturerMaterial,
      _ProductType,
      _Manufacturer,
//      _MaterialGroup,
      _Plant,
      //_ManualDeliveryAddress,
      //_ReferenceDeliveryAddress,
      _BaseUnit,
      _OrderQuantityUnit,
      _CntrlSupplierQuotationItem,
      _PurgDocumentItemCategory,
      _CntrlReqForQtanScheduleLine
}
where
  PurchasingDocumentCategory = 'N'
```
