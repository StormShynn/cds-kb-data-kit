---
name: I_ACCDOCITEMCATEGORY
description: Accdocitemcategory
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - item-level
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_ACCDOCITEMCATEGORY

**Accdocitemcategory**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AccountingDocumentItemCategory` | `cast(t8g02.linetype as fis_accdoc_itemcat preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccDocItemCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'IFIACCDOCITEMCAT'  
@Analytics: { dataCategory: #DIMENSION, 
              dataExtraction.enabled: true }
@EndUserText.label: 'Accounting Document Item Category'
@ObjectModel: { representativeKey: 'AccountingDocumentItemCategory',
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION,
                sapObjectNodeType.name: 'JournalEntryItemCategory' }                                
@Metadata.ignorePropagatedAnnotations: true 
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_AccDocItemCategory as select from t8g02
association[0..*] to I_AccDocItemCategoryText as _Text on $projection.AccountingDocumentItemCategory = _Text.AccountingDocumentItemCategory 
{ 
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  key cast(t8g02.linetype as fis_accdoc_itemcat preserving type ) as AccountingDocumentItemCategory,
  
  _Text
}
```
