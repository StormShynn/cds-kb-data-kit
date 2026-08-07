---
name: I_BILLINGDOCUMENTREQUESTTP
description: "Billing DocumentUMENTREQUESTTP"
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - transactional-processing
  - billing-document
  - billing
  - document
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTREQUESTTP

**Billing DocumentUMENTREQUESTTP**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentRequest` | ✓ | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `BillingDocumentRequestType` |  | |  |  |  |  |
| `ProposedBillingDocumentType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillgDocReqCombinationCriteria` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `TotalTaxAmount` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `PriceListType` |  | |  |  |  |  |
| `TaxDepartureCountry` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `VATRegistrationOrigin` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `CustomerTaxClassification1` |  | |  |  |  |  |
| `CustomerTaxClassification2` |  | |  |  |  |  |
| `CustomerTaxClassification3` |  | |  |  |  |  |
| `CustomerTaxClassification4` |  | |  |  |  |  |
| `CustomerTaxClassification5` |  | |  |  |  |  |
| `CustomerTaxClassification6` |  | |  |  |  |  |
| `CustomerTaxClassification7` |  | |  |  |  |  |
| `CustomerTaxClassification8` |  | |  |  |  |  |
| `CustomerTaxClassification9` |  | |  |  |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `SEPAMandate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `DocumentReferenceID` |  | |  |  |  |  |
| `DunningArea` |  | |  |  |  |  |
| `DunningBlockingReason` |  | |  |  |  |  |
| `DunningKey` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  |  |  |  |
| `ReferenceDocSDDocCategory` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `CityCode` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `County` |  | |  |  |  |  |
| `CreditControlArea` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `OverallBillingDocReqStatus` |  | |  |  |  |  |
| `BillingIssueType` |  | |  |  |  |  |
| `OverallPricingIncompletionSts` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Billing Document Request - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'BillingDocumentRequest'
@ObjectModel.semanticKey: [ 'BillingDocumentRequest' ]
@ObjectModel.supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define root view entity I_BillingDocumentRequestTP
 provider contract transactional_interface
  as projection on R_BillingDocumentRequestTP as BillingDocumentRequest

{
  key BillingDocumentRequest,

      SDDocumentCategory,
      BillingDocumentRequestType,
      ProposedBillingDocumentType,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangeDate,
      LastChangeDateTime,
      LogicalSystem,
      SalesOrganization,
      DistributionChannel,
      Division,
      BillingDocumentDate,
      BillgDocReqCombinationCriteria,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,

      TransactionCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalTaxAmount,

      CustomerPriceGroup,
      PriceListType,
      TaxDepartureCountry,
      VATRegistration,
      VATRegistrationOrigin,
      VATRegistrationCountry,
      CustomerTaxClassification1,
      CustomerTaxClassification2,
      CustomerTaxClassification3,
      CustomerTaxClassification4,
      CustomerTaxClassification5,
      CustomerTaxClassification6,
      CustomerTaxClassification7,
      CustomerTaxClassification8,
      CustomerTaxClassification9,
      SDPricingProcedure,
      IncotermsVersion,
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      PayerParty,
      ContractAccount,
      CustomerPaymentTerms,
      PaymentMethod,
      FixedValueDate,
      AdditionalValueDays,
      SEPAMandate,
      CompanyCode,
      CustomerAccountAssignmentGroup,
      ExchangeRateDate,
      ExchangeRateType,
      DocumentReferenceID,
      DunningArea,
      DunningBlockingReason,
      DunningKey,
      ReferenceDocument,
      ReferenceDocumentLogicalSystem,
      ReferenceDocSDDocCategory,
      SoldToParty,
      PurchaseOrderByCustomer,
      CustomerGroup,
      Country,
      CityCode,
      SalesDistrict,
      Region,
      County,
      CreditControlArea,
      PricingDocument,
      OverallBillingDocReqStatus,
      BillingIssueType,
      OverallPricingIncompletionSts,

      // Compositions
      _Item    : redirected to composition child I_BillingDocumentRequestItemTP,
      _Partner : redirected to composition child I_BillgDocRequestPartnerTP,
      _Text    : redirected to composition child I_BillingDocumentRequestTextTP
}
```
