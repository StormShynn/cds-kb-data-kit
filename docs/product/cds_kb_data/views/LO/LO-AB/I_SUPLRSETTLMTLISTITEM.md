---
name: I_SUPLRSETTLMTLISTITEM
description: "Supplier Settlement List Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTITEM')/$value
semantic_en: "Supplier Settlement List Item"
semantic_vi: "Supplier Settlement List Item — CDS view cơ bản dựa trên R_SuplrSettlmtListItem."
keywords:
  - "Supplier Settlement List Item"
  - "supplier"
  - "settlement"
  - "list"
  - "item"
  - "suplr"
  - "settlmt"
  - "currency"
  - "amount"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRSETTLMTLISTITEM

**Supplier Settlement List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmtList` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement List |
| `SuplrSettlmtListItem` | ✓ | |  |  | `NUMC(6)` | Item in List |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
| `SuplrSettlmtListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `SettlmtDocListItemNetAmount` |  | |  | `SuplrSettlmtListItemNetAmount` | `CURR(15)` | Net Amount of a List Item |
| `SettlmtDocListItemTaxAmount` |  | |  | `SuplrSettlmtListItemTaxAmount` | `CURR(13)` | Tax Amount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non-Deductible Input Tax for Item |
| `SettlmtRemunerationNetAmt` |  | |  |  | `CURR(13)` | Value of the Settlement Document List Conditions |
| `SettlmtRemunerationTaxAmt` |  | |  |  | `CURR(13)` | Tax of Settlement Document List Conditions |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SuplrSettlmtListItmIsCancld` |  | |  | `SuplrSettlmtListItemIsReversed` | `CHAR(1)` | List Item is Reversed |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Indicator that Pricing Determination for Item is Incomplete |
| `_SuplrSettlmtList` | | ✓ | | | | |
| `_RefSettlmtDoc` | | ✓ | | | | |
| `_SuplrSettlmtListCurrency` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrSettlmtList` | `I_SuplrSettlmtList` | [1..1] |
| `_RefSettlmtDoc` | `I_SettlmtDoc` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDocListItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTITEM')/$value)*

```abap
@EndUserText.label: 'Supplier Settlement List Item'
@AccessControl: {
    authorizationCheck:    #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    representativeKey:        'SuplrSettlmtListItem',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities :   [ #CDS_MODELING_ASSOCIATION_TARGET,
                                #SQL_DATA_SOURCE,
                                #CDS_MODELING_DATA_SOURCE,
                                #ANALYTICAL_DIMENSION],
    usageType.serviceQuality: #A,
    usageType.dataClass:      #TRANSACTIONAL,
    usageType.sizeCategory:   #XL
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'IWLFSUPLRSTLSTIT'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SuplrSettlmtListItem
  as select from R_SuplrSettlmtListItem

  association [1..1] to I_SuplrSettlmtList       as _SuplrSettlmtList on  $projection.SuplrSettlmtList = _SuplrSettlmtList.SuplrSettlmtList
  association [0..1] to I_SettlmtDoc             as _RefSettlmtDoc    on  $projection.RefSettlmtDoc = _RefSettlmtDoc.SettlmtDoc

  //Extension Association
  association [1..1] to E_SettlmtMgmtDocListItem as _Extension        on  $projection.SuplrSettlmtList     = _Extension.SettlmtMgmtDoc
                                                                      and $projection.SuplrSettlmtListItem = _Extension.SettlmtMgmtDocListItem

{
      @ObjectModel.foreignKey.association: '_SuplrSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtListStdVH', element: 'SuplrSettlmtList' } }]
      }
  key SuplrSettlmtList,
  key SuplrSettlmtListItem,
      @ObjectModel.foreignKey.association: '_RefSettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocStdVH', element: 'SettlmtDoc' } }]
      }
      RefSettlmtDoc,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtListCurrency'
      SuplrSettlmtListCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtListCurrency'
      SuplrSettlmtListItemNetAmount  as SettlmtDocListItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtListCurrency'
      SuplrSettlmtListItemTaxAmount  as SettlmtDocListItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtListCurrency'
      NonDeductibleInputTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtListCurrency'
      SettlmtRemunerationNetAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtListCurrency'
      SettlmtRemunerationTaxAmt,

      @ObjectModel.foreignKey.association: '_InvoicingParty'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      InvoicingParty,
      @ObjectModel.foreignKey.association: '_PayeeParty'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      PayeeParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' } }]
      }
      BillToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' } }]
      }
      PayerParty,

      @ObjectModel.foreignKey.association: '_SettlmtDocCat'
      SettlmtDocCat,
      SuplrSettlmtListItemIsReversed as SuplrSettlmtListItmIsCancld,
      PrcDetnIsIncmplt,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrSettlmtList,
      _RefSettlmtDoc,
      _SuplrSettlmtListCurrency,
      _InvoicingParty,
      _PayeeParty,
      _BillToParty,
      _PayerParty,
      _SettlmtDocCat

}
```
