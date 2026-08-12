---
name: I_LISTEDDERIVATIVEQUOTATION
description: "Listed Derivative Quotation"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVEQUOTATION')/$value
semantic_en: "Listed Derivative Quotation"
semantic_vi: "Listed Derivative Quotation — CDS view giao diện dựa trên dd07l."
keywords:
  - "listed"
  - "derivative"
  - "quotation"
tags:
  - FIN
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - quotation
---
# I_LISTEDDERIVATIVEQUOTATION

**Listed Derivative Quotation**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVEQUOTATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ListedDerivativeQuotation` | ✓ | |  | `cast(domvalue_l as ti_nottype)` | `CHAR(1)` | Quotation type option/future |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ListedDerivativeQtanText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVEQUOTATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVEQUOTATION')/$value)*

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'ILSTDDERIVQTAN'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled : true
@Analytics.internalName: #LOCAL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Listed Derivative Quotation'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ListedDerivativeQuotation'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ListedDerivativeQuotation as select from dd07l
association [0..*] to I_ListedDerivativeQtanText as _Text 
    on $projection.ListedDerivativeQuotation = _Text.ListedDerivativeQuotation
  {
    
      @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as ti_nottype) as ListedDerivativeQuotation,
     _Text
}

where
      dd07l.domname  = 'T_NOTTYPE'
  and dd07l.as4local = 'A'
```
