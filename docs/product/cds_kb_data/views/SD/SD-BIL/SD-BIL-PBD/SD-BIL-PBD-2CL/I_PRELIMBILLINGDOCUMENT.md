---
name: I_PRELIMBILLINGDOCUMENT
description: "PRELIMBilling DocumentUMENT"
app_component: SD-BIL-PBD-2CL
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
  - SD-BIL-PBD
  - interface-view
  - billing-document
  - billing
  - document
  - component:SD-BIL-PBD-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_PRELIMBILLINGDOCUMENT

**PRELIMBilling DocumentUMENT**

| Property | Value |
|---|---|
| App Component | `SD-BIL-PBD-2CL` |
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
| `PrelimBillingDocument` | ✓ | |  | `cast( BillingDocument as prelim_billing_document preserving type )` |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
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
| `BillingDocCombinationCriteria` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `StatisticsCurrency` |  | |  |  |  |  |
| `TotalTaxAmount` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `PriceListType` |  | |  |  |  |  |
| `TaxDepartureCountry` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `VATRegistrationOrigin` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `HierarchyTypePricing` |  | |  |  |  |  |
| `CustomerTaxClassification1` |  | |  |  |  |  |
| `CustomerTaxClassification2` |  | |  |  |  |  |
| `CustomerTaxClassification3` |  | |  |  |  |  |
| `CustomerTaxClassification4` |  | |  |  |  |  |
| `CustomerTaxClassification5` |  | |  |  |  |  |
| `CustomerTaxClassification6` |  | |  |  |  |  |
| `CustomerTaxClassification7` |  | |  |  |  |  |
| `CustomerTaxClassification8` |  | |  |  |  |  |
| `CustomerTaxClassification9` |  | |  |  |  |  |
| `IsEUTriangularDeal` |  | |  |  |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `PaymentReference` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `SEPAMandate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `AccountingExchangeRateIsSet` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `DocumentReferenceID` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `DunningArea` |  | |  |  |  |  |
| `DunningBlockingReason` |  | |  |  |  |  |
| `DunningKey` |  | |  |  |  |  |
| `IsRelevantForAccrual` |  | |  |  |  |  |
| `InvoiceListType` |  | |  |  |  |  |
| `InvoiceListBillingDate` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `PartnerCompany` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `CityCode` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `County` |  | |  |  |  |  |
| `CreditControlArea` |  | |  |  |  |  |
| `CustomerRebateAgreement` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `BillingIssueType` |  | |  |  |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |  |  |
| `OverallPricingIncompletionSts` |  | |  |  |  |  |
| `PrelimBillingDocumentStatus` |  | |  |  |  |  |
| `BillgProcDocApprovalStatus` |  | |  |  |  |  |
| `PrelimBillgDocApprovalReason` |  | |  | `BillgProcDocApprovalReason` |  |  |
| `PricingIsIncomplete` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_EnhancedFields` | | ✓ | | | | |
| `_PrelimBillgDocApprovalReason` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_StatisticsCurrency` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_PriceListType` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_VATRegistrationOrigin` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_SDPricingProcedure` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
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
| `_InvoiceListType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CityCode` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_County_2` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_BillingIssueType` | | ✓ | | | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | | | |
| `_OverallPricingIncompletionSts` | | ✓ | | | | |
| `_PrelimBillingDocumentStatus` | | ✓ | | | | |
| `_BillgProcDocApprovalStatus` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_PrelimBillingDocumentItem` | [0..*] |
| `_Partner` | `I_PrelimBillingDocPartner` | [1..*] |
| `_PricingElement` | `I_PrelimBillingDocPrcgElmnt` | [0..*] |
| `_EnhancedFields` | `I_PrelimBillgDocEnhancedFields` | [1..1] |
| `_PrelimBillgDocApprovalReason` | `I_PrelimBillgDocApprovalReason` | [0..1] |
| `_Extension` | `E_BillingDocument` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.representativeKey: 'PrelimBillingDocument'
@ObjectModel.compositionRoot: true
@ObjectModel.sapObjectNodeType.name: 'PreliminaryBillingDocument'
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@Analytics.dataCategory: #DIMENSION
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbrk', role: #MAIN,
                    viewElement: ['PrelimBillingDocument'],
                    tableElement: ['vbeln']
                }

            ]
        }
    }
 }
@VDM.viewType: #BASIC
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser', '_CreditControlAreaText' ]
}
@AbapCatalog: {
  compiler.compareFilter: true,
  sqlViewName: 'ISDPREBILDOC',
  preserveKey: true
}
@EndUserText.label: 'Preliminary Billing Document'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
 
define view I_PrelimBillingDocument
  as select from I_BillingDocumentBasic as BillingDocument

  association [0..*] to I_PrelimBillingDocumentItem     as _Item                 on $projection.PrelimBillingDocument = _Item.PrelimBillingDocument
  association [1..*] to I_PrelimBillingDocPartner       as _Partner              on $projection.PrelimBillingDocument = _Partner.PrelimBillingDocument
  association [0..*] to I_PrelimBillingDocPrcgElmnt     as _PricingElement       on $projection.PrelimBillingDocument = _PricingElement.PrelimBillingDocument          
  association [1..1] to I_PrelimBillgDocEnhancedFields  as _EnhancedFields       on $projection.PrelimBillingDocument = _EnhancedFields.PrelimBillingDocument  
  
  association [0..1] to I_PrelimBillgDocApprovalReason  as _PrelimBillgDocApprovalReason 
                                                                                 on $projection.PrelimBillgDocApprovalReason = _PrelimBillgDocApprovalReason.PrelimBillgDocApprovalReason
                                                                                 
  //Extensibility
  association [0..1] to E_BillingDocument               as _Extension            on $projection.PrelimBillingDocument = _Extension.BillingDocument
                                                                                                                                                                   
{
  key cast( BillingDocument as prelim_billing_document preserving type )  as PrelimBillingDocument,

      //category
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'      
      SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'      
      BillingDocumentCategory,
      @ObjectModel.foreignKey.association: '_BillingDocumentType'      
      BillingDocumentType,

      //admin
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

      //org
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,

      //billing
      BillingDocument.BillingDocumentDate,
      BillingDocument.BillingDocCombinationCriteria,

      //pricing
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics.currencyCode: true
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
      HierarchyTypePricing,
      
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

      //shipping
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,

      //payment
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
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

      //accounting
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      AccountingExchangeRateIsSet,
      AccountingExchangeRate,      
      ExchangeRateDate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      DocumentReferenceID,
      AssignmentReference,      
      @ObjectModel.foreignKey.association: '_DunningArea'
      DunningArea,
      @ObjectModel.foreignKey.association: '_DunningBlockingReason'
      DunningBlockingReason,
      @ObjectModel.foreignKey.association: '_DunningKey'
      DunningKey,
      IsRelevantForAccrual,      
      
      //billing document list
      @ObjectModel.foreignKey.association: '_InvoiceListType'
      InvoiceListType,
      InvoiceListBillingDate,
      
      //sales
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
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
      @ObjectModel.foreignKey.association: '_County_2'
      County,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CreditControlAreaStdVH',
                     element: 'CreditControlArea' }
        }]
      @ObjectModel.text.association: '_CreditControlAreaText'
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      CreditControlArea,
      CustomerRebateAgreement,
      PricingDocument,

      //status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_BillingIssueType'
      BillingIssueType,
      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'      
      OvrlItmGeneralIncompletionSts,
      @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PricingIsIncomplete'
      OverallPricingIncompletionSts,
      @ObjectModel.foreignKey.association: '_PrelimBillingDocumentStatus'      
      PrelimBillingDocumentStatus,      

      //Approval Management
      @ObjectModel.foreignKey.association: '_BillgProcDocApprovalStatus'          
      BillingDocument.BillgProcDocApprovalStatus,  
      @ObjectModel.foreignKey.association: '_PrelimBillgDocApprovalReason'
      BillingDocument.BillgProcDocApprovalReason as PrelimBillgDocApprovalReason,
        
      @Semantics.booleanIndicator: true
      PricingIsIncomplete,
      
      //association
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,
      _SDDocumentCategory,
      _BillingDocumentCategory,
      _BillingDocumentType,
      _CreatedByUser,
      _LogicalSystem,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _TransactionCurrency,
      _StatisticsCurrency,
      _CustomerPriceGroup,
      _PriceListType,
      _TaxDepartureCountry,
      _VATRegistrationOrigin,
      _VATRegistrationCountry,
      _SDPricingProcedure,
      _ShippingCondition,
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
      _InvoiceListType,            
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
      _OverallSDProcessStatus,
      _BillingIssueType,
      _OvrlItmGeneralIncompletionSts,
      @API.element.releaseState: #DEPRECATED
      _OverallPricingIncompletionSts,
      _PrelimBillingDocumentStatus,
      _BillgProcDocApprovalStatus,
      _PrelimBillgDocApprovalReason,
      _EnhancedFields,
      
      @Consumption.hidden: true
      _CreditControlAreaText
}
where
  SDDocumentCategory = 'PBD'
```
