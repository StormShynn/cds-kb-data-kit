---
name: I_FISCALYEARVARIANTTEXT
description: "Fiscalyearvarianttext"
app_component: BC-SRV-ASF-FYV-2CL
software_component: SAP_BASIS
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FiscalYearVariant` | ✓ | |  | `cast( t009t.periv as fis_periv preserving type )` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearVariantDescription` |  | |  | `cast(t009t.ltext as fis_periv_desc preserving type )` | `CHAR(30)` | Description of Fiscal Year Variant |
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
