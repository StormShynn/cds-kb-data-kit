---
name: I_PURCHASECONTRACTAPI01
description: "Purchase ContractAPI 01"
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |  |  |
| `PurchaseContractType` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `PurchaseContractTargetAmount` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ReleaseCode` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `QuotationSubmissionDate` |  | |  |  |  |  |
| `SupplierQuotation` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `CorrespncInternalReference` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `SupplierAddressID` |  | |  |  |  |  |
| `PurgDocExternalReference` |  | |  |  |  |  |
| `PurchasingDocumentName` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `PurchasingProcessingStatus` |  | |  |  |  |  |
| `PurgAggrgdProdCmplncSuplrSts` |  | |  |  |  |  |
| `PurgHasCatalogRelevantItems` |  | |  |  |  |  |

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
