---
name: C_PURCHASEORDERDEX
description: "Data Extraction for Purchase Order"
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
semantic_en: "Data Extraction for Purchase Order — Consumption CDS view based on I_PurchaseOrderAPI01."
semantic_vi: "Data Extraction for Purchase Order — CDS view tiêu dùng dựa trên I_PurchaseOrderAPI01."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "purchase"
  - "order"
  - "type"
  - "subtype"
  - "purchasing"
  - "document"
  - "origin"
  - "creation"
  - "date"
tags:
  - AC
  - component:AC
  - consumption-view
  - order
  - purchase-order
---
# C_PURCHASEORDERDEX

**Data Extraction for Purchase Order**

| Property | Value |
|---|---|
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
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
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
| `VATRegistrationCountry` |  | |  |  |  |  |
| `PurgReasonForDocCancellation` |  | |  |  |  |  |
| `PurgReleaseTimeTotalAmount` |  | |  |  |  |  |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchaseOrderType` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplyingSupplier` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrderItem` | `C_PurchaseOrderItemDEX` | [0..*] |
| `_HeaderExtension` | `E_PurchasingDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label                      : 'Data Extraction for Purchase Order'
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern        : #ANALYTICAL_FACT
              }

@VDM.viewType                           : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations   : true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'ekko', role: #MAIN,
                        viewElement     : ['PurchaseOrder' ],
                        tableElement    : ['ebeln' ]
                      }
                    ]
        }
    }
}
@Analytics.technicalName: 'CMMPURORDDEX'
@ObjectModel.sapObjectNodeType.name: 'PurchaseOrder'
@ObjectModel.compositionRoot: true

define view entity C_PurchaseOrderDEX
  as select from I_PurchaseOrderAPI01

  association [0..*] to C_PurchaseOrderItemDEX as _PurchaseOrderItem       on  $projection.PurchaseOrder = _PurchaseOrderItem.PurchaseOrder
  association [0..1] to E_PurchasingDocument as _HeaderExtension on $projection.PurchaseOrder = _HeaderExtension.PurchasingDocument
  
  association to one I_PurchaseOrderType          as _PurchaseOrderType         on _PurchaseOrderType.PurchaseOrderType = $projection.PurchaseOrderType
  
  association to one I_Supplier                   as _Supplier                   on  $projection.Supplier = _Supplier.Supplier

  association to one I_Supplier                   as _SupplyingSupplier          on  $projection.SupplyingSupplier = _SupplyingSupplier.Supplier

  association to one I_Supplier                   as _InvoicingParty             on  $projection.InvoicingParty = _InvoicingParty.Supplier 
  
  association to one I_Currency                   as _DocumentCurrency           on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  
  association to one I_Plant                      as _SupplyingPlant             on  $projection.SupplyingPlant = _SupplyingPlant.Plant
  
  association to one I_PurchasingOrganization     as _PurchasingOrganization     on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association to one I_PurchasingGroup            as _PurchasingGroup            on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association to one I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  
  association to one  I_Language                  as _Language                   on  $projection.Language = _Language.Language
 
  
  
  
{
  key PurchaseOrder                                             as PurchaseOrder,
 
      @ObjectModel.foreignKey.association: '_PurchaseOrderType'     
      PurchaseOrderType,
      PurchaseOrderSubtype,
      PurchasingDocumentOrigin,

      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.businessDate.at: true
      PurchaseOrderDate,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'      
      Language,
      CorrespncExternalReference,
      CorrespncInternalReference,

      //Status
      PurchasingDocumentDeletionCode,
      ReleaseIsNotCompleted,
      PurchasingCompletenessStatus,
      PurchasingProcessingStatus,
      PurgReleaseSequenceStatus,
      ReleaseCode,

      //Organization
      @ObjectModel.foreignKey.association: '_CompanyCode'      
      CompanyCode,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'      
      PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'      
      PurchasingGroup,

      //Supplier
      @ObjectModel.foreignKey.association: '_Supplier'         
      Supplier,
      ManualSupplierAddressID,
      SupplierRespSalesPersonName,
      SupplierPhoneNumber,
      @ObjectModel.foreignKey.association: '_SupplyingSupplier'         
      SupplyingSupplier,
      @ObjectModel.foreignKey.association: '_SupplyingPlant' 
      SupplyingPlant,
      @ObjectModel.foreignKey.association: '_InvoicingParty'       
      InvoicingParty,
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
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsVersion,
      IncotermsLocation1,
      IncotermsLocation2,

      //Intratat
      IsIntrastatReportingRelevant,
      IsIntrastatReportingExcluded,

      //Pricing
      PricingDocument,
      PricingProcedure,

      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      DocumentCurrency,

      ValidityStartDate,
      ValidityEndDate,

      ExchangeRate,
      ExchangeRateIsFixed,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      TaxReturnCountry,
      VATRegistrationCountry,
      PurgReasonForDocCancellation,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurgReleaseTimeTotalAmount,
      
      
      
     @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PurchaseOrderItem,
      
      _CompanyCode,
      _PurchaseOrderType,
      _Supplier,
      _SupplyingSupplier,
      _InvoicingParty,
      _PurchasingOrganization,
      _PurchasingGroup,
      _DocumentCurrency,
      _SupplyingPlant,
      _Language
      
      
}
```
