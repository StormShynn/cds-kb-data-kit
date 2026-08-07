---
name: I_CREDITMEMOREQUEST
description: Creditmemorequest
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - credit
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUEST

**Creditmemorequest**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CreditMemoRequest` | ✓ | |  | `cast(SalesDocument as credit_memo_request preserving type )` |
| `CreditMemoRequestType` |  | |  | `SalesDocumentType` |
| `CreditMemoRequestProcgType` |  | |  | `SalesDocumentProcessingType` |
| `CreatedByUser` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `CustomerGroup` |  | |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |
| `CreditControlArea` |  | |  |  |
| `CreditMemoRequestDate` |  | |  | `SalesDocumentDate` |
| `ServicesRenderedDate` |  | |  |  |
| `SDDocumentReason` |  | |  |  |
| `CorrespncExternalReference` |  | |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |
| `CorrespncExtRefByShipToParty` |  | |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |
| `CustPurOrdTypeByShipToParty` |  | |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  |
| `SalesDistrict` |  | |  |  |
| `TotalNetAmount` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `SDPricingProcedure` |  | |  |  |
| `CustomerPriceGroup` |  | |  |  |
| `PriceListType` |  | |  |  |
| `PricingDate` |  | |  |  |
| `PriceDetnExchangeRate` |  | |  |  |
| `CreditMemoRequestCondition` |  | |  | `SalesDocumentCondition` |
| `CustomerTaxClassification1` |  | |  |  |
| `CustomerTaxClassification2` |  | |  |  |
| `CustomerTaxClassification3` |  | |  |  |
| `CustomerTaxClassification4` |  | |  |  |
| `CustomerTaxClassification5` |  | |  |  |
| `CustomerTaxClassification6` |  | |  |  |
| `CustomerTaxClassification7` |  | |  |  |
| `CustomerTaxClassification8` |  | |  |  |
| `CustomerTaxClassification9` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `IncotermsLocation1` |  | |  |  |
| `IncotermsLocation2` |  | |  |  |
| `IncotermsVersion` |  | |  |  |
| `CreditMemoReqApprovalReason` |  | |  | `SalesDocApprovalReason` |
| `BillingDocumentDate` |  | |  |  |
| `BillingCompanyCode` |  | |  |  |
| `HeaderBillingBlockReason` |  | |  |  |
| `CustomerPaymentTerms` |  | |  |  |
| `PaymentMethod` |  | |  |  |
| `FiscalYear` |  | |  |  |
| `FiscalPeriod` |  | |  |  |
| `ExchangeRateDate` |  | |  |  |
| `ExchangeRateType` |  | |  |  |
| `AccountingExchangeRate` |  | |  | `cast(AccountingExchangeRate as kurrf_not_converted preserving type )` |
| `BusinessArea` |  | |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |
| `CostCenterBusinessArea` |  | |  |  |
| `CostCenter` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `OrderID` |  | |  |  |
| `ControllingObject` |  | |  |  |
| `ReferenceSDDocument` |  | |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |
| `OverallSDProcessStatus` |  | |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |
| `TotalBlockStatus` |  | |  |  |
| `OverallOrdReltdBillgStatus` |  | |  |  |
| `OverallBillingBlockStatus` |  | |  |  |
| `OverallTotalSDDocRefStatus` |  | |  |  |
| `OverallSDDocReferenceStatus` |  | |  |  |
| `TotalCreditCheckStatus` |  | |  |  |
| `MaxDocValueCreditCheckStatus` |  | |  |  |
| `PaymentTermCreditCheckStatus` |  | |  |  |
| `FinDocCreditCheckStatus` |  | |  |  |
| `ExprtInsurCreditCheckStatus` |  | |  |  |
| `PaytAuthsnCreditCheckSts` |  | |  |  |
| `CentralCreditCheckStatus` |  | |  |  |
| `CentralCreditChkTechErrSts` |  | |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |
| `OverallPricingIncompletionSts` |  | |  |  |
| `HeaderBillgIncompletionStatus` |  | |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |
| `OvrlItmBillingIncompletionSts` |  | |  |  |
| `SalesDocApprovalStatus` |  | |  |  |
| `AccountingDocExternalReference` |  | |  |  |
| `AssignmentReference` |  | |  |  |
| `_BusinessAreaText` | | ✓ | | |
| `_CostCenterBusinessAreaText` | | ✓ | | |
| `_CreditControlAreaText` | | ✓ | | |
| `_Item` | | ✓ | | |
| `_CreditMemoRequestType` | | ✓ | | |
| `_Partner` | | ✓ | | |
| `_PricingElement` | | ✓ | | |
| `_CreditMemoReqApprovalReason` | | ✓ | | |
| `_StandardPartner` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_OrganizationDivision` | | ✓ | | |
| `_SalesGroup` | | ✓ | | |
| `_SalesOffice` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_CustomerGroup` | | ✓ | | |
| `_AdditionalCustomerGroup1` | | ✓ | | |
| `_AdditionalCustomerGroup2` | | ✓ | | |
| `_AdditionalCustomerGroup3` | | ✓ | | |
| `_AdditionalCustomerGroup4` | | ✓ | | |
| `_AdditionalCustomerGroup5` | | ✓ | | |
| `_CreditControlArea` | | ✓ | | |
| `_SDDocumentReason` | | ✓ | | |
| `_CustomerPurchaseOrderType` | | ✓ | | |
| `_CustPurOrdTypeByShipToParty` | | ✓ | | |
| `_SalesDistrict` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |
| `_IncotermsClassification` | | ✓ | | |
| `_IncotermsVersion` | | ✓ | | |
| `_BillingCompanyCode` | | ✓ | | |
| `_CustomerPaymentTerms` | | ✓ | | |
| `_HeaderBillingBlockReason` | | ✓ | | |
| `_ExchangeRateType` | | ✓ | | |
| `_BusinessArea` | | ✓ | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | |
| `_CostCenterBusinessArea` | | ✓ | | |
| `_CostCenter` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |
| `_ControllingObject` | | ✓ | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | |
| `_OverallSDProcessStatus` | | ✓ | | |
| `_OverallSDDocumentRejectionSts` | | ✓ | | |
| `_TotalBlockStatus` | | ✓ | | |
| `_OverallOrdReltdBillgStatus` | | ✓ | | |
| `_OverallBillingBlockStatus` | | ✓ | | |
| `_OverallTotalSDDocRefStatus` | | ✓ | | |
| `_OverallSDDocReferenceStatus` | | ✓ | | |
| `_TotalCreditCheckStatus` | | ✓ | | |
| `_MaxDocValueCreditCheckStatus` | | ✓ | | |
| `_PaymentTermCreditCheckStatus` | | ✓ | | |
| `_FinDocCreditCheckStatus` | | ✓ | | |
| `_ExprtInsurCreditCheckStatus` | | ✓ | | |
| `_PaytAuthsnCreditCheckSts` | | ✓ | | |
| `_CentralCreditCheckStatus` | | ✓ | | |
| `_CentralCreditChkTechErrSts` | | ✓ | | |
| `_HdrGeneralIncompletionStatus` | | ✓ | | |
| `_OverallPricingIncompletionSts` | | ✓ | | |
| `_HeaderBillgIncompletionStatus` | | ✓ | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | |
| `_OvrlItmBillingIncompletionSts` | | ✓ | | |
| `_SalesDocApprovalStatus` | | ✓ | | |
| `_SDPricingProcedure` | | ✓ | | |
| `_CustomerPriceGroup` | | ✓ | | |
| `_PriceListType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CostCenterBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CreditControlAreaText` | `I_CreditControlAreaText` | [0..*] |
| `_Item` | `I_CreditMemoRequestItem` | [0..*] |
| `_CreditMemoRequestType` | `I_CreditMemoRequestType` | [0..1] |
| `_Partner` | `I_CreditMemoReqPartner` | [1..*] |
| `_PricingElement` | `I_CreditMemoReqPrcgElmnt` | [0..*] |
| `_CreditMemoReqApprovalReason` | `I_CreditMemoReqApprovalReason` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'CreditMemoRequest'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory:  #M
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]   
@EndUserText.label: 'Credit Memo Request'
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser'
//--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
,'_BusinessAreaText','_CostCenterBusinessAreaText','_CreditControlAreaText'
// ]--GENERATED
]
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AbapCatalog.sqlViewName: 'ISDCREDITMEMOREQ'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequest'  

@Analytics: {
    dataCategory:#DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbak', role: #MAIN,
                    viewElement: ['CreditMemoRequest'],
                    tableElement: ['vbeln']  },
                    
                {   filter: [{operator: #EQ, tableElement: 'posnr', value: '000000'}],
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['CreditMemoRequest'],
                    tableElement: ['vbeln']
                },   
                
                {   filter: [{operator: #EQ, tableElement: 'vposn', value: '000000'}],
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['CreditMemoRequest'],
                    tableElement: ['vbeln']
                }              
            ]
        }
    }
 }

define view I_CreditMemoRequest
as select from I_SalesDocument as SalesDocument
//Associations

  //--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
  association [0..*] to I_BusinessAreaText            as _BusinessAreaText            on $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_BusinessAreaText            as _CostCenterBusinessAreaText  on $projection.CostCenterBusinessArea = _CostCenterBusinessAreaText.BusinessArea
  association [0..*] to I_CreditControlAreaText       as _CreditControlAreaText       on $projection.CreditControlArea = _CreditControlAreaText.CreditControlArea
  // ]--GENERATED
  association [0..*] to I_CreditMemoRequestItem       as _Item                        on $projection.CreditMemoRequest = _Item.CreditMemoRequest
  association [0..1] to I_CreditMemoRequestType       as _CreditMemoRequestType       on $projection.CreditMemoRequestType = _CreditMemoRequestType.CreditMemoRequestType
  association [1..*] to I_CreditMemoReqPartner        as _Partner                     on $projection.CreditMemoRequest     = _Partner.CreditMemoRequest
  association [0..*] to I_CreditMemoReqPrcgElmnt      as _PricingElement              on $projection.CreditMemoRequest     = _PricingElement.CreditMemoRequest
  association [0..1] to I_CreditMemoReqApprovalReason as _CreditMemoReqApprovalReason on $projection.CreditMemoReqApprovalReason = _CreditMemoReqApprovalReason.CreditMemoReqApprovalReason
  
//Extensibility
  association [0..1] to E_SalesDocumentBasic          as _Extension                   on  SalesDocument.SalesDocument = _Extension.SalesDocument 

{
    // Key
    key cast(SalesDocument as credit_memo_request preserving type ) as CreditMemoRequest,
   
    // Category
    @ObjectModel.foreignKey.association: '_CreditMemoRequestType'
    SalesDocumentType as CreditMemoRequestType,
    SalesDocumentProcessingType as CreditMemoRequestProcgType,
   
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
      //--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
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
      //--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CreditControlAreaStdVH',
                     element: 'CreditControlArea' }
        }]
      @ObjectModel.text.association: '_CreditControlAreaText'
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_CreditControlArea'
    CreditControlArea,
    SalesDocumentDate as CreditMemoRequestDate, 
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
    PriceDetnExchangeRate,
    SalesDocumentCondition as CreditMemoRequestCondition, 
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
    @ObjectModel.foreignKey.association: '_CreditMemoReqApprovalReason'
    SalesDocApprovalReason                                    as  CreditMemoReqApprovalReason,
   
    // Billing
    BillingDocumentDate,
      //--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
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
    
    //Accounting
    FiscalYear,
    FiscalPeriod,
    ExchangeRateDate,
    @ObjectModel.foreignKey.association: '_ExchangeRateType'
    ExchangeRateType,
    cast(AccountingExchangeRate as kurrf_not_converted preserving type ) as AccountingExchangeRate,
      //--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
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
      //--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_CostCenterBusinessAreaText'
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_CostCenterBusinessArea'
    CostCenterBusinessArea,
    CostCenter,
      //--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_ControllingArea'
    ControllingArea,
    OrderID,
      //--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingObjectStdVH',
                     element: 'ControllingObject' }
        }]
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_ControllingObject'
    ControllingObject,

    //Reference
    ReferenceSDDocument,
    @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
    ReferenceSDDocumentCategory,

    //Status
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
    _CreditMemoRequestType,
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
    _SDDocumentReason,
    _CustomerPurchaseOrderType,
    _CustPurOrdTypeByShipToParty,
    _SalesDistrict,   
    _TransactionCurrency,
    //Todo:SalesDocumentCondition,
    _IncotermsClassification,
    _IncotermsVersion,
    _CreditMemoReqApprovalReason,
    _BillingCompanyCode,  
    _CustomerPaymentTerms,
    _HeaderBillingBlockReason,
    //Todo: _PaymentMethod,
    _ExchangeRateType, 
    _BusinessArea,
    _CustomerAccountAssgmtGroup,
    _CostCenterBusinessArea,
    _CostCenter, 
    _ControllingArea,
    _ControllingObject,
    //Todo: ReferenceSDDocument,
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
    _SDPricingProcedure,
    _CustomerPriceGroup,
    _PriceListType,
       
      //--[ GENERATED:012:GlBfhyFV7jY4ibFExWVH{G
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _CostCenterBusinessAreaText,
      @Consumption.hidden: true
      _CreditControlAreaText
      // ]--GENERATED


}
where SDDocumentCategory = 'K';
```
