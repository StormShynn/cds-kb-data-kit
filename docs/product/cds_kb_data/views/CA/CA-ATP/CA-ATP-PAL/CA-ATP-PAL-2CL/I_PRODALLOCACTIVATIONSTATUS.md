---
name: I_PRODALLOCACTIVATIONSTATUS
description: "Prodallocactivationstatus"
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PRODALLOCACTIVATIONSTATUS

**Prodallocactivationstatus**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdAllocationActivationStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as prodallocationactivationstatus preserving type )` | `CHAR(2)` | Product Allocation Activation Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdAllocActivationStatusT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Activation Status' //same as DDL description
//@Analytics.dataCategory:#DIMENSION 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.representativeKey: 'ProdAllocationActivationStatus'
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IPAACTVTNSTATUS'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'ProdAllocationActivationStatus' 
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
define view I_ProdAllocActivationStatus 
   as select from dd07l
   association [0..*] to I_ProdAllocActivationStatusT as _Text 
      on $projection.ProdAllocationActivationStatus = _Text.ProdAllocationActivationStatus 
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 2 ) as prodallocationactivationstatus preserving type ) as ProdAllocationActivationStatus,

    _Text
}
where domname  = 'PRODALLOCATIONACTIVATIONSTATUS' 
  and as4local = 'A'
```
