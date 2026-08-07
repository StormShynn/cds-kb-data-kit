---
name: I_INVOICELIST
description: Invoicelist
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELIST

**Invoicelist**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InvoiceList` | ✓ | |  | `cast(BillingDocument as vbeln_rl preserving type)` |
| `SDDocumentCategory` |  | |  |  |
| `InvoiceListType` |  | |  | `cast(BillingDocumentType as invoicelisttype preserving type)` |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `LogicalSystem` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `Division` |  | |  |  |
| `InvoiceListBillingDate` |  | |  | `BillingDocumentDate` |
| `InvoiceListIsCancelled` |  | |  | `cast(BillingDocumentIsCancelled as invoice_list_is_canceled preserving type)` |
| `CancelledInvoiceList` |  | |  | `cast(CancelledBillingDocument as canceled_invoice_list preserving type)` |
| `InvoiceListCombinationCriteria` |  | |  | `cast(BillingDocCombinationCriteria as invoice_list_comb_criteria preserving type)` |
| `TotalNetAmount` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `StatisticsCurrency` |  | |  |  |
| `TotalTaxAmount` |  | |  |  |
| `CustomerPriceGroup` |  | |  |  |
| `PriceListType` |  | |  |  |
| `TaxDepartureCountry` |  | |  |  |
| `VATRegistration` |  | |  |  |
| `VATRegistrationOrigin` |  | |  |  |
| `VATRegistrationCountry` |  | |  |  |
| `CustomerTaxClassification1` |  | |  |  |
| `CustomerTaxClassification2` |  | |  |  |
| `CustomerTaxClassification3` |  | |  |  |
| `CustomerTaxClassification4` |  | |  |  |
| `CustomerTaxClassification5` |  | |  |  |
| `CustomerTaxClassification6` |  | |  |  |
| `CustomerTaxClassification7` |  | |  |  |
| `CustomerTaxClassification8` |  | |  |  |
| `CustomerTaxClassification9` |  | |  |  |
| `IsEUTriangularDeal` |  | |  |  |
| `SDPricingProcedure` |  | |  |  |
| `ShippingCondition` |  | |  |  |
| `IncotermsVersion` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `IncotermsLocation1` |  | |  |  |
| `IncotermsLocation2` |  | |  |  |
| `PayerParty` |  | |  |  |
| `ContractAccount` |  | |  |  |
| `CustomerPaymentTerms` |  | |  |  |
| `PaymentMethod` |  | |  |  |
| `PaymentReference` |  | |  |  |
| `FixedValueDate` |  | |  |  |
| `AdditionalValueDays` |  | |  |  |
| `SEPAMandate` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `FiscalYear` |  | |  |  |
| `AccountingDocument` |  | |  | `} ] AccountingDocument` |
| `FiscalPeriod` |  | |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |
| `AccountingExchangeRateIsSet` |  | |  |  |
| `AccountingExchangeRate` |  | |  |  |
| `ExchangeRateDate` |  | |  |  |
| `ExchangeRateType` |  | |  |  |
| `DocumentReferenceID` |  | |  |  |
| `AssignmentReference` |  | |  |  |
| `DunningArea` |  | |  | `} ] DunningArea` |
| `DunningBlockingReason` |  | |  |  |
| `DunningKey` |  | |  |  |
| `InternalFinancialDocument` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `PartnerCompany` |  | |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |
| `CustomerGroup` |  | |  |  |
| `Country` |  | |  |  |
| `CityCode` |  | |  |  |
| `SalesDistrict` |  | |  |  |
| `Region` |  | |  |  |
| `County` |  | |  |  |
| `CreditControlArea` |  | |  |  |
| `PricingDocument` |  | |  |  |
| `OverallSDProcessStatus` |  | |  |  |
| `AccountingPostingStatus` |  | |  |  |
| `AccountingTransferStatus` |  | |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |
| `OverallPricingIncompletionSts` |  | |  |  |
| `_County` |  | |  | `_County_2` |
| `_Item` | | ✓ | | |
| `_Partner` | | ✓ | | |
| `_PricingElement` | | ✓ | | |
| `_InvoiceListType` | | ✓ | | |
| `_CancelledInvoiceList` | | ✓ | | |
| `_EnhancedFields` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_LogicalSystem` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |
| `_StatisticsCurrency` | | ✓ | | |
| `_CustomerPriceGroup` | | ✓ | | |
| `_PriceListType` | | ✓ | | |
| `_TaxDepartureCountry` | | ✓ | | |
| `_VATRegistrationCountry` | | ✓ | | |
| `_SDPricingProcedure` | | ✓ | | |
| `_ShippingCondition` | | ✓ | | |
| `_IncotermsClassification` | | ✓ | | |
| `_IncotermsVersion` | | ✓ | | |
| `_PayerParty` | | ✓ | | |
| `_CustomerPaymentTerms` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_FiscalYear` | | ✓ | | |
| `_AccountingDocument` | | ✓ | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | |
| `_ExchangeRateType` | | ✓ | | |
| `_DunningArea` | | ✓ | | |
| `_DunningBlockingReason` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_CustomerGroup` | | ✓ | | |
| `_Country` | | ✓ | | |
| `_CityCode` | | ✓ | | |
| `_SalesDistrict` | | ✓ | | |
| `_Region` | | ✓ | | |
| `_CreditControlArea` | | ✓ | | |
| `_SDDocumentCategory` | | ✓ | | |
| `_VATRegistrationOrigin` | | ✓ | | |
| `_DunningKey` | | ✓ | | |
| `_PaymentMethod` | | ✓ | | |
| `_OverallSDProcessStatus` | | ✓ | | |
| `_AccountingPostingStatus` | | ✓ | | |
| `_AccountingTransferStatus` | | ✓ | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | |
| `_OverallPricingIncompletionSts` | | ✓ | | |
| `_DunningAreaText` | | ✓ | | |
| `_CreditControlAreaText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_InvoiceListItem` | [0..*] |
| `_Partner` | `I_InvoiceListPartner` | [1..*] |
| `_PricingElement` | `I_InvoiceListPrcgElmnt` | [0..*] |
| `_InvoiceListType` | `I_InvoiceListType` | [1..1] |
| `_CancelledInvoiceList` | `I_InvoiceList` | [0..1] |
| `_EnhancedFields` | `I_InvoiceListEnhancedFields` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: [ '_CreatedByUser', '_DunningAreaText', '_CreditControlAreaText' ]

