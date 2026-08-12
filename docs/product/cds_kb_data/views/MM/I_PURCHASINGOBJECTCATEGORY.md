---
name: I_PURCHASINGOBJECTCATEGORY
description: "Purchasingobjectcategory"
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
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURCHASINGOBJECTCATEGORY

**Purchasingobjectcategory**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentCategory` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as ebstyp )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PurchasingObjectCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPUROBJCAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL         
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Purchasing Object Category'
@ObjectModel.sapObjectNodeType.name:'PurchasingDocumentCategory'
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.compositionRoot: true 
@ObjectModel.dataCategory: #VALUE_HELP  
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION   
@ObjectModel.representativeKey: 'PurchasingDocumentCategory'
@ObjectModel.resultSet.sizeCategory: #XS  
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]  
@ObjectModel.usageType.dataClass: #META  
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API  
@VDM.viewType: #BASIC
define view I_PurchasingObjectCategory
  as select from dd07l
  association [0..*] to I_PurchasingObjectCategoryText as _Text on $projection.PurchasingDocumentCategory = _Text.PurchasingDocumentCategory
{
  key cast ( substring( domvalue_l, 1, 1 ) as ebstyp ) as PurchasingDocumentCategory,
      @Analytics.hidden: true      
      @Consumption.hidden: true 
      @Search.defaultSearchElement: true 
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                 as DomainValue, 
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]  
      _Text
}
where
      domname  = 'BSTYP'
  and as4local = 'A'
  and as4vers  = '0000'
```
