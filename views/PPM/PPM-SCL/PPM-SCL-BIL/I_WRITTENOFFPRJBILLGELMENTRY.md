---
name: I_WRITTENOFFPRJBILLGELMENTRY
description: Writtenoffprjbillgelmentry
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_WRITTENOFFPRJBILLGELMENTRY

**Writtenoffprjbillgelmentry**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjBillgElmntEntrItmUUID` | ✓ | |  |  |  |  |
| `ProjectBillingRequestUUID` |  | |  |  |  |  |
| `ProjectInternalID` |  | |  |  |  |  |
| `Ledger` |  | | `_PrjBlgElmEntrJrnlEntrLink` | `Ledger` |  |  |
| `CompanyCode` |  | | `_PrjBlgElmEntrJrnlEntrLink` | `CompanyCode` |  |  |
| `AccountingDocument` |  | | `_PrjBlgElmEntrJrnlEntrLink` | `AccountingDocument` |  |  |
| `LedgerGLLineItem` |  | | `_PrjBlgElmEntrJrnlEntrLink` | `LedgerGLLineItem` |  |  |
| `FiscalYear` |  | | `_PrjBlgElmEntrJrnlEntrLink` | `FiscalYear` |  |  |
| `Material` |  | | `_ProjBillElementEntry` | `Material` |  |  |
| `WBSElement` |  | | `_ProjBillElementEntry._WBSElement` | `WBSElementExternalID` |  |  |
| `ServicesRenderedDate` |  | | `_ProjBillElementEntry` | `ServicesRenderedDate` |  |  |
| `OpenAmountInTransCrcy` |  | | `_ProjBillElementEntry` | `OriginalAmountInTransacCrcy` |  |  |
| `WrittenOffQuantity` |  | |  | `cast(WrittenOffQuantity as pbee_wrtnoffqty preserving type)` |  |  |
| `WrittenOffAmtInTransacCrcy` |  | |  | `cast(WrittenOffAmtInTransacCrcy as pbee_wrtnofftranscrcy preserving type)` |  |  |
| `WrittenOffRevenueAmtInDocCrcy` |  | |  | `cast(WrittenOffRevenueAmtInDocCrcy as pbee_writtenoffrevnindoccrcy preserving type)` |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `_ProjectBillingRequestTP` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrencyText` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_DocumentCurrencyText` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |
| `_QuantityUnitText` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectBillingRequestTP` | `I_ProjectBillingRequestTP_2` | [0..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_MaterialText` | `I_MaterialText` | [0..*] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrencyText` | `I_CurrencyText` | [1..*] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_DocumentCurrencyText` | `I_CurrencyText` | [1..*] |
| `_QuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_QuantityUnitText` | `I_UnitOfMeasure` | [1..1] |
| `_AccountingDocument` | `I_AccountingDocument` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |

## Source Code

```abap
@VDM: { viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }

@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel: { supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#UI_PROVIDER_PROJECTION_SOURCE ],
                modelingPattern: #NONE,
                usageType            : { serviceQuality : #C,
                                         dataClass      : #TRANSACTIONAL,
                                         sizeCategory   : #XL },
                representativeKey: 'ProjBillgElmntEntrItmUUID'
              }

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Written off PBE entries'

define view entity I_WrittenOffPrjBillgElmEntry
  as select from I_WrittenOffPrjBlgElmEntrDets as WrittenOffPrjBlgElmEntrDets

  association [0..1] to I_ProjectBillingRequestTP_2 as _ProjectBillingRequestTP on  WrittenOffPrjBlgElmEntrDets.ProjectBillingRequestUUID = _ProjectBillingRequestTP.ProjectBillingRequestUUID
  association [1..1] to I_Ledger                    as _Ledger                  on  $projection.ledger = _Ledger.Ledger
  association [0..*] to I_LedgerText                as _LedgerText              on  $projection.ledger = _LedgerText.Ledger
  association [0..1] to I_CompanyCode               as _CompanyCode             on  $projection.companycode = _CompanyCode.CompanyCode
  association [0..1] to I_Material                  as _Material                on  $projection.material = _Material.Material
  association [0..*] to I_MaterialText              as _MaterialText            on  $projection.material = _MaterialText.Material
  association [1..1] to I_Currency                  as _TransactionCurrency     on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..*] to I_CurrencyText              as _TransactionCurrencyText on  $projection.TransactionCurrency   = _TransactionCurrencyText.Currency
                                                                                
  association [1..1] to I_Currency                  as _DocumentCurrency        on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  association [1..*] to I_CurrencyText              as _DocumentCurrencyText    on  $projection.DocumentCurrency   = _DocumentCurrencyText.Currency
                                                                              
  association [0..1] to I_UnitOfMeasure             as _QuantityUnit            on  $projection.QuantityUnit = _QuantityUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure             as _QuantityUnitText        on  $projection.QuantityUnit = _QuantityUnitText.UnitOfMeasure
  association [1..1] to I_AccountingDocument        as _AccountingDocument      on  $projection.companycode        = _AccountingDocument.CompanyCode
                                                                                and $projection.fiscalyear         = _AccountingDocument.FiscalYear
                                                                                and $projection.accountingdocument = _AccountingDocument.AccountingDocument

  association [0..1] to I_FiscalYearForCompanyCode  as _FiscalYear              on  $projection.fiscalyear  = _FiscalYear.FiscalYear
                                                                                and $projection.companycode = _FiscalYear.CompanyCode
{
  key ProjBillgElmntEntrItmUUID,
      ProjectBillingRequestUUID,
      // 2308 - Adding Project Internal ID for DCL changes for PBR Authorization Concept
      ProjectInternalID,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_LedgerStdVH',
                    element: 'Ledger' }
       }]
      @ObjectModel.foreignKey.association: '_Ledger'
      _PrjBlgElmEntrJrnlEntrLink.Ledger,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      _PrjBlgElmEntrJrnlEntrLink.CompanyCode,
      @ObjectModel.foreignKey.association: '_AccountingDocument'
      _PrjBlgElmEntrJrnlEntrLink.AccountingDocument,
      _PrjBlgElmEntrJrnlEntrLink.LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_FiscalYear'
      _PrjBlgElmEntrJrnlEntrLink.FiscalYear,
