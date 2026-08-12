---
name: C_PURCHASECONTRACTITEMDEX
description: "Purchase ContractITEMDEX"
app_component: MM-PUR-ANA-2CL
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
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - purchase-contract
  - contract
  - item-level
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURCHASECONTRACTITEMDEX

**Purchase ContractITEMDEX**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `PurchaseContract` | ✓ | |  |  |  |  |
| `PurchaseContractItem` | ✓ | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ContractNetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `InvoiceIsExpected` |  | |  |  |  |  |
| `PurchaseContractItemText` |  | |  |  |  |  |
| `InvoiceIsGoodsReceiptBased` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  |  |  |
| `TargetAmount` |  | |  |  |  |  |
| `PurchaseContractType` |  | | `_PurchaseContractAPI01` | `PurchaseContractType` |  |  |
| `PurchasingDocumentCategory` |  | | `_PurchaseContractAPI01` | `PurchasingDocumentCategory` |  |  |
| `PurchasingGroup` |  | | `_PurchaseContractAPI01` | `PurchasingGroup` |  |  |
| `PurchasingOrganization` |  | | `_PurchaseContractAPI01` | `PurchasingOrganization` |  |  |
| `ValidityStartDate` |  | | `_PurchaseContractAPI01` | `ValidityStartDate` |  |  |
| `ValidityEndDate` |  | | `_PurchaseContractAPI01` | `ValidityEndDate` |  |  |
| `Supplier` |  | | `_PurchaseContractAPI01` | `Supplier` |  |  |
| `InvoicingParty` |  | | `_PurchaseContractAPI01` | `InvoicingParty` |  |  |
| `SupplyingSupplier` |  | | `_PurchaseContractAPI01` | `SupplyingSupplier` |  |  |
| `CreationDate` |  | | `_PurchaseContractAPI01` | `CreationDate` |  |  |
| `LastChangeDateTime` |  | | `_PurchaseContractAPI01` | `LastChangeDateTime` |  |  |
| `ExchangeRate` |  | |  | `cast ( _PurchaseContractAPI01.ExchangeRate as fis_exchange_rate preserving type)` |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `VolumeUnit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Subcontractor` |  | |  |  |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `DeliveryAddressID` |  | |  | `cast ( DeliveryAddressID as adrn2_ll preserving type)` |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `PriceIsToBePrinted` |  | |  |  |  |  |
| `SupplierConfirmationControlKey` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `PurgDocPriceDate` |  | |  |  |  |  |
| `PurchasingInfoRecordUpdateCode` |  | |  |  |  |  |
| `PurgDocReleaseOrderQuantity` |  | |  |  |  |  |
| `PurgDocOrderAcknNumber` |  | |  |  |  |  |
| `PurchasingPriceIsEstimated` |  | |  | `PurgDocEstimatedPrice` |  |  |
| `IsInfoAtRegistration` |  | |  |  |  |  |
| `NoDaysReminder1` |  | |  |  |  |  |
| `NoDaysReminder2` |  | |  |  |  |  |
| `NoDaysReminder3` |  | |  |  |  |  |
| `StockType` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `IsOrderAcknRqd` |  | |  |  |  |  |
| `ShippingInstruction` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `MaterialType` |  | |  |  |  |  |
| `PurchaseContractItemFormatted` |  | |  | `cast ( PurchaseContractItemFormatted as mm_pur_ctr_itm_frmtd preserving type)` |  |  |
| `PurchasingContractDeletionCode` |  | |  |  |  |  |
| `PurchaseContractItemUniqueID` |  | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `_PurchaseContractDEX` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_PurgDocumentItemCategory` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurchasingContractType` | | ✓ | | | | |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_SupplyingSupplier` | | ✓ | | | | |
| `_OrderPriceUnit` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Subcontractor` | | ✓ | | | | |
| `_ReferenceDeliveryAddress` | | ✓ | | | | |
| `_ManualDeliveryAddress` | | ✓ | | | | |
| `_DeliveryAddress` | | ✓ | | | | |
| `_PurgInfoRecordUpdateCode` | | ✓ | | | | |
| `_StockType` | | ✓ | | | | |
| `_ShippingInstruction` | | ✓ | | | | |
| `_ServicePerformer` | | ✓ | | | | |
| `_ProductTypeCode` | | ✓ | | | | |
| `_MaterialType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HeaderExtension` | `E_PurchasingDocument` | [1] |
| `_ExtensionItem` | `E_PurchasingDocumentItem` | [1] |
| `_PurchaseContractDEX` | `C_PurchaseContractDEX` | [1..1] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_PurgDocumentItemCategory` | `I_PurgDocumentItemCategory` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PurchasingContractType` | `I_PurchaseContractType` | [0..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_InvoicingParty` | `I_Supplier` | [0..1] |
| `_SupplyingSupplier` | `I_Supplier` | [0..1] |
| `_OrderPriceUnit` | `I_UnitOfMeasure` | [1..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Subcontractor` | `I_Supplier` | [0..1] |
| `_ReferenceDeliveryAddress` | `I_Address_2` | [0..1] |
| `_ManualDeliveryAddress` | `I_Address_2` | [0..1] |
| `_DeliveryAddress` | `I_Address_2` | [0..1] |
| `_PurgInfoRecordUpdateCode` | `I_PurgInfoRecordUpdateCode` | [0..1] |
| `_StockType` | `I_InventoryUsabilityCode` | [0..1] |
| `_ShippingInstruction` | `I_ShippingInstruction` | [1..1] |
| `_ServicePerformer` | `I_BusinessPartner` | [0..1] |
| `_ProductTypeCode` | `I_ProductTypeCode` | [0..1] |
| `_MaterialType` | `I_ProductType_2` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPURCONTITMDEX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label: 'Data Extraction for Purchase Contract Item'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ]
              }

