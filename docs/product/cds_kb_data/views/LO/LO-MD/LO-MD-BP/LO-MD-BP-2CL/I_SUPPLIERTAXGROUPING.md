---
name: I_SUPPLIERTAXGROUPING
description: "Supplier Tax Grouping"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERTAXGROUPING')/$value
semantic_en: "Supplier Tax Grouping"
semantic_vi: "Supplier Tax Grouping — CDS view giao diện dựa trên lfat."
keywords:
  - "supplier"
  - "tax"
  - "grouping"
  - "code"
  - "collection"
  - "auth"
  - "start"
  - "date"
tags:
  - LO
  - component:LO-MD-BP-2CL
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-2CL
  - lob:logistics general
  - supplier
---
# I_SUPPLIERTAXGROUPING

**Supplier Tax Grouping**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERTAXGROUPING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  | `lifnr` | `CHAR(10)` | Account Number of Supplier |
| `TaxGroupingCode` | ✓ | |  | `taxgr` | `CHAR(3)` | Category Indicator for Tax Codes |
| `CollectionAuthStartDate` |  | |  | `agtdf` | `DATS(8)` | Starting Date of Collection Authorization |
| `CollectionAuthEndDate` |  | |  | `aftdt` | `DATS(8)` | End Date for Collection Authorization |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERTAXGROUPING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERTAXGROUPING')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISUPLRTAXGRP'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Supplier Tax Grouping'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@Analytics.internalName:#LOCAL 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'TaxGroupingCode'
@ObjectModel.sapObjectNodeType.name: 'SupplierTaxGrouping'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE,
                                      #ANALYTICAL_DIMENSION ] 
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@Metadata.ignorePropagatedAnnotations: true                                     
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck: #CHECK
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_SupplierTaxGrouping
  as select from lfat
  
  association [1..1] to I_Supplier        as _Supplier        on $projection.Supplier = _Supplier.Supplier

{
  @ObjectModel.foreignKey.association: '_Supplier'
  key lifnr                     as Supplier,
  key taxgr                     as TaxGroupingCode,

      agtdf                     as CollectionAuthStartDate,
      aftdt                     as CollectionAuthEndDate,
  
    
      _Supplier

}
```
