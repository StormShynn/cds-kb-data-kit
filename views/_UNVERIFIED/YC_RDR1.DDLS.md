---
name: YC_RDR1.DDLS
description: Consumption View For Order Item
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Sanji276/AbapRAP_ZSO/blob/3531f7a6a5274abc0f1cfc8020cc2b5040b54551/src/yc_rdr1.ddls.asddls
semantic_en: Consumption View For Order Item — CDS view.
semantic_vi: Consumption View For Order Item — CDS view dựa trên Consumption View For Order Item.
keywords:
  - consumption
  - for
  - order
  - item
  - docentry
  - itemcode
  - description
  - unit
tags:
  - CO
  - component:CO
  - lob:controlling
  - order
---
# YC_RDR1.DDLS

**Consumption View For Order Item**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Sanji276/AbapRAP_ZSO/blob/3531f7a6a5274abc0f1cfc8020cc2b5040b54551/src/yc_rdr1.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `Id` | `Id` |
| key `Docentry` | `Docentry` |
| `Itemcode` | `Itemcode` |
| `Description` | `Description` |
| `Unit` | `Unit` |
| `Quantity` | `Quantity` |
| `Currency` | `Currency` |
| `Price` | `Price` |
| `Linetotal` | `Linetotal` |
| `Whscode` | `Whscode` |
| `Whsname` | `Whsname` |
| `Taxcode` | `Taxcode` |
| `Taxamount` | `Taxamount` |
| `Freetext` | `Freetext` |
| `CreatedBy` | `CreatedBy` |
| `CreatedAt` | `CreatedAt` |
| `Lastchangedat` | `Lastchangedat` |
| `DocNum` | `_header.Docnum` |
| `CardName` | `_header.Cardname` |
| `_header` | *Association* |

## Source Code

*Source: [https://github.com/Sanji276/AbapRAP_ZSO/blob/3531f7a6a5274abc0f1cfc8020cc2b5040b54551/src/yc_rdr1.ddls.asddls](https://github.com/Sanji276/AbapRAP_ZSO/blob/3531f7a6a5274abc0f1cfc8020cc2b5040b54551/src/yc_rdr1.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Consumption View For Order Item'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
define view entity YC_RDR1
  as projection on YI_RDR1
{
  key Id,
  key Docentry,
      Itemcode,
      Description,
      Unit,
      @Semantics.quantity.unitOfMeasure: 'Unit'
      Quantity,
      Currency,
      @Semantics.amount.currencyCode: 'Currency'
      Price,
      @Semantics.amount.currencyCode: 'Currency'
      Linetotal,
      Whscode,
      Whsname,
      Taxcode,
      @Semantics.amount.currencyCode: 'Currency'
      Taxamount,
      Freetext,
      CreatedBy,
      CreatedAt,
      Lastchangedat,
      _header.Docnum as DocNum,
      _header.Cardname as CardName,
      /* Associations */
      _header : redirected to parent YC_ORDR
      
}
```