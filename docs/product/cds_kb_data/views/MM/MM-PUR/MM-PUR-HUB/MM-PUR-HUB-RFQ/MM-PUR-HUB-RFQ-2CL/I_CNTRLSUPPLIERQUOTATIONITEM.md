---
name: I_CNTRLSUPPLIERQUOTATIONITEM
description: "Cntrlsupplierquotationitem"
app_component: MM-PUR-HUB-RFQ-2CL
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
  - MM-PUR-HUB
  - interface-view
  - supplier
  - item-level
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_CNTRLSUPPLIERQUOTATIONITEM

**Cntrlsupplierquotationitem**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
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
| `CentralSupplierQuotation` | ✓ | |  |  |  |  |
| `CentralSupplierQuotationItem` | ✓ | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentItemText` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `PurchasingCentralMaterial` |  | |  |  |  |  |
| `ProductType` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
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
| `RequirementTracking` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `PurgDocPriceDate` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `GrossAmount` |  | |  |  |  |  |
| `EffectiveAmount` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `ItemDeliveryAddressID` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `CentralRequestForQuotation` |  | |  |  |  |  |
| `CentralRequestForQuotationItem` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `_CentralSupplierQuotation` | | ✓ | | | | |
| `_CentralReqForQuotationItem` | | ✓ | | | | |
| `_CntrlSuplrQtanScheduleLine` | | ✓ | | | | |
| `_CntrlSupplierQtanItemPricing` | | ✓ | | | | |
| `_CntrlSuplrQuotationItemDistr` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurgDocumentCategory` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_OrderPriceUnit` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_PurgDocumentItemCategory` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralSupplierQuotation` | `I_CentralSupplierQuotation` | [1..1] |
| `_CentralReqForQuotationItem` | `I_CentralReqForQuotationItem` | [1..1] |
| `_CntrlSuplrQtanScheduleLine` | `I_CntrlSuplrQtanScheduleLine` | [0..1] |
| `_CntrlSupplierQtanItemPricing` | `I_CntrlSupplierQtanItemPricing` | [1..*] |
| `_CntrlSuplrQuotationItemDistr` | `I_CntrlSuplrQuotationItemDistr` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTRLQTNITM'
@VDM.viewType: #BASIC
@EndUserText.label: 'Central Supplier Quotation Item'
@AbapCatalog.preserveKey: true

@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel:{ representativeKey: 'CentralSupplierQuotationItem',
               semanticKey: 'CentralSupplierQuotationItem',
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #L }

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CntrlSupplierQuotationItem
  as select from R_CntrlSupplierQuotationItem

  association [1..1] to I_CentralSupplierQuotation     as _CentralSupplierQuotation     on  $projection.CentralSupplierQuotation = _CentralSupplierQuotation.CentralSupplierQuotation


  association [1..1] to I_CentralReqForQuotationItem   as _CentralReqForQuotationItem   on  $projection.CentralRequestForQuotation     = _CentralReqForQuotationItem.CentralRequestForQuotation
                                                                                        and $projection.CentralRequestForQuotationItem = _CentralReqForQuotationItem.CentralRequestForQuotationItem

  association [0..1] to I_CntrlSuplrQtanScheduleLine   as _CntrlSuplrQtanScheduleLine   on  $projection.CentralSupplierQuotation     = _CntrlSuplrQtanScheduleLine.CentralSupplierQuotation
                                                                                        and $projection.CentralSupplierQuotationItem = _CntrlSuplrQtanScheduleLine.CentralSupplierQuotationItem
                                                                                        and _CntrlSuplrQtanScheduleLine.ScheduleLine = '0001'

  association [1..*] to I_CntrlSupplierQtanItemPricing as _CntrlSupplierQtanItemPricing on  $projection.CentralSupplierQuotation     = _CntrlSupplierQtanItemPricing.CentralSupplierQuotation
                                                                                        and $projection.CentralSupplierQuotationItem = _CntrlSupplierQtanItemPricing.CentralSupplierQuotationItem

  association [0..*] to I_CntrlSuplrQuotationItemDistr as _CntrlSuplrQuotationItemDistr on  $projection.CentralSupplierQuotation     = _CntrlSuplrQuotationItemDistr.CentralSupplierQuotation
                                                                                        and $projection.CentralSupplierQuotationItem = _CntrlSuplrQuotationItemDistr.CentralSupplierQuotationItem

{
      @ObjectModel: { foreignKey.association: '_CentralSupplierQuotation' }
  key R_CntrlSupplierQuotationItem.CentralSupplierQuotation,

  key R_CntrlSupplierQuotationItem.CentralSupplierQuotationItem,

      @ObjectModel: { foreignKey.association: '_PurgDocumentCategory' }
      R_CntrlSupplierQuotationItem.PurchasingDocumentCategory,
      R_CntrlSupplierQuotationItem.PurchasingDocumentItemText,

      //      @ObjectModel: { foreignKey.association: '_Material' }
      R_CntrlSupplierQuotationItem.Material,
      R_CntrlSupplierQuotationItem.PurchasingCentralMaterial,

      @ObjectModel.foreignKey.association: '_ProductType'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProductTypeCode'
      ProductType,
      R_CntrlSupplierQuotationItem.ProductTypeCode,

      //      @ObjectModel: { foreignKey.association: '_ManufacturerMaterial' }
      R_CntrlSupplierQuotationItem.ManufacturerMaterial,
      R_CntrlSupplierQuotationItem.SupplierMaterialNumber,
      R_CntrlSupplierQuotationItem.ManufacturerPartNmbr,
      R_CntrlSupplierQuotationItem.Manufacturer,

      //      @ObjectModel: { foreignKey.association: '_MaterialGroup' }
      R_CntrlSupplierQuotationItem.MaterialGroup,

      @ObjectModel: { foreignKey.association: '_Plant'}
      R_CntrlSupplierQuotationItem.Plant,
      R_CntrlSupplierQuotationItem.ManualDeliveryAddressID,
      R_CntrlSupplierQuotationItem.ReferenceDeliveryAddressID,

      @ObjectModel: { foreignKey.association: '_IncotermsClassification' }
      R_CntrlSupplierQuotationItem.IncotermsClassification,
      R_CntrlSupplierQuotationItem.IncotermsTransferLocation,
      R_CntrlSupplierQuotationItem.IncotermsLocation1,
      R_CntrlSupplierQuotationItem.IncotermsLocation2,
      R_CntrlSupplierQuotationItem.RequirementTracking,
      @Semantics.unitOfMeasure: true
      OrderPriceUnit,
      OrderPriceUnitToOrderUnitNmrtr,
      OrdPriceUnitToOrderUnitDnmntr,

      @Semantics.unitOfMeasure: true
      OrderQuantityUnit,
      OrderItemQtyToBaseQtyNmrtr,
      OrderItemQtyToBaseQtyDnmntr,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      @DefaultAggregation: #NONE
      OrderQuantity,

      PurgDocPriceDate,

      @Semantics.unitOfMeasure: true
      BaseUnit,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @DefaultAggregation: #NONE
      NetAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @DefaultAggregation: #NONE
      GrossAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @DefaultAggregation: #NONE
      EffectiveAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @DefaultAggregation: #NONE
      NetPriceAmount,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      NetPriceQuantity,

      AddressID,
      R_CntrlSupplierQuotationItem.ItemDeliveryAddressID,

      @Semantics.currencyCode: true
      @ObjectModel: { foreignKey.association: '_DocumentCurrency' }
      R_CntrlSupplierQuotationItem.DocumentCurrency,
      R_CntrlSupplierQuotationItem.PurchaseRequisition,
      R_CntrlSupplierQuotationItem.PurchaseRequisitionItem,
      R_CntrlSupplierQuotationItem.CentralRequestForQuotation,
      R_CntrlSupplierQuotationItem.CentralRequestForQuotationItem,
      R_CntrlSupplierQuotationItem.PurchasingInfoRecord,
      R_CntrlSupplierQuotationItem.PurchasingDocumentItemCategory,

      //associations
      //@ObjectModel.association.type: [#TO_COMPOSITION_ROOT ,#TO_COMPOSITION_PARENT]
      _CentralSupplierQuotation,
      //      _Material,
      _ProductType,
      //      _MaterialGroup,
      //      _ManufacturerMaterial,
      _Plant,
      //_ManualDeliveryAddress,
      //_ReferenceDeliveryAddress,
      _PurgDocumentCategory,
      _BaseUnit,
      _OrderQuantityUnit,
      _OrderPriceUnit,
      _DocumentCurrency,
      _CentralReqForQuotationItem,
      _PurgDocumentItemCategory,
      _IncotermsClassification,
      _CntrlSuplrQtanScheduleLine,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _CntrlSupplierQtanItemPricing,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _CntrlSuplrQuotationItemDistr
}
where
  R_CntrlSupplierQuotationItem.PurchasingDocumentCategory = 'T'
```