@VDM.viewType                           : #CONSUMPTION
@Metadata.ignorePropagatedAnnotations   : true

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'ekpo', role: #MAIN,
                        viewElement     : ['PurchaseContract','PurchaseContractItem'],
                        tableElement    : ['ebeln','ebelp' ]
                      },
                      {
                        table           : 'ekko', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement     : ['PurchaseContract'],
                        tableElement    : ['ebeln']
                      }
                    ]
        }
    }
}

@ObjectModel.sapObjectNodeType.name: 'PurchaseContractItem'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_PurchaseContractItemDEX
  as select from I_PurchaseContractItemAPI01

  association [1] to    E_PurchasingDocument         as _HeaderExtension            on $projection.PurchaseContract = _HeaderExtension.PurchasingDocument

  association [1] to    E_PurchasingDocumentItem     as _ExtensionItem              on  $projection.PurchaseContract     = _ExtensionItem.PurchasingDocument
                                                                                    and $projection.PurchaseContractItem = _ExtensionItem.PurchasingDocumentItem

  association [1..1] to C_PurchaseContractDEX        as _PurchaseContractDEX        on $projection.PurchaseContract = _PurchaseContractDEX.PurchaseContract

  association [1..1] to I_Currency                   as _DocumentCurrency           on $projection.DocumentCurrency = _DocumentCurrency.Currency

  association [1..1] to I_UnitOfMeasure              as _OrderQuantityUnit          on $projection.OrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure

  association [0..1] to I_StorageLocation            as _StorageLocation            on  $projection.Plant           = _StorageLocation.Plant
                                                                                    and $projection.StorageLocation = _StorageLocation.StorageLocation

  association [1..1] to I_ProductGroup_2             as _ProductGroup               on $projection.MaterialGroup = _ProductGroup.ProductGroup

  association [0..1] to I_Product                    as _Product                    on $projection.Material = _Product.Product

  association [1..1] to I_PurgDocumentItemCategory   as _PurgDocumentItemCategory   on $projection.PurchasingDocumentItemCategory = _PurgDocumentItemCategory.PurchasingDocumentItemCategory

  association [1..1] to I_Plant                      as _Plant                      on $projection.Plant = _Plant.Plant

  association [0..1] to I_PurchaseContractType       as _PurchasingContractType     on  $projection.PurchaseContractType = _PurchasingContractType.PurchaseContractType

  association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCategory on $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory

  association [1..1] to I_PurchasingGroup            as _PurchasingGroup            on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization     on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [0..1] to I_Supplier                   as _Supplier                   on  $projection.Supplier = _Supplier.Supplier

  association [0..1] to I_Supplier                   as _InvoicingParty             on  $projection.InvoicingParty = _InvoicingParty.Supplier

  association [0..1] to I_Supplier                   as _SupplyingSupplier          on  $projection.SupplyingSupplier = _SupplyingSupplier.Supplier

  association [1..1] to I_UnitOfMeasure              as _OrderPriceUnit             on $projection.OrderPriceUnit = _OrderPriceUnit.UnitOfMeasure

  association [1..1] to I_UnitOfMeasure              as _VolumeUnit                 on $projection.VolumeUnit = _VolumeUnit.UnitOfMeasure

  association [0..1] to I_Customer                   as _Customer                   on $projection.Customer = _Customer.Customer

  association [0..1] to I_Supplier                   as _Subcontractor              on $projection.Subcontractor = _Subcontractor.Supplier

  association [0..1] to I_Address_2                  as _ReferenceDeliveryAddress   on  $projection.ReferenceDeliveryAddressID              = _ReferenceDeliveryAddress.AddressID
                                                                                    and _ReferenceDeliveryAddress.AddressPersonID           = ''
                                                                                    and _ReferenceDeliveryAddress.AddressRepresentationCode = ''

  association [0..1] to I_Address_2                  as _ManualDeliveryAddress      on  $projection.ManualDeliveryAddressID              = _ManualDeliveryAddress.AddressID
                                                                                    and _ManualDeliveryAddress.AddressPersonID           = ''
                                                                                    and _ManualDeliveryAddress.AddressRepresentationCode = ''

  association [0..1] to I_Address_2                  as _DeliveryAddress            on  $projection.DeliveryAddressID              = _DeliveryAddress.AddressID
                                                                                    and _DeliveryAddress.AddressPersonID           = ''
                                                                                    and _DeliveryAddress.AddressRepresentationCode = ''

  association [0..1] to I_PurgInfoRecordUpdateCode   as _PurgInfoRecordUpdateCode   on $projection.PurchasingInfoRecordUpdateCode = _PurgInfoRecordUpdateCode.PurchasingInfoRecordUpdateCode

  association [0..1] to I_InventoryUsabilityCode     as _StockType                  on $projection.StockType = _StockType.InventoryUsabilityCode

  association [1..1] to I_ShippingInstruction        as _ShippingInstruction        on $projection.ShippingInstruction = _ShippingInstruction.ShippingInstruction

  association [0..1] to I_BusinessPartner            as _ServicePerformer           on $projection.ServicePerformer = _ServicePerformer.BusinessPartner

  association [0..1] to I_ProductTypeCode            as _ProductTypeCode            on $projection.ProductTypeCode = _ProductTypeCode.ProductTypeCode

  association [0..1] to I_ProductType_2              as _MaterialType               on $projection.MaterialType = _MaterialType.ProductType
{
  key PurchaseContract                                                                 as PurchaseContract,
  key PurchaseContractItem                                                             as PurchaseContractItem,

      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      @Semantics.currencyCode: true
      DocumentCurrency                                                                 as DocumentCurrency,

      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit                                                                as OrderQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetQuantity                                                                   as TargetQuantity,

      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation                                                                  as StorageLocation,

      @ObjectModel.foreignKey.association: '_ProductGroup'
      MaterialGroup                                                                    as MaterialGroup,

      @ObjectModel.foreignKey.association: '_Product'
      Material                                                                         as Material,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ContractNetPriceAmount                                                           as ContractNetPriceAmount,

      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      NetPriceQuantity                                                                 as NetPriceQuantity,

      @ObjectModel.foreignKey.association: '_PurgDocumentItemCategory'
      PurchasingDocumentItemCategory                                                   as PurchasingDocumentItemCategory,

      InvoiceIsExpected                                                                as InvoiceIsExpected,

      @Semantics.text: true
      PurchaseContractItemText                                                         as PurchaseContractItemText,

      InvoiceIsGoodsReceiptBased                                                       as InvoiceIsGoodsReceiptBased,

      GoodsReceiptIsExpected                                                           as GoodsReceiptIsExpected,

      @ObjectModel.foreignKey.association: '_Plant'
      Plant                                                                            as Plant,

      EvaldRcptSettlmtIsAllowed                                                        as EvaldRcptSettlmtIsAllowed,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount                                                                     as TargetAmount,

      @ObjectModel.foreignKey.association: '_PurchasingContractType'
      _PurchaseContractAPI01.PurchaseContractType                                      as PurchaseContractType,

      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      _PurchaseContractAPI01.PurchasingDocumentCategory                                as PurchasingDocumentCategory,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      _PurchaseContractAPI01.PurchasingGroup                                           as PurchasingGroup,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      _PurchaseContractAPI01.PurchasingOrganization                                    as PurchasingOrganization,

      _PurchaseContractAPI01.ValidityStartDate                                         as ValidityStartDate,

      _PurchaseContractAPI01.ValidityEndDate                                           as ValidityEndDate,

      @ObjectModel.foreignKey.association: '_Supplier'
      _PurchaseContractAPI01.Supplier                                                  as Supplier,

      @ObjectModel.foreignKey.association: '_InvoicingParty'
      _PurchaseContractAPI01.InvoicingParty                                            as InvoicingParty,

      @ObjectModel.foreignKey.association: '_SupplyingSupplier'
      _PurchaseContractAPI01.SupplyingSupplier                                         as SupplyingSupplier,

      @Semantics.systemDate.createdAt: true
      _PurchaseContractAPI01.CreationDate                                              as CreationDate,

      @Semantics.systemDateTime.lastChangedAt: true
      _PurchaseContractAPI01.LastChangeDateTime                                        as LastChangeDateTime,

      cast ( _PurchaseContractAPI01.ExchangeRate as fis_exchange_rate preserving type) as ExchangeRate,

      @ObjectModel.foreignKey.association: '_OrderPriceUnit'
      OrderPriceUnit                                                                   as OrderPriceUnit,

      @ObjectModel.foreignKey.association: '_VolumeUnit'
      VolumeUnit                                                                       as VolumeUnit,

      @ObjectModel.foreignKey.association: '_Customer'
      Customer                                                                         as Customer,

      @ObjectModel.foreignKey.association: '_Subcontractor'
      Subcontractor                                                                    as Subcontractor,

      @ObjectModel.foreignKey.association: '_ReferenceDeliveryAddress'
      ReferenceDeliveryAddressID                                                       as ReferenceDeliveryAddressID,

      @ObjectModel.foreignKey.association: '_ManualDeliveryAddress'
      ManualDeliveryAddressID                                                          as ManualDeliveryAddressID,

      @ObjectModel.foreignKey.association: '_DeliveryAddress'
      cast ( DeliveryAddressID as adrn2_ll preserving type)                            as DeliveryAddressID,

      AccountAssignmentCategory                                                        as AccountAssignmentCategory,

      MultipleAcctAssgmtDistribution                                                   as MultipleAcctAssgmtDistribution,

      OrdPriceUnitToOrderUnitDnmntr                                                    as OrdPriceUnitToOrderUnitDnmntr,

      OrderPriceUnitToOrderUnitNmrtr                                                   as OrderPriceUnitToOrderUnitNmrtr,

      SupplierMaterialNumber                                                           as SupplierMaterialNumber,

      UnderdelivTolrtdLmtRatioInPct                                                    as UnderdelivTolrtdLmtRatioInPct,

      PriceIsToBePrinted                                                               as PriceIsToBePrinted,

      SupplierConfirmationControlKey                                                   as SupplierConfirmationControlKey,

      OverdelivTolrtdLmtRatioInPct                                                     as OverdelivTolrtdLmtRatioInPct,

      UnlimitedOverdeliveryIsAllowed                                                   as UnlimitedOverdeliveryIsAllowed,

      @Semantics.businessDate.at: true
      PurgDocPriceDate                                                                 as PurgDocPriceDate,

      @ObjectModel.foreignKey.association: '_PurgInfoRecordUpdateCode'
      PurchasingInfoRecordUpdateCode                                                   as PurchasingInfoRecordUpdateCode,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      PurgDocReleaseOrderQuantity                                                      as PurgDocReleaseOrderQuantity,

      PurgDocOrderAcknNumber                                                           as PurgDocOrderAcknNumber,

      PurgDocEstimatedPrice                                                            as PurchasingPriceIsEstimated,

      IsInfoAtRegistration                                                             as IsInfoAtRegistration,

      NoDaysReminder1                                                                  as NoDaysReminder1,

      NoDaysReminder2                                                                  as NoDaysReminder2,

      NoDaysReminder3                                                                  as NoDaysReminder3,

      @ObjectModel.foreignKey.association: '_StockType'
      StockType                                                                        as StockType,

      TaxCode                                                                          as TaxCode,

      RequirementTracking                                                              as RequirementTracking,

      IsOrderAcknRqd                                                                   as IsOrderAcknRqd,

      @ObjectModel.foreignKey.association: '_ShippingInstruction'
      ShippingInstruction                                                              as ShippingInstruction,

      GoodsReceiptIsNonValuated                                                        as GoodsReceiptIsNonValuated,

      @ObjectModel.foreignKey.association: '_ServicePerformer'
      ServicePerformer                                                                 as ServicePerformer,

      @ObjectModel.foreignKey.association: '_ProductTypeCode'
      ProductTypeCode                                                                  as ProductTypeCode,

      @ObjectModel.foreignKey.association: '_MaterialType'
      MaterialType                                                                     as MaterialType,

      cast ( PurchaseContractItemFormatted as mm_pur_ctr_itm_frmtd preserving type)    as PurchaseContractItemFormatted,

      PurchasingContractDeletionCode                                                   as PurchasingContractDeletionCode,

      PurchaseContractItemUniqueID                                                     as PurchaseContractItemUniqueID,

      PurchasingCategory                                                               as PurchasingCategory,

      @Semantics.text: true
      PurgCatName                                                                      as PurgCatName,
      
      @ObjectModel.association.type: [ #TO_COMPOSITION_ROOT,
                                       #TO_COMPOSITION_PARENT ]      
      _PurchaseContractDEX,
      
      _DocumentCurrency,
      _OrderQuantityUnit,
      _StorageLocation,
      _ProductGroup,
      _Product,
      _PurgDocumentItemCategory,
      _Plant,
      _PurchasingContractType,
      _PurchasingDocumentCategory,
      _PurchasingGroup,
      _PurchasingOrganization,
      _Supplier,
      _InvoicingParty,
      _SupplyingSupplier,
      _OrderPriceUnit,
      _VolumeUnit,
      _Customer,
      _Subcontractor,
      _ReferenceDeliveryAddress,
      _ManualDeliveryAddress,
      _DeliveryAddress,
      _PurgInfoRecordUpdateCode,
      _StockType,
      _ShippingInstruction,
      _ServicePerformer,
      _ProductTypeCode,
      _MaterialType               
}
where
        not(
          IsStatisticalItem = 'X'
          and Material      = ''
        )
```
