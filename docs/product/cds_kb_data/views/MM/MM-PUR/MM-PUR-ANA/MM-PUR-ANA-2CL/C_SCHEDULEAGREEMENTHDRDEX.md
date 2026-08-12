---
name: C_SCHEDULEAGREEMENTHDRDEX
description: "Scheduleagreementhdrdex"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - header-level
  - schedule-line
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SCHEDULEAGREEMENTHDRDEX

**Scheduleagreementhdrdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `TargetAmount` |  | |  |  |  |  |
| `ExchangeRate` |  | |  | `cast ( ExchangeRate as fis_exchange_rate preserving type)` |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `PurchasingDocumentOrderDate` |  | |  |  |  |  |
| `ScheduleAgreementHasReleaseDoc` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierAddressID` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `QuotationSubmissionDate` |  | |  |  |  |  |
| `SupplierQuotationExternalID` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `CompanyVATRegistration` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_ScheduleAgreementItemDEX` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_PurchasingDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierAddress` | | ✓ | | | | |
| `_PurchasingDocumentOrigin` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_SupplyingSupplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ScheduleAgreementItemDEX` | `C_ScheduleAgreementItemDEX` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_PurchasingDocumentType` | `I_PurchasingDocumentType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [1..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_IncotermsVersion` | `I_IncotermsVersion` | [0..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_SupplierAddress` | `I_Address_2` | [0..1] |
| `_PurchasingDocumentOrigin` | `I_PurchasingDocumentOrigin` | [0..1] |
| `_InvoicingParty` | `I_Supplier` | [0..1] |
| `_SupplyingSupplier` | `I_Supplier` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSCHAGMTHDDEX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label: 'Data Extraction for Purchase Scheduling Agreement Header'

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
                        viewElement     : ['SchedulingAgreement' ],
                        tableElement    : ['ebeln' ]
                      }
                    ]
        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'PurchaseSchedulingAgreement'
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_ScheduleAgreementHdrDEX
  as select from I_SchedgagrmthdrApi01

  association [0..*] to C_ScheduleAgreementItemDEX   as _ScheduleAgreementItemDEX   on $projection.SchedulingAgreement = _ScheduleAgreementItemDEX.SchedulingAgreement

  association [1..1] to I_CompanyCode                as _CompanyCode                on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCategory on $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory

  association [1..1] to I_PurchasingDocumentType     as _PurchasingDocumentType     on  $projection.PurchasingDocumentCategory = _PurchasingDocumentType.PurchasingDocumentCategory
                                                                                    and $projection.PurchasingDocumentType     = _PurchasingDocumentType.PurchasingDocumentType

  association [1..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language

  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization     on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_PurchasingGroup            as _PurchasingGroup            on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_Currency                   as _DocumentCurrency           on $projection.DocumentCurrency = _DocumentCurrency.Currency

  association [1..1] to I_IncotermsClassification    as _IncotermsClassification    on $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification

  association [0..1] to I_PaymentTerms               as _PaymentTerms               on $projection.PaymentTerms = _PaymentTerms.PaymentTerms

  association [0..1] to I_IncotermsVersion           as _IncotermsVersion           on $projection.IncotermsVersion = _IncotermsVersion.IncotermsVersion

  association [1..1] to I_Supplier                   as _Supplier                   on $projection.Supplier = _Supplier.Supplier

  association [0..1] to I_Address_2                  as _SupplierAddress            on  $projection.SupplierAddressID              = _SupplierAddress.AddressID
                                                                                    and _SupplierAddress.AddressPersonID           = ''
                                                                                    and _SupplierAddress.AddressRepresentationCode = ''

  association [0..1] to I_PurchasingDocumentOrigin   as _PurchasingDocumentOrigin   on $projection.PurchasingDocumentOrigin = _PurchasingDocumentOrigin.PurchasingDocumentOrigin

  association [0..1] to I_Supplier                   as _InvoicingParty             on $projection.InvoicingParty = _InvoicingParty.Supplier

  association [0..1] to I_Supplier                   as _SupplyingSupplier          on $projection.SupplyingSupplier = _SupplyingSupplier.Supplier
{

  key SchedulingAgreement                                       as SchedulingAgreement,
  
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode                                               as CompanyCode,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      PurchasingDocumentCategory                                as PurchasingDocumentCategory,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentType'
      PurchasingDocumentType                                    as PurchasingDocumentType,
      
      @Semantics.user.createdBy: true
      CreatedByUser                                             as CreatedByUser,
      
      @Semantics.systemDate.createdAt: true
      CreationDate                                              as CreationDate,
      
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
      Language                                                  as Language,
      
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization                                    as PurchasingOrganization,
      
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup                                           as PurchasingGroup,
      
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      DocumentCurrency                                          as DocumentCurrency,
      
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification                                   as IncotermsClassification,
      
      IncotermsTransferLocation                                 as IncotermsTransferLocation,
      
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms                                              as PaymentTerms,
      
      CashDiscount1Days                                         as CashDiscount1Days,
      CashDiscount2Days                                         as CashDiscount2Days,
      CashDiscount1Percent                                      as CashDiscount1Percent,
      CashDiscount2Percent                                      as CashDiscount2Percent,
      NetPaymentDays                                            as NetPaymentDays,
      
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount                                              as TargetAmount,
      
      cast ( ExchangeRate as fis_exchange_rate preserving type) as ExchangeRate,
      ExchangeRateIsFixed                                       as ExchangeRateIsFixed,
      IncotermsLocation1                                        as IncotermsLocation1,
      IncotermsLocation2                                        as IncotermsLocation2,
      
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion                                          as IncotermsVersion,
      
      @Semantics.businessDate.at:true
      PurchasingDocumentOrderDate                               as PurchasingDocumentOrderDate,
      
      ScheduleAgreementHasReleaseDoc                            as ScheduleAgreementHasReleaseDoc,
      
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier                                                  as Supplier,
      
      @ObjectModel.foreignKey.association: '_SupplierAddress'
      SupplierAddressID                                         as SupplierAddressID,
      
      ValidityStartDate                                         as ValidityStartDate,
      
      ValidityEndDate                                           as ValidityEndDate,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentOrigin'
      PurchasingDocumentOrigin                                  as PurchasingDocumentOrigin,
      
      PurchasingDocumentDeletionCode                            as PurchasingDocumentDeletionCode,
      
      @Semantics.businessDate.at:true
      QuotationSubmissionDate                                   as QuotationSubmissionDate,
      
      SupplierQuotationExternalID                               as SupplierQuotationExternalID,
      SupplierRespSalesPersonName                               as SupplierRespSalesPersonName,
      
      @Semantics.telephone.type: [ #WORK ]
      SupplierPhoneNumber                                       as SupplierPhoneNumber,
      
      @ObjectModel.foreignKey.association: '_InvoicingParty'
      InvoicingParty                                            as InvoicingParty,
      
      @ObjectModel.foreignKey.association: '_SupplyingSupplier'
      SupplyingSupplier                                         as SupplyingSupplier,
      
      CompanyVATRegistration                                    as CompanyVATRegistration,
      VATRegistrationCountry                                    as VATRegistrationCountry,
      
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime                                        as LastChangeDateTime,
      
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ScheduleAgreementItemDEX,

      _CompanyCode,
      _PurchasingDocumentCategory,
      _PurchasingDocumentType,
      _Language,
      _PurchasingOrganization,
      _PurchasingGroup,
      _DocumentCurrency,
      _IncotermsClassification,
      _PaymentTerms,
      _IncotermsVersion,
      _Supplier,
      _SupplierAddress,
      _PurchasingDocumentOrigin,
      _InvoicingParty,
      _SupplyingSupplier
}
```
