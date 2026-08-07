---
name: I_PRODALLOCLIFECYCLESTATUS
description: Prodalloclifecyclestatus
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
# I_PRODALLOCLIFECYCLESTATUS

**Prodalloclifecyclestatus**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdAllocationLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as prodallocationlifecyclestatus preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdAllocLifecycleStatusT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Lifecycle Status' //same as DDL description
//@Analytics.dataCategory:#DIMENSION 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.representativeKey: 'ProdAllocationLifecycleStatus'
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IPALIFECYCLESTS'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'ProdAllocationLifecycleStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations: true
define view I_ProdAllocLifecycleStatus 
   as select from dd07l
   association [0..*] to I_ProdAllocLifecycleStatusT as _Text 
      on $projection.ProdAllocationLifecycleStatus = _Text.ProdAllocationLifecycleStatus 
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 2 ) as prodallocationlifecyclestatus preserving type ) as ProdAllocationLifecycleStatus,

    _Text
}
where domname  = 'PRODALLOCATIONLIFECYCLESTATUS' 
  and as4local = 'A'
```
