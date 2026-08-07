---
name: I_SUPPLIERCONFIRMATIONCATEGORY
description: Supplierconfirmationcategory
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - supplier
  - component:MM
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERCONFIRMATIONCATEGORY

**Supplierconfirmationcategory**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierConfirmationCategory` | ✓ | |  | `ebtyp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SupplierConfCategoryText` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMSUPLRCONF'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Search.searchable: true
@ObjectModel.representativeKey : 'SupplierConfirmationCategory'
@Analytics.dataCategory: #DIMENSION 
@ObjectModel.sapObjectNodeType.name: 'SupplierConfirmationCategory'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE ]          
@Analytics.dataExtraction.enabled: true   
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION               
@EndUserText.label: 'Supplier Confirmation Category'
define view I_SupplierConfirmationCategory as select from t163e
   association [0..1] to I_SupplierConfCategoryText as _Text on _Text.SupplierConfirmationCategory = $projection.SupplierConfirmationCategory 
                                                             and _Text.Language                    = $session.system_language
{
    @Search: { defaultSearchElement: true }
    key ebtyp                           as SupplierConfirmationCategory,
    
    _Text
}
```
