---
name: I_BUSPARTCATEGORYTEXT
description: Business PartnerCATEGORYTEXT
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
  - text-view
  - business-partner
  - text
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTCATEGORYTEXT

**Business PartnerCATEGORYTEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartnerCategory` | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_type )` |
| key `Language` | `ddlanguage` |
| `BusinessPartnerCategoryText` | `ddtext` |
| `DomainValue` | `domvalue_l` |
| `_CategoryValueHelp` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CategoryValueHelp` | `I_BusPartCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPCATEGORYTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerCategory',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #L,
  usageType.dataClass: #META,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
}
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Business Partner Category - Text'
@Search.searchable: true
define view I_BusPartCategoryText 
  as select from dd07t
  association [0..1] to I_BusPartCategory as _CategoryValueHelp on $projection.BusinessPartnerCategory = _CategoryValueHelp.BusinessPartnerCategory
{
      @ObjectModel.foreignKey.association: '_CategoryValueHelp'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_type )    as BusinessPartnerCategory,
       @Semantics.language: true
  key ddlanguage    as Language,
      @Semantics.text: true
      @EndUserText.label: 'Business Partner Category Description'
      ddtext  as BusinessPartnerCategoryText,
      @Search.defaultSearchElement: true
      @Consumption.hidden: true
      domvalue_l as DomainValue,
      
      _CategoryValueHelp   
}
where
  domname = 'BU_TYPE'
```
