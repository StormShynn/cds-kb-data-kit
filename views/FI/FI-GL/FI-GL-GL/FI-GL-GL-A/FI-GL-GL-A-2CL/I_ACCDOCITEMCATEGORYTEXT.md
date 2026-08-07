---
name: I_ACCDOCITEMCATEGORYTEXT
description: Accdocitemcategorytext
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
  - text-view
  - text
  - item-level
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_ACCDOCITEMCATEGORYTEXT

**Accdocitemcategorytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentItemCategory` | ✓ | |  | `cast(t8g02t.linetype as fis_accdoc_itemcat preserving type )` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `AccountingDocItemCategoryName` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataExtraction.enabled: true}
@EndUserText.label: 'Accounting Document Item Category - Text'
@ObjectModel: { dataCategory: #TEXT, 
                representativeKey: 'AccountingDocumentItemCategory',
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }     
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_AccDocItemCategoryText as select from t8g02t 
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{ 
  key cast(t8g02t.linetype as fis_accdoc_itemcat preserving type ) as AccountingDocumentItemCategory, 
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key t8g02t.langu as Language, 

  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  t8g02t.text as AccountingDocItemCategoryName,
  
  _Language
}
```