@Analytics.dataCategory: #DIMENSION

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { table: 'vbrk',
                                                                  role: #MAIN,
                                                                  viewElement: [ 'InvoiceList' ],
                                                                  tableElement: [ 'vbeln' ] } ] }

@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'ISDINVOICELIST'

@EndUserText.label: 'Invoice List'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'InvoiceList'
@ObjectModel.sapObjectNodeType.name: 'InvoiceList'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #L }

@VDM.viewType: #BASIC

define view entity I_InvoiceList
  as select from I_BillingDocumentBasic

  // Association
  association [0..*] to I_InvoiceListItem           as _Item                 on $projection.InvoiceList = _Item.InvoiceList

  association [1..*] to I_InvoiceListPartner        as _Partner              on $projection.InvoiceList = _Partner.InvoiceList
  association [0..*] to I_InvoiceListPrcgElmnt      as _PricingElement       on $projection.InvoiceList = _PricingElement.InvoiceList
  association [1..1] to I_InvoiceListType           as _InvoiceListType      on $projection.InvoiceListType = _InvoiceListType.InvoiceListType

  association [0..1] to I_InvoiceList               as _CancelledInvoiceList on $projection.CancelledInvoiceList = _CancelledInvoiceList.InvoiceList

  association [1..1] to I_InvoiceListEnhancedFields as _EnhancedFields       on $projection.InvoiceList = _EnhancedFields.InvoiceList

