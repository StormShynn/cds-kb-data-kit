---
name: I_PRODALLOCCHARCCSTRTSTATUST
description: Prodalloccharccstrtstatust
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - status
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_PRODALLOCCHARCCSTRTSTATUST

**Prodalloccharccstrtstatust**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProdAllocCharcConstraintStatus` | `cast ( substring( domvalue_l, 1, 2 ) as prodalloccharcconstraintstatus preserving type )` |
| key `Language` | `ddlanguage` |
| `ProdAllocCharcCstrtStatusDesc` | `cast( ddtext as prodalloccharccstrtstatusdesc preserving type )` |
| `_Language` | *Association* |
| `_ProdAllocCharcCstrtStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProdAllocCharcCstrtStatus` | `I_ProdAllocCharcCstrtStatus` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Characteristic Constraint Status - Text' //same as DDL description
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProdAllocCharcConstraintStatus'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'IPACHARCCSTRTST'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations: true
define view I_ProdAllocCharcCstrtStatusT
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_ProdAllocCharcCstrtStatus as _ProdAllocCharcCstrtStatus 
      on $projection.ProdAllocCharcConstraintStatus = _ProdAllocCharcCstrtStatus.ProdAllocCharcConstraintStatus
{
    @ObjectModel.foreignKey.association: '_ProdAllocCharcCstrtStatus'
    key cast ( substring( domvalue_l, 1, 2 ) as prodalloccharcconstraintstatus preserving type ) as ProdAllocCharcConstraintStatus,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as prodalloccharccstrtstatusdesc preserving type ) as ProdAllocCharcCstrtStatusDesc,

    _ProdAllocCharcCstrtStatus, //decomment only if no problems in analytics
    _Language 
}
where domname  = 'PRODALLOCCHARCCONSTRAINTSTATUS' 
  and as4local = 'A'
```
