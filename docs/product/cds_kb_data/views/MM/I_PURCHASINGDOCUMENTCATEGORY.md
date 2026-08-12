---
name: I_PURCHASINGDOCUMENTCATEGORY
description: "Purchasingdocumentcategory"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - document
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURCHASINGDOCUMENTCATEGORY

**Purchasingdocumentcategory**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentCategory` | ✓ | |  | `cast (cast(substring(dd07l.domvalue_l ,1,1) as abap.char( 1 ) ) as ebstyp )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.representativeKey: 'PurchasingDocumentCategory' 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name:'PurchasingDocumentCategory'
@EndUserText.label: 'Purchasing Document Category' //same as DDL description
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IMMPURDOCCAT'
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define root view I_PurchasingDocumentCategory
  as select from dd07l

  composition [0..*] of I_PurgDocumentCategoryText as _Text 
{
  
      @ObjectModel.text.association: '_Text'
  key cast (cast(substring(dd07l.domvalue_l ,1,1) as abap.char( 1 ) ) as ebstyp ) as PurchasingDocumentCategory,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                        as DomainValue,

      _Text
}
where
      domname  = 'EBSTYP'
  and as4local = 'A'
  and dd07l.as4vers = '0000'
```
