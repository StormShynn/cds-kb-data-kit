---
name: I_SETTLMTDOCLISTITEM
description: "Settlement Document List Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEM')/$value
semantic_en: "Settlement Document List Item"
semantic_vi: "Settlement Document List Item — CDS view tổng hợp dựa trên R_SettlmtDocListItem."
keywords:
  - "Settlement Document List Item"
  - "settlement"
  - "document"
  - "list"
  - "item"
  - "settlmt"
  - "currency"
  - "company"
  - "code"
  - "amount"
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCLISTITEM

**Settlement Document List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocList` | ✓ | |  |  | `CHAR(10)` | Document Number of Settlement Document List |
| `SettlmtDocListItem` | ✓ | |  |  | `NUMC(6)` | Item in List |
| `SettlmtDocListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `CompanyCode` |  | | `_SettlmtDocList` | `CompanyCode` | `CHAR(4)` | Company Code |
| `SettlmtDocListItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of a List Item |
| `SettlmtDocListItemTaxAmount` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non-Deductible Input Tax for Item |
| `SettlmtRemunerationNetAmt` |  | |  |  | `CURR(13)` | Value of the Settlement Document List Conditions |
| `SettlmtRemunerationTaxAmt` |  | |  |  | `CURR(13)` | Tax of Settlement Document List Conditions |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtDocListCat` |  | |  |  | `CHAR(1)` | Category of List Document |
| `SettlmtDocListItemCat` |  | |  |  | `CHAR(1)` | Category of List Document Item |
| `RefSuplrBillgDoc` |  | |  |  | `CHAR(10)` | Reference Supplier Billing Document Number |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Ref Settlement Document |
| `RefCustSettlmtList` |  | |  |  | `CHAR(10)` | Reference Customer Settlement List |
| `RefSuplrSettlmtList` |  | |  |  | `CHAR(10)` | Reference Supplier Settlement List |
| `RefSettlmtDocList` |  | |  |  | `CHAR(10)` | Reference Settlement Document List |
| `RefCustSettlmt` |  | |  |  | `CHAR(10)` | Ref Customer Settlement |
| `RefExpnSettlmt` |  | |  |  | `CHAR(10)` | Reference Expense Settlement |
| `RefSuplrSettlmt` |  | |  |  | `CHAR(10)` | Reference Supplier Settlement |
| `SettlmtExtBillgDoc` |  | |  |  | `CHAR(10)` | External Billing Document in Settlement Management |
| `SettlmtExtAcctgDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of External Accounting Doc in Settlmt Mgmt |
| `SettlmtExtAcctgDoc` |  | |  |  | `CHAR(10)` | External Accounting Document in Settlement Management |
| `SettlmtExtAcctgDocFiscalYear` |  | |  |  | `NUMC(4)` | Year of External Accounting Document |
| `SettlmtExtAcctgDocItem` |  | |  |  | `NUMC(3)` | External Accounting Document Item in Settlement Management |
| `SettlmtDocListItemIsCancelled` |  | |  | `SettlmtDocListItemIsReversed` | `CHAR(1)` | List Item is Reversed |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Indicator that Pricing Determination for Item is Incomplete |
| `_SettlmtDocList` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_RefSuplrBillgDoc` | | ✓ | | | | |
| `_RefSettlmtDoc` | | ✓ | | | | |
| `_RefCustSettlmtList` | | ✓ | | | | |
| `_RefSuplrSettlmtList` | | ✓ | | | | |
| `_RefSettlmtDocList` | | ✓ | | | | |
| `_RefExpnSettlmt` | | ✓ | | | | |
| `_RefSuplrSettlmt` | | ✓ | | | | |
| `_RefCustSettlmt` | | ✓ | | | | |
| `_InvoicingPartyCompany` | | ✓ | | | | |
| `_PayeePartyCompany` | | ✓ | | | | |
| `_BillToPartyCompany` | | ✓ | | | | |
| `_PayerPartyCompany` | | ✓ | | | | |
| `_SettlmtDocListCurrency` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |
| `_SettlmtDocListCat` | | ✓ | | | | |
| `_SettlmtDocListItemCat` | | ✓ | | | | |
| `_SettlmtExtBillgDoc` | | ✓ | | | | |
| `_SettlmtExtOplAcctgDocItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDocList` | `I_SettlmtDocList` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_RefSuplrBillgDoc` | `I_SuplrBillgDoc` | [0..1] |
| `_RefSettlmtDoc` | `I_SettlmtDoc` | [0..1] |
| `_RefCustSettlmtList` | `I_CustSettlmtList` | [0..1] |
| `_RefSuplrSettlmtList` | `I_SuplrSettlmtList` | [0..1] |
| `_RefSettlmtDocList` | `I_SettlmtDocList` | [0..1] |
| `_RefExpnSettlmt` | `I_ExpnSettlmt` | [0..1] |
| `_RefSuplrSettlmt` | `I_SuplrSettlmt` | [0..1] |
| `_RefCustSettlmt` | `I_CustSettlmt` | [0..1] |
| `_InvoicingPartyCompany` | `I_SupplierCompany` | [0..1] |
| `_PayeePartyCompany` | `I_SupplierCompany` | [0..1] |
| `_BillToPartyCompany` | `I_CustomerCompany` | [0..1] |
| `_PayerPartyCompany` | `I_CustomerCompany` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDocListItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEM')/$value)*

```abap
@EndUserText.label: 'Settlement Document List Item'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    representativeKey:        'SettlmtDocListItem',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities :   [ #CDS_MODELING_ASSOCIATION_TARGET,
                                #SQL_DATA_SOURCE,
                                #CDS_MODELING_DATA_SOURCE,
                                #ANALYTICAL_DIMENSION ],
    usageType.serviceQuality: #B,
    usageType.dataClass:      #TRANSACTIONAL,
    usageType.sizeCategory:   #XL
    }
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'IWLFSMTDOCLSTITM'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

