---
name: I_CABILLGDOCTAX
description: "This CDS view retrieves the tax items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Is tax included in the billing document? How was the tax determined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCTAX')/$value
semantic_en: "This CDS view retrieves the tax items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Is tax included in the billing document? How was the tax determined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Steuerpositionen des Abrechnungsbelegs — CDS view giao diện (transactional data) dựa trên dfkkinvbill_t."
keywords:
  - "steuerpositionen"
  - "des"
  - "abrechnungsbelegs"
  - "billg"
  - "document"
  - "item"
  - "group"
  - "amount"
  - "currency"
tags:
  - FI
  - billing
  - bo:billingdocument
  - component:FI-CA-INV-2CL
  - document
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - bo:purchaseorder
---
# I_CABILLGDOCTAX

**This CDS view retrieves the tax items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Is tax included in the billing document? How was the tax determined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCTAX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocument` | ✓ | |  | `billdocno` | `CHAR(12)` | Number of Billing Document |
| `CABillgDocTaxItem` | ✓ | |  | `billdoctaxitem` | `NUMC(8)` | Sequential Number of Tax Item |
| `CABillgTaxGroup` |  | |  | `tax_group` | `CHAR(8)` | Grouping of Tax Items |
| `CATaxAmount` |  | |  | `tax_amount` | `CURR(13)` | Tax Amount |
| `CABillgCurrency` |  | |  | `bill_curr` | `CUKY(5)` | Currency of Billing Document |
| `CATaxBaseAmount` |  | |  | `tax_base` | `CURR(13)` | Tax Base Amount |
| `CATaxDate` |  | |  | `tax_date` | `DATS(8)` | Tax Date |
| `CABillgTaxItemExternalSystem` |  | |  | `cast(reftaxitem as reftaxitem_gfn_kk preserving type)` | `CHAR(10)` | Tax Item Number in External System |
| `CABillgDocItemIsReversal` |  | |  | `reversalitem` | `CHAR(1)` | Reversal Item |
| `CATaxRateInPercent` |  | |  | `tax_perc` | `DEC(6)` | Tax Percentage |
| `CATransactionKeyAccountDetn` |  | |  | `ktosl` | `CHAR(3)` | Transaction Key for Account Determination |
| `CAConditionType` |  | |  | `kschl` | `CHAR(4)` | Condition Type |
| `CABillgGroupingSourceItems` |  | |  | `src_group` | `CHAR(8)` | Grouping of Source Items |
| `_CABillgDocHeader` | | ✓ | | | | |
| `_CABillgCurrency` | | ✓ | | | | |
| `_CATransactionKeyAcctDetn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocHeader` | `I_CABillgDocHeader` | [0..1] |
| `_CABillgCurrency` | `I_Currency` | [0..1] |
| `_CATransactionKeyAcctDetn` | `I_CATransactionKeyAcctDetn` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCTAX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCTAX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvbill_t',
          role: #MAIN,
          viewElement: ['CABillgDocument', 'CABillgDocTaxItem'],
          tableElement: ['billdocno', 'billdoctaxitem']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgDocTaxItem',
  sapObjectNodeType.name: 'ContrAcctgBillgDocTaxItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Steuerpositionen des Abrechnungsbelegs'
define view entity I_CABillgDocTax
  as select from dfkkinvbill_t as invbill_t
  association [0..1] to I_CABillgDocHeader         as _CABillgDocHeader         on $projection.CABillgDocument = _CABillgDocHeader.CABillgDocument

  association [0..1] to I_Currency                 as _CABillgCurrency          on $projection.CABillgCurrency = _CABillgCurrency.Currency

  association [0..1] to I_CATransactionKeyAcctDetn as _CATransactionKeyAcctDetn on $projection.CATransactionKeyAccountDetn = _CATransactionKeyAcctDetn.CATransactionKeyAccountDetn
{
      @ObjectModel.foreignKey.association: '_CABillgDocHeader'
  key billdocno                                             as CABillgDocument,
  key billdoctaxitem                                        as CABillgDocTaxItem,
      tax_group                                             as CABillgTaxGroup,
      @Semantics.amount.currencyCode: 'CABillgCurrency'
      tax_amount                                            as CATaxAmount,
      @ObjectModel.foreignKey.association: '_CABillgCurrency'
      bill_curr                                             as CABillgCurrency,
      @Semantics.amount.currencyCode: 'CABillgCurrency'
      tax_base                                              as CATaxBaseAmount,
      tax_date                                              as CATaxDate,
      cast(reftaxitem as reftaxitem_gfn_kk preserving type) as CABillgTaxItemExternalSystem,
      reversalitem                                          as CABillgDocItemIsReversal,
      tax_perc                                              as CATaxRateInPercent,
      @ObjectModel.foreignKey.association: '_CATransactionKeyAcctDetn'
      ktosl                                                 as CATransactionKeyAccountDetn,
      kschl                                                 as CAConditionType,
      src_group                                             as CABillgGroupingSourceItems,

      _CABillgDocHeader,
      _CABillgCurrency,
      _CATransactionKeyAcctDetn
}
```