//      @Consumption.valueHelpDefinition: [
//       { entity:  { name:    'I_MaterialStdVH',
//                    element: 'Material' }
//       }]
      @ObjectModel.foreignKey.association: '_Material'
      _ProjBillElementEntry.Material,
      _ProjBillElementEntry._WBSElement.WBSElementExternalID                              as WBSElement,
      _ProjBillElementEntry.ServicesRenderedDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _ProjBillElementEntry.OriginalAmountInTransacCrcy                                   as OpenAmountInTransCrcy,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      cast(WrittenOffQuantity as pbee_wrtnoffqty preserving type)                         as WrittenOffQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(WrittenOffAmtInTransacCrcy as pbee_wrtnofftranscrcy preserving type)           as WrittenOffAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      cast(WrittenOffRevenueAmtInDocCrcy as pbee_writtenoffrevnindoccrcy preserving type) as WrittenOffRevenueAmtInDocCrcy,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                    element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      DocumentCurrency,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_UnitOfMeasure',
                      element: 'UnitOfMeasure' }
         }]
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      QuantityUnit,
   

      _ProjectBillingRequestTP,
      // 2308 - Adding association to Enterprise Project for DCL changes for PBR Authorization Concept
      WrittenOffPrjBlgElmEntrDets._EnterpriseProject,
      _Ledger,
      @Consumption.hidden: true
      _LedgerText,
      _CompanyCode,
     _Material,
      @Consumption.hidden: true
      _MaterialText,
      _TransactionCurrency,
      @Consumption.hidden: true
     _TransactionCurrencyText,
      _DocumentCurrency,
      @Consumption.hidden: true
      _DocumentCurrencyText,
      _QuantityUnit,
      @Consumption.hidden: true
      _QuantityUnitText,
      _AccountingDocument,
      _FiscalYear

}
```
