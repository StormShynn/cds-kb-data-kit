---
name: I_PRODALLOCACTIVATIONSTATUST
description: Prodallocactivationstatust
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
# I_PRODALLOCACTIVATIONSTATUST

**Prodallocactivationstatust**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProdAllocationActivationStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as prodallocationactivationstatus preserving type )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `ProdAllocActivationStatusDesc` |  | |  | `cast( ddtext as prodallocactivationstatusdesc preserving type )` |
| `_Language` | | ✓ | | |
| `_ProdAllocActivationStatus` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProdAllocActivationStatus` | `I_ProdAllocActivationStatus` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Activation Status - Text' //same as DDL description
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProdAllocationActivationStatus'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'IPAACTVTNSTATUST'
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
define view I_ProdAllocActivationStatusT
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_ProdAllocActivationStatus as _ProdAllocActivationStatus 
      on $projection.ProdAllocationActivationStatus = _ProdAllocActivationStatus.ProdAllocationActivationStatus
{
    @ObjectModel.foreignKey.association: '_ProdAllocActivationStatus'
    key cast ( substring( domvalue_l, 1, 2 ) as prodallocationactivationstatus preserving type ) as ProdAllocationActivationStatus,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as prodallocactivationstatusdesc preserving type ) as ProdAllocActivationStatusDesc,

    _ProdAllocActivationStatus, //decomment only if no problems in analytics
    _Language 
}
where domname  = 'PRODALLOCATIONACTIVATIONSTATUS' 
  and as4local = 'A'
```
