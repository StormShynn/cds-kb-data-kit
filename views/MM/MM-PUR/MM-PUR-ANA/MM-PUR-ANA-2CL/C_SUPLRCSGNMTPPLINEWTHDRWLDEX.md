---
name: C_SUPLRCSGNMTPPLINEWTHDRWLDEX
description: Suplrcsgnmtpplinewthdrwldex
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
  - header-level
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SUPLRCSGNMTPPLINEWTHDRWLDEX

**Suplrcsgnmtpplinewthdrwldex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaterialDocument` | `MaterialDocument` |
| key `MaterialDocumentYear` | `MaterialDocumentYear` |
| key `MaterialDocumentItem` | `MaterialDocumentItem` |
| `SuplrCsgnmtPplineWthdrwlStatus` | `SuplrCsgnmtPplineWthdrwlStatus` |
| `DocumentDate` | `DocumentDate` |
| `PostingDate` | `PostingDate` |
| `CompanyCode` | `CompanyCode` |
| `IssgOrRcvgStkIdfgSpclStkType` | `IssgOrRcvgStkIdfgSpclStkType` |
| `ConsignmentPipelineSupplier` | `ConsignmentPipelineSupplier` |
| `Plant` | `Plant` |
| `Material` | `Material` |
| `DebitCreditCode` | `DebitCreditCode` |
| `BusinessArea` | `BusinessArea` |
| `DocumentCurrency` | `DocumentCurrency` |
| `SuplrCsgnmtPplineWthdrwlAmount` | `} SuplrCsgnmtPplineWthdrwlAmount` |
| `SupCsgnmtPplineWthdrwlQtyUnit` | `SupCsgnmtPplineWthdrwlQtyUnit` |
| `SuplrCsgnmtPplineWthdrwlQty` | `} SuplrCsgnmtPplineWthdrwlQty` |
| `GLAccount` | `GLAccount` |
| `TaxCode` | `TaxCode` |
| `NonDeductibleInputTaxAmount` | `} NonDeductibleInputTaxAmount` |
| `ProfitCenter` | `ProfitCenter` |
| `TaxCountry` | `TaxCountry` |
| `_SupCsgnmtPplineInvcHistDEX` | *Association* |
| `_CompanyCode` | *Association* |
| `_InventorySpecialStockType` | *Association* |
| `_ConsignmentPipelineSupplier` | *Association* |
| `_Plant` | *Association* |
| `_Product` | *Association* |
| `_DebitCreditCode` | *Association* |
| `_BusinessArea` | *Association* |
| `_DocumentCurrency` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_GLAccount` | *Association* |
| `_TaxCountry` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupCsgnmtPplineInvcHistDEX` | `C_SupCsgnmtPplineInvcHistDEX` | [1..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_ConsignmentPipelineSupplier` | `I_Supplier` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_TaxCountry` | `I_Country` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName                : 'CSUPCSGPPLWDRDEX'
@AbapCatalog.compiler.compareFilter     : true
@AccessControl:{ authorizationCheck     : #MANDATORY,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern         : #ANALYTICAL_FACT
              }

@VDM.viewType                           : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations   : true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'rkwa', role: #MAIN,
                        viewElement     : ['MaterialDocument','MaterialDocumentYear','MaterialDocumentItem'],
                        tableElement    : ['mblnr','mjahr','zeile']
                      }
                    ]
        }
    }
}
@EndUserText.label: 'Consignment and Pipeline Withdrawal of Supplier'
@ObjectModel.sapObjectNodeType.name: 'SuplrCsgnmtPplineSettlement'
define view C_SuplrCsgnmtPplineWthdrwlDEX 
 as select from I_SupCsgnmtPplineWthdrwlAPI01

  association [1..*] to C_SupCsgnmtPplineInvcHistDEX as _SupCsgnmtPplineInvcHistDEX  on  $projection.MaterialDocument     = _SupCsgnmtPplineInvcHistDEX.MaterialDocument
                                                                                     and $projection.MaterialDocumentYear = _SupCsgnmtPplineInvcHistDEX.MaterialDocumentYear
                                                                                     and $projection.MaterialDocumentItem = _SupCsgnmtPplineInvcHistDEX.MaterialDocumentItem

  association [0..1] to I_CompanyCode                as _CompanyCode                 on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_InventorySpecialStockType  as _InventorySpecialStockType   on $projection.IssgOrRcvgStkIdfgSpclStkType = _InventorySpecialStockType.InventorySpecialStockType

  association [0..1] to I_Supplier                   as _ConsignmentPipelineSupplier on $projection.ConsignmentPipelineSupplier = _ConsignmentPipelineSupplier.Supplier

  association [1..1] to I_Plant                      as _Plant                       on $projection.Plant = _Plant.Plant
  
  association [0..1] to I_Product                    as _Product                     on $projection.Material = _Product.Product
  
  association [0..1] to I_DebitCreditCode            as _DebitCreditCode             on $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode

  association [0..1] to I_BusinessArea               as _BusinessArea                on $projection.BusinessArea = _BusinessArea.BusinessArea

  association [1..1] to I_Currency                   as _DocumentCurrency            on $projection.DocumentCurrency = _DocumentCurrency.Currency

  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure               on $projection.SupCsgnmtPplineWthdrwlQtyUnit = _UnitOfMeasure.UnitOfMeasure
  
  association [0..1] to I_GLAccount                  as _GLAccount                   on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                                     and $projection.CompanyCode = _GLAccount.CompanyCode

  association [0..1] to I_Country                    as _TaxCountry                  on $projection.TaxCountry = _TaxCountry.Country
{
  key MaterialDocument,

      @Semantics.calendar.year: true
  key MaterialDocumentYear,

  key MaterialDocumentItem,
      SuplrCsgnmtPplineWthdrwlStatus,

      @Semantics.businessDate.at: true
      DocumentDate,

      @Semantics.businessDate.at: true
      PostingDate,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,

      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      IssgOrRcvgStkIdfgSpclStkType,

      @ObjectModel.foreignKey.association: '_ConsignmentPipelineSupplier'
      ConsignmentPipelineSupplier,

      @ObjectModel.foreignKey.association: '_Plant'
      Plant,

      @ObjectModel.foreignKey.association: '_Product'
      Material,

      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,

      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      @Semantics.currencyCode: true
      DocumentCurrency,

      @Semantics               : { amount : {currencyCode: 'DocumentCurrency'} }
      SuplrCsgnmtPplineWthdrwlAmount,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      SupCsgnmtPplineWthdrwlQtyUnit,

      @Semantics               : { quantity : {unitOfMeasure: 'SupCsgnmtPplineWthdrwlQtyUnit'} }
      SuplrCsgnmtPplineWthdrwlQty,

      @ObjectModel.foreignKey.association: '_GLAccount'
      GLAccount,

      TaxCode,

      @Semantics               : { amount : {currencyCode: 'DocumentCurrency'} }
      NonDeductibleInputTaxAmount,

      ProfitCenter,

      @ObjectModel.foreignKey.association: '_TaxCountry'
      TaxCountry,

      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _SupCsgnmtPplineInvcHistDEX,

      _CompanyCode,
      _InventorySpecialStockType,
      _ConsignmentPipelineSupplier,
      _Plant,
      _Product,
      _DebitCreditCode,
      _BusinessArea,
      _DocumentCurrency,
      _UnitOfMeasure,
      _GLAccount,
      _TaxCountry
}
```
