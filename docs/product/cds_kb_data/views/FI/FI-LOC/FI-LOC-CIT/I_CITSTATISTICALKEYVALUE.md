---
name: I_CITSTATISTICALKEYVALUE
description: "CIT Statistical Key Value"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSTATISTICALKEYVALUE')/$value
semantic_en: "CIT Statistical Key Value"
semantic_vi: "CIT Statistical Key Value — CDS view giao diện dựa trên ficitd_keyvalue."
keywords:
  - "cit"
  - "statistical"
  - "key"
  - "value"
  - "figure"
  - "item"
  - "validity"
  - "start"
  - "date"
  - "unit"
  - "measure"
tags:
  - FI
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
  - bo:companycode
---
# I_CITSTATISTICALKEYVALUE

**CIT Statistical Key Value**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSTATISTICALKEYVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITKeyFigureItemUUID` | ✓ | |  | `uuid` | `RAW(16)` | UUID for Corporate Income Tax Statistical Key Value |
| `CITKeyFigureUUID` |  | |  | `parent_uuid` | `RAW(16)` | UUID for Corporate Income Tax Statistical Key Figure |
| `ValidityStartDate` |  | |  | `validitystartdate` | `DATS(8)` | Validity Start Date of Statistical Key Figure for CIT |
| `ValidityEndDate` |  | |  | `validityenddate` | `DATS(8)` | Validity End Date of Statistical Key Figure for CIT |
| `UnitOfMeasure` |  | | `_Header` | `UnitOfMeasure` | `UNIT(3)` | Unit of Measurement of Statistical Key Figure for CIT |
| `CITStatisticalKeyQuantity` | ✓ | |  | `keyvaluequantity` | `QUAN(15)` | Value of Statistical Key Figure for CIT |
| `Currency` |  | | `_Header` | `Currency` | `CUKY(5)` | Currency of Statistical Key Figure for CIT |
| `CITStatKeyAmount` | ✓ | |  | `keyvalueamount` | `CURR(23)` | Value of Statistical Key Figure for CIT |
| `CompanyCode` |  | | `_Header` | `CompanyCode` | `CHAR(4)` | Company Code |
| `_Header` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Header` | `I_CITStatisticalKeyFigure` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSTATISTICALKEYVALUE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSTATISTICALKEYVALUE')/$value)*

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'CIT Statistical Key Value'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

define view entity I_CITStatisticalKeyValue 
  as select from ficitd_keyvalue
    association [1..1] to I_CITStatisticalKeyFigure as _Header on $projection.CITKeyFigureUUID = _Header.CITKeyFigureUUID
{
  key uuid              as CITKeyFigureItemUUID,
      parent_uuid       as CITKeyFigureUUID,
      validitystartdate as ValidityStartDate,
      validityenddate   as ValidityEndDate,
      
      _Header.UnitOfMeasure as UnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      keyvaluequantity  as CITStatisticalKeyQuantity,
      
      _Header.Currency  as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      keyvalueamount    as CITStatKeyAmount,
      
      _Header.CompanyCode as CompanyCode,
      
      _Header
}
```
