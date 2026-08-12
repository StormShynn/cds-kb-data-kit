---
name: I_PRODALLOCCONSISTENCYSTATUS
description: "Prodallocconsistencystatus"
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
# I_PRODALLOCCONSISTENCYSTATUS

**Prodallocconsistencystatus**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdAllocConsistencyStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as prodallocconsistencystatus preserving type )` | `CHAR(2)` | Product Allocation Consistency Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdAllocConsistencyStatusT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Consistency Status' //same as DDL description
//@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProdAllocConsistencyStatus'
@ObjectModel.representativeKey: 'ProdAllocConsistencyStatus'
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IPACONSTCYSTS'
@ClientHandling.algorithm: #SESSION_VARIABLE
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
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_ProdAllocConsistencyStatus
   as select from dd07l
   association [0..*] to I_ProdAllocConsistencyStatusT as _Text
      on $projection.ProdAllocConsistencyStatus = _Text.ProdAllocConsistencyStatus
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 2 ) as prodallocconsistencystatus preserving type ) as ProdAllocConsistencyStatus,

    _Text
}
where domname  = 'PRODALLOCCONSISTENCYSTATUS'
  and as4local = 'A'
```
