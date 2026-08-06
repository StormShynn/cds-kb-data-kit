---
name: I_SALESPRODUCTHIERARCHYPRPSTXT
description: Salesproducthierarchyprpstxt
app_component: SD-SLS-PH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-PH
  - interface-view
  - product
  - component:SD-SLS-PH-2CL
  - lob:Sales & Distribution
---
# I_SALESPRODUCTHIERARCHYPRPSTXT

**Salesproducthierarchyprpstxt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-PH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesProductHierarchyPurpose` | `substring(domvalue_l, 1, 2)` |
| key `Language` | `ddlanguage` |
| `SalesProductHierarchyPrpsDesc` | `ddtext` |
| `_SalesProductHierarchyPurpose` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesProductHierarchyPurpose` | `I_SalesProductHierarchyPurpose` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISDPHPT'
@ObjectModel.representativeKey: 'SalesProductHierarchyPurpose'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Product Hier Purpose in Sales - Text'
@Analytics: {  internalName: #LOCAL }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.compiler.compareFilter: true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY   ]

define view I_SalesProductHierarchyPrpsTxt
  as select from dd07t
  association [0..1] to I_SalesProductHierarchyPurpose as _SalesProductHierarchyPurpose on $projection.SalesProductHierarchyPurpose = _SalesProductHierarchyPurpose.SalesProductHierarchyPurpose
  association [0..1] to I_Language                     as _Language                     on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SalesProductHierarchyPurpose'
  key substring(domvalue_l, 1, 2)                             as SalesProductHierarchyPurpose,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                              as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      ddtext as SalesProductHierarchyPrpsDesc,

      //Associations
      _SalesProductHierarchyPurpose,
      _Language
}
where dd07t.domname  = 'SD_PRODH_PURPOSE' and dd07t.as4local = 'A';
```