{
      // key
  key cast(BillingDocument as vbeln_rl preserving type)                                 as InvoiceList,

      // category
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,

      @ObjectModel.foreignKey.association: '_InvoiceListType'
      cast(BillingDocumentType as invoicelisttype preserving type)                      as InvoiceListType,

      // admin
      @Semantics.personalData.isPotentiallySensitive: true
      @Semantics.user.createdBy: true
      CreatedByUser,

      @Semantics.systemDate.createdAt: true
      CreationDate,

      @Semantics.systemTime.createdAt
      CreationTime,

      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      @ObjectModel.foreignKey.association: '_LogicalSystem'
      LogicalSystem,

      // org
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,

      @ObjectModel.foreignKey.association: '_Division'
      Division,

      // billing
      BillingDocumentDate                                                               as InvoiceListBillingDate,
      cast(BillingDocumentIsCancelled as invoice_list_is_canceled preserving type)      as InvoiceListIsCancelled,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InvoiceListStdVH', element: 'InvoiceList' } } ]
      @ObjectModel.foreignKey.association: '_CancelledInvoiceList'
      cast(CancelledBillingDocument as canceled_invoice_list preserving type)           as CancelledInvoiceList,

      cast(BillingDocCombinationCriteria as invoice_list_comb_criteria preserving type) as InvoiceListCombinationCriteria,

      // pricing
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,

      @ObjectModel.foreignKey.association: '_StatisticsCurrency'
      StatisticsCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalTaxAmount,

      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,

      @ObjectModel.foreignKey.association: '_PriceListType'
      PriceListType,

      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,

      VATRegistration,

      @ObjectModel.foreignKey.association: '_VATRegistrationOrigin'
      VATRegistrationOrigin,

      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
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
      IsEUTriangularDeal,

      @ObjectModel.foreignKey.association: '_SDPricingProcedure'
      SDPricingProcedure,

      // shipping
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,

      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,

      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,

      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,

      // payment
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,

      ContractAccount,

      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,

      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,

      PaymentReference,
      FixedValueDate,
      AdditionalValueDays,
      SEPAMandate,

      // accounting
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,

      @ObjectModel.foreignKey.association: '_FiscalYear'
      FiscalYear,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_AccountingDocumentStdVH', element: 'AccountingDocument' },
                                            additionalBinding: [ { localElement: 'CompanyCode', element: 'CompanyCode' },
                                                                 { localElement: 'FiscalYear',  element: 'FiscalYear'  } ] } ]
      @ObjectModel.foreignKey.association: '_AccountingDocument'
      AccountingDocument,

      FiscalPeriod,

      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,

      AccountingExchangeRateIsSet,
      AccountingExchangeRate,
      ExchangeRateDate,

      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,

      DocumentReferenceID,
      AssignmentReference,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DunningAreaStdVH', element: 'DunningArea' },
                                            additionalBinding: [ { localElement: 'CompanyCode', element: 'CompanyCode' } ] } ]
      @ObjectModel.foreignKey.association: '_DunningArea'
      @ObjectModel.text.association: '_DunningAreaText'
      DunningArea,

      @ObjectModel.foreignKey.association: '_DunningBlockingReason'
      DunningBlockingReason,

      @ObjectModel.foreignKey.association: '_DunningKey'
      DunningKey,

      InternalFinancialDocument,

      // sales
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,

      PartnerCompany,
      PurchaseOrderByCustomer,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,

      @ObjectModel.foreignKey.association: '_Country'
      Country,

      @ObjectModel.foreignKey.association: '_CityCode'
      CityCode,

      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,

      @ObjectModel.foreignKey.association: '_Region'
      Region,

      @ObjectModel.foreignKey.association: '_County'
      County,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } } ]
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @ObjectModel.text.association: '_CreditControlAreaText'
      CreditControlArea,

      PricingDocument,

      // status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,

      @ObjectModel.foreignKey.association: '_AccountingPostingStatus'
      AccountingPostingStatus,

      @ObjectModel.foreignKey.association: '_AccountingTransferStatus'
      AccountingTransferStatus,

      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      OvrlItmGeneralIncompletionSts,

      @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
      OverallPricingIncompletionSts,

      // association
      _EnhancedFields,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _Item,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _Partner,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _PricingElement,

      _InvoiceListType,
      _CreatedByUser,
      _LogicalSystem,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _CancelledInvoiceList,
      _TransactionCurrency,
      _StatisticsCurrency,
      _CustomerPriceGroup,
      _PriceListType,
      _TaxDepartureCountry,
      _VATRegistrationCountry,
      _SDPricingProcedure,
      _ShippingCondition,
      _IncotermsClassification,
      _IncotermsVersion,
      _PayerParty,
      _CustomerPaymentTerms,
      _CompanyCode,
      _FiscalYear,
      _AccountingDocument,
      _CustomerAccountAssgmtGroup,
      _ExchangeRateType,
      _DunningArea,
      _DunningBlockingReason,
      _SoldToParty,
      _CustomerGroup,
      _Country,
      _CityCode,
      _SalesDistrict,
      _Region,
      _County_2                                                                         as _County,

      _CreditControlArea,

      /* start suppress warning calculated_field_check */
      _SDDocumentCategory,
      _VATRegistrationOrigin,
      _DunningKey,
      _PaymentMethod,
      _OverallSDProcessStatus,
      _AccountingPostingStatus,
      _AccountingTransferStatus,
      _OvrlItmGeneralIncompletionSts,
      _OverallPricingIncompletionSts,
      /* end suppress warning calculated_field_check */

      @Consumption.hidden: true
      _DunningAreaText,

      @Consumption.hidden: true
      _CreditControlAreaText
}

where SDDocumentCategory = '3' or SDDocumentCategory = '4'
```
