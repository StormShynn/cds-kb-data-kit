---
name: I_CUSTSETTLMTLISTITEM
description: "Customer Settlement List Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEM')/$value
semantic_en: "Customer Settlement List Item"
semantic_vi: "Customer Settlement List Item — CDS view cơ bản dựa trên R_CustSettlmtListItem."
keywords:
  - "Customer Settlement List Item"
  - "customer"
  - "settlement"
  - "list"
  - "item"
  - "cust"
  - "settlmt"
  - "currency"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTLISTITEM

**Customer Settlement List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` | ✓ | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
| `CustSettlmtListItem` | ✓ | |  |  | `NUMC(6)` | Item in List |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
| `CustSettlmtListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtDocListItemNetAmount` |  | |  | `CustSettlmtListItemNetAmount` | `CURR(15)` | Net Amount of a List Item |
| `SettlmtDocListItemTaxAmount` |  | |  | `CustSettlmtListItemTaxAmount` | `CURR(13)` | Tax Amount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non-Deductible Input Tax for Item |
| `SettlmtRemunerationNetAmt` |  | |  |  | `CURR(13)` | Value of the Settlement Document List Conditions |
| `SettlmtRemunerationTaxAmt` |  | |  |  | `CURR(13)` | Tax of Settlement Document List Conditions |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `CustSettlmtListItmIsCancld` |  | |  | `CustSettlmtListItemIsReversed` | `CHAR(1)` | List Item is Reversed |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Indicator that Pricing Determination for Item is Incomplete |
| `_CustSettlmtList` | | ✓ | | | | |
| `_RefSettlmtDoc` | | ✓ | | | | |
| `_CustSettlmtListCurrency` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustSettlmtList` | `I_CustSettlmtList` | [1..1] |
| `_RefSettlmtDoc` | `I_SettlmtDoc` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDocListItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEM')/$value)*

```abap
@EndUserText.label: 'Customer Settlement List Item'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    representativeKey: 'CustSettlmtListItem',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE ],
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
@Analytics.technicalName: 'IWLFCUSTSTLSTIT'
@Metadata: {
   ignorePropagatedAnnotations: true,
   allowExtensions: true
   }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CustSettlmtListItem
  as select from R_CustSettlmtListItem

  association [1..1] to I_CustSettlmtList        as _CustSettlmtList on  $projection.CustSettlmtList = _CustSettlmtList.CustSettlmtList
  association [0..1] to I_SettlmtDoc             as _RefSettlmtDoc   on  $projection.RefSettlmtDoc = _RefSettlmtDoc.SettlmtDoc

  //Extension Association
  association [1..1] to E_SettlmtMgmtDocListItem as _Extension       on  $projection.CustSettlmtList     = _Extension.SettlmtMgmtDoc
                                                                     and $projection.CustSettlmtListItem = _Extension.SettlmtMgmtDocListItem

{
      @ObjectModel.foreignKey.association: '_CustSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtListStdVH', element: 'CustSettlmtList' } }]
      }
  key CustSettlmtList,
  key CustSettlmtListItem,
      @ObjectModel.foreignKey.association: '_RefSettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocStdVH', element: 'SettlmtDoc' } }]
      }
      RefSettlmtDoc,
      @ObjectModel.foreignKey.association: '_CustSettlmtListCurrency'
      CustSettlmtListCurrency,
      @ObjectModel.foreignKey.association: '_SettlmtDocCat'
      SettlmtDocCat,

      /* Amount fields */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListItemNetAmount  as SettlmtDocListItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListItemTaxAmount  as SettlmtDocListItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      NonDeductibleInputTaxAmount,

      /* List related amounts*/
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      SettlmtRemunerationNetAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      SettlmtRemunerationTaxAmt,

      /* Partners */
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

      /* Reversal Information */
      CustSettlmtListItemIsReversed as CustSettlmtListItmIsCancld,

      PrcDetnIsIncmplt,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _CustSettlmtList,
      _RefSettlmtDoc,
      _CustSettlmtListCurrency,
      _SettlmtDocCat,
      _InvoicingParty,
      _PayeeParty,
      _BillToParty,
      _PayerParty

}
```
