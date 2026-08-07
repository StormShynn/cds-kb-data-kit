---
name: I_PURCHASEORDERAPI01
description: Purchase OrderAPI 01
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - purchase-order
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERAPI01

**Purchase OrderAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchaseOrderSubtype` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `CorrespncInternalReference` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  | `PurchaseOrderDeletionCode` |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `PurchasingCompletenessStatus` |  | |  |  |  |  |
| `PurchasingProcessingStatus` |  | |  |  |  |  |
| `PurgReleaseSequenceStatus` |  | |  |  |  |  |
| `ReleaseCode` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `ManualSupplierAddressID` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `SupplierQuotationExternalID` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `DownPaymentType` |  | |  |  |  |  |
| `DownPaymentPercentageOfTotAmt` |  | |  |  |  |  |
| `DownPaymentAmount` |  | |  |  |  |  |
| `DownPaymentDueDate` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IsIntrastatReportingRelevant` |  | |  |  |  |  |
| `IsIntrastatReportingExcluded` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `PricingProcedure` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `TaxReturnCountry` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `PurgReasonForDocCancellation` |  | |  |  |  |  |
| `PurgReleaseTimeTotalAmount` |  | |  |  |  |  |
| `PurgAggrgdProdCmplncSuplrSts` |  | |  |  |  |  |
| `PurgAggrgdProdMarketabilitySts` |  | |  |  |  |  |
| `PurgAggrgdSftyDataSheetStatus` |  | |  |  |  |  |
| `PurgProdCmplncTotDngrsGoodsSts` |  | |  |  |  |  |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchaseOrderType` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SupplyingSupplier` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_PurchaseOrderTypeText` | | ✓ | | | | |
| `_PurchaseOrderDeletionCodeText` | | ✓ | | | | |
| `_IncotermsClassificationText` | | ✓ | | | | |
| `_IncotermsVersionText` | | ✓ | | | | |
| `_DocumentCurrencyText` | | ✓ | | | | |
| `_TaxReturnCountryText` | | ✓ | | | | |
| `_VATRegistrationCountryText` | | ✓ | | | | |
| `_PurgTotProdCmplncSuplrStsT` | | ✓ | | | | |
| `_PurgTotProdMarketabilityStsT` | | ✓ | | | | |
| `_PurgAggrgdSftyDataSheetStsT` | | ✓ | | | | |
| `_PurgTotDangerousGoodsStsT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [0..*] |
| `_PurchaseOrderExtension` | `E_PurchasingDocument` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMPURORDAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType : #BASIC
@EndUserText.label: 'Purchase Order'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.representativeKey: 'PurchaseOrder'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_PurchaseOrderAPI01
  as select from R_PurchaseOrder

  association [0..*] to I_PurchaseOrderItemAPI01 as _PurchaseOrderItem       on  $projection.PurchaseOrder = _PurchaseOrderItem.PurchaseOrder

  --Extension Association
  association [1..1] to E_PurchasingDocument     as _PurchaseOrderExtension  on  $projection.PurchaseOrder = _PurchaseOrderExtension.PurchasingDocument


