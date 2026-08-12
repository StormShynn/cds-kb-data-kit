---
name: I_LISTEDDERIVATIVECATEGORY
description: "Listed Derivative Category"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVECATEGORY')/$value
semantic_en: "Listed Derivative Category"
semantic_vi: "Listed Derivative Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "listed"
  - "derivative"
  - "category"
tags:
  - FIN
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_LISTEDDERIVATIVECATEGORY

**Listed Derivative Category**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVECATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ListedDerivativeCategory` | ✓ | |  | `cast (domvalue_l as ti_softyp)` | `NUMC(2)` | Options/futures category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ListedDerivativeCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVECATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVECATEGORY')/$value)*

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.preserveKey: true 
@AbapCatalog.sqlViewName: 'ILSTDDERIVCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Listed Derivative Category'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ListedDerivativeCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true  
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC


/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ListedDerivativeCategory
  as select from dd07l

  association [0..*] to I_ListedDerivativeCategoryText as _Text on $projection.ListedDerivativeCategory = _Text.ListedDerivativeCategory

{

      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as ti_softyp) as ListedDerivativeCategory,
      _Text

}

where
      dd07l.domname  = 'T_SOFTYP'
  and dd07l.as4local = 'A'
```
