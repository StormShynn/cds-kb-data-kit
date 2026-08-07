---
name: I_BUSPARTCATEGORY
description: Business PartnerCATEGORY
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTCATEGORY

**Business PartnerCATEGORY**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerCategory` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPCATEGORY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Business Partner Category'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerCategory'
@ObjectModel.representativeKey: 'BusinessPartnerCategory'
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartCategory 
  as select from dd07l
  association [0..*] to I_BusPartCategoryText as _Text on $projection.BusinessPartnerCategory = _Text.BusinessPartnerCategory
{
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Category'
      @Consumption.filter.hidden: true
      //   key dd07l.domvalue_l,
      key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_type ) as BusinessPartnerCategory,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Consumption.hidden: true
      domvalue_l as DomainValue,
      
      _Text

}
where
  domname = 'BU_TYPE'
```