{
      //Key
  key PurchaseOrder,

      @ObjectModel.text.association: '_PurchaseOrderTypeText'
      PurchaseOrderType,
      PurchaseOrderSubtype,
      PurchasingDocumentOrigin,

      //Admin
      CreatedByUser,
      CreationDate,
      PurchaseOrderDate,
      Language,
      CorrespncExternalReference,
      CorrespncInternalReference,

      //Status
      @ObjectModel.text.association: '_PurchaseOrderDeletionCodeText'
      PurchaseOrderDeletionCode as PurchasingDocumentDeletionCode,
      ReleaseIsNotCompleted,
      PurchasingCompletenessStatus,
      PurchasingProcessingStatus,
      PurgReleaseSequenceStatus,
      ReleaseCode,

      //Organization
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true }]          //CustomUI
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,

      //Supplier
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true }]       //CustomUI
      Supplier,
      ManualSupplierAddressID,
      SupplierRespSalesPersonName,
      SupplierPhoneNumber,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true }]       //CustomUI
      SupplyingSupplier,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }]       //CustomUI
      SupplyingPlant,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true }]       //CustomUI
      InvoicingParty,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' }, useAsTemplate: true }]       //CustomUI
      Customer,

      //Quotation
      SupplierQuotationExternalID,

      //PaymentTerms
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      NetPaymentDays,
      CashDiscount1Percent,
      CashDiscount2Percent,

      //DownPayment
      DownPaymentType,
      DownPaymentPercentageOfTotAmt,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      DownPaymentAmount,
      DownPaymentDueDate,

      //Incoterms
      @ObjectModel.text.association: '_IncotermsClassificationText'
      IncotermsClassification,
      IncotermsTransferLocation,
      @ObjectModel.text.association: '_IncotermsVersionText'
      IncotermsVersion,
      IncotermsLocation1,
      IncotermsLocation2,

      //Intratat
      IsIntrastatReportingRelevant,
      IsIntrastatReportingExcluded,

      //Pricing
      PricingDocument,
      PricingProcedure,
      @Semantics.currencyCode:true
      @ObjectModel.text.association: '_DocumentCurrencyText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
      DocumentCurrency,

      ValidityStartDate,
      ValidityEndDate,

      ExchangeRate,
      ExchangeRateIsFixed,

      LastChangeDateTime,

      @ObjectModel.text.association: '_TaxReturnCountryText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CountryVH', element: 'Country' }, useAsTemplate: true }]       //CustomUI
      TaxReturnCountry,
      VATRegistration,
      @ObjectModel.text.association: '_VATRegistrationCountryText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CountryVH', element: 'Country' }, useAsTemplate: true }]       //CustomUI
      VATRegistrationCountry,
      PurgReasonForDocCancellation,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurgReleaseTimeTotalAmount,  
      
      @ObjectModel.text.association: '_PurgTotProdCmplncSuplrStsT'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PurgAggrgdProdCmplncSuplrSts', element: 'PurgAggrgdProdCmplncSuplrSts' },useAsTemplate: true }]       //CustomUI
      PurgAggrgdProdCmplncSuplrSts,
      @ObjectModel.text.association: '_PurgTotProdMarketabilityStsT'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PurgTotProdMarketabilitySts', element: 'PurgAggrgdProdMarketabilitySts' },useAsTemplate: true }]       //CustomUI
      PurgAggrgdProdMarketabilitySts,
      @ObjectModel.text.association: '_PurgAggrgdSftyDataSheetStsT'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PurgAggrgdSftyDataSheetSts', element: 'PurgAggrgdSftyDataSheetStatus' },useAsTemplate: true }]       //CustomUI
      PurgAggrgdSftyDataSheetStatus,      
      @ObjectModel.text.association: '_PurgTotDangerousGoodsStsT'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PurgProdCmplncTotDngrsGdsSts', element: 'PurgProdCmplncTotDngrsGoodsSts' },useAsTemplate: true }]       //CustomUI
      PurgProdCmplncTotDngrsGoodsSts, 

      // Associations

      _PurchaseOrderItem,
      _Supplier,
      _PurchasingGroup,
      
      // CustomUI additions                                 //too many associations ATC
      _PurchaseOrderType,
      _PurchasingOrganization,
      _CompanyCode,
      _SupplyingSupplier,
      _InvoicingParty,
      _SupplyingPlant,
      
      // Text associations for CustomUI
      _PurchaseOrderTypeText,
      _PurchaseOrderDeletionCodeText,
      _IncotermsClassificationText,
      _IncotermsVersionText,
      _DocumentCurrencyText,
      _TaxReturnCountryText,
      _VATRegistrationCountryText,
      _PurgTotProdCmplncSuplrStsT,
      _PurgTotProdMarketabilityStsT,
      _PurgAggrgdSftyDataSheetStsT,
      _PurgTotDangerousGoodsStsT
}
```
