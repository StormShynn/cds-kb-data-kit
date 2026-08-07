---
name: I_FISCALYEARVARIANTTEXT
description: Fiscalyearvarianttext
app_component: BC-SRV-ASF-FYV-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - text-view
  - text
  - component:BC-SRV-ASF-FYV-2CL
  - lob:Basis Components
---
# I_FISCALYEARVARIANTTEXT

**Fiscalyearvarianttext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-FYV-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `FiscalYearVariant` | ✓ | |  | `cast( t009t.periv as fis_periv preserving type )` |  |  |
| `FiscalYearVariantDescription` |  | |  | `cast(t009t.ltext as fis_periv_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @VDM: {lifecycle.contract.type: #PUBLIC_LOCAL_API,
       viewType: #BASIC 
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataExtraction.enabled: true}
@Analytics.technicalName: 'IFIFYEARVARTXT'

@EndUserText.label: 'Fiscal Year Variant Text'
@ObjectModel: {dataCategory: #TEXT, 
               usageType: { serviceQuality: #A,
                            sizeCategory: #S,
                            dataClass: #CUSTOMIZING },
               modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
               supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY],
               representativeKey: 'FiscalYearVariant'                                     
}      
@Metadata.ignorePropagatedAnnotations: true                               
@Search.searchable: true
                                     
define view entity I_FiscalYearVariantText as select from t009t 

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{ 
@Semantics.language: true
key t009t.spras as Language,
key cast( t009t.periv as fis_periv preserving type ) as FiscalYearVariant,
@Search.defaultSearchElement: true 
@Search.fuzzinessThreshold: 0.8
@Search.ranking: #LOW
@Semantics.text: true
cast(t009t.ltext as fis_periv_desc preserving type ) as FiscalYearVariantDescription,

_Language

}
```
