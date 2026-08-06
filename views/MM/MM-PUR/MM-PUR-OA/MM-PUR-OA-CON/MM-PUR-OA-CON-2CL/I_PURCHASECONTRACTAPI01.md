---
name: I_PURCHASECONTRACTAPI01
description: Purchase ContractAPI 01
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - purchase-contract
  - contract
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASECONTRACTAPI01

**Purchase ContractAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseContract` | `I_PurchaseContract.PurchaseContract` |
| `PurchaseContractType` | `I_PurchaseContract.PurchaseContractType` |
| `PurchasingDocumentCategory` | `I_PurchaseContract.PurchasingDocumentCategory` |
| `LastChangeDateTime` | `I_PurchaseContract.LastChangeDateTime` |
| `CreationDate` | `I_PurchaseContract.CreationDate` |
| `Supplier` | `I_PurchaseContract.Supplier` |
| `CompanyCode` | `I_PurchaseContract.CompanyCode` |
| `PurchasingOrganization` | `I_PurchaseContract.PurchasingOrganization` |
| `PurchasingGroup` | `I_PurchaseContract.PurchasingGroup` |
| `DocumentCurrency` | `I_PurchaseContract.DocumentCurrency` |
| `IncotermsClassification` | `I_PurchaseContract.IncotermsClassification` |
| `IncotermsTransferLocation` | `I_PurchaseContract.IncotermsTransferLocation` |
| `PaymentTerms` | `I_PurchaseContract.PaymentTerms` |
| `CashDiscount1Days` | `I_PurchaseContract.CashDiscount1Days` |
| `CashDiscount2Days` | `I_PurchaseContract.CashDiscount2Days` |
| `NetPaymentDays` | `I_PurchaseContract.NetPaymentDays` |
| `CashDiscount1Percent` | `I_PurchaseContract.CashDiscount1Percent` |
| `CashDiscount2Percent` | `I_PurchaseContract.CashDiscount2Percent` |
| `PurchaseContractTargetAmount` | `I_PurchaseContract.PurchaseContractTargetAmount` |
| `ValidityStartDate` | `I_PurchaseContract.ValidityStartDate` |
| `ValidityEndDate` | `I_PurchaseContract.ValidityEndDate` |
| `ReleaseCode` | `I_PurchaseContract.ReleaseCode` |
| `CreatedByUser` | `I_PurchaseContract.CreatedByUser` |
| `PurchasingDocumentDeletionCode` | `I_PurchaseContract.PurchasingDocumentDeletionCode` |
| `SupplyingSupplier` | `I_PurchaseContract.SupplyingSupplier` |
| `InvoicingParty` | `I_PurchaseContract.InvoicingParty` |
| `ExchangeRate` | `I_PurchaseContract.ExchangeRate` |
| `ExchangeRateIsFixed` | `I_PurchaseContract.ExchangeRateIsFixed` |
| `QuotationSubmissionDate` | `I_PurchaseContract.QuotationSubmissionDate` |
| `SupplierQuotation` | `I_PurchaseContract.SupplierQuotation` |
| `CorrespncExternalReference` | `I_PurchaseContract.CorrespncExternalReference` |
| `CorrespncInternalReference` | `I_PurchaseContract.CorrespncInternalReference` |
| `SupplierRespSalesPersonName` | `I_PurchaseContract.SupplierRespSalesPersonName` |
| `SupplierPhoneNumber` | `I_PurchaseContract.SupplierPhoneNumber` |
| `IncotermsVersion` | `I_PurchaseContract.IncotermsVersion` |
| `IncotermsLocation1` | `I_PurchaseContract.IncotermsLocation1` |
| `IncotermsLocation2` | `I_PurchaseContract.IncotermsLocation2` |
| `ReleaseIsNotCompleted` | `I_PurchaseContract.ReleaseIsNotCompleted` |
| `SupplierAddressID` | `I_PurchaseContract.SupplierAddressID` |
| `PurgDocExternalReference` | `I_PurchaseContract.PurgDocExternalReference` |
| `PurchasingDocumentName` | `I_PurchaseContract.PurchasingDocumentName` |
| `PurchasingDocumentOrigin` | `I_PurchaseContract.PurchasingDocumentOrigin` |
| `PurchasingProcessingStatus` | `I_PurchaseContract.PurchasingProcessingStatus` |
| `PurgAggrgdProdCmplncSuplrSts` | `I_PurchaseContract.PurgAggrgdProdCmplncSuplrSts` |
| `PurgHasCatalogRelevantItems` | `I_PurchaseContract.PurgHasCatalogRelevantItems` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HeaderExtension` | `E_PurchasingDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPURCONTRAPI'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType : #COMPOSITE
@EndUserText.label: 'Purchase Contract'

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

define view I_PurchaseContractAPI01 as select from I_PurchaseContract
  
 association [0..1] to E_PurchasingDocument         as _HeaderExtension            on  $projection.PurchaseContract = _HeaderExtension.PurchasingDocument
 
 {

key I_PurchaseContract.PurchaseContract, 
I_PurchaseContract.PurchaseContractType, 
I_PurchaseContract.PurchasingDocumentCategory,
I_PurchaseContract.LastChangeDateTime,
I_PurchaseContract.CreationDate, 
I_PurchaseContract.Supplier, 
I_PurchaseContract.CompanyCode, 
I_PurchaseContract.PurchasingOrganization, 
I_PurchaseContract.PurchasingGroup, 
I_PurchaseContract.DocumentCurrency, 
I_PurchaseContract.IncotermsClassification, 
I_PurchaseContract.IncotermsTransferLocation, 
I_PurchaseContract.PaymentTerms, 
I_PurchaseContract.CashDiscount1Days, 
I_PurchaseContract.CashDiscount2Days, 
I_PurchaseContract.NetPaymentDays, 
I_PurchaseContract.CashDiscount1Percent, 
I_PurchaseContract.CashDiscount2Percent, 
@Semantics.amount.currencyCode: 'DocumentCurrency'
I_PurchaseContract.PurchaseContractTargetAmount, 
I_PurchaseContract.ValidityStartDate, 
I_PurchaseContract.ValidityEndDate, 
I_PurchaseContract.ReleaseCode, 
I_PurchaseContract.CreatedByUser, 
I_PurchaseContract.PurchasingDocumentDeletionCode, 
I_PurchaseContract.SupplyingSupplier, 
I_PurchaseContract.InvoicingParty, 
I_PurchaseContract.ExchangeRate, 
I_PurchaseContract.ExchangeRateIsFixed, 
I_PurchaseContract.QuotationSubmissionDate, 
I_PurchaseContract.SupplierQuotation, 
I_PurchaseContract.CorrespncExternalReference, 
I_PurchaseContract.CorrespncInternalReference, 
I_PurchaseContract.SupplierRespSalesPersonName, 
I_PurchaseContract.SupplierPhoneNumber, 
I_PurchaseContract.IncotermsVersion, 
I_PurchaseContract.IncotermsLocation1, 
I_PurchaseContract.IncotermsLocation2, 
I_PurchaseContract.ReleaseIsNotCompleted, 
I_PurchaseContract.SupplierAddressID,
I_PurchaseContract.PurgDocExternalReference,
I_PurchaseContract.PurchasingDocumentName,
I_PurchaseContract.PurchasingDocumentOrigin,
I_PurchaseContract.PurchasingProcessingStatus,
I_PurchaseContract.PurgAggrgdProdCmplncSuplrSts,
I_PurchaseContract.PurgHasCatalogRelevantItems


}
```
