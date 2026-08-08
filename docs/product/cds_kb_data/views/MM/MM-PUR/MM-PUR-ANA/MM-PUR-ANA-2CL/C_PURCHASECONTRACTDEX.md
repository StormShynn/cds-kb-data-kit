---
name: C_PURCHASECONTRACTDEX
description: "Purchase ContractDEX"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - purchase-contract
  - contract
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURCHASECONTRACTDEX

**Purchase ContractDEX**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |  |  |
| `PurchaseContractType` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `ExchangeRate` |  | |  | `cast ( ExchangeRate as fis_exchange_rate preserving type)` |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `PurchaseContractTargetAmount` |  | |  |  |  |  |
| `ReleaseCode` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
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
| `_PurchaseContractItemDEX` | | ✓ | | | | |
| `_PurchasingContractType` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_SupplyingSupplier` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HeaderExtension` | `E_PurchasingDocument` | [0..1] |
| `_PurchaseContractItemDEX` | `C_PurchaseContractItemDEX` | [0..*] |
| `_PurchasingContractType` | `I_PurchaseContractType` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_InvoicingParty` | `I_Supplier` | [0..1] |
| `_SupplyingSupplier` | `I_Supplier` | [0..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_IncotermsVersion` | `I_IncotermsVersion` | [0..1] |
| `_Address` | `I_Address_2` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName                : 'CMMPURCONTRDEX'
@EndUserText.label                      : 'Data Extraction for Purchase Contract'
@AbapCatalog.compiler.compareFilter     : true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ]
              }

@VDM.viewType                           : #CONSUMPTION
//@ObjectModel.representativeKey          : [ 'PurchaseContract' ]
@Metadata.ignorePropagatedAnnotations   : true

//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'ekko', role: #MAIN,
                        viewElement     : ['PurchaseContract' ],
                        tableElement    : ['ebeln' ]
                      }
                    ]
        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'PurchaseContract'
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_PurchaseContractDEX
  as select from I_PurchaseContractAPI01

  association [0..1] to E_PurchasingDocument as _HeaderExtension on $projection.PurchaseContract = _HeaderExtension.PurchasingDocument
  
  association [0..*] to C_PurchaseContractItemDEX    as _PurchaseContractItemDEX     on $projection.PurchaseContract = _PurchaseContractItemDEX.PurchaseContract
  
  association [1..1] to I_PurchaseContractType       as _PurchasingContractType      on  $projection.PurchaseContractType = _PurchasingContractType.PurchaseContractType
                                                                                     
  association [1..1] to I_PurchasingGroup            as _PurchasingGroup             on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization      on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  
  association [1..1] to I_Supplier                   as _Supplier                    on  $projection.Supplier = _Supplier.Supplier
  
  association [0..1] to I_Supplier                   as _InvoicingParty              on  $projection.InvoicingParty = _InvoicingParty.Supplier
  
  association [0..1] to I_Supplier                   as _SupplyingSupplier           on  $projection.SupplyingSupplier = _SupplyingSupplier.Supplier
  
  association [1..1] to I_Currency                   as _Currency                    on  $projection.DocumentCurrency = _Currency.Currency
  
  association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCategory  on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory
  
  association [0..1] to I_CompanyCode                as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  
  association [0..1] to I_IncotermsClassification    as _IncotermsClassification     on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  
  association [0..1] to I_PaymentTerms               as _PaymentTerms                on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms

  association [0..1] to I_IncotermsVersion           as _IncotermsVersion            on  $projection.IncotermsVersion = _IncotermsVersion.IncotermsVersion
  
  association [0..1] to I_Address_2                  as _Address                     on  $projection.SupplierAddressID      = _Address.AddressID
                                                                                     and _Address.AddressPersonID           = ''
                                                                                     and _Address.AddressRepresentationCode = ''
   
{
  key PurchaseContract                                          as PurchaseContract,
      
      @ObjectModel.foreignKey.association: '_PurchasingContractType'
      PurchaseContractType                                      as PurchaseContractType,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup                                           as PurchasingGroup,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization                                    as PurchasingOrganization,

      ValidityStartDate                                         as ValidityStartDate,

      ValidityEndDate                                           as ValidityEndDate,

      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier                                                  as Supplier,

      @ObjectModel.foreignKey.association: '_InvoicingParty'
      InvoicingParty                                            as InvoicingParty,

      @ObjectModel.foreignKey.association: '_SupplyingSupplier'
      SupplyingSupplier                                         as SupplyingSupplier,

      @Semantics.systemDate.createdAt: true
      CreationDate                                              as CreationDate,
      
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime                                        as LastChangeDateTime,

      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      DocumentCurrency                                          as DocumentCurrency,

      cast ( ExchangeRate as fis_exchange_rate preserving type) as ExchangeRate,

      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      PurchasingDocumentCategory                                as PurchasingDocumentCategory,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode                                               as CompanyCode,

      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification                                   as IncotermsClassification,

      IncotermsTransferLocation                                 as IncotermsTransferLocation,

      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms                                              as PaymentTerms,

      CashDiscount1Days                                         as CashDiscount1Days,

      CashDiscount2Days                                         as CashDiscount2Days,

      NetPaymentDays                                            as NetPaymentDays,

      CashDiscount1Percent                                      as CashDiscount1Percent,

      CashDiscount2Percent                                      as CashDiscount2Percent,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurchaseContractTargetAmount                              as PurchaseContractTargetAmount,

      ReleaseCode                                               as ReleaseCode,

      @Semantics.user.createdBy: true
      CreatedByUser                                             as CreatedByUser,

      PurchasingDocumentDeletionCode                            as PurchasingDocumentDeletionCode,

      ExchangeRateIsFixed                                       as ExchangeRateIsFixed,

      @Semantics.businessDate.at: true
      QuotationSubmissionDate                                   as QuotationSubmissionDate,

      SupplierQuotation                                         as SupplierQuotation,

      CorrespncExternalReference                                as CorrespncExternalReference,

      CorrespncInternalReference                                as CorrespncInternalReference,

      SupplierRespSalesPersonName                               as SupplierRespSalesPersonName,

      @Semantics.telephone.type: [ #WORK ]
      SupplierPhoneNumber                                       as SupplierPhoneNumber,

      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion                                          as IncotermsVersion,

      IncotermsLocation1                                        as IncotermsLocation1,

      IncotermsLocation2                                        as IncotermsLocation2,

      ReleaseIsNotCompleted                                     as ReleaseIsNotCompleted,

      @ObjectModel.foreignKey.association: '_Address'
      SupplierAddressID                                         as SupplierAddressID,
      
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PurchaseContractItemDEX,
      
      _PurchasingContractType,
      _PurchasingGroup,
      _PurchasingOrganization,
      _Supplier,
      _InvoicingParty,
      _SupplyingSupplier,
      _Currency,
      _PurchasingDocumentCategory,
      _CompanyCode,
      _IncotermsClassification,
      _PaymentTerms,
      _IncotermsVersion,
      _Address
}
```
