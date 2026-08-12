---
name: I_DEBITMEMOREQUEST
description: "Debitmemorequest"
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUEST

**Debitmemorequest**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebitMemoRequest` | ✓ | |  | `cast(SalesDocument as debit_memo_request preserving type)` |  |  |
| `DebitMemoRequestType` |  | |  | `cast(SalesDocumentType as debit_memo_request_type preserving type )` |  |  |
| `DebitMemoRequestProcessingType` |  | |  | `SalesDocumentProcessingType` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `CreditControlArea` |  | |  |  |  |  |
| `DebitMemoRequestDate` |  | |  | `SalesDocumentDate` |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |  |  |
| `CorrespncExtRefByShipToParty` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustPurOrdTypeByShipToParty` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `PriceListType` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `DebitMemoRequestCondition` |  | |  | `SalesDocumentCondition` |  |  |
| `CustomerTaxClassification1` |  | |  |  |  |  |
| `CustomerTaxClassification2` |  | |  |  |  |  |
| `CustomerTaxClassification3` |  | |  |  |  |  |
| `CustomerTaxClassification4` |  | |  |  |  |  |
| `CustomerTaxClassification5` |  | |  |  |  |  |
| `CustomerTaxClassification6` |  | |  |  |  |  |
| `CustomerTaxClassification7` |  | |  |  |  |  |
| `CustomerTaxClassification8` |  | |  |  |  |  |
| `CustomerTaxClassification9` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `DebitMemoReqApprovalReason` |  | |  | `cast(SalesDocApprovalReason as sd_dmr_approval_reason)` |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | |  | `cast(AccountingExchangeRate as kurrf_not_converted preserving type )` |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `CostCenterBusinessArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallOrdReltdBillgStatus` |  | |  |  |  |  |
| `OverallBillingBlockStatus` |  | |  |  |  |  |
| `OverallTotalSDDocRefStatus` |  | |  |  |  |  |
| `OverallSDDocReferenceStatus` |  | |  |  |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `MaxDocValueCreditCheckStatus` |  | |  |  |  |  |
| `PaymentTermCreditCheckStatus` |  | |  |  |  |  |
| `FinDocCreditCheckStatus` |  | |  |  |  |  |
| `ExprtInsurCreditCheckStatus` |  | |  |  |  |  |
| `PaytAuthsnCreditCheckSts` |  | |  |  |  |  |
| `CentralCreditCheckStatus` |  | |  |  |  |  |
| `CentralCreditChkTechErrSts` |  | |  |  |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |  |  |
| `OverallPricingIncompletionSts` |  | |  |  |  |  |
| `HeaderBillgIncompletionStatus` |  | |  |  |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |  |  |
| `OvrlItmBillingIncompletionSts` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `AccountingDocExternalReference` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CostCenterBusinessAreaText` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |
| `_DebitMemoRequestType` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_DebitMemoReqApprovalReason` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_StandardPartner` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_SDPricingProcedure` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_PriceListType` | | ✓ | | | | |
| `_SDDocumentReason` | | ✓ | | | | |
| `_CustomerPurchaseOrderType` | | ✓ | | | | |
| `_CustPurOrdTypeByShipToParty` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_BillingCompanyCode` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_CostCenterBusinessArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ControllingObject` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_OverallSDDocumentRejectionSts` | | ✓ | | | | |
| `_TotalBlockStatus` | | ✓ | | | | |
| `_OverallOrdReltdBillgStatus` | | ✓ | | | | |
| `_OverallBillingBlockStatus` | | ✓ | | | | |
| `_OverallTotalSDDocRefStatus` | | ✓ | | | | |
| `_OverallSDDocReferenceStatus` | | ✓ | | | | |
| `_TotalCreditCheckStatus` | | ✓ | | | | |
| `_MaxDocValueCreditCheckStatus` | | ✓ | | | | |
| `_PaymentTermCreditCheckStatus` | | ✓ | | | | |
| `_FinDocCreditCheckStatus` | | ✓ | | | | |
| `_ExprtInsurCreditCheckStatus` | | ✓ | | | | |
| `_PaytAuthsnCreditCheckSts` | | ✓ | | | | |
| `_CentralCreditCheckStatus` | | ✓ | | | | |
| `_CentralCreditChkTechErrSts` | | ✓ | | | | |
| `_HdrGeneralIncompletionStatus` | | ✓ | | | | |
| `_OverallPricingIncompletionSts` | | ✓ | | | | |
| `_HeaderBillgIncompletionStatus` | | ✓ | | | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | | | |
| `_OvrlItmBillingIncompletionSts` | | ✓ | | | | |
| `_SalesDocApprovalStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CostCenterBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CreditControlAreaText` | `I_CreditControlAreaText` | [0..*] |
| `_Item` | `I_DebitMemoRequestItem` | [0..*] |
| `_DebitMemoRequestType` | `I_DebitMemoRequestType` | [0..1] |
| `_Partner` | `I_DebitMemoReqPartner` | [1..*] |
| `_DebitMemoReqApprovalReason` | `I_DebitMemoReqApprovalReason` | [0..1] |
| `_PricingElement` | `I_DebitMemoReqPrcgElmnt` | [0..*] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'DebitMemoRequest'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory: #M 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]  
@EndUserText.label: 'Debit Memo Request'
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser',
'_BusinessAreaText','_CostCenterBusinessAreaText','_CreditControlAreaText' ]
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AbapCatalog.sqlViewName: 'ISDDEBITMEMOREQ' 
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequest'  

