---
name: I_BILLINGDOCUMENTREQUEST
description: "Billing DocumentUMENTREQUEST"
app_component: SD-BIL-BDR-2CL
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
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - billing-document
  - billing
  - document
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTREQUEST

**Billing DocumentUMENTREQUEST**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
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
| `BillingDocumentRequest` | ✓ | |  | `cast(BillingDocument as vbeln_bdr preserving type)` |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `BillingDocumentRequestType` |  | |  | `cast(BillingDocumentType as sdbil_odata_bdr_type preserving type)` |  |  |
| `ProposedBillingDocumentType` |  | |  | `cast(ProposedBillingDocumentType as proposed_billing_document_type preserving type)` |  |  |
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
| `BillgDocReqCombinationCriteria` |  | |  | `cast(BillingDocCombinationCriteria as billg_doc_req_combn_criteria preserving type)` |  |  |
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
| `DeviatingPostingDate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `DocumentReferenceID` |  | |  |  |  |  |
| `DunningArea` |  | |  |  |  |  |
| `DunningBlockingReason` |  | |  |  |  |  |
| `DunningKey` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  | `cast(BillingDocRequestReference as sdbil_odata_source_document preserving type)` |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  | `cast(BillgDocReqRefLgclSyst as sdbil_odata_source_system preserving type)` |  |  |
| `ReferenceDocSDDocCategory` |  | |  | `cast(BillgDocReqRefSDDocCategory as sdbil_odata_src_doc_cat preserving type)` |  |  |
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
| `_ReferenceDocSDDocCategory` |  | |  | `_BillgDocReqRefSDDocCategory` |  |  |
| `_BillingDocumentRequestType` |  | |  | `_BillingDocumentType` |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_ProposedBillingDocumentType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_PriceListType` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_VATRegistrationOrigin` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_SDPricingProcedure` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_DunningArea` | | ✓ | | | | |
| `_DunningBlockingReason` | | ✓ | | | | |
| `_DunningKey` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CityCode` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_County_2` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_OvrlBillingDocReqStatus` | | ✓ | | | | |
| `_BillingIssueType` | | ✓ | | | | |
| `_OverallPricingIncompletionSts` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_BillingDocumentRequestItem` | [0..*] |
| `_Partner` | `I_BillingDocReqPartner` | [1..*] |
| `_PricingElement` | `I_BillingDocReqPrcgElmnt` | [0..*] |
| `_Extension` | `E_BillingDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISDBILDOCREQ'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: [ '_CreatedByUser', '_CreditControlAreaText' ]

@Analytics.dataCategory: #DIMENSION

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { table: 'vbrk',
                                                                  role: #MAIN,
                                                                  viewElement: [ 'BillingDocumentRequest' ],
                                                                  tableElement: [ 'vbeln' ] } ] }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Billing Document Request'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BillingDocumentRequest'
@ObjectModel.sapObjectNodeType.name: 'BillingDocumentRequest'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #L }

@VDM.viewType: #BASIC

define view I_BillingDocumentRequest
  as select from I_BillingDocumentBasic

  association [0..*] to I_BillingDocumentRequestItem as _Item           on $projection.BillingDocumentRequest = _Item.BillingDocumentRequest
  association [1..*] to I_BillingDocReqPartner       as _Partner        on $projection.BillingDocumentRequest = _Partner.BillingDocumentRequest
  association [0..*] to I_BillingDocReqPrcgElmnt     as _PricingElement on $projection.BillingDocumentRequest = _PricingElement.BillingDocumentRequest

  // Extensibility
  association [0..1] to E_BillingDocument            as _Extension      on $projection.BillingDocumentRequest = _Extension.BillingDocument

{
      // key
  key cast(BillingDocument as vbeln_bdr preserving type)                                  as BillingDocumentRequest,

      // category
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,

      @ObjectModel.foreignKey.association: '_BillingDocumentRequestType'
      cast(BillingDocumentType as sdbil_odata_bdr_type preserving type)                   as BillingDocumentRequestType,

      @ObjectModel.foreignKey.association: '_ProposedBillingDocumentType'
      cast(ProposedBillingDocumentType as proposed_billing_document_type preserving type) as ProposedBillingDocumentType,

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
      BillingDocumentDate,
      cast(BillingDocCombinationCriteria as billg_doc_req_combn_criteria preserving type) as BillgDocReqCombinationCriteria,

      // pricing
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode: true
      TransactionCurrency,

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

      @ObjectModel.foreignKey.association: '_SDPricingProcedure'
      SDPricingProcedure,

      // shipping
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

      FixedValueDate,
      AdditionalValueDays,
      SEPAMandate,

      // accounting
      DeviatingPostingDate,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,

      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,

      ExchangeRateDate,

      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,

      DocumentReferenceID,

      @ObjectModel.foreignKey.association: '_DunningArea'
      DunningArea,

      @ObjectModel.foreignKey.association: '_DunningBlockingReason'
      DunningBlockingReason,

      @ObjectModel.foreignKey.association: '_DunningKey'
      DunningKey,

      // reference
      cast(BillingDocRequestReference as sdbil_odata_source_document preserving type)     as ReferenceDocument,
      cast(BillgDocReqRefLgclSyst as sdbil_odata_source_system preserving type)           as ReferenceDocumentLogicalSystem,

      @ObjectModel.foreignKey.association: '_ReferenceDocSDDocCategory'
      cast(BillgDocReqRefSDDocCategory as sdbil_odata_src_doc_cat preserving type)        as ReferenceDocSDDocCategory,

      // sales
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,

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

      @ObjectModel.foreignKey.association: '_County_2'
      County,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } } ]
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @ObjectModel.text.association: '_CreditControlAreaText'
      CreditControlArea,

      PricingDocument,

      // status 
      @ObjectModel.foreignKey.association: '_OvrlBillingDocReqStatus'
      OverallBillingDocReqStatus,

      @ObjectModel.foreignKey.association: '_BillingIssueType'
      BillingIssueType,

      @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
      OverallPricingIncompletionSts,

      // association
      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _Item,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _Partner,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _PricingElement,

      _SDDocumentCategory,
      _BillgDocReqRefSDDocCategory                                                        as _ReferenceDocSDDocCategory,
      _BillingDocumentType                                                                as _BillingDocumentRequestType,

      _ProposedBillingDocumentType,
      _CreatedByUser,
      _LogicalSystem,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _TransactionCurrency,
      _CustomerPriceGroup,
      _PriceListType,
      _TaxDepartureCountry,
      _VATRegistrationOrigin,
      _VATRegistrationCountry,
      _SDPricingProcedure,
      _IncotermsClassification,
      _IncotermsVersion,
      _PayerParty,
      _CustomerPaymentTerms,
      _PaymentMethod,
      _CompanyCode,
      _CustomerAccountAssgmtGroup,
      _ExchangeRateType,
      _DunningArea,
      _DunningBlockingReason,
      _DunningKey,
      _SoldToParty,
      _CustomerGroup,
      _Country,
      _CityCode,
      _SalesDistrict,
      _Region,

      @API.element: { releaseState: #DEPRECATED, successor: '_County_2' }
      _County,

      _County_2,
      _CreditControlArea,
      _OvrlBillingDocReqStatus,
      _BillingIssueType,
      _OverallPricingIncompletionSts,

      @Consumption.hidden: true
      _CreditControlAreaText
}

where SDDocumentCategory = 'EBDR';
```