define view entity I_SettlmtDocListItem
  as select from R_SettlmtDocListItem

  association [1..1] to I_SettlmtDocList         as _SettlmtDocList        on  $projection.SettlmtDocList = _SettlmtDocList.SettlmtDocList
  association [0..1] to I_CompanyCode            as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode

  /* Reference Documents */
  association [0..1] to I_SuplrBillgDoc          as _RefSuplrBillgDoc      on  $projection.RefSuplrBillgDoc = _RefSuplrBillgDoc.SuplrBillgDoc
  association [0..1] to I_SettlmtDoc             as _RefSettlmtDoc         on  $projection.RefSettlmtDoc = _RefSettlmtDoc.SettlmtDoc
  association [0..1] to I_CustSettlmtList        as _RefCustSettlmtList    on  $projection.RefCustSettlmtList = _RefCustSettlmtList.CustSettlmtList
  association [0..1] to I_SuplrSettlmtList       as _RefSuplrSettlmtList   on  $projection.RefSuplrSettlmtList = _RefSuplrSettlmtList.SuplrSettlmtList
  association [0..1] to I_SettlmtDocList         as _RefSettlmtDocList     on  $projection.RefSettlmtDocList = _RefSettlmtDocList.SettlmtDocList
  association [0..1] to I_ExpnSettlmt            as _RefExpnSettlmt        on  $projection.RefExpnSettlmt = _RefExpnSettlmt.ExpnSettlmt
  association [0..1] to I_SuplrSettlmt           as _RefSuplrSettlmt       on  $projection.RefSuplrSettlmt = _RefSuplrSettlmt.SuplrSettlmt
  association [0..1] to I_CustSettlmt            as _RefCustSettlmt        on  $projection.RefCustSettlmt = _RefCustSettlmt.CustSettlmt

  association [0..1] to I_SupplierCompany        as _InvoicingPartyCompany on  $projection.InvoicingParty = _InvoicingPartyCompany.Supplier
                                                                           and $projection.CompanyCode    = _InvoicingPartyCompany.CompanyCode
  association [0..1] to I_SupplierCompany        as _PayeePartyCompany     on  $projection.PayeeParty  = _PayeePartyCompany.Supplier
                                                                           and $projection.CompanyCode = _PayeePartyCompany.CompanyCode
  association [0..1] to I_CustomerCompany        as _BillToPartyCompany    on  $projection.BillToParty = _BillToPartyCompany.Customer
                                                                           and $projection.CompanyCode = _BillToPartyCompany.CompanyCode
  association [0..1] to I_CustomerCompany        as _PayerPartyCompany     on  $projection.PayerParty  = _PayerPartyCompany.Customer
                                                                           and $projection.CompanyCode = _PayerPartyCompany.CompanyCode

  //Extension Association
  association [1..1] to E_SettlmtMgmtDocListItem as _Extension             on  $projection.SettlmtDocList     = _Extension.SettlmtMgmtDoc
                                                                           and $projection.SettlmtDocListItem = _Extension.SettlmtMgmtDocListItem