@Analytics: {
    dataCategory:#DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbak', role: #MAIN,
                    viewElement: ['DebitMemoRequest'],
                    tableElement: ['vbeln']  },
                    
                {   filter: [{operator: #EQ, tableElement: 'posnr', value: '000000'}],
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['DebitMemoRequest'],
                    tableElement: ['vbeln']
                },   
                
                {   filter: [{operator: #EQ, tableElement: 'vposn', value: '000000'}],
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['DebitMemoRequest'],
                    tableElement: ['vbeln']
                }              
            ]
        }
    }
 }

define view I_DebitMemoRequest
  as select from I_SalesDocument as SalesDocument


  //--[ GENERATED:012:GlBfhyFV7jY4iWZtovPFwW
  association [0..*] to I_BusinessAreaText           as _BusinessAreaText           on   $projection.BusinessArea             = _BusinessAreaText.BusinessArea
  association [0..*] to I_BusinessAreaText           as _CostCenterBusinessAreaText on   $projection.CostCenterBusinessArea   = _CostCenterBusinessAreaText.BusinessArea
  association [0..*] to I_CreditControlAreaText      as _CreditControlAreaText      on   $projection.CreditControlArea        = _CreditControlAreaText.CreditControlArea
  // ]--GENERATED
  association[0..*] to I_DebitMemoRequestItem        as _Item                       on $projection.DebitMemoRequest           = _Item.DebitMemoRequest
  association[0..1] to I_DebitMemoRequestType        as _DebitMemoRequestType       on $projection.DebitMemoRequestType       = _DebitMemoRequestType.DebitMemoRequestType
  association[1..*] to I_DebitMemoReqPartner         as _Partner                    on $projection.DebitMemoRequest           = _Partner.DebitMemoRequest
  association [0..1] to I_DebitMemoReqApprovalReason as _DebitMemoReqApprovalReason on $projection.DebitMemoReqApprovalReason = _DebitMemoReqApprovalReason.DebitMemoReqApprovalReason
  association[0..*] to I_DebitMemoReqPrcgElmnt       as _PricingElement             on $projection.DebitMemoRequest           = _PricingElement.DebitMemoRequest
//Extensibility
  association [0..1] to E_SalesDocumentBasic         as _Extension                  on SalesDocument.SalesDocument            = _Extension.SalesDocument

