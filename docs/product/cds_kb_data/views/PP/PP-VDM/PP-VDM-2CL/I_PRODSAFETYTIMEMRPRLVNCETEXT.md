---
name: I_PRODSAFETYTIMEMRPRLVNCETEXT
description: "Prodsafetytimemrprlvncetext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODSAFETYTIMEMRPRLVNCETEXT

**Prodsafetytimemrprlvncetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ProductSafetyTimeMRPRelevance` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 1) as pph_shflg preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `ProdSafetyTimeMRPRelevanceName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProdSafetyTimeMRPRelevance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ISTMRPRELVNTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductSafetyTimeMRPRelevance'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Safety Time MRP Relevance - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ProdSafetyTimeMRPRlvnceText
  as select from dd07t as t
  association to parent I_ProdSafetyTimeMRPRelevance as _ProdSafetyTimeMRPRelevance on $projection.ProductSafetyTimeMRPRelevance = _ProdSafetyTimeMRPRelevance.ProductSafetyTimeMRPRelevance
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  {
    @ObjectModel.foreignKey.association: '_Language'      
    @Semantics.language: true
    key t.ddlanguage as Language,
    @ObjectModel.foreignKey.association: '_ProdSafetyTimeMRPRelevance'  
    @ObjectModel.text.element: ['ProdSafetyTimeMRPRelevanceName']
    key cast(substring(t.domvalue_l, 1, 1) as pph_shflg preserving type) as ProductSafetyTimeMRPRelevance,
    @Analytics.hidden: true
    @Consumption.hidden: true
    t.domvalue_l     as DomainValue,
    @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}  
    @Semantics.text: true
    t.ddtext         as ProdSafetyTimeMRPRelevanceName,

    // Associations
    _ProdSafetyTimeMRPRelevance,
    _Language
  }
  where t.domname = 'SHFLG' and
        t.as4local = 'A'    and
        t.as4vers  = '0000';
```