{

      @ObjectModel.foreignKey.association: '_SettlmtDocList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocListStdVH', element: 'SettlmtDocList' } }]
      }
  key SettlmtDocList,
  key SettlmtDocListItem,
      @ObjectModel.foreignKey.association: '_SettlmtDocListCurrency'
      SettlmtDocListCurrency,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      _SettlmtDocList.CompanyCode  as CompanyCode,

      /* Amount Fields */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      NonDeductibleInputTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtRemunerationNetAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
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

      @ObjectModel.foreignKey.association: '_SettlmtDocCat'
      SettlmtDocCat,
      @ObjectModel.foreignKey.association: '_SettlmtDocListCat'
      SettlmtDocListCat,
      @ObjectModel.foreignKey.association: '_SettlmtDocListItemCat'
      SettlmtDocListItemCat,

      /* Reference Documents */
      @ObjectModel.foreignKey.association: '_RefSuplrBillgDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocStdVH', element: 'SuplrBillgDoc' } }]
      }
      RefSuplrBillgDoc,
      @ObjectModel.foreignKey.association: '_RefSettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocStdVH', element: 'SettlmtDoc' } }]
      }
      RefSettlmtDoc,
      @ObjectModel.foreignKey.association: '_RefCustSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtListStdVH', element: 'CustSettlmtList' } }]
      }
      RefCustSettlmtList,
      @ObjectModel.foreignKey.association: '_RefSuplrSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtListStdVH', element: 'SuplrSettlmtList' } }]
      }
      RefSuplrSettlmtList,
      @ObjectModel.foreignKey.association: '_RefSettlmtDocList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocListStdVH', element: 'SettlmtDocList' } }]
      }
      RefSettlmtDocList,
      @ObjectModel.foreignKey.association: '_RefCustSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtStdVH', element: 'CustSettlmt' } }]
      }
      RefCustSettlmt,
      @ObjectModel.foreignKey.association: '_RefExpnSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ExpnSettlmtStdVH', element: 'ExpnSettlmt' } }]
      }
      RefExpnSettlmt,
      @ObjectModel.foreignKey.association: '_RefSuplrSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtStdVH', element: 'SuplrSettlmt' } }]
      }
      RefSuplrSettlmt,

      @ObjectModel.foreignKey.association: '_SettlmtExtBillgDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BillingDocumentStdVH', element: 'BillingDocument' } }]
      }
      SettlmtExtBillgDoc,
      SettlmtExtAcctgDocCompanyCode,
      SettlmtExtAcctgDoc,
      SettlmtExtAcctgDocFiscalYear,
      SettlmtExtAcctgDocItem,

      SettlmtDocListItemIsReversed as SettlmtDocListItemIsCancelled,
      PrcDetnIsIncmplt,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SettlmtDocList,
      _SettlmtDocListCurrency,
      _CompanyCode,
      _InvoicingParty,
      _PayeeParty,
      _BillToParty,
      _PayerParty,
      _InvoicingPartyCompany,
      _PayeePartyCompany,
      _BillToPartyCompany,
      _PayerPartyCompany,
      _SettlmtDocCat,
      _SettlmtDocListCat,
      _SettlmtDocListItemCat,
      _RefSuplrBillgDoc,
      _RefSettlmtDoc,
      _RefCustSettlmtList,
      _RefSuplrSettlmtList,
      _RefSettlmtDocList,
      _RefCustSettlmt,
      _RefExpnSettlmt,
      _RefSuplrSettlmt,
      _SettlmtExtBillgDoc,
      _SettlmtExtOplAcctgDocItem

}
```