{
    // Key
    key cast(SalesDocument as debit_memo_request preserving type) as DebitMemoRequest,
   
    // Category
    @ObjectModel.foreignKey.association: '_DebitMemoRequestType'
    cast(SalesDocumentType as debit_memo_request_type preserving type ) as DebitMemoRequestType,
    SalesDocumentProcessingType as DebitMemoRequestProcessingType,
   
    // Admin
    CreatedByUser,
    LastChangedByUser,
    @Semantics.systemDate.createdAt: true
    CreationDate,
    CreationTime,
    @Semantics.systemDate.lastChangedAt: true
    LastChangeDate,
    @Semantics.systemDateTime.lastChangedAt: true
    LastChangeDateTime,
   
    // Organization
    @ObjectModel.foreignKey.association: '_SalesOrganization'
    SalesOrganization,
    @ObjectModel.foreignKey.association: '_DistributionChannel'
    DistributionChannel,
    @ObjectModel.foreignKey.association: '_OrganizationDivision'
    OrganizationDivision, 
    @ObjectModel.foreignKey.association: '_SalesGroup'
    SalesGroup, 
    @ObjectModel.foreignKey.association: '_SalesOffice'
    SalesOffice,
   
    // Sales
      //--[ GENERATED:012:GlBfhyFV7jY4iWZtovPFwW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_SoldToParty'
    SoldToParty,
    @ObjectModel.foreignKey.association: '_CustomerGroup'
    CustomerGroup,
    @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
    AdditionalCustomerGroup1,
    @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
    AdditionalCustomerGroup2,
    @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
    AdditionalCustomerGroup3,
    @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
    AdditionalCustomerGroup4,
    @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
    AdditionalCustomerGroup5,
      //--[ GENERATED:012:GlBfhyFV7jY4iWZtovPFwW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CreditControlAreaStdVH',
                     element: 'CreditControlArea' }
        }]
      @ObjectModel.text.association: '_CreditControlAreaText'
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_CreditControlArea'
    CreditControlArea,
    SalesDocumentDate as DebitMemoRequestDate,  
    ServicesRenderedDate,
    @ObjectModel.foreignKey.association: '_SDDocumentReason'
    SDDocumentReason,
    CorrespncExternalReference,
    PurchaseOrderByShipToParty,
    CorrespncExtRefByShipToParty,
    PurchaseOrderByCustomer,
    @Analytics.internalName: #LOCAL
    @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType'
    CustomerPurchaseOrderType,
    @Analytics.internalName: #LOCAL
    @ObjectModel.foreignKey.association: '_CustPurOrdTypeByShipToParty'
    CustPurOrdTypeByShipToParty,
    CustomerPurchaseOrderDate,
    CustomerPurchaseOrderSuplmnt,
    @ObjectModel.foreignKey.association: '_SalesDistrict'
    SalesDistrict,
    
    // Pricing
    @DefaultAggregation: #SUM
    @Semantics.amount.currencyCode: 'TransactionCurrency'
    TotalNetAmount,
    @Semantics.currencyCode: true
    @ObjectModel.foreignKey.association: '_TransactionCurrency'
    TransactionCurrency,
    
    @Analytics.internalName: #LOCAL
    @ObjectModel.foreignKey.association: '_SDPricingProcedure' 
    SDPricingProcedure,
    @Analytics.internalName: #LOCAL
    @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
    CustomerPriceGroup,
    @Analytics.internalName: #LOCAL
    @ObjectModel.foreignKey.association: '_PriceListType'
    PriceListType,
    
    PricingDate,
    SalesDocumentCondition as DebitMemoRequestCondition,
    CustomerTaxClassification1,
    CustomerTaxClassification2,
    CustomerTaxClassification3,
    CustomerTaxClassification4,
    CustomerTaxClassification5,
    CustomerTaxClassification6,
    CustomerTaxClassification7,
    CustomerTaxClassification8,
    CustomerTaxClassification9,
    
    //Shipping
    @ObjectModel.foreignKey.association: '_IncotermsClassification'
    IncotermsClassification,
    IncotermsTransferLocation,
    IncotermsLocation1,
    IncotermsLocation2,
    @ObjectModel.foreignKey.association: '_IncotermsVersion'
    IncotermsVersion,

    //Approval Management
    @Analytics.internalName: #LOCAL
    @ObjectModel.foreignKey.association: '_DebitMemoReqApprovalReason'
    cast(SalesDocApprovalReason as sd_dmr_approval_reason) as DebitMemoReqApprovalReason,

    // Billing
    BillingDocumentDate,
      //--[ GENERATED:012:GlBfhyFV7jY4iWZtovPFwW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_BillingCompanyCode'
    BillingCompanyCode,
    @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
    HeaderBillingBlockReason,
   
    // Payment
    @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
    CustomerPaymentTerms,
    PaymentMethod,
    
    // Accounting
    FiscalYear,
    FiscalPeriod,
    ExchangeRateDate,
    @ObjectModel.foreignKey.association: '_ExchangeRateType'
    ExchangeRateType,
    cast(AccountingExchangeRate as kurrf_not_converted preserving type ) as AccountingExchangeRate,
      //--[ GENERATED:012:GlBfhyFV7jY4iWZtovPFwW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_BusinessArea'
    BusinessArea,
    @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
    CustomerAccountAssignmentGroup,
      //--[ GENERATED:012:GlBfhyFV7jY4iWZtovPFwW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_CostCenterBusinessAreaText'
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_CostCenterBusinessArea'
    CostCenterBusinessArea,
    CostCenter,
      //--[ GENERATED:012:GlBfhyFV7jY4iWZtovPFwW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_ControllingArea'
    ControllingArea,
    OrderID,
      //--[ GENERATED:012:GlBfhyFV7jY4iWZtovPFwW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingObjectStdVH',
                     element: 'ControllingObject' }
        }]
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_ControllingObject'
    ControllingObject,
    
    // Reference
    ReferenceSDDocument,
    @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
    ReferenceSDDocumentCategory,
    
    // Status
    @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
    OverallSDProcessStatus,
    @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
    OverallSDDocumentRejectionSts,
    @ObjectModel.foreignKey.association: '_TotalBlockStatus'
    TotalBlockStatus,
    @ObjectModel.foreignKey.association: '_OverallOrdReltdBillgStatus'
    OverallOrdReltdBillgStatus,
    @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
    OverallBillingBlockStatus,
    @ObjectModel.foreignKey.association: '_OverallTotalSDDocRefStatus'
    OverallTotalSDDocRefStatus,
    @ObjectModel.foreignKey.association: '_OverallSDDocReferenceStatus'
    OverallSDDocReferenceStatus,
    @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
    TotalCreditCheckStatus,
    @ObjectModel.foreignKey.association: '_MaxDocValueCreditCheckStatus'
    MaxDocValueCreditCheckStatus,
    @ObjectModel.foreignKey.association: '_PaymentTermCreditCheckStatus'
    PaymentTermCreditCheckStatus,
    @ObjectModel.foreignKey.association: '_FinDocCreditCheckStatus'
    FinDocCreditCheckStatus,
    @ObjectModel.foreignKey.association: '_ExprtInsurCreditCheckStatus'
    ExprtInsurCreditCheckStatus,
    @ObjectModel.foreignKey.association: '_PaytAuthsnCreditCheckSts'
    PaytAuthsnCreditCheckSts,
    @ObjectModel.foreignKey.association: '_CentralCreditCheckStatus'
    CentralCreditCheckStatus,
    @ObjectModel.foreignKey.association: '_CentralCreditChkTechErrSts'
    CentralCreditChkTechErrSts,
    @ObjectModel.foreignKey.association: '_HdrGeneralIncompletionStatus'
    HdrGeneralIncompletionStatus,
    @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
    OverallPricingIncompletionSts,
    @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
    HeaderBillgIncompletionStatus,
    @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
    OvrlItmGeneralIncompletionSts,
    @ObjectModel.foreignKey.association: '_OvrlItmBillingIncompletionSts'
    OvrlItmBillingIncompletionSts,
    @Analytics.internalName: #LOCAL
    @ObjectModel.foreignKey.association: '_SalesDocApprovalStatus'
    SalesDocApprovalStatus,
    
    @Analytics.internalName: #LOCAL
    AccountingDocExternalReference,
    AssignmentReference,
    
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Item,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Partner,
    _StandardPartner,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _PricingElement,
    _DebitMemoRequestType,
    _CreatedByUser,
    _LastChangedByUser,
    _SalesOrganization,
    _DistributionChannel,
    _OrganizationDivision,
    _SalesGroup,
    _SalesOffice,
    _SoldToParty,
    _CustomerGroup,
    _AdditionalCustomerGroup1,
    _AdditionalCustomerGroup2,
    _AdditionalCustomerGroup3,
    _AdditionalCustomerGroup4,
    _AdditionalCustomerGroup5,
    _CreditControlArea,
    _SDPricingProcedure,
    _CustomerPriceGroup,
    _PriceListType,
    _SDDocumentReason,
    _CustomerPurchaseOrderType,
    _CustPurOrdTypeByShipToParty,
    _SalesDistrict,
    _TransactionCurrency,
    _IncotermsClassification,
    _IncotermsVersion,
    _BillingCompanyCode,
    _DebitMemoReqApprovalReason,
    _HeaderBillingBlockReason,
    _CustomerPaymentTerms,
    //_PaymentMethod, View not in SD
    _ExchangeRateType,
    _BusinessArea,
    _CustomerAccountAssgmtGroup,
    _CostCenterBusinessArea,
    _CostCenter,
    _ControllingArea,
    _ControllingObject,
    //_ReferenceSDDocument,  ? in spec
    _ReferenceSDDocumentCategory,
    _OverallSDProcessStatus,
    _OverallSDDocumentRejectionSts,
    _TotalBlockStatus,
    _OverallOrdReltdBillgStatus,
    _OverallBillingBlockStatus,
    _OverallTotalSDDocRefStatus,
    _OverallSDDocReferenceStatus,
    _TotalCreditCheckStatus,
    _MaxDocValueCreditCheckStatus,
    _PaymentTermCreditCheckStatus,
    _FinDocCreditCheckStatus,
    _ExprtInsurCreditCheckStatus,
    _PaytAuthsnCreditCheckSts,
    _CentralCreditCheckStatus,
    _CentralCreditChkTechErrSts,
    _HdrGeneralIncompletionStatus,
    _OverallPricingIncompletionSts,
    _HeaderBillgIncompletionStatus,
    _OvrlItmGeneralIncompletionSts,
    _OvrlItmBillingIncompletionSts,
    _SalesDocApprovalStatus,
    //--[ GENERATED:012:GlBfhyFV7jY4iWZtovPFwW
    @Consumption.hidden: true
    _BusinessAreaText,
    @Consumption.hidden: true
    _CostCenterBusinessAreaText,
    @Consumption.hidden: true
    _CreditControlAreaText
    // ]--GENERATED

}
where SDDocumentCategory = 'L';
```
