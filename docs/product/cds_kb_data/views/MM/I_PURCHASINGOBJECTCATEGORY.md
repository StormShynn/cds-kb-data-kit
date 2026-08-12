---
name: I_PURCHASINGOBJECTCATEGORY
description: "Purchasingobjectcategory"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
